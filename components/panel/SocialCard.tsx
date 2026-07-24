'use client'

import { ExternalLink } from 'lucide-react'
import {
  Platform,
  latest,
  previous,
  delta,
  pctChange,
  formatNumber,
  formatWeek,
} from '@/lib/dashboardData'
import { LineChart, BarChart } from './Charts'
import DeltaBadge from './DeltaBadge'

export default function SocialCard({ platform }: { platform: Platform }) {
  const l = latest(platform.history)
  const p = previous(platform.history)
  if (!l) return null

  const followersDelta = delta(l.followers, p?.followers)
  const followersPct = pctChange(l.followers, p?.followers)
  const interDelta = delta(l.interactions, p?.interactions)
  const interPct = pctChange(l.interactions, p?.interactions)

  const followerSeries = platform.history.map((h) => ({
    label: formatWeek(h.week),
    value: h.followers,
  }))
  const interSeries = platform.history.map((h) => ({
    label: formatWeek(h.week),
    value: h.interactions,
  }))

  return (
    <div className="flex flex-col rounded-2xl border border-frost bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
            style={{ backgroundColor: platform.color }}
            aria-hidden
          >
            {platform.name.slice(0, 2)}
          </span>
          <div>
            <h3 className="font-display text-lg leading-tight text-ink">{platform.name}</h3>
            <p className="text-xs text-slate">{platform.handle}</p>
          </div>
        </div>
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate transition hover:text-teal"
          aria-label={`Abrir ${platform.name}`}
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Seguidores */}
      <div className="mb-1 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate">{platform.followersLabel}</p>
          <p className="font-display text-3xl text-ink">{formatNumber(l.followers)}</p>
        </div>
        <DeltaBadge delta={followersDelta} pct={followersPct} />
      </div>
      <LineChart
        data={followerSeries}
        color={platform.color === '#000000' || platform.color === '#111111' ? '#0D9488' : platform.color}
        ariaLabel={`Crecimiento de ${platform.followersLabel} en ${platform.name}`}
      />

      {/* Interacciones */}
      <div className="mt-4 border-t border-frost pt-3">
        <div className="mb-1 flex items-center justify-between">
          <p className="text-xs uppercase tracking-wide text-slate">Interacciones / semana</p>
          <DeltaBadge delta={interDelta} pct={interPct} />
        </div>
        <div className="flex items-end justify-between gap-3">
          <p className="font-display text-xl text-charcoal">{formatNumber(l.interactions)}</p>
          <div className="w-1/2">
            <BarChart
              data={interSeries}
              color={platform.color === '#000000' || platform.color === '#111111' ? '#0D9488' : platform.color}
              height={44}
              ariaLabel={`Interacciones semanales en ${platform.name}`}
            />
          </div>
        </div>
      </div>

      {(l.reach || l.posts) && (
        <div className="mt-3 flex gap-4 text-xs text-slate">
          {l.reach ? <span>Alcance: {formatNumber(l.reach)}</span> : null}
          {l.posts !== undefined ? <span>Posts: {l.posts}</span> : null}
        </div>
      )}
    </div>
  )
}
