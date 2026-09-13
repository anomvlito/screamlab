type BackgroundVideoProps = {
  youtubeId: string;
  /** Para el título del iframe; el bloque entero va aria-hidden (es puro ambiente). */
  label: string;
  /** Qué tan oscuro va el velo encima, de 0 a 100. Sube esto si el texto se lee mal. */
  scrim?: number;
};

/**
 * Video de YouTube como fondo decorativo de una sección: sin sonido, en loop,
 * sin controles y sin clic (pointer-events: none). Con prefers-reduced-motion
 * se oculta y solo queda el velo oscuro, sin movimiento.
 * Requiere que el contenedor (la <section>) tenga position:relative.
 */
export function BackgroundVideo({ youtubeId, label, scrim = 70 }: BackgroundVideoProps) {
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

  return (
    <div aria-hidden="true" className="video-bg pointer-events-none absolute inset-0 overflow-hidden">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`}
        title={label}
        loading="lazy"
        allow="autoplay; encrypted-media"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bg" style={{ opacity: scrim / 100 }} />
    </div>
  );
}
