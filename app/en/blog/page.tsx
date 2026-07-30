import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { enArticles } from '@/lib/enBlog'

export const metadata: Metadata = {
  title: 'Blog — Grief & Art as Therapy',
  description: 'Articles on grief, loss and art as therapy. Gentle, practical writing to help you understand what you feel and move through it.',
  alternates: { canonical: '/en/blog' },
}

export default function EnBlogIndex() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-black mb-4">Blog</h1>
          <p className="text-black/70 max-w-2xl mx-auto leading-relaxed">
            Writing on grief, loss and art as therapy — to help you understand what you feel
            and find your own way through it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enArticles.map((a) => (
            <Link key={a.slug} href={`/en/blog/${a.slug}`} className="group">
              <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full flex flex-col">
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <Image src={a.image} alt={a.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{a.category}</span>
                  <h2 className="text-lg text-black mt-2 mb-3 font-semibold leading-tight">{a.title}</h2>
                  <p className="text-black/70 text-sm leading-relaxed mb-3 flex-1">{a.description}</p>
                  <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Read more <ArrowRight size={14} /></span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
