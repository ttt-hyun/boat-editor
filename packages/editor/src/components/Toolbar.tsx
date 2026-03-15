import { useRef } from 'react'
import type { Editor } from '@tiptap/react'
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Quote,
  Undo,
  Redo,
  ImagePlus,
  Vote,
} from 'lucide-react'
import { clsx } from 'clsx'
import type { ToolbarItem } from '../types/editor'
import { useBoatEditorContext } from '../providers/BoatEditorProvider'

interface ToolbarProps {
  editor: Editor
}

export function Toolbar({ editor }: ToolbarProps) {
  const { imageUploadEndpoint, imageAccept, imageMaxSize, pollEnabled } =
    useBoatEditorContext()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !imageUploadEndpoint) return

    if (imageAccept.length > 0 && !imageAccept.includes(file.type)) return
    if (file.size > imageMaxSize) return

    const formData = new FormData()
    formData.append('file', file)

    fetch(imageUploadEndpoint, { method: 'POST', body: formData })
      .then((res) => {
        if (!res.ok) throw new Error('Upload failed')
        return res.json()
      })
      .then((data) => {
        editor.chain().focus().setBoatImage({ src: data.url }).run()
      })

    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const items: ToolbarItem[] = [
    {
      icon: <Heading2 />,
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      active: editor.isActive('heading', { level: 2 }),
      title: '제목 2',
    },
    {
      icon: <Heading3 />,
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      active: editor.isActive('heading', { level: 3 }),
      title: '제목 3',
    },
    { separator: true },
    {
      icon: <Bold />,
      action: () => editor.chain().focus().toggleBold().run(),
      active: editor.isActive('bold'),
      title: '굵게',
    },
    {
      icon: <Italic />,
      action: () => editor.chain().focus().toggleItalic().run(),
      active: editor.isActive('italic'),
      title: '기울임',
    },
    {
      icon: <Strikethrough />,
      action: () => editor.chain().focus().toggleStrike().run(),
      active: editor.isActive('strike'),
      title: '취소선',
    },
    { separator: true },
    {
      icon: <List />,
      action: () => editor.chain().focus().toggleBulletList().run(),
      active: editor.isActive('bulletList'),
      title: '글머리 기호',
    },
    {
      icon: <ListOrdered />,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      active: editor.isActive('orderedList'),
      title: '번호 목록',
    },
    {
      icon: <Quote />,
      action: () => editor.chain().focus().toggleBlockquote().run(),
      active: editor.isActive('blockquote'),
      title: '인용문',
    },
    { separator: true },
    ...(imageUploadEndpoint
      ? [
          {
            icon: <ImagePlus />,
            action: () => fileInputRef.current?.click(),
            active: false,
            title: '이미지 업로드',
          } as ToolbarItem,
        ]
      : []),
    ...(pollEnabled
      ? [
          {
            icon: <Vote />,
            action: () => editor.chain().focus().insertBoatPoll().run(),
            active: false,
            title: '투표 삽입',
          } as ToolbarItem,
        ]
      : []),
    ...((imageUploadEndpoint || pollEnabled)
      ? [{ separator: true } as ToolbarItem]
      : []),
    {
      icon: <Undo />,
      action: () => editor.chain().focus().undo().run(),
      active: false,
      title: '실행 취소',
    },
    {
      icon: <Redo />,
      action: () => editor.chain().focus().redo().run(),
      active: false,
      title: '다시 실행',
    },
  ]

  return (
    <div className="boat-toolbar">
      {items.map((item, i) =>
        'separator' in item ? (
          <div key={i} className="boat-toolbar-separator" />
        ) : (
          <button
            key={i}
            type="button"
            className={clsx('boat-toolbar-btn', item.active && 'active')}
            title={item.title}
            disabled={item.disabled}
            onClick={item.action}
          >
            {item.icon}
          </button>
        ),
      )}
      {imageUploadEndpoint && (
        <input
          ref={fileInputRef}
          type="file"
          accept={imageAccept.join(',')}
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
      )}
    </div>
  )
}
