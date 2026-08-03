'use client'

import { CheckCircle2, XCircle, Lightbulb, TrendingUp, Calendar } from 'lucide-react'
import { WeeklyReport, formatWeek } from '@/lib/dashboardData'

const blocks = [
  {
    key: 'wins' as const,
    title: 'Qué funcionó',
    icon: CheckCircle2,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    key: 'misses' as const,
    title: 'Qué no funcionó',
    icon: XCircle,
    color: 'text-coral',
    bg: 'bg-coral/10',
  },
  {
    key: 'insights' as const,
    title: 'Insights',
    icon: Lightbulb,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    key: 'improvements' as const,
    title: 'Mejoras para la próxima semana',
    icon: TrendingUp,
    color: 'text-teal-dark',
    bg: 'bg-teal-glow/40',
  },
]

export default function WeeklyReportCard({ report }: { report: WeeklyReport }) {
  return (
    <section className="rounded-2xl border border-frost bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-glow text-teal-dark">
          <Calendar className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-display text-xl text-ink">Reporte semanal</h2>
          <p className="text-xs text-slate">Semana del {formatWeek(report.week)}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {blocks.map((b) => {
          const items = report[b.key]
          const Icon = b.icon
          return (
            <div key={b.key} className={`rounded-xl ${b.bg} p-4`}>
              <div className={`mb-2 flex items-center gap-2 font-semibold ${b.color}`}>
                <Icon className="h-4 w-4" />
                <span className="text-sm">{b.title}</span>
              </div>
              <ul className="space-y-1.5">
                {items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-charcoal">
                    <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${b.color} bg-current`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
