import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Art as Therapy & Grief Counseling',
  description: 'Gentle emotional support through art as therapy and grief counseling. Online one-on-one sessions with Lou — art therapist and grief counselor. First session free.',
  alternates: { canonical: '/en' },
}

export default function EnHomePage() {
  return (
    <>
      {/* Hero: Intro + About Lou */}
      <section className="pt-28 pb-4 md:pt-36 md:pb-6 bg-white" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">
                Art as Therapy &amp; Grief Counseling
              </h1>
              <p className="text-lg md:text-xl text-black/60 tracking-widest mb-6">
                CREATE. FEEL. TRANSFORM.
              </p>
              <div className="space-y-4 text-black/70 leading-relaxed mb-8">
                <p>
                  ColorMe is a space for gentle, professional support through grief, loss,
                  reconnection and personal transformation — using art as therapy and grief
                  counseling with a somatic approach.
                </p>
              </div>
              <div>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
                >
                  Book your free first session
                </a>
              </div>
            </div>

            <div className="relative flex flex-col">
              <div className="bg-[#B2F7EF]/10 rounded-3xl p-8 md:p-10 border border-[#B2F7EF] flex-1 flex flex-col">
                <div className="flex flex-col h-full">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6">
                    <Image
                      src="/lou-arteterapeuta-tanatologa-mexico.webp"
                      alt="Lou — art therapist and grief counselor"
                      width={600}
                      height={450}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-[#B2F7EF] px-6 py-2 rounded-xl mb-4 relative">
                      <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                      <h2 className="text-2xl md:text-3xl text-black relative z-10">
                        Hi, I&apos;m Lou
                      </h2>
                    </div>
                    <p className="text-black font-bold mb-4">
                      Art therapist, grief counselor, designer, artist and cancer survivor.
                    </p>
                    <p className="text-black/70 leading-relaxed">
                      Creativity has always been my way of connecting with the world. My own
                      losses led me to accompany others through change and transformation —
                      through listening, through art, or a blend of both. My training draws on
                      techniques from Mexico, Bali, Thailand, Malaysia and India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="pt-2 pb-1 md:pt-3 md:pb-2 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl text-black leading-relaxed">
            &quot;Healing isn&apos;t about staying inside the lines. It&apos;s about drawing your own.&quot;
          </blockquote>
        </div>
      </section>

      {/* Services */}
      <section className="pt-2 pb-10 md:pt-3 md:pb-12 bg-[#B2F7EF]/5" id="services">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#B2F7EF] flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <Image src="/arteterapia-sesion-creativa.webp" alt="Art as therapy session" width={160} height={160} className="object-contain" />
              </div>
              <h2 className="text-3xl md:text-4xl text-black mb-4">Art as Therapy</h2>
              <p className="text-black/70 leading-relaxed mb-6">
                Emotional support through art — a way to express, understand and transform
                what you feel. No artistic skill or experience required; the goal is never a
                pretty result.
              </p>
              <Link href="/en/art-as-therapy" className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all">
                Learn more
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#B2F7EF] flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <Image src="/tanatologia-acompanamiento-duelo.webp" alt="Grief counseling" width={160} height={160} className="object-contain" />
              </div>
              <h2 className="text-3xl md:text-4xl text-black mb-4">Grief Counseling</h2>
              <p className="text-black/70 leading-relaxed mb-6">
                Support through loss and grief — a safe space to express emotions, move through
                pain and give new meaning to what you&apos;ve lived, with a warm and compassionate
                approach.
              </p>
              <Link href="/en/grief-counseling" className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Session types */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-black mb-10 text-center">Sessions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image src="/columpio.webp" alt="One-on-one therapy" width={128} height={128} className="object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">One-on-one</h3>
              <p className="text-black/70 leading-relaxed">Personalized sessions at your own pace, with close emotional support.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image src="/corazon.webp" alt="Group session" width={128} height={128} className="object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">Group sessions</h3>
              <p className="text-black/70 leading-relaxed">Safe gatherings to create, share and heal together around a common theme.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image src="/adolecente-hombre.webp" alt="Workshops for organizations" width={128} height={128} className="object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">Workshops</h3>
              <p className="text-black/70 leading-relaxed">Emotional wellbeing programs designed to fit your group&apos;s goals.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block">
              Book a session
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-10 md:py-12 bg-white" id="products">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-black mb-10 text-center">Products</h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Indeleble */}
            <div className="bg-[#B2F7EF]/10 rounded-3xl border border-[#B2F7EF] p-8 flex flex-col">
              <div className="max-w-xs mx-auto mb-6">
                <Image src="/libro-indeleble-cancer-resiliencia.webp" alt="Indeleble — a memoir of resilience" width={400} height={300} className="w-full h-auto" />
              </div>
              <h3 className="text-3xl md:text-4xl text-black mb-2 text-center"><strong>Indeleble</strong></h3>
              <p className="text-base text-black font-bold mb-4 text-center leading-snug">
                A true story of resilience through cancer, with watercolor illustrations
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  An honest memoir about life and personal transformation after a diagnosis
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Available on Kindle and as a downloadable PDF, in English and Spanish
                </li>
              </ul>
              <div className="flex justify-center">
                <Link href="/en/shop#indeleble" className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all">
                  See purchase options
                </Link>
              </div>
            </div>

            {/* Journal */}
            <div className="bg-[#B2F7EF]/10 rounded-3xl border border-[#B2F7EF] p-8 flex flex-col">
              <div className="max-w-[220px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/el-arte-de-habitar-tu-duelo-portada.webp" alt="The Art of Dwelling in Your Grief — a guided journal" width={900} height={1165} className="w-full h-auto" />
              </div>
              <h3 className="text-3xl md:text-4xl text-black mb-2 text-center"><strong>The Art of Dwelling in Your Grief</strong></h3>
              <p className="text-sm text-black/60 mb-1 text-center leading-snug">A guided journal for grief and transformation</p>
              <p className="text-base text-black font-bold mb-4 text-center leading-snug">Grief isn&apos;t overcome. It&apos;s inhabited.</p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  More than 50 step-by-step exercises across 189 pages
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Instant PDF download, to print or use on your tablet
                </li>
              </ul>
              <div className="flex justify-center">
                <Link href="/en/shop#journal" className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-10 md:py-12 bg-[#B2F7EF]/5" id="contact">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-black mb-4">Get in touch</h2>
          <p className="text-black/70 mb-8">
            The first session is free. Reach out and tell me a little about you and what
            you&apos;re looking for.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-flex items-center gap-2">
              Book your free session <ArrowRight size={18} />
            </a>
            <a href="https://wa.me/529992472678" target="_blank" rel="noopener noreferrer" className="bg-white text-black border border-black/10 px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/20 transition-all">
              Message me on WhatsApp
            </a>
          </div>
          <p className="text-sm text-black/50 mt-6">
            Or email <a href={`mailto:${siteConfig.email}`} className="underline hover:text-black">{siteConfig.email}</a>
          </p>
        </div>
      </section>
    </>
  )
}
