'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloMascota() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Duelo por mascota: por qué tu dolor es real y cómo atravesarlo
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-por-mascota.webp"
            alt="Duelo por mascota - Tu dolor es válido"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-black/80">

          <p>
            Perdiste a tu mascota y el dolor que sientes es inmenso. Quizás te han dicho que &quot;era solo un animal&quot; o que &quot;ya conseguirás otro&quot;, y esas palabras, lejos de ayudar, te hacen sentir incomprendido. Quiero que sepas algo: el <strong>duelo por mascota</strong> es real, legítimo y merece el mismo respeto que cualquier otra pérdida significativa.
          </p>

          <p>
            No voy a intentar convencerte de que tu dolor tiene validez. Tú ya lo sabes. Lo que sí puedo hacer es acompañarte con herramientas concretas para atravesar este proceso, especialmente cuando el mundo a tu alrededor parece no entender la magnitud de lo que perdiste.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que perdiste va más allá de una mascota</h2>

          <p>
            Cuando alguien dice &quot;era solo un perro&quot; o &quot;era solo un gato&quot;, demuestra que no entiende lo que esa relación significaba para ti. Y no tienen por qué entenderlo. Pero tú sí sabes lo que perdiste:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Compañía incondicional.</strong> Alguien que estaba ahí cuando llegabas a casa, que se alegraba de verte sin importar cómo había sido tu día.</li>
            <li><strong>Una presencia constante.</strong> Los sonidos de sus pasos, su lugar favorito en el sillón, la forma en que te miraba.</li>
            <li><strong>Rutinas que estructuraban tu día.</strong> Los paseos, las comidas, los momentos de juego.</li>
            <li><strong>Un vínculo sin complicaciones.</strong> Sin juicios, sin conflictos, sin expectativas imposibles. Solo estar juntos.</li>
            <li><strong>Un confidente silencioso.</strong> Alguien a quien le hablabas, con quien compartías tu espacio más íntimo.</li>
          </ul>

          <p>Todo eso ya no está. Y el hueco que deja es real.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando tu entorno no entiende tu dolor</h2>

          <p>
            Una de las partes más difíciles de perder una mascota es que frecuentemente el duelo no es reconocido por quienes te rodean. No hay rituales sociales establecidos, no hay días de luto, y muchas veces las personas minimizan lo que sientes.
          </p>

          <p>Frases que probablemente has escuchado:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>&quot;Bueno, pero ya estaba viejito.&quot;</li>
            <li>&quot;Puedes adoptar otro.&quot;</li>
            <li>&quot;Al menos no sufrió&quot; (como si eso borrara tu dolor).</li>
            <li>&quot;¿Todavía estás triste por eso?&quot;</li>
          </ul>

          <p>
            Estas palabras duelen porque invalidan tu experiencia. Pero quiero que sepas que el problema no está en ti. Está en una sociedad que no ha aprendido a reconocer todos los vínculos significativos que los seres humanos podemos formar.
          </p>

          <p className="bg-[#B2F7EF]/20 p-4 rounded-lg border-l-4 border-[#B2F7EF]">
            Un estudio publicado en enero de 2025 en la revista PLOS One por el psicólogo Philip Hyland encontró que el 21% de las personas que habían perdido tanto seres humanos como mascotas reportaron que la muerte de su animal fue el duelo más difícil que habían vivido. Tu dolor no es una exageración. Tiene fundamento.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Permítete sentir sin justificarte</h2>

          <p>
            No tienes que explicar a nadie por qué te duele tanto. No tienes que defender la validez de tu tristeza. No tienes que pedir disculpas por llorar.
          </p>

          <p>Lo que sientes es:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tristeza profunda.</li>
            <li>Un vacío que parece físico.</li>
            <li>Ganas de llorar en momentos inesperados.</li>
            <li>Añoranza por su presencia.</li>
            <li>A veces, culpa (especialmente si la muerte involucró una decisión difícil).</li>
            <li>A veces, enojo (hacia la situación, hacia ti mismo, hacia el mundo).</li>
          </ul>

          <p>Todo esto es parte del proceso. No hay emociones correctas o incorrectas. Hay lo que sientes, y eso merece espacio.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El vacío en la rutina diaria</h2>

          <p>
            Quizás uno de los aspectos más difíciles es enfrentar el día a día sin esos pequeños momentos que antes eran automáticos:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Despertar sin que esté a tu lado.</li>
            <li>Llegar a casa y que nadie te reciba.</li>
            <li>La hora de la comida sin tener que preparar la suya.</li>
            <li>Las noches más silenciosas.</li>
            <li>Los paseos que ya no tienes que dar.</li>
          </ul>

          <p>
            Ese vacío en la rutina puede sentirse enorme. No tienes que llenarlo de inmediato. Puedes permitirte sentir la ausencia sin presionarte a &quot;volver a la normalidad&quot;. La normalidad, ahora, es diferente.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Busca pequeños momentos de calma</h2>

          <p>
            En medio del dolor, tu mente y tu cuerpo necesitan pausas. No se trata de &quot;distraerte&quot; o de fingir que estás bien. Se trata de darte pequeños respiros.
          </p>

          <p>Puede ser:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sentarte en silencio con un té o café.</li>
            <li>Ver algo ligero que no requiera mucha atención.</li>
            <li>Salir a caminar sin destino.</li>
            <li>Escuchar música que te tranquilice.</li>
            <li>Pasar tiempo con alguien que entienda (o que al menos no minimice lo que sientes).</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Honra su memoria a tu manera</h2>

          <p>
            No hay formas correctas o incorrectas de recordar a tu mascota. Lo que te haga sentir bien, lo que te conecte con su memoria de una manera que te reconforte, eso está bien.
          </p>

          <p>Algunas personas:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Guardan su collar, su juguete favorito o un mechón de pelo.</li>
            <li>Crean un pequeño espacio de memoria con una foto.</li>
            <li>Plantan algo en su honor.</li>
            <li>Escriben sobre lo que significó en su vida.</li>
            <li>Hacen una donación a un refugio en su nombre.</li>
            <li>Simplemente hablan de ella cuando quieren, sin miedo a incomodar a otros.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Si tuviste que tomar la decisión de la eutanasia</h2>

          <p>
            Esta es una de las situaciones más difíciles. Tomar la decisión de poner fin a la vida de tu mascota para evitarle sufrimiento puede dejar una carga emocional enorme, incluso cuando sabes que era lo correcto.
          </p>

          <p>Pensamientos comunes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>&quot;¿Tomé la decisión demasiado pronto?&quot;</li>
            <li>&quot;¿Debí esperar más?&quot;</li>
            <li>&quot;¿Sufrió? ¿Se sintió abandonado?&quot;</li>
            <li>&quot;¿Hice todo lo que podía hacer?&quot;</li>
          </ul>

          <p>
            La culpa en estos casos es muy frecuente. Pero quiero recordarte algo: <strong>tomaste esa decisión desde el amor</strong>. Elegiste evitarle dolor aunque eso significara causarte dolor a ti. No hay nada egoísta en eso. Al contrario.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuándo pensar en abrir tu corazón a otra mascota</h2>

          <p>Esta decisión es completamente personal y no hay un tiempo &quot;correcto&quot;.</p>

          <p>
            <strong>Algunas personas necesitan tiempo antes de considerar otra mascota.</strong> Necesitan procesar la pérdida, despedirse internamente, y sentir que están listas para un nuevo vínculo.
          </p>

          <p>
            <strong>Otras personas encuentran consuelo en adoptar relativamente pronto.</strong> No como &quot;reemplazo&quot; (porque ninguna mascota reemplaza a otra), sino porque la compañía animal es parte importante de su vida y el vacío se siente demasiado grande.
          </p>

          <p>Señales de que podrías estar preparado:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Puedes pensar en tu mascota anterior con cariño sin que el dolor sea abrumador.</li>
            <li>Sientes deseo genuino de compartir tu vida con otro animal.</li>
            <li>Entiendes que será una relación nueva, diferente, no un intento de recuperar lo que perdiste.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Buscar apoyo no es exagerar</h2>

          <p>
            Si sientes que necesitas un espacio donde tu dolor sea entendido y validado, buscarlo no es una exageración. No importa que haya sido &quot;solo&quot; una mascota para otros. Para ti fue una relación significativa, y eso basta.
          </p>

          <p>Un espacio de acompañamiento puede ayudarte a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Expresar lo que sientes sin miedo a ser juzgado.</li>
            <li>Procesar emociones complicadas como la culpa o el enojo.</li>
            <li>Encontrar maneras de honrar la memoria de tu mascota.</li>
            <li>Atravesar el vacío de la rutina diaria.</li>
            <li>Decidir cuándo y si quieres abrir tu corazón a otro animal.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Es normal que me duela tanto la pérdida de mi mascota?</h3>
          <p>
            Sí. La intensidad del dolor no depende de si era un humano o un animal, sino de la profundidad del vínculo. Si tu mascota era parte central de tu vida, es completamente normal que su ausencia te afecte profundamente.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Cuánto tiempo dura este dolor?</h3>
          <p>
            No hay un tiempo establecido. Cada persona es diferente. Con el tiempo, los momentos de dolor intenso suelen espaciarse y los recuerdos se vuelven menos dolorosos, pero eso no significa que dejarás de extrañarla. Y eso está bien.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Qué hago si mi familia o amigos no entienden mi dolor?</h3>
          <p>
            Busca a alguien que sí entienda: otro amante de los animales, comunidades en línea de personas que han pasado por lo mismo, o un profesional. No tienes que convencer a nadie de que tu dolor es válido.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Mis otras mascotas parecen afectadas. ¿Es posible?</h3>
          <p>
            Sí. Los animales también forman vínculos y pueden mostrar cambios de comportamiento cuando un compañero muere: comer menos, buscar al otro animal, estar más apagados. Mantén sus rutinas lo más estables posible y dales atención extra.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Está mal querer adoptar otra mascota pronto?</h3>
          <p>
            No. Mientras sea tu decisión y no una forma de evitar el duelo, adoptar cuando sientas que estás listo es completamente válido. Lo importante es no esperar que la nueva mascota &quot;reemplace&quot; a la anterior.
          </p>

          <p className="italic text-black/60 mt-8">
            En ColorMe creo que todo vínculo significativo merece ser honrado. Estoy aquí si me necesitas.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si sientes que te beneficiaría tener un espacio donde tu duelo sea entendido sin juicios, puedo acompañarte.
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
