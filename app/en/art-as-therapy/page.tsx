import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/seo'
import EnNewsletter from '@/components/EnNewsletter'

export const metadata: Metadata = {
  title: 'Art as Therapy | Express and Transform Your Emotions',
  description:
    'Emotional accompaniment through the creative process to express, understand, and transform what words cannot reach. No artistic experience needed.',
  alternates: { canonical: '/en/art-as-therapy' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Art as Therapy | ColorMe',
    description:
      'Emotional accompaniment through the creative process. No artistic experience needed.',
    url: '/en/art-as-therapy',
  },
  robots: { index: true, follow: true },
}

const areas = [
  {
    title: 'Grief and loss',
    description:
      'A safe space to process absence, express the pain, and move through the emotions of loss.',
  },
  {
    title: 'Anxiety and stress',
    description:
      'Releasing accumulated tension and recovering calm through creative reconnection and emotional regulation.',
  },
  {
    title: 'Self-knowledge',
    description:
      'Exploring your emotions, patterns, and beliefs to reconnect with yourself and strengthen your inner wellbeing.',
  },
  {
    title: 'Life changes and transitions',
    description: 'I accompany you in adapting to change and finding new ways forward.',
  },
  {
    title: 'Illness and diagnosis',
    description:
      'Addressing the impact of a diagnosis, treatment, and uncertainty — validating every emotion so you can process the pain and regain a sense of control.',
  },
  {
    title: 'Self-esteem and confidence',
    description:
      'A process of returning to yourself: recover your centre, recognise your worth, and reconnect with the confidence to inhabit your own life.',
  },
]

const steps = [
  {
    title: '1. Free first session',
    description:
      'We meet, you tell me what brings you here, and we see together whether this is the right space for you. No cost, no commitment.',
  },
  {
    title: '2. A personalised plan',
    description:
      'Based on what you need, we design a process at your pace, with the tools that best fit you.',
  },
  {
    title: '3. Ongoing sessions',
    description:
      'We work through creative exercises adapted to you — always in a safe space, with no judgement and no need for artistic skill.',
  },
]

export default function ArtAsTherapyPage() {
  return (
    <div lang="en">
      {/* Hero */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">Art as Therapy</h1>
              <p className="text-lg text-black mb-6">
                <strong>Express and transform your emotions through art</strong>
              </p>
              <div className="space-y-4 text-black/70 leading-relaxed mb-8">
                <p>
                  Emotional accompaniment that uses the creative process to explore, express, and
                  transform what words cannot reach.
                </p>
                <p>
                  Through colour, texture, and movement, we create a safe space to release tension,
                  process emotions, and connect with your inner world.
                </p>
                <p>
                  No artistic experience is required and there is no aesthetic goal — the value lies
                  in the freedom to create and in what emerges from the process.
                </p>
              </div>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
              >
                Book your free first session
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/arteterapia-sesion-creativa.webp"
                alt="Art as therapy session — creative expression"
                width={600}
                height={450}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we work on */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-10 text-center">What we work on</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div key={area.title} className="bg-white rounded-2xl p-6 border border-[#B2F7EF]">
                <h3 className="text-xl text-black mb-2 font-semibold">{area.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-black mb-10 text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.title}>
                <h3 className="text-xl text-black mb-2 font-semibold">{step.title}</h3>
                <p className="text-black/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 bg-[#B2F7EF]/10">
        <div className="max-w-3xl mx-auto px-6">
          <EnNewsletter />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl text-black mb-3">Ready to begin?</h2>
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
              href="/en/blog"
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium border border-black/10 hover:bg-[#B2F7EF]/20 transition-all"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
