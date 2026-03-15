import type { PollResults as PollResultsType } from '../../types/poll'

interface PollResultsViewProps {
  title: string
  results: PollResultsType
  onRevote?: () => void
}

export function PollResultsView({ results, onRevote }: PollResultsViewProps) {
  return (
    <div className="boat-poll-panel-inner">
      <div className="boat-poll-compact-bars">
        {results.options.map((opt) => {
          const isVoted = results.userVotes?.includes(opt.id)
          return (
            <div key={opt.id} className="boat-poll-compact-bar">
              <div className="boat-poll-compact-bar-info">
                <span>{isVoted ? '✔ ' : ''}{opt.text}</span>
                <span className="boat-poll-compact-bar-pct">{opt.voteCount}표 · {opt.percentage}%</span>
              </div>
              <div className="boat-poll-compact-bar-track">
                <div
                  className={`boat-poll-compact-bar-fill ${isVoted ? 'voted' : ''}`}
                  style={{ width: `${opt.percentage}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
      {results.hasVoted && onRevote && (
        <div className="boat-poll-compact-foot">
          <button type="button" className="boat-poll-compact-btn-cancel" onClick={onRevote}>
            다시 투표
          </button>
        </div>
      )}
    </div>
  )
}
