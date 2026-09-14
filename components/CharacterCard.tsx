export interface Character {
  id: string | number;
  name: string;
  role: string;
  actor: string;
  image: string;
  bio: string;
}

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className="group flex-none w-[260px] md:w-[280px] snap-start rounded-xl p-4 bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col gap-3 hover:border-[#00bcd4]/50 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-lg">
      <div className="relative w-full h-[220px] rounded-lg overflow-hidden border border-white/5 bg-[#0f172a]">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
        <span className="absolute bottom-2 left-2 text-[#00bcd4] text-xs font-mono font-bold">
          {character.actor}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-base text-white group-hover:text-[#00bcd4] transition-colors">
          {character.name}
        </h3>
        <span className="text-xs text-[#e91e63] font-semibold">
          {character.role}
        </span>
        <p className="text-xs text-slate-400 line-clamp-3 leading-snug mt-1">
          {character.bio}
        </p>
      </div>
    </article>
  );
}