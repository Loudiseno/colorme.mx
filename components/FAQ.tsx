'use client'

import { useState } from 'react'
import Script from 'next/script'
import { Plus, Minus } from 'lucide-react'
import { generateFAQSchema } from '@/lib/seo'

export const faqs = [
  {
    question: '¿Qué tipo de sesiones ofreces?',
    answer:
      'Ofrezco sesiones individuales, grupales y talleres tanto de arteterapia como de tanatología, adaptadas a tus necesidades. Todas las sesiones están disponibles en modalidad presencial u online.',
  },
  {
    question: '¿Qué duración tienen las sesiones?',
    answer:
      'La primera sesión de orientación es gratuita y dura 15 minutos. Las sesiones individuales regulares tienen una duración de 50 minutos. Para sesiones grupales o talleres, la duración se define según los objetivos específicos del grupo.',
  },
  {
    question: '¿Tengo que elegir entre arteterapia o tanatología?',
    answer:
      'No necesariamente. Algunas personas trabajan solo desde el arte, otras desde la palabra. En muchos casos, integramos ambas formas de acompañamiento. Lo decidimos juntos en función de lo que estás atravesando y lo que mejor se adapte a tu proceso.',
  },
  {
    question: '¿Necesito saber dibujar para hacer arteterapia?',
    answer:
      'No, no necesitas ninguna experiencia artística previa. En arteterapia no importa el resultado estético ni la técnica. Se trata de expresar y explorar emociones, no de crear arte "bonito". El foco está en lo que surge durante el proceso, no en cómo se ve el resultado.',
  },
  {
    question: '¿Puedo combinar estas sesiones con otras terapias o tratamientos médicos?',
    answer:
      'Sí, absolutamente. Este espacio es complementario, no excluyente. La arteterapia y la tanatología pueden ser un gran apoyo junto a procesos médicos, psicológicos o espirituales que ya estés llevando.',
  },
  {
    question: '¿Cómo puedo agendar una sesión?',
    answer:
      'Puedes agendar tu primera consulta gratuita directamente desde esta página usando el botón de agenda, que te llevará a un calendario donde podrás elegir el horario que mejor te convenga. También puedes escribirme por correo electrónico o a través del formulario de contacto.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-16 bg-canvas-soft" id="faq">
      {/* FAQ Schema for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-charcoal/70">
            Cada proceso es único. Aquí respondo algunas dudas comunes sobre las sesiones.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? 'bg-white shadow-lg shadow-teal/5'
                  : 'bg-transparent hover:bg-white/50'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-display text-lg md:text-xl text-ink pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-teal text-white rotate-0'
                      : 'bg-teal-glow/30 text-teal rotate-0'
                  }`}
                >
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="w-12 h-0.5 bg-teal/30 mb-4" />
                  <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
