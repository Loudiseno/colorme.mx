// Combina los datos en vivo de Windsor con el histórico/manual del panel.
// Solo se ejecuta en el servidor.

import { platforms as manualPlatforms, Platform, PlatformKey } from './dashboardData'
import { fetchWindsorMetrics, LiveMetric } from './windsor'

function currentWeekMonday(): string {
  const d = new Date()
  const day = (d.getDay() + 6) % 7 // 0 = lunes
  d.setDate(d.getDate() - day)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${dd}`
}

export interface PanelData {
  platforms: Platform[]
  source: 'windsor' | 'manual'
  fetchedAt: string
  liveKeys: PlatformKey[]
}

export async function getPanelData(): Promise<PanelData> {
  const fetchedAt = new Date().toISOString()
  const result = await fetchWindsorMetrics()

  if (!result || result.metrics.length === 0) {
    return { platforms: manualPlatforms, source: 'manual', fetchedAt, liveKeys: [] }
  }

  const byKey = new Map<PlatformKey, LiveMetric>()
  result.metrics.forEach((m) => byKey.set(m.key, m))
  const week = currentWeekMonday()

  const merged: Platform[] = manualPlatforms.map((p) => {
    const live = byKey.get(p.key)
    if (!live) return p

    const history = [...p.history]
    const last = history[history.length - 1]
    const point = {
      week,
      followers: live.followers ?? last.followers,
      interactions: live.interactions ?? last.interactions,
      reach: live.reach ?? last.reach,
      posts: last.posts,
    }
    if (last.week === week) {
      history[history.length - 1] = point
    } else {
      history.push(point)
    }
    return { ...p, history }
  })

  return {
    platforms: merged,
    source: 'windsor',
    fetchedAt,
    liveKeys: Array.from(byKey.keys()),
  }
}
