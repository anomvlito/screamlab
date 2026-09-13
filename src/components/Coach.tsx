import Image from "next/image";
import { Section } from "@/components/Section";
import { coach } from "@/lib/content";

export function Coach() {
  return (
    <Section id="coach" eyebrow={coach.eyebrow} title={coach.name} intro={coach.role}>
      <div className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:gap-12">
        <figure className="mesh grain relative aspect-[4/5] overflow-hidden rounded-card border border-line bg-bg-2 lg:sticky lg:top-24">
          {coach.photo ? (
            <Image
              src={coach.photo}
              alt={coach.photoAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-end p-6">
              <p className="label text-[0.65rem] text-muted">Foto en camino</p>
            </div>
          )}
          {coach.photo && coach.photoCredit ? (
            <figcaption className="absolute bottom-3 right-3 rounded-full bg-bg/70 px-3 py-1 text-[0.65rem] text-muted backdrop-blur">
              Foto: {coach.photoCredit}
            </figcaption>
          ) : null}
        </figure>

        <div className="flex flex-col gap-8">
          <blockquote className="mesh glass relative overflow-hidden rounded-card border-l-2 border-accent px-6 py-5">
            <p className="display text-step-2 text-balance">“{coach.pullQuote.text}”</p>
            <footer className="mt-3 text-step--1 text-muted">
              <a href={coach.pullQuote.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-fg">
                {coach.pullQuote.source}
              </a>
            </footer>
          </blockquote>

          <div className="space-y-4 text-step-0 leading-relaxed text-muted text-pretty">
            {coach.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="grid grid-cols-3 gap-3 border-t border-line pt-6">
            {coach.facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-step--1 leading-tight text-muted">{f.label}</dt>
                <dd className="display text-step-3">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3">
            <a
              href={coach.band.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-flex h-11 items-center rounded-full border border-line px-5 text-[0.7rem] text-fg transition hover:border-fg"
            >
              Escucha a {coach.band.name}
            </a>
            <a
              href={`https://instagram.com/${coach.band.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-flex h-11 items-center rounded-full border border-line px-5 text-[0.7rem] text-muted transition hover:border-fg hover:text-fg"
            >
              @{coach.band.instagram}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
