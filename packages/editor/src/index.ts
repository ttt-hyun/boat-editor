// Components
export { BoatEditor } from './components/BoatEditor'
export { Toolbar } from './components/Toolbar'
export { ImageResizer } from './components/ImageUpload/ImageResizer'
export { ImageUploadButton } from './components/ImageUpload/ImageUploadButton'
export { PollNodeView } from './components/PollNode/PollNodeView'
export { PollCreator } from './components/PollNode/PollCreator'
export { PollVoting } from './components/PollNode/PollVoting'
export { PollResultsView } from './components/PollNode/PollResults'

// Extensions
export { BoatImageExtension } from './extensions/image/image-node-view'
export { BoatPollExtension } from './extensions/poll/poll-extension'

// Providers
export { BoatEditorProvider, useBoatEditorContext } from './providers/BoatEditorProvider'

// Hooks
export { useBoatEditor } from './hooks/useBoatEditor'
export { useImageUpload } from './hooks/useImageUpload'
export { usePoll } from './hooks/usePoll'
export { useAI } from './hooks/useAI'

// Types
export type {
  BoatEditorProps,
  BoatEditorContextValue,
  ToolbarButtonConfig,
  ToolbarSeparator,
  ToolbarItem,
} from './types/editor'
export type { AIFeature, AIRequest, AIResponse } from './types/ai'
export type {
  Poll,
  PollOption,
  PollVote,
  PollResults,
  ResultVisibility,
} from './types/poll'
