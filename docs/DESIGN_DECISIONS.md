# boat-editor 패키지 설계 정책

README 작성을 위해 패키지의 설계 결정과 정책을 정리한 문서.
**작업이 진행될 때마다 이 파일에 추가로 기록한다.**

---

## 모노레포 구조

| 패키지 | npm 이름 | 역할 |
|--------|----------|------|
| `packages/editor` | `boat-editor` | 프론트엔드 Tiptap 에디터 컴포넌트 (React) |
| `packages/server` | `boat-editor-server` | 서버 유틸리티 (이미지 업로드, AI, Poll 핸들러) |
| `apps/demo` | — | Next.js 데모 앱 (패키지 사용 예시) |

빌드: tsup (ESM + CJS + DTS), Turborepo 파이프라인 관리

---

## 이미지 업로드 정책

### 패키지 (boat-editor-server)
- **지원 스토리지:** `local` | `custom` 두 가지만 제공
- **S3/R2 등 클라우드 스토리지는 패키지에 포함하지 않음**
  - 이유: 대부분의 프로젝트에 이미 자체 업로드 인프라가 존재하므로, 패키지가 특정 SDK(`@aws-sdk/client-s3` 등)를 의존성으로 가져갈 필요 없음
  - 사용자는 `custom` 모드의 `customUploader` 함수로 자유롭게 연동
- **`local`:** 개발/테스트용 로컬 파일 저장 (`uploadDir`, `publicPath`)
- **`custom`:** `(file: Buffer, filename: string, mimeType: string) => Promise<string>` 함수 전달
- **공통 옵션:** `maxFileSize` (기본 10MB), `allowedMimeTypes` (기본: jpeg, png, gif, webp)
- **파일명:** UUID 기반 자동 생성 (원본명 사용하지 않음)

### 프론트엔드 (boat-editor)
- 에디터는 `imageUploadEndpoint` URL만 알면 됨
- 내부적으로 FormData(`file` 필드)를 POST하고, `{ url: string }` 응답을 받음
- 드래그&드롭, 클립보드 붙여넣기, 파일 선택 모두 지원
- 업로드 중 blob placeholder UI 표시 → 완료 시 실제 URL로 교체
- 이미지 리사이즈(드래그 핸들) + 정렬(좌/중/우) 지원

### 데모 앱 (Cloudflare R2 연동 예시)
- `custom` 모드 + `@aws-sdk/client-s3`로 R2 직접 연동
- R2 설정은 환경변수로 관리: `R2_ENDPOINT`, `R2_BUCKET_NAME`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_PUBLIC_URL`

---

## AI 기능 정책

### 패키지 (boat-editor-server)
- **지원 프로바이더:** Anthropic Claude, OpenAI, Google Gemini
- **자동 감지:** 환경변수 우선순위(`ANTHROPIC_API_KEY` > `OPENAI_API_KEY` > `GEMINI_API_KEY`)로 프로바이더 자동 선택
- **SDK dynamic import:** 각 프로바이더 SDK는 첫 요청 시 lazy import (미사용 SDK 로드 방지)
- **기능 3가지:**
  - `spellCheck` — 선택 텍스트의 오탈자/문법 교정, 인라인 수정 제안
  - `contextConnect` — 커서 기준 앞뒤 문맥의 자연스러운 연결 문장 제안
  - `contentGenerate` — 지시사항 기반 콘텐츠 생성, 스트리밍 삽입
- **스트리밍:** SSE 방식 (`text/event-stream`, `data: {"text":"chunk"}`)
- **요청 검증:** Zod 스키마로 입력 검증

### 프론트엔드 (boat-editor)
- `aiEndpoint`, `aiEnabled` props로 활성화
- AI 툴바 UI 내장 (맞춤법/문맥연결/AI작성 버튼 + 결과 미리보기 + 적용/취소)
- 스트리밍 결과 실시간 표시

---

## Poll(투표) 기능 정책

### 패키지 (boat-editor-server)
- Prisma 기반 DB 핸들러 제공
- `createPollHandlers({ prisma, getCurrentUserId })` 형태
- REST API: POST /poll, GET /poll/:id, POST /poll/:id/vote, GET /poll/:id/results
- Zod 검증, 결과 공개 정책 (AFTER_VOTE/AFTER_END/ALWAYS)
- Prisma 스키마 조각 + SQL 마이그레이션 제공

### 프론트엔드 (boat-editor)
- `pollEndpoint`, `pollEnabled`, `currentUserId` props로 활성화
- UI 흐름: 툴바 "투표 삽입" → 인라인 생성 폼 → 칩 형태로 접힘 → 클릭 시 투표/결과 패널

---

## BoatEditor 컴포넌트 Props

```typescript
interface BoatEditorProps {
  content?: string              // 초기 HTML 콘텐츠
  onChange?: (html: string) => void  // 변경 콜백
  editable?: boolean            // 편집 가능 여부
  placeholder?: string          // 플레이스홀더 텍스트
  aiEndpoint?: string           // AI API 엔드포인트
  aiEnabled?: boolean           // AI 기능 활성화
  imageUploadEndpoint?: string  // 이미지 업로드 엔드포인트
  imageMaxSize?: number         // 최대 파일 크기 (기본 10MB)
  imageAccept?: string[]        // 허용 MIME 타입
  pollEndpoint?: string         // 투표 API 엔드포인트
  pollEnabled?: boolean         // 투표 기능 활성화
  currentUserId?: string        // 현재 사용자 ID
  className?: string            // 커스텀 CSS 클래스
  minHeight?: string | number   // 최소 높이
}
```

---

## CSS 정책

- 모든 클래스명 `boat-` 접두사 사용 (네임스페이스 충돌 방지)
- Tailwind CSS 비의존 (순수 CSS, CSS custom properties 사용)
- `boat-editor/styles.css`로 스타일 import

---

## 빌드 & 번들링

- tsup: ESM + CJS + DTS 동시 빌드
- editor 패키지: `onSuccess`로 CSS를 `dist/styles.css`로 복사
- server 패키지: AI SDK들(`@anthropic-ai/sdk`, `openai`, `@google/generative-ai`)은 tsup external 처리
- Tiptap 확장: `ReactNodeViewRenderer` 사용 (BoatImageExtension, BoatPollExtension)

---

## 변경 이력

| 날짜 | 변경 내용 |
|------|-----------|
| 2026-03-13 | Phase 1~6 완료: 모노레포, 에디터, 이미지, 투표, AI, 데모 연동 |
| 2026-03-15 | 이미지 업로드: S3 내장 제거 → `local` + `custom`만 지원. 데모에서 R2를 `custom`으로 연동 |
