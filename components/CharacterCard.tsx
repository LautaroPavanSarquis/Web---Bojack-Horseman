import Link from "next/link";
import Image from "next/image";

import type { Character } from "@/data/characters";

type CharacterCardProps = {
  character: Character;
};

export default function CharacterCard({
  character,
}: CharacterCardProps) {
  return (
    <Link
      href={`/characters/${character.slug}`}
      className="character-card glass"
    >
      <div className="character-card-image">
        <Image
          src={character.image}
          alt={character.name}
          fill
          sizes="280px"
        />
      </div>

      <div className="character-card-content">
        <div>
          <h2 className="text-lg font-semibold text-white">
            {character.name}
          </h2>

          <p className="mt-1 text-xs text-[var(--teal)]">
            {character.role} · {character.actor}
          </p>
        </div>

        <p className="character-card-bio">
          {character.description}
        </p>
      </div>
    </Link>
  );
}

