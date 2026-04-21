'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function MehndiIndiaPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">RITUALES Y COLORES DEL MUNDO</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Mehndi, el arte sagrado de la India donde la piel se convierte en oracion
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/mehndi-india.jpeg"
            alt="Mehndi India - Arte sagrado de la henna"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En la India hay gestos que no se explican con palabras. Se entienden cuando una mano reposa sobre otra y, lentamente, comienzan a aparecer flores, petalos, lunas y pequenos universos trazados con una pasta de color verde oscuro. Asi nace el Mehndi.
          </p>

          <p>
            Su nombre nombra tanto al arte como a la sustancia con la que se dibuja: la henna. Una pasta hecha con las hojas secas de una planta sagrada llamada Lawsonia inermis. Al contacto con la piel, deja un tono que comienza siendo naranja y madura hasta volverse profundo, como un rubi que despierta de a poco.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El origen del ritual</h2>

          <p>
            Se dice que las primeras mujeres en llevar estos trazos vivian en los desiertos de Rajasthan, Punjab y Gujarat. Cubrian sus manos y sus pies con esa pasta ancestral porque refrescaba el cuerpo bajo el sol implacable. Con el tiempo, alguien noto que donde caia una gota quedaba un punto luminoso. Y de ese pequeno descubrimiento nacieron los patrones mas hermosos del mundo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Mas que un adorno: una bendicion que se lleva en el cuerpo</h2>

          <p>
            En la India, el Mehndi acompana a las mujeres en muchos momentos sagrados de la vida. Se aplica en festivales, en celebraciones religiosas, durante el embarazo, en aniversarios espirituales y en cualquier umbral importante donde el alma necesita ser bendecida.
          </p>

          <p>
            Durante festivales como Karva Chauth, Diwali, Teej o Eid, las mujeres se reunen para pintarse las manos como gesto de gratitud y devocion.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El lenguaje secreto de los simbolos</h2>

          <p>
            Cada trazo del Mehndi guarda una intencion. Nada es decoracion pura. Cada figura es un mensaje, una oracion hecha visible.
          </p>

          <p>
            La flor de loto pide apertura espiritual y pureza del corazon. El pavo real promete belleza y fidelidad. La enredadera anuncia fertilidad y crecimiento. La luna cuida los ciclos del alma femenina. El sol convoca vitalidad y fuerza. Los mandalas representan al universo entero contenido en una sola palma.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores del alma india</h2>

          <p>
            En esta tradicion, los colores son mensajeros. El rojo representa el amor, la pasion y la fuerza vital. El amarillo convoca la alegria, la luz del sol y la bendicion de los dioses. El naranja simboliza el fuego sagrado y la transformacion interior. El verde recuerda la naturaleza, la fertilidad y los nuevos comienzos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que el Mehndi ensena sobre los ritos de paso</h2>

          <p>
            Aprendi que toda transicion merece ser honrada. Que pasar de una etapa a otra no deberia hacerse en silencio ni en soledad, sino rodeada de gestos que le digan al alma: este momento importa.
          </p>

          <p>
            Como tanatologa, encuentro en esta tradicion una verdad que suelo compartir en cada acompanamiento. No solo la muerte necesita ceremonia. Tambien la necesitan los finales mas pequenos y los comienzos mas sutiles: una despedida, una mudanza, el cierre de una etapa, el comienzo de una vida distinta.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el aroma tibio de la henna, en las manos pintadas con paciencia y en la certeza de que ningun umbral importante se cruza completamente solo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estas atravesando una transicion?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompanamiento en un cierre de ciclo o un nuevo comienzo, estoy aqui para ti.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all"
          >
            Agenda tu primera consulta gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
