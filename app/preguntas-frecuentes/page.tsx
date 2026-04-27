'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import FAQ from '@/components/FAQ'

export default function PreguntasFrecuentesPage() {
  return (
    <main className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al inicio
        </Link>
      </div>
      <FAQ />
    </main>
  )
}
