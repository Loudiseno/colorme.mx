import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import crypto from 'crypto'
import { getPanelData } from '@/lib/panelData'
import { fetchWindsorMetrics } from '@/lib/windsor'

const SALT = 'colorme-panel:'

async function isAuthed(): Promise<boolean> {
  const pw = process.env.PANEL_PASSWORD
  if (!pw) return false
  const token = crypto.createHash('sha256').update(SALT + pw).digest('hex')
  const cookie = (await cookies()).get('panel_session')?.value
  return !!cookie && cookie === token
}

export async function GET(request: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  // Modo depuración: devuelve la respuesta cruda de Windsor para afinar el mapeo
  const url = new URL(request.url)
  if (url.searchParams.get('debug') === '1') {
    const raw = await fetchWindsorMetrics()
    return NextResponse.json({
      configured: !!process.env.WINDSOR_API_KEY,
      windsor: raw,
    })
  }

  const data = await getPanelData()
  return NextResponse.json(data)
}
