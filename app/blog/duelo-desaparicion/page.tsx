'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloDesaparicion() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>
        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">El duelo por una persona desaparecida</h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo-por-desaparicion.webp" alt="Duelo por desaparición, pérdida ambigua, persona desaparecida, duelo congelado, familia de desaparecidos." width={1200} height={675} priority className="w-full h-auto" />
        </div>
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">Cuando no sabes si buscar o despedirte. El dolor que no puede cerrarse.</p>

          <p>Hay un tipo de pérdida que el mundo no sabe cómo nombrar. No hay cuerpo. No hay certeza. No hay funeral. No hay respuestas.</p>

          <p>Solo hay una ausencia que grita, y una pregunta que no tiene fin: dónde está.</p>

          <p>Si alguien que amas ha desaparecido, sabes de lo que hablo. Sabes lo que es vivir suspendido entre el miedo de que algo malo pasó y la esperanza de que volverá. Sabes lo que es un duelo que no puede cerrarse porque no hay cierre posible.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La pérdida ambigua</h2>

          <p>El término pérdida ambigua fue acuñado por la psicóloga Pauline Boss para describir exactamente esto: las pérdidas sin confirmación, sin cuerpo, sin ritual.</p>

          <p>Hay dos tipos de pérdida ambigua. La primera es cuando la persona está físicamente ausente pero presente de manera psicológica, como ocurre con las desapariciones. La segunda es cuando la persona está físicamente presente pero psicológicamente ausente, como en el Alzheimer avanzado.</p>

          <p>En el caso de una desaparición, la persona que amas no está pero tampoco puedes declararla muerta. El cerebro no sabe cómo procesar algo que no tiene conclusión. Y esa ambigüedad es, en sí misma, una forma de trauma.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué este duelo es tan diferente</h2>

          <p>El duelo por desaparición tiene características que lo hacen especialmente difícil de transitar.</p>

          <ul>
            <li><strong>No hay permiso social para llorar.</strong> Sin confirmación de muerte, muchas personas cercanas no saben cómo acompañarte. Algunos esperan que sigas buscando. Otros esperan que te resignes. Tú no sabes qué se espera de ti.</li>
            <li><strong>La esperanza y el dolor coexisten.</strong> Cada día que pasa sin noticias es un día en que la esperanza se mezcla con el terror. Esa tensión constante agota el sistema nervioso.</li>
            <li><strong>No puedes hacer el ritual de despedida.</strong> Los rituales funerarios existen porque ayudan al cerebro a procesar la pérdida. Sin ellos, el duelo no encuentra su forma de expresarse.</li>
            <li><strong>La vida queda en pausa.</strong> Es difícil tomar decisiones importantes cuando alguien que amas podría regresar. La vida sigue pero tú no puedes avanzar completamente.</li>
            <li><strong>El sistema te exige que funciones.</strong> Tienes que trabajar, cuidar a otros, hacer trámites, mientras por dentro estás destrozado.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que puedes estar sintiendo</h2>

          <p>Las emociones en un duelo por desaparición son intensas y a veces contradictorias. Todas son válidas.</p>

          <ul>
            <li><strong>Angustia permanente.</strong> Una tensión en el cuerpo que no cede. Una alerta constante que no sabe cómo apagarse.</li>
            <li><strong>Culpa.</strong> Qué podría haber hecho diferente. Si hubiera dicho algo. Si hubiera actuado antes.</li>
            <li><strong>Enojo.</strong> Con la persona que desapareció, con las autoridades, con la situación, con el silencio.</li>
            <li><strong>Vergüenza.</strong> Especialmente cuando la desaparición está ligada a situaciones estigmatizadas.</li>
            <li><strong>Agotamiento profundo.</strong> Buscar, esperar y no saber cansa de una manera que es difícil de describir.</li>
            <li><strong>Momentos de esperanza seguidos de colapso.</strong> Cuando hay una pista o una noticia, la esperanza sube. Cuando no lleva a nada, la caída es brutal.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El cuerpo en el duelo congelado</h2>

          <p>Llamamos duelo congelado a este estado de suspensión porque el proceso de duelo no puede avanzar. El cerebro queda atrapado en un estado de alerta que no encuentra resolución.</p>

          <p>Esto tiene consecuencias físicas reales: insomnio, tensión muscular crónica, problemas digestivos, dolores de cabeza, fatiga extrema. El cuerpo carga lo que la mente no puede procesar.</p>

          <p>No es debilidad. Es la respuesta biológica a una situación que no tiene resolución.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Vivir en la incertidumbre</h2>

          <p>Una de las habilidades más difíciles que se les pide a los familiares de personas desaparecidas es aprender a vivir con la incertidumbre. No rendirse, pero tampoco paralizarse. Seguir buscando, pero también seguir viviendo.</p>

          <p>Esto no significa olvidar. No significa rendirse. Significa encontrar una manera de cargar la ausencia sin que la ausencia lo sea todo.</p>

          <p>Puedes seguir buscando y también cuidarte. Puedes honrar a quien amas y también atender tu propia vida. Estas dos cosas no se contradicen.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que puede ayudar</h2>

          <ul>
            <li><strong>Encontrar comunidad.</strong> Conectar con otras personas que han vivido situaciones similares puede romper el aislamiento y validar la experiencia.</li>
            <li><strong>Crear rituales propios.</strong> Sin un funeral, puedes crear tus propias formas de honrar y mantener presente a la persona que buscas: una foto, un lugar, una fecha.</li>
            <li><strong>Acompañamiento terapéutico especializado.</strong> Un profesional que entienda la pérdida ambigua puede ayudarte a navegar este terreno sin pedir que te resignes ni que olvides.</li>
            <li><strong>Cuidar el cuerpo.</strong> El descanso, la alimentación y el movimiento son actos de resistencia cuando el duelo quiere consumirlo todo.</li>
            <li><strong>Permitir las emociones.</strong> Llorar no es rendirse. El enojo no es traición. Sentir no es abandonar la búsqueda.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tu dolor es válido aunque no haya respuestas</h2>

          <p>No necesitas un cuerpo para tener derecho a tu duelo. No necesitas certeza para necesitar apoyo. No necesitas saber el final de la historia para merecer acompañamiento.</p>

          <p>El amor que sientes por quien desapareció es real. La pérdida que vives es real. El dolor que cargas es real.</p>

          <p>Y merece ser atendido con la misma seriedad y ternura que cualquier otro duelo.</p>

          <p className="italic text-black/60 mt-8">No saber dónde está la persona que amas es una de las experiencias más dolorosas que existen. No tienes que atravesarla solo.</p>
        </div>
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si estás viviendo el duelo por una persona desaparecida, estoy aquí para acompañarte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Agenda tu primera consulta gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
