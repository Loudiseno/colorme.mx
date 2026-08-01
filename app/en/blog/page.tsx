import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { enArticles } from '@/lib/enBlog'
import { siteConfig } from '@/lib/seo'
import EnNewsletter from '@/components/EnNewsletter'

export const metadata: Metadata = {
  title: 'Between the Lines — Art Therapy & Grief Blog | ColorMe',
  description:
    'Reflections, information, and tools on art therapy, grief, and emotions. A place to explore life, loss, self-discovery, and creativity through art, color, and rituals from around the world.',
  keywords: [
    'grief blog',
    'art therapy blog',
    'grief support',
    'art therapy for anxiety',
    'stages of grief',
    'coping with loss',
  ],
  alternates: { canonical: '/en/blog' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Between the Lines — Art Therapy & Grief Blog | ColorMe',
    description:
      'Reflections, information, and tools on art therapy, grief, and emotions — through art, color, and rituals from around the world.',
    url: '/en/blog',
  },
  robots: { index: true, follow: true },
}

export default function EnBlogIndex() {
  const [featured, ...rest] = enArticles

  return (
    <main lang="en" className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-12">
          <p className="text-xs text-black/50 uppercase tracking-wider mb-3">English Blog</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4 font-semibold">
            Between the Lines
          </h1>
          <p className="text-black/70 leading-relaxed max-w-2xl mx-auto">
            Reflections, information, and tools on art therapy, grief counseling, and the world of
            emotions. A place to explore life, loss, self-discovery, and creativity through art,
            color, and rituals from around the world.
          </p>
        </header>

        {/* Featured */}
        <Link
          href={`/en/blog/${featured.slug}`}
          className="group grid md:grid-cols-2 gap-6 items-center rounded-3xl border border-black/10 overflow-hidden hover:border-[#B2F7EF] transition-colors mb-12"
        >
          <div className="relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 md:p-8">
            <span className="text-xs text-black/50 uppercase tracking-wider">
              {featured.category}
            </span>
            <h2 className="text-2xl md:text-3xl text-black font-semibold mt-2 mb-3 leading-tight">
              {featured.title}
            </h2>
            <p className="text-black/70 leading-snug mb-4">{featured.description}</p>
            <span className="inline-flex items-center gap-1 text-[#0D9488] font-medium">
              Read article <ArrowRight size={16} />
            </span>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/en/blog/${article.slug}`}
              className="group flex flex-col rounded-2xl border border-black/10 overflow-hidden hover:border-[#B2F7EF] transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs text-black/50 uppercase tracking-wider">
                  {article.category}
                </span>
                <h2 className="text-lg font-semibold text-black mt-1 mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-black/60 text-sm leading-snug flex-1">{article.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#0D9488] mt-3">
                  Read <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Book CTA */}
        <section className="mt-14 rounded-3xl bg-[#B2F7EF]/15 border border-[#B2F7EF] p-8 text-center">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mb-3">
            Indeleble — a true story of loss and resilience
          </h2>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            A real story of facing cancer, transformation, and the beauty that persists in the storm —
            told with watercolor illustrations. Available on Kindle.
          </p>
          <a
            href={siteConfig.book.amazonEn}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D9488] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#0D9488]/90 transition-all inline-block"
          >
            Read the book on Amazon
          </a>
        </section>

        {/* Newsletter */}
        <div className="mt-8">
          <EnNewsletter />
        </div>

        {/* Note / Spanish link */}
        <div className="mt-12 text-center">
          <Link
            href={`${siteConfig.url}/blog`}
            className="text-sm text-black/50 hover:text-[#0D9488] transition-colors"
          >
            ¿Prefieres leer en español? Visita el blog en español →
          </Link>
        </div>
      </div>
    </main>
  )
}
