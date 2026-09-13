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

/**
 * Logo de Scream Lab: máscara CSS sobre el SVG vectorizado (public/brand/screamlab-logo.svg).
 * Hereda currentColor, así que se pinta con text-*, o con el degradado de la paleta.
 */
export function Logo({ className = "", label = "Scream Lab", tone = "current", glitch = false }: LogoProps) {
  const toneClass = tone === "gradient" ? "logo-gradient" : "";

  if (!glitch) {
    return <span role="img" aria-label={label} className={`logo-mask ${toneClass} ${className}`} />;
  }

  return (
    <span role="img" aria-label={label} className={`logo-frame logo-glitch ${className}`}>
      <span aria-hidden="true" className={`logo-mask logo-glitch-base ${toneClass}`} />
      <span aria-hidden="true" className="logo-mask logo-glitch-r" />
      <span aria-hidden="true" className="logo-mask logo-glitch-b" />
    </span>
  );
}
