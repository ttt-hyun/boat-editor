import type { AIProvider } from '../types'

export async function createGeminiProvider(
  apiKey: string,
  model?: string,
): Promise<AIProvider> {
  const { GoogleGenerativeAI } = await import('@google/generative-ai')
  const genAI = new GoogleGenerativeAI(apiKey)
  const modelId = model || 'gemini-2.0-flash'

  return {
    async generate(system, prompt) {
      const m = genAI.getGenerativeModel({
        model: modelId,
        systemInstruction: system,
      })
      const result = await m.generateContent(prompt)
      return result.response.text()
    },

    async *generateStream(system, prompt) {
      const m = genAI.getGenerativeModel({
        model: modelId,
        systemInstruction: system,
      })
      const result = await m.generateContentStream(prompt)
      for await (const chunk of result.stream) {
        yield chunk.text()
      }
    },
  }
}
