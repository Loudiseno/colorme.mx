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
      <section className="pt-28 pb-8 md:pt-36 md:pb-10 bg-white" id="sobremi">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left: Practice Introduction */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">
                Arteterapia y Tanatología
              </h1>
              <p className="text-lg md:text-xl text-black/60 tracking-widest mb-6">
                CREA.SIENTE.TRANSFORMA
              </p>
              <div className="space-y-4 text-black/70 leading-relaxed mb-8">
                <p>
                  ColorMe es un espacio de acompañamiento profesional para procesos de duelo, pérdida, reconexión y transformación personal a través de arteterapia y/o tanatología con enfoque somático.
                </p>
              </div>
              <div>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
                >
                  Agenda tu primera sesión gratuita
                </a>
              </div>
            </div>

            {/* Right: About Lou */}
            <div className="relative flex flex-col">
              <div className="bg-[#B2F7EF]/10 rounded-3xl p-8 md:p-10 border border-[#B2F7EF] flex-1 flex flex-col">
                <div className="flex flex-col h-full">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6">
                    <Image
                      src="/Lou foto.jpg"
                      alt="Lou - Arteterapeuta y Tanatóloga"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-[#B2F7EF] px-6 py-2 rounded-xl mb-4 relative">
                      <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                      <h2 className="text-2xl md:text-3xl text-black relative z-10">
                        Hola, soy Lou
                      </h2>
                    </div>
                    <p className="text-black font-bold mb-4">
                      Arteterapeuta, tanatóloga, diseñadora, artista y sobreviviente de cáncer.
                    </p>
                    <p className="text-black/70 leading-relaxed">
                      La creatividad siempre fue mi forma de conectar con el mundo. Mis propias pérdidas me llevaron a acompañar a otros en sus procesos de cambio y transformación, desde la escucha, el arte o la combinación de ambas. Mi formación integra técnicas de México, Bali, Tailandia, Malasia e India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl text-black leading-relaxed">
            "Sanar no es seguir las líneas. Es dibujar las tuyas propias."
          </blockquote>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-6 pb-10 md:pt-8 md:pb-12 bg-[#B2F7EF]/5" id="servicios">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Arteterapia */}
            <div className="bg-white rounded-2xl p-8 border border-[#B2F7EF] flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src="/COLORME_logo-12-scaled.jpg"
                  alt="Arteterapia"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl text-black mb-4">
                Arteterapia
              </h2>
              <p className="text-black/70 leading-relaxed mb-6">
                Acompañamiento emocional a través del arte para expresar, comprender y transformar emociones, sin buscar resultados estéticos ni requerir experiencia artística.
              </p>
              <Link
                href="/arteterapia"
                className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
              >
                Ver más
              </Link>
            </div>

            {/* Tanatología */}
            <div className="bg-white rounded-2xl p-8 border border-[#B2F7EF] flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src="/ojo-11-scaled.jpg"
                  alt="Tanatología"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl text-black mb-4">
                Tanatología
              </h2>
              <p className="text-black/70 leading-relaxed mb-6">
                Acompañamiento en procesos de duelo y pérdida en un espacio seguro para expresar emociones, transitar el dolor y resignificar lo vivido.
              </p>
              <Link
                href="/tanatologia"
                className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image
                  src="/columpio.png"
                  alt="Terapia individual"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">Terapia individual</h3>
              <p className="text-black/70 leading-relaxed">
                Sesiones personalizadas a tu ritmo y necesidades, con apoyo emocional cercano.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image
                  src="/corazon.png"
                  alt="Sesión grupal"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">Sesión grupal</h3>
              <p className="text-black/70 leading-relaxed">
                Encuentros seguros para crear, compartir y sanar desde lo colectivo, trabajando temas de interés común.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image
                  src="/adolecente hombre.png"
                  alt="Talleres para organizaciones"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-black mb-3 font-semibold">Talleres para organizaciones</h3>
              <p className="text-black/70 leading-relaxed">
                Programas de bienestar emocional diseñados a medida según los objetivos del grupo.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
            >
              Agenda tu sesión
            </a>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-10 md:py-12 bg-white" id="indeleble">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-[#B2F7EF]">
            <div className="order-2 lg:order-1 bg-white p-8 md:p-12 flex items-center justify-center">
              <div className="max-w-sm mx-auto">
                <Image
                  src="/indeleble.png"
                  alt="Indeleble - Libro por Lou"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-[#B2F7EF]/10 p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-4xl md:text-5xl text-black mb-2"><strong>Indeleble</strong></h2>
                <p className="text-base text-black font-bold mb-6">
                  Una historia real de resiliencia y superación ante el cáncer
                </p>
                <div className="space-y-4 leading-relaxed mb-8">
                  <p className="text-black/70">
                    Crees que eres invencible, hasta que un diagnóstico lo cambia todo. Cuando el cáncer llega sin avisar, los sueños se detienen y la incertidumbre se apodera de ti.
                  </p>
                  <p className="text-black/70">
                    Pero en medio del miedo, también surge algo más: la fuerza para afrontar lo impensable y la capacidad de sanar —no solo el cuerpo, sino el alma.
                  </p>
                  <p className="text-black/70">
                    Una historia honesta sobre la vida, la transformación personal y la belleza que persiste en el caos.
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

          {/* Book Testimonials - Right below the book section */}
          <div className="max-w-7xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Image
                src="/testimonio Sergio Morales.png"
                alt="Reseña de Sergio Morales - 5 estrellas"
                width={600}
                height={150}
                className="w-full h-auto rounded-lg border border-black/10"
              />
              <Image
                src="/testimonio dan.png"
                alt="Reseña de Dan - 5 estrellas"
                width={600}
                height={150}
                className="w-full h-auto rounded-lg border border-black/10"
              />
              <Image
                src="/testimonio monica aristi.png"
                alt="Reseña de Monica Aristi - 5 estrellas"
                width={600}
                height={150}
                className="w-full h-auto rounded-lg border border-black/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Blog Section */}
      <section className="py-10 md:py-12 bg-white" id="blog">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-black mb-4">Entre líneas</h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Reflexiones, información y herramientas sobre arteterapia, tanatología y el universo de las emociones. Un lugar para explorar la vida, la pérdida, el autodescubrimiento y la creatividad.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/blog/que-es-arteterapia" className="group">
              <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <Image
                    src="/arteterapia.jpeg"
                    alt="¿Qué es la arteterapia?"
                    fill
                    className="object-cover grayscale mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
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
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <Image
                    src="/cancer y arteterapia.jpeg"
                    alt="Arteterapia para pacientes con cáncer"
                    fill
                    className="object-cover grayscale mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Arteterapia y Tanatología</span>
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
            <Link href="/blog/duelo-perdida" className="group">
              <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <Image
                    src="/el duelo.jpeg"
                    alt="¿Qué es el duelo?"
                    fill
                    className="object-cover grayscale mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Tanatología</span>
                  <h3 className="text-xl text-black mt-2 mb-3">
                    ¿Qué es el duelo?
                  </h3>
                  <p className="text-black/70 text-sm leading-relaxed mb-4">
                    Guía para entender y atravesar el proceso de pérdida.
                  </p>
                  <span className="inline-flex items-center gap-2 text-black text-sm font-medium">
                    Leer más
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-12" id="contacto">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-black mb-4">Contacto</h2>
            <p className="text-black/70">
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
