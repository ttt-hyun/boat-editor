import { createContext, useContext } from 'react'
import type { BoatEditorContextValue } from '../types/editor'

const BoatEditorContext = createContext<BoatEditorContextValue | null>(null)

export function useBoatEditorContext() {
  const ctx = useContext(BoatEditorContext)
  if (!ctx) {
    throw new Error('useBoatEditorContext must be used within BoatEditorProvider')
  }
  return ctx
}

export interface BoatEditorProviderProps {
  children: React.ReactNode
  aiEndpoint?: string
  aiEnabled?: boolean
  imageUploadEndpoint?: string
  imageMaxSize?: number
  imageAccept?: string[]
  pollEndpoint?: string
  pollEnabled?: boolean
  currentUserId?: string
}

export function BoatEditorProvider({
  children,
  aiEndpoint,
  aiEnabled = false,
  imageUploadEndpoint,
  imageMaxSize = 10 * 1024 * 1024,
  imageAccept = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  pollEndpoint,
  pollEnabled = false,
  currentUserId,
}: BoatEditorProviderProps) {
  const value: BoatEditorContextValue = {
    aiEndpoint,
    aiEnabled: aiEnabled && !!aiEndpoint,
    imageUploadEndpoint,
    imageMaxSize,
    imageAccept,
    pollEndpoint,
    pollEnabled: pollEnabled && !!pollEndpoint,
    currentUserId,
  }

  return (
    <BoatEditorContext.Provider value={value}>
      {children}
    </BoatEditorContext.Provider>
  )
}
