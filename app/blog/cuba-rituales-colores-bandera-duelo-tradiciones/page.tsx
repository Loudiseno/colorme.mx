'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function CubaRitualesPage() {
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
            Cuba, la isla donde la muerte baila al son de la vida: rituales, colores y la sabiduría del adiós caribeño
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/cuban flag.jpeg"
            alt="Cuba - Rituales y tradiciones cubanas"
            width={300}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Cuba aprendí que la muerte no silencia la música. Se integra a ella. Se le canta, se le baila, se le ofrece un trago de ron y una flor. Es parte del ritmo de la vida, no su interrupción.
          </p>

          <p>
            Cuba es una isla donde lo africano, lo español y lo caribeño se mezclan en cada esquina. Esa fusión también se expresa en la forma de despedir a los muertos: con santos que bailan, altares llenos de color y velorios donde la risa convive con el llanto.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La santería: cuando los orishas acompañan el tránsito</h2>

          <p>
            La santería cubana es una religión sincrética que fusiona las creencias yorubas traídas por los esclavos africanos con el catolicismo español. En ella, los orishas son deidades que guían, protegen y acompañan a los seres humanos en todos los momentos de la vida, incluida la muerte.
          </p>

          <p>
            Cuando alguien fallece, los santeros realizan ceremonias especiales para asegurar que el alma del difunto llegue a su destino. Se tocan tambores batá, se cantan oraciones en yoruba y se ofrecen alimentos y bebidas a los orishas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El velorio cubano: donde la vida celebra a la muerte</h2>

          <p>
            El velorio cubano es un evento social tanto como espiritual. Las familias reciben a los visitantes con café, ron y comida. Se cuentan historias del difunto, se ríe, se llora, se canta. No hay silencio incómodo. Hay compañía ruidosa y cálida.
          </p>

          <p>
            En algunos pueblos del interior, todavía se practica el velorio cantado, donde los asistentes entonan décimas improvisadas en honor al difunto. Es poesía popular que transforma el dolor en arte colectivo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de Cuba</h2>

          <p>
            La bandera cubana tiene tres franjas azules y dos blancas, con un triángulo rojo y una estrella blanca. El azul representa los tres departamentos en que se dividía la isla. El blanco simboliza la pureza de los ideales independentistas. El rojo del triángulo es la sangre derramada por la libertad. La estrella solitaria representa la independencia.
          </p>

          <p>
            Pero en Cuba los colores también hablan a través de la santería. Cada orisha tiene sus tonos sagrados: el amarillo y dorado de Oshún, el azul y blanco de Yemayá, el rojo y blanco de Changó, el blanco puro de Obatalá.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Cuba enseña sobre el duelo</h2>

          <p>
            Aprendí que el duelo no tiene que ser silencioso para ser profundo. Puede tener música, puede tener baile, puede tener risas mezcladas con lágrimas. La alegría no niega el dolor. Lo acompaña.
          </p>

          <p>
            Cuba me enseñó que despedir a alguien es también celebrar que existió. Que la mejor forma de honrar una vida es vivirla con la misma intensidad con la que ellos la vivieron.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el ritmo de un tambor batá al atardecer y en la certeza de que el amor no muere, solo cambia de forma.
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

        <RelatedArticles currentSlug="cuba-rituales-colores-bandera-duelo-tradiciones" category="rituales" />
      </div>
    </article>
  )
}
