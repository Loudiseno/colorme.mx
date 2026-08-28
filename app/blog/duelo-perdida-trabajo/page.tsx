'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function DueloPerdidaTrabajoPage() {
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
            El duelo por perder tu trabajo: más que un despido
          </h1>
          <p className="text-black/60 italic">Por Lourdes Pérez | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-por-perdida-empleo.jpeg"
            alt="Duelo por pérdida de trabajo"
            width={300}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed italic">
            Porque no solo perdiste un empleo. Perdiste mucho más.
          </p>

          <p>
            El correo llegó. O te llamaron a la oficina. O simplemente un día la empresa cerró.
          </p>

          <p>
            Y de pronto, lo que eras durante ocho horas al día, cinco días a la semana, ya no existe.
          </p>

          <p>
            La gente dice "ya encontrarás otro trabajo." Como si fuera solo eso. Como si no hubieran entendido nada.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué perder el trabajo duele tanto</h2>

          <p>
            Perder el empleo no es solo perder un ingreso. Es perder una parte de tu identidad.
          </p>

          <p>
            Durante años respondiste "¿a qué te dedicas?" con una respuesta que te definía. "Soy contador." "Soy maestra." "Trabajo en marketing." Esa respuesta era parte de quién eres.
          </p>

          <p>
            El trabajo representa mucho más que sustento económico. Es fuente de estructura, propósito, conexión social e identidad personal. Perderlo activa un proceso de duelo comparable al de otras pérdidas significativas.
          </p>

          <p>
            No estás exagerando si sientes que esto duele profundamente. Estás respondiendo de manera natural a una pérdida real.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que realmente perdiste</h2>

          <p>Cuando perdiste tu trabajo, perdiste múltiples cosas al mismo tiempo.</p>

          <p>
            <strong>Estructura.</strong> Tus días tenían forma. Sabías a qué hora levantarte, qué hacer, dónde estar. Ahora el tiempo se siente amorfo, sin límites claros.
          </p>

          <p>
            <strong>Propósito.</strong> Contribuías a algo. Resolvías problemas. Producías algo. Ahora puedes sentirte sin utilidad, aunque racionalmente sepas que tu valor no depende de un empleo.
          </p>

          <p>
            <strong>Conexión social.</strong> Tus compañeros de trabajo eran también tu comunidad cotidiana. Las conversaciones en el almuerzo, los mensajes del equipo, las relaciones que se construyeron. Todo eso se terminó de golpe.
          </p>

          <p>
            <strong>Seguridad económica.</strong> La incertidumbre de no saber cómo pagarás las cuentas añade una capa de ansiedad a todo lo demás.
          </p>

          <p>
            <strong>Identidad profesional.</strong> Si dedicaste años a construirte como profesional en un área, el despido puede sentirse como un cuestionamiento de todo lo que eres.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las emociones que aparecen</h2>

          <p>El duelo laboral atraviesa emociones similares a otros duelos.</p>

          <p>
            <strong>Shock e incredulidad.</strong> "Esto no puede estar pasando." Los primeros días pueden sentirse irreales.
          </p>

          <p>
            <strong>Enojo.</strong> Con la empresa, con el jefe, con la economía, contigo mismo. El enojo es una respuesta natural a la injusticia percibida.
          </p>

          <p>
            <strong>Vergüenza.</strong> Aunque no hayas hecho nada mal, puedes sentir vergüenza de decirle a otros que perdiste el trabajo. La cultura nos enseñó que el desempleo es fracaso personal, aunque no lo sea.
          </p>

          <p>
            <strong>Miedo.</strong> Al futuro incierto, a no encontrar otro trabajo, a perder estabilidad.
          </p>

          <p>
            <strong>Tristeza.</strong> Por lo que terminó, por las relaciones que ya no serán iguales, por la versión de ti que existía en ese trabajo.
          </p>

          <p>
            Un estudio de la Universidad de Stirling en Escocia encontró que la pérdida de empleo puede tener efectos psicológicos comparables a los del divorcio o la muerte de un ser querido, especialmente cuando la identidad estaba muy ligada al rol laboral.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que la sociedad no entiende</h2>

          <p>Hay poca validación social para el duelo laboral.</p>

          <p>
            "Al menos tienes salud." "Hay gente que está peor." "Es una oportunidad para reinventarte." "Ya verás que algo mejor vendrá."
          </p>

          <p>
            Estas frases, aunque bien intencionadas, minimizan lo que estás viviendo. No permiten que te detengas a sentir la pérdida antes de pasar a "lo siguiente."
          </p>

          <p>
            La presión de empezar a buscar trabajo inmediatamente puede impedir el procesamiento emocional necesario. Y sin ese procesamiento, el dolor se arrastra, se somatiza, se convierte en ansiedad crónica o depresión.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Date permiso para el duelo</h2>

          <p>Antes de saltar a actualizar el currículum y enviar cien solicitudes, date espacio para procesar.</p>

          <p>
            <strong>Reconoce que esto es una pérdida.</strong> No minimices lo que sientes. Decirte "debería estar bien" no te ayuda. Aceptar que duele es el primer paso.
          </p>

          <p>
            <strong>Toma unos días.</strong> Si es económicamente posible, no te lances inmediatamente a la búsqueda. Date unos días para estar mal, para procesar, para llorar si lo necesitas.
          </p>

          <p>
            <strong>Habla de lo que sientes.</strong> Con amigos, con familia, con un terapeuta. Sacar las emociones ayuda a que no se enquisten.
          </p>

          <p>
            <strong>Separa tu valor de tu empleo.</strong> Eres más que tu trabajo. Tu valía como persona no está determinada por si tienes o no un puesto. Esto es fácil de decir y difícil de internalizar, pero es verdad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuidarte durante el desempleo</h2>

          <p>El desempleo puede deteriorar la salud mental rápidamente si no te cuidas activamente.</p>

          <p>
            <strong>Mantén estructura.</strong> Aunque no tengas que ir a una oficina, crea rutinas. Levántate a una hora regular. Vístete. Divide el día en bloques.
          </p>

          <p>
            <strong>Cuida el cuerpo.</strong> Come aunque no tengas hambre. Duerme lo necesario. Muévete, aunque sea caminar un poco cada día. El cuerpo sostiene a la mente.
          </p>

          <p>
            <strong>Limita el tiempo de búsqueda.</strong> Buscar trabajo todo el día, todos los días, es agotador y contraproducente. Dedica unas horas definidas y luego haz otras cosas.
          </p>

          <p>
            <strong>Mantén conexiones sociales.</strong> El aislamiento empeora todo. Aunque te dé vergüenza tu situación, mantén contacto con personas que te apoyen.
          </p>

          <p>
            <strong>Evita las comparaciones.</strong> Las redes sociales están llenas de personas mostrando sus éxitos. Compararte con eso cuando estás en tu peor momento es dañino. Considera reducir tu exposición.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuándo buscar ayuda profesional</h2>

          <p>El desempleo puede detonar o agravar problemas de salud mental. Considera buscar apoyo si:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Llevas semanas sin poder dormir bien.</li>
            <li>Has perdido el interés en todo, incluyendo cosas que antes disfrutabas.</li>
            <li>Tienes pensamientos de hacerte daño.</li>
            <li>Estás usando alcohol o sustancias para sobrellevar.</li>
            <li>La ansiedad es tan intensa que no puedes funcionar.</li>
            <li>Sientes que no vale la pena seguir adelante.</li>
          </ul>

          <p>
            No tienes que esperar a estar en crisis. Si el malestar es significativo, buscar ayuda es una decisión inteligente, no una debilidad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La reinvención puede esperar</h2>

          <p>
            La cultura del "reinvéntate" puede ser agotadora. No tienes que convertir esta crisis en una oportunidad inmediatamente. No tienes que encontrarle el lado positivo hoy. No tienes que ser inspirador.
          </p>

          <p>
            Primero, duele. Después, cuando el dolor haya tenido su espacio, podrás pensar en qué sigue.
          </p>

          <p>
            La reinvención genuina no viene de negar el dolor. Viene de haberlo atravesado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión</h2>

          <p>
            Perder el trabajo es perder una parte de la vida que conocías. Es legítimo que duela. Es válido que necesites tiempo.
          </p>

          <p>
            No eres tu empleo. Pero tu empleo era parte de tu vida, y merece ser llorado antes de ser reemplazado.
          </p>

          <p>
            Date el permiso que nadie más te está dando: el permiso de estar mal por un rato, antes de empezar a estar mejor.
          </p>

          <p className="italic">Tu valor no desapareció con tu trabajo. Solo está esperando que lo recuerdes.</p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás atravesando el duelo por perder tu trabajo?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompañamiento para procesar esta pérdida, estoy aquí para escucharte.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all"
          >
            Agenda tu sesión gratuita
          </a>
        </div>

        <RelatedArticles currentSlug="duelo-perdida-trabajo" category="tanatologia" />
      </div>
    </article>
  )
}
