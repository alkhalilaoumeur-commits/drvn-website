import { Resend } from 'resend'

interface ContactPayload {
  from_name?:  string
  from_email?: string
  company?:    string
  betreff?:    string
  message?:    string
  budget?:     string
  zeitrahmen?: string
  honeypot?:   string
}

const ZIEL_EMAIL = process.env.CONTACT_TO_EMAIL || 'alkhalilaoumeur@gmail.com'
const ABSENDER   = process.env.CONTACT_FROM_EMAIL || 'DRVN Kontakt <noreply@drvnautomatisations.com>'

function escape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function validEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254
}

export async function handleContact(body: ContactPayload): Promise<{ ok: boolean; error?: string; status: number }> {
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, status: 500, error: 'Server: RESEND_API_KEY nicht gesetzt' }
  }

  if (body.honeypot && body.honeypot.length > 0) {
    return { ok: true, status: 200 }
  }

  const name    = (body.from_name  ?? '').trim().slice(0, 120)
  const email   = (body.from_email ?? '').trim().slice(0, 254)
  const company = (body.company    ?? '').trim().slice(0, 200) || 'Nicht angegeben'
  const betreff = (body.betreff    ?? '').trim().slice(0, 120) || 'Allgemeine Anfrage'
  const message = (body.message    ?? '').trim().slice(0, 5000)
  const budget  = (body.budget     ?? '').trim().slice(0, 80) || 'Nicht angegeben'
  const zeit    = (body.zeitrahmen ?? '').trim().slice(0, 80) || 'Nicht angegeben'

  if (!name)            return { ok: false, status: 400, error: 'Name fehlt' }
  if (!validEmail(email)) return { ok: false, status: 400, error: 'Ungültige E-Mail' }
  if (message.length < 5) return { ok: false, status: 400, error: 'Nachricht zu kurz' }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const html = `<!DOCTYPE html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;background:#f5f5f0;padding:24px;color:#1a1a1a">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e0ddd5;border-radius:12px;overflow:hidden">
    <div style="background:#0a0906;color:#fff;padding:24px">
      <p style="margin:0 0 4px;font-family:monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:#FF4D00">Neue Anfrage</p>
      <h1 style="margin:0;font-size:22px;font-weight:700">${escape(betreff)}</h1>
    </div>
    <div style="padding:24px">
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;width:120px">Von</td><td style="padding:8px 0;font-weight:600">${escape(name)}</td></tr>
        <tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">E-Mail</td><td style="padding:8px 0"><a href="mailto:${escape(email)}" style="color:#FF4D00;text-decoration:none">${escape(email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Unternehmen</td><td style="padding:8px 0">${escape(company)}</td></tr>
        <tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Budget</td><td style="padding:8px 0">${escape(budget)}</td></tr>
        <tr><td style="padding:8px 0;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Zeitrahmen</td><td style="padding:8px 0">${escape(zeit)}</td></tr>
      </table>
      <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e0ddd5">
        <p style="margin:0 0 8px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Nachricht</p>
        <p style="margin:0;white-space:pre-wrap;line-height:1.65">${escape(message)}</p>
      </div>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e0ddd5">
        <a href="mailto:${escape(email)}?subject=Re:%20${encodeURIComponent(betreff)}" style="display:inline-block;background:#FF4D00;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:600;font-size:13px">Direkt antworten →</a>
      </div>
    </div>
    <div style="background:#f8f7f3;padding:16px 24px;border-top:1px solid #e0ddd5">
      <p style="margin:0;font-size:11px;color:#999;font-family:monospace">via drvnautomatisations.com · ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
    </div>
  </div>
</body></html>`

  const text =
    `Neue Anfrage: ${betreff}\n\n` +
    `Von:         ${name}\n` +
    `E-Mail:      ${email}\n` +
    `Unternehmen: ${company}\n` +
    `Budget:      ${budget}\n` +
    `Zeitrahmen:  ${zeit}\n\n` +
    `Nachricht:\n${message}\n`

  try {
    const result = await resend.emails.send({
      from:     ABSENDER,
      to:       [ZIEL_EMAIL],
      replyTo:  email,
      subject:  `[DRVN] ${betreff} — ${name}`,
      html,
      text,
    })
    if (result.error) {
      return { ok: false, status: 502, error: result.error.message || 'Resend-Fehler' }
    }
    return { ok: true, status: 200 }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Unbekannter Fehler'
    return { ok: false, status: 502, error: msg }
  }
}

interface VercelReq {
  method?: string
  body?: ContactPayload | string
}
interface VercelRes {
  status: (code: number) => VercelRes
  json: (data: unknown) => void
  end: () => void
  setHeader: (name: string, value: string) => void
}

export default async function handler(req: VercelReq, res: VercelRes) {
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Methode nicht erlaubt' })
    return
  }

  let body: ContactPayload = {}
  if (typeof req.body === 'string') {
    try { body = JSON.parse(req.body) } catch { body = {} }
  } else if (req.body) {
    body = req.body
  }

  const result = await handleContact(body)
  res.status(result.status).json(result)
}
