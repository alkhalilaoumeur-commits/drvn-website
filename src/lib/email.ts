export interface ContactPayload {
  from_name:  string
  from_email: string
  company:    string
  betreff:    string
  message:    string
  budget:     string
  zeitrahmen: string
  honeypot?:  string
}

const ENDPOINT = '/api/contact'

export async function sendContact(payload: ContactPayload): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body:    JSON.stringify(payload),
  })

  let data: { ok?: boolean; error?: string } = {}
  try { data = await res.json() } catch { /* leerer Body bei Netzfehlern */ }

  if (!res.ok || data.ok !== true) {
    throw new Error(data.error || `HTTP ${res.status}`)
  }
}
