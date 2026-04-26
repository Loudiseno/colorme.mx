'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function ItaliaRitualesPage() {
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
            Italia, la tierra donde la belleza es una forma de rezar: rituales, colores sagrados y la sabiduría del duelo
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/lucca.jpeg"
            alt="Italia - Rituales y tradiciones italianas"
            width={600}
            height={400}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Italia aprendí que la belleza también es una oración. Cada iglesia, cada plaza, cada tumba tallada en mármol es una forma de decirle al cielo: mira cuánto amamos la vida, mira cómo honramos a nuestros muertos.
          </p>

          <p>
            Italia es la cuna del Renacimiento, la tierra de los santos y los artistas. Aquí la muerte nunca fue algo que esconder. Se la mira de frente, se la representa en frescos y esculturas, se la acompaña con campanas y procesiones que atraviesan pueblos enteros.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El funeral católico italiano: entre lo sagrado y lo familiar</h2>

          <p>
            En Italia, el funeral comienza en la iglesia del barrio. El sacerdote celebra la misa de réquiem, se entonan cantos gregorianos y la comunidad entera se reúne para despedir al difunto. No es un asunto privado. Es un evento que involucra a todo el pueblo.
          </p>

          <p>
            Después del entierro, la familia recibe visitas durante días. Se sirve café, se cuentan historias, se llora y se ríe. El luto se viste de negro durante meses o años, especialmente en el sur, donde las viudas pueden vestir de oscuro el resto de sus vidas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El Día de los Muertos italiano: cuando los cementerios florecen</h2>

          <p>
            El 2 de noviembre, Italia celebra la Commemorazione dei Defunti. Las familias visitan los cementerios llevando crisantemos, la flor del recuerdo. Limpian las tumbas, encienden velas y pasan horas conversando con sus muertos como si aún pudieran escucharlos.
          </p>

          <p>
            En Sicilia, los niños reciben regalos de parte de sus familiares fallecidos, una tradición que enseña que el amor no termina con la muerte. En otras regiones se preparan dulces especiales como las fave dei morti, pequeñas galletas en forma de habas que simbolizan las almas de los difuntos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de Italia</h2>

          <p>
            La bandera italiana tiene tres franjas verticales: verde, blanco y rojo. El verde representa la esperanza y los campos del norte. El blanco simboliza la fe y las cumbres nevadas de los Alpes. El rojo es la caridad y la sangre derramada por la patria.
          </p>

          <p>
            Pero en Italia los colores también hablan a través del arte religioso. El azul de la Virgen María cubre techos de capillas. El dorado de los iconos bizantinos ilumina las iglesias del sur. El negro del luto se lleva con dignidad en los pueblos pequeños donde la tradición aún respira.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Italia enseña sobre el duelo</h2>

          <p>
            Aprendí que el duelo puede ser hermoso. Que una tumba puede ser una obra de arte. Que las lágrimas y la belleza no se excluyen, sino que se abrazan.
          </p>

          <p>
            Italia me enseñó que recordar a los muertos es un acto de comunidad. Que el dolor compartido pesa menos. Que sentarse con los vecinos a tomar café después del funeral es una forma de decir: no estás solo en esto.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en la luz dorada de una iglesia toscana al atardecer y en la certeza de que la belleza es la forma más alta de honrar la vida que se fue.
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

        <RelatedArticles currentSlug="italia-rituales-colores-bandera-duelo-tradiciones" category="rituales" />
      </div>
    </article>
  )
}
