'use client'

import { useState } from 'react'
import { BoatEditor } from 'boat-editor'
import 'boat-editor/styles.css'

export default function DemoPage() {
  const [html, setHtml] = useState('<p>Hello, boat-editor!</p>')

  return (
    <main style={{ maxWidth: 800, margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
        boat-editor Demo
      </h1>
      <BoatEditor
        content={html}
        onChange={setHtml}
        placeholder="내용을 입력하세요..."
        minHeight={300}
        imageUploadEndpoint="/api/image/upload"
        pollEndpoint="/api/poll"
        pollEnabled={true}
        currentUserId="demo-user-1"
        aiEndpoint="/api/ai"
        aiEnabled={true}
      />
      <details style={{ marginTop: '1rem' }}>
        <summary style={{ cursor: 'pointer', color: '#737373' }}>HTML 출력</summary>
        <pre
          style={{
            marginTop: '0.5rem',
            padding: '0.75rem',
            background: '#f5f5f5',
            borderRadius: '0.5rem',
            fontSize: '0.8rem',
            overflow: 'auto',
          }}
        >
          {html}
        </pre>
      </details>
    </main>
  )
}
