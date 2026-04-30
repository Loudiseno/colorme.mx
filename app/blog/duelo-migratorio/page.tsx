'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function DueloMigratorioPage() {
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
            Duelo migratorio: cuando dejas tu país
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo migratorio .jpeg" alt="Duelo migratorio" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Emigrar es comenzar de nuevo, pero también es dejar atrás. El duelo migratorio es el proceso de adaptación a una nueva vida mientras se extraña profundamente lo que se dejó.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que se pierde al emigrar</h2>
          <p>
            No solo es un lugar. Es el idioma, los olores, la comida, los abrazos de quienes amas, la identidad que construiste en tu tierra. Todo eso se queda mientras tú avanzas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Sentirse de ningún lugar</h2>
          <p>
            Con el tiempo puedes sentir que ya no perteneces completamente a ningún lado. Ni de allá ni de aquí. Este limbo emocional es parte del proceso.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Honrar ambos mundos</h2>
          <p>
            Sanar no significa olvidar. Puedes amar tu nuevo hogar sin traicionar tus raíces. Ambos lugares pueden coexistir en tu corazón.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás lejos de casa?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas un espacio para procesar tu duelo migratorio, puedo acompañarte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu consulta gratuita</a>
        </div>

        <RelatedArticles currentSlug="duelo-migratorio" category="tanatologia" />
      </div>
    </article>
  )
}
