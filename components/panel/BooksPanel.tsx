'use client'

import { ExternalLink, BookOpen } from 'lucide-react'
import {
  books,
  latest,
  previous,
  delta,
  pctChange,
  formatNumber,
  formatMXN,
  formatWeek,
  bookTotals,
} from '@/lib/dashboardData'
import { LineChart } from './Charts'
import DeltaBadge from './DeltaBadge'

export default function BooksPanel() {
  const totals = bookTotals()

  return (
    <section className="rounded-2xl border border-frost bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-glow text-teal-dark">
          <BookOpen className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-display text-xl text-ink">Libros y ventas</h2>
          <p className="text-xs text-slate">Amazon (ES / EN) y Payhip</p>
        </div>
      </div>

      {/* Totales */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-mist p-4">
          <p className="text-xs uppercase tracking-wide text-slate">Ventas esta semana</p>
          <div className="mt-1 flex items-end justify-between">
            <p className="font-display text-2xl text-ink">{formatNumber(totals.units)}</p>
            <DeltaBadge
              delta={delta(totals.units, totals.unitsPrev)}
              pct={pctChange(totals.units, totals.unitsPrev)}
            />
          </div>
        </div>
        <div className="rounded-xl bg-mist p-4">
          <p className="text-xs uppercase tracking-wide text-slate">Ingreso esta semana</p>
          <div className="mt-1 flex items-end justify-between">
            <p className="font-display text-2xl text-ink">{formatMXN(totals.revenue)}</p>
            <DeltaBadge
              delta={delta(totals.revenue, totals.revenuePrev)}
              pct={pctChange(totals.revenue, totals.revenuePrev)}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {books.map((book) => {
          const l = latest(book.history)
          const p = previous(book.history)
          if (!l) return null
          const series = book.history.map((h) => ({ label: formatWeek(h.week), value: h.units }))
          return (
            <div key={book.key} className="rounded-xl border border-frost p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-ink">{book.name}</h3>
                  <p className="text-xs text-slate">
                    {book.platform} · {book.format}
                  </p>
                </div>
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate transition hover:text-teal"
                  aria-label={`Abrir ${book.name}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-2xl text-ink">{formatNumber(l.units)}</p>
                  <p className="text-xs text-slate">{formatMXN(l.revenueMXN)}</p>
                </div>
                <DeltaBadge delta={delta(l.units, p?.units)} pct={pctChange(l.units, p?.units)} />
              </div>
              <div className="mt-2">
                <LineChart
                  data={series}
                  color={book.color}
                  height={56}
                  ariaLabel={`Ventas semanales de ${book.name}`}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
