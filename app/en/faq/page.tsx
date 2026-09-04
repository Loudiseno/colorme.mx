'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

// Espejo en inglés de la sección de preguntas frecuentes.
const faqs = [
  {
    question: 'What kind of sessions do you offer?',
    answer:
      'I offer individual sessions, group sessions and workshops in both grief counseling and art as therapy, adapted to what you need. All sessions are available online.',
  },
  {
    question: 'How long are the sessions?',
    answer:
      'The first orientation session is free and lasts 30 minutes. Regular individual sessions last 50 minutes. For group sessions or workshops, the length is set according to the specific goals of the group.',
  },
  {
    question: 'Do I have to choose between grief counseling and art as therapy?',
    answer:
      'Not necessarily. Some people work only through art, others through words. In many cases we bring both together. We decide it between us, based on what you are going through and what best fits your process.',
  },
  {
    question: 'Do I need to know how to draw?',
    answer:
      'No, you need no previous artistic experience at all. In art as therapy the aesthetic result and the technique do not matter. It is about expressing and exploring emotions, not about making "pretty" art. The focus is on what emerges during the process, not on how the result looks.',
  },
  {
    question: 'Can I combine these sessions with other therapies or medical treatment?',
    answer:
      'Yes, absolutely. This space is complementary, not exclusive. Grief counseling and art as therapy can be a great support alongside any medical, psychological or spiritual process you are already following.',
  },
  {
    question: 'How can I book a session?',
    answer:
      'You can book your free first session directly from this page using the booking button, which takes you to a calendar where you can choose the time that suits you best. You can also write to me by email or WhatsApp.',
  },
  {
    question: 'Is this a clinical or diagnostic treatment?',
    answer:
      'No. This support does not constitute a medical treatment or a clinical intervention, does not provide diagnoses and does not replace psychological or psychiatric care. I do not carry out mental health disorder assessments, standardised psychological testing or prescribe medication.',
  },
]

export default function EnFaqPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <main lang="en" className="pt-28 pb-6 md:pt-32 md:pb-8">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/en"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl text-black mb-4">Frequently asked questions</h1>
          <p className="text-black/70">
            Answers to the most common questions about sessions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="border border-[#B2F7EF] rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-4 hover:bg-[#B2F7EF]/10 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-black font-medium">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-black/50 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-black/70 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-black/70 mb-6">Still have a question? Let&apos;s talk.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B2F7EF] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
            >
              Book your free first session
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="bg-white text-black border border-black/10 px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/20 transition-all"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
