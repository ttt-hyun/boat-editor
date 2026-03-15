import { createAIHandler } from 'boat-editor-server'

const handler = createAIHandler()

export async function POST(req: Request) {
  return handler.handleRequest(req)
}
