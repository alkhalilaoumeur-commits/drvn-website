import 'dotenv/config'
import express from 'express'
import { handleContact } from '../api/contact'

const app  = express()
const PORT = Number(process.env.API_DEV_PORT || 3030)

app.use(express.json({ limit: '1mb' }))

app.post('/api/contact', async (req, res) => {
  const result = await handleContact(req.body ?? {})
  res.status(result.status).json(result)
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, resend_configured: Boolean(process.env.RESEND_API_KEY) })
})

app.listen(PORT, () => {
  console.log(`[DRVN-Dev-API] läuft auf http://localhost:${PORT}`)
  console.log(`[DRVN-Dev-API] RESEND_API_KEY: ${process.env.RESEND_API_KEY ? '✓ gesetzt' : '✗ FEHLT'}`)
})
