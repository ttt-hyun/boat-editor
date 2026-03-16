import { randomUUID } from 'crypto'
import { writeFile, mkdir } from 'fs/promises'
import { join, extname } from 'path'

export interface ImageUploadConfig {
  storage: 'local' | 'custom'
  // Local storage
  uploadDir?: string
  publicPath?: string
  // Custom storage
  customUploader?: (file: Buffer, filename: string, mimeType: string) => Promise<string>
  // Common
  maxFileSize?: number
  allowedMimeTypes?: string[]
}

const DEFAULT_MAX_SIZE = 10 * 1024 * 1024 // 10MB
const DEFAULT_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
]

function generateFilename(originalName: string): string {
  const ext = extname(originalName) || '.png'
  return `${randomUUID()}${ext}`
}

function validateFile(
  buffer: Buffer,
  mimeType: string,
  config: ImageUploadConfig,
): string | null {
  const maxSize = config.maxFileSize ?? DEFAULT_MAX_SIZE
  const allowed = config.allowedMimeTypes ?? DEFAULT_MIME_TYPES

  if (buffer.length > maxSize) {
    const maxMB = (maxSize / (1024 * 1024)).toFixed(1)
    return `파일 크기가 ${maxMB}MB를 초과합니다.`
  }
  if (allowed.length > 0 && !allowed.includes(mimeType)) {
    return `허용되지 않는 파일 형식입니다: ${mimeType}`
  }
  return null
}

async function uploadLocal(
  buffer: Buffer,
  filename: string,
  config: ImageUploadConfig,
): Promise<string> {
  const dir = config.uploadDir || './uploads'
  await mkdir(dir, { recursive: true })
  const filepath = join(dir, filename)
  await writeFile(filepath, buffer)
  const publicPath = config.publicPath || '/uploads'
  return `${publicPath}/${filename}`
}

export type ImageUploadHandler = (req: Request) => Promise<Response>

export function createImageUploadHandler(
  config: ImageUploadConfig,
): ImageUploadHandler {
  return async (req: Request): Promise<Response> => {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    try {
      const formData = await req.formData()
      const file = formData.get('file')

      if (!file || !(file instanceof File)) {
        return new Response(
          JSON.stringify({ error: '파일이 전송되지 않았습니다.' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } },
        )
      }

      const buffer = Buffer.from(await file.arrayBuffer())
      const mimeType = file.type
      const filename = generateFilename(file.name)

      const validationError = validateFile(buffer, mimeType, config)
      if (validationError) {
        return new Response(JSON.stringify({ error: validationError }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        })
      }

      let url: string

      switch (config.storage) {
        case 'local':
          url = await uploadLocal(buffer, filename, config)
          break
        case 'custom':
          if (!config.customUploader) {
            return new Response(
              JSON.stringify({ error: 'customUploader가 설정되지 않았습니다.' }),
              { status: 500, headers: { 'Content-Type': 'application/json' } },
            )
          }
          url = await config.customUploader(buffer, filename, mimeType)
          break
        default:
          return new Response(
            JSON.stringify({ error: '알 수 없는 스토리지 타입입니다.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } },
          )
      }

      return new Response(JSON.stringify({ url }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (err) {
      const message =
        err instanceof Error ? err.message : '이미지 업로드 중 오류가 발생했습니다.'
      return new Response(JSON.stringify({ error: message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }
}
