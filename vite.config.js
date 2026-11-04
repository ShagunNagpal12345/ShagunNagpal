import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import chatHandler from './api/chat.js'

function shagunAiDevApi() {
  return {
    name: 'shagun-ai-dev-api',
    apply: 'serve',
    configureServer(server) {
      let localGroqKey = ''
      if (!process.env.GROQ_API_KEY) {
        try {
          const localValue = readFileSync(`${process.cwd()}/src/.env`, 'utf8')
            .split(/\r?\n/)
            .map((line) => line.trim())
            .find((line) => line && !line.startsWith('#'))

          if (localValue?.includes('=')) {
            localGroqKey = localValue.slice(localValue.indexOf('=') + 1).trim()
          } else if (localValue?.startsWith('gsk_')) {
            localGroqKey = localValue
          }
        } catch {
          // The API handler returns a clear configuration message when absent.
        }
      }

      server.middlewares.use('/api/chat', async (request, response) => {
        const chunks = []

        try {
          for await (const chunk of request) chunks.push(chunk)
          const rawBody = Buffer.concat(chunks).toString('utf8')
          request.body = rawBody ? JSON.parse(rawBody) : {}
          request.groqApiKey = process.env.GROQ_API_KEY || localGroqKey

          response.status = (statusCode) => {
            response.statusCode = statusCode
            return response
          }
          response.json = (payload) => {
            response.setHeader('Content-Type', 'application/json; charset=utf-8')
            response.end(JSON.stringify(payload))
            return payload
          }

          await chatHandler(request, response)
        } catch (error) {
          if (response.writableEnded) return
          response.statusCode = 400
          response.setHeader('Content-Type', 'application/json; charset=utf-8')
          response.end(JSON.stringify({ error: 'The chat request could not be read. Please try again.' }))
          server.config.logger.error(error instanceof Error ? error.message : 'Shagun AI request failed')
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), shagunAiDevApi()],
})
