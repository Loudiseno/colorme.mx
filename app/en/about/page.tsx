import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About Me | Lou — Art as Therapy & Grief Counseling',
  description:
    'Lou: art as therapy practitioner, grief counselor, designer, artist, and cancer survivor. My story, training, and the approach behind ColorMe.',
  alternates: { canonical: '/en/about' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'About Me | ColorMe',
    description:
      'Art as therapy practitioner, grief counselor, designer, artist, and cancer survivor.',
    url: '/en/about',
  },
  robots: { index: true, follow: true },
}

export default function AboutPage() {
  return (
    <div lang="en">
      {/* Hero */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden max-w-sm mx-auto w-full">
              <Image
                src="/lou-arteterapeuta-tanatologa-mexico.webp"
                alt="Lou — art as therapy practitioner and grief counselor"
                width={600}
                height={450}
                priority
                className="w-full h-auto"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">Hi, I&apos;m Lou</h1>
              <p className="text-lg text-black font-bold mb-6">
                Art as therapy practitioner, grief counselor, designer, artist, and cancer survivor.
              </p>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Creativity has always been my way of connecting with the world. My own losses led
                  me to accompany others through their processes of change and transformation —
                  through listening, through art, or through both.
                </p>
                <p>
                  My training integrates techniques from Mexico, Bali, Thailand, Malaysia, and
                  India — different traditions that share one belief: that healing happens when we
                  are accompanied, and when we are allowed to express what hurts.
                </p>
                <p>
                  I know grief from the inside. That is why my work is not about fixing anyone, but
                  about walking beside you at your own pace, without timelines or judgement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-10 text-center">My approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2 font-semibold">Without rushing</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                There are no deadlines for grief or for healing. We move at the pace your process
                asks for.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2 font-semibold">Beyond words</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                When language falls short, art opens another door. No artistic skill is ever
                required.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2 font-semibold">Whole-person care</h3>
              <p className="text-black/70 text-sm leading-relaxed">
                A somatic approach that includes the body, because grief and emotion live there too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-black mb-4">My book: Indeleble</h2>
              <div className="space-y-4 text-black/70 leading-relaxed mb-6">
                <p>
                  You think you are invincible, until a diagnosis changes everything. When cancer
                  arrives without warning, dreams stop and uncertainty takes over.
                </p>
                <p>
                  But in the middle of the fear, something else appears: the strength to face the
                  unthinkable, and the capacity to heal — not only the body, but the soul.
                </p>
                <p>
                  An honest story about life, personal transformation, and the beauty that persists
                  in the chaos.
                </p>
              </div>
              <a
                href={siteConfig.book.amazonEn}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
              >
                Read it on Amazon
              </a>
            </div>
            <div className="max-w-sm mx-auto w-full">
              <Image
                src="/libro-indeleble-cancer-resiliencia.webp"
                alt="Indeleble — a book on resilience and surviving cancer by Lou"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#B2F7EF]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl text-black mb-3">Let&apos;s talk</h2>
          <p className="text-black/70 mb-6">
            The first session is free, online, and with no commitment.
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
            <Link
              href="/en/obra"
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium border border-black/10 hover:bg-[#B2F7EF]/20 transition-all"
            >
              See my artwork
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
