import type { AIRequestBody, PromptPair } from '../types'

export function buildContextConnectPrompt(req: AIRequestBody): PromptPair {
  const lang = req.language || 'ko'

  if (lang === 'ko') {
    return {
      system:
        '당신은 글쓰기 전문가입니다. 두 문단 사이에 자연스러운 연결 문장을 작성하세요. 연결 문장만 출력하세요. 1~2문장으로 간결하게 작성합니다.',
      user: `앞 문단:\n${req.content}\n\n뒤 문단:\n${req.context || ''}`,
    }
  }

  return {
    system:
      'You are a writing expert. Write a natural transition sentence between two paragraphs. Return ONLY the transition sentence(s), 1-2 sentences.',
    user: `Previous paragraph:\n${req.content}\n\nNext paragraph:\n${req.context || ''}`,
  }
}
