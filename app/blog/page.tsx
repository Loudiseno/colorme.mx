'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const categories = ['Todos', 'Arteterapia', 'Tanatología', 'Rituales y Colores del Mundo']

const articles = [
  // ARTETERAPIA
  {
    slug: '/blog/que-es-la-arteterapia-beneficios',
    image: '/arteterapia.webp',
    category: 'Arteterapia',
    title: '¿Qué es la arteterapia?',
    description: 'Descubre cómo el arte ayuda a explorar y procesar emociones.',
    alt: '¿Qué es la arteterapia?',
  },
  {
    slug: '/blog/arteterapia-cancer',
    image: '/cancer-y-arteterapia.webp',
    category: 'Arteterapia',
    title: 'Arteterapia para pacientes con cáncer',
    description: 'El arte como acompañamiento durante el tratamiento oncológico.',
    alt: 'Arteterapia para pacientes con cáncer',
  },
  {
    slug: '/blog/arteterapia-para-ninos',
    image: '/arteterapia-ninos.webp',
    category: 'Arteterapia',
    title: 'Arteterapia para niños: guía por edades',
    description: 'Descubre cómo la arteterapia ayuda a los niños a expresar emociones según su edad.',
    alt: 'Arteterapia para niños - Expresión emocional a través del arte.',
  },
  {
    slug: '/blog/arteterapia-para-la-ansiedad',
    image: '/arteterapia-ansiedad.webp',
    category: 'Arteterapia',
    title: 'Arteterapia para la ansiedad',
    description: 'Cómo el arte puede ayudarte a manejar la ansiedad cuando las palabras no alcanzan.',
    alt: 'Arteterapia para la ansiedad - Expresión a través del arte.',
  },
  {
    slug: '/blog/ejercicios-arteterapia',
    image: '/ejercicios-arteterapia.webp',
    category: 'Arteterapia',
    title: '10 ejercicios de arteterapia que puedes hacer en casa',
    description: 'Ejercicios creativos para procesar emociones sin necesidad de saber dibujar.',
    alt: 'Ejercicios de arteterapia para hacer en casa.',
  },
  {
    slug: '/blog/beneficios-arte',
    image: '/beneficios-del-arte.webp',
    category: 'Arteterapia',
    title: 'Cómo el arte sana: lo que sucede en tu cerebro cuando creas',
    description: 'La neurociencia detrás de por qué crear arte reduce el estrés y mejora el bienestar.',
    alt: 'Cómo el arte sana - Neurociencia del proceso creativo.',
  },
  {
    slug: '/blog/mandalas-terapeuticos',
    image: '/mandalas-terapeuticos.webp',
    category: 'Arteterapia',
    title: 'Mandalas terapéuticos: qué son y cómo crearlos',
    description: 'Guía para crear mandalas y sus beneficios para la salud mental.',
    alt: 'Mandalas terapéuticos - Qué son y cómo crearlos.',
  },
  {
    slug: '/blog/arte-trauma',
    image: '/arte-y-trauma.webp',
    category: 'Arteterapia',
    title: 'Arte y trauma: cómo el proceso creativo ayuda a sanar',
    description: 'Por qué el arte funciona para procesar experiencias traumáticas.',
    alt: 'Arte y trauma - El proceso creativo como sanación.',
  },
  // TANATOLOGÍA
  {
    slug: '/blog/duelo-perdida',
    image: '/el-duelo.webp',
    category: 'Tanatología',
    title: '¿Qué es el duelo?',
    description: 'Guía para entender y atravesar el proceso de pérdida.',
    alt: '¿Qué es el duelo?',
  },
  {
    slug: '/blog/duelo-por-enfermedad-o-diagnostico',
    image: '/hombre-en-duelo.webp',
    category: 'Tanatología',
    title: 'Duelo por enfermedad o diagnóstico',
    description: 'Cuando el cuerpo cambia las reglas: cómo navegar el duelo por un diagnóstico médico.',
    alt: 'Hombre atravesando un proceso de duelo por enfermedad',
  },
  {
    slug: '/blog/que-es-un-tanatologo',
    image: '/que-es-un-tanatologo.webp',
    category: 'Tanatología',
    title: '¿Qué es un tanatólogo?',
    description: 'Descubre qué es un tanatólogo, sus funciones y cuándo consultar a este profesional.',
    alt: 'Qué es un tanatólogo - Acompañamiento profesional en el duelo.',
  },
  {
    slug: '/blog/como-superar-la-perdida-de-un-ser-querido',
    image: '/superar-perdida-ser-querido.webp',
    category: 'Tanatología',
    title: 'Cómo superar la pérdida de un ser querido',
    description: '12 claves prácticas para atravesar el duelo y encontrar momentos de paz.',
    alt: 'Cómo superar la pérdida de un ser querido.',
  },
  {
    slug: '/blog/duelo-por-mascota',
    image: '/duelo-por-mascota.webp',
    category: 'Tanatología',
    title: 'Duelo por mascota: tu dolor es válido',
    description: 'El duelo por mascota es real y merece ser honrado.',
    alt: 'Duelo por mascota - Tu dolor es válido.',
  },
  {
    slug: '/blog/por-que-no-puedo-llorar',
    image: '/porque-no-puedo-llorar.webp',
    category: 'Tanatología',
    title: '¿Por qué no puedo llorar?',
    description: 'El duelo sin lágrimas es real. Descubre por qué no puedes llorar.',
    alt: '¿Por qué no puedo llorar?',
  },
  {
    slug: '/blog/duelo-anticipado',
    image: '/duelo-anticipado.webp',
    category: 'Tanatología',
    title: 'Duelo anticipado: qué es y cómo manejarlo',
    description: 'Cuando sabes que vas a perder a alguien pero todavía está aquí.',
    alt: 'Duelo anticipado - Acompañamiento antes de la pérdida.',
  },
  {
    slug: '/blog/duelo-sucio-alivio',
    image: '/duelo-sucio-alivio.webp',
    category: 'Tanatología',
    title: 'El duelo sucio: cuando sientes alivio',
    description: 'Sentir alivio después de una muerte no te hace mala persona.',
    alt: 'El duelo sucio - Cuando sientes alivio.',
  },
  {
    slug: '/blog/cuanto-dura-el-duelo',
    image: '/cuanto-dura-el-duelo.webp',
    category: 'Tanatología',
    title: '¿Cuánto dura el duelo?',
    description: 'No hay fecha de expiración para el duelo.',
    alt: '¿Cuánto dura el duelo?',
  },
  {
    slug: '/blog/aniversarios-dificiles',
    image: '/aniversarios-dificiles.webp',
    category: 'Tanatología',
    title: 'Aniversarios difíciles: cómo atravesar las fechas dolorosas',
    description: 'Guía para los días que el calendario convierte en momentos de dolor.',
    alt: 'Aniversarios difíciles.',
  },
  {
    slug: '/blog/muerte-mama',
    image: '/duelo-muerte-mama.webp',
    category: 'Tanatología',
    title: 'Cómo atravesar la muerte de tu mamá',
    description: 'Una guía honesta para quienes perdieron a la primera persona que los amó.',
    alt: 'Cómo atravesar la muerte de tu mamá.',
  },
  {
    slug: '/blog/rituales-despedida',
    image: '/rituales-despedida.webp',
    category: 'Tanatología',
    title: 'Rituales de despedida: cómo crear el tuyo',
    description: 'Cómo crear rituales significativos para honrar a quien ya no está.',
    alt: 'Rituales de despedida.',
  },
  {
    slug: '/blog/duelo-complicado',
    image: '/duelo-complicado.webp',
    category: 'Tanatología',
    title: 'Duelo complicado: qué es y cuándo buscar ayuda',
    description: 'Cómo identificar cuando el duelo necesita atención profesional.',
    alt: 'Duelo complicado.',
  },
  {
    slug: '/blog/explicar-muerte-nino',
    image: '/explicar-muerte-nino.webp',
    category: 'Tanatología',
    title: 'Cómo explicar la muerte a un niño',
    description: 'Guía para tener la conversación más difícil con amor y claridad.',
    alt: 'Cómo explicar la muerte a un niño.',
  },
  {
    slug: '/blog/duelo-perinatal',
    image: '/duelo-perinatal.webp',
    category: 'Tanatología',
    title: 'Duelo perinatal: el dolor que la sociedad no ve',
    description: 'Tu bebé existió y tu dolor es real. Guía para madres y padres que perdieron un bebé.',
    alt: 'Duelo perinatal.',
  },
  {
    slug: '/blog/duelo-por-suicidio',
    image: '/duelo-por-suicidio.jpeg',
    category: 'Tanatología',
    title: 'Duelo por suicidio: el dolor de los que se quedan',
    description: 'Para quienes perdieron a alguien por suicidio. Lo que sientes es válido.',
    alt: 'Duelo por suicidio.',
  },
  {
    slug: '/blog/que-decir-duelo',
    image: '/como-acompanar-duelo.webp',
    category: 'Tanatología',
    title: 'Qué decir (y qué NO decir) a alguien en duelo',
    description: 'Guía para acompañar a alguien que perdió un ser querido.',
    alt: 'Cómo acompañar a alguien en duelo.',
  },
  {
    slug: '/blog/perder-la-fe',
    image: '/perder-la-fe.webp',
    category: 'Tanatología',
    title: 'Cuando pierdes la fe: el duelo espiritual',
    description: 'Dejar de creer también es una pérdida.',
    alt: 'Duelo espiritual.',
  },
  {
    slug: '/blog/hablar-de-la-muerte',
    image: '/hablar-de-la-muerte.webp',
    category: 'Tanatología',
    title: '¿Por qué nos incomoda hablar de la muerte?',
    description: 'La muerte es el único destino que compartimos todos.',
    alt: 'Hablar de la muerte.',
  },
  {
    slug: '/blog/sindrome-cuidador',
    image: '/sindrome-cuidador.webp',
    category: 'Tanatología',
    title: 'El síndrome del cuidador primario',
    description: 'Cuando cuidar a otros te consume.',
    alt: 'Síndrome del cuidador.',
  },
  {
    slug: '/blog/tristeza-como-maestra',
    image: '/tristeza.webp',
    category: 'Tanatología',
    title: 'La tristeza no vino a destruirte',
    description: 'Aprender a estar triste sin huir.',
    alt: 'Tristeza emocional.',
  },
  {
    slug: '/blog/verguenza-duelo',
    image: '/verguenza-duelo.webp',
    category: 'Tanatología',
    title: 'La vergüenza: la emoción que te hace esconderte',
    description: 'Lo que callamos por miedo a ser juzgados.',
    alt: 'Vergüenza emocional.',
  },
  // RITUALES Y COLORES DEL MUNDO
  {
    slug: '/blog/dia-de-muertos',
    image: '/dia-de-muertos.jpeg',
    category: 'Rituales y Colores del Mundo',
    title: 'Día de Muertos en México: la fiesta donde la muerte se celebra con vida',
    description: 'Descubre la tradición mexicana que transforma el duelo en celebración y memoria.',
    alt: 'Día de Muertos en México.',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredArticles = activeCategory === 'Todos'
    ? articles
    : articles.filter(article => article.category === activeCategory)

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
            <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
            <h1 className="text-4xl md:text-5xl text-black relative z-10">
              Entre líneas
            </h1>
          </div>
          <p className="text-lg text-black leading-relaxed mb-4">
            <strong>Reflexiones sobre arteterapia, tanatología y el universo de las emociones</strong>
          </p>
          <p className="text-black/70 max-w-2xl mx-auto">
            Un lugar para explorar la vida, la pérdida, el autodescubrimiento y la creatividad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-[#B2F7EF]/30 text-black hover:bg-[#B2F7EF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link key={article.slug} href={article.slug} className="group">
              <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    className="object-cover grayscale mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{article.category}</span>
                  <h2 className="text-xl text-black mt-2 mb-3">
                    {article.title}
                  </h2>
                  <p className="text-black/70 text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-black text-sm font-medium">
                    Leer más
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
