import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'
import { Plugin, PluginKey } from '@tiptap/pm/state'
import type { EditorView } from '@tiptap/pm/view'
import { ImageResizer } from '../../components/ImageUpload/ImageResizer'

export interface BoatImageOptions {
  HTMLAttributes: Record<string, string>
  uploadFn?: (file: File) => Promise<string>
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    boatImage: {
      setBoatImage: (options: {
        src: string
        alt?: string
        title?: string
        width?: number | string
        align?: string
      }) => ReturnType
    }
  }
}

function ImageNodeView(props: {
  editor: import('@tiptap/react').Editor
  node: { attrs: Record<string, unknown> }
  getPos: () => number | undefined
  selected: boolean
}) {
  return (
    <NodeViewWrapper>
      <ImageResizer
        editor={props.editor}
        node={props.node as ImageResizerNode}
        getPos={props.getPos}
        selected={props.selected}
      />
    </NodeViewWrapper>
  )
}

type ImageResizerNode = {
  attrs: { src: string; width?: number; align?: string; uploading?: boolean }
}

export const BoatImageExtension = Node.create<BoatImageOptions>({
  name: 'boatImage',
  group: 'block',
  draggable: true,
  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {},
      uploadFn: undefined,
    }
  },

  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      title: { default: null },
      width: { default: null },
      align: { default: 'center' },
      uploading: { default: false, renderHTML: () => ({}) },
    }
  },

  parseHTML() {
    return [
      { tag: 'figure[data-boat-image] img', priority: 60 },
      { tag: 'img[src]', priority: 50 },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    const { align, uploading, width, ...rest } = HTMLAttributes
    const alignStyle =
      align === 'left'
        ? 'margin-right:auto;'
        : align === 'right'
          ? 'margin-left:auto;'
          : 'margin-left:auto;margin-right:auto;'

    return [
      'figure',
      { 'data-boat-image': '', style: `display:block;${alignStyle}`, 'data-align': align },
      [
        'img',
        mergeAttributes(this.options.HTMLAttributes, rest, {
          style: width ? `width:${width}px;` : undefined,
        }),
      ],
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageNodeView)
  },

  addCommands() {
    return {
      setBoatImage:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          })
        },
    }
  },

  addProseMirrorPlugins() {
    const uploadFn = this.options.uploadFn

    return [
      new Plugin({
        key: new PluginKey('boatImageDrop'),
        props: {
          handleDrop(view: EditorView, event: DragEvent) {
            if (!uploadFn) return false
            const files = event.dataTransfer?.files
            if (!files || files.length === 0) return false

            const images = Array.from(files).filter((f) =>
              f.type.startsWith('image/'),
            )
            if (images.length === 0) return false

            event.preventDefault()

            const coords = view.posAtCoords({
              left: event.clientX,
              top: event.clientY,
            })

            images.forEach((file) => {
              insertImagePlaceholder(view, file, uploadFn, coords?.pos)
            })

            return true
          },

          handlePaste(view: EditorView, event: ClipboardEvent) {
            if (!uploadFn) return false
            const items = event.clipboardData?.items
            if (!items) return false

            const images = Array.from(items)
              .filter((item) => item.type.startsWith('image/'))
              .map((item) => item.getAsFile())
              .filter((f): f is File => f !== null)

            if (images.length === 0) return false

            event.preventDefault()

            images.forEach((file) => {
              insertImagePlaceholder(view, file, uploadFn)
            })

            return true
          },
        },
      }),
    ]
  },
})

function insertImagePlaceholder(
  view: EditorView,
  file: File,
  uploadFn: (file: File) => Promise<string>,
  pos?: number,
) {
  const objectUrl = URL.createObjectURL(file)
  const insertPos = pos ?? view.state.selection.head

  const node = view.state.schema.nodes.boatImage.create({
    src: objectUrl,
    uploading: true,
  })

  const tr = view.state.tr.insert(insertPos, node)
  view.dispatch(tr)

  uploadFn(file)
    .then((url) => {
      const { state } = view
      state.doc.descendants((descNode, nodePos) => {
        if (
          descNode.type.name === 'boatImage' &&
          descNode.attrs.src === objectUrl
        ) {
          const updateTr = state.tr.setNodeMarkup(nodePos, undefined, {
            ...descNode.attrs,
            src: url,
            uploading: false,
          })
          view.dispatch(updateTr)
        }
      })
      URL.revokeObjectURL(objectUrl)
    })
    .catch(() => {
      const { state } = view
      state.doc.descendants((descNode, nodePos) => {
        if (
          descNode.type.name === 'boatImage' &&
          descNode.attrs.src === objectUrl
        ) {
          const deleteTr = state.tr.delete(nodePos, nodePos + descNode.nodeSize)
          view.dispatch(deleteTr)
        }
      })
      URL.revokeObjectURL(objectUrl)
    })
}
