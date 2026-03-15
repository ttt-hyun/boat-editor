import { useState, useCallback, useEffect, useRef } from 'react'
import type { Editor } from '@tiptap/react'
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

interface ImageResizerProps {
  editor: Editor
  node: {
    attrs: { src: string; width?: number; align?: string; uploading?: boolean }
  }
  getPos: () => number | undefined
  selected: boolean
}

export function ImageResizer({
  editor,
  node,
  getPos,
  selected,
}: ImageResizerProps) {
  const { src, width, align = 'center', uploading } = node.attrs
  const [resizing, setResizing] = useState(false)
  const startX = useRef(0)
  const startWidth = useRef(0)
  const imgRef = useRef<HTMLImageElement>(null)

  const updateAttrs = useCallback(
    (attrs: Record<string, unknown>) => {
      const pos = getPos()
      if (pos === undefined) return
      editor.view.dispatch(
        editor.view.state.tr.setNodeMarkup(pos, undefined, {
          ...node.attrs,
          ...attrs,
        }),
      )
    },
    [editor, getPos, node.attrs],
  )

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setResizing(true)
      startX.current = e.clientX
      startWidth.current =
        imgRef.current?.getBoundingClientRect().width ?? width ?? 400
    },
    [width],
  )

  useEffect(() => {
    if (!resizing) return

    const onMouseMove = (e: MouseEvent) => {
      const diff = e.clientX - startX.current
      const newWidth = Math.max(100, startWidth.current + diff)
      updateAttrs({ width: Math.round(newWidth) })
    }

    const onMouseUp = () => {
      setResizing(false)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [resizing, updateAttrs])

  return (
    <div
      className={`boat-image-wrapper ${selected ? 'selected' : ''}`}
      data-align={align}
    >
      {uploading && <div className="boat-image-uploading">업로드 중...</div>}
      <img
        ref={imgRef}
        src={src}
        style={{ width: width ? `${width}px` : undefined }}
        draggable={false}
      />
      {selected && !uploading && (
        <>
          <div className="boat-image-resize-handle" onMouseDown={onMouseDown} />
          <div className="boat-image-align-bar">
            <button
              type="button"
              className={align === 'left' ? 'active' : ''}
              onClick={() => updateAttrs({ align: 'left' })}
              title="왼쪽 정렬"
            >
              <AlignLeft />
            </button>
            <button
              type="button"
              className={align === 'center' ? 'active' : ''}
              onClick={() => updateAttrs({ align: 'center' })}
              title="가운데 정렬"
            >
              <AlignCenter />
            </button>
            <button
              type="button"
              className={align === 'right' ? 'active' : ''}
              onClick={() => updateAttrs({ align: 'right' })}
              title="오른쪽 정렬"
            >
              <AlignRight />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
