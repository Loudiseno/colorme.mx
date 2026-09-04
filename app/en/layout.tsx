import type { Metadata } from 'next'
import SetHtmlLang from '@/components/SetHtmlLang'

export const metadata: Metadata = {
  title: {
    default: 'Grief Counseling & Art as Therapy | ColorMe',
    template: '%s | ColorMe',
  },
  description: 'Emotional support through grief counseling and art as therapy. Gentle, one-on-one online sessions with Lou — grief counselor and art-as-therapy facilitator. First session free.',
  alternates: {
    canonical: '/en',
    languages: {
      'es-MX': '/',
      'en': '/en',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/en',
    siteName: 'ColorMe',
    title: 'Grief Counseling & Art as Therapy | ColorMe',
    description: 'Emotional support through grief counseling and art as therapy. Online sessions with Lou.',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetHtmlLang lang="en" />
      {children}
    </>
  )
}
