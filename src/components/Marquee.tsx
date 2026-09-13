import { techniques } from "@/lib/content";

export function Marquee() {
  const items = [...techniques, ...techniques];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-line/60 bg-bg-2 py-3">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="display flex items-center gap-10 text-step-1 text-muted">
            {item}
            <span className="h-2 w-2 rotate-45 bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
