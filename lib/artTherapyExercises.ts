/**
 * Comprehensive Art Therapy Exercises Database
 * Evidence-based exercises for various emotions and therapeutic goals
 */

export interface ArtTherapyExercise {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  materials: string[];
  duration: string;
  emotions: string[]; // Keywords for matching
  contexts: string[]; // grief, loss, anxiety, trauma, healing, growth, etc.
  ageGroups: ('child' | 'teen' | 'adult' | 'all')[]; // For age-appropriate matching
  benefits: string;
}

export const artTherapyExercises: ArtTherapyExercise[] = [
  // GRIEF & LOSS EXERCISES
  {
    id: 'memory-box',
    title: 'Caja de Recuerdos (Memory Box)',
    description: 'Crea un espacio sagrado para honrar y preservar recuerdos preciosos de lo que has perdido o dejado ir.',
    instructions: [
      'Decora una caja con colores, imágenes y símbolos que representen a la persona o experiencia que estás honrando',
      'Llena la caja con objetos significativos: fotos, cartas, objetos pequeños que te recuerden momentos especiales',
      'Añade elementos artísticos que hayas creado: dibujos, poemas, o collages',
      'Escribe una carta de despedida o de gratitud para incluir en la caja',
      'Decide cómo y cuándo abrirás esta caja - puede ser un ritual personal de conexión'
    ],
    materials: ['Caja de cartón o madera', 'Pinturas o marcadores', 'Revistas para recortar', 'Pegamento', 'Fotografías y objetos personales', 'Papel para escribir'],
    duration: '60-90 minutos',
    emotions: ['tristeza', 'duelo', 'melancolía', 'nostalgia', 'amor', 'pérdida'],
    contexts: ['grief', 'loss', 'death', 'bereavement', 'transition', 'mourning'],
    ageGroups: ['teen', 'adult'],
    benefits: 'Proporciona un contenedor físico para los recuerdos, ayuda a procesar el duelo de manera tangible y crea un ritual de honra.'
  },
  {
    id: 'grief-mandala',
    title: 'Mandala del Duelo',
    description: 'Usa la forma circular del mandala para explorar las diferentes capas y emociones de tu proceso de duelo.',
    instructions: [
      'Dibuja un círculo grande en tu papel (puedes usar un plato como guía)',
      'Divide el círculo en secciones - cada sección representa una emoción o aspecto de tu duelo',
      'En el centro, coloca lo que has perdido o estás procesando',
      'En cada sección, usa colores, formas y símbolos para expresar diferentes sentimientos',
      'No pienses demasiado - deja que tu intuición guíe la selección de colores y formas',
      'Cuando termines, observa el mandala completo y nota qué descubres'
    ],
    materials: ['Papel grande', 'Lápices de colores, marcadores o acuarelas', 'Plato o compás para trazar círculos'],
    duration: '45-60 minutos',
    emotions: ['duelo', 'confusión', 'dolor', 'tristeza', 'enojo', 'aceptación'],
    contexts: ['grief', 'loss', 'processing', 'healing', 'self-discovery'],
    ageGroups: ['teen', 'adult', 'all'],
    benefits: 'La estructura del mandala proporciona contención mientras exploras emociones complejas. Ayuda a visualizar el duelo como un proceso con muchas facetas.'
  },
  {
    id: 'timeline-collage',
    title: 'Línea de Tiempo Visual',
    description: 'Crea un collage que represente tu viaje desde la pérdida hacia la sanación.',
    instructions: [
      'Divide tu papel en 3-5 secciones que representen etapas de tu proceso',
      'Puedes usar: pasado (antes de la pérdida), momento de la pérdida, después, ahora, futuro',
      'En cada sección, usa recortes de revistas, dibujos y palabras para representar cómo te sentías/sientes',
      'No te limites a imágenes literales - busca colores, texturas y símbolos que capturen el sentimiento',
      'Conecta las secciones con líneas, caminos o puentes visuales',
      'Reflexiona sobre cómo has cambiado y hacia dónde te diriges'
    ],
    materials: ['Papel largo o cartulina', 'Revistas para recortar', 'Pegamento', 'Marcadores o lápices', 'Fotografías (opcional)'],
    duration: '60-75 minutos',
    emotions: ['esperanza', 'tristeza', 'transformación', 'resiliencia', 'dolor'],
    contexts: ['grief', 'healing', 'growth', 'transition', 'recovery'],
    ageGroups: ['teen', 'adult'],
    benefits: 'Ayuda a ver el duelo como un proceso no lineal con un arco narrativo. Fomenta la esperanza al visualizar el movimiento hacia adelante.'
  },

  // ANXIETY & FEAR EXERCISES
  {
    id: 'worry-stones',
    title: 'Piedras de Preocupación',
    description: 'Transforma tus preocupaciones en objetos físicos que puedes sostener, observar y eventualmente soltar.',
    instructions: [
      'Recolecta 5-10 piedras pequeñas y suaves',
      'En cada piedra, pinta o escribe una preocupación o miedo específico',
      'Usa colores que representen la intensidad o naturaleza de cada preocupación',
      'Decora las piedras con símbolos que representen la emoción',
      'Cuando termines, sostén cada piedra, reconoce la preocupación',
      'Decide: ¿quieres guardar esta piedra para trabajar con ella, o soltarla? (puedes dejar algunas en la naturaleza como acto simbólico)'
    ],
    materials: ['Piedras pequeñas y lisas', 'Pinturas acrílicas o marcadores permanentes', 'Pinceles finos'],
    duration: '45-60 minutos',
    emotions: ['ansiedad', 'miedo', 'preocupación', 'estrés', 'nerviosismo'],
    contexts: ['anxiety', 'worry', 'stress', 'fear', 'release'],
    ageGroups: ['child', 'teen', 'adult', 'all'],
    benefits: 'Externaliza las preocupaciones abstractas en objetos concretos. El acto de pintar es meditativo y el resultado proporciona una herramienta táctil para manejar la ansiedad.'
  },
  {
    id: 'calm-container',
    title: 'Frasco de la Calma',
    description: 'Crea un objeto sensorial hermoso que te ayude a encontrar paz en momentos de ansiedad.',
    instructions: [
      'Llena un frasco transparente con agua tibia',
      'Añade pegamento con brillantina o glicerina para que el contenido se mueva lentamente',
      'Agrega brillantina, lentejuelas o confeti en colores que te calmen',
      'Puedes añadir una gota de colorante de alimentos',
      'Sella bien la tapa con pegamento fuerte',
      'Cuando sientas ansiedad, agita el frasco y observa cómo los elementos se asientan lentamente - respira al ritmo del movimiento'
    ],
    materials: ['Frasco de vidrio con tapa hermética', 'Agua', 'Pegamento con brillantina o glicerina', 'Brillantina', 'Lentejuelas', 'Colorante de alimentos (opcional)'],
    duration: '30-45 minutos',
    emotions: ['ansiedad', 'pánico', 'estrés', 'agitación', 'nerviosismo'],
    contexts: ['anxiety', 'calm', 'grounding', 'stress', 'mindfulness'],
    ageGroups: ['child', 'teen', 'adult', 'all'],
    benefits: 'Proporciona una herramienta visual y meditativa para regular el sistema nervioso. El proceso de observar ayuda a desacelerar los pensamientos acelerados.'
  },
  {
    id: 'safe-place',
    title: 'Mi Lugar Seguro',
    description: 'Dibuja o pinta un espacio imaginario donde te sientes completamente seguro y en paz.',
    instructions: [
      'Cierra los ojos e imagina un lugar donde te sientes totalmente seguro - puede ser real o imaginario',
      'Observa los detalles: ¿qué ves, qué colores, qué luz, qué texturas?',
      'Abre los ojos y comienza a crear este lugar en papel',
      'No importa tu habilidad artística - enfócate en capturar la sensación de seguridad',
      'Incluye elementos que te protejan: paredes, árboles, agua, luz, animales protectores',
      'Añade pequeños detalles que te hagan sentir cómodo',
      'Guarda esta imagen donde puedas verla cuando necesites recordar tu espacio seguro'
    ],
    materials: ['Papel', 'Acuarelas, lápices de colores, o pasteles', 'Marcadores'],
    duration: '45-60 minutos',
    emotions: ['miedo', 'ansiedad', 'inseguridad', 'vulnerabilidad', 'paz'],
    contexts: ['anxiety', 'trauma', 'safety', 'grounding', 'comfort'],
    ageGroups: ['child', 'teen', 'adult', 'all'],
    benefits: 'Crea un recurso visual para la regulación emocional. Fortalecer la conexión con un sentido interno de seguridad es fundamental para sanar la ansiedad.'
  },

  // ANGER & FRUSTRATION EXERCISES
  {
    id: 'destruction-creation',
    title: 'Destrucción y Creación',
    description: 'Libera el enojo de manera segura destruyendo materiales, luego transforma los fragmentos en algo nuevo.',
    instructions: [
      'Parte 1 - Destrucción: Toma papel, cartón o revistas viejas',
      'Rasga, arruga, rompe con toda la energía de tu enojo (es seguro y liberador)',
      'No pienses, solo permite que tu cuerpo exprese la frustración',
      'Continúa hasta que sientas que la energía intensa ha disminuido',
      'Parte 2 - Creación: Reúne todos los fragmentos',
      'Crea un collage o escultura con los pedazos rotos',
      'Usa pegamento para unir las piezas de nuevas formas',
      'Observa cómo el caos puede transformarse en algo nuevo'
    ],
    materials: ['Papel periódico, revistas, cartón', 'Pegamento', 'Cartulina como base', 'Marcadores (opcional)'],
    duration: '30-45 minutos',
    emotions: ['enojo', 'rabia', 'frustración', 'ira', 'irritación'],
    contexts: ['anger', 'release', 'transformation', 'catharsis'],
    ageGroups: ['child', 'teen', 'adult', 'all'],
    benefits: 'Permite una liberación física segura del enojo, seguida de la experiencia de transformación. Enseña que las emociones intensas pueden ser canalizadas creativamente.'
  },
  {
    id: 'volcano-expression',
    title: 'Volcán de Emociones',
    description: 'Dibuja un volcán para explorar y expresar las capas de tu enojo.',
    instructions: [
      'Dibuja un volcán grande en el centro de tu papel',
      'En la lava que sale (la parte superior), usa colores intensos y agresivos para mostrar cómo se ve tu enojo por fuera',
      'Dentro del volcán, en capas, escribe o dibuja las razones más profundas de tu enojo',
      '¿Qué hay debajo del enojo? ¿Dolor? ¿Miedo? ¿Tristeza? ¿Injusticia?',
      'Usa diferentes colores para diferentes capas de emoción',
      'Alrededor del volcán, dibuja lo que necesitarías para que la presión disminuya'
    ],
    materials: ['Papel grande', 'Marcadores, crayones, o pasteles', 'Lápices de colores'],
    duration: '30-45 minutos',
    emotions: ['enojo', 'frustración', 'rabia', 'dolor', 'injusticia'],
    contexts: ['anger', 'processing', 'self-awareness', 'emotional-regulation'],
    ageGroups: ['child', 'teen', 'adult', 'all'],
    benefits: 'Ayuda a entender que el enojo a menudo cubre emociones más vulnerables. Proporciona insight sobre las raíces del enojo y qué necesitas para sanar.'
  },

  // SADNESS & DEPRESSION EXERCISES
  {
    id: 'color-feelings',
    title: 'Diario de Color',
    description: 'Usa el color puro para expresar emociones sin necesidad de crear formas reconocibles.',
    instructions: [
      'Prepara varios papeles o páginas en un diario',
      'Cada día (o en este momento), selecciona los colores que representan cómo te sientes',
      'Pinta libremente - manchas, líneas, capas de color',
      'No hay necesidad de crear "algo" - solo explora el color y el movimiento',
      'Puedes pintar con suavidad o con energía, según lo que sientas',
      'Escribe la fecha y unas palabras sobre tu estado emocional si lo deseas',
      'Con el tiempo, observarás patrones y cambios en tu paisaje emocional'
    ],
    materials: ['Papel para acuarela o diario artístico', 'Acuarelas, témperas o acrílicos', 'Pinceles de varios tamaños'],
    duration: '20-30 minutos',
    emotions: ['tristeza', 'depresión', 'melancolía', 'soledad', 'vacío', 'apatía'],
    contexts: ['depression', 'sadness', 'processing', 'self-expression', 'tracking'],
    ageGroups: ['teen', 'adult', 'all'],
    benefits: 'Proporciona una salida no verbal para emociones difíciles de articular. El seguimiento visual ayuda a ver cambios que pueden no ser evidentes de otra manera.'
  },
  {
    id: 'light-in-darkness',
    title: 'Luz en la Oscuridad',
    description: 'Crea una imagen que represente encontrar esperanza en momentos difíciles.',
    instructions: [
      'Comienza con papel negro o pinta todo tu papel de un color oscuro',
      'Deja que se seque completamente',
      'Con colores claros, brillantes o dorados, añade pequeños elementos de luz',
      'Puede ser una vela, estrellas, una ventana, un amanecer, o símbolos abstractos de esperanza',
      'Reflexiona: incluso en los momentos más oscuros, ¿dónde puedes encontrar destellos de luz?',
      'No necesitas cubrir toda la oscuridad - a veces una pequeña luz es suficiente'
    ],
    materials: ['Papel negro o cartulina negra', 'Pinturas blancas, amarillas, doradas o plateadas', 'Gises pastel blancos o de colores claros', 'Marcadores metálicos'],
    duration: '45-60 minutos',
    emotions: ['tristeza', 'desesperanza', 'depresión', 'esperanza', 'resiliencia'],
    contexts: ['depression', 'hope', 'healing', 'resilience', 'meaning'],
    ageGroups: ['teen', 'adult', 'all'],
    benefits: 'Externaliza la experiencia de la depresión mientras cultiva la conciencia de que la esperanza puede coexistir con la oscuridad.'
  },

  // SELF-DISCOVERY & GROWTH EXERCISES
  {
    id: 'self-portrait-parts',
    title: 'Autorretrato de Mis Partes',
    description: 'Crea un autorretrato que muestre las diferentes facetas de tu identidad.',
    instructions: [
      'Dibuja el contorno de tu rostro o cuerpo',
      'Divide el interior en secciones',
      'En cada sección, representa una parte diferente de ti: tu yo trabajador, tu yo creativo, tu niño interior, tu yo protector, etc.',
      'Usa diferentes colores, texturas y símbolos para cada parte',
      'No todas las partes tienen que gustar unas de otras - muestra las tensiones si existen',
      'Reflexiona: ¿qué partes dominan? ¿Cuáles necesitan más espacio?'
    ],
    materials: ['Papel grande', 'Espejo (para referencia, opcional)', 'Marcadores, lápices de colores, revistas para recortar', 'Pegamento'],
    duration: '60-90 minutos',
    emotions: ['curiosidad', 'confusión', 'autoconocimiento', 'identidad'],
    contexts: ['self-discovery', 'identity', 'growth', 'integration', 'awareness'],
    ageGroups: ['teen', 'adult'],
    benefits: 'Fomenta la autocompasión al reconocer que somos multifacéticos. Ayuda a integrar diferentes aspectos del self.'
  },
  {
    id: 'growth-tree',
    title: 'Árbol de Crecimiento Personal',
    description: 'Crea un árbol visual que represente tu crecimiento, raíces y aspiraciones.',
    instructions: [
      'Dibuja un árbol grande que ocupe todo el papel',
      'Las raíces representan de dónde vienes: valores, experiencias formativas, personas importantes',
      'El tronco representa tu fortaleza actual y resiliencia',
      'Las ramas representan las diferentes áreas de tu vida',
      'Las hojas/flores/frutos representan tus logros y aspiraciones',
      'Puedes añadir elementos climáticos: sol (fuentes de energía), lluvia (desafíos), etc.',
      'Usa colores que representen diferentes emociones y etapas'
    ],
    materials: ['Papel grande', 'Lápices de colores, marcadores, o pinturas', 'Revistas para recortar (opcional)'],
    duration: '60-75 minutos',
    emotions: ['esperanza', 'orgullo', 'gratitud', 'aspiración', 'propósito'],
    contexts: ['growth', 'healing', 'goals', 'self-reflection', 'resilience'],
    ageGroups: ['teen', 'adult', 'all'],
    benefits: 'Proporciona una visión holística de tu vida y crecimiento. Ayuda a reconocer fortalezas y establecer intenciones futuras.'
  },
  {
    id: 'mask-making',
    title: 'La Máscara y el Rostro Verdadero',
    description: 'Crea dos máscaras: una que muestras al mundo y otra que representa tu yo auténtico.',
    instructions: [
      'Opción 1 - 2D: Dibuja dos óvalos grandes para dos máscaras',
      'Opción 2 - 3D: Usa platos de papel como base',
      'Primera máscara: Decora el exterior con cómo te presentas al mundo, tu "cara pública"',
      'Segunda máscara: Decora con tus verdaderos sentimientos, pensamientos y tu esencia privada',
      'Usa colores, palabras, símbolos y texturas',
      'Reflexiona sobre la distancia entre ambas: ¿es necesaria? ¿es dolorosa? ¿protectora?',
      '¿Qué necesitarías para cerrar esta brecha?'
    ],
    materials: ['Papel grueso o platos de papel', 'Pinturas, marcadores, revistas', 'Pegamento, tijeras', 'Materiales decorativos (plumas, lentejuelas, tela)'],
    duration: '60-90 minutos',
    emotions: ['autenticidad', 'vergüenza', 'miedo', 'valentía', 'vulnerabilidad'],
    contexts: ['self-discovery', 'authenticity', 'identity', 'expression', 'healing'],
    ageGroups: ['teen', 'adult'],
    benefits: 'Explora la discrepancia entre el yo público y privado. Fomenta la autenticidad y la autocompasión.'
  },

  // TRAUMA & HEALING EXERCISES
  {
    id: 'body-map',
    title: 'Mapa Corporal de Emociones',
    description: 'Crea un mapa de tu cuerpo que muestre dónde sientes diferentes emociones.',
    instructions: [
      'Dibuja el contorno de tu cuerpo (acostado sobre papel grande, o dibujado)',
      'Piensa en cómo diferentes emociones se sienten en tu cuerpo',
      '¿Dónde sientes el miedo? ¿La tristeza? ¿La alegría? ¿La tensión?',
      'Usa colores, líneas y texturas para marcar estas áreas',
      'El rojo puede ser dolor o enojo, el azul tristeza, el amarillo alegría, etc.',
      'Añade palabras descriptivas sobre las sensaciones',
      'Esto te ayuda a reconectar con tu cuerpo y leer sus señales'
    ],
    materials: ['Papel muy grande (papel kraft o varios pliegos unidos)', 'Marcadores, crayones, pinturas', 'Lápices de colores'],
    duration: '45-60 minutos',
    emotions: ['conciencia', 'desconexión', 'trauma', 'sanación', 'autoconocimiento'],
    contexts: ['trauma', 'healing', 'somatic', 'body-awareness', 'grounding'],
    ageGroups: ['teen', 'adult'],
    benefits: 'Reconecta con sensaciones corporales de manera segura. Ayuda a identificar cómo el cuerpo almacena emociones y trauma.'
  },
  {
    id: 'container-for-pain',
    title: 'Contenedor para el Dolor',
    description: 'Crea un contenedor simbólico donde puedes colocar temporalmente emociones abrumadoras.',
    instructions: [
      'Decora una caja, frasco o bolsa especial',
      'Esta será tu "contenedor seguro" para emociones que son demasiado intensas para procesar ahora',
      'Escribe o dibuja en papelitos las emociones o recuerdos difíciles',
      'Dóblalos y colócalos en el contenedor',
      'Puedes cerrar la caja sabiendo que están seguras allí, pero no dentro de ti',
      'Cuando te sientas listo y apoyado, puedes abrir el contenedor y trabajar con un papel a la vez',
      'Esto te devuelve el control sobre cuándo y cómo procesas el dolor'
    ],
    materials: ['Caja, frasco o bolsa resistente', 'Materiales decorativos', 'Papel para escribir', 'Pinturas o marcadores'],
    duration: '45-60 minutos',
    emotions: ['abrumamiento', 'trauma', 'dolor', 'control', 'seguridad'],
    contexts: ['trauma', 'overwhelm', 'grounding', 'containment', 'safety'],
    ageGroups: ['teen', 'adult'],
    benefits: 'Proporciona una herramienta de contención para cuando las emociones son demasiado intensas. Devuelve sensación de control y agencia.'
  },

  // JOY & CELEBRATION EXERCISES
  {
    id: 'gratitude-garden',
    title: 'Jardín de Gratitud',
    description: 'Crea un jardín visual donde cada flor o planta representa algo por lo que estás agradecido.',
    instructions: [
      'Dibuja o pinta un jardín, campo o bosque',
      'Cada flor, árbol o planta representa algo por lo que sientes gratitud',
      'Pueden ser cosas grandes (personas que amas) o pequeñas (una taza de café)',
      'Usa colores vibrantes y formas que te alegren',
      'Puedes añadir etiquetas o dejar que los símbolos hablen por sí mismos',
      'Coloca este jardín donde puedas verlo regularmente',
      'Puedes seguir añadiendo flores con el tiempo'
    ],
    materials: ['Papel o lienzo', 'Pinturas, acuarelas, o marcadores', 'Lápices de colores'],
    duration: '45-60 minutos',
    emotions: ['gratitud', 'alegría', 'aprecio', 'paz', 'abundancia'],
    contexts: ['gratitude', 'joy', 'positivity', 'healing', 'growth'],
    ageGroups: ['child', 'teen', 'adult', 'all'],
    benefits: 'Cultiva una mentalidad de gratitud. Proporciona un recordatorio visual de las cosas buenas en la vida, especialmente útil durante momentos difíciles.'
  },
  {
    id: 'joy-collage',
    title: 'Collage de Alegría',
    description: 'Crea un collage vibrante de todo lo que te trae alegría y energía.',
    instructions: [
      'Busca en revistas imágenes que te hagan sonreír',
      'Busca colores brillantes, personas riendo, lugares hermosos, actividades divertidas',
      'No pienses demasiado - si algo te hace sentir luz, inclúyelo',
      'Organiza las imágenes en tu papel de la manera que te parezca más alegre',
      'Llena todo el espacio con color y energía positiva',
      'Añade palabras que te inspiren',
      'Coloca este collage donde lo veas cuando necesites un recordatorio de alegría'
    ],
    materials: ['Cartulina o papel grueso', 'Revistas coloridas', 'Pegamento', 'Tijeras', 'Marcadores'],
    duration: '30-45 minutos',
    emotions: ['alegría', 'esperanza', 'inspiración', 'energía', 'optimismo'],
    contexts: ['joy', 'inspiration', 'motivation', 'positivity', 'healing'],
    ageGroups: ['child', 'teen', 'adult', 'all'],
    benefits: 'Crea un ancla visual para estados emocionales positivos. Ayuda a recordar que la alegría es accesible incluso en tiempos difíciles.'
  },

  // TRANSITION & CHANGE EXERCISES
  {
    id: 'bridge-drawing',
    title: 'El Puente hacia el Cambio',
    description: 'Dibuja un puente que represente tu transición de donde estabas a donde quieres estar.',
    instructions: [
      'En el lado izquierdo del papel, dibuja o describe dónde estabas antes (pasado)',
      'En el lado derecho, dibuja o describe dónde quieres estar (futuro)',
      'En el centro, dibuja un puente que conecte ambos lados',
      'En el puente, representa los pasos, desafíos y recursos que necesitas para cruzar',
      'Puedes incluir: personas que te apoyan, habilidades que estás desarrollando, miedos que estás enfrentando',
      'Usa colores y símbolos que capturen tanto la dificultad como la esperanza del viaje'
    ],
    materials: ['Papel grande', 'Lápices de colores, marcadores o pinturas'],
    duration: '45-60 minutos',
    emotions: ['esperanza', 'miedo', 'determinación', 'incertidumbre', 'valentía'],
    contexts: ['transition', 'change', 'growth', 'goals', 'healing'],
    ageGroups: ['teen', 'adult', 'all'],
    benefits: 'Visualiza el cambio como un proceso con pasos concretos. Reduce la ansiedad al hacer tangible el camino hacia adelante.'
  },
  {
    id: 'transformation-butterfly',
    title: 'Mariposa de Transformación',
    description: 'Crea una mariposa donde cada ala representa diferentes aspectos de tu transformación.',
    instructions: [
      'Dibuja una mariposa grande',
      'Ala izquierda: representa quién eras antes, usa colores y símbolos de tu antigua identidad',
      'Ala derecha: representa en quién te estás convirtiendo',
      'El cuerpo: representa tu esencia que permanece constante a través del cambio',
      'Puedes añadir un capullo abajo para representar el proceso de transformación',
      'Decora con tanto detalle como desees',
      'Reflexiona sobre cómo ambas versiones de ti son valiosas'
    ],
    materials: ['Papel', 'Pinturas, marcadores, lápices de colores', 'Revistas para recortar (opcional)', 'Pegamento'],
    duration: '45-60 minutos',
    emotions: ['transformación', 'esperanza', 'identidad', 'crecimiento', 'aceptación'],
    contexts: ['transformation', 'change', 'growth', 'identity', 'healing'],
    ageGroups: ['child', 'teen', 'adult', 'all'],
    benefits: 'Normaliza el cambio como parte natural de la vida. Honra tanto quién eras como en quién te estás convirtiendo.'
  },

  // RELATIONSHIP & CONNECTION EXERCISES
  {
    id: 'relationship-web',
    title: 'Red de Relaciones',
    description: 'Mapea visualmente tus relaciones y cómo te afectan energéticamente.',
    instructions: [
      'Dibújate en el centro del papel',
      'A tu alrededor, dibuja círculos o símbolos para las personas importantes en tu vida',
      'Usa la distancia para mostrar cercanía emocional (no física)',
      'Dibuja líneas entre tú y cada persona - diferentes colores para diferentes tipos de energía',
      'Rojo: relaciones energizantes, Azul: relaciones calmantes, Gris: relaciones que drenan, etc.',
      'Observa los patrones: ¿dónde está tu energía? ¿Qué necesitas cambiar?',
      '¿Qué relaciones quieres fortalecer? ¿Cuáles necesitan límites?'
    ],
    materials: ['Papel grande', 'Marcadores de colores', 'Lápices de colores'],
    duration: '45-60 minutos',
    emotions: ['conexión', 'soledad', 'gratitud', 'resentimiento', 'amor'],
    contexts: ['relationships', 'boundaries', 'connection', 'self-awareness', 'healing'],
    ageGroups: ['teen', 'adult'],
    benefits: 'Proporciona claridad sobre la salud de tus relaciones. Ayuda a identificar dónde necesitas establecer límites o invertir más energía.'
  },

  // MINDFULNESS & PRESENT MOMENT EXERCISES
  {
    id: 'zentangle-meditation',
    title: 'Zentangle Meditativo',
    description: 'Crea patrones repetitivos intrincados como una forma de meditación activa.',
    instructions: [
      'Divide tu papel en secciones con líneas suaves',
      'En cada sección, dibuja un patrón repetitivo: líneas, círculos, puntos, ondas',
      'No planees - deja que tu mano se mueva intuitivamente',
      'Enfócate en cada línea mientras la dibujas',
      'Si tu mente divaga, suavemente regresa tu atención al patrón',
      'No hay forma correcta o incorrecta',
      'El proceso es meditativo, no el resultado'
    ],
    materials: ['Papel (blanco o color)', 'Plumas de punta fina o marcadores', 'Lápices'],
    duration: '30-45 minutos',
    emotions: ['ansiedad', 'estrés', 'agitación', 'calma', 'presencia'],
    contexts: ['mindfulness', 'calm', 'stress', 'meditation', 'grounding'],
    ageGroups: ['teen', 'adult', 'all'],
    benefits: 'Aquieta la mente a través de la repetición. Proporciona una actividad meditativa accesible para quienes encuentran difícil la meditación sentada.'
  },
  {
    id: 'nature-mandala',
    title: 'Mandala con Elementos Naturales',
    description: 'Crea un mandala temporal usando objetos encontrados en la naturaleza.',
    instructions: [
      'Sal a caminar y recolecta objetos naturales: hojas, flores, piedras, ramitas, semillas',
      'Encuentra un espacio plano (puede ser en el suelo o sobre una mesa)',
      'Comienza en el centro y crea un patrón circular radial',
      'Organiza los elementos por color, forma o tamaño',
      'Trabaja de manera meditativa, sin prisa',
      'Cuando termines, observa tu creación',
      'Toma una foto si deseas, luego permite que la naturaleza reclame los elementos',
      'Reflexiona sobre la impermanencia y la belleza temporal'
    ],
    materials: ['Elementos naturales recolectados', 'Espacio exterior o interior', 'Cámara para fotografiar (opcional)'],
    duration: '60-90 minutos (incluyendo recolección)',
    emotions: ['paz', 'conexión', 'presencia', 'calma', 'gratitud'],
    contexts: ['mindfulness', 'nature', 'impermanence', 'meditation', 'grounding'],
    ageGroups: ['child', 'teen', 'adult', 'all'],
    benefits: 'Conecta con la naturaleza de manera creativa. Enseña sobre impermanencia y presencia. Proporciona una experiencia meditativa corporalizada.'
  }
];

/**
 * Matching algorithm to select relevant exercises based on user input
 */
export function matchExercises(
  emotion: string,
  context: string,
  age: number,
  count: number = 4
): ArtTherapyExercise[] {
  const emotionLower = emotion.toLowerCase();
  const contextLower = context.toLowerCase();

  // Determine age group
  let ageGroup: 'child' | 'teen' | 'adult';
  if (age < 13) ageGroup = 'child';
  else if (age < 18) ageGroup = 'teen';
  else ageGroup = 'adult';

  // Score each exercise based on relevance
  const scoredExercises = artTherapyExercises.map(exercise => {
    let score = 0;

    // Check age appropriateness
    if (exercise.ageGroups.includes('all') || exercise.ageGroups.includes(ageGroup)) {
      score += 10;
    } else {
      return { exercise, score: 0 }; // Exclude age-inappropriate exercises
    }

    // Check emotion match
    const emotionMatch = exercise.emotions.some(e =>
      emotionLower.includes(e) || e.includes(emotionLower)
    );
    if (emotionMatch) score += 50;

    // Check context match
    const contextMatch = exercise.contexts.some(c =>
      contextLower.includes(c) || c.includes(contextLower)
    );
    if (contextMatch) score += 30;

    // Partial matches
    exercise.emotions.forEach(e => {
      const words = emotionLower.split(' ');
      if (words.some(word => word.length > 3 && e.includes(word))) {
        score += 10;
      }
    });

    exercise.contexts.forEach(c => {
      const words = contextLower.split(' ');
      if (words.some(word => word.length > 3 && c.includes(word))) {
        score += 10;
      }
    });

    return { exercise, score };
  });

  // Sort by score and return top matches
  const topExercises = scoredExercises
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(item => item.exercise);

  // If we don't have enough matches, add some general exercises
  if (topExercises.length < count) {
    const generalExercises = artTherapyExercises
      .filter(ex => ex.ageGroups.includes('all') || ex.ageGroups.includes(ageGroup))
      .filter(ex => !topExercises.includes(ex))
      .slice(0, count - topExercises.length);

    topExercises.push(...generalExercises);
  }

  return topExercises;
}
