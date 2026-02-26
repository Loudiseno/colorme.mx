'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloArteTrauma() {
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
          <span className="text-xs text-black font-medium uppercase tracking-wider">ARTETERAPIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Arte y trauma: cómo el proceso creativo ayuda a sanar
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/arte-y-trauma.webp"
            alt="Arte y trauma - El proceso creativo como herramienta de sanación."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            El trauma tiene una forma particular de alojarse en nosotros. A veces no son solo recuerdos lo que queda, sino sensaciones en el cuerpo, reacciones que no entendemos, emociones que aparecen sin aviso. Y muchas veces, las palabras simplemente no alcanzan para describir lo que vivimos.
          </p>

          <p>
            Aquí es donde el arte entra como un camino diferente. No para reemplazar otras formas de terapia, sino para llegar a lugares donde el lenguaje no puede.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué el trauma es difícil de procesar con palabras</h2>

          <p>
            Cuando vivimos una experiencia traumática, nuestro cerebro procesa la información de manera diferente. La parte del cerebro responsable del lenguaje —el área de Broca— puede quedar temporalmente desactivada durante el trauma.
          </p>

          <p>
            Por eso muchas personas que han vivido experiencias traumáticas dicen cosas como: &quot;No puedo explicarlo&quot;, &quot;No tengo palabras para esto&quot;, o &quot;Sé que algo está mal, pero no sé qué&quot;.
          </p>

          <p>
            El trauma se almacena en el cuerpo, en imágenes fragmentadas, en sensaciones. Pedirle a alguien que &quot;hable de lo que pasó&quot; puede ser frustrante o incluso retraumatizante, porque el sistema nervioso recuerda de formas que el lenguaje no puede capturar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El arte como lenguaje alternativo</h2>

          <p>
            El arte ofrece una forma de expresión que no depende de las palabras. Los colores, las formas, las texturas, los movimientos del cuerpo al crear... todo esto puede comunicar lo que la voz no logra decir.
          </p>

          <p>
            No se trata de crear arte &quot;bonito&quot; o de tener habilidades artísticas. Se trata de usar los materiales como un puente entre lo que está adentro y lo que puede salir. A veces ese puente produce imágenes oscuras, caóticas, intensas. Y está bien. Eso también es parte del proceso.
          </p>

          <p>
            En arteterapia, no juzgamos lo que sale. Lo observamos con curiosidad, lo acompañamos, y dejamos que cuente su historia a su propio ritmo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo funciona el arte en el procesamiento del trauma</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Externalización</h3>
          <p>
            Cuando algo que está dentro de ti —una emoción, un recuerdo, una sensación— se convierte en algo externo que puedes ver y tocar, cambia tu relación con ello. Ya no estás atrapado dentro de la experiencia. Ahora puedes observarla desde afuera, a una distancia segura.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Regulación del sistema nervioso</h3>
          <p>
            El acto físico de crear —mover las manos, mezclar colores, sentir la textura de los materiales— activa el sistema nervioso parasimpático, ayudando al cuerpo a salir del estado de alerta constante que el trauma produce.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Integración</h3>
          <p>
            El trauma fragmenta la experiencia. El arte puede ayudar a unir esas piezas. Al crear imágenes de lo que vivimos, comenzamos a darle una forma coherente, un principio y un final. Esto es parte fundamental del proceso de sanación.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Control y agencia</h3>
          <p>
            El trauma a menudo nos deja con una sensación de pérdida de control. En el proceso creativo, tú decides. Tú eliges los colores, las formas, cuándo empezar y cuándo parar. Esta recuperación de la agencia, aunque sea en algo pequeño, es profundamente reparadora.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">No es necesario revivir el trauma</h2>

          <p>
            Un miedo común es que trabajar con el trauma signifique tener que revivir la experiencia. Pero el arte ofrece un camino diferente.
          </p>

          <p>
            No tienes que dibujar &quot;lo que pasó&quot;. Puedes dibujar cómo se siente tu cuerpo ahora. Puedes crear formas abstractas que representen tus emociones. Puedes usar colores para expresar lo que no tiene nombre.
          </p>

          <p>
            En arteterapia informada por trauma, trabajamos con lo que está presente ahora, no con la reconstrucción detallada del pasado. El objetivo no es recordar todo, sino integrar lo que quedó fragmentado y recuperar la sensación de seguridad en el presente.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El arte no reemplaza, complementa</h2>

          <p>
            Quiero ser clara: el arte no es una solución mágica ni reemplaza otras formas de terapia cuando son necesarias. El trauma complejo a menudo requiere un abordaje integral que puede incluir terapia verbal, trabajo corporal, y a veces medicación.
          </p>

          <p>
            Pero el arte puede ser una parte valiosa de ese proceso. Puede abrir puertas que permanecían cerradas. Puede ofrecer un espacio de expresión cuando las palabras fallan. Y puede recordarnos que somos capaces de crear, incluso después de la destrucción.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Señales de que el arte podría ayudarte</h2>

          <p>
            Considera explorar el arte como herramienta de sanación si:
          </p>

          <p>
            <strong>Las palabras se sienten insuficientes.</strong> Sabes que algo te duele, pero no puedes explicarlo.
          </p>

          <p>
            <strong>Tu cuerpo guarda la historia.</strong> Tienes reacciones físicas que no entiendes, tensiones crónicas, o sensaciones que aparecen sin razón aparente.
          </p>

          <p>
            <strong>Te sientes desconectado.</strong> De ti mismo, de tus emociones, de tu cuerpo.
          </p>

          <p>
            <strong>La terapia verbal se siente limitante.</strong> Has hablado mucho, pero sientes que hay algo más que no logras alcanzar.
          </p>

          <p>
            <strong>Necesitas un espacio seguro de expresión.</strong> Un lugar donde no tengas que explicar, solo crear.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Un espacio para sanar</h2>

          <p>
            El trauma nos cambia. Eso es inevitable. Pero no tiene que definirnos. El proceso creativo puede ser un camino de regreso a nosotros mismos, un recordatorio de que somos más que lo que nos pasó.
          </p>

          <p>
            No tienes que ser artista. No tienes que saber qué hacer. Solo necesitas estar dispuesto a explorar, a crear, a dejar que algo salga.
          </p>

          <p className="italic text-black/60 mt-8">
            En ColorMe ofrezco un espacio seguro donde el arte se convierte en herramienta de sanación. Si has vivido experiencias difíciles y sientes que las palabras no alcanzan, podemos explorar juntos qué tiene que decir tu creatividad.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si quieres explorar cómo el arte puede ayudarte en tu proceso de sanación, estoy aquí para acompañarte.
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
