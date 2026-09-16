'use client';

import { useState, useRef } from 'react';
import { episodesData } from '@/app/data/episodes';
import { EpisodeCard } from './EpisodeCard';

export function EpisodesSection() {
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const cardWidth = 340;

    carouselRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  const handleSeasonChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSeason(Number(e.target.value));

    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const currentEpisodes = episodesData[selectedSeason] || [];

  return (
    <section
      id="episodios"
      className="w-full max-w-7xl mx-auto px py-8 mb-8"
    >
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Episodios
        </h2>

        {/* Selector */}
        <div className="relative">
          <select
            id="season-select"
            aria-label="Elegir temporada"
            value={selectedSeason}
            onChange={handleSeasonChange}
            className="
              appearance-none
              min-w-[180px]
              px-4
              py-2.5
              pr-10
              rounded-lg
              bg-white/10
              border
              border-white/10
              backdrop-blur-xl
              text-white
              text-sm
              font-medium
              outline-none
              cursor-pointer
              transition-colors
              hover:bg-white/[0.15]
              focus:border-[#4FB0AE]/50
            "
          >
            {Object.keys(episodesData).map((season) => (
              <option
                key={season}
                value={season}
                className="bg-[#0f172a] text-white"
              >
                Temporada {season}
              </option>
            ))}
          </select>

          {/* Flecha del select */}
          <svg
            className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              w-4
              h-4
              text-slate-400
            "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m6 9 6 6 6-6"
            />
          </svg>
        </div>
      </div>

      {/* Carrusel */}
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
          ref={carouselRef}
          className="carousel scrollbar-none"
        >
          {currentEpisodes.map((ep) => (
            <EpisodeCard key={`${selectedSeason}-${ep.num}`} episode={ep} />
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
