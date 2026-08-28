'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function BebeArcoirisPage() {
  return (
    <article className="pt-28 pb-6 md:pt-32 md:pb-8">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Bebé arcoíris: la luz que llega después de la tormenta
          </h1>
          <p className="text-black/60 italic">Por Lourdes Pérez | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/bebe-arcoiris.jpg"
            alt="Bebé arcoíris después de una pérdida gestacional"
            width={1200}
            height={800}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Después de perder un embarazo, hay quienes vuelven a intentarlo. Y a veces, después del dolor, llega un nuevo bebé. A ese bebé se le llama bebé arcoíris.
          </p>

          <p>
            El nombre viene de la imagen del arcoíris que aparece después de una tormenta. No borra la tormenta, no la hace menos real, pero trae luz. Eso es lo que representa este bebé: esperanza después de un momento oscuro.
          </p>

          <p>
            Pero la experiencia de esperar y recibir a un bebé arcoíris es mucho más compleja de lo que el término sugiere. No es solo alegría. No es solo sanación. Es un proceso lleno de emociones encontradas que pocas personas entienden si no lo han vivido.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué es un bebé arcoíris</h2>

          <p>
            Un bebé arcoíris es aquel que nace después de una pérdida gestacional, neonatal o perinatal. Es decir, después de un aborto espontáneo, una muerte fetal, o la pérdida de un bebé durante sus primeros días o semanas de vida.
          </p>

          <p>
            El término nació en comunidades de apoyo para familias que han atravesado estas pérdidas. Nombrar esta experiencia ayuda a validarla, a reconocer que el bebé que viene después llega a un contexto particular, con una historia que lo precede.
          </p>

          <p>
            A los bebés que murieron se les conoce como bebés estrella. Y al que llega después, bebé arcoíris. Estos nombres no son poéticos por casualidad: nombrar lo que duele, y también lo que esperanza, es parte del proceso de sanar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El embarazo arcoíris: entre la ilusión y el miedo</h2>

          <p>
            Quedar embarazada después de una pérdida no se vive como cualquier otro embarazo. Hay una capa de ansiedad que tiñe cada semana, cada ecografía, cada síntoma o ausencia de síntoma.
          </p>

          <p>
            El cuerpo recuerda. La mente recuerda. El miedo de que vuelva a pasar está presente aunque no quieras que esté. Cada latido que escuchas en el ultrasonido es un alivio momentáneo, seguido de la pregunta de cuánto durará esa tranquilidad.
          </p>

          <p>
            Muchas mujeres describen vivir el embarazo arcoíris conteniendo la respiración. Sin permitirse la ilusión completa porque saben, porque ya vivieron, que las cosas pueden no salir bien. Es un mecanismo de protección que tiene sentido, pero que también puede robar parte de la experiencia.
          </p>

          <p>
            Y hay culpa ahí también. Culpa por no disfrutar el embarazo como "deberías". Culpa por tener miedo cuando "deberías" estar feliz. Culpa por pensar en el bebé que perdiste mientras llevas a otro dentro.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El bebé que viene no reemplaza al que se fue</h2>

          <p>
            Esta es quizás la parte más importante y la que menos se entiende desde afuera.
          </p>

          <p>
            El bebé arcoíris no viene a borrar la pérdida anterior. No es un reemplazo. No es un "al menos ya tienes otro". Es una persona completamente nueva, con su propia vida y su propia historia, que llega a una familia que ya tiene una herida.
          </p>

          <p>
            Cuando este punto no se comprende, las cosas se complican. Si los padres no han podido elaborar el duelo por el bebé que perdieron, pueden proyectar en el nuevo bebé expectativas que no le corresponden. Pueden, sin darse cuenta, pedirle que llene un vacío que no es suyo llenar.
          </p>

          <p>
            Por eso es tan importante darle espacio al duelo antes y durante el embarazo arcoíris. Reconocer al bebé estrella, nombrarlo, darle un lugar en la historia familiar. No para quedarse atrapados en el dolor, sino para que el bebé que viene pueda ser recibido por quien es, no por quien debería reemplazar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las emociones que conviven</h2>

          <p>Recibir a un bebé arcoíris es vivir muchas emociones al mismo tiempo:</p>

          <p>
            <strong>Alegría.</strong> Por supuesto que hay alegría. Tener a este bebé en brazos después de todo lo que pasó puede sentirse como un milagro.
          </p>

          <p>
            <strong>Alivio.</strong> De que esta vez sí. De que el cuerpo pudo, de que el embarazo llegó a término, de que el bebé está sano.
          </p>

          <p>
            <strong>Gratitud.</strong> Profunda, a veces abrumadora. Gratitud por esta segunda oportunidad.
          </p>

          <p>
            <strong>Tristeza.</strong> Por el bebé que no está. Por la experiencia que esa pérdida dejó. La tristeza no desaparece porque haya llegado otro bebé; puede incluso intensificarse al ver lo que pudo haber sido.
          </p>

          <p>
            <strong>Culpa.</strong> Por ser feliz mientras todavía duele. Por sentir que de alguna manera estás "superando" al bebé que perdiste. Por todas las formas en que la culpa aparece en el duelo.
          </p>

          <p>
            <strong>Miedo.</strong> Incluso después de que el bebé nace, el miedo puede persistir. Miedo de que algo pase, de que la felicidad sea arrebatada otra vez.
          </p>

          <p>
            <strong>Ansiedad.</strong> Vigilancia constante, dificultad para relajarse, necesidad de asegurarse de que el bebé está bien todo el tiempo.
          </p>

          <p>
            Todas estas emociones pueden coexistir. No tienes que elegir una. No tienes que sentir solo alegría para ser una buena madre. La complejidad de lo que sientes es respuesta natural a la complejidad de lo que viviste.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo que sigue presente</h2>

          <p>
            La llegada del bebé arcoíris no cierra el duelo por el bebé estrella. El duelo sigue, transformado quizás, pero presente.
          </p>

          <p>
            Puede haber fechas que duelan: el aniversario de la pérdida, la fecha en que habría nacido el otro bebé, días que activan la memoria del cuerpo. Estos momentos pueden llegar incluso en medio de la felicidad de la nueva maternidad, y eso puede ser confuso.
          </p>

          <p>
            También puede haber una sensación extraña de tener dos historias paralelas: la de lo que es y la de lo que pudo haber sido. Un hijo presente y un hijo ausente. Ambos reales, ambos parte de tu historia como madre.
          </p>

          <p>
            Darle espacio a esta realidad no significa vivir en el pasado. Significa integrar lo que viviste en lugar de pretender que no pasó.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que ayuda en este proceso</h2>

          <p>
            <strong>Nombrar al bebé que se fue.</strong> Darle un lugar en la familia, hablar de él, reconocer que existió. Esto no quita espacio al bebé que llegó; al contrario, lo libera de tener que llenar un vacío.
          </p>

          <p>
            <strong>Permitirte sentir todo lo que sientes.</strong> Sin juzgarte por la tristeza en medio de la alegría, sin exigirte estar solo feliz. Las emociones mezcladas son parte de esta experiencia.
          </p>

          <p>
            <strong>Buscar acompañamiento.</strong> Un espacio donde puedas hablar de todo esto sin que te digan que ya deberías estar bien, sin que minimicen lo que viviste, sin que te apuren.
          </p>

          <p>
            <strong>Conectar con otras familias que han vivido lo mismo.</strong> Hay comunidades de padres y madres de bebés arcoíris donde se comparte esta experiencia particular. Sentirte comprendido ayuda.
          </p>

          <p>
            <strong>Ser paciente contigo misma.</strong> Este proceso no tiene tiempos. No hay un momento en que "deberías" haber superado la pérdida. El duelo tiene su propio ritmo, y la maternidad arcoíris añade capas de complejidad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Para quienes acompañan</h2>

          <p>
            Si conoces a alguien que está esperando o ha tenido un bebé arcoíris, hay algunas cosas que puedes tener en cuenta:
          </p>

          <p>
            No minimices la pérdida anterior porque ahora hay un bebé sano. Frases como "al menos ahora ya tienes a este" o "ya puedes dejar de estar triste" no ayudan.
          </p>

          <p>
            Pregunta cómo está, de verdad. No asumas que porque el bebé nació todo está resuelto.
          </p>

          <p>
            Permite que hable del bebé que perdió si quiere hacerlo. No cambies el tema, no te incomodes. Nombrar a ese bebé no arruina la alegría del presente.
          </p>

          <p>
            Entiende que las emociones son complejas. Puede haber lágrimas en medio de la celebración, y eso no significa que algo esté mal.
          </p>

          <p>
            El bebé arcoíris trae luz, sí. Pero la tormenta que lo precedió también es parte de la historia. Ambas cosas son verdad al mismo tiempo. Y hay espacio para honrar ambas.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda una sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            En ColorMe hay espacio para la maternidad arcoíris, con todos sus colores. Para hablar del bebé que se fue y del bebé que llegó.
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

        <RelatedArticles currentSlug="bebe-arcoiris" category="tanatologia" />
      </div>
    </article>
  )
}
