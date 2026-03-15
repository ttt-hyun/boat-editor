import { useState } from 'react'
import { Plus, X, ChevronDown, ChevronUp } from 'lucide-react'
import type { ResultVisibility } from '../../types/poll'

export interface PollCreatorProps {
  onSubmit: (data: PollCreateData) => void
  onCancel: () => void
}

export interface PollCreateData {
  title: string
  options: string[]
  allowMultiple: boolean
  isAnonymous: boolean
  resultVisibility: ResultVisibility
  endDate: string | null
  maxParticipants: number | null
}

export function PollCreator({ onSubmit, onCancel }: PollCreatorProps) {
  const [title, setTitle] = useState('')
  const [options, setOptions] = useState(['', ''])
  const [showSettings, setShowSettings] = useState(false)
  const [allowMultiple, setAllowMultiple] = useState(false)
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [resultVisibility, setResultVisibility] = useState<ResultVisibility>('AFTER_VOTE')
  const [endDate, setEndDate] = useState('')
  const [maxParticipants, setMaxParticipants] = useState('')

  const addOption = () => {
    if (options.length < 10) setOptions([...options, ''])
  }

  const removeOption = (index: number) => {
    if (options.length > 2) setOptions(options.filter((_, i) => i !== index))
  }

  const updateOption = (index: number, value: string) => {
    const next = [...options]
    next[index] = value
    setOptions(next)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validOptions = options.filter((o) => o.trim())
    if (!title.trim() || validOptions.length < 2) return
    onSubmit({
      title: title.trim(),
      options: validOptions,
      allowMultiple,
      isAnonymous,
      resultVisibility,
      endDate: endDate || null,
      maxParticipants: maxParticipants ? parseInt(maxParticipants, 10) : null,
    })
  }

  return (
    <form className="boat-poll-compact" onSubmit={handleSubmit}>
      <div className="boat-poll-compact-head">
        <span className="boat-poll-compact-badge">📊 투표</span>
        <button type="button" className="boat-poll-compact-close" onClick={onCancel} title="삭제">
          <X />
        </button>
      </div>

      <input
        type="text"
        className="boat-poll-compact-title-input"
        placeholder="투표 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <div className="boat-poll-compact-options">
        {options.map((opt, i) => (
          <div key={i} className="boat-poll-compact-opt-row">
            <span className="boat-poll-compact-opt-dot">○</span>
            <input
              type="text"
              className="boat-poll-compact-opt-input"
              placeholder={`항목 ${i + 1}`}
              value={opt}
              onChange={(e) => updateOption(i, e.target.value)}
            />
            {options.length > 2 && (
              <button type="button" className="boat-poll-compact-opt-rm" onClick={() => removeOption(i)}>
                <X />
              </button>
            )}
          </div>
        ))}
        {options.length < 10 && (
          <button type="button" className="boat-poll-compact-add" onClick={addOption}>
            <Plus /> 항목 추가
          </button>
        )}
      </div>

      <button
        type="button"
        className="boat-poll-compact-settings-toggle"
        onClick={() => setShowSettings(!showSettings)}
      >
        설정 {showSettings ? <ChevronUp /> : <ChevronDown />}
      </button>

      {showSettings && (
        <div className="boat-poll-compact-settings">
          <label className="boat-poll-compact-check">
            <input type="checkbox" checked={allowMultiple} onChange={(e) => setAllowMultiple(e.target.checked)} />
            복수선택
          </label>
          <label className="boat-poll-compact-check">
            <input type="checkbox" checked={isAnonymous} onChange={(e) => setIsAnonymous(e.target.checked)} />
            무기명
          </label>
          <select
            className="boat-poll-compact-select"
            value={resultVisibility}
            onChange={(e) => setResultVisibility(e.target.value as ResultVisibility)}
          >
            <option value="AFTER_VOTE">투표 후 공개</option>
            <option value="AFTER_END">종료 후 공개</option>
            <option value="ALWAYS">항상 공개</option>
          </select>
          <input
            type="datetime-local"
            className="boat-poll-compact-select"
            placeholder="종료일"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <input
            type="number"
            className="boat-poll-compact-select"
            placeholder="참여자 제한 (무제한)"
            min="1"
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
          />
        </div>
      )}

      <div className="boat-poll-compact-foot">
        <button type="button" className="boat-poll-compact-btn-cancel" onClick={onCancel}>취소</button>
        <button type="submit" className="boat-poll-compact-btn-submit">만들기</button>
      </div>
    </form>
  )
}
