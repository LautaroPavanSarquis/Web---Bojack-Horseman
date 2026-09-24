
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--background-secondary)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-lg font-semibold text-[var(--cream)]">
            BoJack Horseman
          </h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Un caballo, una mansión y demasiados problemas.
          </p>
        </div>

        <p className="text-xs text-[var(--text-secondary)]">
          Fan project — creado con Next.js
        </p>
      </div>
    </footer>
  );
}
