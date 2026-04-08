'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloSuperarPerdida() {
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
            Cómo superar la pérdida de un ser querido: 12 claves prácticas
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/como-superar-perdida.webp"
            alt="Cómo superar la pérdida de un ser querido - Herramientas para el duelo."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            Perder a alguien que amas es una de las experiencias más difíciles de la vida. No hay forma de evitar el dolor, no hay atajos, no hay fórmulas mágicas. Pero sí hay cosas que pueden ayudarte a transitar este camino de una forma más amable contigo mismo.
          </p>

          <p>
            Estas 12 claves no van a &quot;quitarte&quot; el dolor. Pero pueden darte herramientas concretas para los días difíciles, momentos de calma en medio de la tormenta, y una guía para cuando no sepas qué hacer con lo que sientes.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">1. Permítete sentir lo que sientes</h2>

          <p>
            El duelo trae consigo una mezcla de emociones: tristeza, enojo, culpa, alivio, confusión, vacío. Todas son válidas. Todas son parte del proceso.
          </p>

          <p>
            No intentes controlar lo que &quot;deberías&quot; sentir. No te juzgues por estar enojado con quien murió, o por sentir alivio si la enfermedad fue larga. Tus emociones no son buenas ni malas. Son tu forma de procesar lo que pasó.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">2. No te apresures</h2>

          <p>
            El mundo va a esperar que &quot;sigas adelante&quot; más rápido de lo que es posible. Van a decirte que ya pasó suficiente tiempo, que tienes que ser fuerte, que la vida continúa.
          </p>

          <p>
            Pero el duelo no tiene un calendario. No hay una fecha en la que &quot;deberías&quot; estar mejor. Date el tiempo que necesites. Tu proceso es único, y solo tú sabes cuánto tiempo necesitas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">3. Cuida tu cuerpo</h2>

          <p>
            El duelo es agotador. Física y emocionalmente. Tu cuerpo necesita cuidados básicos aunque no tengas ganas de dárselos.
          </p>

          <p>
            <strong>Come algo</strong>, aunque no tengas hambre. <strong>Duerme</strong>, aunque cueste. <strong>Sal a caminar</strong>, aunque sea cinco minutos. <strong>Toma agua.</strong> Estas pequeñas acciones no van a quitarte el dolor, pero van a darte la energía mínima para seguir.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">4. Habla de tu pérdida</h2>

          <p>
            Busca a alguien de confianza con quien puedas hablar de lo que sientes. Puede ser un amigo, un familiar, un terapeuta, o un grupo de apoyo.
          </p>

          <p>
            Hablar de tu ser querido —de quién era, de lo que significaba para ti, de cómo te sientes ahora— es una forma de procesar la pérdida. No te guardes todo adentro.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">5. Está bien no estar bien</h2>

          <p>
            No tienes que ser fuerte todo el tiempo. No tienes que &quot;aguantar&quot;. No tienes que tener respuestas para los demás.
          </p>

          <p>
            Está bien llorar. Está bien decir &quot;no estoy bien&quot;. Está bien cancelar planes porque no tienes energía. Date permiso de no estar bien.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">6. Crea rituales de conexión</h2>

          <p>
            Aunque la persona ya no está físicamente, tu relación con ella continúa. Los rituales pueden ayudarte a mantener esa conexión de una forma significativa.
          </p>

          <p>
            Puede ser visitar un lugar especial, encender una vela, escribirle una carta, mirar fotos, cocinar su receta favorita. Encuentra formas de honrar su memoria que tengan sentido para ti.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">7. Acepta la ayuda que te ofrecen</h2>

          <p>
            Cuando alguien pregunta &quot;¿en qué te puedo ayudar?&quot;, es fácil decir &quot;estoy bien, gracias&quot;. Pero la verdad es que no tienes que hacerlo solo.
          </p>

          <p>
            Si alguien te ofrece traerte comida, acompañarte, ayudarte con trámites... déjalo. Aceptar ayuda no es debilidad. Es reconocer que los seres humanos necesitamos de otros, especialmente en momentos difíciles.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">8. Sé paciente con tu memoria</h2>

          <p>
            El duelo afecta la concentración y la memoria. Es normal olvidar cosas, perder el hilo de las conversaciones, no poder enfocarte en el trabajo.
          </p>

          <p>
            No te exijas funcionar al 100%. Si puedes, delega responsabilidades. Haz listas. Pon recordatorios. Y no te frustres cuando tu cerebro no coopere. Está procesando algo muy grande.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">9. Prepárate para las oleadas</h2>

          <p>
            El duelo no es lineal. No es un camino recto que va mejorando cada día. Es más bien como el mar: a veces está tranquilo, y de pronto viene una ola que te tumba.
          </p>

          <p>
            Puedes estar bien durante días y de pronto escuchar una canción, ver una foto, o simplemente despertar sintiendo que el dolor es tan intenso como el primer día. Esto es normal. Las oleadas van a seguir viniendo. Pero con el tiempo, serán menos frecuentes y menos intensas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">10. No evites los recuerdos</h2>

          <p>
            Es tentador evitar todo lo que te recuerde a esa persona porque duele. Pero evitar los recuerdos puede hacer más difícil el proceso de sanación.
          </p>

          <p>
            Cuando estés listo, mira las fotos. Visita los lugares. Habla de los recuerdos. Llorar mientras recuerdas no significa que estés peor. Significa que estás procesando.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">11. Encuentra pequeños momentos de paz</h2>

          <p>
            En medio del dolor, busca pequeños momentos de calma. No tienes que &quot;sentirte mejor&quot; para encontrar paz momentánea.
          </p>

          <p>
            Puede ser una taza de té caliente, unos minutos al sol, un baño largo, un paseo con tu mascota. Estos momentos no significan que estés &quot;olvidando&quot; o que el dolor haya terminado. Son pausas necesarias que tu mente y tu cuerpo necesitan.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">12. Busca ayuda profesional si la necesitas</h2>

          <p>
            El duelo es un proceso natural, pero eso no significa que tengas que atravesarlo solo. Un profesional especializado puede acompañarte, darte herramientas y ayudarte a procesar lo que sientes.
          </p>

          <p>
            Considera buscar ayuda si:
          </p>

          <p>
            <strong>Sientes que no puedes funcionar.</strong> Si el dolor te impide realizar actividades básicas de la vida diaria por un tiempo prolongado.<br />
            <strong>Tienes pensamientos de hacerte daño.</strong> Si sientes que no quieres seguir viviendo, busca ayuda inmediata.<br />
            <strong>Te sientes completamente solo.</strong> Si no tienes a nadie con quien hablar de lo que sientes.<br />
            <strong>Algo no se siente bien.</strong> Si tu intuición te dice que necesitas apoyo, hazle caso.
          </p>

          <p>
            Pedir ayuda no es debilidad. Es sabiduría. Es reconocer que algunas cargas son demasiado pesadas para cargarlas solo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Un mensaje final</h2>

          <p>
            Superar la pérdida de un ser querido no significa olvidarlo. No significa dejar de amarlo. No significa que el dolor desaparezca completamente.
          </p>

          <p>
            Significa aprender a vivir con la ausencia. Encontrar una nueva forma de relacionarte con su memoria. Descubrir que puedes sentir dolor y también momentos de paz. Que puedes extrañarlo profundamente y también seguir adelante.
          </p>

          <p>
            El amor que sientes por esa persona no desaparece cuando muere. Se transforma. Y esa transformación, aunque dolorosa, puede llevarte a lugares de profunda conexión, significado y eventualmente, sanación.
          </p>

          <p className="italic text-black/60 mt-8">
            En ColorMe acompaño a personas que están atravesando el duelo. Si necesitas un espacio seguro para procesar tu pérdida, estoy aquí para ti.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás atravesando un duelo y necesitas acompañamiento, estoy aquí para caminar contigo.
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
