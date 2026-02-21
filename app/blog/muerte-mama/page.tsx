'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloMuerteMama() {
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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Cómo atravesar la muerte de tu mamá
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-muerte-mama.webp"
            alt="Cómo atravesar la muerte de tu mamá - Una guía honesta."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            No hay forma suave de decirlo: perder a tu mamá es una de las pérdidas más profundas que podemos experimentar.
          </p>

          <p>
            No importa si tenías 15 años o 50. No importa si su relación era cercana o complicada. No importa si fue una muerte súbita o la viste venir.
          </p>

          <p>
            Perder a tu mamá te cambia. Porque ella fue parte fundamental de tu origen, de tu historia, de quien eres.
          </p>

          <p>
            Esta guía no te va a decir cómo &quot;superar&quot; su muerte, porque eso implica dejarla atrás. Lo que voy a ofrecerte es algo más realista: cómo aprender a vivir con su ausencia. Cómo cargar ese amor que ahora no tiene el mismo destino. Cómo seguir adelante sin olvidarla.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo por una madre es particular</h2>

          <p>Perder a una madre activa algo muy profundo.</p>

          <p>
            La relación con nuestra madre (o figura materna) es a menudo la base sobre la cual construimos nuestra capacidad de amar, de confiar, de sentirnos seguros. Cuando ella muere, algo en ese fundamento se mueve.
          </p>

          <p>Puedes experimentar sensaciones que no esperabas:</p>
          <p>Sentirte huérfano sin importar tu edad.</p>
          <p>Querer llamarla cada vez que pasa algo importante.</p>
          <p>Buscar su aprobación aunque ya no esté.</p>
          <p>Escuchar su voz en tu mente.</p>
          <p>Percibir su presencia en lugares inesperados.</p>
          <p>Sentir que una parte de ti cambió con ella.</p>

          <p>Todo esto es parte del proceso.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que puedes experimentar</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Los momentos cotidianos sin ella</h3>
          <p>
            Buenas noticias, malas noticias, un día cualquiera en que hubieras querido contarle algo. Tomas el teléfono para llamarla y luego recuerdas. Esa pequeña pérdida se repite muchas veces.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El vacío en las fechas importantes</h3>
          <p>
            Tu cumpleaños sin su llamada. El Día de las Madres. Su cumpleaños sin saber qué hacer con ese día.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Ver a otras personas con sus mamás</h3>
          <p>
            En la calle, en reuniones, en las redes sociales. Cada mamá con su hijo puede recordarte lo que ya no tienes.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">La culpa</h3>
          <p>
            &quot;Debí visitarla más.&quot; &quot;Debí decirle más que la amaba.&quot; &quot;Debí estar ahí.&quot;
          </p>
          <p>
            La culpa es una de las emociones más comunes en este duelo. Y casi nunca está justificada. Hiciste lo que pudiste con lo que sabías en ese momento.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El enojo</h3>
          <p>
            Sí, puedes sentir enojo. Con la situación, con otros, incluso con ella. El enojo es parte del duelo.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El alivio (y la culpa por sentir alivio)</h3>
          <p>
            Si tu mamá estuvo enferma, si cuidarla fue agotador, si su muerte terminó con su sufrimiento, puedes sentir alivio. Y después sentirte mal por sentir alivio. Esto también es normal. Ambas emociones pueden coexistir.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Si tu relación con tu mamá era complicada</h2>

          <p>
            No todas las relaciones madre-hijo son sencillas. Algunas están marcadas por dificultades, distancia, dolor, o situaciones difíciles.
          </p>

          <p>Si este era tu caso, el duelo puede ser especialmente complejo.</p>

          <p>
            Puedes sentir alivio y tristeza al mismo tiempo. Puedes llorar a la madre que querías que fuera, no solo a la que fue. Puedes estar en duelo por la relación que nunca tuvieron.
          </p>

          <p>
            Este duelo también es válido. Quizás más complicado, pero igualmente real.
          </p>

          <p>
            No tienes que idealizar a tu madre solo porque murió. Puedes reconocer lo difícil de su relación y llorar su pérdida al mismo tiempo. Las emociones humanas son complejas y contradictorias.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que puede ayudar</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Permítete sentir todo</h3>
          <p>
            No reprimas las emociones. No te obligues a &quot;ser fuerte&quot; para otros. Tu mamá murió. Tienes derecho a tu proceso.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Habla de ella</h3>
          <p>
            Menciona su nombre. Cuenta historias sobre ella. Comparte recuerdos con personas que también la conocían. Mantenerla en las conversaciones es una forma de mantenerla presente.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Busca sus huellas en ti</h3>
          <p>
            ¿Qué heredaste de ella? ¿Su forma de reír, sus manos, su manera de cocinar, sus dichos, sus valores? Ella vive en ti de maneras que quizás no has reconocido.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Conserva objetos significativos</h3>
          <p>
            Su ropa, sus recetas escritas a mano, sus fotos, objetos que usaba. Estos pueden ser reconfortantes.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Crea nuevos rituales</h3>
          <p>
            Fechas especiales pueden convertirse en días donde haces algo que a ella le gustaba, visitas un lugar significativo, o simplemente le dedicas un momento de recuerdo.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Escríbele</h3>
          <p>
            Cartas, notas, un diario. Cuéntale cómo estás, qué está pasando en tu vida, lo que quisieras preguntarle. El papel puede sostener las palabras que ella ya no puede escuchar directamente.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Busca apoyo</h3>
          <p>
            Grupos de apoyo, terapia, amigos que entiendan. No tienes que cargar esto solo.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Expresión creativa</h3>
          <p>
            Pintar, hacer collages, crear una caja de memorias son formas de honrarla mientras procesas el duelo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas que podrías estar haciéndote</h2>

          <p><strong>&quot;¿Cuándo voy a dejar de sentir este dolor?&quot;</strong></p>
          <p>
            No hay fecha. Las emociones intensas irán espaciándose, pero pueden regresar en momentos inesperados. Eso no es debilidad.
          </p>

          <p><strong>&quot;¿Por qué a veces me olvido de que murió?&quot;</strong></p>
          <p>Porque tu mente necesita descansos del dolor. Es normal.</p>

          <p><strong>&quot;¿Está mal que a veces no pienso en ella?&quot;</strong></p>
          <p>
            No. Tu mente necesita espacios de respiro. No pensar en ella constantemente no significa que no la ames.
          </p>

          <p><strong>&quot;¿Voy a estar bien algún día?&quot;</strong></p>
          <p>
            Vas a estar diferente. El dolor no desaparece completamente, pero se transforma. Aprenderás a cargar su ausencia de una manera que te permita seguir adelante.
          </p>

          <p><strong>&quot;¿Por qué me siento tan sola aunque tenga a otros?&quot;</strong></p>
          <p>
            Porque la relación con una madre es única. Puedes tener apoyo amoroso y aún así sentir un vacío específico.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Frases que no necesitas aceptar</h2>

          <p>&quot;Ya deberías estar mejor.&quot;</p>
          <p>&quot;Ella no querría verte así.&quot;</p>
          <p>&quot;Al menos vivió muchos años.&quot;</p>
          <p>&quot;Tienes que ser fuerte por tu familia.&quot;</p>

          <p>
            Todas estas frases, aunque bien intencionadas, no reconocen tu proceso. No tienes que aceptarlas ni sentirte mal por necesitar tu tiempo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuándo buscar ayuda profesional</h2>

          <p>Considera buscar apoyo de un profesional si:</p>

          <p>Sientes que no puedes funcionar después de varios meses.</p>
          <p>Tienes pensamientos de hacerte daño.</p>
          <p>Estás usando sustancias para aliviar el dolor.</p>
          <p>Tu salud física se está deteriorando.</p>
          <p>No ves ninguna mejoría en la intensidad del dolor.</p>
          <p>Sientes que no puedes seguir.</p>

          <p>El duelo complicado existe y es tratable. No tienes que sufrir indefinidamente.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Un mensaje para ti</h2>

          <p>
            Tu mamá te dio la vida. Y ahora, sin ella, estás aprendiendo a vivir de una manera nueva.
          </p>

          <p>
            No tienes que &quot;superar&quot; su muerte. Tienes que aprender a llevarla contigo de una manera que te permita seguir adelante.
          </p>

          <p>
            Ella vive en tus genes, en tus memorias, en las personas que también la amaron, en las cosas que te enseñó, en las partes de ti que se parecen a ella.
          </p>

          <p>La perdiste y nunca la perderás del todo.</p>

          <p className="italic text-black/60 mt-8">
            Ser hija o hijo huérfano no tiene edad. Y el amor de una madre no tiene fecha de caducidad.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si perdiste a tu mamá y necesitas un espacio seguro para procesar tu duelo, puedo acompañarte.
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
