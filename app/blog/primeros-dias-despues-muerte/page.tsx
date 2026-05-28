'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function PrimerosDiasDespuesMuertePage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Los primeros días después de la muerte de un ser querido
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/primeros-dias-despues-muerte.jpeg"
            alt="Los primeros días después de la muerte de un ser querido"
            width={300}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed italic">
            Sobrevivir cuando el mundo se derrumba.
          </p>

          <p>
            Acaba de pasar. O pasó hace unas horas. O hace unos días que se sienten como años.
          </p>

          <p>
            El mundo sigue girando, la gente sigue caminando por la calle, pero para ti el tiempo se detuvo. Estás en shock. No sabes qué hacer. No sabes cómo seguir.
          </p>

          <p>
            Este texto es para ti, para estos primeros días que nadie te preparó para enfrentar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo primero que necesitas saber</h2>

          <p>
            Nada de lo que estás sintiendo está mal.
          </p>

          <p>
            Si estás llorando sin parar, está bien. Si no puedes llorar, también está bien. Si sientes rabia, está bien. Si sientes alivio, está bien. Si no sientes nada, como si estuvieras anestesiado, también está bien.
          </p>

          <p>
            El shock inicial es un mecanismo de protección. Tu cerebro está procesando algo que es demasiado grande para asimilar de golpe. Por eso puede que sientas irrealidad, como si esto no pudiera estar pasando.
          </p>

          <p>
            Según la Asociación Americana de Psicología, las reacciones de shock tras una pérdida pueden incluir entumecimiento emocional, dificultad para concentrarse, sensación de irrealidad y síntomas físicos como mareos o náuseas. Todo esto es la respuesta normal de un sistema nervioso sobrepasado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que puede estar pasándote ahora mismo</h2>

          <p>
            <strong>Incredulidad.</strong> Tu mente todavía no acepta que esto es real. Puedes encontrarte esperando que la persona entre por la puerta, que suene su llamada, que todo haya sido un error.
          </p>

          <p>
            <strong>Desorientación.</strong> No sabes qué día es. Se te olvidan cosas básicas. No recuerdas si comiste. El tiempo se distorsiona.
          </p>

          <p>
            <strong>Sensaciones físicas.</strong> Opresión en el pecho. Dificultad para respirar. Temblores. Náuseas. Debilidad en las piernas. El duelo golpea el cuerpo tanto como la mente.
          </p>

          <p>
            <strong>Oleadas de emoción.</strong> Un momento estás relativamente tranquilo, al siguiente te derrumbas. Estas oleadas van y vienen sin previo aviso.
          </p>

          <p>
            <strong>Pensamientos repetitivos.</strong> Tu mente puede estar reproduciendo los últimos momentos, las últimas palabras, lo que pudiste haber hecho diferente. Esto es normal, aunque agotador.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las decisiones que no puedes evitar</h2>

          <p>
            Los primeros días están llenos de decisiones prácticas que hay que tomar mientras tu mente apenas funciona.
          </p>

          <p>
            El certificado de defunción. El funeral o ceremonia. Si habrá velorio. Qué hacer con el cuerpo. Quién avisa a quién. Los trámites legales.
          </p>

          <p>
            <strong>No tienes que hacer todo solo.</strong> Pide ayuda. Deja que otros se encarguen de lo que puedan. Delega. No es momento de ser fuerte ni de demostrar nada.
          </p>

          <p>
            <strong>No tienes que decidir todo ahora.</strong> Algunas decisiones pueden esperar. Si no estás seguro de algo, date tiempo. Lo que no sea urgente puede posponerse.
          </p>

          <p>
            <strong>Está bien si te equivocas.</strong> Si después sientes que algo del funeral no fue como debía ser, si olvidaste avisar a alguien, si tomaste una decisión que ahora cuestionas. Estás en shock. Hiciste lo que pudiste.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo sobrevivir estos primeros días</h2>

          <p>
            No hay fórmulas mágicas, pero hay cosas que pueden ayudarte a atravesar este momento.
          </p>

          <p>
            <strong>Come aunque no tengas hambre.</strong> Tu cuerpo necesita combustible para sostener el estrés que está procesando. No tiene que ser mucho. Algo pequeño cada pocas horas.
          </p>

          <p>
            <strong>Intenta descansar aunque no puedas dormir.</strong> Acuéstate. Cierra los ojos. Aunque no duermas, el cuerpo necesita pausa. Si el insomnio es muy intenso, considera pedir ayuda médica temporal.
          </p>

          <p>
            <strong>Deja que alguien te cuide.</strong> Este no es momento de rechazar ayuda. Si alguien ofrece traerte comida, quedarse contigo, manejar por ti, acepta. No estás siendo débil. Estás siendo humano.
          </p>

          <p>
            <strong>Toma las cosas de a una.</strong> No pienses en mañana ni en la semana que viene. Solo piensa en las próximas horas. A veces, en los próximos minutos.
          </p>

          <p>
            <strong>Permite el llanto cuando venga.</strong> No lo contengas. Las lágrimas son parte del proceso. Si necesitas llorar, llora. Si necesitas gritar, grita. Si necesitas estar en silencio, está bien.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que la gente te va a decir</h2>

          <p>
            En estos días vas a escuchar muchas cosas. Algunas te van a ayudar. Otras te van a lastimar aunque vengan con buena intención.
          </p>

          <p>
            "Está en un mejor lugar." "Al menos ya no sufre." "Tienes que ser fuerte." "El tiempo lo cura todo." "Ya está descansando."
          </p>

          <p>
            Estas frases pueden sentirse vacías o incluso dolorosas. No tienes que responder con gratitud si no la sientes. Está bien simplemente asentir y cambiar de tema.
          </p>

          <p>
            Lo que más ayuda en estos días no son las palabras. Es la presencia silenciosa. Alguien que se siente contigo sin necesidad de decir nada. Alguien que te abrace sin explicaciones. Alguien que simplemente esté.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Sobre los rituales de despedida</h2>

          <p>
            El funeral, el velorio, la cremación o el entierro pueden sentirse abrumadores. Pero también pueden ser importantes.
          </p>

          <p>
            Estos rituales existen porque marcan un paso. Ayudan a hacer real lo que la mente todavía no acepta. Permiten que la comunidad se reúna para sostener el dolor. Ofrecen una estructura cuando todo se siente caótico.
          </p>

          <p>
            Si puedes, participa en ellos. Si es demasiado, está bien retirarte cuando lo necesites. No hay reglas sobre cuánto tiempo debes quedarte, cuánto debes llorar o cómo debes actuar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los días que siguen al funeral</h2>

          <p>
            Después de la ceremonia, cuando todos se van y la casa queda en silencio, puede venir un momento particularmente difícil.
          </p>

          <p>
            La adrenalina de los primeros días baja. La realidad empieza a asentarse. El apoyo que llegó al principio comienza a disminuir porque la gente vuelve a sus vidas.
          </p>

          <p>
            Y tú te quedas con el vacío.
          </p>

          <p>
            Este es un momento delicado. No te aísles completamente. Busca al menos una persona con quien puedas hablar. Aunque no quieras ver a nadie, el aislamiento total puede complicar el duelo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Señales de que necesitas ayuda</h2>

          <p>
            El duelo es doloroso, pero hay momentos en que se necesita intervención profesional.
          </p>

          <p>Si tienes pensamientos de hacerte daño.</p>
          <p>Si sientes que no puedes seguir viviendo sin la persona que murió.</p>
          <p>Si estás usando alcohol o sustancias para sobrellevar el dolor de manera que te preocupa.</p>
          <p>Si no puedes comer nada en absoluto durante varios días.</p>
          <p>Si los síntomas físicos son muy intensos: dolor en el pecho, dificultad severa para respirar, mareos constantes.</p>

          <p>
            En cualquiera de estos casos, busca ayuda profesional. Llama a un médico, ve a urgencias, contacta a una línea de crisis. No tienes que enfrentar esto solo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión</h2>

          <p>
            Nadie está preparado para los primeros días después de una muerte. Nadie sabe cómo hacerlo bien porque no hay una forma correcta.
          </p>

          <p>
            Lo único que tienes que hacer ahora es respirar y seguir. No tienes que entender lo que pasó. No tienes que encontrarle sentido. No tienes que estar bien.
          </p>

          <p>
            Solo tienes que seguir existiendo, un momento a la vez.
          </p>

          <p>
            Y si hoy sobreviviste, hiciste suficiente.
          </p>

          <p className="italic text-black/60 mt-8">
            Estos días van a pasar. El dolor va a cambiar. Pero ahora, solo respira.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda una sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás atravesando estos primeros días y necesitas acompañamiento, estoy aquí para ti.
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

        <RelatedArticles currentSlug="primeros-dias-despues-muerte" category="tanatologia" />
      </div>
    </article>
  )
}
