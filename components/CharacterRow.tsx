'use client';

import { useRef } from 'react';
import { CharacterCard, Character } from './CharacterCard';

interface CharacterRowProps {
  characters: Character[];
}

export function CharacterRow({ characters }: CharacterRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="personajes" className="py-8 px-[5%] max-w-7xl mx-auto">
      <div className="mb-6">
        <span className="text-[#e91e63] text-xs font-bold uppercase tracking-wider">
          Elenco
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-0.5">
          Personajes Principales
        </h2>
      </div>

      <div className="relative group">
        <button
          onClick={() => scroll('left')}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-black/70 hover:bg-[#00bcd4] hover:text-black text-white p-3 rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hidden md:flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={rowRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1"
        >
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          aria-label="Siguiente"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-black/70 hover:bg-[#00bcd4] hover:text-black text-white p-3 rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hidden md:flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}