import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Panel privado',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
