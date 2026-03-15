import { createAnthropicProvider } from './anthropic'
import { createOpenAIProvider } from './openai'
import { createGeminiProvider } from './gemini'
import type { AIProvider, AIProviderType, AIHandlerConfig } from '../types'

function getEnvKey(provider: AIProviderType): string | undefined {
  switch (provider) {
    case 'anthropic':
      return process.env.ANTHROPIC_API_KEY
    case 'openai':
      return process.env.OPENAI_API_KEY
    case 'gemini':
      return process.env.GEMINI_API_KEY
  }
}

function createByType(
  type: AIProviderType,
  apiKey: string,
  model?: string,
): Promise<AIProvider> {
  switch (type) {
    case 'anthropic':
      return createAnthropicProvider(apiKey, model)
    case 'openai':
      return createOpenAIProvider(apiKey, model)
    case 'gemini':
      return createGeminiProvider(apiKey, model)
  }
}

export async function resolveProvider(
  config: AIHandlerConfig = {},
): Promise<AIProvider> {
  const { provider, apiKey, model } = config

  if (provider) {
    const key = apiKey || getEnvKey(provider)
    if (!key) {
      throw new Error(`${provider} API 키가 설정되지 않았습니다.`)
    }
    return createByType(provider, key, model)
  }

  // Auto-detect: ANTHROPIC > OPENAI > GEMINI
  const anthropicKey = process.env.ANTHROPIC_API_KEY
  if (anthropicKey) return createAnthropicProvider(anthropicKey, model)

  const openaiKey = process.env.OPENAI_API_KEY
  if (openaiKey) return createOpenAIProvider(openaiKey, model)

  const geminiKey = process.env.GEMINI_API_KEY
  if (geminiKey) return createGeminiProvider(geminiKey, model)

  throw new Error(
    'AI 프로바이더를 찾을 수 없습니다. ANTHROPIC_API_KEY, OPENAI_API_KEY, 또는 GEMINI_API_KEY를 설정하세요.',
  )
}
