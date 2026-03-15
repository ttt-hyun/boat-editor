import { useState } from 'react'
import type { Poll } from '../../types/poll'

interface PollVotingProps {
  poll: Poll
  allowMultiple: boolean
  onVote: (optionIds: string[]) => void
  loading: boolean
}

export function PollVoting({ poll, allowMultiple, onVote, loading }: PollVotingProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (optionId: string) => {
    const next = new Set(selected)
    if (next.has(optionId)) {
      next.delete(optionId)
    } else {
      if (!allowMultiple) next.clear()
      next.add(optionId)
    }
    setSelected(next)
  }

  const isEnded = poll.endDate ? new Date(poll.endDate) < new Date() : false

  return (
    <div className="boat-poll-panel-inner">
      {isEnded && <div className="boat-poll-chip-error" style={{ marginBottom: 4 }}>종료됨</div>}
      {allowMultiple && <div className="boat-poll-chip-meta" style={{ marginBottom: 4 }}>복수선택 가능</div>}
      <div className="boat-poll-compact-options">
        {poll.options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`boat-poll-compact-vote-opt ${selected.has(opt.id) ? 'selected' : ''}`}
            onClick={() => !isEnded && toggle(opt.id)}
            disabled={isEnded}
          >
            <span className="boat-poll-compact-opt-dot">
              {selected.has(opt.id) ? '●' : '○'}
            </span>
            {opt.text}
          </button>
        ))}
      </div>
      {!isEnded && (
        <div className="boat-poll-compact-foot">
          <button
            type="button"
            className="boat-poll-compact-btn-submit"
            disabled={selected.size === 0 || loading}
            onClick={() => onVote(Array.from(selected))}
          >
            {loading ? '투표 중...' : '투표하기'}
          </button>
        </div>
      )}
    </div>
  )
}
