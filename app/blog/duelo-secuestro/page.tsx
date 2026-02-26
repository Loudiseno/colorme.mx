'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloSecuestro() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>
        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">El duelo por un secuestro: el trauma que no termina</h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo-por-secuestro.webp" alt="Duelo por secuestro, trauma secuestro, familia de secuestrado, recuperación secuestro." width={1200} height={675} priority className="w-full h-auto" />
        </div>
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">Para las víctimas y sus familias que cargan heridas invisibles.</p>

          <p>Hay experiencias que el lenguaje ordinario no alcanza a describir. El secuestro es una de ellas.</p>

          <p>Ya sea que lo hayas vivido como víctima directa o como familiar de alguien secuestrado, el impacto es profundo, duradero, y frecuentemente invisible para el mundo exterior.</p>

          <p>Este artículo es para ti, que sabes lo que es cargar con eso.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El secuestro como trauma</h2>

          <p>El secuestro es, en su esencia, una experiencia de terror y control total. La víctima pierde su libertad, su seguridad y, en muchos casos, su sentido de que el mundo tiene alguna lógica o justicia.</p>

          <p>Esa experiencia deja marcas que no desaparecen con el tiempo por sí solas. El cerebro que vivió el terror no simplemente olvida. Guarda la experiencia de maneras que pueden seguir afectando la vida años después.</p>

          <p>El trauma por secuestro no es debilidad. Es la respuesta biológica normal a una experiencia anormal y extraordinariamente violenta.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo de la víctima directa</h2>

          <p>Quien vivió el secuestro puede cargar con múltiples pérdidas que no siempre se reconocen.</p>

          <ul>
            <li><strong>La pérdida de la seguridad.</strong> El mundo ya no se siente seguro. Espacios, situaciones, personas desconocidas pueden activar el sistema de alarma del cuerpo de manera automática.</li>
            <li><strong>La pérdida de la confianza.</strong> En otros, en las instituciones, a veces en personas cercanas que podrían haber estado involucradas o que no actuaron como se esperaba.</li>
            <li><strong>La pérdida de la identidad anterior.</strong> La persona que era antes del secuestro ya no existe de la misma manera. Hay una ruptura en la continuidad del self que puede ser muy dolorosa.</li>
            <li><strong>La pérdida de la inocencia sobre el mundo.</strong> Saber de manera visceral que hay personas capaces de hacer lo que le hicieron cambia la manera de ver la humanidad.</li>
            <li><strong>El duelo por el tiempo robado.</strong> Los días, semanas o meses que fueron quitados de la vida no pueden recuperarse.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo de la familia</h2>

          <p>Los familiares de una persona secuestrada viven su propia forma de trauma, que incluye elementos de la pérdida ambigua: no saber si la persona está viva, no poder hacer nada, esperar sin certezas.</p>

          <p>Y cuando la persona regresa, hay otro proceso que nadie suele nombrar: la reintegración. El reencuentro no siempre es como se imaginó durante la espera. La persona que regresa puede estar muy diferente. La familia también cambió. Y esa brecha puede ser difícil de cruzar.</p>

          <p>La familia que esperó también necesita acompañamiento. Su dolor es real aunque la persona haya regresado.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las secuelas que nadie explica</h2>

          <p>Después del secuestro, víctimas y familias pueden experimentar una variedad de secuelas que a veces toman por sorpresa.</p>

          <ul>
            <li><strong>Trastorno de estrés postraumático.</strong> Flashbacks, pesadillas, hipervigilancia, respuestas de sobresalto exageradas. El sistema nervioso que fue alterado no simplemente regresa a su estado anterior.</li>
            <li><strong>Dificultad para retomar la vida cotidiana.</strong> Cosas que antes eran automáticas, como salir a la calle o estar en espacios públicos, pueden sentirse imposibles.</li>
            <li><strong>Cambios en las relaciones.</strong> Las relaciones cercanas pueden tensarse. La intimidad puede volverse difícil. La desconfianza puede afectar vínculos que antes eran sólidos.</li>
            <li><strong>Culpa del sobreviviente.</strong> Por haber regresado cuando otros no pudieron. Por haber sobrevivido de determinada manera. Por lo que tuvieron que hacer o tolerar.</li>
            <li><strong>Vergüenza.</strong> Sobre lo vivido, sobre la percepción de los demás, sobre cómo el cuerpo respondió o no respondió durante el cautiverio.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El silencio que se instala</h2>

          <p>Muchas familias que vivieron un secuestro no hablan de ello. Por miedo a represalias. Por vergüenza. Porque no saben cómo ponerlo en palabras. Porque el entorno no sabe cómo recibirlo.</p>

          <p>Ese silencio puede proteger en el corto plazo. Pero a largo plazo, lo que no se habla, lo que no se procesa, sigue afectando.</p>

          <p>Hablar de lo que vivieron, en un espacio seguro y con las personas correctas, puede comenzar a desatar lo que el silencio mantiene congelado.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La recuperación es posible</h2>

          <p>El trauma por secuestro es grave. Y también es tratable.</p>

          <p>Con el acompañamiento adecuado, las víctimas y sus familias pueden recuperar su sentido de seguridad, procesar las emociones que quedaron atrapadas, reconstruir su identidad y sus relaciones, y retomar una vida que no esté completamente definida por lo que vivieron.</p>

          <p>Esto no significa olvidar. Significa integrar la experiencia de una manera que permita seguir viviendo sin que el trauma sea el dueño del presente.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">No tienes que demostrarlo ni justificarlo</h2>

          <p>A veces las víctimas de secuestro sienten que tienen que demostrar que lo que vivieron fue suficientemente grave. Que tienen que justificar por qué siguen afectados tanto tiempo después.</p>

          <p>No tienes que hacer eso.</p>

          <p>Lo que viviste fue real. El impacto que tiene es real. El tiempo que necesitas para sanar es el que es, no el que otros esperan.</p>

          <p>Mereces apoyo sin tener que explicar ni justificar tu sufrimiento.</p>

          <p className="italic text-black/60 mt-8">El secuestro deja heridas que no se ven. Pero se pueden sanar. No tienes que hacerlo solo.</p>
        </div>
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si tu familia vivió un secuestro y necesitan acompañamiento, estoy aquí para apoyarles.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Agenda tu primera consulta gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
