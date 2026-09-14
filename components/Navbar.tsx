import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

export function Navbar() {
  const links: NavLink[] = [
    { href: "#hero", label: "Inicio" },
    { href: "#episodios", label: "Episodios" },
    { href: "#personajes", label: "Personajes" },
    { href: "#quiz", label: "Quiz" },
  ];

  return (
    <header className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
      <nav
        className="
          flex items-center gap-2 sm:gap-3
          bg-[#0a1128]/80 backdrop-blur-md
          border border-[#4FB0AE]/25
          rounded-full
          px-4 py-3
          shadow-lg shadow-black/30
        "
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-label={`Ir a la sección «${link.label}»`}
            className="
              text-base font-semibold text-[#F1E4C3]/80
              px-5 py-2.5 rounded-full
              hover:text-[#0a1128] hover:bg-[#F4C542]
              transition-colors duration-200
            "
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}