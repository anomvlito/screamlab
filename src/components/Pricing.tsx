import { Section } from "@/components/Section";
import { freebie, guarantee, pricing } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function Pricing() {
  return (
    <Section id="precios" title={pricing.title} intro={pricing.intro}>
      <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="display text-sm tracking-[0.3em] text-accent">{freebie.label}</span>
          <h3 className="display mt-1 text-2xl">{freebie.title}</h3>
          <p className="mt-1 max-w-xl text-sm text-muted">{freebie.text}</p>
        </div>
        <a
          href={whatsappUrl(freebie.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="display inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-foreground px-5 text-sm tracking-wider text-foreground transition hover:bg-foreground hover:text-background"
        >
          {freebie.cta}
        </a>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {pricing.tiers.map((t) => (
          <article
            key={t.name}
            className={`flex flex-col rounded-2xl border p-6 ${
              t.featured ? "border-accent bg-accent-soft" : "border-border bg-surface"
            }`}
          >
            <h3 className="display text-2xl">{t.name}</h3>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="display text-5xl">{t.price}</span>
              <span className="text-sm text-muted">{t.period}</span>
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(`Hola Scream Lab, quiero contratar: ${t.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`display mt-8 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm tracking-wider transition ${
                t.featured
                  ? "bg-accent text-white hover:bg-accent-hover"
                  : "border border-border text-foreground hover:border-foreground"
              }`}
            >
              {t.cta}
            </a>
          </article>
        ))}
      </div>
      <aside className="mt-8 rounded-2xl border border-accent/40 bg-accent-soft p-6">
        <h3 className="display text-2xl">{guarantee.title}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/90">{guarantee.text}</p>
      </aside>
    </Section>
  );
}
