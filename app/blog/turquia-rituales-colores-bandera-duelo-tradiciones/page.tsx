'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function TurquiaRitualesPage() {
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
            Turquía, la tierra donde oriente y occidente rezan juntos: rituales, colores sagrados y la sabiduría del adiós
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/turquia.jpeg"
            alt="Turquía - Rituales islámicos y tradiciones turcas"
            width={300}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Turquía aprendí que la oración puede ser un puente entre dos mundos. Escuché el llamado del muecín cinco veces al día, vi a los hombres arrodillarse mirando hacia La Meca y entendí que la fe, cuando es profunda, no necesita explicaciones.
          </p>

          <p>
            Turquía es el cruce donde Europa y Asia se encuentran, donde los imperios dejaron huellas en cada mezquita y cada bazar. Es la tierra de los derviches giróvagos, de las cúpulas azules y de una forma muy particular de acompañar a los muertos hacia el otro lado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El funeral islámico turco: sencillez y rapidez</h2>

          <p>
            En la tradición islámica turca, el cuerpo del difunto se lava con agua y jabón en un ritual llamado gusül. Se envuelve en una mortaja blanca de algodón llamada kefen. No hay ataúd ostentoso. El cuerpo se coloca directamente en la tierra, mirando hacia La Meca.
          </p>

          <p>
            El entierro debe realizarse lo antes posible, idealmente en las primeras veinticuatro horas. La rapidez no es falta de respeto. Es respeto profundo: el alma no debe esperar para comenzar su viaje.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los derviches giróvagos: la danza como oración</h2>

          <p>
            En Konya, la ciudad donde vivió el poeta místico Rumi, los derviches de la orden Mevlevi practican una danza sagrada llamada sema. Giran sobre sí mismos durante horas, con una mano apuntando al cielo y otra a la tierra, mientras sus faldas blancas se abren como flores.
          </p>

          <p>
            El giro representa la muerte del ego y el renacimiento del alma en la unión con lo divino. Rumi escribió: cuando mueras, tu alma será libre como el viento. Los derviches practican esa muerte simbólica cada vez que danzan.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de Turquía</h2>

          <p>
            La bandera turca es roja con una media luna y una estrella blancas. El rojo representa la sangre de los mártires que defendieron la nación. La media luna y la estrella son símbolos del islam que también se relacionan con una leyenda: se dice que la luna y la estrella se reflejaron en un charco de sangre después de una batalla decisiva.
          </p>

          <p>
            El azul turquesa, que lleva el nombre del país, cubre las cúpulas de las mezquitas y se usa como protección contra el mal de ojo. El verde es el color sagrado del islam, presente en las banderas religiosas y en los turbantes de quienes han peregrinado a La Meca.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Turquía enseña sobre el duelo</h2>

          <p>
            Aprendí que la sencillez puede ser la forma más alta de respeto. Sin flores excesivas, sin discursos largos, sin adornos innecesarios. Solo un cuerpo envuelto en blanco que regresa a la tierra de donde vino.
          </p>

          <p>
            Turquía me enseñó que girar sobre uno mismo puede ser una forma de soltar. Que el movimiento circular nos recuerda que todo vuelve, que todo pasa, que la muerte es solo otro giro en la danza infinita de la existencia.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el eco del llamado a la oración al atardecer y en la certeza de que el alma, como el derviche, nunca deja de girar hacia la luz.
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

        <RelatedArticles currentSlug="turquia-rituales-colores-bandera-duelo-tradiciones" category="rituales" />
      </div>
    </article>
  )
}
