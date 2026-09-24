import CharacterCard from "@/components/CharacterCard";
import { characters } from "@/data/characters";

export default function CharactersPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)]">
          The Characters
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
          Personajes
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          Conocé a los personajes que hacen de Hollywoo un lugar todavía más
          complicado de lo necesario.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {characters.map((character) => (
          <CharacterCard
            key={character.slug}
            character={character}
          />
        ))}
      </div>
    </main>
  );
}
