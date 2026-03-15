export interface BoatEditorProps {
  content?: string
  onChange?: (html: string) => void
  editable?: boolean
  placeholder?: string

  // AI
  aiEndpoint?: string
  aiEnabled?: boolean

  // Image Upload
  imageUploadEndpoint?: string
  imageMaxSize?: number
  imageAccept?: string[]

  // Poll
  pollEndpoint?: string
  pollEnabled?: boolean
  currentUserId?: string

  // Styling
  className?: string
  minHeight?: string | number
}

export interface BoatEditorContextValue {
  aiEndpoint?: string
  aiEnabled: boolean
  imageUploadEndpoint?: string
  imageMaxSize: number
  imageAccept: string[]
  pollEndpoint?: string
  pollEnabled: boolean
  currentUserId?: string
}

export interface ToolbarButtonConfig {
  icon: React.ReactNode
  action: () => void
  active: boolean
  title: string
  disabled?: boolean
}

export interface ToolbarSeparator {
  separator: true
}

export type ToolbarItem = ToolbarButtonConfig | ToolbarSeparator
