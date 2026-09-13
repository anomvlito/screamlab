/**
 * Todo el texto del sitio vive aquí para editarlo sin tocar componentes.
 * Los precios y testimonios son referenciales: reemplázalos antes de publicar.
 */

export const nav = [
  { href: "#metodo", label: "Método" },
  { href: "#caminos", label: "Caminos" },
  { href: "#programas", label: "Programas" },
  { href: "#coach", label: "Coach" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const hero = {
  kicker: "Academia de canto extremo · Santiago, Chile",
  title: ["Grita fuerte.", "Sin romperte."],
  subtitle:
    "Scream, growl, fry y falsas cuerdas con técnica segura y medible. Clases online y presenciales para metal, hardcore, punk y todo lo que necesite distorsión vocal.",
  primaryCta: "Agenda tu clase de prueba",
  secondaryCta: "Ver programas",
  stats: [
    { value: "1:1", label: "Clases personalizadas" },
    { value: "0", label: "Lesiones con nuestro método" },
    { value: "100%", label: "Adaptado a tu banda y estilo" },
  ],
} as const;

export const paths = {
  title: "Elige tu camino",
  intro: "Tres puntos de partida distintos, un mismo laboratorio. En la clase de prueba definimos cuál es el tuyo.",
  items: [
    {
      name: "Fry scream",
      who: "Para post-hardcore, metalcore y screamo",
      text: "Distorsión aguda y controlada desde el vocal fry. Ideal si partes de cero o tu voz es liviana.",
    },
    {
      name: "False cord",
      who: "Para death, deathcore y hardcore",
      text: "Growl medio y bajo con las falsas cuerdas. Potencia, cuerpo y resistencia para sets largos.",
    },
    {
      name: "Cantante que quiere grit",
      who: "Para rock, punk y voces limpias",
      text: "Ya cantas y quieres agregar rasgado y distorsión sin perder afinación ni salud vocal.",
    },
  ],
} as const;

export const beforeAfter = {
  title: "Antes y después",
  intro: "El mismo alumno, la misma frase: primera sesión y semana diez. Sin filtros ni edición.",
  // Sube los audios a /public/audio/antes.mp3 y /public/audio/despues.mp3 y cambia ready a true.
  ready: false,
  before: { label: "Sesión 1", src: "/audio/antes.mp3" },
  after: { label: "Semana 10", src: "/audio/despues.mp3" },
  pending: "Estamos grabando los primeros ejemplos con alumnos reales. Mientras tanto, escucha los clips en Instagram.",
} as const;

export const guarantee = {
  title: "Garantía del laboratorio",
  text: "Si después de la clase de prueba sientes que el método no es para ti, no pagas nada más. Y si en 8 semanas de clases 1:1 no logras tu primera distorsión estable, seguimos trabajando sin costo hasta que la tengas.",
} as const;

export const marquee = [
  "Fry scream",
  "False cord",
  "Growl",
  "Pig squeal",
  "Tunnel throat",
  "Gutural",
  "Screamo",
  "Voz limpia + distorsión",
  "Salud vocal",
  "Presencia en vivo",
] as const;

export const method = {
  title: "El método Scream Lab en 4 fases",
  intro:
    "La distorsión vocal se puede enseñar paso a paso. En Scream Lab trabajamos con anatomía, feedback en tiempo real y grabaciones de tu progreso, para que cada sesión deje una habilidad concreta.",
  pillars: [
    {
      title: "Diagnóstico",
      text: "Primera sesión: evaluamos tu voz limpia, respiración y hábitos. Salimos con un plan de 8 semanas y objetivos claros.",
    },
    {
      title: "Técnica segura",
      text: "Falsas cuerdas, fry y compresión con el mínimo esfuerzo. Aprendes a sentir cuándo está bien y cuándo parar.",
    },
    {
      title: "Sonido propio",
      text: "Del ejercicio a la canción. Trabajamos tus temas, tu tono y tu resistencia para tocar en vivo sin quedarte afónico.",
    },
    {
      title: "Mantenimiento",
      text: "Calentamiento, hidratación, descanso y rutinas de gira. Lo que necesitas para gritar por años, no por meses.",
    },
  ],
} as const;

export const programs = {
  title: "Programas",
  intro: "Elige el formato que calza con tu tiempo y tu banda. Todos incluyen grabaciones de cada sesión y material de práctica.",
  items: [
    {
      name: "Clase de prueba",
      format: "Online o presencial · 45 min",
      text: "Diagnóstico completo de tu voz y una primera técnica de distorsión que te llevas a casa el mismo día.",
      bullets: ["Evaluación vocal", "Plan personalizado", "Sin compromiso"],
      cta: "Agendar prueba",
      featured: false,
    },
    {
      name: "Clases 1:1",
      format: "Online o presencial · 60 min",
      text: "El programa central. Sesiones semanales enfocadas en tu estilo, tus canciones y tus metas de escenario o estudio.",
      bullets: ["Feedback en tiempo real", "Grabación de cada clase", "Rutina de práctica semanal", "Soporte por WhatsApp"],
      cta: "Quiero clases 1:1",
      featured: true,
    },
    {
      name: "Intensivo grupal",
      format: "Presencial · Santiago · 4 horas",
      text: "Un sábado al mes. Técnica desde cero, salud vocal y práctica con micrófono en grupos de máximo 6 personas.",
      bullets: ["Cupos limitados", "Material descargable", "Comunidad de alumnos"],
      cta: "Reservar cupo",
      featured: false,
    },
  ],
} as const;

export const coach = {
  title: "Tu coach",
  name: "Tamara Rivas",
  role: "Vocalista de Chances y coach de voces extremas",
  // Foto: guarda el archivo en /public/coach/tamara.jpg y deja la ruta aquí. null muestra el placeholder.
  photo: null as string | null,
  photoAlt: "Tamara Rivas cantando en vivo con Chances",
  photoCredit: "",
  bio: [
    "Voz de la banda chilena Chances y fundadora de Scream Lab. Canta limpio y distorsionado en el mismo set, así que enseña desde el escenario, no desde la teoría.",
    "Creó Scream Lab para que nadie tenga que aprender a gritar rompiéndose la voz. Cada alumno sale de la primera clase con una técnica concreta y un plan.",
  ],
  band: {
    name: "Chances",
    instagram: "somoschances",
    url: "https://linktr.ee/somoschances",
  },
  highlights: ["Voz de Chances", "Clases online y presenciales", "Método propio en 4 fases"],
} as const;

export const testimonials = {
  title: "Lo que dicen en el laboratorio",
  items: [
    {
      quote:
        "Llevaba dos años quedando afónico después de cada tocata. En seis clases entendí qué estaba haciendo mal y ahora aguanto sets de una hora.",
      name: "Alumno de ejemplo",
      band: "Vocalista · Banda de deathcore",
      outcome: "Sets de 60 min sin afonía",
    },
    {
      quote:
        "Partí de cero, sin saber cantar limpio. La clase de prueba fue clara: primero respiración, después fry, después canciones. Funciona.",
      name: "Alumna de ejemplo",
      band: "Hardcore punk",
      outcome: "Primer fry estable en 5 semanas",
    },
    {
      quote:
        "Lo mejor es que grabamos todo. Escuchar mi progreso semana a semana me mantiene practicando.",
      name: "Alumno de ejemplo",
      band: "Metalcore",
      outcome: "Grabó su primer EP con voces propias",
    },
  ],
} as const;

export const freebie = {
  label: "Gratis",
  title: "Rutina de calentamiento de 10 minutos",
  text: "Pídela por WhatsApp y te la enviamos en audio, con las indicaciones para practicarla antes de cada ensayo.",
  cta: "Quiero la rutina",
  message: "Hola Scream Lab, quiero la rutina de calentamiento gratis.",
} as const;

export const pricing = {
  title: "Precios",
  intro: "Valores referenciales en pesos chilenos. Pagas por transferencia o en efectivo, sin matrícula.",
  tiers: [
    {
      name: "Clase de prueba",
      price: "$15.000",
      period: "única vez",
      features: ["45 minutos", "Diagnóstico vocal", "Plan de trabajo"],
      cta: "Agendar prueba",
      featured: false,
    },
    {
      name: "Pack 4 clases",
      price: "$85.000",
      period: "mensual",
      features: ["4 sesiones 1:1 de 60 min", "Grabaciones y material", "Soporte por WhatsApp", "Reagenda hasta 24 h antes"],
      cta: "Empezar ahora",
      featured: true,
    },
    {
      name: "Intensivo grupal",
      price: "$40.000",
      period: "por taller",
      features: ["4 horas presenciales", "Máximo 6 personas", "Material descargable"],
      cta: "Reservar cupo",
      featured: false,
    },
  ],
} as const;

export const faq = {
  title: "Preguntas frecuentes",
  items: [
    {
      q: "¿Gritar daña la voz?",
      a: "Gritar mal, sí. La distorsión vocal bien hecha usa las falsas cuerdas y el fry, no las cuerdas vocales verdaderas. Con técnica y descanso es tan segura como cantar limpio.",
    },
    {
      q: "¿Necesito saber cantar antes?",
      a: "No. Partimos desde tu punto actual. Sí trabajamos algo de voz limpia y respiración porque son la base de una distorsión controlada.",
    },
    {
      q: "¿Las clases online funcionan para esto?",
      a: "Sí. Usamos videollamada con audio de alta calidad y grabamos cada sesión. La mayoría de nuestros alumnos fuera de Santiago estudian 100% online.",
    },
    {
      q: "¿Qué estilos enseñan?",
      a: "Fry scream, false cord, growl bajo, pig squeal, tunnel throat, screamo y la mezcla con voz limpia. Adaptamos el plan al estilo de tu banda.",
    },
    {
      q: "¿Cuánto tiempo toma?",
      a: "Con una clase semanal y práctica de 15 minutos diarios, la mayoría logra una distorsión estable en 8 a 12 semanas. La resistencia para sets completos toma algunos meses más.",
    },
    {
      q: "¿Puedo pagar por clase?",
      a: "Sí. La clase de prueba y las sesiones sueltas se pagan por unidad; el pack mensual tiene mejor valor.",
    },
  ],
} as const;

export const contact = {
  title: "Agenda tu clase de prueba",
  intro:
    "Escríbenos por WhatsApp o deja tus datos. Respondemos el mismo día con horarios disponibles.",
  formLabels: {
    name: "Tu nombre",
    style: "Estilo o banda",
    goal: "¿Qué quieres lograr?",
    submit: "Enviar por WhatsApp",
  },
} as const;

export const footer = {
  legal: "Scream Lab. Todos los derechos reservados.",
  note: "Sitio construido con Next.js y desplegado en Vercel.",
  disclaimer:
    "Las clases son formación artística, no tratamiento médico. Si tienes dolor, ronquera persistente o un diagnóstico vocal, consulta a un fonoaudiólogo u otorrinolaringólogo antes de entrenar distorsión.",
} as const;
