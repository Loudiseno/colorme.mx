'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function SobreMi() {
  return (
    <article className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <header className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
                <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-black relative z-10">
                  Hola, soy Lou
                </h1>
              </div>
              <p className="text-lg text-black leading-relaxed mb-4">
                <strong>Arteterapeuta, tanatóloga, diseñadora, artista y sobreviviente de cáncer.</strong>
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                La creatividad siempre fue mi forma de conectar con el mundo. Mis propias pérdidas me llevaron a acompañar a otros en sus procesos de cambio y transformación, desde la escucha, el arte o la combinación de ambas. Mi formación integra técnicas de México, Bali, Tailandia, Malasia e India.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-3xl p-6 border border-[#B2F7EF]">
                <Image
                  src="/Lou_hobbies.jpg"
                  alt="Lou - Arteterapeuta, Tanatóloga, Artista, Fotógrafa, Diseñadora, Viajera y más"
                  width={500}
                  height={488}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-black mb-6 uppercase tracking-wide">Mi historia</h2>
          <div className="prose prose-lg max-w-none text-black/70">
            <p>
              Hace algunos años, mi vida cambió cuando recibí un diagnóstico de cáncer. Me encontré frente a la incertidumbre más profunda que había experimentado.
            </p>
            <p>
              Durante el tratamiento, descubrí que el arte —que siempre había sido parte de mi vida como diseñadora y artista— se convertía en un refugio y lenguaje para lo que no podía expresar con palabras, una forma de atravesar mis emociones y reconectarme conmigo misma.
            </p>
            <p>
              Al comenzar el camino de la recuperación, supe que quería dedicarme a acompañar a otras personas en sus diferentes procesos mediante la escucha y el arte. Soy autora de Indeleble (actualmente disponible en Amazon en inglés y español), una obra que narra mi proceso oncológico y la transformación personal que surgió a partir de él.
            </p>
          </div>
        </section>

        {/* Formation Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-black mb-6 uppercase tracking-wide">Mi formación</h2>
          <div className="prose prose-lg max-w-none text-black/70">
            <h3 className="text-black">Tanatología</h3>
            <p>
              Me certifiqué como tanatóloga en la Universidad Iberoamericana, una de las instituciones más reconocidas en México. La tanatología me permite acompañar a personas en procesos de pérdida, duelo y confrontación con la muerte desde un enfoque profesional y humano.
            </p>

            <h3 className="text-black">Arteterapia</h3>
            <p>
              Cuento con diferentes cursos y enfoques internacionales: realicé un curso de Terapeuta de Arteterapia, tengo una especialización en Artes Expresivas para el Acompañamiento a Infancias, así como estudios en Bali donde profundicé en prácticas como las Criaturas Míticas de Steiner, el wet-on-wet, la línea expresiva y el retrato familiar abstracto, en un entorno que honra las tradiciones ancestrales de bienestar.
            </p>

            <h3 className="text-black">Reiki</h3>
            <p>
              Me certifiqué en India, en Rishikesh, la capital mundial del yoga y la meditación. Esta práctica de sanación energética me permite ofrecer un acompañamiento más integral.
            </p>

            <h3 className="text-black">Diseño gráfico, pintura y fotografía</h3>
            <p>
              Soy licenciada en Diseño Gráfico por la Universidad Iberoamericana. Posteriormente realicé un diplomado en Pintura Fotográfica en el CAC (Escuela de Arte Contemporáneo). Cuento con exposiciones individuales y colectivas de arte, fotografía y fotografía intervenida.
            </p>

            <h3 className="text-black">Otros estudios y prácticas</h3>
            <p>
              He tenido el privilegio de estudiar y practicar diversas técnicas en diferentes partes del mundo, enriqueciendo mi práctica con perspectivas multiculturales:
            </p>
            <ul>
              <li><strong>India</strong> — Técnicas tradicionales y su conexión con la espiritualidad. Creación de mandalas.</li>
              <li><strong>Tailandia</strong> — Arte meditativo y prácticas contemplativas.</li>
              <li><strong>Malasia</strong> — Fusión de tradiciones artísticas asiáticas como el batik.</li>
              <li><strong>Bali</strong> — Tradiciones artísticas balinesas y su conexión con las emociones, así como breathwork (técnicas de respiración consciente para la regulación emocional y liberación de tensiones).</li>
              <li><strong>México</strong> — Cuidados paliativos (Universidad Anáhuac) y Cómo afrontar el desgaste emocional desde el uso de la compasión (Fundación Elisabeth Kübler-Ross).</li>
            </ul>
          </div>
        </section>

        {/* Previous Career Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-black mb-6 uppercase tracking-wide">Trayectoria profesional</h2>
          <div className="prose prose-lg max-w-none text-black/70">
            <p>
              Antes de dedicarme a la arteterapia y la tanatología, tuve una exitosa carrera en el mundo creativo y empresarial. Trabajé como diseñadora gráfica, fotógrafa profesional, directora de marca y especialista en branding y comunicación.
            </p>
            <p>
              He colaborado con corporativos como Grupo Carso, agencias de medios y startups como Rappi y E1, así como con marcas y agencias reconocidas internacionalmente: Saks Fifth Avenue, WPP, Havas, IPG, Publicis, Kellogg's, Jose Cuervo, Unilever, Nestlé, Heineken, PepsiCo, Adidas, Oscar de la Renta, Lanvin, Cushnie et Ochs y Fashion's Night Out, entre otros.
            </p>
          </div>
        </section>

        {/* Book Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-[#B2F7EF]">
            <div className="bg-[#B2F7EF]/10 p-8 md:p-10 flex items-center">
              <div>
                <h2 className="text-3xl text-black mb-2"><strong>Indeleble</strong></h2>
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
            <div className="bg-white p-8 md:p-10 flex items-center justify-center">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center p-8 bg-white rounded-2xl border border-[#B2F7EF]">
          <h2 className="text-3xl text-black mb-4">
            ¿Te gustaría que te acompañe?
          </h2>
          <p className="text-black/70 mb-8 max-w-xl mx-auto">
            Si estás atravesando un proceso de duelo, pérdida o transformación, estoy aquí
            para acompañarte. La primera sesión es gratuita.
          </p>
          <Link
            href="/#contacto"
            className="bg-[#B2F7EF] text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B2F7EF]/80 transition-all inline-block"
          >
            Agenda tu primera sesión gratis
          </Link>
        </section>
      </div>
    </article>
  )
}
