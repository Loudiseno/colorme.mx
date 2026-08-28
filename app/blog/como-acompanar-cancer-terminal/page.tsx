'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function ComoAcompanarCancerTerminalPage() {
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
            Cómo acompañar a alguien con cáncer terminal: estar presente cuando no hay nada que arreglar
          </h1>
          <p className="text-black/60 italic">Por Lourdes Pérez | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/como-acompanar-cancer-terminal.jpeg" alt="Cómo acompañar a alguien con cáncer terminal" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando sabes que alguien va a morir</h2>

          <p className="text-xl leading-relaxed">
            Saber que alguien que quieres va a morir es una de las experiencias más difíciles que existen. No hay forma de prepararse completamente. No hay palabras que lo hagan más fácil.
          </p>

          <p>
            El cáncer terminal implica una certeza que otras enfermedades no tienen: el tiempo es limitado y el desenlace es conocido. Eso cambia todo. La relación, las conversaciones, la forma de estar juntos.
          </p>

          <p>
            Y una de las preguntas más frecuentes es: ¿cómo acompaño a esta persona? ¿Qué digo? ¿Qué hago? ¿Cómo estoy presente sin hacer daño?
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo más importante: escuchar</h2>

          <p>
            Cuando alguien está muriendo, lo que más necesita es ser escuchado. No necesita consejos, no necesita que le digan cómo debería sentirse, no necesita optimismo forzado.
          </p>

          <p>
            Necesita que alguien esté ahí, presente, dispuesto a escuchar lo que quiera decir. Aunque sea difícil. Aunque sea doloroso. Aunque no sepas qué responder.
          </p>

          <p>
            Escuchar significa dejar que la persona hable de lo que quiera. Si quiere hablar de la muerte, dejarla. Si quiere hablar de algo completamente diferente, también. No dirigir la conversación hacia donde tú crees que debería ir.
          </p>

          <p>
            No interrumpir con tu propia experiencia. Cuando alguien te cuenta algo difícil, el impulso de decir "a mí me pasó algo parecido" es natural, pero en este contexto puede desviar la atención de quien realmente la necesita.
          </p>

          <p>
            Tolerar el silencio. No todo tiene que llenarse con palabras. A veces estar en silencio juntos es más significativo que cualquier conversación.
          </p>

          <p>
            No intentar arreglar. No hay nada que arreglar. La persona va a morir y eso no lo puedes cambiar. Lo que sí puedes hacer es estar ahí.
          </p>

          <p>
            Validar lo que siente. "Tiene sentido que sientas eso." "No me imagino lo difícil que debe ser." Frases simples que reconocen el dolor sin tratar de minimizarlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que la persona enferma puede estar sintiendo</h2>

          <p>
            Cada persona vive el proceso de morir de manera diferente. No hay una forma correcta de enfrentar la muerte. Pero hay experiencias que son comunes:
          </p>

          <p>
            <strong>Miedo.</strong> A la muerte misma, al dolor, a lo desconocido, a dejar a las personas que ama, a ser olvidado, a perder el control.
          </p>

          <p>
            <strong>Tristeza.</strong> Por todo lo que no va a vivir, por las personas que deja, por los proyectos inconclusos, por la vida que termina.
          </p>

          <p>
            <strong>Enojo.</strong> Con la enfermedad, con el destino, con Dios si cree en uno, con los médicos, a veces con las personas cercanas. El enojo es parte del duelo.
          </p>

          <p>
            <strong>Negociación.</strong> Buscar tratamientos alternativos, prometer cambios si se cura, buscar cualquier posibilidad aunque sea remota.
          </p>

          <p>
            <strong>Aceptación.</strong> No siempre llega, y no tiene que llegar. Pero algunas personas encuentran paz con lo que viene.
          </p>

          <p>
            <strong>Deseos de hablar sobre la muerte.</strong> Muchas personas quieren hablar de lo que viene, pero sienten que sus seres queridos no pueden escucharlo. Si la persona quiere hablar de su muerte, permitirlo es un regalo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Pedir ayuda: los cuidados paliativos y equipos integrales</h2>

          <p>
            Acompañar a alguien con cáncer terminal no significa hacerlo solo. Existen equipos especializados que pueden ayudar a que el proceso sea más llevadero, tanto para la persona enferma como para quienes la acompañan.
          </p>

          <p>
            Los cuidados paliativos son un enfoque de atención que busca mejorar la calidad de vida de personas con enfermedades graves. No se trata de acelerar ni de retrasar la muerte, sino de aliviar el sufrimiento físico, emocional y espiritual.
          </p>

          <p>
            Un equipo de cuidados paliativos puede incluir: médicos especializados en manejo del dolor, personal de enfermería, apoyo nutricional, acompañamiento psicológico para la persona enferma y para la familia, trabajo social para ayudar con trámites y recursos, y acompañamiento espiritual para quienes lo deseen.
          </p>

          <p>
            Pedir este tipo de ayuda no es rendirse ni dejar de pelear. Es reconocer que hay profesionales preparados para hacer este tramo más llevadero. Es permitir que otros carguen parte del peso.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué puedes hacer como acompañante</h2>

          <p>
            <strong>Estar presente.</strong> A veces la presencia física es lo más importante. No tienes que decir nada especial. Solo estar ahí.
          </p>

          <p>
            <strong>Preguntar qué necesita.</strong> En lugar de asumir, pregunta: "¿Quieres que hablemos o prefieres que estemos en silencio?" "¿Te ayudaría que me quedara o necesitas tiempo solo?"
          </p>

          <p>
            <strong>Ofrecer ayuda práctica concreta.</strong> En lugar de "avísame si necesitas algo", ofrece cosas específicas: "Voy a preparar comida para tu familia esta semana" o "¿Puedo llevarte a tu cita el jueves?"
          </p>

          <p>
            <strong>Seguir tratándola como persona, no como paciente.</strong> La persona sigue siendo quien era antes del diagnóstico. Sigue teniendo sentido del humor, intereses, opiniones. No reduzcas toda la relación a la enfermedad.
          </p>

          <p>
            <strong>Respetar sus decisiones.</strong> Aunque no estés de acuerdo con alguna decisión que tome sobre su tratamiento o sus últimos días, es su vida y su muerte. Tu rol es acompañar, no decidir.
          </p>

          <p>
            <strong>Hablar de la muerte si quiere hacerlo.</strong> Si la persona quiere hablar sobre qué va a pasar cuando muera, sobre sus miedos, sobre lo que quiere para su funeral, no cambies el tema. Ese puede ser uno de los regalos más grandes que le des.
          </p>

          <p>
            <strong>Permitirte sentir.</strong> Tú también estás sufriendo. No tienes que ser fuerte todo el tiempo frente a la persona enferma, aunque tampoco tienes que desmoronarte. Busca tu propio espacio para procesar lo que estás viviendo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que no ayuda</h2>

          <p>
            <strong>Optimismo forzado.</strong> "Vas a estar bien" o "tienes que ser positivo" niegan la realidad de lo que está pasando. La persona sabe que no va a estar bien, y escuchar eso puede hacerla sentir que no puede ser honesta contigo.
          </p>

          <p>
            <strong>Comparaciones.</strong> "Mi tía tuvo lo mismo y vivió diez años más." Cada caso es diferente. Las comparaciones no consuelan.
          </p>

          <p>
            <strong>Hacer la conversación sobre ti.</strong> Aunque tengas tus propios miedos y tristezas, cuando estás con la persona enferma, el foco debe estar en ella.
          </p>

          <p>
            <strong>Evitar el tema.</strong> Actuar como si nada estuviera pasando puede hacer que la persona se sienta muy sola.
          </p>

          <p>
            <strong>Dar lecciones espirituales no solicitadas.</strong> A menos que la persona te pida hablar de temas espirituales, evita decirle qué debería creer o cómo debería entender su muerte.
          </p>

          <p>
            <strong>Presionar para que "luche".</strong> La narrativa de "luchar contra el cáncer" puede ser agotadora para alguien que ya no puede pelear más. A veces soltar también es válido.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuidar de ti mientras acompañas</h2>

          <p>
            Acompañar a alguien que está muriendo es agotador emocionalmente. No puedes dar lo que no tienes. Necesitas cuidarte para poder estar presente.
          </p>

          <p>
            Busca tu propio espacio para procesar. Un terapeuta, un grupo de apoyo, un amigo de confianza. Necesitas lugares donde tú puedas ser el que recibe apoyo.
          </p>

          <p>
            No lo hagas solo. Si hay otras personas que pueden acompañar, compartan la carga. No es abandono, es sostenibilidad.
          </p>

          <p>
            Permite tus propias emociones. Vas a sentir tristeza, miedo, enojo, a veces alivio, a veces agotamiento. Todo eso es normal.
          </p>

          <p>
            Mantén algo de tu vida. Sigue haciendo algunas cosas que te dan bienestar. No tienes que suspender tu vida por completo para ser un buen acompañante.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cierre</h2>

          <p>
            Acompañar a alguien con cáncer terminal es uno de los actos de amor más difíciles. No hay manual, no hay palabras perfectas, no hay forma de hacerlo sin dolor.
          </p>

          <p>
            Lo que sí puedes ofrecer es tu presencia. Tu disposición a escuchar. Tu capacidad de estar ahí cuando no hay nada que arreglar. Eso es mucho. Es quizás lo más importante.
          </p>

          <p>
            Y cuando todo termine, podrás mirar atrás sabiendo que estuviste presente. Que no huiste. Que acompañaste a alguien que amabas en el tramo más difícil de su vida.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás acompañando a alguien en este proceso?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas orientación sobre cómo acompañar o espacio para procesar lo que tú estás viviendo, estoy aquí.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu sesión gratuita</a>
        </div>

        <RelatedArticles currentSlug="como-acompanar-cancer-terminal" category="tanatologia" />
      </div>
    </article>
  )
}
