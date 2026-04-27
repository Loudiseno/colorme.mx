'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function BaliRitualesPage() {
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
            Bali, la isla donde la muerte se celebra: el ritual del Ngaben y los colores del alma
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/melukat bali.jpeg"
            alt="Bali - Ritual del Ngaben y espiritualidad balinesa"
            width={600}
            height={400}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Bali, el paisaje dejó de ser vista para volverse mensaje. Me fundí en lo sagrado de lo simple. En la ofrenda que florece cada mañana en la puerta de cada casa, en el humo que asciende y en el silencio que agradece. La fe en esta isla no es un dogma. Es una sonrisa constante que nace de una confianza absoluta en el orden invisible del universo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La ofrenda diaria: el canang sari</h2>

          <p>
            En las puertas, en los templos, en las motocicletas de Bali hay una pequeña cestita tejida con hoja de coco joven. Se llama canang sari y es la ofrenda diaria del hinduismo balinés. La palabra une dos ideas: belleza y esencia.
          </p>

          <p>
            El canang sari contiene flores colocadas con una lógica precisa. Las blancas apuntan al este y honran al dios Iswara. Las rojas señalan el sur, en honor a Brahma. Las amarillas se dirigen al oeste, dedicadas a Mahadeva. Las azules o verdes miran al norte, hacia Vishnu. Un color para una dirección. Un pétalo para una deidad. Una oración silenciosa con destinatario.
          </p>

          <p>
            Las mujeres balinesas son las guardianas de esta práctica. Pueden preparar entre cincuenta y ciento cincuenta ofrendas antes de que empiece cualquier otra cosa del día. El esfuerzo es parte del regalo. Cuando hay un duelo en la familia, esta práctica se pausa como gesto de respeto.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El Ngaben: cuando la muerte se celebra</h2>

          <p>
            En Bali la muerte no se llora, se celebra. El Ngaben es la ceremonia de cremación del hinduismo balinés. Todo el pueblo se reúne con música, color y alegría para liberar el alma del cuerpo y guiarla hacia su próxima vida. No hay luto oscuro. Hay fuego que transforma, incienso que acompaña y una comunidad entera que dice: ve tranquilo, esto no es un final.
          </p>

          <p>
            El cuerpo se coloca dentro de un sarcófago con forma de toro, llamado lembu, o dentro de una torre de bambú, papel y tela conocida como wadah. Una procesión enorme acompaña al difunto hasta el lugar de la cremación. El camino nunca es recto. Los balineses creen que los espíritus que quieren confundir al alma siguen líneas directas, así que el cortejo gira y serpentea para protegerla.
          </p>

          <p>
            Mientras el cuerpo arde, suena la música del beleganjur. Es una melodía guerrera que simboliza el combate del alma contra las fuerzas del inframundo en su camino al reino superior. Después de la cremación, las cenizas se llevan al mar, considerado el origen de toda vida. Así se cierra el ciclo.
          </p>

          <p>
            Porque en Bali la muerte es solo un paso, una transición sagrada. El alma no se pierde, se libera. Y la vida que viene depende de cómo viviste la que se va.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores como portales</h2>

          <p>
            Comprendí que los colores son portales. El amarillo, en la tradición hindú, es el color del conocimiento, la felicidad y la meditación. Es el color asociado a la sabiduría que ilumina sin quemar. El blanco simboliza la pureza, la paz y también la renuncia. Es el color que acompaña los ritos de despedida porque representa la entrega y el desapego sereno. El rojo es el pulso vital de la existencia. Es la energía de Brahma, el fuego creador, la pasión que sostiene todo lo que respira.
          </p>

          <p>
            Cuando uno entiende esto, los colores dejan de ser decoración. Se vuelven lenguaje. La isla entera se convierte en un alfabeto vivo donde una flor, una tela y un pétalo dicen algo sobre lo que merece ser honrado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Bali enseña sobre el duelo</h2>

          <p>
            Aprendí que la paciencia es el arte de soltar lo que se fue y honrar lo que permanece. Entendí que la espiritualidad no es un acto aislado, sino el ritmo natural con el que respira la selva y se mueve el mar.
          </p>

          <p>
            Como tanatóloga, confirmo todos los días lo que Bali muestra con tanta claridad. El duelo no necesita ser oscuro para ser profundo. Puede tener música. Puede tener color. Puede tener comunidad. Puede tener fuego que transforma y manos que sostienen. La forma occidental de despedir, con luto cerrado y silencio pesado, no es la única posible. Hay culturas que despiden cantando y eso no las hace menos serias. Las hace más libres.
          </p>

          <p>
            Bali me enseñó a caminar más lento, a mirar más profundo y a recordar que la vida se vuelve ligera cuando el presente es tu único altar.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el aroma del incienso y en la suavidad de una mirada.
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
