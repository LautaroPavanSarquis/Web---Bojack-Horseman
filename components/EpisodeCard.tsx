import { Episode } from '@/app/data/episodes';

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="glass episode-card snap-start">
      <div className="episode-card-image">
        <img src={episode.img} alt={episode.titulo} />

        <div className="episode-card-gradient" />

        <span className="episode-duration">{episode.duracion}</span>
      </div>

      <div className="episode-card-content">
        <h3 className="episode-card-title">
          {episode.num}. {episode.titulo}
        </h3>

        <p className="episode-card-description line-clamp-3">
          {episode.desc}
        </p>
      </div>
    </article>
  );
}
