import { Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { PollNodeView } from '../../components/PollNode/PollNodeView'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    boatPoll: {
      insertBoatPoll: () => ReturnType
    }
  }
}

export const BoatPollExtension = Node.create({
  name: 'boatPoll',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      pollId: { default: null },
      title: { default: null },
    }
  },

  parseHTML() {
    return [{ tag: 'div[data-boat-poll]' }]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      {
        'data-boat-poll': '',
        'data-poll-id': HTMLAttributes.pollId || '',
        'data-title': HTMLAttributes.title || '',
      },
      HTMLAttributes.title || '투표',
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(PollNodeView)
  },

  addCommands() {
    return {
      insertBoatPoll:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {},
          })
        },
    }
  },
})
