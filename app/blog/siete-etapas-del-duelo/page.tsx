'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function SieteEtapasDueloPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Las 7 etapas del duelo: mito y realidad
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/siete etapas del duelo.jpeg" alt="Etapas del duelo" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Seguramente has escuchado sobre las famosas etapas del duelo. Pero ¿realmente funcionan así? La respuesta corta es: no exactamente.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El origen del modelo</h2>
          <p>
            Elisabeth Kübler-Ross propuso originalmente 5 etapas (negación, ira, negociación, depresión, aceptación) para describir lo que sentían los pacientes terminales, no quienes los perdían.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué no es lineal</h2>
          <p>
            El duelo no sigue un orden. Puedes sentir aceptación un día e ira al siguiente. Puedes saltarte etapas o experimentar varias al mismo tiempo. Tu proceso es único.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que sí es cierto</h2>
          <p>
            El duelo implica múltiples emociones cambiantes. No hay forma correcta de vivirlo. Toma el tiempo que necesita. Y con el tiempo, la mayoría de las personas encuentran formas de integrar la pérdida en sus vidas.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás atravesando un duelo?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas acompañamiento en tu proceso, sin importar en qué etapa estés, estoy aquí.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu consulta gratuita</a>
        </div>

        <RelatedArticles currentSlug="siete-etapas-del-duelo" category="tanatologia" />
      </div>
    </article>
  )
}
