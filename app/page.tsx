import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { ArrowRight, Calendar, Instagram, Facebook, Youtube } from 'lucide-react'
import { siteConfig, generateBookSchema } from '@/lib/seo'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import BlogSection from '@/components/BlogSection'

// Iconos personalizados (no disponibles en lucide)
const TikTokIcon = ({ size = 20, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const WhatsAppIcon = ({ size = 20, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
)

const socialLinks = [
  { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
  { name: 'TikTok', href: 'https://www.tiktok.com/@colorme_lab', icon: TikTokIcon },
  { name: 'YouTube', href: 'https://www.youtube.com/@ColorMe-lab', icon: Youtube },
  { name: 'WhatsApp', href: siteConfig.whatsapp, icon: WhatsAppIcon },
]

export const metadata: Metadata = {
  title: 'Arteterapia y Tanatología | Acompañamiento Emocional | ColorMe',
  description: 'Acompañamiento emocional con arteterapia y tanatología para sanar duelos, transitar cambios y gestionar emociones. Sesión de primera gratis.',
  alternates: {
    canonical: '/',
  },
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
      <section className="pt-28 pb-6 md:pt-32 md:pb-8 bg-white" id="sobremi">
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
                      src="/lou-arteterapeuta-tanatologa-mexico.webp"
                      alt="Lou - Arteterapeuta y Tanatóloga certificada en México"
                      width={600}
                      height={450}
                      priority
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
                      La creatividad siempre fue mi forma de conectar con el mundo. Mis propias pérdidas me llevaron a acompañar a otros en sus procesos de cambio y transformación, desde la escucha, el arte o la combinación de ambas. Mi formación integra técnicas de México, Bali, Tailandia, Malasia, India y Reino Unido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="pt-2 pb-1 md:pt-3 md:pb-2 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl text-black leading-relaxed">
            "Sanar no es seguir las líneas. Es dibujar las tuyas propias."
          </blockquote>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-2 pb-10 md:pt-3 md:pb-12 bg-[#B2F7EF]/5" id="servicios">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Arteterapia */}
            <div className="bg-white rounded-2xl p-8 border border-[#B2F7EF] flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src="/arteterapia-sesion-creativa.webp"
                  alt="Sesión de arteterapia - expresión creativa"
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
                href="/arteterapia-mexico"
                className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
              >
                Ver más
              </Link>
            </div>

            {/* Tanatología */}
            <div className="bg-white rounded-2xl p-8 border border-[#B2F7EF] flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src="/tanatologia-acompanamiento-duelo.webp"
                  alt="Acompañamiento tanatológico en procesos de duelo"
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
                href="/tanatologia-acompanamiento-duelo"
                className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-black mb-10 text-center">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image
                  src="/columpio.webp"
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
                  src="/corazon.webp"
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
                  src="/adolecente-hombre.webp"
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

      {/* Productos */}
      <section className="py-8 md:py-10 bg-white" id="indeleble">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-black mb-10 text-center">Productos</h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Indeleble */}
            <div className="bg-[#B2F7EF]/10 rounded-3xl border border-[#B2F7EF] p-8 flex flex-col">
              <div className="max-w-xs mx-auto mb-6">
                <Image
                  src="/libro-indeleble-cancer-resiliencia.webp"
                  alt="Indeleble - Libro sobre resiliencia y superación del cáncer por Lou"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-3xl md:text-4xl text-black mb-2 text-center"><strong>Indeleble</strong></h3>
              <p className="text-base text-black font-bold mb-4 text-center leading-snug">
                Una historia real de resiliencia y superación ante el cáncer, con ilustraciones en acuarela
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Un testimonio sobre la vida y la transformación personal después de un diagnóstico
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Disponible en Kindle y PDF descargable, en español y en inglés
                </li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="/tienda#indeleble"
                  className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                >
                  Ver opciones de compra
                </Link>
              </div>
            </div>

            {/* El arte de habitar tu duelo */}
            <div className="bg-[#B2F7EF]/10 rounded-3xl border border-[#B2F7EF] p-8 flex flex-col">
              <div className="max-w-[220px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/el-arte-de-habitar-tu-duelo-portada.webp"
                  alt="El arte de habitar tu duelo - Diario terapéutico de duelo por Lou Pérez"
                  width={900}
                  height={1165}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-3xl md:text-4xl text-black mb-2 text-center"><strong>El arte de habitar tu duelo</strong></h3>
              <p className="text-base text-black font-bold mb-1 text-center leading-snug">
                El duelo no se supera. Se habita.
              </p>
              <p className="text-sm text-black/60 mb-4 text-center leading-snug">
                Diario guiado de duelo y transformación (arteterapia y tanatología)
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Guía en cuatro momentos: reconocer lo que perdiste, dar espacio a tus emociones, reorganizar tu vida e integrar lo vivido como parte de tu historia.
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  Más de 50 ejercicios de arte, escritura y reflexión en 189 páginas
                </li>
                <li className="flex items-start gap-2 text-black/70 text-sm leading-snug">
                  <span className="text-[#B2F7EF] mt-0.5 font-bold">✓</span>
                  PDF de descarga inmediata, para imprimir o usar en tablet
                </li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="/tienda#diario"
                  className="bg-[#B2F7EF] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>

          {/* Book Testimonials - Right below the book section */}
          <div className="max-w-7xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Image
                src="/testimonio-sergio-morales.webp"
                alt="Reseña de Sergio Morales - 5 estrellas"
                width={600}
                height={150}
                className="w-full h-auto rounded-lg border border-black/10"
              />
              <Image
                src="/testimonio-dan.webp"
                alt="Reseña de Dan - 5 estrellas"
                width={600}
                height={150}
                className="w-full h-auto rounded-lg border border-black/10"
              />
              <Image
                src="/testimonio-monica-aristi.webp"
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
      <BlogSection />

      {/* Contact Section */}
      <section className="py-8 md:py-10" id="contacto">
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

      {/* Redes sociales */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl text-black mb-2">Sígueme en redes sociales</h2>
          <p className="text-black/60 mb-6">
            Acompañamiento, arte y reflexiones para tu día a día.
          </p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-11 h-11 rounded-full border border-black/15 text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                <social.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-black mb-4">
            ¿Tienes dudas?
          </h2>
          <p className="text-black/70 mb-8">
            Consulta las respuestas a las preguntas más comunes sobre las sesiones.
          </p>
          <Link
            href="/preguntas-frecuentes"
            className="bg-[#B2F7EF] text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#B2F7EF]/80 transition-all inline-flex items-center gap-2"
          >
            Preguntas frecuentes
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
