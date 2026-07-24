'use client'

import { useRouter } from 'next/navigation'
import { Users, Heart, ShoppingBag, Wallet, LogOut, Info } from 'lucide-react'
import {
  platforms,
  weeklyReports,
  totalFollowers,
  totalFollowersPrev,
  totalInteractions,
  totalInteractionsPrev,
  bookTotals,
  delta,
  pctChange,
  formatNumber,
  formatMXN,
} from '@/lib/dashboardData'
import SocialCard from '@/components/panel/SocialCard'
import BooksPanel from '@/components/panel/BooksPanel'
import WeeklyReportCard from '@/components/panel/WeeklyReportCard'
import DeltaBadge from '@/components/panel/DeltaBadge'

export default function PanelPage() {
  const router = useRouter()

  const followers = totalFollowers()
  const followersPrev = totalFollowersPrev()
  const interactions = totalInteractions()
  const interactionsPrev = totalInteractionsPrev()
  const bt = bookTotals()
  const latestReport = weeklyReports[0]

  async function logout() {
    await fetch('/api/panel-auth', { method: 'DELETE' })
    router.replace('/panel/login')
    router.refresh()
  }

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

  return (
    <div className="min-h-screen bg-canvas px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl text-ink md:text-4xl">Panel ColorMe</h1>
            <p className="text-sm text-slate">Crecimiento de redes sociales, libros y reporte semanal</p>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 rounded-xl border border-silver bg-white px-4 py-2 text-sm font-medium text-charcoal transition hover:border-teal hover:text-teal"
          >
            <LogOut className="h-4 w-4" />
            Salir
          </button>
        </div>

        {/* Aviso datos de ejemplo */}
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-teal/30 bg-mist px-4 py-3 text-sm text-charcoal">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal-dark" />
          <p>
            Los números que ves son <strong>datos de ejemplo</strong>. Para poner tus cifras reales
            edita <code className="rounded bg-white px-1">lib/dashboardData.ts</code> (una fila por
            semana) o pídeme que las actualice. Listo para conectar APIs en vivo cuando quieras.
          </p>
        </div>

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
          Panel privado de ColorMe · Datos actualizados manualmente por semana
        </p>
      </div>
    </div>
  )
}
