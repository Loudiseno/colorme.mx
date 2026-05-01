'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function ComoHablarHijosCancerPage() {
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
            Cómo hablar con tus hijos sobre el cáncer
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/como-hablar-con-hijos-sobre-cancer.jpeg" alt="Hablar con hijos sobre cáncer" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Cuando el cáncer llega a una familia, una de las preguntas más difíciles es: ¿cómo se lo digo a mis hijos? La honestidad adaptada a su edad es siempre el mejor camino.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué es importante hablar</h2>
          <p>
            Los niños perciben que algo pasa. El silencio puede generar más ansiedad que la verdad. Hablar les da la oportunidad de procesar, preguntar y sentirse incluidos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Según la edad</h2>
          <p>
            Con niños pequeños, usa palabras simples y concretas. Con adolescentes, puedes ser más directo y responder sus preguntas con honestidad. Todos necesitan saber que pueden expresar lo que sienten.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué esperar</h2>
          <p>
            Pueden reaccionar con miedo, enojo, tristeza o incluso indiferencia aparente. Todas las reacciones son válidas. Lo importante es mantener el diálogo abierto.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Necesitas orientación?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas ayuda para comunicarte con tus hijos en este momento difícil, puedo acompañarte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu consulta gratuita</a>
        </div>

        <RelatedArticles currentSlug="como-hablar-con-hijos-sobre-cancer" category="tanatologia" />
      </div>
    </article>
  )
}
