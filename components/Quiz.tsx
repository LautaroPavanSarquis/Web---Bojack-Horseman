'use client';

import { useState } from 'react';
import Image from 'next/image';

type CharacterKey = 'bojack' | 'diane' | 'carolyn' | 'todd' | 'peanutbutter';

const CHARACTER_ORDER: CharacterKey[] = [
  'bojack',
  'diane',
  'carolyn',
  'todd',
  'peanutbutter',
];

interface CharacterResult {
  name: string;
  role: string;
  actor: string;
  accent: string;
  image: string;
  description: string;
  quote: string;
}

const CHARACTERS: Record<CharacterKey, CharacterResult> = {
  bojack: {
    name: 'BoJack Horseman',
    role: 'Protagonista',
    actor: 'Will Arnett',
    accent: '#C4574B',
    image: '/images/quiz/bojack.jpg',
    description:
      'Buscás validación desesperadamente pero le tenés pánico a la intimidad. Tendés al autosabotaje cuando las cosas van bien.',
    quote:
      'Cada día se vuelve un poco más fácil. Pero tenés que hacerlo todos los días, esa es la parte difícil.',
  },
  diane: {
    name: 'Diane Nguyen',
    role: 'Escritora',
    actor: 'Alison Brie',
    accent: '#5B7FBD',
    image: '/images/quiz/diane.jpg',
    description:
      'Idealista, analítica y extremadamente exigente con vos misma y con el resto. Buscás que todo tenga un propósito profundo.',
    quote:
      'No hay "buenos" o "malos"; solo somos personas haciendo lo que podemos. Pero tenemos la responsabilidad de intentar ser mejores.',
  },
  carolyn: {
    name: 'Princess Carolyn',
    role: 'Agente / Representante',
    actor: 'Amy Sedaris',
    accent: '#D6598C',
    image: '/images/quiz/carolyn.jpg',
    description:
      'La máquina imparable. Te ponés el mundo al hombro y solucionás la vida de todos, pero a costa de ignorar tus propias necesidades.',
    quote:
      'Nadie va a salvarte excepto vos mismo. Te caés cinco veces, te levantás seis y seguís empujando la piedra.',
  },
  todd: {
    name: 'Todd Chavez',
    role: 'Roomie de BoJack',
    actor: 'Aaron Paul',
    accent: '#D64545',
    image: '/images/quiz/todd.jpg',
    description:
      'Espíritu libre y creativo, pero sumido en una profunda inmadurez y falta de autosuficiencia. Flotás por la vida esquivando responsabilidades reales.',
    quote:
      'El sillón es tentador, pero necesitás tus propias paredes.',
  },
  peanutbutter: {
    name: 'Mr. Peanutbutter',
    role: 'Actor / Coprotagonista',
    actor: 'Paul F. Tompkins',
    accent: '#F2C94C',
    image: '/images/quiz/peanutbutter.jpg',
    description:
      'Optimismo inquebrantable y energía inagotable. Le huís a la negatividad manteniéndote siempre en movimiento.',
    quote: 'Está bien frenar y validar las emociones tristes cuando aparecen.',
  },
};

interface QuizOption {
  key: CharacterKey;
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

interface QuizQuestion {
  eyebrow: string;
  prompt: string;
  options: QuizOption[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    eyebrow: 'Proyecto & fracaso',
    prompt:
      'Estás a cargo de un proyecto clave, algo sale muy mal a mitad de camino y el fracaso parece inminente. ¿Cuál es tu reacción inmediata?',
    options: [
      {
        key: 'bojack',
        letter: 'A',
        text: 'Entro en un espiral de pánico, me paralizo y me autosaboteo del todo. Si igual iba a fallar, mejor arruinarlo yo mismo.',
      },
      {
        key: 'diane',
        letter: 'B',
        text: 'Me obsesiono buscando la falla ética o sistémica detrás del error. Necesito entender por qué estuvo mal para escribir una crítica constructiva.',
      },
      {
        key: 'carolyn',
        letter: 'C',
        text: 'Cero emoción, 100% acción. Armo tres planes de contingencia en 5 minutos y resuelvo el caos antes de que nadie se entere.',
      },
      {
        key: 'todd',
        letter: 'D',
        text: 'Me distraigo con una idea absurda en el camino y, por pura chiripa, esa tangente termina resolviendo el problema original.',
      },
      {
        key: 'peanutbutter',
        letter: 'E',
        text: 'Le pongo la mejor cara, organizo un evento para subir el ánimo del equipo y asumo que todo se va a arreglar solo.',
      },
    ],
  },
  {
    eyebrow: 'Un domingo a la tarde',
    prompt:
      'Es domingo a las 6 de la tarde, no tenés planes y te encontrás completamente solo/a en tu casa. ¿Qué pasa por tu cabeza?',
    options: [
      {
        key: 'bojack',
        letter: 'A',
        text: 'Un vacío existencial aplastante. Pongo la tele de fondo para no escuchar mis propios pensamientos.',
      },
      {
        key: 'diane',
        letter: 'B',
        text: 'Me pongo a procesar mis traumas sin resolver. Intento escribir o reflexionar, pero termino con una profunda melancolía.',
      },
      {
        key: 'carolyn',
        letter: 'C',
        text: 'Intento descansar, pero a los 10 minutos me da culpa no estar siendo productiva. Termino adelantando trabajo de la semana.',
      },
      {
        key: 'todd',
        letter: 'D',
        text: 'Transformo el living en un fuerte de sábanas, descubro un nuevo hobby aleatorio o me pongo a charlar con el del delivery.',
      },
      {
        key: 'peanutbutter',
        letter: 'E',
        text: '¿Soledad? ¡Jamás! Llamo a 5 personas, organizo una cena improvisada. Estar solo no es una opción válida.',
      },
    ],
  },
  {
    eyebrow: 'Vínculos & relaciones',
    prompt:
      'Alguien muy cercano a vos te confronta y te dice que le hiciste daño con una actitud tuya. ¿Cómo respondés?',
    options: [
      {
        key: 'bojack',
        letter: 'A',
        text: 'Me pongo a la defensiva, me victimizo y digo "ya sé que soy una basura", esperando que me terminen consolando a mí.',
      },
      {
        key: 'diane',
        letter: 'B',
        text: 'Escucho, me angustio internamente y analizo si la crítica es justa. Si lo es, me hundo en la culpa.',
      },
      {
        key: 'carolyn',
        letter: 'C',
        text: 'Busco solucionar el daño de forma práctica e inmediata, aunque me cueste postergar mis propios sentimientos.',
      },
      {
        key: 'todd',
        letter: 'D',
        text: 'Pido perdón con total sinceridad y de corazón. No suelo guardar rencor y prefiero volver a estar bien rápido.',
      },
      {
        key: 'peanutbutter',
        letter: 'E',
        text: 'Me confundo por completo porque nunca fue mi intención. Intento tapar el conflicto con afecto exagerado.',
      },
    ],
  },
  {
    eyebrow: 'Éxito & reconocimiento',
    prompt:
      'Lográs un hito gigante por el que trabajaste mucho tiempo. ¿Cómo te sentís al día siguiente?',
    options: [
      {
        key: 'bojack',
        letter: 'A',
        text: 'Igual de vacío que antes. Me doy cuenta de que alcanzar la meta no arregló mágicamente mi vida.',
      },
      {
        key: 'diane',
        letter: 'B',
        text: 'Cuestiono si realmente lo merezco o si este éxito tiene algún valor real en el gran esquema de las cosas.',
      },
      {
        key: 'carolyn',
        letter: 'C',
        text: 'Ni tiempo de festejar: ya estoy pensando en el próximo objetivo. Si me detengo, siento que pierdo el impulso.',
      },
      {
        key: 'todd',
        letter: 'D',
        text: 'Sorprendido pero feliz. Ni yo sé muy bien cómo llegué acá, pero ¡ey, qué buen viaje! A ver qué surge mañana.',
      },
      {
        key: 'peanutbutter',
        letter: 'E',
        text: '¡En la cima del mundo! Quiero compartir la alegría con todo el mundo y organizar una fiesta inolvidable.',
      },
    ],
  },
  {
    eyebrow: 'Tu visión del universo',
    prompt:
      'Si tuvieras que resumir tu filosofía de vida en una idea, ¿cuál sería?',
    options: [
      {
        key: 'bojack',
        letter: 'A',
        text: 'La vida es una serie de decisiones horribles y después te morís... o peor, no te morís y tenés que levantarte al día siguiente.',
      },
      {
        key: 'diane',
        letter: 'B',
        text: 'No hay "buenos" o "malos"; solo somos personas haciendo lo que podemos. Pero tenemos la responsabilidad de intentar ser mejores.',
      },
      {
        key: 'carolyn',
        letter: 'C',
        text: 'Nadie va a salvarte excepto vos mismo. Te caés cinco veces, te levantás seis y seguís empujando la piedra.',
      },
      {
        key: 'todd',
        letter: 'D',
        text: 'La vida es demasiado rara y maravillosa como para tomársela tan en serio. Dejá que las cosas fluyan.',
      },
      {
        key: 'peanutbutter',
        letter: 'E',
        text: 'El sentido de la vida es mantenerte ocupado con tonterías sin importancia hasta que eventualmente te morís.',
      },
    ],
  },
];

const EMPTY_SCORES: Record<CharacterKey, number> = {
  bojack: 0,
  diane: 0,
  carolyn: 0,
  todd: 0,
  peanutbutter: 0,
};

function getWinner(scores: Record<CharacterKey, number>): CharacterKey {
  return CHARACTER_ORDER.reduce((best, key) =>
    scores[key] > scores[best] ? key : best
  , CHARACTER_ORDER[0]);
}

export function Quiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<CharacterKey, number>>(EMPTY_SCORES);
  const [selectedOption, setSelectedOption] = useState<CharacterKey | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [visible, setVisible] = useState(true);

  const isLastQuestion = currentQuestion === QUESTIONS.length - 1;

  const handleAnswer = (key: CharacterKey) => {
    if (selectedOption) return;
    setSelectedOption(key);

    const nextScores = { ...scores, [key]: scores[key] + 1 };
    setScores(nextScores);

    setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        if (isLastQuestion) {
          setShowResult(true);
        } else {
          setCurrentQuestion((q) => q + 1);
        }
        setSelectedOption(null);
        setVisible(true);
      }, 250);
    }, 450);
  };

  const handleStart = () => {
    setVisible(false);
    setTimeout(() => {
      setStarted(true);
      setVisible(true);
    }, 250);
  };

  const handleRestart = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrentQuestion(0);
      setScores(EMPTY_SCORES);
      setSelectedOption(null);
      setShowResult(false);
      setStarted(false);
      setVisible(true);
    }, 250);
  };

  if (!started) {
    return (
      <section id="quiz" className="py-8 px max-w-7xl mx-auto">
        <div
          className={`glass p-6 md:p-10 rounded-2xl flex flex-col items-center text-center gap-5 ${
            visible ? 'quiz-transition-visible' : 'quiz-transition-enter'
          }`}
        >
          <span className="text-sm text-slate-400">Test de personalidad</span>

          <h3 className="text-2xl md:text-3xl font-bold text-white max-w-xl">
            ¿Qué personaje de BoJack Horseman sos?
          </h3>

          <p className="text-slate-300 leading-relaxed max-w-lg">
            5 preguntas sobre cómo enfrentás el fracaso, la soledad y el éxito.
            Respondé con sinceridad y descubrí a cuál de los cinco te parecés más.
          </p>

          <button
            onClick={handleStart}
            className="mt-2 px-6 py-2.5 rounded-lg bg-[var(--teal)] text-[#0a1128] font-extrabold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 hover:brightness-110"
          >
            Empezar el quiz
          </button>
        </div>
      </section>
    );
  }

  if (showResult) {
    const winnerKey = getWinner(scores);
    const winner = CHARACTERS[winnerKey];
    const totalAnswers = QUESTIONS.length;

    const affinities = CHARACTER_ORDER
      .map((key) => ({
        key,
        character: CHARACTERS[key],
        percentage: Math.round((scores[key] / totalAnswers) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage);

    return (
      <section id="quiz" className="py-8 px max-w-7xl mx-auto">
        <div
          className={`quiz-result-card p-6 md:p-8 rounded-2xl border-2 bg-white/10 backdrop-blur-2xl flex flex-col gap-8 ${
            visible ? 'quiz-transition-visible' : 'quiz-transition-enter'
          }`}
          style={{ '--accent': winner.accent } as React.CSSProperties}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="w-full md:w-56 flex-shrink-0">
              <div className="quiz-result-image">
                <Image
                  src={winner.image}
                  alt={winner.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 224px"
                />
                <div className="quiz-result-image-gradient" />
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-slate-400">
                  Sos...
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {winner.name}
                </h3>
                <span
                  className="text-sm font-semibold"
                  style={{ color: winner.accent }}
                >
                  {winner.role} · {winner.actor}
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-xl">
                {winner.description}
              </p>

              <blockquote className="quiz-result-quote text-base md:text-lg italic font-medium border-l-2 pl-4"
                style={{ borderColor: winner.accent }}
              >
                “{winner.quote}”
              </blockquote>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div className="flex flex-col gap-3">
            <span className="text-sm text-slate-400">Tu afinidad con cada personaje</span>

            <div className="flex flex-col gap-2.5">
              {affinities.map(({ key, character, percentage }) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="w-32 md:w-40 flex-shrink-0 text-xs md:text-sm text-slate-300 truncate">
                    {character.name}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: character.accent,
                      }}
                    />
                  </div>
                  <span className="w-10 flex-shrink-0 text-right text-xs text-slate-400">
                    {percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="quiz-restart-button self-center px-6 py-2.5 rounded-lg font-extrabold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95"
          >
            Repetir el quiz
          </button>
        </div>
      </section>
    );
  }

  const question = QUESTIONS[currentQuestion];

  return (
    <section id="quiz" className="py-8 px max-w-7xl mx-auto">
      <div
        className="glass p-6 md:p-8 rounded-2xl flex flex-col gap-6"
      >
        {/* Barra de progreso */}
        <div className="flex items-center gap-2">
          {QUESTIONS.map((_, i) => (
            <div key={i} className="quiz-progress-step">
              <div
                className="quiz-progress-step-fill"
                style={{
                  width:
                    i < currentQuestion
                      ? '100%'
                      : i === currentQuestion && selectedOption !== null
                      ? '100%'
                      : '0%',
                }}
              />
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col gap-6 ${
            visible ? 'quiz-transition-visible' : 'quiz-transition-enter'
          }`}
        >
          <div className="flex flex-col gap-2">
            <span className="text-sm text-slate-400">
              Pregunta {currentQuestion + 1} de {QUESTIONS.length} · {question.eyebrow}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
              {question.prompt}
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            {question.options.map((option) => (
              <button
                key={option.letter}
                onClick={() => handleAnswer(option.key)}
                disabled={selectedOption !== null}
                className={`quiz-option ${
                  selectedOption === option.key ? 'quiz-option-selected' : ''
                }`}
              >
                <span className="quiz-option-letter">{option.letter}</span>
                <span className="text-sm md:text-base leading-relaxed">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
