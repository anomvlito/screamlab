"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

/**
 * Formulario sin backend: arma un mensaje y lo abre en WhatsApp.
 * Si más adelante quieres guardar leads, cambia handleSubmit por una Server Action.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [goal, setGoal] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = [
      `Hola Scream Lab, soy ${name.trim() || "..."}.`,
      style.trim() ? `Estilo/banda: ${style.trim()}.` : "",
      goal.trim() ? `Quiero lograr: ${goal.trim()}.` : "",
      "Me gustaría agendar una clase de prueba.",
    ]
      .filter(Boolean)
      .join(" ");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-xl border border-line bg-bg px-4 py-3 text-step-0 text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-card border border-line bg-bg-2 p-6 sm:p-8">
      <label className="grid gap-1.5">
        <span className="label text-[0.65rem] text-muted">{contact.formLabels.name}</span>
        <input
          name="name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          placeholder="Ej: Camila"
        />
      </label>
      <label className="grid gap-1.5">
        <span className="label text-[0.65rem] text-muted">{contact.formLabels.style}</span>
        <input
          name="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className={field}
          placeholder="Ej: deathcore, banda propia"
        />
      </label>
      <label className="grid gap-1.5">
        <span className="label text-[0.65rem] text-muted">{contact.formLabels.goal}</span>
        <textarea
          name="goal"
          rows={3}
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className={field}
          placeholder="Ej: aguantar un set completo sin quedar afónico"
        />
      </label>
      <button
        type="submit"
        className="btn-primary label inline-flex h-12 items-center justify-center rounded-full px-6 text-[0.8rem]"
      >
        {contact.formLabels.submit}
      </button>
    </form>
  );
}
