import { createPollHandlers } from 'boat-editor-server'
import { prisma } from '@/lib/prisma'

const handlers = createPollHandlers({
  prisma: prisma as never,
  getCurrentUserId: async () => 'demo-user-1',
})

export async function GET(req: Request) {
  return handlers.handleRequest(req)
}

export async function POST(req: Request) {
  return handlers.handleRequest(req)
}
