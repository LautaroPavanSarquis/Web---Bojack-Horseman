'use client';

import { useState } from 'react';

interface Quote {
  quote: string;
  author: string;
}

const QUOTES: Quote[] = [
  {
    quote: "Cada día se vuelve más fácil. Pero tienes que hacerlo todos los días, esa es la parte difícil. Pero se vuelve más fácil.",
    author: "Jogger Mono"
  },
  {
    quote: "A veces necesitas tomarte un descanso de ti mismo.",
    author: "BoJack Horseman"
  },
  {
    quote: "No puedes seguir haciendo cosas malas y luego sentirte mal por ti mismo como si eso lo solucionara. Necesitas ser mejor.",
    author: "Todd Chavez"
  },
  {
    quote: "En Hollywoo, todo el mundo ama a los perros, pero a nadie le importa cómo se sienten.",
    author: "Mr. Peanutbutter"
  },
  {
    quote: "Tienes que ser la heroína de tu propia historia.",
    author: "Princess Carolyn"
  }
];

export function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(QUOTES[0]);

  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex]);
  };

  return (
    <section id="quiz" className="py-8 px-[5%] max-w-7xl mx-auto">
      <div className="p-6 md:p-8 rounded-2xl border border-[#00bcd4]/20 bg-white/[0.02] backdrop-blur-xl flex flex-col items-center text-center gap-4 relative overflow-hidden shadow-2xl">
        <span className="text-[#e91e63] text-xs font-extrabold uppercase tracking-widest">
          Frases Memorables
        </span>

        <blockquote className="max-w-2xl text-lg md:text-xl font-medium italic text-slate-200 min-h-[80px] flex items-center justify-center">
          “{currentQuote.quote}”
        </blockquote>

        <cite className="text-sm font-bold text-[#00bcd4] not-italic">
          — {currentQuote.author}
        </cite>

        <button
          onClick={handleRandomQuote}
          className="mt-2 px-6 py-2.5 rounded-lg bg-[#00bcd4] hover:bg-[#00bcd4]/80 text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-[0_0_15px_rgba(0,188,212,0.4)]"
        >
          Generar Otra Frase
        </button>
      </div>
    </section>
  );
}