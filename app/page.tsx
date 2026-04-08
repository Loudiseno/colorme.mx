import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
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
            <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
              <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
              <h2 className="text-4xl md:text-5xl text-black relative z-10">Entre líneas</h2>
            </div>
            <p className="text-black/70 max-w-2xl mx-auto">
              Reflexiones, información y herramientas sobre arteterapia, tanatología y el universo de las emociones. Un lugar para explorar la vida, la pérdida, el autodescubrimiento y la creatividad a través del arte, los colores y rituales del mundo.
            </p>
          </div>

          {/* Section: Tanatología */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-block bg-[#B2F7EF] px-6 py-2 rounded-xl relative">
                <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                <h3 className="text-2xl text-black font-semibold relative z-10">Tanatología</h3>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all" aria-label="Anterior">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all" aria-label="Siguiente">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              <Link href="/blog/duelo-perdida" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/el-duelo.webp" alt="¿Qué es el duelo?" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">¿Qué es el duelo?</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Guía para entender y atravesar el proceso de pérdida.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/cuanto-dura-el-duelo" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/cuanto-dura-el-duelo.webp" alt="¿Cuánto dura el duelo?" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">¿Cuánto dura el duelo?</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">No hay tiempos fijos, cada proceso es único.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/duelo-complicado" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/duelo-complicado.webp" alt="Duelo complicado" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Duelo complicado</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cuando el duelo se estanca y necesita atención especial.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/duelo-anticipado" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/duelo-anticipado.webp" alt="Duelo anticipado" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Duelo anticipado</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cuando el duelo comienza antes de la pérdida.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/duelo-perinatal" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/duelo-perinatal.webp" alt="Duelo perinatal" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Duelo perinatal</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Acompañamiento en la pérdida gestacional.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/duelo-por-mascota" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/duelo-por-mascota.webp" alt="Duelo por mascota" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Duelo por mascota</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">La pérdida de un compañero animal es un duelo válido.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/muerte-mama" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/duelo-muerte-mama.webp" alt="Muerte de mamá" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">La muerte de mamá</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cuando perdemos a quien nos dio la vida.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/sindrome-cuidador" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/sindrome-cuidador.webp" alt="Síndrome del cuidador" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Síndrome del cuidador</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">El agotamiento de quienes cuidan a otros.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/que-es-un-tanatologo" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/que-es-un-tanatologo.webp" alt="¿Qué es un tanatólogo?" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">¿Qué es un tanatólogo?</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Todo sobre el acompañamiento tanatológico.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/aniversario-de-muerte" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/aniversario muerte.jpeg" alt="Aniversario de muerte" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Aniversario de muerte</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cómo vivir y honrar la fecha que marca una ausencia.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/cumpleanos-persona-fallecida" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/cumpleanos persona fallecida.jpeg" alt="Cumpleaños de persona fallecida" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">El cumpleaños de quien ya no está</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cómo atravesar y honrar el cumpleaños de una persona fallecida.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
            </div>
          </div>

          {/* Section: Arteterapia */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-block bg-[#B2F7EF] px-6 py-2 rounded-xl relative">
                <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                <h3 className="text-2xl text-black font-semibold relative z-10">Arteterapia</h3>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all" aria-label="Anterior">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all" aria-label="Siguiente">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              <Link href="/blog/que-es-la-arteterapia-beneficios" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/arteterapia.webp" alt="¿Qué es la arteterapia?" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">¿Qué es la arteterapia?</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Descubre cómo el arte ayuda a explorar y procesar emociones.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/arteterapia-cancer" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/cancer-y-arteterapia.webp" alt="Arteterapia para pacientes con cáncer" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Arteterapia para pacientes con cáncer</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">El arte como acompañamiento durante el tratamiento oncológico.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/ejercicios-arteterapia" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/ejercicios-arteterapia.webp" alt="Ejercicios de arteterapia" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Ejercicios de arteterapia</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Técnicas creativas que puedes hacer en casa.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/beneficios-arte" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/beneficios-del-arte.webp" alt="Beneficios del arte" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Beneficios del arte</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cómo el arte mejora tu bienestar emocional.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/mandalas-terapeuticos" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/mandalas-terapeuticos.webp" alt="Mandalas terapéuticos" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Mandalas terapéuticos</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">El poder sanador de colorear mandalas.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/arte-trauma" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/arte-y-trauma.webp" alt="Arte y trauma" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Arte y trauma</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cómo el arte ayuda a procesar experiencias difíciles.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/arteterapia-para-ninos" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/arteterapia-ninos.webp" alt="Arteterapia para niños" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Arteterapia para niños</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Guía por edades para acompañar a los más pequeños.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/arteterapia-para-la-ansiedad" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/arteterapia-ansiedad.webp" alt="Arteterapia para la ansiedad" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Arteterapia para la ansiedad</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cómo el arte te ayuda a manejar la ansiedad.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
            </div>
          </div>

          {/* Section: Emociones */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-block bg-[#B2F7EF] px-6 py-2 rounded-xl relative">
                <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                <h3 className="text-2xl text-black font-semibold relative z-10">Emociones</h3>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all" aria-label="Anterior">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all" aria-label="Siguiente">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              <Link href="/blog/tristeza-como-maestra" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/tristeza.webp" alt="La tristeza como maestra" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">La tristeza como maestra</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Qué nos enseña la tristeza cuando la escuchamos.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/verguenza-duelo" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/verguenza-duelo.webp" alt="La vergüenza en el duelo" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">La vergüenza que silencia</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cómo la vergüenza afecta nuestro proceso de duelo.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/por-que-no-puedo-llorar" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/porque-no-puedo-llorar.webp" alt="Por qué no puedo llorar" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">¿Por qué no puedo llorar?</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cuando las lágrimas no llegan y el dolor sigue ahí.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/duelo-y-culpa" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/duelo-y-culpa.jpeg" alt="Duelo y culpa" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Duelo y culpa</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cómo la culpa complica el duelo y cómo liberarte de ella.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/duelo-sucio-alivio" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/duelo-sucio-alivio.webp" alt="Duelo sucio y alivio" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">El duelo sucio: sentir alivio</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cuando sentimos alivio después de una pérdida.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
              <Link href="/blog/perder-la-fe" className="group flex-shrink-0 w-80">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                    <Image src="/perder-la-fe.webp" alt="Perder la fe" fill className="object-cover grayscale mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl text-black mt-2 mb-3">Perder la fe</h4>
                    <p className="text-black/70 text-sm leading-relaxed mb-4">Cuando el duelo sacude nuestras creencias.</p>
                    <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={16} /></span>
                  </div>
                </article>
              </Link>
            </div>
          </div>

          {/* Section: Rituales y colores del mundo */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-block bg-[#B2F7EF] px-6 py-2 rounded-xl relative">
                <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                <h3 className="text-2xl text-black font-semibold relative z-10">Rituales y colores del mundo</h3>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all" aria-label="Anterior">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all" aria-label="Siguiente">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex-shrink-0 w-80 flex items-center justify-center h-64 bg-[#B2F7EF]/10 rounded-2xl border border-dashed border-[#B2F7EF]">
                <p className="text-black/50 text-center px-6">Próximamente: artículos sobre rituales y colores del mundo</p>
              </div>
            </div>
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
