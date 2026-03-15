import type { AIProvider } from '../types'

export async function createAnthropicProvider(
  apiKey: string,
  model?: string,
): Promise<AIProvider> {
  const { default: Anthropic } = await import('@anthropic-ai/sdk')
  const client = new Anthropic({ apiKey })
  const modelId = model || 'claude-sonnet-4-20250514'

  return {
    async generate(system, prompt) {
      const msg = await client.messages.create({
        model: modelId,
        max_tokens: 4096,
        system,
        messages: [{ role: 'user', content: prompt }],
      })
      const block = msg.content[0]
      return block.type === 'text' ? block.text : ''
    },

    async *generateStream(system, prompt) {
      const stream = await client.messages.create({
        model: modelId,
        max_tokens: 4096,
        system,
        messages: [{ role: 'user', content: prompt }],
        stream: true,
      })
      for await (const event of stream as AsyncIterable<Record<string, unknown>>) {
        if (
          event.type === 'content_block_delta' &&
          (event.delta as Record<string, unknown>)?.type === 'text_delta'
        ) {
          yield (event.delta as Record<string, string>).text
        }
      }
    },
  }
}
