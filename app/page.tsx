import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
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

      {/* Hero: Intro + About Lou */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-white" id="sobremi">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left: Practice Introduction */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-6">
                Explora tus emociones
                <span className="text-black"> a través del arte</span>
              </h1>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Acompañamiento en duelo, pérdida y cambio a través de arteterapia y tanatología.
                </p>
                <p>
                  Un espacio profesional para explorar emociones, procesar experiencias y reconectar contigo.
                </p>
              </div>
              <div>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block mt-8"
                >
                  Agendar sesión gratuita
                </a>
              </div>
            </div>

            {/* Right: About Lou */}
            <div className="relative flex flex-col">
              <div className="bg-[#B2F7EF]/10 rounded-3xl p-8 md:p-10 border border-[#B2F7EF] flex-1 flex flex-col">
                <div className="flex flex-col h-full">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6">
                    <Image
                      src="/Photography-Portfolio-Website-in-Grey-Black-Light-Experimental-Style_page-0001-2-1536x1502.jpg"
                      alt="Lou - Arteterapeuta y Tanatóloga"
                      width={600}
                      height={450}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl text-black mb-2">Hola, soy Lou</h2>
                    <p className="text-black font-medium mb-4">
                      Diseñadora, artista, fotógrafa y tanatóloga
                    </p>
                    <p className="text-black/70 leading-relaxed">
                      El arte y la tanatología fueron mi refugio. Hoy acompaño a personas en procesos de duelo, cambio o cierre, creando espacios seguros para explorar emociones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5" id="servicios">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Arteterapia Card */}
            <Link href="/arteterapia" className="group">
              <article className="bg-white rounded-2xl overflow-hidden h-full border border-[#B2F7EF] hover:border-black transition-all">
                <div className="aspect-[4/3] relative overflow-hidden bg-white">
                  <Image
                    src="/COLORME_logo-12-scaled.jpg"
                    alt="Arteterapia"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-2xl md:text-3xl text-black mb-2">
                    Arteterapia
                  </h2>
                  <p className="text-black/70 leading-relaxed mb-3">
                    Explora y procesa emociones a través del arte.
                  </p>
                  <span className="inline-flex items-center gap-2 text-black font-medium text-sm">
                    Ver más
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>

            {/* Tanatología Card */}
            <Link href="/tanatologia" className="group">
              <article className="bg-white rounded-2xl overflow-hidden h-full border border-[#B2F7EF] hover:border-black transition-all">
                <div className="aspect-[4/3] relative overflow-hidden bg-white">
                  <Image
                    src="/ojo-11-scaled.jpg"
                    alt="Tanatología"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-2xl md:text-3xl text-black mb-2">
                    Tanatología
                  </h2>
                  <p className="text-black/70 leading-relaxed mb-3">
                    Acompañamiento en procesos de pérdida y duelo.
                  </p>
                  <span className="inline-flex items-center gap-2 text-black font-medium text-sm">
                    Ver más
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Worksheet CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-[#B2F7EF] rounded-full">
            <span className="text-black font-medium text-xs uppercase tracking-wider">Nuevo</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-black mb-6">
            Ejercicios personalizados de arteterapia
          </h2>
          <p className="text-base text-black/70 max-w-2xl mx-auto mb-8">
            Recibe un ejercicio adaptado a tu emoción actual. Gratis y descargable.
          </p>
          <div className="flex justify-center">
            <Link href="/hoja-de-trabajo" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black/90 transition-all">
              Crear ejercicio
            </Link>
          </div>

          {/* Preview features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#B2F7EF]/10 rounded-xl p-5 border border-[#B2F7EF]">
              <div className="w-10 h-10 bg-[#B2F7EF] rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="text-base font-semibold text-black mb-2">Personalizado</h3>
              <p className="text-sm text-black/70">
                Ejercicio adaptado a tu emoción y momento
              </p>
            </div>
            <div className="bg-[#B2F7EF]/10 rounded-xl p-5 border border-[#B2F7EF]">
              <div className="w-10 h-10 bg-[#B2F7EF] rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="text-base font-semibold text-black mb-2">Práctico</h3>
              <p className="text-sm text-black/70">
                Instrucciones paso a paso y materiales accesibles
              </p>
            </div>
            <div className="bg-[#B2F7EF]/10 rounded-xl p-5 border border-[#B2F7EF]">
              <div className="w-10 h-10 bg-[#B2F7EF] rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl">📄</span>
              </div>
              <h3 className="text-base font-semibold text-black mb-2">Profesional</h3>
              <p className="text-sm text-black/70">
                PDF profesional listo para descargar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 relative">
                <Image
                  src="/columpio.png"
                  alt="Terapias individuales"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-black mb-3">Terapias individuales</h3>
              <p className="text-black/70 text-base">
                Presenciales u online adaptadas a tu proceso.
              </p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 relative">
                <Image
                  src="/corazon.png"
                  alt="Talleres grupales"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-black mb-3">Talleres grupales</h3>
              <p className="text-black/70 text-base">
                Encuentros seguros para crear y explorar en comunidad.
              </p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 relative">
                <Image
                  src="/adolecente hombre.png"
                  alt="Empresas y colectivos"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-black mb-3">Empresas y colectivos</h3>
              <p className="text-black/70 text-base">
                Espacios diseñados a medida para grupos.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-flex items-center gap-2"
            >
              <Calendar size={16} />
              Agendar sesión
            </a>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl text-black leading-relaxed">
            "Habitar lo que sientes no es seguir las líneas, es dibujar las tuyas propias."
          </blockquote>
          <p className="mt-6 text-gray-500 text-sm italic">— Lou</p>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/5" id="indeleble">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div>
                <Image
                  src="/indeleble.png"
                  alt="Indeleble - Libro por Lou"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl text-black mb-2">Indeleble</h2>
              <p className="text-base text-black font-medium mb-6">
                Testimonio sobre transformación y resiliencia.
              </p>
              <div className="space-y-4 text-black/70 leading-relaxed mb-8">
                <p>
                  Un relato honesto sobre enfrentar el cáncer, procesar la pérdida y encontrar la fuerza para continuar.
                </p>
                <p>
                  Una historia sobre la vida, la resiliencia y lo que realmente importa.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.book.amazonEs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                >
                  Versión español
                </a>
                <a
                  href={siteConfig.book.amazonEn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all"
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

      {/* Blog Section */}
      <section className="py-12 md:py-16 bg-white" id="blog">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-black mb-4">Blog</h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Herramientas y reflexiones sobre arteterapia, duelo y emociones.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/blog/que-es-arteterapia" className="group">
              <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-[#B2F7EF]/20 flex items-center justify-center">
                  <span className="text-[#B2F7EF] text-6xl font-bold">01</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Arteterapia</span>
                  <h3 className="text-xl text-black mt-2 mb-3">
                    ¿Qué es la arteterapia?
                  </h3>
                  <p className="text-black/70 text-sm leading-relaxed mb-4">
                    Descubre cómo el arte ayuda a explorar y procesar emociones.
                  </p>
                  <span className="inline-flex items-center gap-2 text-black text-sm font-medium">
                    Leer más
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>

            {/* Article 2 */}
            <Link href="/blog/arteterapia-cancer" className="group">
              <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-[#B2F7EF]/20 flex items-center justify-center">
                  <span className="text-[#B2F7EF] text-6xl font-bold">02</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Arteterapia</span>
                  <h3 className="text-xl text-black mt-2 mb-3">
                    Arteterapia para pacientes con cáncer
                  </h3>
                  <p className="text-black/70 text-sm leading-relaxed mb-4">
                    El arte como acompañamiento durante el tratamiento oncológico.
                  </p>
                  <span className="inline-flex items-center gap-2 text-black text-sm font-medium">
                    Leer más
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>

            {/* Article 3 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF]/50">
              <div className="aspect-[16/10] relative overflow-hidden bg-[#B2F7EF]/10 flex items-center justify-center">
                <span className="text-[#B2F7EF]/50 text-6xl font-bold">03</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Próximamente</span>
                <h3 className="text-xl text-black mt-2 mb-3">
                  Rituales para el día a día
                </h3>
                <p className="text-black/70 text-sm leading-relaxed mb-4">
                  Prácticas sencillas para cultivar la calma.
                </p>
                <span className="inline-flex items-center gap-2 text-gray-400 text-sm font-medium">
                  Próximamente
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

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

      {/* FAQ */}
      <FAQ />
    </>
  )
}
