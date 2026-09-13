import { Section } from "@/components/Section";
import { freebie, guarantee, pricing } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function Pricing() {
  return (
    <Section id="precios" eyebrow={pricing.eyebrow} title={pricing.title} intro={pricing.intro} tone="raised">
      <div className="mb-4 flex flex-col gap-4 rounded-card border border-line bg-bg p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <span className="label text-[0.7rem] text-accent">{freebie.label}</span>
          <h3 className="display mt-1 text-step-2">{freebie.title}</h3>
          <p className="mt-1 max-w-xl text-step--1 text-muted">{freebie.text}</p>
        </div>
        <a
          href={whatsappUrl(freebie.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="label inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-fg px-5 text-[0.7rem] text-fg transition hover:bg-fg hover:text-bg"
        >
          {freebie.cta}
        </a>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {pricing.tiers.map((t) => (
          <article
            key={t.name}
            className={
              t.featured
                ? "mesh grad-border relative isolate flex flex-col overflow-hidden rounded-card p-6 sm:p-8"
                : "flex flex-col rounded-card border border-line bg-bg p-6 sm:p-8"
            }
          >
            {t.featured ? <div className="glass absolute inset-0 -z-10 rounded-card" aria-hidden="true" /> : null}
            <h3 className="display relative text-step-2">{t.name}</h3>
            <p className="relative mt-4 flex items-baseline gap-2">
              <span className={`display text-step-4 ${t.featured ? "grad-text" : ""}`}>{t.price}</span>
              <span className="text-step--1 text-muted">{t.period}</span>
            </p>
            <ul className="relative mt-6 space-y-2 text-step--1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(`Hola Scream Lab, quiero contratar: ${t.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`label relative mt-8 inline-flex h-11 items-center justify-center rounded-full px-5 text-[0.7rem] ${
                t.featured ? "btn-primary" : "border border-line text-fg transition hover:border-fg"
              }`}
            >
              {t.cta}
            </a>
          </article>
        ))}
      </div>

      <aside className="mesh relative mt-4 overflow-hidden rounded-card border border-line p-6 sm:p-8">
        <h3 className="display text-step-2">{guarantee.title}</h3>
        <p className="mt-2 max-w-3xl text-step--1 leading-relaxed text-fg/90 text-pretty">{guarantee.text}</p>
      </aside>
    </Section>
  );
}
