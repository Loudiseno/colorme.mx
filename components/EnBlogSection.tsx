'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

// Espejo en inglés de BlogSection: misma estructura, imágenes y tamaños.
const featuredArticles = [
  {
    href: '/en/blog/art-as-therapy-for-cancer',
    image: '/cancer-y-arteterapia.webp',
    alt: 'Art as therapy for cancer patients',
    title: 'Art as Therapy for Cancer Patients: Healing Beyond the Body',
    description: 'Art as a tool for emotional support during cancer treatment.',
    category: 'Art as Therapy',
  },
  {
    href: '/en/blog/what-is-grief',
    image: '/el-duelo.webp',
    alt: 'What is grief?',
    title: 'What Is Grief? Understanding the Process of Loss',
    description: 'A natural process we go through when we lose something or someone meaningful.',
    category: 'Grief Counseling',
  },
  {
    href: '/en/blog/grief-rituals-india',
    image: '/ofrendas-india.jpeg',
    alt: 'India, where the soul walks barefoot',
    title: 'India: Where the Soul Walks Barefoot — Rituals of Farewell',
    description: 'India is the spiritual heart of the planet. Discover its Hindu rituals and sacred colors.',
    category: 'Rituals and Colors of the World',
  },
]

export default function EnBlogSection() {
  return (
    <section className="py-8 md:py-10 bg-white" id="blog">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-4 relative">
            <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
            <h2 className="text-4xl md:text-5xl text-black relative z-10">Between the Lines</h2>
          </div>
          <p className="text-black/70 max-w-2xl mx-auto text-base leading-relaxed">
            Reflections, information, and tools on art as therapy, grief counseling, and the world of
            emotions. A place to explore life, loss, self-discovery, and creativity through art,
            color, and rituals from around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredArticles.map((article) => (
            <Link key={article.href} href={article.href} className="group">
              <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-xl text-black mt-2 mb-3 font-semibold">{article.title}</h3>
                  <p className="text-black/70 text-sm leading-relaxed mb-4">{article.description}</p>
                  <span className="inline-flex items-center gap-2 text-black text-sm font-medium">
                    Read more
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/en/blog"
            className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
          >
            See all articles
          </Link>
        </div>
      </div>
    </section>
  )
}
