'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ArrowRight } from 'lucide-react'
import EnBlogCarousel from '@/components/EnBlogCarousel'
import EnNewsletter from '@/components/EnNewsletter'
import { enArticles } from '@/lib/enBlog'

// Misma estructura que el blog en español: encabezado, buscador y
// carruseles por categoría.
const toCard = (a: (typeof enArticles)[number]) => ({
  href: `/en/blog/${a.slug}`,
  image: a.image,
  alt: a.imageAlt,
  title: a.title,
  description: a.description,
})

const griefArticles = enArticles.filter((a) => a.category === 'Grief Counseling').map(toCard)
const artArticles = enArticles.filter((a) => a.category === 'Art as Therapy').map(toCard)
const emotionArticles = enArticles.filter((a) => a.category === 'Emotions').map(toCard)
const ritualArticles = enArticles
  .filter((a) => a.category === 'Rituals and Colors of the World')
  .map(toCard)

const allArticles = [...griefArticles, ...artArticles, ...emotionArticles, ...ritualArticles]

export default function EnBlogPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = searchQuery.trim()
    ? allArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const isSearching = searchQuery.trim().length > 0

  return (
    <section lang="en" className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
            <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
            <h1 className="text-4xl md:text-5xl text-black relative z-10">Between the Lines</h1>
          </div>
          <p className="text-black/70 max-w-2xl mx-auto text-base leading-relaxed">
            Reflections, information, and tools on art as therapy, grief counseling, and the world of
            emotions. A place to explore life, loss, self-discovery, and creativity through art,
            color, and rituals from around the world.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-[#B2F7EF] focus:border-black focus:outline-none text-black placeholder:text-black/40 bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Search Results or Carousels */}
        {isSearching ? (
          <div>
            <p className="text-black/60 mb-6">
              {filteredArticles.length} result{filteredArticles.length !== 1 ? 's' : ''} for &quot;
              {searchQuery}&quot;
            </p>
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Link key={article.href} href={article.href} className="group">
                    <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                      <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                        <Image src={article.image} alt={article.alt} fill className="object-cover" />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg text-black mb-2 leading-tight font-medium">
                          {article.title}
                        </h3>
                        <p className="text-black/70 text-sm leading-relaxed mb-3">
                          {article.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-black text-sm font-medium">
                          Read more <ArrowRight size={14} />
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-black/60 text-center py-12">
                No articles found. Try different words.
              </p>
            )}
          </div>
        ) : (
          <>
            <EnBlogCarousel title="Grief Counseling" articles={griefArticles} />
            <EnBlogCarousel title="Art as Therapy" articles={artArticles} />
            <EnBlogCarousel title="Emotions" articles={emotionArticles} />
            <EnBlogCarousel title="Rituals and Colors of the World" articles={ritualArticles} />
          </>
        )}

        {/* Newsletter */}
        <div className="mt-8">
          <EnNewsletter />
        </div>

        {/* Spanish link */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-sm text-black/50 hover:text-[#0D9488] transition-colors"
          >
            ¿Prefieres leer en español? Visita el blog en español →
          </Link>
        </div>
      </div>
    </section>
  )
}
