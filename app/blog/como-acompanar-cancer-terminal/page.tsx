'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function ComoAcompanarCancerTerminalPage() {
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
            Cómo acompañar a alguien con cáncer terminal
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/como-acompanar-cancer-terminal.jpeg" alt="Acompañamiento en cáncer terminal" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Acompañar a alguien que enfrenta un diagnóstico de cáncer terminal es una de las experiencias más desafiantes y significativas que podemos vivir. No hay manual, no hay palabras perfectas, solo está la presencia.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que realmente importa</h2>
          <p>
            Más que hacer, se trata de estar. La presencia silenciosa a veces dice más que cualquier palabra. No necesitas tener respuestas ni soluciones. Tu compañía ya es un regalo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué puedes hacer</h2>
          <p>
            Escuchar sin juzgar. Preguntar qué necesitan en lugar de asumir. Respetar sus tiempos y sus silencios. Ofrecer ayuda concreta: preparar comida, acompañar a citas médicas, estar disponible para una llamada.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué evitar</h2>
          <p>
            Frases como "todo va a estar bien" o "tienes que ser fuerte" pueden invalidar lo que la persona siente. Evita comparar con otras historias de cáncer. Cada proceso es único.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuídate también</h2>
          <p>
            Acompañar requiere energía emocional. Date permiso de sentir, de descansar, de buscar apoyo. No puedes acompañar desde el vacío.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Necesitas apoyo para acompañar?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás acompañando a alguien con una enfermedad terminal y necesitas orientación, estoy aquí para ti.
          </p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Agenda tu consulta gratuita
          </a>
        </div>

        <RelatedArticles currentSlug="como-acompanar-cancer-terminal" category="tanatologia" />
      </div>
    </article>
  )
}
