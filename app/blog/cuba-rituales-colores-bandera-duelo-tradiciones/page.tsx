'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

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
            src="/cuban-flag.jpeg"
            alt="Cuba - Rituales y espiritualidad cubana"
            width={800}
            height={450}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Cuba aprendí que la alegría y el dolor no son opuestos. Son dos caras del mismo latido. Vi funerales donde sonaban boleros. Escuché risas en velorios que duraban toda la noche. Sentí cómo un pueblo entero abraza la vida con tanta fuerza que ni siquiera la muerte logra quitarle el ritmo.
          </p>

          <p>
            Cuba huele a café recién colado, a tabaco, a salitre y a gardenia. Suena a son, a rumba, a pregones callejeros y a dominos golpeando la mesa del portal. Pero debajo de ese ruido vive una espiritualidad profunda que mezcla raíces africanas, católicas y caribeñas en un tejido que no se entiende con la razón. Se entiende con el cuerpo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La espiritualidad que late bajo la superficie</h2>

          <p>
            La santería, conocida también como regla de ocha, es el sistema espiritual afrocubano que nació del encuentro entre las deidades yorubas traídas por los esclavos africanos y los santos católicos impuestos por los colonizadores. Lejos de destruirse, ambas tradiciones se fundieron en algo nuevo. Los orishas, esas deidades poderosas que rigen los elementos de la naturaleza, encontraron rostro en los santos católicos. Yemayá, diosa del mar, vive en la Virgen de Regla. Oshún, diosa del amor y los ríos, habita en la Caridad del Cobre. Changó, dios del trueno, se reconoce en Santa Bárbara.
          </p>

          <p>
            Cada orisha tiene un color, un ritmo, una comida favorita y un canto propio. Los altares en los hogares cubanos se llenan de flores, frutas, velas, miel y ron, ofrecidos con la misma naturalidad con la que se ofrece un cafecito al vecino que llega sin avisar. La fe cubana no es solemne. Es familiar, cercana, casi doméstica. Se practica en la cocina, en la sala y en el patio trasero, con los pies descalzos y la puerta abierta.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La forma cubana de despedirse</h2>

          <p>
            En Cuba, cuando alguien muere, la casa se abre de par en par. Literalmente. Se retiran los muebles de la sala, se colocan sillas prestadas por todos los vecinos del barrio y se prepara café para la noche entera. El velorio cubano es una reunión donde se llora, se ríe, se cuenta historias, se fuma, se toma café y se acompaña al difunto hasta el amanecer.
          </p>

          <p>
            Nadie se queda solo con su dolor. Los vecinos traen comida. Las amigas llegan sin preguntar. Los niños juegan en el portal mientras los adultos conversan adentro. La muerte en Cuba es un asunto de todos, no de unos pocos. El duelo se comparte como se comparte todo en una isla donde la escasez enseñó que la riqueza verdadera es la gente que tienes al lado.
          </p>

          <p>
            En las tradiciones de la santería, la muerte también tiene sus rituales propios. Se consulta a los orishas para saber qué necesita el alma del difunto. Se tocan tambores batá para despedirlo con música sagrada. Se ofrecen comidas rituales y se encienden velas de colores específicos según el orisha que protegía a esa persona en vida.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de Cuba</h2>

          <p>
            La bandera cubana habla con cinco franjas y un triángulo. Tres franjas azules representan los tres departamentos en que se dividía la isla durante las luchas por la independencia. Dos franjas blancas simbolizan la pureza del ideal libertario. El triángulo rojo en el costado izquierdo representa la sangre derramada por quienes pelearon para que Cuba fuera libre. Y dentro del triángulo brilla una estrella blanca solitaria, llamada la estrella de la independencia, que ilumina el camino de una nación que nunca dejó de soñar con ser dueña de sí misma.
          </p>

          <p>
            Pero los colores cubanos viven con una fuerza especial en la santería. El azul y el blanco pertenecen a Yemayá, madre del mar y protectora de los navegantes. El amarillo dorado es de Oshún, diosa del amor y las aguas dulces. El rojo y el blanco son de Changó, señor del trueno y la justicia. El blanco puro pertenece a Obatalá, padre de todos los orishas, creador de la paz y la sabiduría.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Cuba enseña sobre el duelo</h2>

          <p>
            Aprendí que el duelo puede tener música sin perder profundidad. Que llorar y reír en la misma noche no es contradicción, es humanidad completa.
          </p>

          <p>
            Aprendí también que la comunidad es la medicina más poderosa contra la soledad del que pierde a alguien. En Cuba nadie te pregunta si necesitas ayuda. Simplemente llega, se sienta, te sirve café y se queda. Esa presencia sin protocolo es más sanadora que cualquier palabra.
          </p>

          <p>
            Cuba me enseñó que la vida y la muerte no son opuestos. Son compañeras de baile. Una lleva, la otra sigue. Y cuando la música se detiene, lo que queda no es silencio, es el eco de todo lo que se vivió con el corazón abierto.
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
      </div>
    </article>
  )
}
