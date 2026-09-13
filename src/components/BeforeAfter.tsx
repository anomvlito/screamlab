import { Section } from "@/components/Section";
import { beforeAfter } from "@/lib/content";
import { instagramUrl } from "@/lib/site";

export function BeforeAfter() {
  return (
    <Section id="antes-despues" title={beforeAfter.title} intro={beforeAfter.intro}>
      {beforeAfter.ready ? (
        <div className="grid gap-4 md:grid-cols-2">
          {[beforeAfter.before, beforeAfter.after].map((clip, i) => (
            <figure key={clip.src} className="rounded-2xl border border-border bg-surface p-6">
              <figcaption className="display text-sm tracking-[0.3em] text-accent">
                {i === 0 ? "Antes" : "Después"} · {clip.label}
              </figcaption>
              <audio controls preload="none" className="mt-4 w-full" src={clip.src}>
                Tu navegador no soporta audio HTML5.
              </audio>
            </figure>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-surface p-6 text-sm text-muted">
          {beforeAfter.pending}{" "}
          <a href={instagramUrl()} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-accent">
            Ver en Instagram
          </a>
        </div>
      )}
    </Section>
  );
}
