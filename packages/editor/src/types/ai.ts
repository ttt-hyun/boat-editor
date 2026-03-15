export type AIFeature = 'spellCheck' | 'contextConnect' | 'contentGenerate'

export interface AIRequest {
  feature: AIFeature
  content: string
  context?: string
  selection?: string
  language?: string
  instructions?: string
}

export interface AIResponse {
  result: string
  feature: AIFeature
}
