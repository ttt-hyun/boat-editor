import { useState, useCallback } from 'react'
import { useBoatEditorContext } from '../providers/BoatEditorProvider'
import type { AIFeature, AIRequest, AIResponse } from '../types/ai'

export interface UseAIReturn {
  loading: boolean
  error: string | null
  spellCheck: (text: string) => Promise<string | null>
  contextConnect: (before: string, after: string) => Promise<string | null>
  contentGenerate: (
    instructions: string,
    context?: string,
  ) => Promise<string | null>
  generateStream: (
    instructions: string,
    context?: string,
    onChunk?: (text: string) => void,
  ) => Promise<void>
}

export function useAI(): UseAIReturn | null {
  const { aiEndpoint, aiEnabled } = useBoatEditorContext()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const request = useCallback(
    async (body: AIRequest & { stream?: boolean }): Promise<AIResponse> => {
      if (!aiEndpoint) throw new Error('AI 엔드포인트가 설정되지 않았습니다.')

      const res = await fetch(aiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(
          (data as Record<string, string>).error ||
            `AI 요청 실패 (${res.status})`,
        )
      }

      return res.json()
    },
    [aiEndpoint],
  )

  const spellCheck = useCallback(
    async (text: string): Promise<string | null> => {
      setLoading(true)
      setError(null)
      try {
        const res = await request({
          feature: 'spellCheck',
          content: text,
          selection: text,
        })
        return res.result
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'AI 요청 실패'
        setError(msg)
        return null
      } finally {
        setLoading(false)
      }
    },
    [request],
  )

  const contextConnect = useCallback(
    async (before: string, after: string): Promise<string | null> => {
      setLoading(true)
      setError(null)
      try {
        const res = await request({
          feature: 'contextConnect',
          content: before,
          context: after,
        })
        return res.result
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'AI 요청 실패'
        setError(msg)
        return null
      } finally {
        setLoading(false)
      }
    },
    [request],
  )

  const contentGenerate = useCallback(
    async (
      instructions: string,
      context?: string,
    ): Promise<string | null> => {
      setLoading(true)
      setError(null)
      try {
        const res = await request({
          feature: 'contentGenerate',
          content: '',
          instructions,
          context,
        })
        return res.result
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'AI 요청 실패'
        setError(msg)
        return null
      } finally {
        setLoading(false)
      }
    },
    [request],
  )

  const generateStream = useCallback(
    async (
      instructions: string,
      context?: string,
      onChunk?: (text: string) => void,
    ): Promise<void> => {
      if (!aiEndpoint) return
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(aiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            feature: 'contentGenerate' as AIFeature,
            content: '',
            instructions,
            context,
            stream: true,
          }),
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(
            (data as Record<string, string>).error ||
              `AI 요청 실패 (${res.status})`,
          )
        }

        const reader = res.body?.getReader()
        if (!reader) return

        const decoder = new TextDecoder()
        let buffer = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue
            const payload = line.slice(6).trim()
            if (payload === '[DONE]') return
            try {
              const parsed = JSON.parse(payload) as Record<string, string>
              if (parsed.error) throw new Error(parsed.error)
              if (parsed.text) onChunk?.(parsed.text)
            } catch {
              // skip malformed chunks
            }
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'AI 요청 실패'
        setError(msg)
      } finally {
        setLoading(false)
      }
    },
    [aiEndpoint],
  )

  if (!aiEnabled) return null

  return {
    loading,
    error,
    spellCheck,
    contextConnect,
    contentGenerate,
    generateStream,
  }
}
