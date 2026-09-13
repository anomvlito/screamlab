/**
 * Todo el texto del sitio vive aquí para editarlo sin tocar componentes.
 * Los precios y los testimonios de alumnos son referenciales: reemplázalos antes de publicar.
 * Los datos de Tamara y Chances salen de prensa (Rockaxis, Expectador, Parlante, Bandcamp).
 */

export const nav = [
  { href: "#metodo", label: "Método" },
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
    "Scream, growl, fry y falsas cuerdas con técnica segura. Clases online y presenciales con Tamara Rivas, voz de Chances.",
  primaryCta: "Agenda tu clase de prueba",
  secondaryCta: "Ver programas",
  proof: [
    { value: "1:1", label: "Clases a tu medida" },
    { value: "8", label: "Semanas para tu primera distorsión estable" },
    { value: "100%", label: "Técnica sin dolor ni afonía" },
  ],
} as const;

/** Escenarios reales de Chances con Tamara en la voz (prensa 2024 a 2026). */
export const stages = {
  label: "La coach ha compartido escenario con",
  items: ["Korn", "Meshuggah", "Converge", "Black Veil Brides", "The Ghost Inside", "Lollapalooza Chile 2025", "REC 2025"],
} as const;

export const techniques = [
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
  eyebrow: "El método",
  title: "Un laboratorio, no un misterio",
  intro:
    "La distorsión vocal se enseña paso a paso. Trabajamos con anatomía, feedback en tiempo real y grabaciones de tu progreso, para que cada sesión deje una habilidad concreta.",
  steps: [
    {
      title: "Diagnóstico",
      text: "Evaluamos tu voz limpia, respiración y hábitos. Sales de la primera sesión con un plan de 8 semanas y objetivos claros.",
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

export const paths = {
  eyebrow: "Punto de partida",
  title: "Elige tu camino",
  intro: "Tres puntos de partida distintos, un mismo laboratorio. En la clase de prueba definimos cuál es el tuyo.",
  items: [
    {
      name: "Fry scream",
      who: "Post-hardcore, metalcore, screamo",
      text: "Distorsión aguda y controlada desde el vocal fry. Ideal si partes de cero o tu voz es liviana.",
    },
    {
      name: "False cord",
      who: "Death, deathcore, hardcore",
      text: "Growl medio y bajo con las falsas cuerdas. Potencia, cuerpo y resistencia para sets largos.",
    },
    {
      name: "Cantas y quieres grit",
      who: "Rock, punk, voces limpias",
      text: "Ya cantas y quieres agregar rasgado y distorsión sin perder afinación ni salud vocal.",
    },
  ],
} as const;

export const beforeAfter = {
  eyebrow: "Resultados",
  title: "Antes y después",
  intro: "El mismo alumno, la misma frase: primera sesión y semana diez. Sin filtros ni edición.",
  // Sube los audios a /public/audio/antes.mp3 y /public/audio/despues.mp3 y cambia ready a true.
  ready: false,
  before: { label: "Sesión 1", src: "/audio/antes.mp3" },
  after: { label: "Semana 10", src: "/audio/despues.mp3" },
  pending: "Estamos grabando los primeros ejemplos con alumnos reales. Mientras tanto, escucha los clips en Instagram.",
} as const;

export const programs = {
  eyebrow: "Programas",
  title: "Elige tu formato",
  intro: "Online o presencial en Santiago. Todos incluyen grabación de cada sesión y material de práctica.",
  items: [
    {
      name: "Clase de prueba",
      format: "Online o presencial · 45 min",
      text: "Diagnóstico completo de tu voz y una primera técnica de distorsión que te llevas el mismo día.",
      bullets: ["Evaluación vocal", "Plan personalizado", "Sin compromiso"],
      cta: "Agendar prueba",
      featured: false,
    },
    {
      name: "Clases 1:1",
      format: "Online o presencial · 60 min",
      text: "El programa central. Sesiones semanales enfocadas en tu estilo, tus canciones y tus metas de escenario o estudio.",
      bullets: ["Feedback en tiempo real", "Grabación de cada clase", "Rutina semanal de práctica", "Soporte por WhatsApp"],
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
  eyebrow: "Tu coach",
  name: "Tamara Rivas",
  role: "Voz de Chances · Coach de distorsiones vocales",
  // Guarda la foto en /public/coach/tamara.jpg y pon la ruta aquí. null muestra el placeholder.
  photo: null as string | null,
  photoAlt: "Tamara Rivas cantando en vivo con Chances",
  photoCredit: "",
  bio: [
    "Vocalista de Chances, banda santiaguina de metalcore y post-hardcore. Con ellos grabó el disco homónimo (2023), tocó en Lollapalooza Chile 2025 y ha abierto para Meshuggah, Converge, Black Veil Brides, The Ghost Inside y Korn.",
    "Diplomada en voz y formada en pedagogía vocal contemporánea, lleva más de nueve años estudiando la voz y más de cuatro enseñando distorsiones: guturales, screams y voz rasgada, presencial y online.",
    "Fundó Scream Lab para enseñar lo que usa cada fin de semana en el escenario: cómo gritar con potencia sin destruir la voz.",
  ],
  pullQuote: {
    text: "Un grito melódico y profundo, pero crudo y filoso.",
    source: "Rockaxis, reseña del disco Chances (2023)",
    url: "https://www.rockaxis.com/chile/disco/40271/chances-chances/",
  },
  band: {
    name: "Chances",
    instagram: "somoschances",
    url: "https://linktr.ee/somoschances",
    spotify: "https://open.spotify.com/artist/43rnFVPi0HzBK1CTrjIhBZ",
    youtube: "https://www.youtube.com/@somoschances",
  },
  facts: [
    { value: "+9", label: "años estudiando la voz" },
    { value: "+4", label: "años enseñando distorsión" },
    { value: "2025", label: "Lollapalooza Chile con Chances" },
  ],
} as const;

export const press = {
  eyebrow: "Prensa",
  title: "Lo que dicen de la voz de tu coach",
  items: [
    {
      quote:
        "Tamara Rivas se acopla con un dominio intempestivo en cada verso, con una destreza de emoción y ejecución desde un grito melódico y profundo pero crudo y filoso.",
      source: "Rockaxis",
      context: "Reseña del disco Chances, 2023",
      url: "https://www.rockaxis.com/chile/disco/40271/chances-chances/",
    },
    {
      quote:
        "El grupo encabezado por la gran vocalista Tamara Rivas tiene mucha experiencia en estas instancias, aperturando los shows de grandes bandas internacionales en múltiples ocasiones.",
      source: "Rockaxis",
      context: "Korn en el Estadio Nacional, 2026",
      url: "https://www.rockaxis.com/rock/show/50535/korn-un-requiem-de-brutalidad/",
    },
    {
      quote:
        "Que una banda chilena de metalcore se presente en uno de los stage principales del festival no es para nada común. Chances se ha ganado su posición a punta de una ética de trabajo indiscutible.",
      source: "Expectador",
      context: "Lollapalooza Chile 2025",
      url: "https://expectador.cl/2025/03/24/lollapalooza-chile-2025-dia-tres/",
    },
  ],
} as const;

export const testimonials = {
  eyebrow: "Alumnos",
  title: "Lo que dicen en el laboratorio",
  items: [
    {
      quote:
        "Llevaba dos años quedando afónico después de cada tocata. En seis clases entendí qué estaba haciendo mal y ahora aguanto sets de una hora.",
      name: "Alumno de ejemplo",
      band: "Vocalista · deathcore",
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
      quote: "Lo mejor es que grabamos todo. Escuchar mi progreso semana a semana me mantiene practicando.",
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
  eyebrow: "Precios",
  title: "Sin matrícula, sin letra chica",
  intro: "Valores referenciales en pesos chilenos. Pagas por transferencia o en efectivo.",
  tiers: [
    {
      name: "Clase de prueba",
      price: "$15.000",
      period: "una vez",
      features: ["45 minutos", "Diagnóstico vocal", "Plan de trabajo"],
      cta: "Agendar prueba",
      featured: false,
    },
    {
      name: "Pack 4 clases",
      price: "$85.000",
      period: "al mes",
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

export const guarantee = {
  title: "Garantía del laboratorio",
  text: "Si después de la clase de prueba sientes que el método no es para ti, no pagas nada más. Y si en 8 semanas de clases 1:1 no logras tu primera distorsión estable, seguimos trabajando sin costo hasta que la tengas.",
} as const;

export const faq = {
  eyebrow: "Dudas",
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
  eyebrow: "Contacto",
  title: "Agenda tu clase de prueba",
  intro: "Escríbenos por WhatsApp o deja tus datos. Respondemos el mismo día con horarios disponibles.",
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
