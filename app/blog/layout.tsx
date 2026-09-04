import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Blog - Entre Líneas | ColorMe',
  description:
    'Reflexiones, información y herramientas sobre tanatología, arte como terapia y el universo de las emociones. Explora la vida, la pérdida, el autodescubrimiento y la creatividad.',
  keywords: [
    'blog arte como terapia',
    'blog tanatología',
    'artículos duelo',
    'artículos arte como terapia',
    'bienestar emocional',
    'terapia creativa blog',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog - Entre Líneas | ColorMe',
    description:
      'Reflexiones, información y herramientas sobre tanatología, arte como terapia y el universo de las emociones.',
    url: '/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema />
      {children}
    </>
  )
}
