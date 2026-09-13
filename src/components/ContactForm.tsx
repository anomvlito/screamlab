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
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-1.5 text-sm">
        <span className="text-muted">{contact.formLabels.name}</span>
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
      <label className="grid gap-1.5 text-sm">
        <span className="text-muted">{contact.formLabels.style}</span>
        <input
          name="style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className={field}
          placeholder="Ej: deathcore, banda propia"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="text-muted">{contact.formLabels.goal}</span>
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
        className="display inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base tracking-wider text-white transition hover:bg-accent-hover"
      >
        {contact.formLabels.submit}
      </button>
    </form>
  );
}
