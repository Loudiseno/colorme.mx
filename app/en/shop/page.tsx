import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Books & Resources | ColorMe',
  description:
    'Books and resources created from grief counseling and art as therapy: Indeleble, and The Art of Inhabiting Your Grief — a guided grief journal.',
  alternates: { canonical: '/en/shop' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Books & Resources | ColorMe',
    description: 'Books and resources to accompany you through grief and transformation.',
    url: '/en/shop',
  },
  robots: { index: true, follow: true },
}

const PACKAGE_PRICE_MXN = 900

export default function ShopPage() {
  const whatsappPackage = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Hi Lou, I would like to book the "The Art of Inhabiting Your Grief" + 1 individual session package. Could you share the details?'
  )}`

  return (
    <div lang="en">
      {/* Hero */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">Books &amp; Resources</h1>
          <p className="text-black/70 leading-relaxed max-w-2xl mx-auto">
            Resources created from grief counseling and art as therapy, to accompany you through
            your process — at your pace and wherever you are.
          </p>
        </div>
      </section>

      {/* Indeleble */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10" id="indeleble">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="max-w-sm mx-auto w-full">
              <Image
                src="/libro-indeleble-cancer-resiliencia.webp"
                alt="Indeleble — a book on resilience and surviving cancer by Lou"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl text-black mb-2">
                <strong>Indeleble</strong>
              </h2>
              <p className="text-base text-black font-bold mb-6 leading-snug">
                A true story of resilience and survival through cancer, with watercolour
                illustrations
              </p>
              <div className="space-y-4 leading-snug mb-6 text-black/70">
                <p>
                  You think you are invincible, until a diagnosis changes everything. A testimony
                  about life, personal transformation, and the beauty that persists in the chaos
                  after a diagnosis.
                </p>
                <p className="text-black font-semibold">
                  Available on Kindle and as a downloadable PDF, in English and Spanish.
                </p>
              </div>
              <p className="text-xs text-black/50 uppercase tracking-wider mb-2">Kindle</p>
              <div className="flex flex-wrap gap-3 mb-5">
                <a
                  href={siteConfig.book.amazonEn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all"
                >
                  Buy in English
                </a>
                <a
                  href={siteConfig.book.amazonEs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                >
                  Buy in Spanish
                </a>
              </div>
              <p className="text-xs text-black/50 uppercase tracking-wider mb-2">
                Downloadable PDF
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.book.pdfEn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all"
                >
                  PDF in English
                </a>
                <a
                  href={siteConfig.book.pdfEs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                >
                  PDF in Spanish
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grief journal */}
      <section className="py-12 md:py-16 bg-white" id="journal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-black mb-2">
                <strong>The Art of Inhabiting Your Grief</strong>
              </h2>
              <p className="text-base text-black font-bold mb-1 leading-snug">
                Grief isn&apos;t overcome. It&apos;s inhabited.
              </p>
              <p className="text-sm text-black/60 mb-6 leading-snug">
                A guided journal of grief and transformation (art as therapy and grief counseling)
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Over 50 step-by-step exercises — no drawing skill needed.
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Guided reflections to write about and explore what you feel.
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  A 30-day emotional check-in and daily micro-rituals.
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Breathing and grounding practices for the hardest days.
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Your own personal crisis kit and a calendar of difficult dates.
                </li>
              </ul>
              <a
                href={siteConfig.diario.payhip}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
              >
                Get the journal
              </a>
            </div>
            <div className="max-w-[280px] mx-auto w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/el-arte-de-habitar-tu-duelo-portada.webp"
                alt="The Art of Inhabiting Your Grief — guided grief journal"
                width={900}
                height={1165}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Package */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-3">
            The Art of Inhabiting Your Grief + 1 individual session
          </h2>
          <p className="text-black/70 mb-4">
            The journal to work through at your own pace, plus a one-to-one session with me to
            accompany you.
          </p>
          <p className="text-base text-black font-bold mb-6">${PACKAGE_PRICE_MXN} MXN</p>
          <a
            href={whatsappPackage}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D9488] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#0D9488]/90 transition-all inline-block"
          >
            Book it on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
