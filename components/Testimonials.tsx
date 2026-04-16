const testimonials = [
  {
    quote:
      'Llegué en un momento de mucho dolor tras una pérdida inesperada. En cada sesión sentí espacio, escucha y contención. El arte me permitió expresar lo que no podía decir con palabras.',
    name: 'Laura Sánchez',
    role: 'Finanzas',
  },
  {
    quote:
      'Lourdes es una guerrera que aprendió del dolor y cómo enfrentarlo. Ha sido mi compañera y guía en el camino de mi proceso de cáncer. Todo ha sido más llevadero y agradezco profundamente tenerla en mi vida.',
    name: 'Isabel Rodríguez',
    role: 'Maestra y terapeuta familiar',
  },
  {
    quote:
      'No sabía qué esperar de la arteterapia, pero fue liberador. Pude conectar conmigo de una forma que no había experimentado antes.',
    name: 'David Juárez',
    role: 'Emprendedor',
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-black mb-3">
            Testimonios
          </h2>
          <p className="text-black/70">Lo que dicen quienes han vivido el proceso</p>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#B2F7EF] hover:border-black transition-all flex flex-col"
            >
              {/* Quote mark */}
              <span className="text-[#B2F7EF] text-6xl leading-none mb-2">
                "
              </span>

              {/* Quote text */}
              <blockquote className="text-lg text-black leading-relaxed flex-grow mb-6">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <cite className="not-italic border-t border-[#B2F7EF] pt-4">
                <span className="block font-medium text-black">
                  {testimonial.name}
                </span>
                <span className="block text-black/60 text-sm mt-0.5">
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
