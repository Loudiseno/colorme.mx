'use client'

import BlogCarousel from '@/components/BlogCarousel'

const tanatologiaArticles = [
  {
    href: '/blog/duelo-perdida',
    image: '/el-duelo.webp',
    title: '¿Qué es el duelo?',
    description: 'Un proceso natural que atravesamos cuando perdemos algo o alguien significativo.',
    alt: '¿Qué es el duelo?',
  },
  {
    href: '/blog/cuanto-dura-el-duelo',
    image: '/cuanto-dura-el-duelo.webp',
    title: '¿Cuánto dura el duelo?',
    description: 'No hay fecha de expiración para el duelo, pero el dolor no dura para siempre con la misma intensidad.',
    alt: '¿Cuánto dura el duelo?',
  },
  {
    href: '/blog/duelo-complicado',
    image: '/duelo-complicado.webp',
    title: 'Duelo complicado: qué es y cuándo buscar ayuda',
    description: 'Cómo identificar cuando el duelo necesita atención profesional.',
    alt: 'Duelo complicado',
  },
  {
    href: '/blog/duelo-anticipado',
    image: '/duelo-anticipado.webp',
    title: 'Duelo anticipado: qué es y cómo manejarlo',
    description: 'Cuando sabes que vas a perder a alguien pero todavía está aquí.',
    alt: 'Duelo anticipado',
  },
  {
    href: '/blog/duelo-perinatal',
    image: '/duelo-perinatal.webp',
    title: 'Duelo perinatal: el dolor que la sociedad no ve',
    description: 'Tu bebé existió y tu dolor es real. Guía para madres y padres que perdieron un bebé.',
    alt: 'Duelo perinatal',
  },
  {
    href: '/blog/duelo-por-mascota',
    image: '/duelo-por-mascota.webp',
    title: 'Duelo por mascota: tu dolor es válido',
    description: 'El duelo por mascota es real y merece ser honrado.',
    alt: 'Duelo por mascota',
  },
  {
    href: '/blog/muerte-mama',
    image: '/duelo-muerte-mama.webp',
    title: 'Cómo atravesar la muerte de tu mamá',
    description: 'Una guía honesta para quienes perdieron a la primera persona que los amó.',
    alt: 'Muerte de mamá',
  },
  {
    href: '/blog/sindrome-cuidador',
    image: '/sindrome-cuidador.webp',
    title: 'El síndrome del cuidador primario',
    description: 'Cuando cuidar a otros te consume. Guía para quienes dan tanto que se olvidan de sí mismos.',
    alt: 'Síndrome del cuidador',
  },
  {
    href: '/blog/que-es-un-tanatologo',
    image: '/que-es-un-tanatologo.webp',
    title: '¿Qué es un tanatólogo?',
    description: 'Descubre qué es un tanatólogo, sus funciones y cuándo consultar a este profesional.',
    alt: '¿Qué es un tanatólogo?',
  },
  {
    href: '/blog/aniversario-de-muerte',
    image: '/aniversario muerte.jpeg',
    title: 'El aniversario de una muerte',
    description: 'Cómo vivir y honrar la fecha que marca una ausencia.',
    alt: 'Aniversario de muerte',
  },
  {
    href: '/blog/cumpleanos-persona-fallecida',
    image: '/cumpleanos persona fallecida.jpeg',
    title: 'El cumpleaños de quien ya no está',
    description: 'Cómo atravesar y honrar el cumpleaños de una persona fallecida.',
    alt: 'Cumpleaños de persona fallecida',
  },
  {
    href: '/blog/duelo-sucio-alivio',
    image: '/duelo-sucio-alivio.webp',
    title: 'El duelo sucio: cuando sientes alivio',
    description: 'Sentir alivio después de una muerte no te hace mala persona. Te hace humano.',
    alt: 'Duelo sucio',
  },
  {
    href: '/blog/aniversarios-dificiles',
    image: '/aniversarios-dificiles.webp',
    title: 'Aniversarios difíciles: cómo atravesar las fechas dolorosas',
    description: 'Guía para los días que el calendario convierte en momentos de dolor.',
    alt: 'Aniversarios difíciles',
  },
  {
    href: '/blog/como-superar-la-perdida-de-un-ser-querido',
    image: '/como-superar-perdida.webp',
    title: 'Cómo superar la pérdida de un ser querido',
    description: '12 claves prácticas para atravesar el duelo y encontrar momentos de paz.',
    alt: 'Cómo superar la pérdida',
  },
  {
    href: '/blog/duelo-del-cuidador',
    image: '/duelo del cuidador.jpeg',
    title: 'El duelo del cuidador',
    description: 'El duelo silencioso de quienes cuidan a otros.',
    alt: 'Duelo del cuidador',
  },
  {
    href: '/blog/duelo-por-divorcio',
    image: '/duelo por divorcio.jpeg',
    title: 'Duelo por divorcio',
    description: 'Cuando una relación termina, también hay duelo.',
    alt: 'Duelo por divorcio',
  },
  {
    href: '/blog/duelo-por-enfermedad-o-diagnostico',
    image: '/hombre-en-duelo.webp',
    title: 'Duelo por enfermedad o diagnóstico',
    description: 'Cuando el cuerpo cambia las reglas: cómo navegar el duelo por un diagnóstico médico.',
    alt: 'Duelo por enfermedad',
  },
  {
    href: '/blog/duelo-y-redes-sociales',
    image: '/duelo en redes.jpeg',
    title: 'Duelo y redes sociales',
    description: 'Cómo las redes afectan nuestro proceso de duelo.',
    alt: 'Duelo y redes sociales',
  },
  {
    href: '/blog/explicar-muerte-nino',
    image: '/explicar-muerte-nino.webp',
    title: 'Cómo explicar la muerte a un niño',
    description: 'Guía para tener la conversación más difícil con amor y claridad.',
    alt: 'Explicar la muerte a un niño',
  },
  {
    href: '/blog/hablar-de-la-muerte',
    image: '/hablar-de-la-muerte.webp',
    title: '¿Por qué nos incomoda hablar de la muerte?',
    description: 'La muerte es el único destino que compartimos todos, y sin embargo evitamos nombrarla.',
    alt: 'Hablar de la muerte',
  },
  {
    href: '/blog/menopausia-y-duelo',
    image: '/menopausia-yduelo.jpeg',
    title: 'Menopausia y duelo',
    description: 'Los duelos invisibles de la menopausia.',
    alt: 'Menopausia y duelo',
  },
  {
    href: '/blog/navidad-en-duelo',
    image: '/navidad en duelo.jpeg',
    title: 'Navidad en duelo',
    description: 'Cómo atravesar las fiestas cuando alguien falta.',
    alt: 'Navidad en duelo',
  },
  {
    href: '/blog/que-decir-duelo',
    image: '/como-acompanar-duelo.webp',
    title: 'Qué decir (y qué NO decir) a alguien en duelo',
    description: 'Guía para acompañar a alguien que perdió un ser querido con empatía y respeto.',
    alt: 'Qué decir en el duelo',
  },
  {
    href: '/blog/rituales-despedida',
    image: '/rituales-despedida.webp',
    title: 'Rituales de despedida: cómo crear el tuyo',
    description: 'Cómo crear rituales significativos para honrar a quien ya no está.',
    alt: 'Rituales de despedida',
  },
  {
    href: '/blog/superar-perdida-ser-querido',
    image: '/superar-perdida-ser-querido.webp',
    title: 'Superar la pérdida de un ser querido',
    description: 'El camino hacia la sanación después de una pérdida.',
    alt: 'Superar pérdida',
  },
]

const arteterapiaArticles = [
  {
    href: '/blog/que-es-la-arteterapia-beneficios',
    image: '/arteterapia.webp',
    title: '¿Qué es la arteterapia?',
    description: 'Descubre cómo el arte ayuda a explorar y procesar emociones.',
    alt: '¿Qué es la arteterapia?',
  },
  {
    href: '/blog/arteterapia-cancer',
    image: '/cancer-y-arteterapia.webp',
    title: 'Arteterapia para pacientes con cáncer',
    description: 'El arte como acompañamiento durante el tratamiento oncológico.',
    alt: 'Arteterapia para pacientes con cáncer',
  },
  {
    href: '/blog/arteterapia-para-ninos',
    image: '/arteterapia-ninos.webp',
    title: 'Arteterapia para niños: guía por edades',
    description: 'Descubre cómo la arteterapia ayuda a los niños a expresar emociones según su edad.',
    alt: 'Arteterapia para niños',
  },
  {
    href: '/blog/arteterapia-para-la-ansiedad',
    image: '/arteterapia-ansiedad.webp',
    title: 'Arteterapia para la ansiedad',
    description: 'Cómo el arte puede ayudarte a manejar la ansiedad cuando las palabras no alcanzan.',
    alt: 'Arteterapia para la ansiedad',
  },
  {
    href: '/blog/ejercicios-arteterapia',
    image: '/ejercicios-arteterapia.webp',
    title: '10 ejercicios de arteterapia que puedes hacer en casa',
    description: 'Ejercicios creativos para procesar emociones sin necesidad de saber dibujar.',
    alt: 'Ejercicios de arteterapia',
  },
  {
    href: '/blog/beneficios-arte',
    image: '/beneficios-del-arte.webp',
    title: 'Cómo el arte sana: lo que sucede en tu cerebro cuando creas',
    description: 'La neurociencia detrás de por qué crear arte reduce el estrés y mejora el bienestar.',
    alt: 'Beneficios del arte',
  },
  {
    href: '/blog/mandalas-terapeuticos',
    image: '/mandalas-terapeuticos.webp',
    title: 'Mandalas terapéuticos: qué son y cómo crearlos',
    description: 'Guía para crear mandalas y sus beneficios para la salud mental.',
    alt: 'Mandalas terapéuticos',
  },
  {
    href: '/blog/arte-trauma',
    image: '/arte-y-trauma.webp',
    title: 'Arte y trauma: cómo el proceso creativo ayuda a sanar',
    description: 'Por qué el arte funciona para procesar experiencias traumáticas.',
    alt: 'Arte y trauma',
  },
  {
    href: '/blog/diferencia-psicologia-arteterapia',
    image: '/diferencia psicologia y arteterapia.jpeg',
    title: 'Diferencia entre psicología y arteterapia',
    description: '¿Cuál es la diferencia y cuál necesitas?',
    alt: 'Diferencia psicología y arteterapia',
  },
  {
    href: '/blog/arteterapia-y-autismo',
    image: '/Arteterapia niños.jpeg',
    title: 'Arteterapia y autismo: cuando el arte abre caminos',
    description: 'La arteterapia ofrece a niños con autismo un espacio donde pueden comunicarse y expresarse.',
    alt: 'Arteterapia y autismo',
  },
  {
    href: '/blog/diferencia-arteterapia-clase-de-arte',
    image: '/anagaby-final.jpeg',
    title: 'Diferencia entre arteterapia y clase de arte',
    description: 'No es lo mismo crear para aprender que crear para sanar. Conoce las diferencias clave.',
    alt: 'Diferencia arteterapia y clase de arte',
  },
]

const emocionesArticles = [
  {
    href: '/blog/tristeza-como-maestra',
    image: '/tristeza.webp',
    title: 'La tristeza no vino a destruirte',
    description: 'Aprender a estar triste sin huir. La tristeza como maestra emocional.',
    alt: 'La tristeza como maestra',
  },
  {
    href: '/blog/verguenza-duelo',
    image: '/verguenza-duelo.webp',
    title: 'La vergüenza: la emoción que te hace esconderte',
    description: 'Lo que callamos por miedo a ser juzgados. Cómo la vergüenza silencia el duelo.',
    alt: 'Vergüenza en el duelo',
  },
  {
    href: '/blog/por-que-no-puedo-llorar',
    image: '/porque-no-puedo-llorar.webp',
    title: '¿Por qué no puedo llorar?',
    description: 'El duelo sin lágrimas es real. Descubre por qué no puedes llorar y cómo procesar tu dolor.',
    alt: '¿Por qué no puedo llorar?',
  },
  {
    href: '/blog/duelo-y-culpa',
    image: '/duelo-y-culpa.jpeg',
    title: 'Culpa y duelo: la carga que no te deja avanzar',
    description: 'Por qué nos sentimos culpables después de una pérdida y cómo liberarte de ese peso.',
    alt: 'Culpa y duelo',
  },
  {
    href: '/blog/perder-la-fe',
    image: '/perder-la-fe.webp',
    title: 'Cuando pierdes la fe: el duelo espiritual',
    description: 'Dejar de creer también es una pérdida. Guía para atravesar el duelo espiritual.',
    alt: 'Perder la fe',
  },
]

const ritualesArticles = [
  {
    href: '/blog/mexico-dia-de-muertos-rituales-tradiciones',
    image: '/dia-de-muerto.jpeg',
    title: 'Día de Muertos en México: la fiesta donde la muerte se celebra con vida',
    description: 'Descubre la tradición del Día de Muertos, la ofrenda y cómo México celebra la memoria de quienes ya no están.',
    alt: 'Día de Muertos México',
  },
  {
    href: '/blog/india-rituales-colores-bandera-espiritualidad-duelo',
    image: '/ofrendas india.jpeg',
    title: 'India, el país donde el alma camina descalza: rituales, colores sagrados y la sabiduría del adiós',
    description: 'India es el corazón espiritual del planeta. Descubre sus rituales hindúes y los colores sagrados de su bandera.',
    alt: 'Rituales de India',
  },
  {
    href: '/blog/bali-ritual-ngaben-colores-del-alma',
    image: '/melukat bali.jpeg',
    title: 'Bali, la isla donde la muerte se celebra: el ritual del Ngaben y los colores del alma',
    description: 'Bali enseña que la muerte no se llora, se libera. Descubre el ritual del Ngaben y los colores sagrados.',
    alt: 'Rituales de Bali',
  },
  {
    href: '/blog/malasia-rituales-colores-bandera-tradiciones-duelo',
    image: '/malasia .jpeg',
    title: 'Malasia, el cruce de tres almas: rituales, colores sagrados y la sabiduría de despedirse en comunidad',
    description: 'Descubre los rituales de tres culturas espirituales que conviven en Malasia.',
    alt: 'Rituales de Malasia',
  },
  {
    href: '/blog/tailandia-rituales-colores-bandera-duelo-tradiciones',
    image: '/thailand rituals.jpeg',
    title: 'Tailandia, la tierra de la sonrisa eterna: rituales, colores y la sabiduría de soltar con gratitud',
    description: 'Descubre los rituales tailandeses y la forma serena en que honran la vida y la muerte.',
    alt: 'Rituales de Tailandia',
  },
  {
    href: '/blog/vietnam-rituales-colores-bandera-duelo-ancestros',
    image: '/vietnam olores.jpeg',
    title: 'Vietnam, la tierra donde los ancestros nunca se van: rituales, colores y la sabiduría de recordar',
    description: 'En Vietnam, la muerte no rompe el vínculo, lo profundiza. Descubre el culto a los ancestros.',
    alt: 'Vietnam ancestros',
  },
  {
    href: '/blog/grecia-rituales-colores-bandera-duelo-islas-meteora',
    image: '/grecia athenas.jpeg',
    title: 'Grecia, la cuna de la filosofía ante la muerte: rituales, colores sagrados y la sabiduría del adiós',
    description: 'Descubre los rituales griegos de duelo, el significado de los colores de su bandera y cómo Grecia honra a sus difuntos.',
    alt: 'Rituales de Grecia',
  },
  {
    href: '/blog/cuba-rituales-colores-bandera-duelo-tradiciones',
    image: '/cuban flag.jpeg',
    title: 'Cuba, la isla donde la muerte baila al son del tambor: rituales, colores y la sabiduría del adiós',
    description: 'Descubre los rituales cubanos de duelo, la santería, los colores de su bandera y cómo Cuba honra a sus difuntos.',
    alt: 'Rituales de Cuba',
  },
  {
    href: '/blog/turquia-rituales-colores-bandera-duelo-tradiciones',
    image: '/turquia.jpeg',
    title: 'Turquía, la tierra donde oriente y occidente rezan juntos: rituales, colores y la sabiduría del adiós',
    description: 'Descubre los rituales turcos de duelo, los derviches giróvagos y cómo Turquía honra a sus difuntos.',
    alt: 'Rituales de Turquía',
  },
  {
    href: '/blog/italia-rituales-colores-bandera-duelo-tradiciones',
    image: '/lucca.jpeg',
    title: 'Italia, la tierra donde la belleza es una forma de rezar: rituales, colores y la sabiduría del duelo',
    description: 'Descubre los rituales italianos de duelo, el significado de los colores de su bandera y cómo Italia honra a sus difuntos.',
    alt: 'Rituales de Italia',
  },
]

export default function BlogPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
            <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
            <h1 className="text-4xl md:text-5xl text-black relative z-10">Entre líneas</h1>
          </div>
          <p className="text-black/70 max-w-2xl mx-auto text-base leading-relaxed">
            Reflexiones, información y herramientas sobre arteterapia, tanatología y el universo de las emociones. Un lugar para explorar la vida, la pérdida, el autodescubrimiento y la creatividad a través del arte, los colores y rituales del mundo.
          </p>
        </div>

        {/* Carousels por categoría */}
        <BlogCarousel title="Tanatología" articles={tanatologiaArticles} />
        <BlogCarousel title="Arteterapia" articles={arteterapiaArticles} />
        <BlogCarousel title="Emociones" articles={emocionesArticles} />
        <BlogCarousel title="Rituales y colores del mundo" articles={ritualesArticles} />
      </div>
    </section>
  )
}
