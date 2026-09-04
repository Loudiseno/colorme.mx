import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Between the Lines — Grief & Art as Therapy Blog | ColorMe',
  description:
    'Reflections, information, and tools on grief, art as therapy, and emotions. A place to explore life, loss, self-discovery, and creativity through art, color, and rituals from around the world.',
  keywords: [
    'grief blog',
    'art as therapy',
    'grief counseling',
    'grief support',
    'coping with loss',
    'emotions',
  ],
  alternates: { canonical: '/en/blog' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Between the Lines — Grief & Art as Therapy Blog | ColorMe',
    description:
      'Reflections, information, and tools on grief, art as therapy, and emotions — through art, color, and rituals from around the world.',
    url: '/en/blog',
  },
  robots: { index: true, follow: true },
}

export default function EnBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
