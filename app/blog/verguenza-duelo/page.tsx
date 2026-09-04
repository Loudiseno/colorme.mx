'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import RelatedArticles from '@/components/RelatedArticles'
import { siteConfig } from '@/lib/seo'

export default function ArticuloVergüenzaDuelo() {
  return (
    <article className="pt-28 pb-6 md:pt-32 md:pb-8">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">Tanatología</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            La vergüenza: la emoción que te hace esconderte
          </h1>
          <p className="text-black/60 italic">Por Lourdes Pérez | Tanatóloga y Arteterapeuta</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/verguenza-duelo.webp"
            alt="Vergüenza emocional, duelo silenciado, emociones ocultas, miedo al juicio."
            width={300}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Lo que callamos por miedo a ser juzgados.
          </p>

          <p>
            Hay una emoción de la que casi nadie habla. Precisamente porque hablar de ella la activa.
          </p>

          <p>
            La vergüenza.
          </p>

          <p>
            Es la emoción que te hace querer desaparecer. Que te convence de que si alguien viera quien eres realmente, te rechazaria. Que te mantiene en silencio sobre las cosas mas importantes.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La emoción que no queremos admitir que sentimos</h2>

          <p>
            La vergüenza tiene una caracteristica peculiar: sentir vergüenza da vergüenza.
          </p>

          <p>
            Por eso permanece oculta. Por eso no la nombramos. Por eso cargamos con ella en silencio mientras pretendemos que no existe.
          </p>

          <p>
            Pero esta ahi. En las cosas que no contamos a nadie. En los recuerdos que nos despiertan en la madrugada. En la sensacion de que hay algo fundamentalmente malo en nosotros.
          </p>

          <p>
            Según investigaciones de la psicóloga Brene Brown, quien ha estudiado la vergüenza durante mas de dos décadas, esta emoción es universal. Todos la sentimos. La única diferencia es que tanto control tiene sobre nuestras vidas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Vergüenza versus culpa</h2>

          <p>
            Aunque a menudo se confunden, vergüenza y culpa son emociones diferentes.
          </p>

          <p>
            La culpa dice: &quot;Hice algo malo.&quot;
          </p>

          <p>
            La vergüenza dice: &quot;Soy algo malo.&quot;
          </p>

          <p>
            La culpa se enfoca en el comportamiento. Puede motivar cambios, disculpas, reparacion. Tiene una funcion util.
          </p>

          <p>
            La vergüenza se enfoca en la identidad. No dice que fallaste; dice que eres un fracaso. No senala algo que puedes cambiar; te define como defectuoso en tu esencia.
          </p>

          <p>
            Esta diferencia es crucial. La culpa, cuando es proporcional, puede ser constructiva. La vergüenza rara vez lo es.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que la vergüenza nos hace creer</h2>

          <p>
            La vergüenza tiene mensajes caracteristicos.
          </p>

          <p>
            &quot;Soy defectuoso.&quot; No que cometi un error, sino que soy un error. Hay algo mal en mi nucleo, algo que no se puede arreglar.
          </p>

          <p>
            &quot;Si me conocieran de verdad, me rechazarian.&quot; La vergüenza crea una separación entre el yo que mostramos y el yo que escondemos. Vivimos con el terror de que la mascara caiga.
          </p>

          <p>
            &quot;No merezco amor ni pertenencia.&quot; La vergüenza nos convence de que el amor que recibimos es condicional, basado en una version editada de nosotros. El verdadero yo no seria amado.
          </p>

          <p>
            &quot;Soy el único que se siente así.&quot; Parte del poder de la vergüenza es hacernos creer que nuestra experiencia es única, que nadie mas tiene estos secretos o defectos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">De donde viene la vergüenza</h2>

          <p>
            La vergüenza se aprende. Generalmente temprano.
          </p>

          <p>
            <strong>Mensajes familiares.</strong> Padres que avergonzaban como forma de disciplina. Comparaciones con hermanos o con otros niños. Mensajes explicitos o implicitos de que no eras suficiente.
          </p>

          <p>
            <strong>Experiencias de humillacion.</strong> Momentos donde fuiste expuesto, ridiculizado, rechazado publicamente. Estas experiencias pueden marcar profundamente, especialmente en la infancia y adolescencia.
          </p>

          <p>
            <strong>Fracasos que se convirtieron en identidad.</strong> En lugar de aprender que a veces fallamos, aprendiste que eres un fracaso. La experiencia se generalizo a la identidad.
          </p>

          <p>
            <strong>Secretos familiares.</strong> Crecer en familias donde había cosas de las que no se podia hablar: adicciones, abusos, enfermedades mentales, situacion economica. El silencio enseña que ciertas realidades son vergonzosas.
          </p>

          <p>
            <strong>Mensajes culturales.</strong> La cultura transmite que es vergonzoso: ciertos cuerpos, ciertas orientaciones, ciertas condiciones de vida, ciertas emociones. Internalizamos esos mensajes aunque no los hayamos elegido.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Vergüenza en el duelo</h2>

          <p>
            La vergüenza aparece frecuentemente en el proceso de duelo, aunque rara vez se menciona.
          </p>

          <p>
            Vergüenza por como murio la persona: suicidio, sobredosis, causas estigmatizadas.
          </p>

          <p>
            Vergüenza por la relación que tenias: conflictos no resueltos, distancia, ambivalencia.
          </p>

          <p>
            Vergüenza por lo que sientes: alivio, enojo con quien murio, culpa por seguir vivo.
          </p>

          <p>
            Vergüenza por como estas llevando el duelo: si lloras demasiado o demasiado poco, si no puedes funcionar o si funcionas &quot;demasiado bien.&quot;
          </p>

          <p>
            Esta vergüenza anade una capa de sufrimiento al duelo y puede hacer que las personas se aislen justamente cuando mas necesitan conexión.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como la vergüenza nos aisla</h2>

          <p>
            La vergüenza prospera en el secreto y el silencio.
          </p>

          <p>
            Cuando sentimos vergüenza, nuestro impulso es escondernos. No hablar. No dejar que nadie vea. Creemos que el silencio nos protege.
          </p>

          <p>
            Pero el aislamiento alimenta la vergüenza. Sin el reflejo de otros, sin escuchar &quot;yo también me he sentido así,&quot; quedamos atrapados en la creencia de que somos los unicos, de que nuestro defecto es único e imperdonable.
          </p>

          <p>
            El aislamiento también nos impide cuestionar los mensajes de la vergüenza. Sin perspectivas externas, las distorsiones de la vergüenza pasan por verdad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El antidoto: conexión y vulnerabilidad</h2>

          <p>
            Si la vergüenza prospera en el silencio, el antidoto es la conexión.
          </p>

          <p>
            Esto no significa contarle todo a todos. Significa encontrar personas seguras con quienes puedas ser honesto. Personas que respondan con empatia, no con juicio.
          </p>

          <p>
            Cuando compartes algo que te avergüenza y la otra persona responde con comprension, algo cambia. La creencia de que serias rechazado si alguien supiera se confronta con la realidad de que alguien sabe y sigue ahi.
          </p>

          <p>
            La vulnerabilidad es el camino, aunque se sienta aterrador. Brene Brown la define como &quot;incertidumbre, riesgo y exposicion emocional.&quot; No es comoda. Pero es la puerta de salida de la vergüenza.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Expresar lo que avergüenza a través del arte</h2>

          <p>
            No todo necesita ser dicho en voz alta a otra persona.
          </p>

          <p>
            El arte puede ser un espacio intermedio. Un lugar donde expresas lo que sientes sin necesidad de mostrarlo a nadie.
          </p>

          <p>
            Escribir lo que te avergüenza, para ti mismo. El acto de poner palabras a lo que guardas en silencio ya tiene poder.
          </p>

          <p>
            Pintar o dibujar las emociones sin preocuparte por el resultado. El proceso importa mas que el producto.
          </p>

          <p>
            Crear algo y después destruirlo si lo necesitas. El arte no tiene que ser permanente ni publico para ser terapeutico.
          </p>

          <p>
            Estos actos creativos pueden ser pasos hacia nombrar lo que sientes, sacar del interior lo que has cargado solo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Trabajar con la vergüenza</h2>

          <p>
            La vergüenza profunda generalmente requiere trabajo consciente, muchas veces con apoyo profesional.
          </p>

          <p>
            <strong>Reconocer la vergüenza.</strong> Identificar cuando esta presente, que la activa, que mensajes trae. Esto ya es un paso significativo porque la vergüenza opera mejor cuando permanece invisible.
          </p>

          <p>
            <strong>Cuestionar los mensajes.</strong> Es verdad que soy defectuoso. Es verdad que seria rechazado. De donde vienen estas creencias. Siguen siendo validas.
          </p>

          <p>
            <strong>Practicar la autocompasion.</strong> Tratarte con la misma amabilidad que tratarias a un amigo que te contara lo que tu te juzgas tan duramente.
          </p>

          <p>
            <strong>Buscar conexiones seguras.</strong> Personas, grupos o terapeutas donde puedas practicar la vulnerabilidad y recibir aceptacion.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexion</h2>

          <p>
            La vergüenza es una de las emociones mas dolorosas que existen. Y también una de las mas comunes.
          </p>

          <p>
            Lo que sientes no te hace raro ni defectuoso. Te hace humano.
          </p>

          <p>
            Los secretos que crees que te harian inaceptable probablemente son mas comunes de lo que imaginas. Y las personas que vale la pena tener en tu vida no te rechazarian por ellos.
          </p>

          <p>
            La vergüenza pierde poder cuando se nombra, cuando se comparte, cuando se expone a la luz.
          </p>

          <p>
            No tienes que seguir cargando esto en silencio.
          </p>

          <p className="italic text-black/60 mt-8">
            Lo que escondes por vergüenza no te define. Pero guardarlo te limita.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si cargas con emociones difíciles y necesitas un espacio seguro para expresarlas, estoy aquí para ti.
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

        {/* Related Articles */}
        <RelatedArticles currentSlug="verguenza-duelo" category="emociones" />
      </div>
    </article>
  )
}
