import { useState, useCallback } from 'react'
import { useBoatEditorContext } from '../providers/BoatEditorProvider'
import type { Poll, PollResults } from '../types/poll'

export interface UsePollReturn {
  loading: boolean
  error: string | null
  createPoll: (data: CreatePollData) => Promise<Poll>
  getPoll: (pollId: string) => Promise<Poll & { hasVoted: boolean; userVotes: string[] }>
  vote: (pollId: string, optionIds: string[]) => Promise<void>
  getResults: (pollId: string) => Promise<PollResults>
}

export interface CreatePollData {
  title: string
  options: string[]
  allowMultiple?: boolean
  isAnonymous?: boolean
  resultVisibility?: 'AFTER_VOTE' | 'AFTER_END' | 'ALWAYS'
  endDate?: string | null
  maxParticipants?: number | null
}

export function usePoll(): UsePollReturn {
  const { pollEndpoint } = useBoatEditorContext()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const request = useCallback(
    async <T>(path: string, method: string, body?: unknown): Promise<T> => {
      if (!pollEndpoint) throw new Error('투표 엔드포인트가 설정되지 않았습니다.')
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`${pollEndpoint}${path}`, {
          method,
          headers: body ? { 'Content-Type': 'application/json' } : undefined,
          body: body ? JSON.stringify(body) : undefined,
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || `요청 실패 (${res.status})`)
        return data as T
      } catch (err) {
        const msg = err instanceof Error ? err.message : '투표 요청 실패'
        setError(msg)
        throw err
      } finally {
        setLoading(false)
      }
    },
    [pollEndpoint],
  )

  const createPoll = useCallback(
    (data: CreatePollData) => request<Poll>('', 'POST', data),
    [request],
  )

  const getPoll = useCallback(
    (pollId: string) =>
      request<Poll & { hasVoted: boolean; userVotes: string[] }>(`/${pollId}`, 'GET'),
    [request],
  )

  const vote = useCallback(
    async (pollId: string, optionIds: string[]) => {
      await request(`/${pollId}/vote`, 'POST', { optionIds })
    },
    [request],
  )

  const getResults = useCallback(
    (pollId: string) => request<PollResults>(`/${pollId}/results`, 'GET'),
    [request],
  )

  return { loading, error, createPoll, getPoll, vote, getResults }
}
