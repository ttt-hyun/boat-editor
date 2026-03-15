import type { AIRequestBody, PromptPair } from '../types'

export function buildContentGeneratePrompt(req: AIRequestBody): PromptPair {
  const lang = req.language || 'ko'
  const instructions = req.instructions || ''
  const context = req.context || ''

  if (lang === 'ko') {
    return {
      system:
        '당신은 콘텐츠 작성 전문가입니다. 주어진 지시사항에 따라 콘텐츠를 작성하세요. HTML 태그 없이 일반 텍스트로 작성합니다.',
      user: [
        instructions && `지시사항: ${instructions}`,
        context && `맥락:\n${context}`,
        req.content && `현재 내용:\n${req.content}`,
      ]
        .filter(Boolean)
        .join('\n\n'),
    }
  }

  return {
    system:
      'You are a content writing expert. Write content following the given instructions. Use plain text without HTML tags.',
    user: [
      instructions && `Instructions: ${instructions}`,
      context && `Context:\n${context}`,
      req.content && `Current content:\n${req.content}`,
    ]
      .filter(Boolean)
      .join('\n\n'),
  }
}
