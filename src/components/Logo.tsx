type LogoProps = {
  className?: string;
  label?: string;
};

/**
 * Logo de Scream Lab. Usa un mask CSS sobre el SVG vectorizado,
 * así hereda el color del texto (currentColor) y pesa cero en el HTML.
 */
export function Logo({ className = "", label = "Scream Lab" }: LogoProps) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`logo-mask ${className}`}
    />
  );
}
