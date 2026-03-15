import { z } from 'zod'
import type { AIHandlerConfig, AIProvider, AIRequestBody } from './types'
import { resolveProvider } from './providers/auto-detect'
import { buildSpellCheckPrompt } from './prompts/spell-check'
import { buildContextConnectPrompt } from './prompts/context-connect'
import { buildContentGeneratePrompt } from './prompts/content-generate'

const aiRequestSchema = z.object({
  feature: z.enum(['spellCheck', 'contextConnect', 'contentGenerate']),
  content: z.string(),
  context: z.string().optional(),
  selection: z.string().optional(),
  language: z.string().optional().default('ko'),
  instructions: z.string().optional(),
  stream: z.boolean().optional().default(false),
})

function buildPrompt(req: AIRequestBody) {
  switch (req.feature) {
    case 'spellCheck':
      return buildSpellCheckPrompt(req)
    case 'contextConnect':
      return buildContextConnectPrompt(req)
    case 'contentGenerate':
      return buildContentGeneratePrompt(req)
  }
}

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

export interface AIHandler {
  handleRequest: (req: Request) => Promise<Response>
}

export function createAIHandler(config: AIHandlerConfig = {}): AIHandler {
  let providerPromise: Promise<AIProvider> | null = null

  function getProvider() {
    if (!providerPromise) {
      providerPromise = resolveProvider(config)
    }
    return providerPromise
  }

  async function handleRequest(req: Request): Promise<Response> {
    if (req.method !== 'POST') {
      return errorResponse('Method not allowed', 405)
    }

    let body: unknown
    try {
      body = await req.json()
    } catch {
      return errorResponse('Invalid JSON', 400)
    }

    const parsed = aiRequestSchema.safeParse(body)
    if (!parsed.success) {
      return errorResponse(parsed.error.issues[0].message, 400)
    }

    const data = parsed.data as AIRequestBody
    const { system, user } = buildPrompt(data)

    let provider: AIProvider
    try {
      provider = await getProvider()
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'AI 프로바이더 초기화 실패'
      return errorResponse(message, 500)
    }

    try {
      if (data.stream) {
        const readable = new ReadableStream({
          async start(controller) {
            const encoder = new TextEncoder()
            try {
              for await (const chunk of provider.generateStream(system, user)) {
                controller.enqueue(
                  encoder.encode(
                    `data: ${JSON.stringify({ text: chunk })}\n\n`,
                  ),
                )
              }
              controller.enqueue(encoder.encode('data: [DONE]\n\n'))
            } catch (err) {
              const msg =
                err instanceof Error ? err.message : 'AI 생성 오류'
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ error: msg })}\n\n`,
                ),
              )
            } finally {
              controller.close()
            }
          },
        })

        return new Response(readable, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
          },
        })
      }

      const result = await provider.generate(system, user)
      return jsonResponse({ result, feature: data.feature })
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'AI 처리 중 오류가 발생했습니다.'
      return errorResponse(message, 500)
    }
  }

  return { handleRequest }
}
