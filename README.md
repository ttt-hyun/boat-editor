# boat-editor

AI 기능, 투표, 이미지 업로드를 내장한 커스텀 Tiptap 에디터.

[![npm](https://img.shields.io/npm/v/boat-editor)](https://www.npmjs.com/package/boat-editor)
[![npm](https://img.shields.io/npm/v/boat-editor-server?label=boat-editor-server)](https://www.npmjs.com/package/boat-editor-server)
[![license](https://img.shields.io/npm/l/boat-editor)](./LICENSE)

## Packages

| Package | npm | Description |
|---------|-----|-------------|
| [`boat-editor`](./packages/editor) | [![npm](https://img.shields.io/npm/v/boat-editor)](https://www.npmjs.com/package/boat-editor) | React 에디터 컴포넌트 |
| [`boat-editor-server`](./packages/server) | [![npm](https://img.shields.io/npm/v/boat-editor-server)](https://www.npmjs.com/package/boat-editor-server) | 서버 유틸리티 (AI, 이미지 업로드, Poll 핸들러) |

## Features

- **Rich Text Editor** — Tiptap 기반, 제목/이탤릭/취소선/리스트/인용/정렬 등 서식
- **AI** — 맞춤법 검사, 문맥 연결, 콘텐츠 생성 (Anthropic / OpenAI / Gemini)
- **Image Upload** — 드래그&드롭, 클립보드 붙여넣기, 리사이즈, 정렬
- **Poll** — 에디터 내 투표 생성 및 참여 (Prisma 기반)
- **YouTube** — YouTube 영상 임베드
- **Block Handle** — Notion 스타일 블록 핸들 (드래그 정렬, 단락 추가)
- **Debug Console** — 개발 시 AI/Poll/이미지 에러 로그 확인
- **i18n** — 한국어, 영어, 일본어, 중국어 지원

---

## Installation

```bash
npm install boat-editor
npm install boat-editor-server  # 서버 핸들러가 필요한 경우
```

## Quick Start

```tsx
'use client'

import { BoatEditor } from 'boat-editor'
import 'boat-editor/styles.css'

export default function MyPage() {
  const [html, setHtml] = useState('')

  return (
    <BoatEditor
      content={html}
      onChange={setHtml}
      placeholder="내용을 입력하세요..."
      minHeight={300}
    />
  )
}
```

### 뷰어 모드

```tsx
<BoatEditor content={savedHtml} editable={false} />
```

---

## BoatEditor Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | `''` | 초기 HTML 콘텐츠 |
| `onChange` | `(html: string) => void` | — | 콘텐츠 변경 콜백 |
| `editable` | `boolean` | `true` | 편집 가능 여부 (`false`로 뷰어 모드) |
| `placeholder` | `string` | — | 플레이스홀더 텍스트 |
| `tools` | `ToolName[]` | 전체 도구 | 표시할 툴바 버튼 직접 지정 |
| `excludeTools` | `ToolName[]` | — | 기본 도구에서 제외할 버튼 |
| `className` | `string` | — | 커스텀 CSS 클래스 |
| `minHeight` | `string \| number` | — | 에디터 최소 높이 |
| `debug` | `boolean` | `false` | 디버그 콘솔 표시 |

### AI Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `aiEndpoint` | `string` | — | AI API 엔드포인트 URL |
| `aiEnabled` | `boolean` | `false` | AI 기능 활성화 |

### Image Upload Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imageUploadEndpoint` | `string` | — | 이미지 업로드 API URL |
| `imageMaxSize` | `number` | `10485760` (10MB) | 최대 파일 크기 (bytes) |
| `imageAccept` | `string[]` | jpeg/png/gif/webp | 허용 MIME 타입 |

### Poll Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pollEndpoint` | `string` | — | 투표 API 엔드포인트 URL |
| `pollEnabled` | `boolean` | `false` | 투표 기능 활성화 |
| `currentUserId` | `string` | — | 현재 사용자 ID |

### ToolName

```ts
type ToolName =
  | 'heading1' | 'heading2'
  | 'italic' | 'strike'
  | 'bulletList' | 'orderedList' | 'blockquote'
  | 'align' | 'image' | 'poll' | 'youtube'
  | 'undo' | 'redo'
  | 'spellCheck' | 'contextConnect' | 'contentGenerate'
```

```tsx
// 특정 도구만 제거
<BoatEditor excludeTools={['youtube', 'poll']} />

// 원하는 도구만 표시
<BoatEditor tools={['heading1', 'italic', 'image']} />
```

---

## AI Setup

Anthropic Claude, OpenAI, Google Gemini를 지원합니다. 환경변수에 API 키를 설정하면 자동으로 프로바이더를 감지합니다.

```bash
# 하나만 설정하면 자동 감지 (우선순위: Anthropic > OpenAI > Gemini)
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=AI...
```

```ts
// app/api/ai/route.ts
import { createAIHandler } from 'boat-editor-server'

const handler = createAIHandler()

export async function POST(req: Request) {
  return handler.handleRequest(req)
}
```

```tsx
<BoatEditor
  aiEndpoint="/api/ai"
  aiEnabled={true}
/>
```

**AI 기능:**

| 버튼 | 동작 |
|------|------|
| 맞춤법 | 선택 텍스트의 오탈자/문법 교정 후 인라인 수정 제안 |
| 문맥 연결 | 커서 위치 앞뒤 문맥을 자연스럽게 연결하는 문장 생성 |
| AI 작성 | 지시사항 입력 → 콘텐츠 생성 (SSE 스트리밍) |

---

## Image Upload Setup

### boat-editor-server 사용

```ts
// app/api/image/upload/route.ts
import { createImageUploadHandler } from 'boat-editor-server'

// 로컬 저장 (개발용)
const handler = createImageUploadHandler({
  storage: 'local',
  uploadDir: './public/uploads',
  publicPath: '/uploads',
})

export const POST = handler
```

```ts
// Cloudflare R2, AWS S3 등 클라우드 연동
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3 = new S3Client({ /* ... */ })

const handler = createImageUploadHandler({
  storage: 'custom',
  customUploader: async (file, filename, mimeType) => {
    await s3.send(new PutObjectCommand({
      Bucket: 'my-bucket',
      Key: `images/${filename}`,
      Body: file,
      ContentType: mimeType,
    }))
    return `https://cdn.example.com/images/${filename}`
  },
})

export const POST = handler
```

```tsx
<BoatEditor imageUploadEndpoint="/api/image/upload" />
```

> S3/R2 SDK는 패키지에 포함되지 않습니다. `customUploader`로 자유롭게 연동하세요.

---

## Poll Setup

```ts
// app/api/poll/[[...path]]/route.ts
import { createPollHandlers } from 'boat-editor-server'
import { prisma } from '@/lib/prisma'

const handlers = createPollHandlers({
  prisma,
  getCurrentUserId: async (req) => {
    const session = await getSession(req)
    return session?.user?.id ?? null
  },
})

export async function GET(req: Request) {
  return handlers.handleRequest(req)
}

export async function POST(req: Request) {
  return handlers.handleRequest(req)
}
```

```tsx
<BoatEditor
  pollEndpoint="/api/poll"
  pollEnabled={true}
  currentUserId={session.user.id}
/>
```

**Prisma 스키마** — 아래 모델을 추가하세요:

```prisma
model BoatPoll {
  id               String           @id @default(uuid())
  title            String
  allowMultiple    Boolean          @default(false)
  isAnonymous      Boolean          @default(false)
  resultVisibility String           @default("AFTER_VOTE")
  endDate          DateTime?
  maxParticipants  Int?
  createdAt        DateTime         @default(now())
  options          BoatPollOption[]
  votes            BoatPollVote[]
  @@map("boat_polls")
}

model BoatPollOption {
  id     String         @id @default(uuid())
  pollId String
  text   String
  order  Int            @default(0)
  poll   BoatPoll       @relation(fields: [pollId], references: [id])
  votes  BoatPollVote[]
  @@map("boat_poll_options")
}

model BoatPollVote {
  id        String         @id @default(uuid())
  pollId    String
  optionId  String
  userId    String
  createdAt DateTime       @default(now())
  poll      BoatPoll       @relation(fields: [pollId], references: [id])
  option    BoatPollOption @relation(fields: [optionId], references: [id])
  @@unique([pollId, userId, optionId])
  @@map("boat_poll_votes")
}
```

**결과 공개 정책 (`resultVisibility`):**

| 옵션 | 투표 전 | 투표 후 |
|------|---------|---------|
| `AFTER_VOTE` (기본) | 투표 UI만 | 결과 표시 |
| `AFTER_END` | 투표 UI만 | 종료 후 결과 표시 |
| `ALWAYS` | 결과 + 투표 UI | 결과 표시 |

---

## Custom Server (boat-editor-server 없이 직접 구현)

`boat-editor`는 설정한 엔드포인트로 HTTP 요청만 보내므로, 규격만 맞추면 어떤 서버로도 구현 가능합니다.

**Image Upload** — `POST {imageUploadEndpoint}` → `{ "url": "..." }`

**AI** — `POST {aiEndpoint}` → `{ "result": "..." }` 또는 SSE 스트림

**Poll** — REST API (`POST /poll`, `GET /poll/:id`, `POST /poll/:id/vote`, `GET /poll/:id/results`)

자세한 요청/응답 규격과 구현 예시는 [`packages/server/README.md`](./packages/server/README.md)를 참고하세요.

---

## Styling

```tsx
import 'boat-editor/styles.css'
```

모든 CSS 클래스는 `boat-` 접두사를 사용하여 네임스페이스 충돌을 방지합니다. Tailwind CSS에 의존하지 않습니다.

---

## Monorepo Structure

```
boat-editor/
├── packages/
│   ├── editor/          # boat-editor (React 컴포넌트)
│   └── server/          # boat-editor-server (Node.js 유틸리티)
├── apps/
│   ├── demo/            # 기능 데모 앱 (Next.js, port 3000)
│   └── demo2/           # 게시글 CRUD 데모 앱 (Next.js, port 3001)
└── turbo.json
```

## Development

```bash
# 의존성 설치
npm install

# 전체 빌드
npm run build

# 데모 앱 실행
npm run demo:dev    # http://localhost:3000
npm run demo2:dev   # http://localhost:3001
```

## License

MIT
