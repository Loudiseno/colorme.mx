import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About Lou — Art Therapist & Grief Counselor',
  description: 'Meet Lou: art therapist, grief counselor, designer, artist and cancer survivor. Emotional support through art and grief counseling.',
  alternates: { canonical: '/en/about' },
}

export default function EnAboutPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/en" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} /> Back to home
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Hi, I&apos;m Lou
          </h1>
          <p className="text-black/60 italic">Art therapist &amp; grief counselor</p>
        </header>

        <div className="mb-10 rounded-2xl overflow-hidden">
          <Image
            src="/lou-arteterapeuta-tanatologa-mexico.webp"
            alt="Lou — art therapist and grief counselor"
            width={800}
            height={600}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80 space-y-5 leading-relaxed">
          <p>
            I&apos;m a designer, artist, photographer, art therapist and grief counselor — and a
            cancer survivor. Creativity has always been my way of connecting with the world.
          </p>
          <p>
            My own losses led me to accompany others through grief, change and closure —
            creating safe spaces to hold whatever they feel. I work through listening, through
            art, or a blend of both.
          </p>
          <p>
            My training as a certified grief counselor integrates art-based techniques and other
            approaches I&apos;ve learned in Mexico, Bali, Thailand, Malaysia and India. I believe
            there&apos;s no single right way to move through grief — each process is unique, and no
            one should have to do it alone.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="bg-[#B2F7EF] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Book your free first session
          </a>
          <Link href="/en/shop" className="bg-white text-black border border-black/10 px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/20 transition-all">
            Visit the shop
          </Link>
        </div>
      </div>
    </article>
  )
}
