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
    bio: 'Estrella de la exitosa comedia de los años 90 "Horsin\' Around". Vive atrapado en la depresión, el cinismo, el alcoholismo y la necesidad constante de validación tras perder la fama.'
  },
  {
    id: 2,
    name: "Princess Carolyn",
    role: "Agente / Representante",
    actor: "Amy Sedaris",
    image: "/images/pc.jpg",
    bio: 'Agente de talentos y expareja de BoJack. Es sumamente trabajadora, ambiciosa y resiliente, aunque a menudo prioriza resolver los problemas de los demás antes que los suyos propios.',
  },  
  {
    id: 3,
    name: "Diane Nguyen",
    role: "Escritora",
    actor: "Alison Brie ",
    image: "/images/dn.jpg",
    bio: 'Es una escritora humana, feminista e intelectual. Escribe la autobiografía de BoJack mientras lucha intensamente con su salud mental y un persistente sentimiento de infelicidad.',
  },
  {
    id: 4,
    name: "Mr. Peanutbutter",
    role: "Actor / Coprotagonista",
    actor: "Paul F. Tompkins",
    image: "/images/mp.jpg",
    bio: 'Es un Golden Retriver, hiperactivo y optimista sin remedio. A pesar de sus buenas intenciones, suele ser superficial e incapaz de lidiar con el dolor real.',
  },
  {
    id: 5,
    name: "Todd Chavez",
    role: "Roomie de Bojack",
    actor: "Aaron Paul ",
    image: "/images/todd.jpg",
    bio: 'Es un porrero desempleado que vive en el sillon de BoJack. Su particular forma de pensar lo llevan a tener ideas tan absurdas como ingeniosas, mientras intenta encontrar su lugar en el mundo'
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