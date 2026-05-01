'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function DueloPorTuCuerpoPage() {
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
            Duelo por tu cuerpo: cuando ya no es el mismo
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo por tu cuerpo.jpeg" alt="Duelo por el cuerpo" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            A veces perdemos partes de nosotros mismos: una cirugía, una enfermedad crónica, el envejecimiento, un accidente. El cuerpo que conocíamos ya no está y eso también es un duelo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Extrañar quien eras</h2>
          <p>
            Es válido extrañar tu cuerpo anterior. La energía que tenías, la movilidad, la imagen en el espejo. No es vanidad, es pérdida real.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El cuerpo como casa</h2>
          <p>
            Tu cuerpo es donde vives. Cuando cambia drásticamente, necesitas tiempo para habitar de nuevo ese espacio transformado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Hacia una nueva relación</h2>
          <p>
            Sanar este duelo implica construir una nueva relación con tu cuerpo. No desde la resignación, sino desde la compasión y el cuidado.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Tu cuerpo ha cambiado?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas procesar estos cambios, puedo acompañarte desde la arteterapia y la tanatología.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu consulta gratuita</a>
        </div>

        <RelatedArticles currentSlug="duelo-por-tu-cuerpo" category="tanatologia" />
      </div>
    </article>
  )
}
