import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { ArrowRight, Users, User, Building2, Calendar } from 'lucide-react'
import { siteConfig, generateBookSchema } from '@/lib/seo'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'

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

      {/* Hero Section */}
      <section className="py-24 md:py-32 flex items-center justify-center relative bg-watercolor pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-ink mb-6">
            <span className="block">Crea.</span>
            <span className="block text-terracotta">Siente.</span>
            <span className="block">Transforma.</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-10">
            El lugar en donde puedes crear tu propia historia a través de la arteterapia 
            y la tanatología. Acompañamiento para sanar el duelo y transformar tus emociones.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agenda tu primera sesión ¡Gratis!
          </a>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-28 bg-sand/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="font-display text-2xl md:text-4xl text-ink leading-relaxed">
            «Sanar no es seguir las líneas.
            <br />
            <span className="text-terracotta">Es dibujar las tuyas propias.</span>»
          </blockquote>
          <p className="mt-8 text-charcoal/70">
            No hay reglas ni caminos fijos. No se trata de vivir sin sentir, 
            sino de dar espacio a las emociones, permitirnos habitarlas y transformarlas.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="servicios">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Arteterapia Card */}
            <Link href="/arteterapia" className="group">
              <article className="bg-blush/30 rounded-3xl overflow-hidden card-lift h-full flex flex-col">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/COLORME_logo-12-scaled.jpg"
                    alt="Arteterapia - Color Me"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-10 flex-1 flex flex-col">
                  <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 group-hover:text-terracotta transition-colors">
                    Arteterapia
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed mb-6 flex-1">
                    Acompañamiento emocional a través del arte para expresar, comprender
                    y transformar emociones, sin buscar resultados estéticos ni requerir
                    experiencia artística.
                  </p>
                  <span className="inline-flex items-center gap-2 text-terracotta font-medium">
                    Quiero saber más
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>

            {/* Tanatología Card */}
            <Link href="/tanatologia" className="group">
              <article className="bg-mist/30 rounded-3xl overflow-hidden card-lift h-full flex flex-col">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/ojo-11-scaled.jpg"
                    alt="Tanatología - Color Me"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-10 flex-1 flex flex-col">
                  <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 group-hover:text-terracotta transition-colors">
                    Tanatología
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed mb-6 flex-1">
                    Acompaña procesos de pérdida, cambio y duelo, ayudando a resignificar
                    lo vivido para seguir con sentido, desde un enfoque humano y compasivo.
                  </p>
                  <span className="inline-flex items-center gap-2 text-terracotta font-medium">
                    Quiero saber más
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="section bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blush/50 flex items-center justify-center mx-auto mb-4">
                <User className="text-terracotta" size={28} />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">Terapias individuales</h3>
              <p className="text-charcoal/70 text-sm">
                Presenciales u online. Sesiones adaptadas a tu ritmo y proceso personal, 
                con un acompañamiento cercano.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-mist/50 flex items-center justify-center mx-auto mb-4">
                <Users className="text-terracotta" size={28} />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">Talleres grupales</h3>
              <p className="text-charcoal/70 text-sm">
                Presenciales u online. Encuentros seguros para crear, compartir 
                y sanar desde lo colectivo.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage/50 flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-terracotta" size={28} />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">Empresas y colectivos</h3>
              <p className="text-charcoal/70 text-sm">
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
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Calendar size={18} />
              Agenda tu sesión
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="sobremi">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-ink mb-6">Sobre mí</h2>
              <p className="text-lg text-terracotta font-medium mb-4">
                Diseñadora, artista, fotógrafa y tanatóloga.
              </p>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  No siempre podemos elegir lo que nos pasa, pero sí cómo darle sentido. 
                  Mi historia me enseñó que sentir también es sanar y que en medio del 
                  dolor pueden nacer caminos nuevos.
                </p>
                <p>
                  El arte y la tanatología fueron el refugio y la puerta de regreso a mí. 
                  Hoy acompaño a otras personas en sus propios procesos de duelo, cambio 
                  o cierre, creando espacios seguros para habitar lo que sienten y 
                  transformar lo vivido con respeto y creatividad.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl aspect-square overflow-hidden">
              <Image
                src="/Photography-Portfolio-Website-in-Grey-Black-Light-Experimental-Style_page-0001-2-1536x1502.jpg"
                alt="Lourdes - Color Me"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="section bg-sand/30" id="indeleble">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl aspect-[3/4] overflow-hidden">
              <Image
                src="/indeleble.png"
                alt="Indeleble - Libro de Lourdes"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl md:text-5xl text-ink mb-2">Indeleble</h2>
              <p className="text-lg text-terracotta font-medium mb-6">
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

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <section className="section" id="contacto">
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

      {/* FAQ */}
      <FAQ />
    </>
  )
}
