"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="hero" className="pt-[130px]">
      {/* Logo */}
      <div className="max-w-7xl mx-auto px-[5%] pb-8 flex justify-center">
        <Image
          src="/images/logo-netflix.webp"
          alt="BoJack Horseman"
          width={520}
          height={140}
          priority
          className="w-[240px] sm:w-[320px] md:w-[800px] h-auto"        
        />
      </div>

      {/* Video autoplay */}
      <div className="relative w-full max-w-7xl mx-auto aspect-video overflow-hidden rounded-2xl border border-[#4FB0AE]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <video
          ref={videoRef}
          src="/videos/HeroVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Gradient inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent pointer-events-none" />

        {/* Botón de sonido */}
        <button
          onClick={toggleMute}
          aria-label={muted ? "Activar sonido" : "Silenciar"}
          className="
            absolute bottom-4 right-4
            w-10 h-10 rounded-full
            bg-[#0a1128]/70 backdrop-blur-md
            border border-[#F1E4C3]/30
            flex items-center justify-center
            text-[#F1E4C3]
            hover:bg-[#4FB0AE]/40
            transition-colors
          "
        >
          {muted ? (
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11 4a1 1 0 0 0-1.7-.7L4.58 8H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.59l4.7 4.7A1 1 0 0 0 11 20zM5.7 9.7 9 6.42V17.6l-3.3-3.3-.29-.29H2v-4h3.41zm9.6 0 2.29 2.3-2.3 2.3 1.42 1.4L19 13.42l2.3 2.3 1.4-1.42-2.28-2.3 2.3-2.3-1.42-1.4-2.3 2.28-2.3-2.3z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11 4a1 1 0 0 0-1.7-.7L4.58 8H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.59l4.7 4.7A1 1 0 0 0 11 20zM5.7 9.7 9 6.42V17.6l-3.3-3.3-.29-.29H2v-4h3.41zM17 12a4 4 0 0 0-2-3.46v6.92A4 4 0 0 0 17 12z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Información de la serie */}
      <div className="max-w-7xl mx-auto px py-8">
        <div
          className="
            flex flex-col
            items-start
            gap-3
            p-4 md:p-6
            rounded-2xl
            border-2 border-white/[0.04]
            bg-white/10
            backdrop-blur-2xl
          "
        >
          {/* Título + metadata */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              BoJack Horseman
            </h1>

            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm md:text-base text-slate-300">
              <li>2020</li>
              <li>6 temporadas</li>
              <li>16+</li>
              <li>Comedia</li>
            </ul>
          </div>

          {/* Sinopsis + créditos */}
          <div className="w-full flex flex-col gap-5">
            <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-5xl">
              Conocé al caballo más amado de las comedias de los 90... Veinte años después, BoJack es un cincuentón malhumorado, 
              con problemas de adicción y una mansión que ya no sabe cómo llenar. Entre excesos y malas decisiones busca recuperar la fama 
              y volver al estrellato en un Hollywood tan caótico como él.
            </p>

            {/* Separador */}
            <div className="w-full h-px bg-white/10" />

            {/* Créditos */}
            <div className="flex flex-col gap-1.5 text-xs md:text-sm text-slate-400">
              <p>
                <span className="text-[#F1E4C3] font-semibold">
                  Protagonizada por:
                </span>{" "}
                Will Arnett, Aaron Paul y Amy Sedaris
              </p>

              <p>
                <span className="text-[#F1E4C3] font-semibold">
                  Creada por:
                </span>{" "}
                Raphael Bob-Waksberg
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}