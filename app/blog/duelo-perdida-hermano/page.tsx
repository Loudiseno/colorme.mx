'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloPerdidaHermano() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>
        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">El duelo por la perdida de un hermano</h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo-perdida-hermano.webp" alt="Duelo por hermano, perdida de hermano, duelo fraternal, muerte de hermano, duelo invisible." width={1200} height={675} priority className="w-full h-auto" />
        </div>
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">El vinculo que nadie entiende. Para quienes perdieron a su companero de vida.</p>

          <p>Perdiste a alguien que conocia tu historia desde el principio. Alguien que estaba ahi antes de que tuvieras palabras para contar tu vida.</p>

          <p>Perdiste a tu hermano.</p>

          <p>Y el mundo a tu alrededor probablemente pregunta mucho por tus padres. Tal vez poco por ti.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo invisible de los hermanos</h2>

          <p>El duelo fraternal es uno de los mas invisibilizados. Cuando muere un hijo, la atencion social se dirige a los padres. Cuando muere un esposo, se dirige al conyuge. Pero los hermanos quedan frecuentemente en un segundo plano, esperando, sosteniendo, sin que nadie les pregunte como estan ellos.</p>

          <p>Esto no significa que tu dolor sea menos. Significa que el sistema no sabe bien como nombrarlo ni como acompanarlo.</p>

          <p>Tu duelo es igual de real, igual de profundo, igual de importante.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que se pierde cuando muere un hermano</h2>

          <p>La muerte de un hermano no es solo la perdida de una persona. Es la perdida de una historia compartida, de una memoria colectiva, de alguien que recordaba contigo.</p>

          <ul>
            <li><strong>El unico testigo de tu infancia.</strong> Tu hermano recordaba cosas que nadie mas recuerda. Escenas de la familia, chistes privados, momentos que solo ustedes vivieron. Con su muerte, una parte de tu propia historia desaparece.</li>
            <li><strong>El companero de vida que se anticipaba.</strong> Imaginabas envejecer juntos. Ser tios del uno y del otro. Estar presentes en momentos importantes. Ese futuro compartido ya no existira.</li>
            <li><strong>Tu lugar en la estructura familiar.</strong> La muerte de un hermano reorganiza toda la familia. Puedes pasar de ser el mayor a ser el unico. O quedarte siendo hermano de alguien que ya no esta.</li>
            <li><strong>Una parte de tu identidad.</strong> Ser hermano de alguien forma parte de quien eres. Perderlo afecta la manera en que te defines a ti mismo.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La complicacion de duelo dentro de la familia</h2>

          <p>Una de las cosas mas dificiles del duelo fraternal es que ocurre dentro de una familia que tambien esta en duelo.</p>

          <p>Tus padres estan devastados. Quizas necesitas cuidarlos. Quizas sientes que no puedes desmoronarte porque hay que sostener a otros. Quizas el espacio para tu propio dolor nunca llega.</p>

          <p>O quizas la familia entra en tension. El duelo saca a la luz conflictos viejos. Hay desacuerdos sobre como recordar a quien se fue, sobre que hacer con sus pertenencias, sobre como hablar de lo que paso.</p>

          <p>Todo esto es parte del terreno dificil del duelo familiar. Y no tienes que navegarlo solo.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que puedes estar sintiendo</h2>

          <ul>
            <li><strong>Culpa del sobreviviente.</strong> Por que el y no yo. Por que a el le toco esto. Deberia haber podido hacer algo.</li>
            <li><strong>Enojo.</strong> Con la situacion, con quien pudo haber tenido responsabilidad, con la injusticia de que se haya ido antes.</li>
            <li><strong>Soledad profunda.</strong> Una soledad que no es igual a la de no tener con quien hablar. Es la soledad de extranar a alguien con quien nadie mas puede ocupar el mismo lugar.</li>
            <li><strong>Presion de ser fuerte.</strong> Especialmente si los padres estan muy afectados. La sensacion de que no puedes hundirte porque hay que sostener a otros.</li>
            <li><strong>Alegria culposa.</strong> Reir, disfrutar algo, tener un momento de alivio, y luego sentir que eso es una traicion.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La culpa del sobreviviente</h2>

          <p>Muchos hermanos cargamos una culpa que no tiene logica racional pero que duele con mucha intensidad.</p>

          <p>Por que el y no yo. Deberia haber estado ahi. Si hubiera actuado diferente, quizas.</p>

          <p>Esa culpa necesita ser trabajada porque puede convertirse en una carga que impide vivir. No porque hayas hecho algo mal, sino porque el cerebro busca control en situaciones donde no hubo control posible.</p>

          <p>No eres responsable de lo que no estaba en tus manos.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Honrar a tu hermano</h2>

          <p>Honrar a un hermano que murio puede tomar muchas formas. No hay una manera correcta de hacerlo.</p>

          <ul>
            <li>Hablar de el. Decir su nombre. Contar historias.</li>
            <li>Mantener alguna tradicion que compartian.</li>
            <li>Crear un espacio de recuerdo: una caja, un album, un lugar especial.</li>
            <li>Vivir de una manera que honre lo que el fue para ti.</li>
            <li>Escribirle cartas aunque ya no pueda recibirlas.</li>
          </ul>

          <p>Tu hermano merece ser recordado. Y tu mereces espacios para hacer ese recuerdo.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tu duelo merece atencion</h2>

          <p>No tienes que esperar a que alguien te pregunte como estas. No tienes que poner el dolor en segundo plano porque otros parecen necesitarlo mas.</p>

          <p>Tu perdida es real. Tu amor por tu hermano era real. Y el vacio que deja su ausencia merece ser atendido.</p>

          <p>Date permiso de llorar. De pedir ayuda. De buscar un espacio donde tu duelo sea el protagonista, no el secundario.</p>

          <p className="italic text-black/60 mt-8">Perder a un hermano es perder al unico que conocia tu historia desde el principio. Ese dolor merece ser visto.</p>
        </div>
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si perdiste a tu hermano y necesitas acompanamiento en tu duelo, estoy aqui para ti.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Agenda tu primera consulta gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
