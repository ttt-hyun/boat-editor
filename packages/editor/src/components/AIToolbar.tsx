import { useState, useRef } from 'react'
import type { Editor } from '@tiptap/react'
import { SpellCheck, Link2, Sparkles, X, Loader2 } from 'lucide-react'
import { clsx } from 'clsx'
import { useAI } from '../hooks/useAI'

interface AIToolbarProps {
  editor: Editor
}

type AIMode = null | 'spellCheck' | 'contextConnect' | 'contentGenerate'

export function AIToolbar({ editor }: AIToolbarProps) {
  const ai = useAI()
  const [mode, setMode] = useState<AIMode>(null)
  const [instructions, setInstructions] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const instructionsRef = useRef<HTMLInputElement>(null)

  if (!ai) return null

  const { loading, error } = ai

  const getSelectedText = () => {
    const { from, to } = editor.state.selection
    return editor.state.doc.textBetween(from, to, ' ')
  }

  const handleSpellCheck = async () => {
    const text = getSelectedText()
    if (!text) return
    setMode('spellCheck')
    setResult(null)
    const corrected = await ai.spellCheck(text)
    if (corrected) setResult(corrected)
  }

  const handleContextConnect = async () => {
    // Use the text before and after the cursor position
    const { from, to } = editor.state.selection
    const docText = editor.state.doc.textContent
    const before = docText.slice(0, from).trim()
    const after = docText.slice(to).trim()
    if (!before || !after) return
    setMode('contextConnect')
    setResult(null)
    const transition = await ai.contextConnect(
      before.slice(-500),
      after.slice(0, 500),
    )
    if (transition) setResult(transition)
  }

  const handleContentGenerate = async () => {
    if (!instructions.trim()) return
    setMode('contentGenerate')
    setResult(null)

    let accumulated = ''
    await ai.generateStream(
      instructions,
      getSelectedText() || undefined,
      (chunk) => {
        accumulated += chunk
        setResult(accumulated)
      },
    )
  }

  const applyResult = () => {
    if (!result) return

    if (mode === 'spellCheck') {
      // Replace selection with corrected text
      const { from, to } = editor.state.selection
      editor.chain().focus().deleteRange({ from, to }).insertContent(result).run()
    } else if (mode === 'contextConnect') {
      // Insert transition at cursor
      editor.chain().focus().insertContent(` ${result} `).run()
    } else if (mode === 'contentGenerate') {
      // Insert generated content at cursor
      editor.chain().focus().insertContent(result).run()
    }

    resetState()
  }

  const resetState = () => {
    setMode(null)
    setResult(null)
    setInstructions('')
  }

  return (
    <div className="boat-ai-toolbar">
      {/* AI action buttons */}
      {!mode && (
        <div className="boat-ai-actions">
          <button
            type="button"
            className="boat-ai-btn"
            title="맞춤법 검사"
            disabled={loading || !getSelectedText()}
            onClick={handleSpellCheck}
          >
            <SpellCheck className="boat-ai-btn-icon" />
            <span>맞춤법</span>
          </button>
          <button
            type="button"
            className="boat-ai-btn"
            title="문맥 연결"
            disabled={loading}
            onClick={handleContextConnect}
          >
            <Link2 className="boat-ai-btn-icon" />
            <span>문맥 연결</span>
          </button>
          <button
            type="button"
            className="boat-ai-btn boat-ai-btn-generate"
            title="내용 생성"
            disabled={loading}
            onClick={() => {
              setMode('contentGenerate')
              setTimeout(() => instructionsRef.current?.focus(), 0)
            }}
          >
            <Sparkles className="boat-ai-btn-icon" />
            <span>AI 작성</span>
          </button>
        </div>
      )}

      {/* Content generate input */}
      {mode === 'contentGenerate' && !result && !loading && (
        <div className="boat-ai-input-row">
          <input
            ref={instructionsRef}
            type="text"
            className="boat-ai-input"
            placeholder="작성할 내용을 설명하세요..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                handleContentGenerate()
              } else if (e.key === 'Escape') {
                resetState()
              }
            }}
          />
          <button
            type="button"
            className="boat-ai-submit"
            disabled={!instructions.trim()}
            onClick={handleContentGenerate}
          >
            생성
          </button>
          <button
            type="button"
            className="boat-ai-cancel-btn"
            onClick={resetState}
          >
            <X />
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="boat-ai-loading">
          <Loader2 className="boat-ai-spinner" />
          <span>AI 처리 중...</span>
          <button
            type="button"
            className="boat-ai-cancel-btn"
            onClick={resetState}
          >
            <X />
          </button>
        </div>
      )}

      {/* Result preview */}
      {result && !loading && (
        <div className="boat-ai-result">
          <div className="boat-ai-result-label">
            {mode === 'spellCheck' && '교정 결과'}
            {mode === 'contextConnect' && '연결 문장'}
            {mode === 'contentGenerate' && '생성 결과'}
          </div>
          <div className="boat-ai-result-text">{result}</div>
          <div className="boat-ai-result-actions">
            <button
              type="button"
              className={clsx('boat-ai-apply')}
              onClick={applyResult}
            >
              적용
            </button>
            <button
              type="button"
              className="boat-ai-discard"
              onClick={resetState}
            >
              취소
            </button>
          </div>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="boat-ai-error">
          {error}
          <button
            type="button"
            className="boat-ai-cancel-btn"
            onClick={() => resetState()}
          >
            <X />
          </button>
        </div>
      )}
    </div>
  )
}
