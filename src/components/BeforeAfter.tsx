import { Section } from "@/components/Section";
import { beforeAfter } from "@/lib/content";
import { instagramUrl } from "@/lib/site";

export function BeforeAfter() {
  return (
    <Section id="antes-despues" eyebrow={beforeAfter.eyebrow} title={beforeAfter.title} intro={beforeAfter.intro}>
      {beforeAfter.ready ? (
        <div className="grid gap-4 md:grid-cols-2">
          {[beforeAfter.before, beforeAfter.after].map((clip, i) => (
            <figure key={clip.src} className={`rounded-card p-6 sm:p-8 ${i === 1 ? "grad-border" : "border border-line bg-bg-2"}`}>
              <figcaption className="label relative text-[0.7rem] text-accent">
                {i === 0 ? "Antes" : "Después"} · {clip.label}
              </figcaption>
              <audio controls preload="none" className="relative mt-4 w-full" src={clip.src}>
                Tu navegador no soporta audio HTML5.
              </audio>
            </figure>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 rounded-card border border-dashed border-line bg-bg-2 p-6 text-step--1 text-muted sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl">{beforeAfter.pending}</p>
          <a
            href={instagramUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="label inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-line px-5 text-[0.7rem] text-fg transition hover:border-fg"
          >
            Ver en Instagram
          </a>
        </div>
      )}
    </Section>
  );
}
