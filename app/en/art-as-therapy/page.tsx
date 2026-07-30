import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Check } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Art as Therapy',
  description: 'Art as therapy: emotional support through creating. Express, understand and transform what you feel — no artistic skill required. Online sessions with Lou.',
  alternates: { canonical: '/en/art-as-therapy' },
}

const benefits = [
  'Express what words can&apos;t reach.',
  'Lower anxiety and regulate difficult emotions.',
  'Explore and process grief and change at your own pace.',
  'Reconnect with yourself through the creative process.',
]

export default function ArtAsTherapyPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/en" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} /> Back to home
        </Link>

        <h1 className="text-3xl md:text-5xl text-black mb-6 leading-tight font-semibold">Art as Therapy</h1>

        <div className="mb-10 rounded-2xl overflow-hidden">
          <Image src="/arteterapia-sesion-creativa.webp" alt="Art as therapy session" width={800} height={500} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80 space-y-5 leading-relaxed">
          <p>
            Art as therapy is emotional support through the act of creating. It&apos;s not an art
            class and it&apos;s not about talent — the goal is never a pretty result. Through lines,
            shapes and color, you can express, understand and transform what you feel.
          </p>
          <p>
            You don&apos;t need to know how to draw or find the right words. The materials do part of
            the work: they let what&apos;s inside take a form you can look at, hold and move.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">How it can help</h2>
          <ul className="space-y-2 not-prose">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-black/80">
                <Check size={18} className="text-[#B2F7EF] mt-1 flex-shrink-0" strokeWidth={2.5} />
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>

          <p>
            Sessions are one-on-one and online, at your own pace. We work with whatever is
            present for you — grief, a big change, a transition — in a safe, judgment-free space.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Book your free first session
          </a>
          <Link href="/en/grief-counseling" className="bg-white text-black border border-black/10 px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/20 transition-all">
            Grief counseling
          </Link>
        </div>
      </div>
    </article>
  )
}
