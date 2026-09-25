"use client";

import { useState } from "react";
import Image from "next/image";

import {
  CHARACTERS,
  CHARACTER_ORDER,
  QUESTIONS,
  type CharacterKey,
} from "@/data/quiz";

function createEmptyScores(): Record<CharacterKey, number> {
  return {
    bojack: 0,
    diane: 0,
    carolyn: 0,
    todd: 0,
    peanutbutter: 0,
  };
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] =
    useState<Record<CharacterKey, number>>(createEmptyScores);
  const [selectedOption, setSelectedOption] = useState<CharacterKey | null>(
    null
  );
  const [showResult, setShowResult] = useState(false);

  const question = QUESTIONS[currentQuestion];

  const handleAnswer = (character: CharacterKey) => {
    if (selectedOption) return;

    setSelectedOption(character);

    setScores((previousScores) => ({
      ...previousScores,
      [character]: previousScores[character] + 1,
    }));

    setTimeout(() => {
      if (currentQuestion === QUESTIONS.length - 1) {
        setShowResult(true);
      } else {
        setCurrentQuestion((previous) => previous + 1);
        setSelectedOption(null);
      }
    }, 500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScores(createEmptyScores());
    setSelectedOption(null);
    setShowResult(false);
  };

  const getResults = () => {
    const maxScore = Math.max(...Object.values(scores));

    return CHARACTER_ORDER.map((key) => ({
      key,
      score: scores[key],
      percentage:
        maxScore === 0 ? 0 : Math.round((scores[key] / maxScore) * 100),
      character: CHARACTERS[key],
    })).sort((a, b) => b.score - a.score);
  };

  if (showResult) {
    const results = getResults();
    const winner = results[0];

    return (
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div
          className="glass quiz-result-card mx-auto max-w-5xl overflow-hidden p-6 md:p-10"
          style={
            {
              "--accent": winner.character.accent,
            } as React.CSSProperties
          }
        >
          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
            <div className="quiz-result-image">
              <Image
                src={winner.character.image}
                alt={winner.character.name}
                fill
                sizes="280px"
              />

              <div className="quiz-result-image-gradient" />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-slate-400">
                Tu personaje es
              </p>

              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {winner.character.name}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {winner.character.role} · {winner.character.actor}
              </p>

              <p className="mt-6 text-base leading-relaxed text-slate-200">
                {winner.character.description}
              </p>

              <blockquote className="quiz-result-quote mt-6 border-l-2 pl-4 text-sm italic">
                “{winner.character.quote}”
              </blockquote>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Tus afinidades
            </h3>

            <div className="space-y-4">
              {results.map((result) => (
                <div key={result.key}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-300">
                      {result.character.name}
                    </span>

                    <span className="text-slate-500">
                      {result.score}/{QUESTIONS.length}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${result.percentage}%`,
                        backgroundColor: result.character.accent,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={restartQuiz}
            className="quiz-restart-button mt-8 rounded-full px-6 py-3 text-sm font-semibold transition-all"
          >
            Repetir quiz
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="mx-auto max-w-4xl px-5 py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)]">
          ¿Qué personaje sos?
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Descubrilo con este quiz
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          Cinco preguntas. Cero respuestas correctas. Probablemente demasiada
          psicología improvisada.
        </p>
      </div>

      <div className="mb-8 flex gap-2">
        {QUESTIONS.map((_, index) => (
          <div key={index} className="quiz-progress-step">
            <div
              className="quiz-progress-step-fill"
              style={{
                width: index < currentQuestion ? "100%" : "0%",
              }}
            />
          </div>
        ))}
      </div>

      <div className="glass p-5 md:p-8">
        <div
          key={currentQuestion}
          className="quiz-transition-visible"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">
            {question.eyebrow}
          </p>

          <h3 className="mt-3 text-xl font-semibold leading-relaxed text-white md:text-2xl">
            {question.prompt}
          </h3>

          <div className="mt-7 space-y-3">
            {question.options.map((option) => (
              <button
                key={option.key}
                type="button"
                disabled={selectedOption !== null}
                onClick={() => handleAnswer(option.key)}
                className={`quiz-option ${
                  selectedOption === option.key
                    ? "quiz-option-selected"
                    : ""
                }`}
              >
                <span className="quiz-option-letter">
                  {option.letter}
                </span>

                <span>{option.text}</span>
              </button>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-slate-500">
            Pregunta {currentQuestion + 1} de {QUESTIONS.length}
          </p>
        </div>
      </div>
    </section>
  );
}

