import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import DiarioCarousel from '@/components/DiarioCarousel'

export const metadata: Metadata = {
  title: 'Shop — Grief Journal & the book Indeleble',
  description: 'Resources to support your process: the guided grief journal "The Art of Dwelling in Your Grief", the book Indeleble on Kindle and PDF, and packages with individual sessions.',
  alternates: { canonical: '/en/shop' },
}

const PACKAGE_PRICE = 900
const PACKAGE_BOOK_JOURNAL_PAYHIP = 'https://payhip.com/b/br6z2'
const whatsappPackage = `${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Hi Lou, I\'d like to book the package: "The Art of Dwelling in Your Grief" journal + 1 individual session ($900). Could you share the details?'
)}`

const journalIncludes = [
  'More than 50 step-by-step exercises, no drawing skills needed.',
  'Guided reflections to write and explore what you feel.',
  'A 30-day emotional check-in and small daily rituals.',
  'Breathing and grounding practices for the hardest days.',
  'Your own personal crisis kit and a calendar of difficult dates.',
]

const journalGallery = [
  { src: '/diario-antes-de-comenzar.webp', alt: 'The Art of Dwelling in Your Grief — before you begin' },
  { src: '/diario-frase.webp', alt: 'The Art of Dwelling in Your Grief — quote' },
  { src: '/diario-lo-que-encontraras.webp', alt: 'The Art of Dwelling in Your Grief — what you will find' },
  { src: '/el-arte-de-habitar-tablet.webp', alt: 'The Art of Dwelling in Your Grief on a tablet' },
]

export default function EnShopPage() {
  return (
    <>
      <PageHero title="Shop" subtitle="Resources created from grief counseling and art as therapy to support your process — at your own pace, wherever you are." />

      {/* Journal */}
      <section className="py-6 md:py-8 bg-[#B2F7EF]/5" id="journal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-[#B2F7EF]">
            {/* Images (white) */}
            <div className="bg-white p-6 md:p-8 flex flex-col justify-center gap-6">
              <div className="max-w-[300px] w-full mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image src="/el-arte-de-habitar-tu-duelo-portada.webp" alt="The Art of Dwelling in Your Grief — guided journal" width={900} height={1165} className="w-full h-auto" />
              </div>
              <DiarioCarousel images={journalGallery} />
            </div>

            {/* Text (cyan) */}
            <div className="bg-[#B2F7EF]/20 p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-black mb-1"><strong>The Art of Dwelling in Your Grief</strong></h2>
                <p className="text-sm text-black/60 mb-5">A guided journal for grief and transformation · in Spanish</p>

                <div className="space-y-3 text-sm text-black/80 leading-snug">
                  <p className="font-semibold text-black">Grief isn&apos;t overcome. It&apos;s inhabited.</p>
                  <p>
                    They told you to be strong. That time heals everything. That you should be
                    better by now. But no one gave you a space to live what you carry inside.
                    This journal wants to be that place.
                  </p>
                  <p>
                    Created by Lou Pérez, a certified grief counselor whose training integrates
                    art-based techniques and other approaches learned in Mexico, Bali, Thailand,
                    Malaysia, India and the United Kingdom, this journal guides you through four moments: recognizing
                    what you lost, making room for your emotions, reorganizing your life, and
                    integrating what you&apos;ve lived as part of your story.
                  </p>
                  <p className="font-semibold text-black">Inside you&apos;ll find:</p>
                  <ul className="space-y-1.5">
                    {journalIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-black mt-0.5">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    Created to support many kinds of loss: a loved one, a relationship, your
                    health, a pet, a country, the life you imagined...
                  </p>
                  <p>
                    There&apos;s no single right way to move through grief. Each process is unique.
                    But you don&apos;t have to do it alone.
                  </p>
                </div>

                <a href={siteConfig.diario.payhip} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block shadow-md mt-6">
                  Get the journal — instant download
                </a>

                <p className="text-xs text-black/40 mt-6 leading-snug">
                  ⚠️ This is a supportive resource and does not replace professional medical care.
                  <br />© Lou Pérez · ColorMe. Personal use. No redistribution or resale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-8 md:py-10 bg-white" id="packages">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-10 text-center">Packages</h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* Package 1 */}
            <div className="rounded-3xl border-2 border-[#B2F7EF] bg-[#B2F7EF]/10 p-8 md:p-10 flex flex-col text-center">
              <div className="inline-flex self-center items-center gap-2 bg-[#B2F7EF] text-black px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
                <Sparkles size={14} /> PACKAGE 1
              </div>
              <div className="rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image src="/bundle-indeleble-diario.webp" alt="Bundle: Indeleble + the grief journal" width={1000} height={563} className="w-full h-auto" />
              </div>
              <h3 className="text-2xl md:text-3xl text-black mb-2 leading-snug">Indeleble + The Art of Dwelling in Your Grief</h3>
              <p className="text-base text-black font-bold mb-4">Survive and inhabit.</p>
              <p className="text-black/70 leading-snug mb-8 flex-1">
                A true story of a cancer diagnosis illustrated in watercolor, plus a journal of
                exercises and tools to support any kind of grief.
              </p>
              <a href={PACKAGE_BOOK_JOURNAL_PAYHIP} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block shadow-md self-center">
                I want the package
              </a>
            </div>

            {/* Package 2 */}
            <div className="rounded-3xl border-2 border-[#B2F7EF] bg-[#B2F7EF]/10 p-8 md:p-10 flex flex-col text-center">
              <div className="inline-flex self-center items-center gap-2 bg-[#B2F7EF] text-black px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
                <Sparkles size={14} /> PACKAGE 2
              </div>
              <div className="max-w-[150px] mx-auto rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image src="/el-arte-de-habitar-mockup.webp" alt="The Art of Dwelling in Your Grief" width={900} height={1273} className="w-full h-auto" />
              </div>
              <h3 className="text-2xl md:text-3xl text-black mb-2 leading-snug">The Art of Dwelling in Your Grief + 1 individual session</h3>
              <p className="text-base text-black font-bold mb-4">${PACKAGE_PRICE} MXN</p>
              <p className="text-black/70 leading-snug mb-8 flex-1">
                The journal accompanies you every day, plus one individual online session:
                50 minutes of one-on-one grief support.
              </p>
              <a href={whatsappPackage} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block shadow-md self-center">
                Book your session
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Indeleble */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5" id="indeleble">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-[#B2F7EF] bg-white">
            <div className="bg-white p-8 md:p-12 flex items-center justify-center">
              <div className="max-w-sm mx-auto">
                <Image src="/libro-indeleble-cancer-resiliencia.webp" alt="Indeleble — a memoir of resilience through cancer" width={400} height={300} className="w-full h-auto" />
              </div>
            </div>
            <div className="bg-[#B2F7EF]/10 p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-4xl md:text-5xl text-black mb-2"><strong>Indeleble</strong></h2>
                <p className="text-base text-black font-bold mb-6 leading-snug">
                  A true story of resilience through cancer, with watercolor illustrations
                </p>
                <div className="space-y-4 leading-snug mb-6 text-black/70">
                  <p>
                    You think you&apos;re invincible, until a diagnosis changes everything. An honest
                    memoir about life, personal transformation and the beauty that endures in the
                    chaos after a diagnosis.
                  </p>
                  <p className="text-black font-semibold">
                    Available on Kindle and as a downloadable PDF, in English and Spanish.
                  </p>
                </div>

                <p className="text-xs text-black/50 uppercase tracking-wider mb-2">Kindle</p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <a href={siteConfig.book.amazonEn} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all">English</a>
                  <a href={siteConfig.book.amazonEs} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all">Español</a>
                </div>
                <p className="text-xs text-black/50 uppercase tracking-wider mb-2">Downloadable PDF</p>
                <div className="flex flex-wrap gap-3">
                  <a href={siteConfig.book.pdfEn} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all">PDF in English</a>
                  <a href={siteConfig.book.pdfEs} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all">PDF en español</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-4">Not sure where to start?</h2>
          <p className="text-black/70 mb-8 leading-relaxed">
            Book a free first session and together we&apos;ll find the resource or support that fits
            your moment.
          </p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block">
            Book your free first session
          </a>
        </div>
      </section>
    </>
  )
}
