import { useState, useCallback } from 'react'
import type { Editor } from '@tiptap/react'
import { useBoatEditorContext } from '../providers/BoatEditorProvider'

export interface UseImageUploadReturn {
  uploading: boolean
  error: string | null
  upload: (file: File) => Promise<string>
  uploadAndInsert: (file: File) => void
  openFileDialog: () => void
}

export function useImageUpload(editor: Editor | null): UseImageUploadReturn {
  const { imageUploadEndpoint, imageMaxSize, imageAccept } =
    useBoatEditorContext()
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validate = useCallback(
    (file: File): string | null => {
      if (imageAccept.length > 0 && !imageAccept.includes(file.type)) {
        return `허용되지 않는 파일 형식입니다: ${file.type}`
      }
      if (file.size > imageMaxSize) {
        const maxMB = (imageMaxSize / (1024 * 1024)).toFixed(1)
        return `파일 크기가 ${maxMB}MB를 초과합니다.`
      }
      return null
    },
    [imageAccept, imageMaxSize],
  )

  const upload = useCallback(
    async (file: File): Promise<string> => {
      const validationError = validate(file)
      if (validationError) {
        throw new Error(validationError)
      }

      if (!imageUploadEndpoint) {
        throw new Error('이미지 업로드 엔드포인트가 설정되지 않았습니다.')
      }

      setUploading(true)
      setError(null)

      try {
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
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : '이미지 업로드에 실패했습니다.'
        setError(msg)
        throw err
      } finally {
        setUploading(false)
      }
    },
    [imageUploadEndpoint, validate],
  )

  const uploadAndInsert = useCallback(
    (file: File) => {
      if (!editor) return
      upload(file).then((url) => {
        editor.chain().focus().setBoatImage({ src: url }).run()
      })
    },
    [editor, upload],
  )

  const openFileDialog = useCallback(() => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = imageAccept.join(',')
    input.onchange = () => {
      const file = input.files?.[0]
      if (file) uploadAndInsert(file)
    }
    input.click()
  }, [imageAccept, uploadAndInsert])

  return { uploading, error, upload, uploadAndInsert, openFileDialog }
}
