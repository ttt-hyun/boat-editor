import { EditorContent } from '@tiptap/react'
import { clsx } from 'clsx'
import type { BoatEditorProps } from '../types/editor'
import { BoatEditorProvider } from '../providers/BoatEditorProvider'
import { useBoatEditor } from '../hooks/useBoatEditor'
import { useBoatEditorContext } from '../providers/BoatEditorProvider'
import { Toolbar } from './Toolbar'
import { AIToolbar } from './AIToolbar'

function EditorInner({
  content,
  onChange,
  editable = true,
  placeholder,
  className,
  minHeight,
}: Pick<
  BoatEditorProps,
  'content' | 'onChange' | 'editable' | 'placeholder' | 'className' | 'minHeight'
>) {
  const editor = useBoatEditor({ content, editable, placeholder, onChange })
  const { aiEnabled } = useBoatEditorContext()

  if (!editor) return null

  const heightStyle =
    typeof minHeight === 'number' ? `${minHeight}px` : minHeight

  return (
    <div className={clsx('boat-editor', className)}>
      {editable && <Toolbar editor={editor} />}
      {editable && aiEnabled && <AIToolbar editor={editor} />}
      <EditorContent
        editor={editor}
        className="boat-content"
        style={{ minHeight: heightStyle || '240px' }}
      />
    </div>
  )
}

export function BoatEditor({
  aiEndpoint,
  aiEnabled,
  imageUploadEndpoint,
  imageMaxSize,
  imageAccept,
  pollEndpoint,
  pollEnabled,
  currentUserId,
  ...editorProps
}: BoatEditorProps) {
  return (
    <BoatEditorProvider
      aiEndpoint={aiEndpoint}
      aiEnabled={aiEnabled}
      imageUploadEndpoint={imageUploadEndpoint}
      imageMaxSize={imageMaxSize}
      imageAccept={imageAccept}
      pollEndpoint={pollEndpoint}
      pollEnabled={pollEnabled}
      currentUserId={currentUserId}
    >
      <EditorInner {...editorProps} />
    </BoatEditorProvider>
  )
}
