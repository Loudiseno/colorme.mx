import { siteConfig } from '@/lib/seo'

// ============================================================================
// PANEL DE REDES SOCIALES Y LIBROS — DATOS
// ============================================================================
//
// Este archivo es la ÚNICA fuente de datos del panel privado (/panel).
// Para actualizar tus números NO necesitas tocar el diseño: solo edita los
// arreglos `history` de cada red y de cada libro, agregando un objeto nuevo
// por semana. El panel calcula solo el crecimiento, los deltas y las gráficas.
//
// Cada semana usa la fecha del LUNES en formato 'YYYY-MM-DD'.
//
// ⚠️ Los números actuales son DE EJEMPLO para que veas cómo se ve el panel.
//    Reemplázalos con tus cifras reales (o pídeme que las actualice).
//    Cuando conectemos APIs en vivo, estos arreglos se llenarán solos.
// ============================================================================

export type PlatformKey =
  | 'facebook_profile'
  | 'facebook_page'
  | 'instagram'
  | 'youtube'
  | 'tiktok'
  | 'x'

export interface Snapshot {
  /** Lunes de la semana, 'YYYY-MM-DD' */
  week: string
  /** Seguidores / suscriptores totales al cierre de la semana */
  followers: number
  /** Interacciones de la semana (me gusta + comentarios + compartidos + guardados) */
  interactions: number
  /** Alcance / impresiones de la semana (opcional) */
  reach?: number
  /** Publicaciones hechas en la semana (opcional) */
  posts?: number
}

export interface Platform {
  key: PlatformKey
  name: string
  handle: string
  url: string
  /** Color de acento de la marca de la red (para gráficas) */
  color: string
  /** Etiqueta de la métrica principal de seguidores */
  followersLabel: string
  history: Snapshot[]
}

// ----------------------------------------------------------------------------
// REDES SOCIALES
// ----------------------------------------------------------------------------

export const platforms: Platform[] = [
  {
    key: 'instagram',
    name: 'Instagram',
    handle: '@color.me.lab',
    url: 'https://www.instagram.com/color.me.lab/',
    color: '#E1306C',
    followersLabel: 'Seguidores',
    history: [
      { week: '2026-06-01', followers: 820, interactions: 340, reach: 4100, posts: 4 },
      { week: '2026-06-08', followers: 868, interactions: 402, reach: 4800, posts: 5 },
      { week: '2026-06-15', followers: 915, interactions: 388, reach: 4600, posts: 4 },
      { week: '2026-06-22', followers: 981, interactions: 470, reach: 5900, posts: 6 },
      { week: '2026-06-29', followers: 1042, interactions: 510, reach: 6400, posts: 5 },
      { week: '2026-07-06', followers: 1130, interactions: 640, reach: 8200, posts: 7 },
      { week: '2026-07-13', followers: 1198, interactions: 588, reach: 7400, posts: 5 },
      { week: '2026-07-20', followers: 1287, interactions: 712, reach: 9100, posts: 6 },
    ],
  },
  {
    key: 'facebook_page',
    name: 'Facebook (Página)',
    handle: 'Color Me',
    url: 'https://www.facebook.com/profile.php?id=61580661293394',
    color: '#1877F2',
    followersLabel: 'Seguidores',
    history: [
      { week: '2026-06-01', followers: 210, interactions: 95, reach: 1800, posts: 3 },
      { week: '2026-06-08', followers: 228, interactions: 110, reach: 2100, posts: 4 },
      { week: '2026-06-15', followers: 244, interactions: 102, reach: 1950, posts: 3 },
      { week: '2026-06-22', followers: 265, interactions: 130, reach: 2600, posts: 4 },
      { week: '2026-06-29', followers: 289, interactions: 141, reach: 2900, posts: 4 },
      { week: '2026-07-06', followers: 318, interactions: 168, reach: 3400, posts: 5 },
      { week: '2026-07-13', followers: 340, interactions: 152, reach: 3100, posts: 4 },
      { week: '2026-07-20', followers: 372, interactions: 190, reach: 3800, posts: 5 },
    ],
  },
  {
    key: 'facebook_profile',
    name: 'Facebook (Perfil)',
    handle: 'Perfil personal',
    url: 'https://www.facebook.com/profile.php?id=61577247024225',
    color: '#0866FF',
    followersLabel: 'Amigos / Seguidores',
    history: [
      { week: '2026-06-01', followers: 145, interactions: 60, reach: 900, posts: 2 },
      { week: '2026-06-08', followers: 152, interactions: 68, reach: 1000, posts: 2 },
      { week: '2026-06-15', followers: 160, interactions: 55, reach: 850, posts: 1 },
      { week: '2026-06-22', followers: 171, interactions: 74, reach: 1150, posts: 3 },
      { week: '2026-06-29', followers: 180, interactions: 80, reach: 1200, posts: 2 },
      { week: '2026-07-06', followers: 194, interactions: 96, reach: 1500, posts: 3 },
      { week: '2026-07-13', followers: 203, interactions: 82, reach: 1300, posts: 2 },
      { week: '2026-07-20', followers: 218, interactions: 104, reach: 1650, posts: 3 },
    ],
  },
  {
    key: 'tiktok',
    name: 'TikTok',
    handle: '@colorme_lab',
    url: 'https://www.tiktok.com/@colorme_lab',
    color: '#000000',
    followersLabel: 'Seguidores',
    history: [
      { week: '2026-06-01', followers: 320, interactions: 900, reach: 12000, posts: 3 },
      { week: '2026-06-08', followers: 388, interactions: 1240, reach: 18500, posts: 4 },
      { week: '2026-06-15', followers: 430, interactions: 1050, reach: 15200, posts: 3 },
      { week: '2026-06-22', followers: 512, interactions: 1680, reach: 24000, posts: 5 },
      { week: '2026-06-29', followers: 604, interactions: 1950, reach: 29000, posts: 5 },
      { week: '2026-07-06', followers: 742, interactions: 2600, reach: 41000, posts: 6 },
      { week: '2026-07-13', followers: 830, interactions: 2210, reach: 33000, posts: 4 },
      { week: '2026-07-20', followers: 968, interactions: 3120, reach: 52000, posts: 6 },
    ],
  },
  {
    key: 'youtube',
    name: 'YouTube',
    handle: '@ColorMe-lab',
    url: 'https://www.youtube.com/@ColorMe-lab',
    color: '#FF0000',
    followersLabel: 'Suscriptores',
    history: [
      { week: '2026-06-01', followers: 48, interactions: 40, reach: 620, posts: 1 },
      { week: '2026-06-08', followers: 55, interactions: 52, reach: 780, posts: 1 },
      { week: '2026-06-15', followers: 61, interactions: 44, reach: 700, posts: 0 },
      { week: '2026-06-22', followers: 72, interactions: 66, reach: 980, posts: 1 },
      { week: '2026-06-29', followers: 84, interactions: 71, reach: 1100, posts: 1 },
      { week: '2026-07-06', followers: 98, interactions: 90, reach: 1450, posts: 2 },
      { week: '2026-07-13', followers: 109, interactions: 76, reach: 1200, posts: 1 },
      { week: '2026-07-20', followers: 126, interactions: 102, reach: 1700, posts: 1 },
    ],
  },
  {
    key: 'x',
    name: 'X (Twitter)',
    handle: '@ColorMeLab',
    url: 'https://x.com/ColorMeLab',
    color: '#111111',
    followersLabel: 'Seguidores',
    history: [
      { week: '2026-06-01', followers: 62, interactions: 28, reach: 1400, posts: 5 },
      { week: '2026-06-08', followers: 68, interactions: 34, reach: 1600, posts: 6 },
      { week: '2026-06-15', followers: 71, interactions: 22, reach: 1200, posts: 4 },
      { week: '2026-06-22', followers: 79, interactions: 41, reach: 1900, posts: 7 },
      { week: '2026-06-29', followers: 86, interactions: 46, reach: 2100, posts: 6 },
      { week: '2026-07-06', followers: 97, interactions: 58, reach: 2600, posts: 8 },
      { week: '2026-07-13', followers: 104, interactions: 44, reach: 2000, posts: 5 },
      { week: '2026-07-20', followers: 115, interactions: 63, reach: 2900, posts: 7 },
    ],
  },
]

// ----------------------------------------------------------------------------
// LIBROS Y VENTAS
// ----------------------------------------------------------------------------

export interface BookSnapshot {
  /** Lunes de la semana, 'YYYY-MM-DD' */
  week: string
  /** Unidades vendidas en la semana */
  units: number
  /** Ingreso / regalías de la semana en MXN */
  revenueMXN: number
}

export interface BookChannel {
  key: string
  name: string
  format: string
  platform: 'Amazon' | 'Payhip'
  url: string
  color: string
  history: BookSnapshot[]
}

export const books: BookChannel[] = [
  {
    key: 'amazon_es',
    name: 'Indeleble — Español',
    format: 'Digital / Impreso',
    platform: 'Amazon',
    url: siteConfig.book.amazonEs,
    color: '#FF9900',
    history: [
      { week: '2026-06-01', units: 3, revenueMXN: 210 },
      { week: '2026-06-08', units: 5, revenueMXN: 350 },
      { week: '2026-06-15', units: 4, revenueMXN: 280 },
      { week: '2026-06-22', units: 7, revenueMXN: 490 },
      { week: '2026-06-29', units: 6, revenueMXN: 420 },
      { week: '2026-07-06', units: 9, revenueMXN: 630 },
      { week: '2026-07-13', units: 8, revenueMXN: 560 },
      { week: '2026-07-20', units: 11, revenueMXN: 770 },
    ],
  },
  {
    key: 'amazon_en',
    name: 'Indeleble — Inglés',
    format: 'Digital',
    platform: 'Amazon',
    url: siteConfig.book.amazonEn,
    color: '#146EB4',
    history: [
      { week: '2026-06-01', units: 1, revenueMXN: 80 },
      { week: '2026-06-08', units: 2, revenueMXN: 160 },
      { week: '2026-06-15', units: 1, revenueMXN: 80 },
      { week: '2026-06-22', units: 3, revenueMXN: 240 },
      { week: '2026-06-29', units: 2, revenueMXN: 160 },
      { week: '2026-07-06', units: 4, revenueMXN: 320 },
      { week: '2026-07-13', units: 3, revenueMXN: 240 },
      { week: '2026-07-20', units: 5, revenueMXN: 400 },
    ],
  },
  {
    key: 'payhip',
    name: 'Payhip (PDF y diario)',
    format: 'Descarga digital',
    platform: 'Payhip',
    url: 'https://payhip.com/dashboard',
    color: '#00B289',
    history: [
      { week: '2026-06-01', units: 2, revenueMXN: 300 },
      { week: '2026-06-08', units: 4, revenueMXN: 600 },
      { week: '2026-06-15', units: 3, revenueMXN: 450 },
      { week: '2026-06-22', units: 6, revenueMXN: 900 },
      { week: '2026-06-29', units: 5, revenueMXN: 750 },
      { week: '2026-07-06', units: 8, revenueMXN: 1200 },
      { week: '2026-07-13', units: 7, revenueMXN: 1050 },
      { week: '2026-07-20', units: 10, revenueMXN: 1500 },
    ],
  },
]

// ----------------------------------------------------------------------------
// REPORTE SEMANAL
// ----------------------------------------------------------------------------

export interface WeeklyReport {
  /** Lunes de la semana del reporte, 'YYYY-MM-DD' */
  week: string
  /** Lo que funcionó */
  wins: string[]
  /** Lo que no funcionó */
  misses: string[]
  /** Aprendizajes / insights */
  insights: string[]
  /** Mejoras y acciones para la próxima semana */
  improvements: string[]
}

// El reporte más reciente va primero.
export const weeklyReports: WeeklyReport[] = [
  {
    week: '2026-07-20',
    wins: [
      'TikTok fue el motor de la semana: +138 seguidores y 3,120 interacciones (el mejor dato del mes).',
      'Instagram cruzó los 1,287 seguidores; los reels de ejercicios de arteterapia siguen siendo lo más guardado.',
      'Payhip llegó a 10 ventas y $1,500 MXN, su mejor semana.',
    ],
    misses: [
      'X sigue estancado: mucho esfuerzo de publicación (7 posts) para pocas interacciones (63).',
      'YouTube subió solo 1 video; el ritmo de publicación es demasiado bajo para crecer suscriptores.',
    ],
    insights: [
      'El formato video corto (TikTok + Reels) genera 4–5x más alcance que las imágenes estáticas de Facebook.',
      'Amazon ES y Payhip se mueven juntos: cuando hay contenido de duelo con enlace directo al libro, ambos suben.',
    ],
    improvements: [
      'Reciclar los 2 TikToks top de la semana como Reels de IG y Shorts de YouTube.',
      'Bajar la frecuencia en X a 3 posts/semana enfocados y medir si mejora la interacción por post.',
      'Agregar llamada a la acción al libro en la descripción de los 3 videos con más alcance.',
    ],
  },
]

// ----------------------------------------------------------------------------
// HELPERS
// ----------------------------------------------------------------------------

export function latest<T>(history: T[]): T | undefined {
  return history[history.length - 1]
}

export function previous<T>(history: T[]): T | undefined {
  return history.length >= 2 ? history[history.length - 2] : undefined
}

export function delta(current: number, prev: number | undefined): number {
  if (prev === undefined) return 0
  return current - prev
}

export function pctChange(current: number, prev: number | undefined): number | null {
  if (prev === undefined || prev === 0) return null
  return ((current - prev) / prev) * 100
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat('es-MX').format(n)
}

export function formatMXN(n: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(n)
}

export function formatWeek(week: string): string {
  const [y, m, d] = week.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return date.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })
}

/** Total de seguidores actuales sumando todas las redes */
export function totalFollowers(): number {
  return platforms.reduce((sum, p) => sum + (latest(p.history)?.followers ?? 0), 0)
}

/** Total de seguidores de la semana previa (para el delta global) */
export function totalFollowersPrev(): number {
  return platforms.reduce((sum, p) => sum + (previous(p.history)?.followers ?? 0), 0)
}

/** Total de interacciones de la última semana */
export function totalInteractions(): number {
  return platforms.reduce((sum, p) => sum + (latest(p.history)?.interactions ?? 0), 0)
}

export function totalInteractionsPrev(): number {
  return platforms.reduce((sum, p) => sum + (previous(p.history)?.interactions ?? 0), 0)
}

/** Ventas totales de libros de la última semana (unidades e ingreso) */
export function bookTotals(): { units: number; revenue: number; unitsPrev: number; revenuePrev: number } {
  let units = 0
  let revenue = 0
  let unitsPrev = 0
  let revenuePrev = 0
  for (const b of books) {
    const l = latest(b.history)
    const p = previous(b.history)
    units += l?.units ?? 0
    revenue += l?.revenueMXN ?? 0
    unitsPrev += p?.units ?? 0
    revenuePrev += p?.revenueMXN ?? 0
  }
  return { units, revenue, unitsPrev, revenuePrev }
}
