'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const featuredArticles = [
  {
    href: '/blog/arteterapia-cancer',
    image: '/cancer-y-arteterapia.webp',
    alt: 'Arteterapia para pacientes con cáncer',
    title: 'Arteterapia para pacientes con cáncer',
    description: 'El arte como acompañamiento durante el tratamiento oncológico.',
    category: 'Arteterapia'
  },
  {
    href: '/blog/duelo-perdida',
    image: '/el-duelo.webp',
    alt: '¿Qué es el duelo?',
    title: '¿Qué es el duelo?',
    description: 'Guía para entender y atravesar el proceso de pérdida.',
    category: 'Tanatología'
  },
]

export default function BlogSection() {
  return (
    <section className="py-10 md:py-12 bg-white" id="blog">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-4 relative">
            <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
            <h2 className="text-4xl md:text-5xl text-black relative z-10">Entre líneas</h2>
          </div>
          <p className="text-black/70 max-w-2xl mx-auto text-base leading-relaxed">
            Reflexiones, información y herramientas sobre arteterapia, tanatología y el universo de las emociones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredArticles.map((article) => (
            <Link key={article.href} href={article.href} className="group">
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
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{article.category}</span>
                  <h3 className="text-xl text-black mt-2 mb-3 font-semibold">{article.title}</h3>
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

        <div className="text-center">
          <Link
            href="/blog"
            className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  )
}
