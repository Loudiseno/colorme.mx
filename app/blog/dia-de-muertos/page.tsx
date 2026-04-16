'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DiaDeMuertosPage() {
  return (
    <article className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black/60 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        <header className="mb-12">
          <span className="text-sm text-gray-500 uppercase tracking-wider">
            Rituales y Colores del Mundo
          </span>
          <h1 className="text-4xl md:text-5xl text-black mt-2 mb-4">
            Día de Muertos en México: la fiesta donde la muerte se celebra con vida
          </h1>
          <p className="text-black/60">
            Por Lourdes Pérez · Tanatóloga y Arteterapeuta
          </p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/dia-de-muertos.jpeg"
            alt="Día de Muertos en México - Tradición y celebración"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Hay un país en el mundo donde la muerte no se llora en silencio. Se celebra. Se canta. Se cocina. Se adorna con flores naranjas y se recibe con los brazos abiertos.
          </p>

          <p>Ese país es México.</p>

          <p>
            Cada año, entre finales de octubre y los primeros días de noviembre, millones de familias mexicanas preparan sus casas, sus altares y sus corazones para recibir a quienes ya no están. No con miedo. No con tristeza solemne. Sino con la certeza de que la muerte no es un final, sino un reencuentro.
          </p>

          <h2>Nuestra creencia: la muerte no es el final</h2>

          <p>
            Para entender el Día de Muertos hay que entender primero cómo los mexicanos vemos la muerte.
          </p>

          <p>No le tenemos miedo. Le hacemos fiesta.</p>

          <p>
            Esta forma de relacionarnos con la muerte viene de muy lejos. Nuestros antepasados —mexicas, mayas, zapotecas, purépechas— creían que morir no era desaparecer. Era transformarse. Pasar a otro estado. Continuar existiendo en otro plano.
          </p>

          <p>
            Con la llegada de los españoles, estas creencias se mezclaron con el catolicismo. Y de esa fusión nació lo que hoy conocemos como el Día de Muertos: una celebración única en el mundo, reconocida por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad desde 2008.
          </p>

          <h2>Las fechas: cada día tiene su significado</h2>

          <ul>
            <li><strong>27 de octubre:</strong> Llegan las almas de las mascotas que fallecieron.</li>
            <li><strong>28 de octubre:</strong> Se recuerda a quienes murieron de forma trágica o violenta.</li>
            <li><strong>29 de octubre:</strong> Es el día de los que murieron ahogados.</li>
            <li><strong>30 de octubre:</strong> Se recibe a las almas olvidadas.</li>
            <li><strong>31 de octubre:</strong> Llegan los niños que murieron sin ser bautizados.</li>
            <li><strong>1 de noviembre:</strong> Día de los "angelitos", los niños difuntos.</li>
            <li><strong>2 de noviembre:</strong> Llegan las almas de los adultos.</li>
          </ul>

          <h2>La ofrenda: un puente entre dos mundos</h2>

          <p>
            El corazón del Día de Muertos es la ofrenda. No es solo una decoración. Es un acto de amor. Un puente entre el mundo de los vivos y el de los muertos.
          </p>

          <h3>Elementos de la ofrenda</h3>

          <ul>
            <li><strong>La fotografía:</strong> El centro de la ofrenda.</li>
            <li><strong>El agua:</strong> Para saciar la sed del alma.</li>
            <li><strong>La sal:</strong> Elemento de purificación.</li>
            <li><strong>Las velas:</strong> Guían a las almas de regreso.</li>
            <li><strong>El copal:</strong> Purifica el ambiente.</li>
            <li><strong>La flor de cempasúchil:</strong> Marca el camino con su color naranja.</li>
            <li><strong>El pan de muerto:</strong> Representa el ciclo de la vida.</li>
            <li><strong>Las calaveras de azúcar:</strong> Representan la muerte con humor.</li>
          </ul>

          <h2>Los cementerios se llenan de vida</h2>

          <p>
            En México, los cementerios no son lugares tristes durante el Día de Muertos. Son lugares de encuentro. Las familias llegan con comida, flores, velas y música.
          </p>

          <p>
            <strong>Mixquic</strong>, en la Ciudad de México, es famoso por "La Alumbrada". <strong>Janitzio</strong>, en Michoacán, ofrece una de las celebraciones más emotivas. <strong>Oaxaca</strong> se llena de comparsas y altares monumentales.
          </p>

          <h2>La Catrina: el símbolo que el mundo reconoce</h2>

          <p>
            Esta elegante calavera vestida con sombrero de plumas fue creada por José Guadalupe Posada. Representa una verdad muy mexicana: ante la muerte todos somos iguales.
          </p>

          <h2>Más que una tradición: una forma de sanar</h2>

          <p>
            El Día de Muertos no es solo folklore. Es una forma de procesar la pérdida. De mantener vivo el vínculo con quienes amamos.
          </p>

          <p>Porque recordar no duele. Lo que duele es olvidar.</p>

          <p className="text-xl italic mt-12">
            El Día de Muertos no es una despedida. Es un reencuentro. Y cada año, en cada ofrenda, los mexicanos demostramos que el amor es más fuerte que la muerte.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/20 rounded-2xl">
          <h3 className="text-2xl text-black mb-4">¿Quieres crear tu propia ofrenda?</h3>
          <p className="text-black/70 mb-6">
            Puedo acompañarte a honrar la memoria de tus seres queridos a través del arte y los rituales.
          </p>
          <a
            href="https://calendly.com/colormemx/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 transition-colors"
          >
            Agenda una sesión de orientación
          </a>
        </div>
      </div>
    </article>
  )
}
