// ============================================================================
// INTEGRACIÓN CON WINDSOR.AI
// ============================================================================
//
// Windsor.ai agrega los datos orgánicos de Facebook, Instagram, YouTube y
// TikTok en un solo endpoint. Este módulo consulta ese endpoint (solo en el
// servidor) y mapea los datos al modelo del panel.
//
// Requiere la variable de entorno WINDSOR_API_KEY (se define en Vercel).
// Si no está configurada o falla, el panel usa los datos manuales de
// lib/dashboardData.ts sin romperse.
//
// Los nombres de campo de Windsor pueden variar según el conector. Este módulo
// es DEFENSIVO: pide un superconjunto de campos y usa el primero que exista.
// Para ver la respuesta cruda y afinar el mapeo: GET /api/panel-data?debug=1
// ============================================================================

import type { PlatformKey } from './dashboardData'

const ENDPOINT = 'https://connectors.windsor.ai/all'

// "source" de Windsor -> clave de plataforma del panel
const SOURCE_MAP: Record<string, PlatformKey> = {
  facebook: 'facebook_page',
  facebook_organic: 'facebook_page',
  facebook_insights: 'facebook_page',
  facebook_pages: 'facebook_page',
  instagram: 'instagram',
  instagram_insights: 'instagram',
  instagram_business: 'instagram',
  youtube: 'youtube',
  youtube_analytics: 'youtube',
  tiktok: 'tiktok',
  tiktok_organic: 'tiktok',
}

export interface LiveMetric {
  key: PlatformKey
  followers?: number
  interactions?: number
  reach?: number
}

export interface WindsorResult {
  metrics: LiveMetric[]
  raw: unknown
}

function num(v: unknown): number | undefined {
  if (v === null || v === undefined || v === '') return undefined
  const n = typeof v === 'number' ? v : parseFloat(String(v).replace(/,/g, ''))
  return Number.isFinite(n) ? n : undefined
}

function pick(row: Record<string, unknown>, keys: string[]): number | undefined {
  for (const k of keys) {
    const v = num(row[k])
    if (v !== undefined) return v
  }
  return undefined
}

export async function fetchWindsorMetrics(): Promise<WindsorResult | null> {
  const apiKey = process.env.WINDSOR_API_KEY
  if (!apiKey) return null

  const fields = [
    'source',
    'date',
    // seguidores / suscriptores (acumulado)
    'followers',
    'page_fans',
    'page_followers',
    'page_fans_total',
    'followers_count',
    'total_followers',
    'subscribers',
    'subscriber_count',
    // alcance / impresiones / vistas
    'reach',
    'impressions',
    'page_impressions',
    'views',
    'video_views',
    // interacciones
    'likes',
    'reactions',
    'comments',
    'shares',
    'saves',
    'saved',
    'engagement',
    'engagements',
    'total_engagement',
  ].join(',')

  const url =
    `${ENDPOINT}?api_key=${encodeURIComponent(apiKey)}` +
    `&date_preset=last_7d&fields=${encodeURIComponent(fields)}`

  let json: { data?: unknown } | null = null
  try {
    const res = await fetch(url, { next: { revalidate: 1800 } })
    if (!res.ok) return null
    json = await res.json()
  } catch {
    return null
  }

  const rows: Record<string, unknown>[] = Array.isArray(json?.data)
    ? (json!.data as Record<string, unknown>[])
    : []

  const agg = new Map<PlatformKey, { followers?: number; interactions: number; reach: number }>()

  for (const row of rows) {
    const src = String(row.source ?? '').toLowerCase()
    const key = SOURCE_MAP[src]
    if (!key) continue

    const followers = pick(row, [
      'followers',
      'page_followers',
      'page_fans',
      'page_fans_total',
      'followers_count',
      'total_followers',
      'subscribers',
      'subscriber_count',
    ])
    const reach =
      pick(row, ['reach', 'page_impressions', 'impressions', 'views', 'video_views']) ?? 0

    const engagementDirect = pick(row, ['engagement', 'total_engagement', 'engagements'])
    const likes = pick(row, ['likes', 'reactions']) ?? 0
    const comments = pick(row, ['comments']) ?? 0
    const shares = pick(row, ['shares']) ?? 0
    const saves = pick(row, ['saves', 'saved']) ?? 0
    const interactions = engagementDirect ?? likes + comments + shares + saves

    const cur = agg.get(key) ?? { followers: undefined, interactions: 0, reach: 0 }
    // followers es acumulado: nos quedamos con el valor más alto del periodo
    if (followers !== undefined) cur.followers = Math.max(cur.followers ?? 0, followers)
    cur.interactions += interactions
    cur.reach += reach
    agg.set(key, cur)
  }

  const metrics: LiveMetric[] = Array.from(agg.entries()).map(([key, v]) => ({
    key,
    followers: v.followers,
    interactions: Math.round(v.interactions),
    reach: Math.round(v.reach),
  }))

  return { metrics, raw: json }
}
