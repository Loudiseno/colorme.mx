'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

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
            alt="Italia - Rituales y espiritualidad italiana"
            width={800}
            height={450}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Italia descubrí que la belleza no es un lujo. Es una necesidad del alma. Este pueblo vive el arte como respira: sin esfuerzo, sin pretensión, como algo que simplemente es. Un espresso tomado con calma en una piazza al mediodía. Una conversación larga bajo el sol sin prisa por llegar a ningún lado. Il dolce far niente, la dulzura de no hacer nada, elevada a filosofía de vida. Italia no produce arte. Italia es arte.
          </p>

          <p>
            Roma huele a piedra mojada, a espresso, a albahaca y a incienso de iglesias centenarias. Florencia brilla con el dorado del Renacimiento como si el sol nunca se hubiera ido de sus paredes. Venecia refleja el cielo en sus canales y convierte la luz en espejo líquido. Y en el sur, Sicilia y Nápoles guardan una fe tan visceral que se siente en la piel antes de llegar al pensamiento.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La espiritualidad que se vive en la mesa y en la plaza</h2>

          <p>
            En Italia la fe se expresa de maneras inesperadas. Sí, hay catedrales monumentales y procesiones solemnes durante la Semana Santa. Pero la espiritualidad más genuina vive en gestos más pequeños. En la nonna que enciende una vela cada lunes por su esposo difunto. En el pescador siciliano que besa la medalla de su santo antes de salir al mar. En la familia que se reúne cada domingo alrededor de una mesa donde la silla vacía del abuelo sigue puesta, como si su ausencia también tuviera derecho a sentarse.
          </p>

          <p>
            La tradición católica atraviesa la vida entera del pueblo italiano. Los bautizos, las comuniones, las bodas y los funerales marcan los capítulos de la existencia con incienso, agua bendita y oraciones repetidas durante generaciones. Pero Italia también guarda tradiciones populares que van más allá de lo eclesiástico. En Sicilia y Cerdeña, el Día de los Muertos, el dos de noviembre, es un acontecimiento familiar profundo. Las familias visitan los cementerios, limpian las tumbas de sus seres queridos, las adornan con flores frescas y comparten comida junto a ellos. En algunas regiones del sur se preparan dulces especiales llamados ossa dei morti, huesos de los muertos, que se ofrecen a los niños como un regalo de los difuntos. La muerte no asusta cuando se le invita a la mesa.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La forma italiana de despedirse</h2>

          <p>
            Cuando alguien parte en Italia, la familia se convierte en el centro de todo. El cuerpo se vela en la iglesia o en el hogar, rodeado de flores blancas y cirios encendidos. Los amigos y vecinos acuden sin falta, porque acompañar en el dolor es un acto de amor que se da por sentado. El duelo es colectivo. La presencia es sagrada. Nadie muere sin que alguien llore por él.
          </p>

          <p>
            La misa fúnebre en la iglesia es solemne y cargada de cánticos que llenan las bóvedas con un eco que parece venir del más allá. Después del entierro, la familia recibe a los visitantes en casa con comida, vino y recuerdos. Se cuentan historias del difunto, se ríe con sus anécdotas y se llora con su ausencia, todo en la misma habitación, todo en la misma tarde.
          </p>

          <p>
            A los treinta días se celebra una misa especial. Al año, otra. Y muchas familias italianas mantienen la costumbre de visitar la tumba cada semana, llevando flores frescas y hablando con el difunto como si todavía pudiera escuchar. Tal vez pueda.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de Italia</h2>

          <p>
            La bandera italiana es un tricolor vertical de verde, blanco y rojo. El verde representa la esperanza, los campos fértiles del norte y el renacimiento constante de una nación que ha sido destruida y reconstruida muchas veces. El blanco simboliza la fe, la nieve de los Alpes y la paz que el alma italiana busca entre tanto temperamento. El rojo habla del amor, de la pasión, de la sangre derramada por la libertad y del fuego que le da sabor a todo lo que este pueblo toca.
          </p>

          <p>
            Más allá de la bandera, los colores italianos viven en la vida cotidiana con una intensidad particular. El negro del luto viste a las viudas del sur durante años enteros, a veces hasta el final de sus vidas, como señal de fidelidad eterna al que se fue. El dorado de los mosaicos bizantinos en las iglesias de Rávena refleja la gloria divina. El azul de la Virgen María aparece en cada capilla, en cada altar casero y en cada medalla colgada al cuello de las madres. El blanco de los cirios funerarios ilumina la despedida con una luz que parece querer acompañar al alma hasta el último paso.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Italia enseña sobre el duelo</h2>

          <p>
            Aprendí que la belleza no es frívola. Es un acto de resistencia contra el vacío. Que adornar una tumba con flores frescas cada semana no es obsesión, es ternura sostenida en el tiempo.
          </p>

          <p>
            Aprendí también que la mesa es el altar más poderoso que existe. Que sentarse a comer juntos después de un funeral es una forma de decir: la vida sigue, y sigue siendo buena, aunque duela.
          </p>

          <p>
            Italia me enseñó que el duelo puede tener la forma de un espresso compartido en silencio con alguien que conoció al mismo ser que tú extrañas. Que a veces el consuelo no viene de las palabras, viene de un plato de pasta servido con las manos temblorosas de alguien que también está roto pero que eligió cuidarte antes de cuidarse.
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
