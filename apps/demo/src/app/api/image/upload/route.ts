import { createImageUploadHandler } from 'boat-editor-server'

const handler = createImageUploadHandler({
  storage: 'local',
  uploadDir: './public/uploads',
  publicPath: '/uploads',
})

export const POST = handler
