'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function MexicoDiaDeMuertosPage() {
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
            Día de Muertos en México: la fiesta donde la muerte se celebra con vida
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/dia-de-muerto.jpeg"
            alt="Día de Muertos en México - Ofrenda y cempasúchil"
            width={800}
            height={450}
            priority
            className="w-full h-auto max-w-2xl mx-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Hay un país en el mundo donde la muerte no se llora en silencio. Se celebra. Se canta. Se cocina. Se adorna con flores naranjas y se recibe con los brazos abiertos. Ese país es México.
          </p>

          <p>
            Cada año, entre finales de octubre y los primeros días de noviembre, millones de familias mexicanas preparan sus casas, sus altares y sus corazones para recibir a quienes ya no están. No con miedo. No con tristeza solemne. Sino con la certeza de que la muerte no es un final, sino un reencuentro.
          </p>

          <p>
            El Día de Muertos es mucho más que una tradición. Es una forma de entender la vida. Y la muerte. Y el amor que no termina cuando alguien se va.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Nuestra creencia: la muerte no es el final</h2>

          <p>
            Para entender el Día de Muertos hay que entender primero cómo los mexicanos vemos la muerte. No le tenemos miedo. Le hacemos fiesta.
          </p>

          <p>
            Esta forma de relacionarnos con la muerte viene de muy lejos. Nuestros antepasados —mexicas, mayas, zapotecas, purépechas— creían que morir no era desaparecer. Era transformarse. Pasar a otro estado. Continuar existiendo en otro plano.
          </p>

          <p>
            Con la llegada de los españoles, estas creencias se mezclaron con el catolicismo. Y de esa fusión nació lo que hoy conocemos como el Día de Muertos: una celebración única en el mundo, reconocida por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad desde 2008.
          </p>

          <p>
            No celebramos la muerte. Celebramos la memoria. Celebramos que mientras alguien te recuerde, nunca te vas del todo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las fechas: cada día tiene su significado</h2>

          <p>
            <strong>27 de octubre:</strong> Llegan las almas de las mascotas que fallecieron.<br />
            <strong>28 de octubre:</strong> Se recuerda a quienes murieron de forma trágica o violenta.<br />
            <strong>29 de octubre:</strong> Es el día de los que murieron ahogados.<br />
            <strong>30 de octubre:</strong> Se recibe a las almas olvidadas, aquellas que no tienen familia que las espere.<br />
            <strong>31 de octubre:</strong> Llegan los niños que murieron sin ser bautizados y los que no alcanzaron a nacer.<br />
            <strong>1 de noviembre:</strong> Día de Todos los Santos, dedicado a los niños difuntos, los "angelitos".<br />
            <strong>2 de noviembre:</strong> Día de los Fieles Difuntos. Llegan las almas de los adultos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La ofrenda: un puente entre dos mundos</h2>

          <p>
            El corazón del Día de Muertos es la ofrenda. No es solo una decoración. Es un acto de amor. Un puente entre el mundo de los vivos y el de los muertos. Un espacio sagrado donde las familias dicen: "Te esperamos. Te recordamos. Sigues siendo parte de nosotros."
          </p>

          <p>
            Cada elemento tiene su significado: <strong>La fotografía</strong> es el centro del altar. <strong>El agua</strong> sacia la sed del alma. <strong>La sal</strong> purifica. <strong>Las velas</strong> guían a las almas. <strong>El copal</strong> ahuyenta a los malos espíritus. <strong>El cempasúchil</strong> marca el camino con su aroma. <strong>El pan de muerto</strong> representa el cuerpo. <strong>Las calaveras de azúcar</strong> representan la muerte con humor.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los cementerios se llenan de vida</h2>

          <p>
            En México, los cementerios no son lugares tristes durante el Día de Muertos. Son lugares de encuentro. Las familias llegan con comida, flores, velas y música. Limpian las tumbas. Las adornan. Se sientan junto a ellas a comer, a platicar, a recordar.
          </p>

          <p>
            <strong>Mixquic</strong>, en la Ciudad de México, es famoso por "La Alumbrada": miles de velas iluminan el cementerio. <strong>Janitzio</strong>, en Michoacán, ofrece una de las celebraciones más emotivas. <strong>Oaxaca</strong> se llena de comparsas y altares monumentales.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La Catrina: el símbolo que el mundo reconoce</h2>

          <p>
            Esta elegante calavera vestida con sombrero de plumas fue creada por José Guadalupe Posada a principios del siglo XX. Representa una verdad muy mexicana: ante la muerte todos somos iguales. No importa si eres rico o pobre. Al final, todos seremos calaveras.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Más que una tradición: una forma de sanar</h2>

          <p>
            El Día de Muertos no es solo folklore. Es una forma de procesar la pérdida. De mantener vivo el vínculo con quienes amamos. De enfrentar la muerte no con miedo, sino con aceptación.
          </p>

          <p>
            En un mundo que muchas veces evita hablar de la muerte, México la pone en el centro de la mesa. Le da un lugar. La nombra. La celebra. Y en ese acto hay algo profundamente sanador.
          </p>

          <p>
            Porque recordar no duele. Lo que duele es olvidar.
          </p>

          <p>
            El Día de Muertos nos recuerda que nuestros seres queridos no desaparecen mientras los mantengamos en la memoria. Que el amor trasciende la muerte. Que despedirse no significa soltar para siempre.
          </p>

          <p>
            En México decimos que los muertos regresan. Y tal vez sea verdad. O tal vez lo que regresa es la certeza de que el amor no muere. De que la memoria es más fuerte que la ausencia.
          </p>

          <p>
            Eso es el Día de Muertos. Eso somos los mexicanos frente a la muerte. No le huimos. Le abrimos la puerta. Le ponemos flores. Le servimos un plato. Y celebramos.
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
