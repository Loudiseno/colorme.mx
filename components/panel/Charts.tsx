'use client'

// Gráficas ligeras en SVG puro (sin librerías) para el panel.

interface SeriesPoint {
  label: string
  value: number
}

interface LineChartProps {
  data: SeriesPoint[]
  color: string
  height?: number
  ariaLabel?: string
}

export function LineChart({ data, color, height = 120, ariaLabel }: LineChartProps) {
  const width = 320
  const padX = 6
  const padY = 10
  const values = data.map((d) => d.value)
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1

  const innerW = width - padX * 2
  const innerH = height - padY * 2

  const points = data.map((d, i) => {
    const x = padX + (data.length === 1 ? innerW / 2 : (i / (data.length - 1)) * innerW)
    const y = padY + innerH - ((d.value - min) / range) * innerH
    return { x, y }
  })

  const linePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ')

  const areaPath =
    `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${height - padY} ` +
    `L ${points[0].x.toFixed(1)} ${height - padY} Z`

  const gradId = `grad-${color.replace('#', '')}`

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradId})`} />
      <path
        d={linePath}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i === points.length - 1 ? 3.5 : 0}
          fill={color}
        />
      ))}
    </svg>
  )
}

interface BarChartProps {
  data: SeriesPoint[]
  color: string
  height?: number
  ariaLabel?: string
}

export function BarChart({ data, color, height = 80, ariaLabel }: BarChartProps) {
  const width = 320
  const gap = 4
  const barW = (width - gap * (data.length - 1)) / data.length
  const max = Math.max(...data.map((d) => d.value)) || 1

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="none"
    >
      {data.map((d, i) => {
        const h = (d.value / max) * (height - 4)
        const x = i * (barW + gap)
        const y = height - h
        const isLast = i === data.length - 1
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barW}
            height={h}
            rx="2"
            fill={color}
            opacity={isLast ? 1 : 0.4}
          />
        )
      })}
    </svg>
  )
}
