import { useCallback } from 'react'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { BoatImageExtension } from '../extensions/image/image-node-view'
import { BoatPollExtension } from '../extensions/poll/poll-extension'
import { useBoatEditorContext } from '../providers/BoatEditorProvider'

export interface UseBoatEditorOptions {
  content?: string
  editable?: boolean
  placeholder?: string
  onChange?: (html: string) => void
}

export function useBoatEditor({
  content = '',
  editable = true,
  placeholder,
  onChange,
}: UseBoatEditorOptions = {}) {
  const { imageUploadEndpoint, imageMaxSize, imageAccept, pollEnabled } =
    useBoatEditorContext()

  const uploadFn = useCallback(
    async (file: File): Promise<string> => {
      if (imageAccept.length > 0 && !imageAccept.includes(file.type)) {
        throw new Error(`허용되지 않는 파일 형식입니다: ${file.type}`)
      }
      if (file.size > imageMaxSize) {
        throw new Error(
          `파일 크기가 ${(imageMaxSize / (1024 * 1024)).toFixed(1)}MB를 초과합니다.`,
        )
      }
      if (!imageUploadEndpoint) {
        throw new Error('이미지 업로드 엔드포인트가 설정되지 않았습니다.')
      }

      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch(imageUploadEndpoint, {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(text || `업로드 실패 (${res.status})`)
      }

      const data = await res.json()
      return data.url
    },
    [imageUploadEndpoint, imageMaxSize, imageAccept],
  )

  const editor = useEditor({
    extensions: [
      StarterKit,
      ...(placeholder
        ? [Placeholder.configure({ placeholder })]
        : []),
      BoatImageExtension.configure({
        uploadFn: imageUploadEndpoint ? uploadFn : undefined,
      }),
      ...(pollEnabled ? [BoatPollExtension] : []),
    ],
    content,
    editable,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
  })

  return editor
}
