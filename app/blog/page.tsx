'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Search } from 'lucide-react'

const tanatologiaArticles = [
  { slug: '/blog/duelo-perdida', image: '/el-duelo.webp', category: 'Tanatología', title: '¿Qué es el duelo?', description: 'Guía para entender y atravesar el proceso de pérdida.', alt: '¿Qué es el duelo?' },
  { slug: '/blog/que-es-un-tanatologo', image: '/que-es-un-tanatologo.webp', category: 'Tanatología', title: '¿Qué es un tanatólogo?', description: 'Descubre qué es un tanatólogo, sus funciones, beneficios y cuándo consultar.', alt: 'Qué es un tanatólogo' },
  { slug: '/blog/cuanto-dura-el-duelo', image: '/cuanto-dura-el-duelo.webp', category: 'Tanatología', title: '¿Cuánto dura el duelo?', description: 'No hay fecha de expiración para el duelo, pero el dolor no dura para siempre.', alt: '¿Cuánto dura el duelo?' },
  { slug: '/blog/duelo-complicado', image: '/duelo-complicado.webp', category: 'Tanatología', title: 'Duelo complicado: qué es y cuándo buscar ayuda', description: 'Cómo identificar cuando el duelo necesita atención profesional.', alt: 'Duelo complicado' },
  { slug: '/blog/duelo-anticipado', image: '/duelo-anticipado.webp', category: 'Tanatología', title: 'Duelo anticipado: qué es y cómo manejarlo', description: 'Cuando sabes que vas a perder a alguien pero todavía está aquí.', alt: 'Duelo anticipado' },
  { slug: '/blog/duelo-perinatal', image: '/duelo-perinatal.webp', category: 'Tanatología', title: 'Duelo perinatal: el dolor que la sociedad no ve', description: 'Tu bebé existió y tu dolor es real.', alt: 'Duelo perinatal' },
  { slug: '/blog/duelo-por-mascota', image: '/duelo-por-mascota.webp', category: 'Tanatología', title: 'Duelo por mascota: tu dolor es válido', description: 'El duelo por mascota es real y merece ser honrado.', alt: 'Duelo por mascota' },
  { slug: '/blog/muerte-mama', image: '/duelo-muerte-mama.webp', category: 'Tanatología', title: 'Cómo atravesar la muerte de tu mamá', description: 'Una guía honesta para quienes perdieron a la primera persona que los amó.', alt: 'Muerte de mamá' },
  { slug: '/blog/duelo-sucio-alivio', image: '/duelo-sucio-alivio.webp', category: 'Tanatología', title: 'El duelo sucio: cuando sientes alivio', description: 'Sentir alivio después de una muerte no te hace mala persona.', alt: 'Duelo sucio' },
  { slug: '/blog/sindrome-cuidador', image: '/sindrome-cuidador.webp', category: 'Tanatología', title: 'El síndrome del cuidador primario', description: 'Cuando cuidar a otros te consume.', alt: 'Síndrome del cuidador' },
  { slug: '/blog/aniversarios-dificiles', image: '/aniversarios-dificiles.webp', category: 'Tanatología', title: 'Aniversarios difíciles: cómo atravesar las fechas dolorosas', description: 'Guía para los días que el calendario convierte en momentos de dolor.', alt: 'Aniversarios difíciles' },
  { slug: '/blog/como-superar-la-perdida-de-un-ser-querido', image: '/superar-perdida-ser-querido.webp', category: 'Tanatología', title: 'Cómo superar la pérdida de un ser querido', description: '12 claves prácticas para atravesar el duelo.', alt: 'Superar la pérdida' },
  { slug: '/blog/duelo-por-enfermedad-o-diagnostico', image: '/hombre-en-duelo.webp', category: 'Tanatología', title: 'Duelo por enfermedad o diagnóstico', description: 'Cómo navegar el duelo por un diagnóstico médico.', alt: 'Duelo por enfermedad' },
  { slug: '/blog/rituales-despedida', image: '/rituales-despedida.webp', category: 'Tanatología', title: 'Rituales de despedida: cómo crear el tuyo', description: 'Cómo crear rituales significativos para honrar a quien ya no está.', alt: 'Rituales de despedida' },
  { slug: '/blog/explicar-muerte-nino', image: '/explicar-muerte-nino.webp', category: 'Tanatología', title: 'Cómo explicar la muerte a un niño', description: 'Guía para tener la conversación más difícil con amor y claridad.', alt: 'Explicar la muerte a un niño' },
  { slug: '/blog/que-decir-duelo', image: '/como-acompanar-duelo.webp', category: 'Tanatología', title: 'Qué decir (y qué NO decir) a alguien en duelo', description: 'Guía para acompañar con empatía y respeto.', alt: 'Qué decir en el duelo' },
  { slug: '/blog/hablar-de-la-muerte', image: '/hablar-de-la-muerte.webp', category: 'Tanatología', title: '¿Por qué nos incomoda hablar de la muerte?', description: 'La muerte es el único destino que compartimos todos.', alt: 'Hablar de la muerte' },
  { slug: '/blog/aniversario-de-muerte', image: '/aniversario muerte.jpeg', category: 'Tanatología', title: 'El aniversario de una muerte', description: 'Cómo vivir y honrar la fecha que marca una ausencia.', alt: 'Aniversario de muerte' },
  { slug: '/blog/cumpleanos-persona-fallecida', image: '/cumpleanos persona fallecida.jpeg', category: 'Tanatología', title: 'El cumpleaños de quien ya no está', description: 'Cómo atravesar y honrar el cumpleaños de una persona fallecida.', alt: 'Cumpleaños de persona fallecida' },
  { slug: '/blog/duelo-del-cuidador', image: '/duelo del cuidador.jpeg', category: 'Tanatología', title: 'El duelo del cuidador', description: 'El duelo silencioso de quienes cuidan a otros.', alt: 'Duelo del cuidador' },
  { slug: '/blog/duelo-por-divorcio', image: '/duelo por divorcio.jpeg', category: 'Tanatología', title: 'Duelo por divorcio', description: 'Cuando una relación termina, también hay duelo.', alt: 'Duelo por divorcio' },
  { slug: '/blog/duelo-y-redes-sociales', image: '/duelo en redes.jpeg', category: 'Tanatología', title: 'Duelo y redes sociales', description: 'Cómo las redes afectan nuestro proceso de duelo.', alt: 'Duelo y redes sociales' },
  { slug: '/blog/menopausia-y-duelo', image: '/menopausia-yduelo.jpeg', category: 'Tanatología', title: 'Menopausia y duelo', description: 'Los duelos invisibles de la menopausia.', alt: 'Menopausia y duelo' },
  { slug: '/blog/navidad-en-duelo', image: '/navidad en duelo.jpeg', category: 'Tanatología', title: 'Navidad en duelo', description: 'Cómo atravesar las fiestas cuando alguien falta.', alt: 'Navidad en duelo' },
  { slug: '/blog/superar-perdida-ser-querido', image: '/superar-perdida-ser-querido.webp', category: 'Tanatología', title: 'Superar la pérdida de un ser querido', description: 'El camino hacia la sanación después de una pérdida.', alt: 'Superar pérdida' },
  { slug: '/blog/por-que-no-puedo-llorar', image: '/porque-no-puedo-llorar.webp', category: 'Tanatología', title: '¿Por qué no puedo llorar?', description: 'El duelo sin lágrimas es real.', alt: 'Por qué no puedo llorar' },
  { slug: '/blog/perder-la-fe', image: '/perder-la-fe.webp', category: 'Tanatología', title: 'Cuando pierdes la fe: el duelo espiritual', description: 'Dejar de creer también es una pérdida.', alt: 'Perder la fe' },
  { slug: '/blog/tristeza-como-maestra', image: '/tristeza.webp', category: 'Tanatología', title: 'La tristeza no vino a destruirte', description: 'Aprender a estar triste sin huir.', alt: 'La tristeza como maestra' },
  { slug: '/blog/verguenza-duelo', image: '/verguenza-duelo.webp', category: 'Tanatología', title: 'La vergüenza: la emoción que te hace esconderte', description: 'Lo que callamos por miedo a ser juzgados.', alt: 'Vergüenza y duelo' },
  { slug: '/blog/duelo-y-culpa', image: '/duelo-y-culpa.jpeg', category: 'Tanatología', title: 'Culpa y duelo: la carga que no te deja avanzar', description: 'Por qué nos sentimos culpables después de una pérdida.', alt: 'Duelo y culpa' },
]

const arteterapiaArticles = [
  { slug: '/blog/que-es-la-arteterapia-beneficios', image: '/arteterapia.webp', category: 'Arteterapia', title: '¿Qué es la arteterapia?', description: 'Descubre cómo el arte ayuda a explorar y procesar emociones.', alt: '¿Qué es la arteterapia?' },
  { slug: '/blog/arteterapia-cancer', image: '/cancer-y-arteterapia.webp', category: 'Arteterapia', title: 'Arteterapia para pacientes con cáncer', description: 'El arte como acompañamiento durante el tratamiento oncológico.', alt: 'Arteterapia y cáncer' },
  { slug: '/blog/arteterapia-para-ninos', image: '/arteterapia-ninos.webp', category: 'Arteterapia', title: 'Arteterapia para niños: guía por edades', description: 'Cómo la arteterapia ayuda a los niños a expresar emociones.', alt: 'Arteterapia para niños' },
  { slug: '/blog/arteterapia-para-la-ansiedad', image: '/arteterapia-ansiedad.webp', category: 'Arteterapia', title: 'Arteterapia para la ansiedad', description: 'Cómo el arte puede ayudarte a manejar la ansiedad.', alt: 'Arteterapia para la ansiedad' },
  { slug: '/blog/ejercicios-arteterapia', image: '/ejercicios-arteterapia.webp', category: 'Arteterapia', title: '10 ejercicios de arteterapia que puedes hacer en casa', description: 'Ejercicios creativos para procesar emociones.', alt: 'Ejercicios de arteterapia' },
  { slug: '/blog/beneficios-arte', image: '/beneficios-del-arte.webp', category: 'Arteterapia', title: 'Cómo el arte sana: lo que sucede en tu cerebro cuando creas', description: 'La neurociencia detrás de por qué crear arte reduce el estrés.', alt: 'Beneficios del arte' },
  { slug: '/blog/mandalas-terapeuticos', image: '/mandalas-terapeuticos.webp', category: 'Arteterapia', title: 'Mandalas terapéuticos: qué son y cómo crearlos', description: 'Guía para crear mandalas y sus beneficios para la salud mental.', alt: 'Mandalas terapéuticos' },
  { slug: '/blog/arte-trauma', image: '/arte-y-trauma.webp', category: 'Arteterapia', title: 'Arte y trauma: cómo el proceso creativo ayuda a sanar', description: 'Por qué el arte funciona para procesar experiencias traumáticas.', alt: 'Arte y trauma' },
  { slug: '/blog/diferencia-psicologia-arteterapia', image: '/diferencia psicologia y arteterapia.jpeg', category: 'Arteterapia', title: 'Diferencia entre psicología y arteterapia', description: '¿Cuál es la diferencia y cuál necesitas?', alt: 'Diferencia psicología y arteterapia' },
]

const allArticles = [...tanatologiaArticles, ...arteterapiaArticles]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredArticles = allArticles.filter((article) => {
    const query = searchQuery.toLowerCase()
    const matchesSearch = article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query)
    const matchesCategory = !activeCategory || article.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
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

          <div className="max-w-md mx-auto relative mb-6">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-[#B2F7EF] focus:border-black focus:outline-none transition-colors text-black placeholder:text-black/40 bg-white"
            />
          </div>

          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!activeCategory ? 'bg-[#B2F7EF] text-black' : 'bg-gray-100 text-black/70 hover:bg-gray-200'}`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveCategory('Tanatología')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'Tanatología' ? 'bg-[#B2F7EF] text-black' : 'bg-gray-100 text-black/70 hover:bg-gray-200'}`}
            >
              Tanatología
            </button>
            <button
              onClick={() => setActiveCategory('Arteterapia')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'Arteterapia' ? 'bg-[#B2F7EF] text-black' : 'bg-gray-100 text-black/70 hover:bg-gray-200'}`}
            >
              Arteterapia
            </button>
          </div>
        </div>

        {searchQuery && (
          <p className="text-center text-black/60 mb-8">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}
          </p>
        )}

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
                  <h2 className="text-xl text-black mt-2 mb-3">{article.title}</h2>
                  <p className="text-black/70 text-sm leading-relaxed mb-4">{article.description}</p>
                  <span className="inline-flex items-center gap-2 text-black text-sm font-medium">
                    Leer más
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-black/60 text-lg mb-2">No se encontraron artículos</p>
            <p className="text-black/40">Intenta con otras palabras clave</p>
          </div>
        )}
      </div>
    </section>
  )
}
