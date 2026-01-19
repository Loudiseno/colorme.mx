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
  return (
    <section className="py-12 md:py-16 bg-frost/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-teal-glow/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-cyan/10 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
            Lo que dicen quienes han vivido el proceso
          </h2>
          <p className="text-charcoal/60">
            Cada historia es única, pero el camino siempre comienza con un primer paso.
          </p>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-teal-glow/20 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 flex flex-col"
            >
              {/* Quote mark */}
              <span className="text-teal-glow/40 font-display text-6xl leading-none mb-2">
                "
              </span>

              {/* Quote text */}
              <blockquote className="font-display text-lg text-ink leading-relaxed flex-grow mb-6">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <cite className="not-italic border-t border-teal-glow/20 pt-4">
                <span className="block font-medium text-teal">
                  {testimonial.name}
                </span>
                <span className="block text-charcoal/60 text-sm mt-0.5">
                  {testimonial.role}
                </span>
              </cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
