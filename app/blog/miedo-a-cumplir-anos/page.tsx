'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function MiedoCumplirAnosPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">EMOCIONES</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Miedo a cumplir años: cuando los cumpleaños duelen
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/miedo a cumplir años.jpeg" alt="Miedo a cumplir años" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Para algunos, los cumpleaños no son motivo de celebración sino de angustia. El paso del tiempo puede despertar miedos profundos que merecen ser escuchados.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué hay detrás del miedo</h2>
          <p>
            Miedo a envejecer, a no haber logrado suficiente, a la muerte, a la soledad, a perder capacidades. Cada cumpleaños es un recordatorio del tiempo que pasa.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La presión de cumplir expectativas</h2>
          <p>
            A cierta edad deberías tener esto, haber logrado aquello. Estas expectativas sociales aumentan la angustia de quienes sienten que no encajan en el molde.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Resignificar el tiempo</h2>
          <p>
            Tu valor no se mide en logros ni en años. Cada etapa tiene su propia belleza. Puedes aprender a mirar tu edad con compasión en lugar de miedo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Te angustian los cumpleaños?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas trabajar tu relación con el tiempo y la edad, puedo acompañarte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu consulta gratuita</a>
        </div>

        <RelatedArticles currentSlug="miedo-a-cumplir-anos" category="emociones" />
      </div>
    </article>
  )
}
