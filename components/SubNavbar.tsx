"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SubNavLink = {
  label: string;
  href: string;
};

const subNavLinks: Record<string, SubNavLink[]> = {
  "/episodes": [
    { label: "Temporada 1", href: "/episodes/season-1" },
    { label: "Temporada 2", href: "/episodes/season-2" },
    { label: "Temporada 3", href: "/episodes/season-3" },
    { label: "Temporada 4", href: "/episodes/season-4" },
    { label: "Temporada 5", href: "/episodes/season-5" },
    { label: "Temporada 6", href: "/episodes/season-6" },
  ],

  "/characters": [
    { label: "BoJack", href: "/characters/bojack" },
    { label: "Diane", href: "/characters/diane" },
    { label: "Mr. Peanutbutter", href: "/characters/mr-peanutbutter" },
    { label: "Princess Carolyn", href: "/characters/princess-carolyn" },
    { label: "Todd", href: "/characters/todd" },
  ],
};

export default function SubNavbar() {
  const pathname = usePathname();

  const currentSection = Object.keys(subNavLinks).find((section) =>
    pathname.startsWith(section)
  );

  if (!currentSection) {
    return null;
  }

  const links = subNavLinks[currentSection];

  return (
    <nav className="fixed top-[82px] left-1/2 z-40 w-[90%] max-w-4xl -translate-x-1/2">
      <div className="flex items-center justify-center gap-1 overflow-x-auto rounded-full border border-[var(--teal)]/20 bg-[var(--cream)] px-3 py-2 shadow-lg backdrop-blur-md scrollbar-none">
        {links.map((link: SubNavLink) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium text-[var(--background)] transition-all hover:bg-[var(--teal)] hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}