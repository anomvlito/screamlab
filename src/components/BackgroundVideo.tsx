type BackgroundVideoProps = {
  youtubeId: string;
  /** Título del iframe. Va aria-hidden igual: es puro ambiente, no contenido esencial. */
  label: string;
  /** Qué tan oscuro va el velo encima (solo variant "background"), de 0 a 100. */
  scrim?: number;
  className?: string;
  /**
   * "background": capa a pantalla completa detrás del contenido, con velo.
   * En pantallas angostas casi todo el ancho lo cubre el contenido, así
   * que ahí no se aprecia: usa "inline" en su lugar, una tarjeta normal
   * dentro del flujo (sin velo, con su propio recuadro).
   */
  variant?: "background" | "inline";
};

/**
 * Video de YouTube mudo, en loop, sin controles y sin clic (pointer-events:
 * none). Con prefers-reduced-motion se oculta: en "background" queda el velo
 * oscuro fijo, en "inline" desaparece la tarjeta entera.
 * "background" requiere que el contenedor (la <section>) tenga position:relative.
 */
export function BackgroundVideo({ youtubeId, label, scrim = 70, className = "", variant = "background" }: BackgroundVideoProps) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: youtubeId,
    controls: "0",
    disablekb: "1",
    modestbranding: "1",
    rel: "0",
    iv_load_policy: "3",
    playsinline: "1",
  });
  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`;

  if (variant === "inline") {
    return (
      <div
        aria-hidden="true"
        className={`video-bg pointer-events-none relative aspect-video overflow-hidden rounded-card border border-line ${className}`}
      >
        <iframe src={src} title={label} loading="lazy" allow="autoplay; encrypted-media" className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`video-bg pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <iframe src={src} title={label} loading="lazy" allow="autoplay; encrypted-media" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-bg" style={{ opacity: scrim / 100 }} />
    </div>
  );
}
