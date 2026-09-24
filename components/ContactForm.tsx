"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass mx-auto max-w-2xl rounded-2xl p-6 md:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-white"
          >
            Nombre
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--teal)] placeholder:text-slate-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--teal)] placeholder:text-slate-500"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-white"
          >
            Asunto
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="¿Sobre qué querés escribir?"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--teal)] placeholder:text-slate-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-white"
          >
            Mensaje
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Escribí tu mensaje..."
            className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--teal)] placeholder:text-slate-500"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-[var(--teal)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
        >
          Enviar mensaje
        </button>

        {submitted && (
          <p className="text-center text-sm text-[var(--teal)]">
            ¡Mensaje enviado! Gracias por contactarte.
          </p>
        )}
      </div>
    </form>
  );
}
