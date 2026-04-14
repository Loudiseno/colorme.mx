'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function VietnamCultoAncestrosPage() {
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
            Vietnam, la tierra donde los ancestros nunca se van: el altar familiar y el ritual de recordar
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/vietnam olores.jpeg"
            alt="Vietnam - Culto a los ancestros y altar familiar"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Vietnam, el paisaje dejo de ser postal para volverse ensenanza. Comprendi que aqui el incienso no es adorno. Es el lenguaje con el que los vivos hablan con los que ya se fueron.
          </p>

          <p>
            Cada hogar tiene un altar. Cada familia honra a sus ancestros con flores, frutas y fuego. Porque en Vietnam existe un principio sagrado que ordena toda la vida espiritual del pais: uong nuoc nho nguon, beber agua y recordar la fuente. Nunca olvidas de donde vienes. Nunca sueltas a quien te dio la vida.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El altar familiar: el corazon espiritual del hogar</h2>

          <p>
            El altar ancestral ocupa el lugar mas sagrado de cada hogar vietnamita. Siempre esta ahi, como un latido que sostiene la memoria de la familia. En el centro se coloca un cuenco de incienso que representa el universo entero. A los lados, dos lamparas o velas: la de la izquierda simboliza el Sol, la de la derecha, la Luna.
          </p>

          <p>
            El culto a los ancestros es anterior al budismo y al confucianismo que llegaron despues. Es la practica religiosa mas antigua del pais. Para honrar a los antepasados no hace falta ir a ninguna pagoda. Basta con quedarse en casa y encender un incienso frente al altar. Ese gesto pequeno lo contiene todo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El ritual de recordar: fechas que sostienen la memoria</h2>

          <p>
            En Vietnam, el duelo no termina con el funeral. Se convierte en una practica diaria que se extiende en el tiempo con fechas precisas y llenas de amor.
          </p>

          <p>
            A los tres dias de la muerte, la familia visita la tumba. A los cuarenta y nueve dias se celebra el le chung that. A los cien dias llega el tot khoc, que significa el final de las lagrimas. Al ano y a los dos anos se cierran los aniversarios principales del duelo.
          </p>

          <p>
            Cada fecha es un escalon. Cada escalon ayuda al alma del difunto a avanzar en su camino, y a la familia a reordenar su mundo interior. No se exige olvidar. Se ofrece un ritmo sagrado para recordar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El papel votivo: enviar amor al otro mundo</h2>

          <p>
            Una de las costumbres mas conmovedoras del duelo vietnamita es la quema de papel votivo. A los ancestros se les ofrecen replicas de papel de todo lo que podrian necesitar en su nueva existencia. Ropa, casas, sombreros, automoviles, motocicletas, billetes. Todo hecho con papel y devocion.
          </p>

          <p>
            Por eso en Vietnam se dice que la muerte no rompe el vinculo. Lo profundiza. Los que se fueron siguen presentes, siguen protegiendo, siguen siendo familia.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores del duelo: blanco como el silencio</h2>

          <p>
            En Vietnam, el color del luto no es el negro. Es el blanco. Cuando alguien muere, los familiares se colocan una cinta blanca en la cabeza como senal de duelo. El blanco aqui no es ausencia. Es respeto, pureza y entrega.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Vietnam ensena sobre el duelo</h2>

          <p>
            Aprendi que en Vietnam la gratitud no es un gesto aislado. Es una forma de vivir. Honrar a los que ya no estan es la manera mas profunda de decir: sigo aqui gracias a ti.
          </p>

          <p>
            Como tanatologa, encuentro en Vietnam algo que ya se sabe desde hace miles de anos. El vinculo con quien se fue no se corta con la muerte. Se transforma. Puede seguir sosteniendonos, guiandonos y acompanandonos si le damos un lugar.
          </p>

          <p>
            La cultura occidental a veces le pide al duelo que termine rapido. Vietnam le da tiempo, ritual y comunidad. Esa lentitud es sanadora. Es el tiempo que el alma necesita para acomodar la ausencia y transformarla en presencia nueva.
          </p>

          <p>
            Hay culturas que te muestran como vivir. Vietnam te ensena como recordar.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estas atravesando un duelo?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompanamiento desde una mirada calida, cercana y respetuosa de tu propio ritmo, estoy aqui para ti.
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
      </div>
    </article>
  )
}
