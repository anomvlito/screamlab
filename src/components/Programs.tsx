import { Section } from "@/components/Section";
import { programs } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function Programs() {
  return (
    <Section id="programas" title={programs.title} intro={programs.intro} tone="surface">
      <div className="grid gap-4 lg:grid-cols-3">
        {programs.items.map((p) => (
          <article
            key={p.name}
            className={`flex flex-col rounded-2xl border p-6 ${
              p.featured ? "border-accent bg-accent-soft" : "border-border bg-background"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{p.format}</p>
            <h3 className="display mt-2 text-3xl">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(`Hola Scream Lab, me interesa: ${p.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`display mt-auto inline-flex h-11 items-center justify-center rounded-full px-5 pt-6 text-sm tracking-wider transition ${
                p.featured
                  ? "mt-8 bg-accent pt-0 text-white hover:bg-accent-hover"
                  : "mt-8 border border-border pt-0 text-foreground hover:border-foreground"
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
