import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { EpisodesSection } from '@/components/EpisodesSection';
import { CharacterRow } from '@/components/CharacterRow';
import { QuoteGenerator } from '@/components/QuoteGenerator';

const charactersData = [
  {
    id: 1,
    name: "BoJack Horseman",
    role: "Protagonista",
    actor: "Will Arnett",
    image: "/images/bojack.jpg",
    bio: "Ex estrella de la sitcom 'Horsin' Around' de los 90, luchando con sus adicciones y depresión en Hollywoo."
  },
  {
    id: 2,
    name: "Princess Carolyn",
    role: "Agente / Representante",
    actor: "Amy Sedaris",
    image: "/images/pc.jpg",
    bio: "Una gata rosada adicta al trabajo que intenta equilibrar su exigente carrera con sus deseos de formar una familia."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1128] text-slate-100 font-sans selection:bg-[#00bcd4] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <EpisodesSection />
        <CharacterRow characters={charactersData} />
        <QuoteGenerator />
      </main>
    </div>
  );
}