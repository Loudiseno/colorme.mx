import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { ArrowRight, Users, User, Building2, Calendar } from 'lucide-react'
import { siteConfig, generateBookSchema } from '@/lib/seo'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'

function SectionDivider() {
  return (
    <div className="section-divider">
      <svg viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 12C20 12 25 4 40 4C55 4 55 20 60 20C65 20 65 4 80 4C95 4 100 12 120 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="60" cy="12" r="3" fill="currentColor" />
      </svg>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Book Schema */}
      <Script
        id="book-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBookSchema()),
        }}
      />

      {/* Hero: Intro + About Lou */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 relative bg-watercolor overflow-hidden" id="sobremi">
        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-teal-glow/20 blur-2xl animate-float" />
          <div className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full bg-teal/10 blur-xl animate-float-delayed" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left: Practice Introduction */}
            <div className="flex flex-col justify-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mb-6 opacity-0 animate-slide-up stagger-1">
                Un espacio para sanar
                <span className="text-teal"> a través del arte</span>
              </h1>
              <div className="space-y-4 text-charcoal/80 leading-relaxed opacity-0 animate-fade-up stagger-2">
                <p>
                  Color Me es un lugar donde puedes crear tu propia historia a través
                  de la arteterapia y la tanatología. Aquí no hay reglas ni caminos fijos.
                </p>
                <p>
                  No se trata de vivir sin sentir, sino de dar espacio a las emociones,
                  permitirnos habitarlas y transformarlas. Acompañamiento profesional
                  para sanar el duelo y reconectar contigo.
                </p>
              </div>
              <div className="opacity-0 animate-fade-up stagger-3">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-block mt-8"
                >
                  Agenda tu primera sesión ¡Gratis!
                </a>
              </div>
            </div>

            {/* Right: About Lou */}
            <div className="relative flex flex-col opacity-0 animate-fade-up stagger-2">
              <div className="bg-frost/50 rounded-3xl p-8 md:p-10 border border-teal-glow/30 flex-1 flex flex-col">
                <div className="flex flex-col h-full">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-teal/10 mb-6">
                    <Image
                      src="/Photography-Portfolio-Website-in-Grey-Black-Light-Experimental-Style_page-0001-2-1536x1502.jpg"
                      alt="Lou - Arteterapeuta y Tanatóloga"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl md:text-3xl text-ink mb-2">Hola, soy Lou</h2>
                    <p className="text-teal font-medium mb-4">
                      Diseñadora, artista, fotógrafa y tanatóloga
                    </p>
                    <p className="text-charcoal/70 leading-relaxed">
                      El arte y la tanatología fueron mi refugio y la puerta de regreso a mí.
                      Hoy acompaño a otras personas en sus propios procesos de duelo, cambio
                      o cierre, creando espacios seguros para habitar lo que sienten.
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-glow/30 rounded-full blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Services Section */}
      <section className="py-12 md:py-16" id="servicios">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Arteterapia Card */}
            <Link href="/arteterapia" className="group">
              <article className="bg-frost/50 rounded-2xl overflow-hidden card-lift h-full border border-teal-glow/30 flex">
                <div className="w-28 md:w-36 flex-shrink-0 relative overflow-hidden bg-mist/30">
                  <Image
                    src="/COLORME_logo-12-scaled.jpg"
                    alt="Arteterapia - Terapia a través del arte"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h2 className="font-display text-xl md:text-2xl text-ink mb-2 group-hover:text-teal transition-colors">
                    Arteterapia
                  </h2>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                    Acompañamiento emocional a través del arte para expresar y transformar emociones.
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal text-sm font-medium">
                    Saber más
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>

            {/* Tanatología Card */}
            <Link href="/tanatologia" className="group">
              <article className="bg-frost/50 rounded-2xl overflow-hidden card-lift h-full border border-teal-glow/30 flex">
                <div className="w-28 md:w-36 flex-shrink-0 relative overflow-hidden bg-mist/30">
                  <Image
                    src="/ojo-11-scaled.jpg"
                    alt="Tanatología - Acompañamiento en duelo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h2 className="font-display text-xl md:text-2xl text-ink mb-2 group-hover:text-teal transition-colors">
                    Tanatología
                  </h2>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                    Acompañamiento en procesos de pérdida, cambio y duelo con un enfoque humano.
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal text-sm font-medium">
                    Saber más
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Session Types */}
      <section className="py-12 md:py-16 bg-canvas-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-teal-glow/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-glow/50 transition-colors duration-300">
                <User className="text-teal" size={32} />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">Terapias individuales</h3>
              <p className="text-charcoal/70">
                Presenciales u online. Sesiones adaptadas a tu ritmo y proceso personal,
                con un acompañamiento cercano.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-teal-glow/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-glow/50 transition-colors duration-300">
                <Users className="text-teal" size={32} />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">Talleres grupales</h3>
              <p className="text-charcoal/70">
                Presenciales u online. Encuentros seguros para crear, compartir
                y sanar desde lo colectivo.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full bg-teal-glow/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-glow/50 transition-colors duration-300">
                <Building2 className="text-teal" size={32} />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">Empresas y colectivos</h3>
              <p className="text-charcoal/70">
                Presenciales u online. Espacios diseñados a medida según los
                objetivos del grupo.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-teal font-medium shadow-lg shadow-teal/10 border border-teal-glow/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal/20 hover:border-teal hover:-translate-y-0.5 hover:bg-teal hover:text-white"
            >
              <Calendar size={20} />
              Agenda tu sesión
            </a>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 md:py-16 relative">
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <span className="quote-mark absolute -top-8 left-0 md:left-10">"</span>
          <blockquote className="font-display text-2xl md:text-4xl text-ink leading-relaxed relative z-10">
            Sanar no es seguir las líneas.
            <br />
            <span className="text-teal">Es dibujar las tuyas propias.</span>
          </blockquote>
          <span className="quote-mark absolute -bottom-16 right-0 md:right-10 rotate-180">"</span>
          <p className="mt-10 text-charcoal/60 relative z-10 italic">— Lou</p>
        </div>
      </section>

      <SectionDivider />

      {/* Book Section */}
      <section className="py-12 md:py-16 bg-mist/30" id="indeleble">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10">
                <Image
                  src="/indeleble.png"
                  alt="Indeleble - Libro por Lou"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-ink/10"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-glow/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan/20 rounded-full blur-xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl md:text-5xl text-ink mb-2">Indeleble</h2>
              <p className="text-lg text-teal font-medium mb-6">
                Mi libro: Un testimonio real de transformación y resiliencia.
              </p>
              <div className="space-y-4 text-charcoal/80 leading-relaxed mb-8">
                <p>
                  Crees que eres invencible, hasta que la vida cambia en un instante.
                  Cuando el cáncer llega sin avisar, los sueños se detienen y la
                  incertidumbre lo envuelve todo. Pero también surge algo más: la
                  fuerza para enfrentar lo impensable y la capacidad de sanar, no
                  solo el cuerpo, sino el alma.
                </p>
                <p>
                  Más que un testimonio sobre la enfermedad, es un relato sobre la vida,
                  la resiliencia y la belleza que persiste en el caos. Una historia
                  honesta y esperanzadora que te hará replantearte lo que realmente importa.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.book.amazonEs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Versión español
                </a>
                <a
                  href={siteConfig.book.amazonEn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Versión inglés
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials */}
      <Testimonials />

      <SectionDivider />

      {/* Contact Section */}
      <section className="py-12 md:py-16" id="contacto">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-4">Contáctame</h2>
            <p className="text-charcoal/70">
              ¡La primera sesión no tiene costo! Cuéntame un poco sobre ti y lo que buscas.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <FAQ />
    </>
  )
}
