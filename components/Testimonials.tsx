'use client'

import { useState, useEffect } from 'react'

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
    <section className="section bg-frost/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-teal-glow/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-cyan/10 blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Large quote mark */}
        <span className="quote-mark block mb-4">"</span>

        <div className="min-h-[200px] flex items-center justify-center">
          <div
            className={`transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
            }`}
          >
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-ink leading-relaxed mb-8">
              {testimonials[current].quote}
            </blockquote>
            <cite className="not-italic">
              <span className="block font-medium text-teal text-lg">
                {testimonials[current].name}
              </span>
              <span className="block text-charcoal/60 text-sm mt-1">
                {testimonials[current].role}
              </span>
            </cite>
          </div>
        </div>

        {/* Progress indicators */}
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
              className={`h-1 rounded-full transition-all duration-500 ${
                index === current
                  ? 'bg-teal w-10'
                  : 'bg-silver/40 w-4 hover:bg-teal/50'
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
