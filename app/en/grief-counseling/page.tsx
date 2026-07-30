import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Check } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Grief Counseling',
  description: 'Grief counseling: compassionate support through loss and change. A safe space to feel, move through pain and give new meaning to what you\'ve lived. Online sessions with Lou.',
  alternates: { canonical: '/en/grief-counseling' },
}

const supports = [
  'The death of a loved one.',
  'The end of a relationship or a divorce.',
  'Illness, a diagnosis, or changes in your health.',
  'The loss of a pet.',
  'Invisible and disenfranchised grief that others don&apos;t always recognize.',
]

export default function GriefCounselingPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/en" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} /> Back to home
        </Link>

        <h1 className="text-3xl md:text-5xl text-black mb-6 leading-tight font-semibold">Grief Counseling</h1>

        <div className="mb-10 rounded-2xl overflow-hidden">
          <Image src="/tanatologia-acompanamiento-duelo.webp" alt="Grief counseling session" width={800} height={500} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80 space-y-5 leading-relaxed">
          <p>
            Grief counseling is compassionate support through loss and change. It&apos;s a safe space
            to express your emotions, move through the pain at your own pace, and slowly give new
            meaning to what you&apos;ve lived.
          </p>
          <p>
            There&apos;s no single right way to grieve, and no timeline you have to meet. You don&apos;t
            have to be strong, and you don&apos;t have to do it alone.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Support for many kinds of loss</h2>
          <ul className="space-y-2 not-prose">
            {supports.map((s) => (
              <li key={s} className="flex items-start gap-2 text-black/80">
                <Check size={18} className="text-[#B2F7EF] mt-1 flex-shrink-0" strokeWidth={2.5} />
                <span dangerouslySetInnerHTML={{ __html: s }} />
              </li>
            ))}
          </ul>

          <p>
            Sessions are one-on-one and online. When it helps, we can bring in art as a gentle
            way to express what words can&apos;t reach.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Book your free first session
          </a>
          <Link href="/en/shop" className="bg-white text-black border border-black/10 px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/20 transition-all">
            Grief journal &amp; book
          </Link>
        </div>
      </div>
    </article>
  )
}
