import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'

interface DeltaBadgeProps {
  delta: number
  pct?: number | null
  /** Cuando true, un delta negativo se muestra en rojo (métricas donde subir es bueno) */
  invertBad?: boolean
  suffix?: string
}

export default function DeltaBadge({ delta, pct, suffix }: DeltaBadgeProps) {
  const positive = delta > 0
  const negative = delta < 0
  const neutral = delta === 0

  const color = positive
    ? 'text-emerald-600 bg-emerald-50'
    : negative
    ? 'text-coral bg-coral/10'
    : 'text-slate bg-slate/10'

  const Icon = positive ? ArrowUpRight : negative ? ArrowDownRight : Minus

  const sign = positive ? '+' : ''
  const pctText = pct === null || pct === undefined ? null : `${sign}${pct.toFixed(1)}%`

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${color}`}
    >
      <Icon className="h-3 w-3" />
      {neutral ? '±0' : `${sign}${new Intl.NumberFormat('es-MX').format(delta)}`}
      {suffix ? ` ${suffix}` : ''}
      {pctText ? <span className="opacity-70">({pctText})</span> : null}
    </span>
  )
}
