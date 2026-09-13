import { Section } from "@/components/Section";
import { programs } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function Programs() {
  return (
    <Section id="programas" eyebrow={programs.eyebrow} title={programs.title} intro={programs.intro} tone="raised">
      <div className="grid gap-4 lg:grid-cols-3">
        {programs.items.map((p) => (
          <article
            key={p.name}
            className={
              p.featured
                ? "mesh grad-border relative isolate flex flex-col overflow-hidden rounded-card p-6 sm:p-8"
                : "flex flex-col rounded-card border border-line bg-bg p-6 sm:p-8"
            }
          >
            {p.featured ? <div className="glass absolute inset-0 -z-10 rounded-card" aria-hidden="true" /> : null}
            <p className="label relative text-[0.65rem] text-muted">{p.format}</p>
            <h3 className="display relative mt-2 text-step-2">{p.name}</h3>
            <p className="relative mt-3 text-step--1 leading-relaxed text-muted">{p.text}</p>
            <ul className="relative mt-5 space-y-2 text-step--1">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(`Hola Scream Lab, me interesa: ${p.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`label relative mt-8 inline-flex h-11 items-center justify-center rounded-full px-5 text-[0.7rem] ${
                p.featured ? "btn-primary" : "border border-line text-fg transition hover:border-fg"
              }`}
            >
              {p.cta}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
