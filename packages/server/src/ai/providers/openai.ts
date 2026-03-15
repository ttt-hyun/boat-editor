import type { AIProvider } from '../types'

export async function createOpenAIProvider(
  apiKey: string,
  model?: string,
): Promise<AIProvider> {
  const { default: OpenAI } = await import('openai')
  const client = new OpenAI({ apiKey })
  const modelId = model || 'gpt-4o'

  return {
    async generate(system, prompt) {
      const res = await client.chat.completions.create({
        model: modelId,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: prompt },
        ],
      })
      return res.choices[0]?.message?.content || ''
    },

    async *generateStream(system, prompt) {
      const stream = await client.chat.completions.create({
        model: modelId,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: prompt },
        ],
        stream: true,
      })
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content
        if (text) yield text
      }
    },
  }
}
