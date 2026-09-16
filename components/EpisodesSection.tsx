'use client';

import { useState, useRef } from 'react';
import { episodesData } from '@/app/data/episodes';

export function EpisodesSection() {
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;

      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
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
        <div className="flex flex-col gap-1">
          <label
            htmlFor="season-select"
            className="text-xs text-slate-400"
          >
          </label>

          <div className="relative">
            <select
              id="season-select"
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
      </div>

      {/* Carrusel */}
      <div className="relative group">
        {/* Flecha izquierda */}
        <button
          onClick={() => scroll('left')}
          aria-label="Anterior"
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            -translate-x-4
            z-20
            w-11
            h-11
            rounded-full
            bg-black/75
            hover:bg-[#4FB0AE]
            hover:text-[#0a1128]
            text-white
            border
            border-white/10
            backdrop-blur-md
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            hidden
            md:flex
            items-center
            justify-center
            shadow-xl
          "
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

        {/* Cards */}
        <div
          ref={carouselRef}
          className="
            flex
            gap-5
            overflow-x-auto
            snap-x
            snap-mandatory
            scrollbar-none
            pb-4
            pt-1
          "
        >
          {currentEpisodes.map((ep) => (
            <article
              key={`${selectedSeason}-${ep.num}`}
              className="
                group/card
                flex-none
                w-[300px]
                md:w-[340px]
                snap-start
                overflow-hidden
                rounded-xl
                bg-white/[0.04]
                border
                border-white/[0.08]
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/[0.07]
                hover:border-[#4FB0AE]/40
                hover:-translate-y-1
                shadow-lg
              "
            >
              {/* Imagen */}
              <div className="relative w-full aspect-video overflow-hidden bg-[#0f172a]">
                <img
                  src={ep.img}
                  alt={ep.titulo}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover/card:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* Degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Duración */}
                <span
                  className="
                    absolute
                    bottom-3
                    right-3
                    px-2
                    py-1
                    rounded-md
                    bg-black/75
                    backdrop-blur-sm
                    text-white
                    text-xs
                    font-medium
                  "
                >
                  {ep.duracion}
                </span>
              </div>

              {/* Información */}
              <div className="p-4 flex flex-col gap-2">
                <h3
                  className="
                    text-sm
                    md:text-base
                    font-semibold
                    text-white
                    leading-snug
                    group-hover/card:text-[#4FB0AE]
                    transition-colors
                  "
                >
                  {ep.num}. {ep.titulo}
                </h3>

                <p
                  className="
                    text-xs
                    md:text-sm
                    text-slate-400
                    leading-relaxed
                    line-clamp-3
                  "
                >
                  {ep.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={() => scroll('right')}
          aria-label="Siguiente"
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            translate-x-4
            z-20
            w-11
            h-11
            rounded-full
            bg-black/75
            hover:bg-[#4FB0AE]
            hover:text-[#0a1128]
            text-white
            border
            border-white/10
            backdrop-blur-md
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            hidden
            md:flex
            items-center
            justify-center
            shadow-xl
          "
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