'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function GreciaRitualesPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">RITUALES Y COLORES DEL MUNDO</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Grecia, la cuna donde el mar guarda la memoria del alma: rituales, colores sagrados y la sabiduría de honrar a los que se fueron
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/grecia athenas.jpeg"
            alt="Grecia - Rituales y espiritualidad griega"
            width={300}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Grecia comprendí que el mar también reza. Lo escuché al amanecer, cuando las olas rompían contra los acantilados blancos como si repitieran una oración que nadie les enseñó. Lo sentí en los puertos pequeños, donde los pescadores encienden una vela a su santo protector antes de soltar las redes.
          </p>

          <p>
            Grecia es la tierra donde nació la filosofía, la democracia y la tragedia. Pero antes de todo eso, fue la tierra donde los seres humanos aprendieron a hacerse preguntas frente al mar y a buscar respuestas mirando las estrellas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los monasterios de Meteora: la oración que toca el cielo</h2>

          <p>
            En el centro de Grecia, sobre pilares de roca que se elevan cientos de metros hacia el cielo, descansan los monasterios de Meteora. Su nombre significa suspendidos en el aire, y cuando los vi por primera vez entendí por qué los monjes eligieron ese lugar para orar.
          </p>

          <p>
            Allí la vida se reduce a lo esencial. Silencio, oración, trabajo manual, contemplación. Los monjes ortodoxos que habitan estos monasterios desde el siglo XIV creen que la cercanía con lo alto no es solo geográfica. Es espiritual.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las islas que guardan rituales ancestrales</h2>

          <p>
            Las islas griegas no son solo postales de agua turquesa y casas blancas. Son guardianas de tradiciones funerarias y espirituales que sobreviven desde hace siglos.
          </p>

          <p>
            En las regiones del sur, las plañideras entonan lamentos fúnebres llamados miroloi. Son cantos improvisados que narran la vida del difunto, sus virtudes, sus amores y sus dolores. Las mujeres cantan durante horas al lado del cuerpo, transformando el dolor en poesía y la tristeza en belleza.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La forma griega de despedirse</h2>

          <p>
            En la tradición ortodoxa griega, el cuerpo del difunto se lava, se viste con ropa limpia y se coloca en un ataúd abierto para que la familia y los amigos puedan despedirse. Se encienden velas alrededor y se coloca un icono sobre el pecho.
          </p>

          <p>
            A los cuarenta días se celebra el mnimosyno, una misa especial en la iglesia donde se ofrece koliva y se reza por el descanso del alma. Esta ceremonia se repite a los tres meses, a los seis meses, al año y a los tres años.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de Grecia</h2>

          <p>
            La bandera griega alterna nueve franjas horizontales azules y blancas, con una cruz blanca sobre fondo azul. El azul representa el mar y el cielo que abrazan al país. El blanco simboliza la pureza, la paz y las olas que rompen sobre las costas desde tiempos inmemoriales.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Grecia enseña sobre el duelo</h2>

          <p>
            Aprendí que el duelo puede cantarse. Que ponerle palabras al dolor, aunque sea con la voz quebrada, es una forma de honrar al que se fue que no se parece a ninguna otra.
          </p>

          <p>
            Grecia me enseñó que recordar no es quedarse atrapado en el pasado. Es preparar koliva con las manos, encender una vela a los cuarenta días, cantar un miroloi con las amigas y decirle al alma del que amaste: sigo cuidando tu nombre.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el viento salado de una isla griega al atardecer y en la certeza de que el mar siempre devuelve lo que necesitas escuchar.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás atravesando un duelo?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompañamiento desde una mirada cálida, cercana y respetuosa de tu propio ritmo, estoy aquí para ti.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all"
          >
            Agenda tu primera consulta gratuita
          </a>
        </div>

        <RelatedArticles currentSlug="grecia-rituales-colores-bandera-duelo-islas-meteora" category="rituales" />
      </div>
    </article>
  )
}
