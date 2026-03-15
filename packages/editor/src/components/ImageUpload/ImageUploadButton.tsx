import { useRef } from 'react'
import { ImagePlus } from 'lucide-react'
import type { Editor } from '@tiptap/react'
import { useBoatEditorContext } from '../../providers/BoatEditorProvider'

interface ImageUploadButtonProps {
  editor: Editor
  uploadFn: (file: File) => Promise<string>
}

export function ImageUploadButton({ editor, uploadFn }: ImageUploadButtonProps) {
  const { imageAccept } = useBoatEditorContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    uploadFn(file).then((url) => {
      editor.chain().focus().setBoatImage({ src: url }).run()
    })

    // Reset input so same file can be selected again
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <>
      <button
        type="button"
        className="boat-toolbar-btn"
        title="이미지 업로드"
        onClick={() => inputRef.current?.click()}
      >
        <ImagePlus />
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={imageAccept.join(',')}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </>
  )
}
