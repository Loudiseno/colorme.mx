import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Check } from 'lucide-react'
import { siteConfig, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Grief Counseling | Support Through Loss and Change',
  description:
    'Professional grief counseling for loss, grief and change. Online grief support sessions. A human, compassionate approach to finding new meaning.',
  keywords: [
    'grief counseling',
    'grief support',
    'grief therapy',
    'bereavement support',
    'coping with loss',
    'grief after death',
    'grief counselor',
    'online grief support',
    'meaning after loss',
    'processing grief',
    'compassionate grief care',
  ],
  alternates: {
    canonical: '/en/grief-counseling',
  },
  openGraph: {
    title: 'Grief Counseling | Support Through Loss',
    description:
      'Professional, compassionate support through grief and loss. Online sessions.',
    url: `${siteConfig.url}/en/grief-counseling`,
  },
}

const typesOfLoss = [
  {
    icon: '/icono-colorme-corazon-latido.webp',
    title: 'Relational',
    description: 'Loss of meaningful bonds: the death of a loved one, the death of a pet, a breakup, divorce or family estrangement.',
  },
  {
    icon: '/icono-colorme-estrella.webp',
    title: 'Intrapersonal',
    description: 'Loss of identity, meaning or purpose: an existential crisis, a change of career or role, a sense of failure, the loss of projects or dreams.',
  },
  {
    icon: '/icono-colorme-esfera.webp',
    title: 'Material',
    description: 'Loss of possessions or stability: financial hardship, job loss, losing your home or objects of emotional value.',
  },
  {
    icon: '/icono-colorme-rayo.webp',
    title: 'Health',
    description: 'Physical, mental or emotional change: a medical diagnosis, chronic illness, disability, infertility, pregnancy or perinatal loss, or cognitive decline.',
  },
  {
    icon: '/icono-colorme-destellos.webp',
    title: 'Developmental',
    description: 'Life-cycle transitions: ageing, retirement, an empty nest, the end of a chapter, significant moves or relocating to another country.',
  },
  {
    icon: '/icono-colorme-sendero-de-estrellas.webp',
    title: 'Ambiguous',
    description: 'Losses without clear closure or with limited social recognition: disappearances, migration grief, miscarriage, unacknowledged relationships.',
  },
]

const process = [
  {
    title: 'Active listening',
    description: 'I offer a safe, holding space where you can freely express what you feel, with no judgement and no outside pressure.',
  },
  {
    title: 'Emotional support',
    description: 'I accompany you through the different emotions that arise: sadness, anger, guilt, fear or confusion.',
  },
  {
    title: 'Finding new meaning',
    description: 'Together we work to find new meaning and ways to integrate the loss into your story.',
  },
  {
    title: 'Tools',
    description: 'I share practical resources to face day-to-day life and care for yourself through the process.',
  },
]

const sessionTypes = [
  { icon: '/columpio.webp', title: 'Individual sessions', description: 'Personalized sessions at your own pace and needs, with close emotional support.' },
  { icon: '/corazon.webp', title: 'Group sessions', description: 'Safe gatherings to create, share and heal collectively, working on themes of common interest.' },
  { icon: '/adolecente-hombre.webp', title: 'Workshops for organizations', description: 'Emotional wellbeing programs tailored to each group&rsquo;s objectives.' },
]

export default function GriefCounselingPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Grief Counseling',
    description:
      'Professional support through loss, change and grief, helping you find new meaning from a human, compassionate approach.',
    url: `${siteConfig.url}/en/grief-counseling`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Grief Counseling', url: `${siteConfig.url}/en/grief-counseling` },
  ])

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-6 md:pt-32 md:pb-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
                <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                <h1 className="text-4xl md:text-5xl text-black relative z-10">
                  Grief Counseling
                </h1>
              </div>
              <p className="text-lg text-black leading-relaxed mb-4">
                <strong>Professional support through grief and loss</strong>
              </p>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed mb-6">
                <p>
                  Emotional support through loss, grief and end-of-life processes.
                </p>
                <p>
                  A safe space to express pain, make room for emotions and give new meaning to what you have lived.
                </p>
                <p>
                  Beyond physical death, it also supports visible and invisible griefs: bonds that end, diagnoses, the loss of a pet, a job or a chapter of life.
                </p>
              </div>
              <div>
                <a
                  href="https://wa.me/529992472678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
                >
                  I want to know more
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/columpio.webp"
                alt="Grief counseling — support through loss"
                width={400}
                height={400}
                priority
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl text-black leading-relaxed">
            &laquo;Grief is not only saying goodbye — it is letting go, transforming, and moving forward with love.&raquo; Lou
          </p>
        </div>
      </section>

      {/* Healing after a loss */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8 text-center">
            What is grief counseling?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-lg text-black/70 leading-relaxed">
              <p>
                Grief is a natural response to loss. It is an emotional, physical and psychological process that lets us face, process and adapt to a new reality.
              </p>
              <p>
                It does not follow a straight line or a set timeline: each person lives it uniquely. It can bring many emotions — sadness, anger, confusion, guilt or even relief — and all of them are valid.
              </p>
              <p>
                Recognizing what we feel is the first step to transforming pain into healing and emotional wellbeing.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/2-2.webp"
                alt="Healing after a loss"
                width={600}
                height={450}
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Loss */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Types of grief I can support you through
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Grief does not only happen with death. There are many kinds of loss that affect emotional life, and they all deserve recognition and support.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {typesOfLoss.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 text-center border border-[#B2F7EF] hover:border-black transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg text-black mb-2">{item.title}</h3>
                <p className="text-sm text-black/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How can grief counseling help */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8">
            How can grief counseling help you?
          </h2>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Provides a safe, holding space where you can express what you feel, without judgement and at your own pace.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Channels complex or blocked emotions, supporting healthy emotional processing.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Encourages deep reflection and self-knowledge in moments of crisis or transition.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Validates your emotions, helping you understand and normalize even the most contradictory feelings.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Gives new meaning to what you lived, supporting personal rebuilding grounded in acceptance and honesty.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="text-black" size={14} />
              </div>
              <span className="text-black/80">Honors what was lost, letting you integrate the absence into your life story without staying trapped in the pain.</span>
            </div>
          </div>
          <div className="text-center">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
            >
              Book your session
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8">
            What does a session look like?
          </h2>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
                <h3 className="text-xl text-black mb-2 font-semibold">{item.title}</h3>
                <p className="text-black/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-10 text-center">
            Tipos de sesiones
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sessionTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <Image
                    src={type.icon}
                    alt={type.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">{type.title}</h3>
                <p className="text-black/70 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined approach */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-6">
            Grief counseling and art as therapy: an integrated approach
          </h2>
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              In many cases I combine grief counseling with art as therapy for fuller support. Art can be a powerful way to express emotions that are sometimes hard to put into words.
            </p>
            <p>
              This combination is never required: some people prefer to work through words alone, while others find art a more natural channel. Together we decide which approach fits your process best.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/en/art-as-therapy"
              className="text-black hover:text-black/70 transition-colors font-medium inline-flex items-center gap-2"
            >
              Learn more about art as therapy
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-4">
            You don't have to go through this alone
          </h2>
          <p className="text-black/70 mb-8">
            The first step is the hardest. Book a free first session and let's talk about how I can support you.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
          >
            Book your free session
          </a>
        </div>
      </section>
    </>
  )
}
