type LogoProps = {
  className?: string;
  label?: string;
  /** "gradient" pinta el logo con el degradado de la paleta. */
  tone?: "current" | "gradient";
};

/**
 * Logo de Scream Lab: máscara CSS sobre el SVG vectorizado (public/brand/screamlab-logo.svg).
 * Hereda currentColor, así que se pinta con text-*, o con el degradado de la paleta.
 */
export function Logo({ className = "", label = "Scream Lab", tone = "current" }: LogoProps) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`logo-mask ${tone === "gradient" ? "logo-gradient" : ""} ${className}`}
    />
  );
}
