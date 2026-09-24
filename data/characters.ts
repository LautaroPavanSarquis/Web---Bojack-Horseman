export type Character = {
  slug: string;
  name: string;
  role: string;
  actor: string;
  image: string;
  description: string;
};

export const characters: Character[] = [
  {
    slug: "bojack",
    name: "BoJack Horseman",
    role: "Protagonista",
    actor: "Will Arnett",
    image: "/images/bojack.jpg",
    description:
      "Una antigua estrella de televisión que intenta recuperar su fama mientras lidia con sus adicciones, sus decisiones y una vida que nunca salió como esperaba.",
  },
  {
    slug: "diane",
    name: "Diane Nguyen",
    role: "Escritora",
    actor: "Alison Brie",
    image: "/images/diane.jpg",
    description:
      "Una escritora inteligente, crítica y profundamente reflexiva que intenta encontrarle sentido a un mundo que rara vez parece tenerlo.",
  },
  {
    slug: "mr-peanutbutter",
    name: "Mr. Peanutbutter",
    role: "Actor",
    actor: "Paul F. Tompkins",
    image: "/images/mr-peanutbutter.jpg",
    description:
      "Un labrador eternamente optimista que enfrenta la vida con entusiasmo, energía y una capacidad casi sobrenatural para evitar los pensamientos negativos.",
  },
  {
    slug: "princess-carolyn",
    name: "Princess Carolyn",
    role: "Agente / Representante",
    actor: "Amy Sedaris",
    image: "/images/princess-carolyn.jpg",
    description:
      "Una representante incansable que puede resolver prácticamente cualquier problema mientras intenta equilibrar su carrera, sus relaciones y su vida personal.",
  },
  {
    slug: "todd",
    name: "Todd Chavez",
    role: "Amigo de BoJack",
    actor: "Aaron Paul",
    image: "/images/todd.jpg",
    description:
      "Un joven creativo, impredecible y de buen corazón que pasa de vivir en el sofá de BoJack a intentar construir una vida independiente.",
  },
];

