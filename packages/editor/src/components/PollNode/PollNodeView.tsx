import { useState, useEffect, useCallback } from 'react'
import { NodeViewWrapper } from '@tiptap/react'
import { ChevronDown, ChevronUp, BarChart3 } from 'lucide-react'
import { useBoatEditorContext } from '../../providers/BoatEditorProvider'
import { PollCreator, type PollCreateData } from './PollCreator'
import { PollVoting } from './PollVoting'
import { PollResultsView } from './PollResults'
import type { Poll, PollResults } from '../../types/poll'

type Phase = 'creating' | 'ready' | 'loading' | 'error'

interface PollNodeViewProps {
  node: { attrs: Record<string, unknown> }
  updateAttributes: (attrs: Record<string, unknown>) => void
  deleteNode: () => void
}

export function PollNodeView({
  node,
  updateAttributes,
  deleteNode,
}: PollNodeViewProps) {
  const { pollEndpoint, currentUserId } = useBoatEditorContext()
  const pollId = node.attrs.pollId as string | undefined
  const pollTitle = node.attrs.title as string | undefined

  const [phase, setPhase] = useState<Phase>(pollId ? 'loading' : 'creating')
  const [expanded, setExpanded] = useState(false)
  const [poll, setPoll] = useState<Poll | null>(null)
  const [results, setResults] = useState<PollResults | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPoll = useCallback(async () => {
    if (!pollEndpoint || !pollId) return
    try {
      const res = await fetch(`${pollEndpoint}/${pollId}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setPoll(data as Poll)
      setHasVoted(!!data.hasVoted)
      if (data.hasVoted) {
        try {
          const rRes = await fetch(`${pollEndpoint}/${pollId}/results`)
          if (rRes.ok) {
            setResults(await rRes.json() as PollResults)
          }
        } catch { /* ignore */ }
      }
      setPhase('ready')
    } catch (err) {
      setError(err instanceof Error ? err.message : '투표를 불러올 수 없습니다.')
      setPhase('error')
    }
  }, [pollEndpoint, pollId])

  useEffect(() => {
    if (pollId && phase === 'loading') fetchPoll()
  }, [pollId, phase, fetchPoll])

  const handleCreate = async (data: PollCreateData) => {
    if (!pollEndpoint) return
    setLoading(true)
    try {
      const res = await fetch(pollEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const created = await res.json()
      if (!res.ok) throw new Error(created.error)
      updateAttributes({ pollId: created.id, title: created.title })
      setPoll(created as Poll)
      setPhase('ready')
    } catch (err) {
      setError(err instanceof Error ? err.message : '투표 생성 실패')
    } finally {
      setLoading(false)
    }
  }

  const handleVote = async (optionIds: string[]) => {
    if (!pollEndpoint || !pollId) return
    setLoading(true)
    try {
      const res = await fetch(`${pollEndpoint}/${pollId}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ optionIds }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error)
      }
      setHasVoted(true)
      const rRes = await fetch(`${pollEndpoint}/${pollId}/results`)
      if (rRes.ok) {
        setResults(await rRes.json() as PollResults)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '투표 실패')
    } finally {
      setLoading(false)
    }
  }

  const handleRevote = () => {
    setHasVoted(false)
    setResults(null)
  }

  // Creating phase — show creator form
  if (phase === 'creating') {
    return (
      <NodeViewWrapper>
        <div className="boat-poll-node-wrap">
          <PollCreator onSubmit={handleCreate} onCancel={deleteNode} />
        </div>
      </NodeViewWrapper>
    )
  }

  // Packed chip — default view
  const title = poll?.title || pollTitle || '투표'
  const optionCount = poll?.options?.length ?? 0
  const totalVotes = results?.totalVotes ?? 0

  return (
    <NodeViewWrapper>
      <div className="boat-poll-node-wrap" data-poll-id={pollId}>
        {/* Packed chip — always visible */}
        <button
          type="button"
          className={`boat-poll-chip ${expanded ? 'expanded' : ''}`}
          onClick={() => phase === 'ready' && setExpanded(!expanded)}
        >
          <BarChart3 className="boat-poll-chip-icon" />
          <span className="boat-poll-chip-title">{title}</span>
          {optionCount > 0 && (
            <span className="boat-poll-chip-meta">{optionCount}개 항목</span>
          )}
          {totalVotes > 0 && (
            <span className="boat-poll-chip-meta">{totalVotes}표</span>
          )}
          {hasVoted && <span className="boat-poll-chip-voted">투표완료</span>}
          {phase === 'loading' && <span className="boat-poll-chip-meta">로딩...</span>}
          {phase === 'error' && <span className="boat-poll-chip-error">오류</span>}
          {phase === 'ready' && (
            expanded ? <ChevronUp className="boat-poll-chip-arrow" /> : <ChevronDown className="boat-poll-chip-arrow" />
          )}
        </button>

        {/* Expanded panel */}
        {expanded && phase === 'ready' && poll && (
          <div className="boat-poll-panel">
            {hasVoted && results ? (
              <PollResultsView
                title={poll.title}
                results={results}
                onRevote={currentUserId ? handleRevote : undefined}
              />
            ) : (
              <PollVoting
                poll={poll}
                allowMultiple={poll.allowMultiple}
                onVote={handleVote}
                loading={loading}
              />
            )}
          </div>
        )}

        {expanded && phase === 'error' && (
          <div className="boat-poll-panel">
            <div className="boat-poll-compact-error">
              {error}
              <button
                type="button"
                className="boat-poll-compact-btn-cancel"
                onClick={() => { setPhase('loading'); setError(null); fetchPoll() }}
              >
                다시 시도
              </button>
            </div>
          </div>
        )}
      </div>
    </NodeViewWrapper>
  )
}
