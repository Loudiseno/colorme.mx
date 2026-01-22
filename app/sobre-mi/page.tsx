'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function SobreMi() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <header className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl text-black mb-6">
                Hola, soy Lou
              </h1>
              <p className="text-lg text-black/70 leading-relaxed">
                Arteterapeuta, tanatóloga, diseñadora, fotógrafa y sobreviviente de cáncer.
                Mi camino personal me llevó a dedicar mi vida a acompañar a otros
                en sus propios procesos de transformación.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-[#B2F7EF] rounded-3xl p-6 border border-[#B2F7EF]">
                <Image
                  src="/Photography-Portfolio-Website-in-Grey-Black-Light-Experimental-Style_page-0001-2-1536x1502.jpg"
                  alt="Lou - Arteterapeuta y Tanatóloga"
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
          <h2 className="text-3xl text-black mb-6">Mi historia</h2>
          <div className="prose prose-lg max-w-none text-black/70">
            <p>
              Hace algunos años, mi vida cambió de un momento a otro cuando recibí un diagnóstico
              de cáncer. En ese instante, todo lo que creía saber sobre mí misma, sobre mi futuro
              y sobre la vida se detuvo. Me encontré frente a la incertidumbre más profunda que
              había experimentado.
            </p>
            <p>
              Durante el tratamiento, descubrí que el arte —que siempre había sido parte de mi
              vida como diseñadora y fotógrafa— se convertía en algo diferente: un refugio, un
              lenguaje para lo que no podía expresar con palabras, una forma de atravesar el
              miedo y reconectarme conmigo misma.
            </p>
            <p>
              Esa experiencia me transformó. Cuando terminé el tratamiento y comencé el camino
              de la recuperación, supe que quería dedicarme a acompañar a otras personas que
              estaban atravesando momentos difíciles. Quería ofrecerles ese espacio seguro que
              a mí me había sostenido.
            </p>
            <p>
              Hoy, como sobreviviente de cáncer, cada vez que me siento frente a alguien que
              está atravesando un proceso de pérdida, duelo o transformación, lo hago desde
              un lugar de profunda comprensión. Porque yo estuve ahí. Sé lo que se siente.
            </p>
          </div>
        </section>

        {/* Formation Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-black mb-6">Mi formación</h2>
          <div className="prose prose-lg max-w-none text-black/70">
            <h3 className="text-black">Tanatología</h3>
            <p>
              Me formé como tanatóloga en la <strong>Universidad Iberoamericana</strong>, una de
              las instituciones más reconocidas en México para esta especialización. La tanatología
              me permite acompañar a personas en procesos de pérdida, duelo y confrontación con
              la muerte desde un enfoque profesional y humano.
            </p>

            <h3 className="text-black">Arteterapia</h3>
            <p>
              Cuento con <strong>certificación en arteterapia para niños</strong>, lo que me permite
              adaptar mis técnicas para trabajar con los más pequeños de manera sensible y apropiada
              para su desarrollo.
            </p>
            <p>
              Mi formación en arteterapia incluye estudios en <strong>Bali</strong>, donde profundicé
              en la conexión entre el arte, la naturaleza y el proceso emocional en un entorno
              que honra las tradiciones ancestrales de bienestar.
            </p>

            <h3 className="text-black">Técnicas artísticas internacionales</h3>
            <p>
              He tenido el privilegio de estudiar y practicar diversas técnicas artísticas en
              diferentes partes del mundo, enriqueciendo mi práctica con perspectivas multiculturales:
            </p>
            <ul>
              <li><strong>India</strong> — Técnicas tradicionales y su conexión con la espiritualidad</li>
              <li><strong>Tailandia</strong> — Arte meditativo y prácticas contemplativas</li>
              <li><strong>Malasia</strong> — Fusión de tradiciones artísticas asiáticas</li>
              <li><strong>Bali</strong> — Tradiciones artísticas balinesas y su conexión con el bienestar</li>
            </ul>

            <h3 className="text-black">Prácticas espirituales y de bienestar</h3>
            <p>
              Complemento mi práctica terapéutica con técnicas de bienestar holístico:
            </p>
            <ul>
              <li><strong>Reiki</strong> — Certificada en India, esta práctica energética
              me permite ofrecer un acompañamiento más integral</li>
              <li><strong>Breathwork</strong> — Técnicas de respiración consciente para la regulación
              emocional y la liberación de tensiones</li>
            </ul>
          </div>
        </section>

        {/* Previous Career Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-black mb-6">Mi trayectoria profesional</h2>
          <div className="prose prose-lg max-w-none text-black/70">
            <p>
              Antes de dedicarme a la arteterapia y la tanatología, tuve una exitosa carrera en
              el mundo creativo y empresarial. Trabajé como <strong>diseñadora gráfica</strong>,
              <strong>fotógrafa profesional</strong> y <strong>ejecutiva de marca</strong>,
              desarrollando proyectos para diversas empresas y construyendo identidades visuales
              que conectaban con las personas.
            </p>
            <p>
              Esta experiencia me dio una comprensión profunda del poder de las imágenes y la
              expresión visual para comunicar lo que las palabras no pueden. Hoy, esa sensibilidad
              artística y profesional se integra en mi práctica terapéutica, permitiéndome guiar
              a otros en su propio proceso creativo de exploración.
            </p>
          </div>
        </section>

        {/* Book Section */}
        <section className="mb-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl text-black mb-4">Indeleble</h2>
              <p className="text-black/70 leading-relaxed mb-6">
                Escribí <em>Indeleble</em> para compartir mi historia de transformación y
                resiliencia. Es un testimonio honesto sobre atravesar el cáncer, sobre el
                miedo y la esperanza, sobre perder y reconstruirse. Si estás pasando por
                un momento difícil, espero que mi historia pueda acompañarte.
              </p>
              <a
                href={siteConfig.book.amazonEs}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-all inline-block"
              >
                Conocer el libro
              </a>
            </div>
            <div>
              <Image
                src="/indeleble.png"
                alt="Indeleble - Libro por Lou"
                width={400}
                height={300}
                className="w-full h-auto rounded-xl"
              />
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
