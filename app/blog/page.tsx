'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const arteterapiaArticles = [
  {
    slug: '/blog/que-es-la-arteterapia-beneficios',
    image: '/arteterapia.webp',
    title: '¿Qué es la arteterapia?',
    description: 'Descubre cómo el arte ayuda a explorar y procesar emociones.',
    alt: '¿Qué es la arteterapia?',
  },
  {
    slug: '/blog/arteterapia-cancer',
    image: '/cancer-y-arteterapia.webp',
    title: 'Arteterapia para pacientes con cáncer',
    description: 'El arte como acompañamiento durante el tratamiento oncológico.',
    alt: 'Arteterapia para pacientes con cáncer',
  },
  {
    slug: '/blog/arteterapia-para-ninos',
    image: '/arteterapia-ninos.webp',
    title: 'Arteterapia para niños: guía por edades',
    description: 'Descubre cómo la arteterapia ayuda a los niños a expresar emociones según su edad.',
    alt: 'Arteterapia para niños',
  },
  {
    slug: '/blog/arteterapia-para-la-ansiedad',
    image: '/arteterapia-ansiedad.webp',
    title: 'Arteterapia para la ansiedad',
    description: 'Cómo el arte puede ayudarte a manejar la ansiedad cuando las palabras no alcanzan.',
    alt: 'Arteterapia para la ansiedad',
  },
  {
    slug: '/blog/ejercicios-arteterapia',
    image: '/ejercicios-arteterapia.webp',
    title: '10 ejercicios de arteterapia que puedes hacer en casa',
    description: 'Ejercicios creativos para procesar emociones sin necesidad de saber dibujar.',
    alt: 'Ejercicios de arteterapia',
  },
  {
    slug: '/blog/beneficios-arte',
    image: '/beneficios-del-arte.webp',
    title: 'Cómo el arte sana: lo que sucede en tu cerebro cuando creas',
    description: 'La neurociencia detrás de por qué crear arte reduce el estrés y mejora el bienestar.',
    alt: 'Beneficios del arte',
  },
  {
    slug: '/blog/mandalas-terapeuticos',
    image: '/mandalas-terapeuticos.webp',
    title: 'Mandalas terapéuticos: qué son y cómo crearlos',
    description: 'Guía para crear mandalas y sus beneficios para la salud mental.',
    alt: 'Mandalas terapéuticos',
  },
  {
    slug: '/blog/arte-trauma',
    image: '/arte-y-trauma.webp',
    title: 'Arte y trauma: cómo el proceso creativo ayuda a sanar',
    description: 'Por qué el arte funciona para procesar experiencias traumáticas.',
    alt: 'Arte y trauma',
  },
  {
    slug: '/blog/diferencia-psicologia-arteterapia',
    image: '/diferencia psicologia y arteterapia.jpeg',
    title: 'Diferencia entre psicología y arteterapia',
    description: '¿Cuál es la diferencia y cuál necesitas?',
    alt: 'Diferencia psicología y arteterapia',
  },
  {
    slug: '/blog/arteterapia-y-autismo',
    image: '/Arteterapia niños.jpeg',
    title: 'Arteterapia y autismo: cuando el arte abre caminos',
    description: 'La arteterapia ofrece a niños con autismo un espacio donde pueden comunicarse y expresarse.',
    alt: 'Arteterapia y autismo',
  },
]

const tanatologiaArticles = [
  {
    slug: '/blog/duelo-perdida',
    image: '/el-duelo.webp',
    title: '¿Qué es el duelo?',
    description: 'Un proceso natural que atravesamos cuando perdemos algo o alguien significativo.',
    alt: '¿Qué es el duelo?',
  },
  {
    slug: '/blog/cuanto-dura-el-duelo',
    image: '/cuanto-dura-el-duelo.webp',
    title: '¿Cuánto dura el duelo?',
    description: 'No hay fecha de expiración para el duelo, pero el dolor no dura para siempre con la misma intensidad.',
    alt: '¿Cuánto dura el duelo?',
  },
  {
    slug: '/blog/duelo-complicado',
    image: '/duelo-complicado.webp',
    title: 'Duelo complicado: qué es y cuándo buscar ayuda',
    description: 'Cómo identificar cuando el duelo necesita atención profesional.',
    alt: 'Duelo complicado',
  },
  {
    slug: '/blog/duelo-anticipado',
    image: '/duelo-anticipado.webp',
    title: 'Duelo anticipado: qué es y cómo manejarlo',
    description: 'Cuando sabes que vas a perder a alguien pero todavía está aquí.',
    alt: 'Duelo anticipado',
  },
  {
    slug: '/blog/duelo-perinatal',
    image: '/duelo-perinatal.webp',
    title: 'Duelo perinatal: el dolor que la sociedad no ve',
    description: 'Tu bebé existió y tu dolor es real. Guía para madres y padres que perdieron un bebé.',
    alt: 'Duelo perinatal',
  },
  {
    slug: '/blog/duelo-por-mascota',
    image: '/duelo-por-mascota.webp',
    title: 'Duelo por mascota: tu dolor es válido',
    description: 'El duelo por mascota es real y merece ser honrado.',
    alt: 'Duelo por mascota',
  },
  {
    slug: '/blog/muerte-mama',
    image: '/duelo-muerte-mama.webp',
    title: 'Cómo atravesar la muerte de tu mamá',
    description: 'Una guía honesta para quienes perdieron a la primera persona que los amó.',
    alt: 'Muerte de mamá',
  },
  {
    slug: '/blog/sindrome-cuidador',
    image: '/sindrome-cuidador.webp',
    title: 'El síndrome del cuidador primario',
    description: 'Cuando cuidar a otros te consume. Guía para quienes dan tanto que se olvidan de sí mismos.',
    alt: 'Síndrome del cuidador',
  },
  {
    slug: '/blog/que-es-un-tanatologo',
    image: '/que-es-un-tanatologo.webp',
    title: '¿Qué es un tanatólogo?',
    description: 'Descubre qué es un tanatólogo, sus funciones y cuándo consultar a este profesional.',
    alt: '¿Qué es un tanatólogo?',
  },
  {
    slug: '/blog/aniversario-de-muerte',
    image: '/aniversario muerte.jpeg',
    title: 'El aniversario de una muerte',
    description: 'Cómo vivir y honrar la fecha que marca una ausencia.',
    alt: 'Aniversario de muerte',
  },
  {
    slug: '/blog/cumpleanos-persona-fallecida',
    image: '/cumpleanos persona fallecida.jpeg',
    title: 'El cumpleaños de quien ya no está',
    description: 'Cómo atravesar y honrar el cumpleaños de una persona fallecida.',
    alt: 'Cumpleaños de persona fallecida',
  },
  {
    slug: '/blog/duelo-sucio-alivio',
    image: '/duelo-sucio-alivio.webp',
    title: 'El duelo sucio: cuando sientes alivio',
    description: 'Sentir alivio después de una muerte no te hace mala persona. Te hace humano.',
    alt: 'Duelo sucio',
  },
  {
    slug: '/blog/aniversarios-dificiles',
    image: '/aniversarios-dificiles.webp',
    title: 'Aniversarios difíciles: cómo atravesar las fechas dolorosas',
    description: 'Guía para los días que el calendario convierte en momentos de dolor.',
    alt: 'Aniversarios difíciles',
  },
  {
    slug: '/blog/como-superar-la-perdida-de-un-ser-querido',
    image: '/como-superar-perdida.webp',
    title: 'Cómo superar la pérdida de un ser querido',
    description: '12 claves prácticas para atravesar el duelo y encontrar momentos de paz.',
    alt: 'Cómo superar la pérdida',
  },
  {
    slug: '/blog/duelo-del-cuidador',
    image: '/duelo del cuidador.jpeg',
    title: 'El duelo del cuidador',
    description: 'El duelo silencioso de quienes cuidan a otros.',
    alt: 'Duelo del cuidador',
  },
  {
    slug: '/blog/duelo-por-divorcio',
    image: '/duelo por divorcio.jpeg',
    title: 'Duelo por divorcio',
    description: 'Cuando una relación termina, también hay duelo.',
    alt: 'Duelo por divorcio',
  },
  {
    slug: '/blog/duelo-por-enfermedad-o-diagnostico',
    image: '/hombre-en-duelo.webp',
    title: 'Duelo por enfermedad o diagnóstico',
    description: 'Cuando el cuerpo cambia las reglas: cómo navegar el duelo por un diagnóstico médico.',
    alt: 'Duelo por enfermedad',
  },
  {
    slug: '/blog/duelo-y-redes-sociales',
    image: '/duelo en redes.jpeg',
    title: 'Duelo y redes sociales',
    description: 'Cómo las redes afectan nuestro proceso de duelo.',
    alt: 'Duelo y redes sociales',
  },
  {
    slug: '/blog/explicar-muerte-nino',
    image: '/explicar-muerte-nino.webp',
    title: 'Cómo explicar la muerte a un niño',
    description: 'Guía para tener la conversación más difícil con amor y claridad.',
    alt: 'Explicar la muerte a un niño',
  },
  {
    slug: '/blog/hablar-de-la-muerte',
    image: '/hablar-de-la-muerte.webp',
    title: '¿Por qué nos incomoda hablar de la muerte?',
    description: 'La muerte es el único destino que compartimos todos, y sin embargo evitamos nombrarla.',
    alt: 'Hablar de la muerte',
  },
  {
    slug: '/blog/menopausia-y-duelo',
    image: '/menopausia-yduelo.jpeg',
    title: 'Menopausia y duelo',
    description: 'Los duelos invisibles de la menopausia.',
    alt: 'Menopausia y duelo',
  },
  {
    slug: '/blog/navidad-en-duelo',
    image: '/navidad en duelo.jpeg',
    title: 'Navidad en duelo',
    description: 'Cómo atravesar las fiestas cuando alguien falta.',
    alt: 'Navidad en duelo',
  },
  {
    slug: '/blog/que-decir-duelo',
    image: '/como-acompanar-duelo.webp',
    title: 'Qué decir (y qué NO decir) a alguien en duelo',
    description: 'Guía para acompañar a alguien que perdió un ser querido con empatía y respeto.',
    alt: 'Qué decir en el duelo',
  },
  {
    slug: '/blog/rituales-despedida',
    image: '/rituales-despedida.webp',
    title: 'Rituales de despedida: cómo crear el tuyo',
    description: 'Cómo crear rituales significativos para honrar a quien ya no está.',
    alt: 'Rituales de despedida',
  },
  {
    slug: '/blog/superar-perdida-ser-querido',
    image: '/superar-perdida-ser-querido.webp',
    title: 'Superar la pérdida de un ser querido',
    description: 'El camino hacia la sanación después de una pérdida.',
    alt: 'Superar pérdida',
  },
  {
    slug: '/blog/tristeza-como-maestra',
    image: '/tristeza.webp',
    title: 'La tristeza no vino a destruirte',
    description: 'Aprender a estar triste sin huir. La tristeza como maestra emocional.',
    alt: 'La tristeza como maestra',
  },
  {
    slug: '/blog/verguenza-duelo',
    image: '/verguenza-duelo.webp',
    title: 'La vergüenza: la emoción que te hace esconderte',
    description: 'Lo que callamos por miedo a ser juzgados. Cómo la vergüenza silencia el duelo.',
    alt: 'Vergüenza en el duelo',
  },
  {
    slug: '/blog/por-que-no-puedo-llorar',
    image: '/porque-no-puedo-llorar.webp',
    title: '¿Por qué no puedo llorar?',
    description: 'El duelo sin lágrimas es real. Descubre por qué no puedes llorar y cómo procesar tu dolor.',
    alt: '¿Por qué no puedo llorar?',
  },
  {
    slug: '/blog/duelo-y-culpa',
    image: '/duelo-y-culpa.jpeg',
    title: 'Culpa y duelo: la carga que no te deja avanzar',
    description: 'Por qué nos sentimos culpables después de una pérdida y cómo liberarte de ese peso.',
    alt: 'Culpa y duelo',
  },
  {
    slug: '/blog/perder-la-fe',
    image: '/perder-la-fe.webp',
    title: 'Cuando pierdes la fe: el duelo espiritual',
    description: 'Dejar de creer también es una pérdida. Guía para atravesar el duelo espiritual.',
    alt: 'Perder la fe',
  },
]

const ritualesArticles = [
  {
    slug: '/blog/india-rituales-colores-bandera-espiritualidad-duelo',
    image: '/ofrendas india.jpeg',
    title: 'India, el país de los mil colores: rituales, símbolos y la sabiduría de soltar en comunidad',
    description: 'Descubre los rituales sagrados de la India, el significado de sus colores y cómo el duelo se vive en comunidad.',
    alt: 'Rituales de India',
  },
  {
    slug: '/blog/malasia-rituales-colores-bandera-tradiciones-duelo',
    image: '/malasia .jpeg',
    title: 'Malasia: rituales, colores y la sabiduría de despedirse en comunidad',
    description: 'Descubre los rituales de tres culturas espirituales que conviven en Malasia.',
    alt: 'Rituales de Malasia',
  },
  {
    slug: '/blog/mehndi-india-significado-henna-ritual-espiritual',
    image: '/mehndi india.jpeg',
    title: 'Mehndi: el arte sagrado de la henna en India',
    description: 'Descubre el arte ancestral de la henna en India y su profundo significado espiritual.',
    alt: 'Mehndi India',
  },
  {
    slug: '/blog/melukat-ceremonia-purificacion-bali-agua-sagrada',
    image: '/melukat bali.jpeg',
    title: 'Melukat: la ceremonia balinesa de purificación con agua sagrada',
    description: 'Melukat es el ritual balinés de purificación con agua sagrada que libera el dolor del alma.',
    alt: 'Melukat Bali',
  },
  {
    slug: '/blog/tailandia-rituales-colores-bandera-duelo-tradiciones',
    image: '/thailand rituals.jpeg',
    title: 'Tailandia: rituales, colores y la sabiduría de soltar con gratitud',
    description: 'Descubre los rituales tailandeses y la forma serena en que honran la vida y la muerte.',
    alt: 'Rituales de Tailandia',
  },
  {
    slug: '/blog/vietnam-culto-ancestros-altar-familiar-duelo',
    image: '/vietnam olores.jpeg',
    title: 'Vietnam: el altar familiar y el culto a los ancestros',
    description: 'En Vietnam, la muerte no rompe el vínculo, lo profundiza. Descubre el culto a los ancestros.',
    alt: 'Vietnam ancestros',
  },
]

type Article = {
  slug: string
  image: string
  title: string
  description: string
  alt: string
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={article.slug} className="group">
      <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
        <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
          <Image
            src={article.image}
            alt={article.alt}
            fill
            className="object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all"
          />
          <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl text-black mb-3 font-semibold">{article.title}</h3>
          <p className="text-black/70 text-sm leading-relaxed mb-4">{article.description}</p>
          <span className="inline-flex items-center gap-2 text-black text-sm font-medium">
            Leer más
            <ArrowRight size={16} />
          </span>
        </div>
      </article>
    </Link>
  )
}

function CategorySection({ title, articles }: { title: string; articles: Article[] }) {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <div className="inline-block bg-[#B2F7EF] px-6 py-2 rounded-xl relative">
          <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
          <h2 className="text-2xl md:text-3xl text-black relative z-10">{title}</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'arteterapia' | 'tanatologia' | 'rituales'>('todos')

  const categories = [
    { id: 'todos' as const, label: 'Todos' },
    { id: 'arteterapia' as const, label: 'Arteterapia' },
    { id: 'tanatologia' as const, label: 'Tanatología' },
    { id: 'rituales' as const, label: 'Rituales y colores del mundo' },
  ]

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
            <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
            <h1 className="text-4xl md:text-5xl text-black relative z-10">Entre líneas</h1>
          </div>
          <p className="text-lg text-black leading-relaxed mb-4">
            <strong>Reflexiones sobre arteterapia, tanatología y el universo de las emociones</strong>
          </p>
          <p className="text-black/70 max-w-2xl mx-auto mb-8">
            Un lugar para explorar la vida, la pérdida, el autodescubrimiento y la creatividad.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-[#B2F7EF]/30 text-black hover:bg-[#B2F7EF]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeCategory === 'todos' ? (
          <>
            <CategorySection title="Arteterapia" articles={arteterapiaArticles} />
            <CategorySection title="Tanatología" articles={tanatologiaArticles} />
            <CategorySection title="Rituales y colores del mundo" articles={ritualesArticles} />
          </>
        ) : activeCategory === 'arteterapia' ? (
          <CategorySection title="Arteterapia" articles={arteterapiaArticles} />
        ) : activeCategory === 'tanatologia' ? (
          <CategorySection title="Tanatología" articles={tanatologiaArticles} />
        ) : (
          <CategorySection title="Rituales y colores del mundo" articles={ritualesArticles} />
        )}
      </div>
    </section>
  )
}
