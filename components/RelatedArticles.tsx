'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Article {
  href: string
  image: string
  alt: string
  title: string
  description: string
}

const tanatologiaArticles: Article[] = [
  { href: '/blog/duelo-perdida', image: '/el-duelo.webp', alt: '¿Qué es el duelo?', title: '¿Qué es el duelo?', description: 'Guía para entender y atravesar el proceso de pérdida.' },
  { href: '/blog/cuanto-dura-el-duelo', image: '/cuanto-dura-el-duelo.webp', alt: '¿Cuánto dura el duelo?', title: '¿Cuánto dura el duelo?', description: 'No hay tiempos fijos, cada proceso es único.' },
  { href: '/blog/duelo-complicado', image: '/duelo-complicado.webp', alt: 'Duelo complicado', title: 'Duelo complicado', description: 'Cuando el duelo se estanca y necesita atención especial.' },
  { href: '/blog/duelo-anticipado', image: '/duelo-anticipado.webp', alt: 'Duelo anticipado', title: 'Duelo anticipado', description: 'Cuando el duelo comienza antes de la pérdida.' },
  { href: '/blog/duelo-perinatal', image: '/duelo-perinatal.webp', alt: 'Duelo perinatal', title: 'Duelo perinatal', description: 'Acompañamiento en la pérdida gestacional.' },
  { href: '/blog/duelo-por-mascota', image: '/duelo-por-mascota.webp', alt: 'Duelo por mascota', title: 'Duelo por mascota', description: 'La pérdida de un compañero animal es un duelo válido.' },
  { href: '/blog/muerte-mama', image: '/duelo-muerte-mama.webp', alt: 'Muerte de mamá', title: 'La muerte de mamá', description: 'Cuando perdemos a quien nos dio la vida.' },
  { href: '/blog/sindrome-cuidador', image: '/sindrome-cuidador.webp', alt: 'Síndrome del cuidador', title: 'Síndrome del cuidador', description: 'El agotamiento de quienes cuidan a otros.' },
  { href: '/blog/que-es-un-tanatologo', image: '/que-es-un-tanatologo.webp', alt: '¿Qué es un tanatólogo?', title: '¿Qué es un tanatólogo?', description: 'Todo sobre el acompañamiento tanatológico.' },
  { href: '/blog/aniversario-de-muerte', image: '/aniversario muerte.jpeg', alt: 'Aniversario de muerte', title: 'Aniversario de muerte', description: 'Cómo vivir y honrar la fecha que marca una ausencia.' },
  { href: '/blog/cumpleanos-persona-fallecida', image: '/cumpleanos persona fallecida.jpeg', alt: 'Cumpleaños de persona fallecida', title: 'El cumpleaños de quien ya no está', description: 'Cómo atravesar y honrar el cumpleaños de una persona fallecida.' },
  { href: '/blog/duelo-sucio-alivio', image: '/duelo-sucio-alivio.webp', alt: 'Duelo sucio y alivio', title: 'El duelo sucio: sentir alivio', description: 'Cuando sentimos alivio después de una pérdida.' },
]

const arteterapiaArticles: Article[] = [
  { href: '/blog/que-es-la-arteterapia-beneficios', image: '/arteterapia.webp', alt: '¿Qué es la arteterapia?', title: '¿Qué es la arteterapia?', description: 'Descubre cómo el arte ayuda a explorar y procesar emociones.' },
  { href: '/blog/arteterapia-cancer', image: '/cancer-y-arteterapia.webp', alt: 'Arteterapia para pacientes con cáncer', title: 'Arteterapia para pacientes con cáncer', description: 'El arte como acompañamiento durante el tratamiento oncológico.' },
  { href: '/blog/ejercicios-arteterapia', image: '/ejercicios-arteterapia.webp', alt: 'Ejercicios de arteterapia', title: 'Ejercicios de arteterapia', description: 'Técnicas creativas que puedes hacer en casa.' },
  { href: '/blog/beneficios-arte', image: '/beneficios-del-arte.webp', alt: 'Beneficios del arte', title: 'Beneficios del arte', description: 'Cómo el arte mejora tu bienestar emocional.' },
  { href: '/blog/mandalas-terapeuticos', image: '/mandalas-terapeuticos.webp', alt: 'Mandalas terapéuticos', title: 'Mandalas terapéuticos', description: 'El poder sanador de colorear mandalas.' },
  { href: '/blog/arte-trauma', image: '/arte-y-trauma.webp', alt: 'Arte y trauma', title: 'Arte y trauma', description: 'Cómo el arte ayuda a procesar experiencias difíciles.' },
  { href: '/blog/arteterapia-para-ninos', image: '/arteterapia-ninos.webp', alt: 'Arteterapia para niños', title: 'Arteterapia para niños', description: 'Guía por edades para acompañar a los más pequeños.' },
  { href: '/blog/arteterapia-para-la-ansiedad', image: '/arteterapia-ansiedad.webp', alt: 'Arteterapia para la ansiedad', title: 'Arteterapia para la ansiedad', description: 'Cómo el arte te ayuda a manejar la ansiedad.' },
]

const emocionesArticles: Article[] = [
  { href: '/blog/tristeza-como-maestra', image: '/tristeza.webp', alt: 'La tristeza como maestra', title: 'La tristeza como maestra', description: 'Qué nos enseña la tristeza cuando la escuchamos.' },
  { href: '/blog/verguenza-duelo', image: '/verguenza-duelo.webp', alt: 'La vergüenza en el duelo', title: 'La vergüenza que silencia', description: 'Cómo la vergüenza afecta nuestro proceso de duelo.' },
  { href: '/blog/por-que-no-puedo-llorar', image: '/porque-no-puedo-llorar.webp', alt: 'Por qué no puedo llorar', title: '¿Por qué no puedo llorar?', description: 'Cuando las lágrimas no llegan y el dolor sigue ahí.' },
  { href: '/blog/duelo-y-culpa', image: '/duelo-y-culpa.jpeg', alt: 'Duelo y culpa', title: 'Duelo y culpa', description: 'Cómo la culpa complica el duelo y cómo liberarte de ella.' },
  { href: '/blog/perder-la-fe', image: '/perder-la-fe.webp', alt: 'Perder la fe', title: 'Perder la fe', description: 'Cuando el duelo sacude nuestras creencias.' },
]

interface RelatedArticlesProps {
  currentSlug: string
  category: 'tanatologia' | 'arteterapia' | 'emociones'
}

export default function RelatedArticles({ currentSlug, category }: RelatedArticlesProps) {
  const allArticles = {
    tanatologia: tanatologiaArticles,
    arteterapia: arteterapiaArticles,
    emociones: emocionesArticles,
  }

  const categoryArticles = allArticles[category] || tanatologiaArticles

  // Filter out current article and get 3 random related articles
  const relatedArticles = categoryArticles
    .filter(article => !article.href.includes(currentSlug))
    .slice(0, 3)

  if (relatedArticles.length === 0) return null

  return (
    <div className="mt-12 pt-12 border-t border-black/10">
      <h3 className="text-2xl text-black font-semibold mb-6">Artículos relacionados</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link key={article.href} href={article.href} className="group">
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
              <div className="p-5">
                <h4 className="text-lg text-black mb-2 leading-tight">{article.title}</h4>
                <p className="text-black/70 text-sm leading-relaxed mb-3">{article.description}</p>
                <span className="inline-flex items-center gap-2 text-black text-sm font-medium">
                  Leer más <ArrowRight size={14} />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
