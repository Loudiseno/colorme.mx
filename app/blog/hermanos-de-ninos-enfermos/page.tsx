'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function HermanosNinosEnfermosPage() {
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
            Hermanos de niños enfermos: los olvidados
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/hermanos de ninos enfermos.jpeg" alt="Hermanos de niños enfermos" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Cuando un niño enferma gravemente, toda la atención familiar se centra en él. Los hermanos sanos quedan en segundo plano, procesando en silencio un dolor que nadie nombra.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que sienten los hermanos</h2>
          <p>
            Miedo, confusión, celos, culpa por sentir celos, soledad. A veces creen que hicieron algo malo. A veces desearían ser ellos los enfermos para recibir atención.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los niños invisibles</h2>
          <p>
            Se les pide que sean fuertes, que no molesten, que entiendan. Pero son niños. Necesitan que alguien vea su dolor también.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo acompañarlos</h2>
          <p>
            Dedicarles tiempo exclusivo. Dejarlos expresar todos sus sentimientos sin juzgar. Recordarles que también son importantes, que también son amados.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Tienes hijos en esta situación?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">La arteterapia puede ayudar a los hermanos a expresar lo que no saben poner en palabras.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu consulta gratuita</a>
        </div>

        <RelatedArticles currentSlug="hermanos-de-ninos-enfermos" category="tanatologia" />
      </div>
    </article>
  )
}
