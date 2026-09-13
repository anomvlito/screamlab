import Image from "next/image";
import { Section } from "@/components/Section";
import { coach } from "@/lib/content";

export function Coach() {
  return (
    <Section id="coach" title={coach.title}>
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-center">
        <figure className="grain relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-2 to-background">
          {coach.photo ? (
            <Image
              src={coach.photo}
              alt={coach.photoAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority={false}
            />
          ) : (
            <span className="display absolute bottom-4 left-4 text-sm tracking-[0.3em] text-muted">Foto pendiente</span>
          )}
          {coach.photo && coach.photoCredit ? (
            <figcaption className="absolute bottom-3 right-3 rounded-full bg-background/70 px-3 py-1 text-[11px] text-muted backdrop-blur">
              Foto: {coach.photoCredit}
            </figcaption>
          ) : null}
        </figure>
        <div>
          <h3 className="display text-4xl">{coach.name}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-accent">{coach.role}</p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {coach.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {coach.highlights.map((h) => (
              <li key={h} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wider text-foreground">
                {h}
              </li>
            ))}
          </ul>
          <a
            href={coach.band.url}
            target="_blank"
            rel="noopener noreferrer"
            className="display mt-6 inline-block text-sm tracking-[0.2em] text-accent hover:text-accent-hover"
          >
            Escucha a {coach.band.name} · @{coach.band.instagram} →
          </a>
        </div>
      </div>
    </Section>
  );
}
