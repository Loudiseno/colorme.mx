import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { ArrowRight, Calendar, Instagram, Facebook, Youtube } from 'lucide-react'
import { siteConfig, generateBookSchema } from '@/lib/seo'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import EnBlogSection from '@/components/EnBlogSection'

// Iconos personalizados (no disponibles en lucide)
const TikTokIcon = ({ size = 20, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const WhatsAppIcon = ({ size = 20, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
)

const socialLinks = [
  { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
  { name: 'TikTok', href: 'https://www.tiktok.com/@colorme_lab', icon: TikTokIcon },
  { name: 'YouTube', href: 'https://www.youtube.com/@ColorMe-lab', icon: Youtube },
  { name: 'WhatsApp', href: siteConfig.whatsapp, icon: WhatsAppIcon },
]

export const metadata: Metadata = {
  title: 'Art as Therapy & Grief Counseling | Emotional Support | ColorMe',
  description: 'Emotional support through art as therapy and grief counseling to heal grief, move through change and work with your emotions. First session free.',
  alternates: {
    canonical: '/en',
  },
}

export default function EnHomePage() {
  return (
    <>
      {/* Book Schema */}
      <Script
        id="book-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBookSchema()),
        }}
      />

      {/* Hero: Intro + About Lou */}
      <section className="pt-28 pb-6 md:pt-32 md:pb-8 bg-white" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left: Practice Introduction */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">
                Art as Therapy &amp; Grief Counseling
              </h1>
              <p className="text-lg md:text-xl text-black/60 tracking-widest mb-6">
                CREATE.FEEL.TRANSFORM
              </p>
              <div className="space-y-4 text-black/70 leading-relaxed mb-8">
                <p>
                  ColorMe is a space for professional support through grief, loss, reconnection and personal transformation using art as therapy and grief counseling with a somatic approach.
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

            {/* Right: About Lou */}
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
                      Creativity has always been my way of connecting with the world. My own losses led me to accompany others through change and transformation — through listening, through art, or a blend of both. My training integrates techniques from Mexico, Bali, Thailand, Malaysia, India and United Kingdom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="pt-2 pb-1 md:pt-3 md:pb-2 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl text-black leading-relaxed">
            &quot;Healing is not following the lines. It&apos;s drawing your own.&quot;
          </blockquote>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-2 pb-10 md:pt-3 md:pb-12 bg-[#B2F7EF]/5" id="services">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Arteterapia */}
            <div className="bg-white rounded-2xl p-8 border border-[#B2F7EF] flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src="/arteterapia-sesion-creativa.webp"
                  alt="Art as therapy session — creative expression"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl text-black mb-4">
                Art as Therapy
              </h2>
              <p className="text-black/70 leading-relaxed mb-6">
                Emotional support through art to express, understand and transform emotions — with no aesthetic goal and no artistic experience required.
              </p>
              <Link
                href="/en/art-as-therapy"
                className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
              >
                Learn more
              </Link>
            </div>

            {/* Grief Counseling */}
            <div className="bg-white rounded-2xl p-8 border border-[#B2F7EF] flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src="/tanatologia-acompanamiento-duelo.webp"
                  alt="Grief counseling — support through loss"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl text-black mb-4">
                Grief Counseling
              </h2>
              <p className="text-black/70 leading-relaxed mb-6">
                Support through grief and loss in a safe space to express emotions, move through the pain and give new meaning to what you&apos;ve lived.
              </p>
              <Link
                href="/en/grief-counseling"
                className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-black mb-10 text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image
                  src="/columpio.webp"
                  alt="Individual sessions"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">Individual sessions</h3>
              <p className="text-black/70 leading-relaxed">
                Personalized sessions at your own pace and needs, with close emotional support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image
                  src="/corazon.webp"
                  alt="Group sessions"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">Group sessions</h3>
              <p className="text-black/70 leading-relaxed">
                Safe gatherings to create, share and heal collectively, working on themes of common interest.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image
                  src="/adolecente-hombre.webp"
                  alt="Workshops for organizations"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">Workshops for organizations</h3>
              <p className="text-black/70 leading-relaxed">
                Emotional wellbeing programs tailored to each group&apos;s objectives.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
            >
              Book your session
            </a>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-8 md:py-10 bg-white" id="books">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-black mb-10 text-center">Books</h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Indeleble */}
            <div className="bg-[#B2F7EF]/10 rounded-3xl border border-[#B2F7EF] p-8 flex flex-col">
              <div className="max-w-xs mx-auto mb-6">
                <Image
                  src="/libro-indeleble-cancer-resiliencia.webp"
                  alt="Indeleble — a book on resilience and surviving cancer by Lou"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-3xl md:text-4xl text-black mb-2 text-center"><strong>Indeleble</strong></h3>
              <p className="text-base text-black font-bold mb-4 text-center leading-snug">
                A true story of resilience and survival through cancer, with watercolor illustrations
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  A testimony about life and personal transformation after a diagnosis
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Available on Kindle and as a downloadable PDF, in English and Spanish
                </li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="/en/shop#indeleble"
                  className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                >
                  See buying options
                </Link>
              </div>
            </div>

            {/* El arte de habitar tu duelo */}
            <div className="bg-[#B2F7EF]/10 rounded-3xl border border-[#B2F7EF] p-8 flex flex-col">
              <div className="max-w-[220px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/el-arte-de-habitar-tu-duelo-portada.webp"
                  alt="The Art of Dwelling in Your Grief — guided grief journal by Lou Pérez"
                  width={900}
                  height={1165}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-3xl md:text-4xl text-black mb-2 text-center"><strong>The Art of Dwelling in Your Grief</strong></h3>
              <p className="text-base text-black font-bold mb-1 text-center leading-snug">
                Grief isn&apos;t overcome. It&apos;s inhabited.
              </p>
              <p className="text-sm text-black/60 mb-4 text-center leading-snug">
                A guided journal for grief and transformation (art as therapy and grief counseling)
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  A guide in four movements: recognizing what you lost, making room for your emotions, reorganizing your life, and integrating what you&apos;ve lived as part of your story.
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  More than 50 art, writing and reflection exercises across 189 pages
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Instant PDF download, to print or use on a tablet
                </li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="/en/shop#journal"
                  className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Book Testimonials - Right below the book section */}
          <div className="max-w-7xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Image
                src="/testimonio-sergio-morales.webp"
                alt="Review by Sergio Morales — 5 stars"
                width={600}
                height={150}
                className="w-full h-auto rounded-lg border border-black/10"
              />
              <Image
                src="/testimonio-dan.webp"
                alt="Review by Dan — 5 stars"
                width={600}
                height={150}
                className="w-full h-auto rounded-lg border border-black/10"
              />
              <Image
                src="/testimonio-monica-aristi.webp"
                alt="Review by Monica Aristi — 5 stars"
                width={600}
                height={150}
                className="w-full h-auto rounded-lg border border-black/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Blog Section */}
      <EnBlogSection />

      {/* Contact Section */}
      <section className="py-8 md:py-10" id="contact">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-black mb-4">Get in touch</h2>
            <p className="text-black/70">
              The first session is free! Tell me a little about yourself and what you&apos;re looking for.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Redes sociales */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl text-black mb-2">Follow me on social media</h2>
          <p className="text-black/60 mb-6">
            Support, art and reflections for your everyday.
          </p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-11 h-11 rounded-full border border-black/15 text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                <social.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-black mb-4">
            Questions?
          </h2>
          <p className="text-black/70 mb-8">
            Find answers to the most common questions about sessions.
          </p>
          <Link
            href="/en/faq"
            className="bg-[#B2F7EF] text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#B2F7EF]/80 transition-all inline-flex items-center gap-2"
          >
            FAQ
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
