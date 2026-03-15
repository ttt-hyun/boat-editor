import type { AIRequestBody, PromptPair } from '../types'

export function buildSpellCheckPrompt(req: AIRequestBody): PromptPair {
  const lang = req.language || 'ko'
  const text = req.selection || req.content

  if (lang === 'ko') {
    return {
      system:
        '당신은 한국어 맞춤법 교정 전문가입니다. 주어진 텍스트의 맞춤법, 문법, 띄어쓰기 오류를 교정하세요. 교정된 텍스트만 출력하세요. 다른 설명이나 부가 텍스트 없이 교정 결과만 응답합니다.',
      user: text,
    }
  }

  return {
    system: `You are a ${lang} proofreader. Fix spelling, grammar, and punctuation errors in the given text. Return ONLY the corrected text without any explanation.`,
    user: text,
  }
}
