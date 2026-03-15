export type AIFeature = 'spellCheck' | 'contextConnect' | 'contentGenerate'

export type AIProviderType = 'anthropic' | 'openai' | 'gemini'

export interface AIProvider {
  generate(system: string, prompt: string): Promise<string>
  generateStream(system: string, prompt: string): AsyncIterable<string>
}

export interface AIHandlerConfig {
  provider?: AIProviderType
  apiKey?: string
  model?: string
}

export interface AIRequestBody {
  feature: AIFeature
  content: string
  context?: string
  selection?: string
  language?: string
  instructions?: string
  stream?: boolean
}

export interface PromptPair {
  system: string
  user: string
}
