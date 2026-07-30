import type { Metadata } from 'next'
import SetHtmlLang from '@/components/SetHtmlLang'

export const metadata: Metadata = {
  title: {
    default: 'Art as Therapy & Grief Counseling | ColorMe',
    template: '%s | ColorMe',
  },
  description: 'Emotional support through art as therapy and grief counseling. Gentle, one-on-one online sessions with Lou — art therapist and grief counselor. First session free.',
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
    title: 'Art as Therapy & Grief Counseling | ColorMe',
    description: 'Emotional support through art as therapy and grief counseling. Online sessions with Lou.',
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
