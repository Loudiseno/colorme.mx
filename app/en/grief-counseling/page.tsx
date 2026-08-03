import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/seo'
import EnNewsletter from '@/components/EnNewsletter'

export const metadata: Metadata = {
  title: 'Grief Counseling | Accompaniment Through Loss',
  description:
    'Accompaniment through grief and loss in a safe space to express emotions, move through pain, and give new meaning to what you have lived. First session free.',
  alternates: { canonical: '/en/grief-counseling' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Grief Counseling | ColorMe',
    description:
      'Accompaniment through grief and loss in a safe, compassionate space. First session free.',
    url: '/en/grief-counseling',
  },
  robots: { index: true, follow: true },
}

const areas = [
  {
    title: 'Death of a loved one',
    description:
      'Accompaniment through the loss of a parent, partner, child, sibling, friend, or pet — at your own pace.',
  },
  {
    title: 'Anticipatory grief',
    description:
      'Support when you are facing a terminal diagnosis or watching someone you love decline.',
  },
  {
    title: 'Non-death losses',
    description:
      'Divorce, illness, job loss, migration, infertility — real griefs that are rarely acknowledged.',
  },
  {
    title: 'Complicated grief',
    description:
      'When grief feels stuck, frozen, or impossible to carry, and life has stopped moving forward.',
  },
  {
    title: 'Caregivers',
    description:
      'Space for those who care for others and quietly carry their own exhaustion and grief.',
  },
  {
    title: 'Difficult dates',
    description:
      'Tools to move through anniversaries, birthdays, and holidays when someone is missing.',
  },
]

const steps = [
  {
    title: '1. Free first session',
    description:
      'We meet, you share what you are carrying, and we see together whether this space is right for you. No cost, no commitment.',
  },
  {
    title: '2. A personalised plan',
    description:
      'We shape a process around your loss and your pace — with no timelines imposed on your grief.',
  },
  {
    title: '3. Ongoing sessions',
    description:
      'A safe, judgement-free space to express, understand, and slowly learn to live alongside your loss — with words, with art, or both.',
  },
]

export default function GriefCounselingPage() {
  return (
    <div lang="en">
      {/* Hero */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">Grief Counseling</h1>
              <p className="text-lg text-black mb-6">
                <strong>You don&apos;t have to carry this alone</strong>
              </p>
              <div className="space-y-4 text-black/70 leading-relaxed mb-8">
                <p>
                  Accompaniment through grief and loss in a safe space to express your emotions,
                  move through the pain, and give new meaning to what you have lived.
                </p>
                <p>
                  Grief is not a problem to be solved or an illness to be cured. It is a process —
                  and it deserves to be walked with care, without anyone rushing you or telling you
                  how long it should take.
                </p>
                <p>
                  We work with conversation, with creative expression, or with both — whatever helps
                  you reach what is hardest to put into words.
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
                src="/tanatologia-acompanamiento-duelo.webp"
                alt="Grief counseling — accompaniment through loss"
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
          <h2 className="text-2xl md:text-3xl text-black mb-3">
            Whenever you&apos;re ready
          </h2>
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
