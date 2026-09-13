import { Section } from "@/components/Section";
import { paths } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function Paths() {
  return (
    <Section id="caminos" eyebrow={paths.eyebrow} title={paths.title} intro={paths.intro} tone="raised">
      <div className="grid gap-4 md:grid-cols-3">
        {paths.items.map((p, i) => (
          <a
            key={p.name}
            href={whatsappUrl(`Hola Scream Lab, quiero partir por el camino: ${p.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-64 flex-col justify-end overflow-hidden rounded-card border border-line bg-bg p-6 transition hover:border-accent sm:p-8"
          >
            <span
              aria-hidden="true"
              className="mesh pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
            />
            <span className="label relative text-[0.65rem] text-muted">
              0{i + 1} · {p.who}
            </span>
            <h3 className="display relative mt-2 text-step-2 group-hover:grad-text">{p.name}</h3>
            <p className="relative mt-3 text-step--1 leading-relaxed text-muted">{p.text}</p>
            <span className="label relative mt-5 text-[0.7rem] text-accent">Empezar aquí →</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
