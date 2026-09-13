import { marquee } from "@/lib/content";

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div aria-hidden="true" className="overflow-hidden border-b border-border/60 bg-surface py-3">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="display flex items-center gap-8 text-sm tracking-[0.25em] text-muted">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
