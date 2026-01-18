'use client'

import { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Llegué en un momento de mucho dolor tras una pérdida inesperada. En cada sesión sentí espacio, escucha y contención. El arte me permitió expresar lo que no podía decir con palabras.',
    name: 'Laura T.',
    role: 'Finanzas',
  },
  {
    quote:
      'Lourdes es una guerrera que aprendió del dolor y cómo enfrentarlo. Ha sido mi compañera y guía en el camino de mi proceso de cáncer. Todo ha sido más llevadero y agradezco profundamente tenerla en mi vida.',
    name: 'Lourdes I.',
    role: 'Madre y maestra',
  },
  {
    quote:
      'No sabía qué esperar de la arteterapia, pero fue liberador. Pude conectar conmigo de una forma que no había experimentado antes.',
    name: 'David R.',
    role: 'Emprendedor',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
        setIsAnimating(false)
      }, 300)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section bg-sand/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote size={48} className="mx-auto text-terracotta/30 mb-8" strokeWidth={1} />

        <div className="min-h-[200px] flex items-center justify-center">
          <div
            className={`transition-all duration-300 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-ink leading-relaxed mb-8">
              «{testimonials[current].quote}»
            </blockquote>
            <cite className="not-italic">
              <span className="block font-medium text-terracotta">
                {testimonials[current].name}
              </span>
              <span className="block text-charcoal/60 text-sm mt-1">
                {testimonials[current].role}
              </span>
            </cite>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true)
                setTimeout(() => {
                  setCurrent(index)
                  setIsAnimating(false)
                }, 300)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? 'bg-terracotta w-8' : 'bg-clay/30 w-2 hover:bg-clay/50'
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
