"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

export default function Navbar() {
  const pathname = usePathname();

  const links: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Episodios", href: "/episodes" },
    { label: "Personajes", href: "/characters" },
    { label: "Galeria", href: "/gallery" },
    { label: "Contacto", href: "/contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 z-50 w-[90%] max-w-5xl -translate-x-1/2">
      <div className="glass flex items-center justify-center gap-1 rounded-full px-3 py-3">
        {links.map((link: NavLink) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active
                  ? "bg-[var(--cream)] text-[var(--background)]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}