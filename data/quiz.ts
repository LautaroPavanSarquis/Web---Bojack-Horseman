export type CharacterKey =
  | "bojack"
  | "diane"
  | "carolyn"
  | "todd"
  | "peanutbutter";

export type QuizOption = {
  key: CharacterKey;
  letter: "A" | "B" | "C" | "D" | "E";
  text: string;
};

export type QuizQuestion = {
  eyebrow: string;
  prompt: string;
  options: QuizOption[];
};

export type CharacterResult = {
  name: string;
  role: string;
  actor: string;
  accent: string;
  image: string;
  description: string;
  quote: string;
};

export const CHARACTER_ORDER: CharacterKey[] = [
  "bojack",
  "diane",
  "carolyn",
  "todd",
  "peanutbutter",
];

export const CHARACTERS: Record<CharacterKey, CharacterResult> = {
  bojack: {
    name: "BoJack Horseman",
    role: "Protagonista",
    actor: "Will Arnett",
    accent: "#C4574B",
    image: "/images/bojack-quiz.jpg",
    description:
      "Buscás validación desesperadamente pero le tenés pánico a la intimidad. Tendés al autosabotaje cuando las cosas van bien.",
    quote:
      "Cada día se vuelve un poco más fácil. Pero tenés que hacerlo todos los días, esa es la parte difícil.",
  },

  diane: {
    name: "Diane Nguyen",
    role: "Escritora",
    actor: "Alison Brie",
    accent: "#5B7FBD",
    image: "/images/dn.jpg",
    description:
      "Idealista, analítica y extremadamente exigente con vos misma y con el resto. Buscás que todo tenga un propósito profundo.",
    quote:
      'No hay "buenos" o "malos"; solo somos personas haciendo lo que podemos. Pero tenemos la responsabilidad de intentar ser mejores.',
  },

  carolyn: {
    name: "Princess Carolyn",
    role: "Agente / Representante",
    actor: "Amy Sedaris",
    accent: "#D6598C",
    image: "/images/pc-quiz.jpg",
    description:
      "La máquina imparable. Te ponés el mundo al hombro y solucionás la vida de todos, pero a costa de ignorar tus propias necesidades.",
    quote:
      "Nadie va a salvarte excepto vos mismo. Te caés cinco veces, te levantás seis y seguís empujando la piedra.",
  },

  todd: {
    name: "Todd Chavez",
    role: "Roomie de BoJack",
    actor: "Aaron Paul",
    accent: "#D64545",
    image: "/images/todd.jpg",
    description:
      "Espíritu libre y creativo, pero sumido en una profunda inmadurez y falta de autosuficiencia. Flotás por la vida esquivando responsabilidades reales.",
    quote: "El sillón es tentador, pero necesitás tus propias paredes.",
  },

  peanutbutter: {
    name: "Mr. Peanutbutter",
    role: "Actor / Coprotagonista",
    actor: "Paul F. Tompkins",
    accent: "#F2C94C",
    image: "/images/mp.jpg",
    description:
      "Optimismo inquebrantable y energía inagotable. Le huís a la negatividad manteniéndote siempre en movimiento.",
    quote: "Está bien frenar y validar las emociones tristes cuando aparecen.",
  },
};

export const QUESTIONS: QuizQuestion[] = [
  {
    eyebrow: "Proyecto & fracaso",
    prompt:
      "Estás a cargo de un proyecto clave, algo sale muy mal a mitad de camino y el fracaso parece inminente. ¿Cuál es tu reacción inmediata?",
    options: [
      {
        key: "bojack",
        letter: "A",
        text: "Entro en un espiral de pánico, me paralizo y me autosaboteo del todo. Si igual iba a fallar, mejor arruinarlo yo mismo.",
      },
      {
        key: "diane",
        letter: "B",
        text: "Me obsesiono buscando la falla ética o sistémica detrás del error. Necesito entender por qué estuvo mal para escribir una crítica constructiva.",
      },
      {
        key: "carolyn",
        letter: "C",
        text: "Cero emoción, 100% acción. Armo tres planes de contingencia en 5 minutos y resuelvo el caos antes de que nadie se entere.",
      },
      {
        key: "todd",
        letter: "D",
        text: "Me distraigo con una idea absurda en el camino y, por pura chiripa, esa tangente termina resolviendo el problema original.",
      },
      {
        key: "peanutbutter",
        letter: "E",
        text: "Le pongo la mejor cara, organizo un evento para subir el ánimo del equipo y asumo que todo se va a arreglar solo.",
      },
    ],
  },

  {
    eyebrow: "Un domingo a la tarde",
    prompt:
      "Es domingo a las 6 de la tarde, no tenés planes y te encontrás completamente solo/a en tu casa. ¿Qué pasa por tu cabeza?",
    options: [
      {
        key: "bojack",
        letter: "A",
        text: "Un vacío existencial aplastante. Pongo la tele de fondo para no escuchar mis propios pensamientos.",
      },
      {
        key: "diane",
        letter: "B",
        text: "Me pongo a procesar mis traumas sin resolver. Intento escribir o reflexionar, pero termino con una profunda melancolía.",
      },
      {
        key: "carolyn",
        letter: "C",
        text: "Intento descansar, pero a los 10 minutos me da culpa no estar siendo productiva. Termino adelantando trabajo de la semana.",
      },
      {
        key: "todd",
        letter: "D",
        text: "Transformo el living en un fuerte de sábanas, descubro un nuevo hobby aleatorio o me pongo a charlar con el del delivery.",
      },
      {
        key: "peanutbutter",
        letter: "E",
        text: "¿Soledad? ¡Jamás! Llamo a 5 personas, organizo una cena improvisada. Estar solo no es una opción válida.",
      },
    ],
  },

  {
    eyebrow: "Vínculos & relaciones",
    prompt:
      "Alguien muy cercano a vos te confronta y te dice que le hiciste daño con una actitud tuya. ¿Cómo respondés?",
    options: [
      {
        key: "bojack",
        letter: "A",
        text: 'Me pongo a la defensiva, me victimizo y digo "ya sé que soy una basura", esperando que me terminen consolando a mí.',
      },
      {
        key: "diane",
        letter: "B",
        text: "Escucho, me angustio internamente y analizo si la crítica es justa. Si lo es, me hundo en la culpa.",
      },
      {
        key: "carolyn",
        letter: "C",
        text: "Busco solucionar el daño de forma práctica e inmediata, aunque me cueste postergar mis propios sentimientos.",
      },
      {
        key: "todd",
        letter: "D",
        text: "Pido perdón con total sinceridad y de corazón. No suelo guardar rencor y prefiero volver a estar bien rápido.",
      },
      {
        key: "peanutbutter",
        letter: "E",
        text: "Me confundo por completo porque nunca fue mi intención. Intento tapar el conflicto con afecto exagerado.",
      },
    ],
  },

  {
    eyebrow: "Éxito & reconocimiento",
    prompt:
      "Lográs un hito gigante por el que trabajaste mucho tiempo. ¿Cómo te sentís al día siguiente?",
    options: [
      {
        key: "bojack",
        letter: "A",
        text: "Igual de vacío que antes. Me doy cuenta de que alcanzar la meta no arregló mágicamente mi vida.",
      },
      {
        key: "diane",
        letter: "B",
        text: "Cuestiono si realmente lo merezco o si este éxito tiene algún valor real en el gran esquema de las cosas.",
      },
      {
        key: "carolyn",
        letter: "C",
        text: "Ni tiempo de festejar: ya estoy pensando en el próximo objetivo. Si me detengo, siento que pierdo el impulso.",
      },
      {
        key: "todd",
        letter: "D",
        text: "Sorprendido pero feliz. Ni yo sé muy bien cómo llegué acá, pero ¡ey, qué buen viaje! A ver qué surge mañana.",
      },
      {
        key: "peanutbutter",
        letter: "E",
        text: "¡En la cima del mundo! Quiero compartir la alegría con todo el mundo y organizar una fiesta inolvidable.",
      },
    ],
  },

  {
    eyebrow: "Tu visión del universo",
    prompt:
      "Si tuvieras que resumir tu filosofía de vida en una idea, ¿cuál sería?",
    options: [
      {
        key: "bojack",
        letter: "A",
        text: "La vida es una serie de decisiones horribles y después te morís... o peor, no te morís y tenés que levantarte al día siguiente.",
      },
      {
        key: "diane",
        letter: "B",
        text: 'No hay "buenos" o "malos"; solo somos personas haciendo lo que podemos. Pero tenemos la responsabilidad de intentar ser mejores.',
      },
      {
        key: "carolyn",
        letter: "C",
        text: "Nadie va a salvarte excepto vos mismo. Te caés cinco veces, te levantás seis y seguís empujando la piedra.",
      },
      {
        key: "todd",
        letter: "D",
        text: "La vida es demasiado rara y maravillosa como para tomársela tan en serio. Dejá que las cosas fluyan.",
      },
      {
        key: "peanutbutter",
        letter: "E",
        text: "El sentido de la vida es mantenerte ocupado con tonterías sin importancia hasta que eventualmente te morís.",
      },
    ],
  },
];