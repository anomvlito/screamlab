"use client";

import { useEffect, useRef } from "react";

type LogoProps = {
  className?: string;
  label?: string;
  /** "gradient" pinta el logo con el degradado de la paleta activa. */
  tone?: "current" | "gradient";
  /**
   * Glitch de TV descompuesta: cada cierto tiempo, un corte breve con
   * desfase de color (rojo/cian) y bandas desplazadas. Se apaga solo con
   * prefers-reduced-motion.
   */
  glitch?: boolean;
};

// Ciclo de cada logo: 6 a 12 segundos, distinto por instancia (ver el
// useEffect más abajo). Sirve de referencia para el rango del sorteo.
const GLITCH_MIN_S = 6;
const GLITCH_MAX_S = 12;

/**
 * Logo de Scream Lab: máscara CSS sobre el SVG vectorizado (public/brand/screamlab-logo.svg).
 * Hereda currentColor, así que se pinta con text-*, o con el degradado de la paleta.
 */
export function Logo({ className = "", label = "Scream Lab", tone = "current", glitch = false }: LogoProps) {
  const toneClass = tone === "gradient" ? "logo-gradient" : "";
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!glitch || !ref.current) return;
    // Duración propia por instancia (no solo un desfase inicial): así el
    // logo chico y el grande, con ciclos de distinto largo, rara vez
    // vuelven a coincidir. Delay negativo = arranca ya a mitad de su
    // propio ciclo, en vez de esperar siempre desde cero.
    const duration = GLITCH_MIN_S + Math.random() * (GLITCH_MAX_S - GLITCH_MIN_S);
    const startAt = Math.random() * duration;
    ref.current.style.setProperty("--glitch-duration", `${duration.toFixed(2)}s`);
    ref.current.style.setProperty("--glitch-delay", `-${startAt.toFixed(2)}s`);
  }, [glitch]);

  if (!glitch) {
    return <span role="img" aria-label={label} className={`logo-mask ${toneClass} ${className}`} />;
  }

  return (
    <span ref={ref} role="img" aria-label={label} className={`logo-frame logo-glitch ${className}`}>
      <span aria-hidden="true" className={`logo-mask logo-glitch-base ${toneClass}`} />
      <span aria-hidden="true" className="logo-mask logo-glitch-r" />
      <span aria-hidden="true" className="logo-mask logo-glitch-b" />
    </span>
  );
}
