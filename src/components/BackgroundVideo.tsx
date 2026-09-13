type BackgroundVideoProps = {
  youtubeId: string;
  /** Título del iframe (accesible en "inline"; decorativo en "background"). */
  label: string;
  /** Qué tan oscuro va el velo encima (solo variant "background"), de 0 a 100. */
  scrim?: number;
  className?: string;
  /**
   * "background": capa a pantalla completa detrás del contenido, con velo,
   * muda y sin clic (es puro ambiente).
   * "inline": tarjeta normal 16:9 dentro del flujo (para pantallas angostas,
   * donde de fondo casi no se aprecia). Se puede tocar: controles nativos
   * de YouTube para subir el audio o ir al video.
   */
  variant?: "background" | "inline";
};

/**
 * Video de YouTube mudo, en loop, autoplay. Con prefers-reduced-motion se
 * oculta: en "background" queda el velo oscuro fijo, en "inline" desaparece
 * la tarjeta entera.
 * "background" requiere que el contenedor (la <section>) tenga position:relative.
 */
export function BackgroundVideo({ youtubeId, label, scrim = 70, className = "", variant = "background" }: BackgroundVideoProps) {
  const isInline = variant === "inline";
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: youtubeId,
    // "inline" deja los controles nativos de YouTube: el visitante puede
    // subir el audio o tocar el título para ir al video. "background" va
    // siempre silencioso y sin clic, es solo ambiente.
    controls: isInline ? "1" : "0",
    rel: "0",
    iv_load_policy: "3",
    playsinline: "1",
    ...(isInline ? {} : { disablekb: "1" }),
  });
  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`;

  if (isInline) {
    return (
      <div className={`video-bg relative aspect-video overflow-hidden rounded-card border border-line ${className}`}>
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
