'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloDelCuidador() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/#blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">Tanatología</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            El Duelo del Cuidador: Cuando Cuidar a Otro También te Rompe por Dentro
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/el duelo.jpeg" alt="Mano de cuidador sosteniendo la mano de un ser querido enfermo" width={1200} height={675} className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Hay un tipo de duelo del que muy poco se habla: el de quien cuida. El de la hija que reorganizó su vida entera alrededor del diagnóstico de su madre. El del esposo que lleva años siendo el sostén emocional de su pareja con una enfermedad degenerativa. La hermana que acompaña hasta el final, que estuvo presente en cada quimioterapia, en cada mal día, en cada momento de miedo.
          </p>

          <p>
            Estas personas a menudo llegan a mi consulta —si es que llegan— con la misma frase: "Yo no tengo derecho a quejarme. Yo no soy el que está enfermo."
          </p>

          <p>
            Y eso me parte el corazón. Porque cuidar a alguien que sufre también duele. Y ese dolor también es duelo.
          </p>

          <p>
            Yo sé algo sobre esto desde los dos lados: como la persona enferma que tuvo que ser cuidada, y como quien ha acompañado a cuidadores en sus propios procesos de pérdida. Te escribo desde ambos lugares.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué es el duelo del cuidador</h2>

          <p>
            El duelo del cuidador es el conjunto de pérdidas que experimenta una persona que está al cuidado de alguien con una enfermedad grave, crónica o terminal. Es un duelo que ocurre mientras la persona querida todavía está viva, y que muchas veces continúa —y se profundiza— después de su muerte.
          </p>

          <p>
            Lo que el cuidador pierde no siempre es visible para los demás. No hay un funeral, no hay una fecha marcada en el calendario. Pero las pérdidas son reales y acumulativas:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>La persona que conocías antes de la enfermedad: sus capacidades, su carácter, su presencia.</li>
            <li>Tu propia libertad, rutina y proyectos personales.</li>
            <li>La relación que tenían antes de que la enfermedad lo cambiara todo.</li>
            <li>El futuro que imaginaban juntos.</li>
            <li>Tu propia salud física y emocional, erosionada por el agotamiento.</li>
            <li>El espacio para tus propias emociones, constantemente postergado en favor de las necesidades del otro.</li>
          </ul>

          <p>
            Cada una de estas pérdidas merita atención. Cada una tiene peso. Y la mayoría de los cuidadores las cargan solos, en silencio, convencidos de que no es su momento para pedir ayuda.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo anticipatorio: llorar a alguien que todavía está</h2>

          <p>
            Cuando alguien recibe un diagnóstico terminal —o cuando una enfermedad crónica avanza de manera irreversible— las personas que lo rodean comienzan a perder a esa persona antes de que muera. Esto se llama <strong>duelo anticipatorio</strong>, y es uno de los tipos de duelo más complejos y menos reconocidos.
          </p>

          <p>
            El duelo anticipatorio puede manifestarse como:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Tristeza profunda que convive con la persona aún viva.</li>
            <li>Miedo constante a lo que viene, a cómo será el final.</li>
            <li>Culpa por ya estar llorando a alguien que todavía está presente.</li>
            <li>Enojo, a veces hacia la persona enferma, por estar dejando, por no poder hacer más.</li>
            <li>Hipervigilancia: estar siempre alerta a cualquier cambio.</li>
            <li>Desconexión emocional como mecanismo de protección.</li>
          </ul>

          <p>
            Una cosa que me ha tocado acompañar —y que yo misma experimenté desde el otro lado, como la enferma— es la paradoja del cuidador que ya está de duelo pero que tiene que seguir estando presente, funcional y fuerte. Es agotador. Es una de las experiencias más solitarias que existen.
          </p>

          <p>
            Si estás en ese lugar ahora mismo, quiero que sepas que lo que sientes es válido. Llorar a alguien que todavía está no es traición. Es amor enfrentando una realidad que duele.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Burnout del cuidador: cuando el cuerpo dice basta</h2>

          <p>
            El burnout del cuidador —también llamado síndrome del cuidador quemado— es el agotamiento físico, emocional y mental que resulta de cuidar a otra persona de manera prolongada e intensa, generalmente sin suficiente apoyo ni descanso.
          </p>

          <p>
            Sus señales incluyen:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Cansancio que no desaparece con el descanso.</li>
            <li>Irritabilidad excesiva, a veces hacia la persona que cuidas.</li>
            <li>Sensación de no poder más, de que todo depende solo de ti.</li>
            <li>Descuido de tu propia salud: no ir al médico, no comer bien, no dormir suficiente.</li>
            <li>Aislamiento social: cancelar planes, alejarse de amigos y familia.</li>
            <li>Sensación de vacío, pérdida de motivación, falta de alegría.</li>
            <li>Pensamientos de culpa intensos, especialmente cuando deseas que todo termine.</li>
          </ul>

          <p>
            Ese último punto merece un espacio especial. Muchos cuidadores sienten en algún momento —especialmente cuando el proceso es muy largo o muy doloroso— que desearían que terminara. Y eso los llena de vergüenza y culpa.
          </p>

          <p>
            Desear que el sufrimiento termine no es desear que la persona muera. Es una respuesta humana completamente comprensible ante una situación de dolor prolongado. Sentirlo no te convierte en mala persona. Te convierte en alguien que está agotado y que necesita apoyo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo secundario: perder quien eras cuando cuidabas</h2>

          <p>
            Cuando la persona cuidada muere, muchos cuidadores experimentan algo inesperado: además del duelo por la pérdida de esa persona, aparece otro duelo. Un duelo por la identidad que tenían como cuidadores.
          </p>

          <p>
            Durante meses o años, su vida entera se organizó alrededor del cuidado. Sus rutinas, sus tiempos, su propósito, su relación con el mundo. Y de pronto, todo eso desaparece. La pregunta "¿quién soy yo ahora?" puede ser tan desorientadora como el dolor por la pérdida.
          </p>

          <p>
            Esto se complica aún más porque, con frecuencia, el entorno espera que el cuidador esté "bien" o incluso "aliviado" después de una muerte difícil. "Por lo menos ya no está sufriendo." "Ahora puedes descansar." Esas frases, aunque bien intencionadas, no dejan espacio para este duelo secundario que es completamente legítimo.
          </p>

          <p>
            El cuidador también perdió algo enorme. Su reorganización de vida puede tardar tanto o más que el duelo por la persona amada.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Autocuidado para cuidadores: no es egoísmo, es necesidad</h2>

          <p>
            El autocuidado del cuidador no es un lujo ni un signo de que estás abandonando a quien cuidas. Es una necesidad básica para poder seguir estando presente. Como dicen en los aviones: primero colócate tu mascarilla de oxígeno, luego ayuda a los demás. No puedes dar de lo que no tienes.
          </p>

          <p>
            Algunas formas concretas de autocuidado:
          </p>

          <p>
            <strong>Pide ayuda y acéptala cuando te la ofrecen.</strong> El cuidado no tiene que recaer sobre una sola persona. Si hay otras personas en la familia o en tu red que pueden asumir tareas, déjalas hacerlo. Delegar no es fallar; es sobrevivir.
          </p>

          <p>
            <strong>Protege momentos para ti.</strong> No tienen que ser grandes bloques de tiempo. Pueden ser 20 minutos al día para caminar, leer, tomar un baño con calma, escribir en un diario. Esos momentos no son un capricho: son lo que te permite seguir.
          </p>

          <p>
            <strong>Busca un espacio para expresar tus propias emociones.</strong> Un amigo de confianza, un grupo de apoyo para cuidadores, un proceso terapéutico. Necesitas un lugar donde tú seas el centro, donde puedas decir "yo estoy mal" sin que eso sea una amenaza para nadie.
          </p>

          <p>
            <strong>Atiende tu cuerpo.</strong> El agotamiento del cuidador tiene consecuencias físicas reales: enfermedades más frecuentes, problemas de sueño, dolores crónicos. No pospongas tu propia salud indefinidamente.
          </p>

          <p>
            <strong>Permítete sentir sin juzgarte.</strong> El enojo, el resentimiento, el agotamiento, el deseo de escapar... todo eso puede coexistir con el amor profundo que sientes. No te definen como cuidador ni como persona.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo la arteterapia puede acompañar al cuidador</h2>

          <p>
            En mi práctica, acompañar a cuidadores es uno de los procesos que más me conmueve y que más claramente me muestra el poder del arte como lenguaje terapéutico.
          </p>

          <p>
            El cuidador típicamente llega con muy poco espacio para sí mismo. Está acostumbrado a posponer sus propias emociones, a no tomarlas "tan en serio". El espacio de arteterapia le dice lo contrario: aquí tú eres el centro. Lo que sientes importa. Lo que necesitas expresar tiene un lugar.
          </p>

          <p>
            A través del arte, el cuidador puede explorar emociones que no se ha atrevido a poner en palabras: el agotamiento, la ambivalencia, el miedo, el enojo, la ternura. Puede crear imágenes de lo que está viviendo sin tener que explicarlo ni justificarlo. Puede encontrar en el proceso creativo un pequeño espacio de respiro y de presencia para sí mismo.
          </p>

          <p>
            También hay algo muy particular en la arteterapia para el duelo anticipatorio: crear algo —una imagen, un collage, un mandala— puede ser una forma de honrar la relación y a la persona amada mientras todavía está presente. Es una manera de estar con ellas de forma diferente, de dejar una huella del amor en algo tangible.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes del cuidador</h2>

          <p>
            <strong>¿Es normal sentir enojo hacia la persona que cuido?</strong><br />
            Sí, y es más común de lo que crees. El enojo puede surgir por el agotamiento, por la sensación de pérdida de libertad, por la impotencia de no poder "arreglarlo". Ese enojo no significa que no la quieres. Significa que estás humano/a, que tienes límites, y que necesitas apoyo.
          </p>

          <p>
            <strong>¿Cómo sé si lo que siento es burnout o duelo?</strong><br />
            En realidad, pueden coexistir. El burnout es principalmente agotamiento: físico, emocional, cognitivo. El duelo es la respuesta a la pérdida: de la persona tal como era, del futuro, de tu propia vida antes de la enfermedad. Muchos cuidadores experimentan ambos al mismo tiempo, y ambos necesitan atención.
          </p>

          <p>
            <strong>¿Es egoísta querer tiempo para mí cuando la persona que cuido me necesita?</strong><br />
            No es egoísta: es necesario. Un cuidador que no se cuida termina quebrándose, y eso no le sirve a nadie. Cuidarte a ti mismo es parte de poder seguir cuidando al otro. Es también un modelo de salud que, en algunos casos, puede reconfortar a la persona enferma, que muchas veces carga con culpa por lo que su cuidador está viviendo.
          </p>

          <p>
            <strong>¿El duelo del cuidador termina cuando muere la persona que cuidaba?</strong><br />
            No necesariamente. Después de la muerte puede comenzar una nueva fase del duelo —la pérdida directa de la persona— pero también puede emerger el duelo secundario por la identidad del cuidador y por los años de vida pospuestos. Este proceso puede necesitar su propio espacio y tiempo.
          </p>

          <p>
            <strong>¿Dónde puedo encontrar apoyo como cuidador?</strong><br />
            Existen grupos de apoyo para cuidadores —presenciales y en línea— que pueden ser muy valiosos porque conectan con personas que entienden desde adentro lo que estás viviendo. La terapia individual (ya sea verbal o arteterapia) también puede ofrecer un espacio personalizado para tu proceso. Y si la enfermedad de tu ser querido está siendo acompañada por un equipo de cuidados paliativos, ese equipo generalmente también tiene recursos de apoyo para la familia.
          </p>

          <p>
            <strong>¿Cuándo buscar acompañamiento profesional?</strong><br />
            Cuando el agotamiento es tan grande que ya no puedes funcionar. Cuando los pensamientos de culpa o de desesperanza se vuelven abrumadores. Cuando sientes que no tienes a nadie con quien hablar de cómo estás realmente. Cuando el cuidado terminó y no sabes cómo retomar tu propia vida. En cualquiera de esos momentos, pedir ayuda no es debilidad: es el acto más inteligente y valiente que puedes hacer.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">También tú mereces ser acompañado/a</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si eres cuidador y sientes que llevas demasiado tiempo cargando solo, hay un espacio aquí para ti. La primera consulta es gratuita. Hablemos.
          </p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Agenda tu primera consulta gratuita
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="text-black/60 text-sm italic">
            Lourdes es arteterapeuta, tanatóloga, diseñadora, fotógrafa y sobreviviente de cáncer. Su formación integra técnicas de México, Bali, Tailandia, Malasia e India. Es autora de "Indeleble".
          </p>
        </div>
      </div>
    </article>
  )
}
