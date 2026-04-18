'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function VietnamRitualesPage() {
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
            Vietnam, la tierra donde los ancestros nunca se van: rituales, colores y la sabiduría de recordar
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/vietnam olores.jpeg"
            alt="Vietnam - Rituales y culto a los ancestros"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Vietnam aprendí que el incienso es un idioma. Que el humo es la voz con la que los vivos siguen hablando con los que ya partieron. Que la memoria no es un acto del pensamiento, es una práctica diaria que sostiene la vida entera de un pueblo.
          </p>

          <p>
            Cada hogar vietnamita guarda un altar. No importa si la familia es grande o pequeña, si tiene mucho o si tiene poco. Ese altar siempre está, en el lugar más sagrado de la casa, como un latido que nunca cesa. Allí reposan las fotografías de los abuelos, los padres, los tíos y los hermanos que ya hicieron el viaje. Frente a ellos se ofrece té, frutas frescas, flores y, sobre todo, presencia. Porque para este pueblo la muerte no rompe el vínculo. Lo profundiza.
          </p>

          <p>
            Hay un principio antiguo que ordena toda la vida espiritual del país. Se dice uống nước nhớ nguồn, beber agua y recordar la fuente. Nadie olvida de dónde viene. Nadie suelta a quien le dio la vida. Esa frase sencilla es la columna vertebral de un pueblo entero.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El altar familiar como corazón del hogar</h2>

          <p>
            Cada mañana, antes de empezar el día, alguien de la familia enciende un incienso frente al altar. A los lados, dos lámparas o velas se encienden también. Una representa el sol. La otra, la luna. En el centro descansa un cuenco que simboliza el universo entero. Todo un mundo en miniatura ofrecido en silencio a quienes ya no se ven con los ojos pero siguen mirando desde otra parte.
          </p>

          <p>
            A los antepasados se les cuenta todo. Antes de una boda, se les pide bendición. Cuando nace un nieto, se les anuncia. Si un examen sale bien, se les agradece. Si llega una mala noticia, se les acompaña. La conversación nunca se interrumpe. Solo cambia de forma.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El ritual de recordar</h2>

          <p>
            Cuando alguien parte, el duelo no termina con el funeral. Se convierte en una práctica que se extiende en el tiempo con fechas precisas que sostienen la memoria. A los tres días, la familia visita la tumba en una ceremonia llamada le mo cua ma. A los cuarenta y nueve días se celebra el le chung that, cuando se deja de ofrecer arroz al difunto en el altar. A los cien días llega el tot khoc, que significa el final de las lágrimas. Al año y a los dos años se cierran los aniversarios principales.
          </p>

          <p>
            Cada fecha es un escalón. No se exige olvidar. Se ofrece un ritmo sagrado para recordar.
          </p>

          <p>
            En el aniversario de la muerte, la familia se reúne y prepara las comidas favoritas del que se fue. Se queman papeles votivos en forma de ropa, casas, billetes y motocicletas, para que al alma no le falte nada en su nueva existencia. Es una forma tierna y profunda de seguir cuidando, de seguir enviando amor a través del humo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores del alma vietnamita</h2>

          <p>
            La bandera vietnamita habla con dos colores. El rojo, ardiente y profundo, llena casi todo el espacio. Representa la sangre del pueblo, la lucha de quienes defendieron esta tierra y el corazón ardiente de una nación que nunca se rinde. En el centro brilla una estrella amarilla de cinco puntas. El amarillo es el alma del pueblo, la luz que une a sus campesinos, obreros, intelectuales, comerciantes y soldados bajo un mismo cielo.
          </p>

          <p>
            Pero el color más conmovedor del país no está en la bandera. Está en el luto. En Vietnam no se viste de negro cuando alguien muere. Se viste de blanco. Los familiares se colocan una cinta blanca en la cabeza como señal de duelo. El cuerpo del difunto se envuelve en una tela del mismo tono antes de ser despedido. El blanco no es ausencia. Es respeto. Es entrega. Es la pureza con la que se devuelve un alma al universo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Vietnam enseña sobre el duelo</h2>

          <p>
            Aprendí que la gratitud no es un gesto, es una forma de vivir. Que honrar a los que ya no están es la manera más profunda de decir: sigo aquí gracias a ti.
          </p>

          <p>
            Aprendí también que el vínculo con quien amamos no se corta con la muerte. Se transforma. Puede seguir sosteniéndonos si le damos un lugar. Un altar, una fecha, un incienso encendido en una mañana cualquiera, una comida preparada con cariño en un aniversario. Cualquier gesto que diga: no te olvidé.
          </p>

          <p>
            La cultura occidental a veces le pide al duelo que termine rápido. Vietnam le da tiempo, ritual y comunidad. Le da cuarenta y nueve días, cien días, un año, dos años. Esa lentitud es sanadora. Es el tiempo que el alma necesita para acomodar la ausencia y transformarla en presencia nueva.
          </p>

          <p>
            Hay culturas que te muestran cómo vivir. Vietnam te enseña cómo recordar.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el aroma del incienso que sube hacia un altar y en la certeza silenciosa de que nadie amado se pierde del todo.
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
