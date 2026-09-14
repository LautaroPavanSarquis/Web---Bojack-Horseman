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
    <article className="character-card snap-start">
      <div className="character-card-image">
        <img
          src={character.image}
          alt={character.name}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <span className="absolute bottom-3 left-3 text-[#F1E4C3] text-xs font-semibold">
          {character.actor}
        </span>
      </div>

      <div className="character-card-content">
        <h3 className="text-sm md:text-base font-semibold text-white">
          {character.name}
        </h3>

        <span className="text-xs text-[#4FB0AE] font-semibold">
          {character.role}
        </span>

        <p className="character-card-bio">
          {character.bio}
        </p>
      </div>
    </article>
  );
}