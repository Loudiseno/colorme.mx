interface PageHeroProps {
  title: string
  /** Bajada opcional, debajo del marco */
  subtitle?: string
  /** Fondo alterno cuando la sección siguiente es blanca */
  tint?: boolean
}

// Encabezado común a todas las páginas: título sobre el marco cyan,
// alineado a la izquierda y con el mismo espaciado en todo el sitio.
export default function PageHero({ title, subtitle, tint = false }: PageHeroProps) {
  return (
    <section className={`pt-28 pb-6 md:pt-32 md:pb-8 ${tint ? 'bg-[#B2F7EF]/10' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-5 relative">
          <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
          <h1 className="text-4xl md:text-5xl text-black relative z-10">{title}</h1>
        </div>
        {subtitle && (
          <p className="max-w-2xl text-lg text-black leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
