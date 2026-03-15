import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'boat-editor Demo',
  description: 'AI-powered custom Tiptap editor demo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
