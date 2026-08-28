import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { ArrowLeft, Check, Calendar } from 'lucide-react'
import { siteConfig, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Art as Therapy | Emotional Support Through Creating',
  description:
    'Emotional support through art to explore and process emotions. Individual and group sessions, online.',
  keywords: [
    'art as therapy',
    'art therapy online',
    'therapy through art',
    'online art therapy',
    'creative therapy',
    'therapeutic art',
    'expressive arts',
    'art therapy for grief',
    'art therapy for anxiety',
  ],
  alternates: {
    canonical: '/en/art-as-therapy',
  },
  openGraph: {
    title: 'Art as Therapy | Exploration Through Art',
    description:
      'Explore and process emotions through art. Individual and group sessions.',
    url: `${siteConfig.url}/en/art-as-therapy`,
  },
}

const benefits = [
  'Express emotions that are hard to put into words.',
  'Process trauma and painful experiences in a non-invasive way.',
  'Explore your inner world in a safe space.',
  'Deepen self-knowledge and introspection.',
  'Build tools for self-care and emotional regulation.',
  'Transform pain into healing and personal growth.',
  'Reduced stress and anxiety (lowers cortisol levels).',
  'Improved concentration and memory.',
  'A stronger mind-body connection.',
  'Greater self-esteem and personal confidence.',
  'Mental flexibility and openness to new perspectives.',
]

const helpsWith = [
  {
    icon: '/icono-colorme-corazon.webp',
    title: 'Grief',
    description: 'Accepting the loss, giving new meaning to the absence and expressing the emotions that arise, in a safe space.'
  },
  {
    icon: '/icono-colorme-estrella.webp',
    title: 'Self-knowledge',
    description: 'Exploring emotions, patterns and beliefs to understand what you feel and go deeper into your own experience.'
  },
  {
    icon: '/icono-colorme-arcoiris.webp',
    title: 'Change and transitions',
    description: 'Accompanying the processes that transform your life and exploring new perspectives on what you are going through.'
  },
  {
    icon: '/icono-colorme-nube-de-lluvia.webp',
    title: 'Illness and diagnosis',
    description: 'Accompanying the impact of a diagnosis, the course of the illness and the life that is rebuilt from that experience.'
  },
  {
    icon: '/icono-colorme-rayo.webp',
    title: 'Anxiety and stress',
    description: 'Expressing and releasing built-up tension to make room for calm and wellbeing.'
  },
  {
    icon: '/icono-colorme-esfera.webp',
    title: 'Self-esteem',
    description: 'Recognizing your worth, strengthening your confidence and working from a kind view of who you are and your story.'
  },
]

export default function ArtAsTherapyPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Art as Therapy',
    description:
      'Emotional support through art to express, understand and transform emotions. Individual and group sessions.',
    url: `${siteConfig.url}/en/art-as-therapy`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Art as Therapy', url: `${siteConfig.url}/en/art-as-therapy` },
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
                  Art as Therapy
                </h1>
              </div>
              <p className="text-lg text-black leading-relaxed mb-4">
                <strong>Express and transform your emotions through art</strong>
              </p>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                <p>
                  Emotional support that uses the creative process to explore, express and transform what words cannot reach.
                </p>
                <p>
                  Through color, texture and movement, we create a safe space to release tension, process emotions and connect with your inner world.
                </p>
                <p>
                  No artistic experience is required and there is no aesthetic goal; the value lies in the freedom to create and in what emerges from the process.
                </p>
              </div>
              <div className="mt-6">
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
                src="/arteterapia-sesion-creativa.webp"
                alt="Art as therapy session — creative expression"
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
          <blockquote className="text-lg md:text-xl text-black/70 italic leading-relaxed font-light">
            «Explorar lo que sentimos, desde lo que creamos.»
          </blockquote>
        </div>
      </section>

      {/* What it helps with */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              When can art as therapy help you?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {helpsWith.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center border border-[#B2F7EF] hover:border-black transition-all"
              >
                <div className="w-28 h-28 mx-auto mb-4 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg text-black mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-black/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="max-w-3xl mx-auto mt-8 text-sm text-black/50 leading-relaxed text-center">
            This is not a clinical or medical treatment; it does not diagnose and does not replace psychological or psychiatric care.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8 text-center">
            Benefits of art as therapy
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#B2F7EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-black" size={14} />
                </div>
                <span className="text-black/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Gallery */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
              <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
              <h2 className="text-3xl md:text-4xl text-black relative z-10">Testimonios</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden mb-3">
                <Image
                  src="/anagaby-final.jpeg"
                  alt="Testimonio de Ana Gaby"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-black/60">Ana Gaby, age 11</p>
            </div>
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden mb-3">
                <Image
                  src="/celeste-final.jpeg"
                  alt="Testimonio de Celeste"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-black/60">Celeste, age 8</p>
            </div>
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden mb-3">
                <Image
                  src="/mari-final.jpeg"
                  alt="Testimonio de Mari"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-black/60">Mari, age 9</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-8">
            What happens during a session?
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">1. Llamada inicial</h3>
              <p className="text-black/70">
                A free 30-minute online conversation to meet, listen to you, understand where you are, and explore whether art as therapy is the right support for you.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">2. A personalized support plan</h3>
              <p className="text-black/70">
                We design a support plan based on where you are in life, your personal goals and specific needs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
              <h3 className="text-xl text-black mb-2">3. Ongoing sessions</h3>
              <p className="text-black/70">
                50-minute spaces created for you, where through art-based practices you can express, explore and work through your process at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>


{/* CTA */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-4">
            Ready to begin?
          </h2>
          <p className="text-black/70 mb-8">
            Book your free first session and discover how art can
            ayudarte en tu proceso.
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
