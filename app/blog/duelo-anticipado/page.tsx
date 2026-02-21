'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloAnticipado() {
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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Duelo anticipado: qué es y cómo manejarlo
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-anticipado.webp"
            alt="Duelo anticipado - Acompañamiento antes de la pérdida."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            Hay un tipo de dolor del que casi nadie habla. Es el dolor de perder a alguien... que todavía está aquí.
          </p>

          <p>
            Se llama <strong>duelo anticipado</strong>. Y si lo estás viviendo, quiero que sepas que lo que sientes es real, es válido, y no estás solo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué es el duelo anticipado?</h2>

          <p>
            El duelo anticipado es el proceso emocional que vivimos cuando sabemos que vamos a perder a alguien, pero esa pérdida todavía no ha ocurrido.
          </p>

          <p>Se da principalmente en dos situaciones:</p>

          <p>
            <strong>1. Cuando un ser querido tiene una enfermedad terminal o degenerativa.</strong> Los médicos han dado un pronóstico. Sabes que el tiempo es limitado. Y aunque esa persona sigue aquí, una parte de ti ya está empezando a despedirse.
          </p>

          <p>
            <strong>2. Cuando alguien desaparece.</strong> Ya sea por circunstancias violentas o desconocidas. No hay certeza de lo que pasó, pero la posibilidad de que esa persona haya muerto está presente todo el tiempo.
          </p>

          <p>
            En ambos casos, vives en un lugar extraño: entre la presencia y la ausencia. Entre la esperanza y la preparación para lo inevitable.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que nadie te dice sobre el duelo anticipado</h2>

          <p>
            Cuando alguien muere, el mundo entiende tu dolor. Te dan el pésame. Te preguntan cómo estás. Hay rituales, fechas, espacios para llorar.
          </p>

          <p>
            Pero cuando alguien todavía está vivo, el duelo que sientes puede parecer... inapropiado.
          </p>

          <p>
            <em>&quot;¿Por qué estás triste si todavía está aquí?&quot;</em><br />
            <em>&quot;Deberías aprovechar el tiempo en vez de sufrir.&quot;</em><br />
            <em>&quot;No pienses en eso.&quot;</em>
          </p>

          <p>
            Pero tú <em>no puedes</em> no pensarlo. Porque lo vives todos los días. Ves el deterioro. Notas cómo la persona que amas va cambiando, va desapareciendo poco a poco. Y cada pequeña pérdida —una conversación que ya no pueden tener, un paseo que ya no es posible, un recuerdo que ya no comparten— es un pequeño duelo en sí mismo.
          </p>

          <p>El duelo anticipado es real. Y merece ser reconocido.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las emociones que puedes estar sintiendo</h2>

          <p>El duelo anticipado trae consigo una mezcla de emociones que pueden sentirse contradictorias y confusas:</p>

          <p><strong>Tristeza profunda.</strong> Por lo que ya no es y por lo que sabes que viene.</p>

          <p><strong>Miedo.</strong> A lo desconocido. Al momento final. A cómo vas a seguir después.</p>

          <p><strong>Ansiedad.</strong> Esa sensación constante de que algo terrible está por pasar.</p>

          <p><strong>Agotamiento.</strong> El cuidado físico y emocional que implica acompañar a alguien en este proceso es enorme.</p>

          <p><strong>Culpa.</strong> Por sentir alivio en algunos momentos. Por desear que termine. Por querer tu vida de vuelta.</p>

          <p><strong>Alivio.</strong> Y sí, el alivio también puede aparecer. Especialmente cuando ves que tu ser querido está sufriendo. Desear que ese sufrimiento termine no te hace mala persona. Te hace humano.</p>

          <p>Todas estas emociones pueden coexistir. Y todas son válidas.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo manejar el duelo anticipado</h2>

          <p>No hay una fórmula mágica. Pero hay algunas cosas que pueden ayudarte:</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">1. Permítete sentir</h3>
          <p>No tienes que ser fuerte todo el tiempo. No tienes que &quot;aguantar&quot;. Date permiso para llorar, para enojarte, para sentir miedo. Tus emociones necesitan espacio.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">2. Habla de lo que sientes</h3>
          <p>Busca a alguien de confianza con quien puedas compartir lo que estás viviendo. Revelando lo que sientes, puedes ver que otros también lo están experimentando, y esto sirve para recibir y dar apoyo mutuo.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">3. Vive el presente</h3>
          <p>En la medida de lo posible, trata de estar presente con tu ser querido. Conversa. Escucha. Toma su mano. Dile lo que necesitas decirle. Estos momentos son los que te van a sostener después.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">4. Cierra círculos</h3>
          <p>Si hay algo que necesitas decir, perdonar o pedir perdón... este es el momento. No todos tienen la oportunidad de despedirse. Tú la tienes. Úsala.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">5. Cuida de ti</h3>
          <p>El duelo anticipado puede consumir toda tu energía. Pero no puedes cuidar a otros si tú te desmoronas. Come. Duerme. Sal a caminar aunque sea cinco minutos. Pide ayuda cuando la necesites.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">6. Busca apoyo profesional</h3>
          <p>Un profesional especializado en duelo puede ayudarte a procesar lo que estás viviendo. No tienes que hacerlo solo. Y pedir ayuda no es debilidad. Es sabiduría.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo anticipado no elimina el dolor después</h2>

          <p>
            Algo importante que debes saber: prepararte emocionalmente para la pérdida no significa que no te va a doler cuando suceda.
          </p>

          <p>
            El duelo anticipado puede ayudarte a procesar algunas cosas, a despedirte, a cerrar ciclos. Pero cuando la muerte finalmente llega, el dolor estará ahí. Porque el amor estará ahí. Y eso está bien.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión final</h2>

          <p>
            Una esposa que acompañó a su esposo durante su enfermedad describió lo que sintió cuando le avisaron que él entraría a cuidados terminales con dos palabras: <em>&quot;alivio triste&quot;</em>.
          </p>

          <p>
            Alivio porque el sufrimiento estaba por terminar. Tristeza porque el adiós estaba cerca. Esas dos palabras capturan perfectamente lo que muchas personas sienten en el duelo anticipado. Emociones que parecen opuestas, pero que conviven en el mismo corazón.
          </p>

          <p>
            Si estás viviendo esto, quiero que sepas: no hay nada malo en ti. Estás haciendo algo increíblemente difícil. Y lo estás haciendo con amor. Eso es todo lo que importa.
          </p>

          <p className="italic text-black/60 mt-8">
            En ColorMe creo que el duelo anticipado merece tanto reconocimiento como cualquier otro duelo. Estoy aquí para acompañarte.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás atravesando un duelo anticipado y necesitas un espacio seguro para procesar lo que sientes, puedo acompañarte.
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
