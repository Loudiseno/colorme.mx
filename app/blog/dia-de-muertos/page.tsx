'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDiaDeMuertos() {
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
            Dia de Muertos en Mexico: la fiesta donde la muerte se celebra con vida
          </h1>
          <p className="text-black/60 italic">Por Lourdes Perez | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/dia-de-muertos.jpeg"
            alt="Dia de Muertos en Mexico - Tradicion y celebracion"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            Hay un pais en el mundo donde la muerte no se llora en silencio. Se celebra. Se canta. Se cocina. Se adorna con flores naranjas y se recibe con los brazos abiertos.
          </p>

          <p>Ese pais es Mexico.</p>

          <p>
            Cada ano, entre finales de octubre y los primeros dias de noviembre, millones de familias mexicanas preparan sus casas, sus altares y sus corazones para recibir a quienes ya no estan. No con miedo. No con tristeza solemne. Sino con la certeza de que la muerte no es un final, sino un reencuentro.
          </p>

          <p>
            El Dia de Muertos es mucho mas que una tradicion. Es una forma de entender la vida. Y la muerte. Y el amor que no termina cuando alguien se va.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Nuestra creencia: la muerte no es el final</h2>

          <p>
            Para entender el Dia de Muertos hay que entender primero como los mexicanos vemos la muerte.
          </p>

          <p>No le tenemos miedo. Le hacemos fiesta.</p>

          <p>
            Esta forma de relacionarnos con la muerte viene de muy lejos. Nuestros antepasados —mexicas, mayas, zapotecas, purepechas— creian que morir no era desaparecer. Era transformarse. Pasar a otro estado. Continuar existiendo en otro plano.
          </p>

          <p>
            Para las culturas prehispanicas, la muerte era parte del ciclo de la vida. Como las estaciones. Como la cosecha. Como el sol que se oculta para volver a salir.
          </p>

          <p>
            Con la llegada de los espanoles, estas creencias se mezclaron con el catolicismo. Y de esa fusion nacio lo que hoy conocemos como el Dia de Muertos: una celebracion unica en el mundo, reconocida por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad desde 2008.
          </p>

          <p>
            No celebramos la muerte. Celebramos la memoria. Celebramos que mientras alguien te recuerde, nunca te vas del todo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las fechas: cada dia tiene su significado</h2>

          <p>
            Aunque muchos piensan que el Dia de Muertos es solo el 1 y 2 de noviembre, la tradicion comienza antes. Cada dia esta dedicado a recibir a diferentes almas:
          </p>

          <ul>
            <li><strong>27 de octubre:</strong> Llegan las almas de las mascotas que fallecieron. Se les recibe con agua y comida.</li>
            <li><strong>28 de octubre:</strong> Se recuerda a quienes murieron de forma tragica o violenta. Se enciende una vela, se coloca una flor blanca y un vaso de agua.</li>
            <li><strong>29 de octubre:</strong> Es el dia de los que murieron ahogados.</li>
            <li><strong>30 de octubre:</strong> Se recibe a las almas olvidadas, aquellas que no tienen familia que las espere.</li>
            <li><strong>31 de octubre:</strong> Llegan los ninos que murieron sin ser bautizados y los que no alcanzaron a nacer.</li>
            <li><strong>1 de noviembre - Dia de Todos los Santos:</strong> Este dia esta dedicado a los ninos difuntos, a los &quot;angelitos&quot;. Se les recibe con dulces, juguetes y comida que les gustaba.</li>
            <li><strong>2 de noviembre - Dia de los Fieles Difuntos:</strong> Llegan las almas de los adultos. Es el dia principal de la celebracion. Las familias colocan en la ofrenda los platillos favoritos de sus seres queridos, sus bebidas, sus objetos personales.</li>
            <li><strong>3 o 4 de noviembre:</strong> Se retira la ofrenda. Segun la creencia, las almas ya han partido de regreso al Mictlan y se llevan consigo la esencia de todo lo que se les ofrecio.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La ofrenda: un puente entre dos mundos</h2>

          <p>
            El corazon del Dia de Muertos es la ofrenda. Tambien llamada altar de muertos.
          </p>

          <p>
            No es solo una decoracion. Es un acto de amor. Un puente entre el mundo de los vivos y el de los muertos. Un espacio sagrado donde las familias dicen: &quot;Te esperamos. Te recordamos. Sigues siendo parte de nosotros.&quot;
          </p>

          <p>
            Las ofrendas se colocan en las casas, en las escuelas, en los lugares de trabajo, en las plazas publicas. Y tambien en los cementerios, directamente sobre las tumbas de los seres queridos.
          </p>

          <p>Cada elemento de la ofrenda tiene un significado:</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Los elementos de la ofrenda y su significado</h3>

          <ul>
            <li><strong>La fotografia:</strong> Es el centro de la ofrenda. La imagen del ser querido a quien se espera. Le da identidad al altar y recuerda para quien esta dedicado.</li>
            <li><strong>El agua:</strong> Se coloca para saciar la sed del alma despues de su largo viaje desde el Mictlan. Tambien representa la pureza.</li>
            <li><strong>La sal:</strong> Es el elemento de purificacion. Sirve para que el cuerpo del difunto no se corrompa en su viaje de ida y vuelta.</li>
            <li><strong>Las velas y veladoras:</strong> Representan la luz, la fe y la esperanza. Su funcion es guiar a las almas para que encuentren el camino de regreso a casa. Tradicionalmente se coloca una vela por cada difunto que se espera.</li>
            <li><strong>El copal e incienso:</strong> Se queman para purificar el ambiente y ahuyentar a los malos espiritus. El humo del copal tambien sirve como guia para que las almas encuentren su ofrenda. Es un elemento que viene directamente de las tradiciones prehispanicas.</li>
            <li><strong>La flor de cempasuchil:</strong> Es la flor de muertos por excelencia. Su color naranja brillante y su aroma intenso marcan el camino para que las almas no se pierdan. En muchas casas se hace un camino de petalos desde la puerta de entrada hasta el altar. Su nombre viene del nahuatl &quot;cempoalxochitl&quot;, que significa &quot;flor de veinte petalos&quot;.</li>
            <li><strong>El pan de muerto:</strong> Representa el cuerpo de Cristo en la tradicion catolica. Las tiras de masa que lo adornan simbolizan los huesos del difunto. Su forma redonda representa el ciclo de la vida y la muerte.</li>
            <li><strong>La comida y bebida:</strong> Se colocan los platillos y bebidas favoritos del difunto. Mole, tamales, frutas, dulces. Y para los adultos, tequila, mezcal o la bebida que mas disfrutaban en vida. La creencia dice que las almas vienen a nutrirse de la esencia de los alimentos.</li>
            <li><strong>Las calaveras de azucar:</strong> Representan la muerte con humor. Suelen llevar el nombre del difunto en la frente. Son una forma de aceptar la muerte como parte natural de la vida.</li>
            <li><strong>El papel picado:</strong> Representa el viento y la fragilidad de la vida. Sus colores dan alegria al altar.</li>
            <li><strong>El petate:</strong> Se coloca para que las almas puedan descansar despues de su largo viaje.</li>
            <li><strong>El arco de flores:</strong> Simboliza la puerta de entrada al mundo de los muertos. Es el umbral que cruzan las almas para llegar a la ofrenda.</li>
            <li><strong>Objetos personales:</strong> Ropa, herramientas de trabajo, instrumentos musicales, libros... todo aquello que el difunto amaba o utilizaba en vida se coloca en el altar como una forma de decir: &quot;Te conociamos. Te recordamos tal como eras.&quot;</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los cementerios se llenan de vida</h2>

          <p>
            En Mexico, los cementerios no son lugares tristes durante el Dia de Muertos. Son lugares de encuentro.
          </p>

          <p>
            Las familias llegan con comida, flores, velas y musica. Limpian las tumbas. Las adornan. Se sientan junto a ellas a comer, a platicar, a recordar.
          </p>

          <p>
            En algunos pueblos, las familias pasan la noche entera en el panteon. Es una velada. Un momento para estar cerca de quienes ya no estan.
          </p>

          <p>
            <strong>Mixquic</strong>, en la Ciudad de Mexico, es famoso por &quot;La Alumbrada&quot;: miles de velas iluminan el cementerio creando un espectaculo de luz y memoria.
          </p>

          <p>
            <strong>Janitzio</strong>, en Michoacan, ofrece una de las celebraciones mas emotivas. Las familias purepechas cruzan el lago de Patzcuaro en canoas adornadas con velas y flores para velar a sus muertos en el panteon de la isla.
          </p>

          <p>
            <strong>Oaxaca</strong> se llena de comparsas, altares monumentales y tapetes de aserrin que transforman las calles en obras de arte efimeras.
          </p>

          <p>
            Cada region de Mexico tiene su propia forma de celebrar. Pero en todas hay algo en comun: la muerte no se esconde. Se abraza.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las casas se transforman</h2>

          <p>Durante estos dias, los hogares mexicanos se transforman.</p>

          <p>
            El olor a cempasuchil invade las habitaciones. El copal humea. Las velas parpadean. Y en algun rincon de la casa —a veces humilde, a veces elaborado— el altar espera.
          </p>

          <p>
            Hay familias que preparan la ofrenda con semanas de anticipacion. Otras la arman la noche del 31 de octubre. Algunas heredan los manteles, los candelabros, las fotografias de generaciones anteriores.
          </p>

          <p>
            Lo importante no es que tan grande o bonita sea la ofrenda. Lo importante es la intencion. El amor con el que se prepara. La memoria que se honra.
          </p>

          <p>
            Porque en el fondo, el Dia de Muertos es eso: un acto de amor. Una forma de decir a quienes ya no estan: &quot;No te olvidamos. Y mientras te recordemos, sigues aqui.&quot;
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La Catrina: el simbolo que el mundo reconoce</h2>

          <p>No se puede hablar del Dia de Muertos sin mencionar a La Catrina.</p>

          <p>
            Esta elegante calavera vestida con sombrero de plumas fue creada por el grabador mexicano Jose Guadalupe Posada a principios del siglo XX. Originalmente se llamaba &quot;La Calavera Garbancera&quot; y era una critica a las personas de clase baja que pretendian aparentar ser de clase alta.
          </p>

          <p>
            Con el tiempo, La Catrina se convirtio en el simbolo mas reconocido del Dia de Muertos en todo el mundo. Representa una verdad muy mexicana: ante la muerte todos somos iguales. No importa si eres rico o pobre. Al final, todos seremos calaveras.
          </p>

          <p>
            Hoy, miles de personas se maquillan como Catrinas durante las celebraciones. Es una forma de jugar con la muerte, de perderle el miedo, de recordar que la vida es breve y hay que vivirla.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Mas que una tradicion: una forma de sanar</h2>

          <p>
            El Dia de Muertos no es solo folklore. No es solo turismo. No es solo una fecha en el calendario.
          </p>

          <p>
            Es una forma de procesar la perdida. De mantener vivo el vinculo con quienes amamos. De enfrentar la muerte no con miedo, sino con aceptacion.
          </p>

          <p>
            En un mundo que muchas veces evita hablar de la muerte, Mexico la pone en el centro de la mesa. Le da un lugar. La nombra. La celebra.
          </p>

          <p>Y en ese acto hay algo profundamente sanador.</p>

          <p>Porque recordar no duele. Lo que duele es olvidar.</p>

          <p>
            El Dia de Muertos nos recuerda que nuestros seres queridos no desaparecen mientras los mantengamos en la memoria. Que el amor trasciende la muerte. Que despedirse no significa soltar para siempre.
          </p>

          <p>
            Es una fiesta. Si. Pero tambien es un abrazo. Un &quot;te extrano&quot; colectivo. Una forma de decir que la muerte no tiene la ultima palabra.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una invitacion</h2>

          <p>Si nunca has puesto una ofrenda, este ano puede ser el primero.</p>

          <p>
            No necesitas un altar enorme. No necesitas seguir todas las reglas al pie de la letra. Solo necesitas una fotografia, una vela, un vaso de agua, y la intencion de recordar.
          </p>

          <p>Pon la comida que le gustaba. La musica que escuchaba. Los objetos que amaba.</p>

          <p>
            Y sientate un momento. Recuerda. Platica con esa persona aunque ya no este fisicamente.
          </p>

          <p>
            Porque eso es el Dia de Muertos. Un momento para detenerse. Para honrar. Para sentir que la distancia entre los vivos y los muertos, al menos por unos dias, se acorta.
          </p>

          <p>En Mexico decimos que los muertos regresan.</p>

          <p>
            Y tal vez sea verdad. O tal vez lo que regresa es la certeza de que el amor no muere. De que la memoria es mas fuerte que la ausencia. De que mientras alguien te nombre, sigues existiendo.
          </p>

          <p>Eso es el Dia de Muertos. Eso somos los mexicanos frente a la muerte.</p>

          <p>No le huimos. Le abrimos la puerta. Le ponemos flores. Le servimos un plato.</p>

          <p>Y celebramos.</p>

          <p className="italic text-black/60 mt-8">
            El Dia de Muertos no es una despedida. Es un reencuentro. Y cada ano, en cada ofrenda, en cada vela encendida, los mexicanos demostramos que el amor es mas fuerte que la muerte.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si quieres aprender a honrar la memoria de tus seres queridos, estoy aqui para acompanarte.
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
