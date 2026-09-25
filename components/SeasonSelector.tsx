"use client";

type SeasonSelectorProps = {
  selectedSeason: number;
  onSeasonChange: (season: number) => void;
};

const seasons = [1, 2, 3, 4, 5, 6];

export default function SeasonSelector({
  selectedSeason,
  onSeasonChange,
}: SeasonSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {seasons.map((season) => (
        <button
          key={season}
          type="button"
          onClick={() => onSeasonChange(season)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            selectedSeason === season
              ? "bg-[var(--teal)] text-[var(--background)]"
              : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          Temporada {season}
        </button>
      ))}
    </div>
  );
}
