import { createImageUploadHandler } from 'boat-editor-server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT!,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
  forcePathStyle: true,
})

const handler = createImageUploadHandler({
  storage: 'custom',
  customUploader: async (file, filename, mimeType) => {
    const key = `images/${filename}`

    await r2.send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME!,
        Key: key,
        Body: file,
        ContentType: mimeType,
      }),
    )

    return `${process.env.R2_PUBLIC_URL!.replace(/\/$/, '')}/${key}`
  },
})

export const POST = handler
