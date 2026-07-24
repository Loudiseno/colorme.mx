'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Users, Heart, ShoppingBag, Wallet, LogOut, Info, RefreshCw, CheckCircle2 } from 'lucide-react'
import {
  platforms as manualPlatforms,
  weeklyReports,
  bookTotals,
  latest,
  previous,
  delta,
  pctChange,
  formatNumber,
  formatMXN,
  Platform,
} from '@/lib/dashboardData'
import SocialCard from '@/components/panel/SocialCard'
import BooksPanel from '@/components/panel/BooksPanel'
import WeeklyReportCard from '@/components/panel/WeeklyReportCard'
import DeltaBadge from '@/components/panel/DeltaBadge'

type Source = 'windsor' | 'manual'

export default function PanelPage() {
  const router = useRouter()

  const [platforms, setPlatforms] = useState<Platform[]>(manualPlatforms)
  const [source, setSource] = useState<Source>('manual')
  const [fetchedAt, setFetchedAt] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  async function loadData() {
    setLoading(true)
    try {
      const res = await fetch('/api/panel-data', { cache: 'no-store' })
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data.platforms) && data.platforms.length) {
          setPlatforms(data.platforms)
          setSource(data.source)
          setFetchedAt(data.fetchedAt)
        }
      }
    } catch {
      /* se queda con los datos manuales */
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function logout() {
    await fetch('/api/panel-auth', { method: 'DELETE' })
    router.replace('/panel/login')
    router.refresh()
  }

  const sumLatest = (sel: 'followers' | 'interactions') =>
    platforms.reduce((s, p) => s + (latest(p.history)?.[sel] ?? 0), 0)
  const sumPrev = (sel: 'followers' | 'interactions') =>
    platforms.reduce((s, p) => s + (previous(p.history)?.[sel] ?? 0), 0)

  const followers = sumLatest('followers')
  const followersPrev = sumPrev('followers')
  const interactions = sumLatest('interactions')
  const interactionsPrev = sumPrev('interactions')
  const bt = bookTotals()
  const latestReport = weeklyReports[0]

  const kpis = [
    {
      label: 'Seguidores totales',
      value: formatNumber(followers),
      delta: delta(followers, followersPrev),
      pct: pctChange(followers, followersPrev),
      icon: Users,
    },
    {
      label: 'Interacciones / semana',
      value: formatNumber(interactions),
      delta: delta(interactions, interactionsPrev),
      pct: pctChange(interactions, interactionsPrev),
      icon: Heart,
    },
    {
      label: 'Ventas de libros',
      value: formatNumber(bt.units),
      delta: delta(bt.units, bt.unitsPrev),
      pct: pctChange(bt.units, bt.unitsPrev),
      icon: ShoppingBag,
    },
    {
      label: 'Ingreso semanal',
      value: formatMXN(bt.revenue),
      delta: delta(bt.revenue, bt.revenuePrev),
      pct: pctChange(bt.revenue, bt.revenuePrev),
      icon: Wallet,
    },
  ]

  const fetchedLabel = fetchedAt
    ? new Date(fetchedAt).toLocaleString('es-MX', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      })
    : null

  return (
    <div className="min-h-screen bg-canvas px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl text-ink md:text-4xl">Panel ColorMe</h1>
            <p className="text-sm text-slate">
              Crecimiento de redes sociales, libros y reporte semanal
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl border border-silver bg-white px-3 py-2 text-sm font-medium text-charcoal transition hover:border-teal hover:text-teal disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Actualizar
            </button>
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-xl border border-silver bg-white px-4 py-2 text-sm font-medium text-charcoal transition hover:border-teal hover:text-teal"
            >
              <LogOut className="h-4 w-4" />
              Salir
            </button>
          </div>
        </div>

        {/* Estado de la fuente de datos */}
        {source === 'windsor' ? (
          <div className="mb-6 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <p>
              Datos <strong>en vivo vía Windsor.ai</strong>
              {fetchedLabel ? ` · actualizado ${fetchedLabel}` : ''}. Las redes sin conector (p. ej.
              X) siguen con datos manuales.
            </p>
          </div>
        ) : (
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-teal/30 bg-mist px-4 py-3 text-sm text-charcoal">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal-dark" />
            <p>
              Mostrando <strong>datos manuales de ejemplo</strong>. Para activar los datos en vivo,
              conecta tus cuentas en Windsor.ai y define{' '}
              <code className="rounded bg-white px-1">WINDSOR_API_KEY</code> en Vercel. Mientras
              tanto puedes editar <code className="rounded bg-white px-1">lib/dashboardData.ts</code>.
            </p>
          </div>
        )}

        {/* KPIs */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => {
            const Icon = k.icon
            return (
              <div key={k.label} className="rounded-2xl border border-frost bg-white p-5 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-glow/50 text-teal-dark">
                    <Icon className="h-4 w-4" />
                  </span>
                  <DeltaBadge delta={k.delta} pct={k.pct} />
                </div>
                <p className="font-display text-2xl text-ink">{k.value}</p>
                <p className="text-xs uppercase tracking-wide text-slate">{k.label}</p>
              </div>
            )
          })}
        </div>

        {/* Redes sociales */}
        <h2 className="mb-4 font-display text-2xl text-ink">Redes sociales</h2>
        <div className="mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p) => (
            <SocialCard key={p.key} platform={p} />
          ))}
        </div>

        {/* Libros */}
        <div className="mb-10">
          <BooksPanel />
        </div>

        {/* Reporte semanal */}
        {latestReport && (
          <div className="mb-10">
            <WeeklyReportCard report={latestReport} />
          </div>
        )}

        <p className="pb-8 text-center text-xs text-slate">
          Panel privado de ColorMe · Redes en vivo vía Windsor.ai · Libros y X actualizados por semana
        </p>
      </div>
    </div>
  )
}
