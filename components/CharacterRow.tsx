'use client';

import { useRef } from 'react';
import { CharacterCard, Character } from './CharacterCard';

interface CharacterRowProps {
  characters: Character[];
}

export function CharacterRow({ characters }: CharacterRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!rowRef.current) return;

    const cardWidth = 300;

    rowRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="personajes"
      className="w-full max-w-7xl mx-auto px py-8 mb-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Personajes principales
        </h2>
      </div>

      <div className="carousel-container relative">
        <button
          onClick={() => scroll('left')}
          aria-label="Anterior"
          className="carousel-button left-0 top-1/2 -translate-x-4 -translate-y-1/2 z-20 hidden md:flex"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div
          ref={rowRef}
          className="carousel scrollbar-none"
        >
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
            />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          aria-label="Siguiente"
          className="carousel-button right-0 top-1/2 translate-x-4 -translate-y-1/2 z-20 hidden md:flex"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
            />
          </svg>
        </button>
      </div>
    </section>
  );
}