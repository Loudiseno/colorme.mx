import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import {
  enArticles,
  getEnArticle,
  allEnSlugs,
  type Block,
  type EnArticle,
} from '@/lib/enBlog'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return allEnSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getEnArticle(slug)
  if (!article) return {}

  const url = `${siteConfig.url}/en/blog/${article.slug}`
  return {
    title: article.metaTitle,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `/en/blog/${article.slug}` },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      title: article.metaTitle,
      description: article.description,
      url: `/en/blog/${article.slug}`,
      images: [{ url: article.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.description,
    },
    robots: { index: true, follow: true },
  }
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={i} className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">
          {block.text}
        </h3>
      )
    case 'ul':
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 my-4">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote
          key={i}
          className="border-l-4 border-[#B2F7EF] pl-5 my-6 italic text-black/70"
        >
          {block.text}
        </blockquote>
      )
    default:
      return (
        <p key={i} className="my-4">
          {block.text}
        </p>
      )
  }
}

function buildSchemas(article: EnArticle) {
  const url = `${siteConfig.url}/en/blog/${article.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${siteConfig.url}${article.image}`,
    inLanguage: 'en',
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: { '@type': 'Person', name: 'Lou', url: siteConfig.url },
    publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
    mainEntityOfPage: url,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'English Blog', item: `${siteConfig.url}/en/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }

  const faqSchema = article.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return { articleSchema, breadcrumbSchema, faqSchema }
}

export default async function EnArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getEnArticle(slug)
  if (!article) notFound()

  const { articleSchema, breadcrumbSchema, faqSchema } = buildSchemas(article)
  const related = (article.related ?? [])
    .map((s) => enArticles.find((a) => a.slug === s))
    .filter((a): a is EnArticle => Boolean(a))

  return (
    <article lang="en" className="pt-28 pb-16 md:pt-36 md:pb-20">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/en/blog"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-black/60 text-sm">
            <span>By Lou · Art Therapist &amp; Thanatologist</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={14} /> {article.readingTime}
            </span>
          </div>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden max-w-sm mx-auto">
          <Image
            src={article.image}
            alt={article.imageAlt}
            width={400}
            height={250}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          {article.content.map((block, i) => renderBlock(block, i))}
        </div>

        {/* FAQ visible */}
        {article.faq?.length ? (
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl text-black font-semibold mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-5">
              {article.faq.map((f, i) => (
                <div key={i} className="border-b border-black/10 pb-5">
                  <h3 className="text-lg font-semibold text-black mb-2">{f.q}</h3>
                  <p className="text-black/70">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* CTA */}
        <section className="mt-12 rounded-3xl bg-[#B2F7EF]/15 border border-[#B2F7EF] p-8 text-center">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mb-3">
            You don’t have to walk this alone
          </h2>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Gentle accompaniment through grief and difficult emotions with art therapy and
            thanatology. Book a free first orientation session.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0D9488] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#0D9488]/90 transition-all"
            >
              Book a free session
            </a>
            <a
              href={siteConfig.book.amazonEn}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium border border-black/10 hover:bg-[#B2F7EF]/20 transition-all"
            >
              Read the book: Indeleble
            </a>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl text-black font-semibold mb-6">Keep reading</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/en/blog/${r.slug}`}
                  className="group block rounded-2xl border border-black/10 overflow-hidden hover:border-[#B2F7EF] transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-black/50 uppercase tracking-wider">
                      {r.category}
                    </span>
                    <h3 className="text-base font-semibold text-black mt-1 leading-snug">
                      {r.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm text-[#0D9488] mt-2">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
