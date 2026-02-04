import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const articles = [
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
    image: '/cancer y arteterapia.webp',
    category: 'Arteterapia y Tanatología',
    title: 'Arteterapia para pacientes con cáncer',
    description: 'El arte como acompañamiento durante el tratamiento oncológico.',
    alt: 'Arteterapia para pacientes con cáncer',
  },
  {
    slug: '/blog/duelo-perdida',
    image: '/el duelo.webp',
    category: 'Tanatología',
    title: '¿Qué es el duelo?',
    description: 'Guía para entender y atravesar el proceso de pérdida.',
    alt: '¿Qué es el duelo?',
  },
]

export default function BlogPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
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
