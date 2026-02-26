'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloBloqueoEmocional() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>
        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">No siento nada: cuando las emociones se apagan</h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/bloqueo-emocional-no-siento-nada.webp" alt="Bloqueo emocional, anestesia emocional, no sentir nada, embotamiento afectivo, emociones bloqueadas." width={1200} height={675} priority className="w-full h-auto" />
        </div>
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">Para quienes buscan desesperadamente sentir algo, lo que sea.</p>

          <p>No es que no te importe. No es que seas frio. No es que no quieras.</p>

          <p>Es que por mas que lo intentas, no logras sentir.</p>

          <p>Ni alegria, ni tristeza, ni enojo, ni amor. Solo un vacio extrano, una especie de anestesia que te hace observar tu propia vida como si fuera una pelicula de otra persona.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La anestesia emocional</h2>

          <p>Hay un nombre para lo que te pasa: bloqueo emocional. Tambien se le llama embotamiento afectivo o anestesia emocional.</p>

          <p>No es lo mismo que la indiferencia. No es que no te interese nada. Es que algo en tu interior se desconecto de la capacidad de sentir.</p>

          <p>Este fenomeno funciona como un mecanismo de defensa del cerebro. Cuando el dolor emocional es demasiado intenso o prolongado, el sistema nervioso puede responder apagando temporalmente la capacidad de sentir. Es como si el cerebro dijera: esto es demasiado, mejor no sentir nada.</p>

          <p>El problema es que este mecanismo no distingue entre emociones. Al bloquear el dolor, tambien bloquea la alegria, el amor, la conexion.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como se siente no sentir nada</h2>

          <p>Las personas que experimentan bloqueo emocional describen sensaciones particulares.</p>

          <ul>
            <li><strong>Ver la vida como espectador.</strong> Como si estuvieras detras de un vidrio, observando todo pero sin participar realmente. Los dias pasan y tu simplemente los miras pasar.</li>
            <li><strong>No poder llorar aunque quieras.</strong> Sabes que deberias sentir tristeza, que la situacion lo amerita, pero las lagrimas no salen. Hay algo seco por dentro que no responde.</li>
            <li><strong>No emocionarte con lo que antes te emocionaba.</strong> La musica que te conmovia ahora suena vacia. Las personas que amas se sienten distantes aunque esten frente a ti. Los logros no generan satisfaccion.</li>
            <li><strong>Sentirte desconectado de tu propio cuerpo.</strong> Como si habitaras un cuerpo que no es del todo tuyo. Los abrazos no se sienten. El placer fisico se vuelve mecanico.</li>
            <li><strong>Cansancio inexplicable.</strong> Aunque no haces nada, estas agotado. Mantener ese muro emocional consume una cantidad enorme de energia psiquica.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por que se bloquean las emociones</h2>

          <p>El bloqueo emocional no aparece sin razon. Es una respuesta a algo que el sistema nervioso percibio como amenazante.</p>

          <ul>
            <li><strong>Experiencias traumaticas.</strong> Cuando vivimos algo que nos sobrepasa, ya sea un evento unico o un estres prolongado, el cerebro puede activar este mecanismo de proteccion.</li>
            <li><strong>Duelo no procesado.</strong> La perdida de un ser querido, especialmente si fue subita o traumatica, puede generar un bloqueo.</li>
            <li><strong>Acumulacion de emociones reprimidas.</strong> Si durante anos aprendiste a no mostrar lo que sientes, eventualmente el sistema se satura.</li>
            <li><strong>Estres cronico.</strong> Vivir bajo presion constante agota los recursos emocionales. El cuerpo entra en modo supervivencia.</li>
            <li><strong>Mensajes de la infancia.</strong> Si creciste escuchando que llorar era de debiles, que el enojo era malo, tu cerebro aprendio a protegerte apagando las emociones.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El costo del bloqueo emocional</h2>

          <p>Aunque el bloqueo puede sentirse como alivio temporal, tiene consecuencias importantes.</p>

          <ul>
            <li><strong>Las relaciones se deterioran.</strong> Sin acceso a las emociones, es dificil conectar genuinamente con otros.</li>
            <li><strong>El cuerpo paga el precio.</strong> Las emociones no expresadas se manifiestan como sintomas fisicos: dolores de cabeza, problemas digestivos, tension muscular, fatiga cronica.</li>
            <li><strong>Las decisiones se complican.</strong> Las emociones son informacion. Sin acceso a ellas, es dificil saber que quieres y que necesitas.</li>
            <li><strong>La depresion puede aparecer.</strong> El embotamiento prolongado puede evolucionar hacia estados depresivos.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Esto no significa que seas insensible</h2>

          <p>Muchas personas con bloqueo emocional se juzgan duramente. Soy frio. No tengo corazon. Algo esta mal conmigo.</p>

          <p>Pero el bloqueo emocional es lo opuesto a la insensibilidad. Generalmente ocurre en personas que sienten demasiado, no demasiado poco. El sistema se apago precisamente porque habia demasiada sensibilidad, demasiado dolor, demasiada intensidad.</p>

          <p>No eres insensible. Eres alguien cuyo sistema de proteccion se activo con fuerza.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como empezar a reconectarte</h2>

          <p>El proceso de desbloqueo no es inmediato. Requiere paciencia y, frecuentemente, acompanamiento profesional.</p>

          <ul>
            <li><strong>Reconoce que esto esta pasando.</strong> El primer paso es nombrar lo que sientes, o lo que no sientes.</li>
            <li><strong>No te fuerces a sentir.</strong> Presionarte para experimentar emociones que no aparecen solo genera mas frustracion.</li>
            <li><strong>Conecta con el cuerpo.</strong> Las emociones tienen manifestaciones fisicas. El movimiento, la respiracion consciente, el contacto con la naturaleza pueden ayudar.</li>
            <li><strong>Crea espacios seguros.</strong> El sistema nervioso necesita percibir seguridad para soltar sus defensas.</li>
            <li><strong>Permite las emociones pequenas.</strong> Un momento de ternura, un instante de irritacion, una chispa de interes. Esas pequenas senales son el comienzo.</li>
            <li><strong>Considera apoyo profesional.</strong> Un terapeuta especializado puede ayudarte a entender que activo el bloqueo.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El arte como puerta de entrada</h2>

          <p>Cuando las palabras no alcanzan y las emociones estan bloqueadas, el arte puede ser un camino alternativo.</p>

          <p>Pintar sin objetivo, solo dejando que los colores y las formas emerjan. Escribir sin estructura, solo vaciando lo que hay dentro. Escuchar musica que alguna vez te conmovio. Crear algo con las manos.</p>

          <p>Estas actividades pueden atravesar las defensas conscientes y permitir que algo empiece a moverse.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las emociones van a volver</h2>

          <p>El bloqueo emocional no es permanente. Con el tiempo, con seguridad, con trabajo consciente o terapeutico, las emociones van volviendo.</p>

          <p>Pero lo que no trabajas, lo que no sacas, se queda dentro de ti. El bloqueo emocional prolongado puede derivar en:</p>

          <ul>
            <li>Ansiedad cronica.</li>
            <li>Depresion.</li>
            <li>Adicciones.</li>
            <li>Trastornos del sueno.</li>
            <li>Dolor cronico sin causa medica aparente.</li>
          </ul>

          <p>El dolor no tiene que quedarse atascado. Cuando las emociones vuelvan, puede que lleguen con intensidad. Permite que eso suceda. Cada emocion que dejas pasar es evidencia de que el bloqueo se esta levantando.</p>

          <p>No poder sentir es una forma de sufrimiento silencioso que pocos entienden.</p>

          <p>Tu sistema hizo lo que pudo con lo que tenia. Te protecio de la mejor manera que supo. Ahora, cuando estes listo, puedes empezar a abrirte de nuevo.</p>

          <p>Las emociones volveran. Y con ellas, la vida.</p>

          <p className="italic text-black/60 mt-8">No sentir nada tambien es un tipo de dolor. Y merece atencion.</p>
        </div>
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si sientes que tus emociones estan bloqueadas y necesitas acompanamiento, estoy aqui para ti.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Agenda tu primera consulta gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
