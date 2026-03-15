import { z } from 'zod'

// Generic Prisma-like interface so we don't depend on @prisma/client
interface PrismaLike {
  boatPoll: {
    create: (args: Record<string, unknown>) => Promise<Record<string, unknown>>
    findUnique: (args: Record<string, unknown>) => Promise<Record<string, unknown> | null>
    findMany: (args: Record<string, unknown>) => Promise<Record<string, unknown>[]>
  }
  boatPollOption: {
    findMany: (args: Record<string, unknown>) => Promise<Record<string, unknown>[]>
  }
  boatPollVote: {
    create: (args: Record<string, unknown>) => Promise<Record<string, unknown>>
    findMany: (args: Record<string, unknown>) => Promise<Record<string, unknown>[]>
    count: (args: Record<string, unknown>) => Promise<number>
    deleteMany: (args: Record<string, unknown>) => Promise<unknown>
  }
}

export interface PollHandlersConfig {
  prisma: PrismaLike
  getCurrentUserId: (req: Request) => Promise<string | null>
}

const createPollSchema = z.object({
  title: z.string().min(1).max(200),
  options: z.array(z.string().min(1).max(200)).min(2).max(20),
  allowMultiple: z.boolean().optional().default(false),
  isAnonymous: z.boolean().optional().default(false),
  resultVisibility: z.enum(['AFTER_VOTE', 'AFTER_END', 'ALWAYS']).optional().default('AFTER_VOTE'),
  endDate: z.string().nullable().optional(),
  maxParticipants: z.number().int().positive().nullable().optional(),
})

const voteSchema = z.object({
  optionIds: z.array(z.string().uuid()).min(1),
})

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function errorResponse(error: string, status: number) {
  return new Response(JSON.stringify({ error }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export interface PollHandlers {
  createPoll: (req: Request) => Promise<Response>
  getPoll: (req: Request, pollId: string) => Promise<Response>
  vote: (req: Request, pollId: string) => Promise<Response>
  getResults: (req: Request, pollId: string) => Promise<Response>
  handleRequest: (req: Request) => Promise<Response>
}

export function createPollHandlers(config: PollHandlersConfig): PollHandlers {
  const { prisma, getCurrentUserId } = config

  async function createPoll(req: Request): Promise<Response> {
    const userId = await getCurrentUserId(req)
    if (!userId) return errorResponse('인증이 필요합니다.', 401)

    const body = await req.json()
    const parsed = createPollSchema.safeParse(body)
    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400)
    }

    const { title, options, allowMultiple, isAnonymous, resultVisibility, endDate, maxParticipants } = parsed.data

    const poll = await prisma.boatPoll.create({
      data: {
        title,
        allowMultiple,
        isAnonymous,
        resultVisibility,
        endDate: endDate ? new Date(endDate) : null,
        maxParticipants: maxParticipants ?? null,
        createdById: userId,
        options: {
          create: options.map((text, i) => ({ text, order: i })),
        },
      },
      include: { options: { orderBy: { order: 'asc' } } },
    })

    return jsonResponse(poll, 201)
  }

  async function getPoll(req: Request, pollId: string): Promise<Response> {
    const userId = await getCurrentUserId(req)

    const poll = await prisma.boatPoll.findUnique({
      where: { id: pollId },
      include: { options: { orderBy: { order: 'asc' } } },
    })

    if (!poll) return errorResponse('투표를 찾을 수 없습니다.', 404)

    // Check if user has voted
    let hasVoted = false
    let userVotes: string[] = []
    if (userId) {
      const votes = await prisma.boatPollVote.findMany({
        where: { pollId, voterId: userId },
      }) as Array<{ optionId: string }>
      hasVoted = votes.length > 0
      userVotes = votes.map((v) => v.optionId)
    }

    return jsonResponse({ ...poll, hasVoted, userVotes })
  }

  async function vote(req: Request, pollId: string): Promise<Response> {
    const userId = await getCurrentUserId(req)
    if (!userId) return errorResponse('인증이 필요합니다.', 401)

    const body = await req.json()
    const parsed = voteSchema.safeParse(body)
    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400)
    }

    const { optionIds } = parsed.data

    // Fetch poll
    const poll = await prisma.boatPoll.findUnique({
      where: { id: pollId },
      include: { options: true },
    }) as Record<string, unknown> | null

    if (!poll) return errorResponse('투표를 찾을 수 없습니다.', 404)

    // Check end date
    if (poll.endDate && new Date(poll.endDate as string) < new Date()) {
      return errorResponse('투표가 종료되었습니다.', 400)
    }

    // Check max participants
    if (poll.maxParticipants) {
      const participantVotes = await prisma.boatPollVote.findMany({
        where: { pollId },
      }) as Array<{ voterId: string }>
      const uniqueVoters = new Set(participantVotes.map((v) => v.voterId))
      if (!uniqueVoters.has(userId) && uniqueVoters.size >= (poll.maxParticipants as number)) {
        return errorResponse('참여자 수 제한에 도달했습니다.', 400)
      }
    }

    // Validate multiple selection
    if (!poll.allowMultiple && optionIds.length > 1) {
      return errorResponse('이 투표는 단일 선택만 가능합니다.', 400)
    }

    // Validate option IDs belong to this poll
    const pollOptions = poll.options as Array<{ id: string }>
    const validOptionIds = new Set(pollOptions.map((o) => o.id))
    for (const optionId of optionIds) {
      if (!validOptionIds.has(optionId)) {
        return errorResponse('유효하지 않은 옵션입니다.', 400)
      }
    }

    // Remove existing votes and create new ones
    await prisma.boatPollVote.deleteMany({
      where: { pollId, voterId: userId },
    })

    for (const optionId of optionIds) {
      await prisma.boatPollVote.create({
        data: { pollId, optionId, voterId: userId },
      })
    }

    return jsonResponse({ success: true })
  }

  async function getResults(req: Request, pollId: string): Promise<Response> {
    const userId = await getCurrentUserId(req)

    const poll = await prisma.boatPoll.findUnique({
      where: { id: pollId },
      include: { options: { orderBy: { order: 'asc' } } },
    }) as Record<string, unknown> | null

    if (!poll) return errorResponse('투표를 찾을 수 없습니다.', 404)

    // Check visibility
    const visibility = poll.resultVisibility as string
    let hasVoted = false
    if (userId) {
      const userVoteCount = await prisma.boatPollVote.count({
        where: { pollId, voterId: userId },
      })
      hasVoted = userVoteCount > 0
    }

    const isEnded = poll.endDate ? new Date(poll.endDate as string) < new Date() : false

    if (visibility === 'AFTER_VOTE' && !hasVoted) {
      return errorResponse('투표 후 결과를 확인할 수 있습니다.', 403)
    }
    if (visibility === 'AFTER_END' && !isEnded) {
      return errorResponse('투표 종료 후 결과를 확인할 수 있습니다.', 403)
    }

    // Get vote counts per option
    const allVotes = await prisma.boatPollVote.findMany({
      where: { pollId },
    }) as Array<{ optionId: string; voterId: string }>

    const voteCounts = new Map<string, number>()
    for (const v of allVotes) {
      voteCounts.set(v.optionId, (voteCounts.get(v.optionId) ?? 0) + 1)
    }

    const totalVotes = allVotes.length
    const pollOptions = poll.options as Array<{ id: string; text: string }>
    const options = pollOptions.map((opt) => {
      const count = voteCounts.get(opt.id) ?? 0
      return {
        id: opt.id,
        text: opt.text,
        voteCount: count,
        percentage: totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0,
      }
    })

    // User's votes
    let userVotes: string[] = []
    if (userId) {
      userVotes = allVotes
        .filter((v) => v.voterId === userId)
        .map((v) => v.optionId)
    }

    return jsonResponse({
      pollId,
      totalVotes,
      options,
      hasVoted,
      userVotes,
    })
  }

  // Catch-all router: parses URL path to dispatch
  async function handleRequest(req: Request): Promise<Response> {
    const url = new URL(req.url)
    const segments = url.pathname.split('/').filter(Boolean)

    // Find "poll" segment and get remaining path
    const pollIdx = segments.lastIndexOf('poll')
    if (pollIdx === -1) return errorResponse('Not found', 404)

    const rest = segments.slice(pollIdx + 1)

    // POST /poll — create poll
    if (req.method === 'POST' && rest.length === 0) {
      return createPoll(req)
    }

    const pollId = rest[0]
    if (!pollId) return errorResponse('Not found', 404)

    // GET /poll/:pollId — get poll
    if (req.method === 'GET' && rest.length === 1) {
      return getPoll(req, pollId)
    }

    // POST /poll/:pollId/vote — vote
    if (req.method === 'POST' && rest[1] === 'vote') {
      return vote(req, pollId)
    }

    // GET /poll/:pollId/results — get results
    if (req.method === 'GET' && rest[1] === 'results') {
      return getResults(req, pollId)
    }

    return errorResponse('Not found', 404)
  }

  return { createPoll, getPoll, vote, getResults, handleRequest }
}
