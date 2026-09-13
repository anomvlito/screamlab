import { Section } from "@/components/Section";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testimonios" title={testimonials.title} tone="surface">
      <ul className="grid gap-4 md:grid-cols-3">
        {testimonials.items.map((t) => (
          <li key={t.quote} className="flex flex-col rounded-2xl border border-border bg-background p-6">
            <span aria-hidden="true" className="display text-5xl leading-none text-accent">
              &ldquo;
            </span>
            <blockquote className="mt-2 text-sm leading-relaxed text-foreground">{t.quote}</blockquote>
            <footer className="mt-6 text-xs text-muted">
              <span className="block font-medium text-foreground">{t.name}</span>
              {t.band}
              <span className="mt-2 block rounded-full border border-accent/40 px-3 py-1 text-[11px] uppercase tracking-wider text-accent">
                {t.outcome}
              </span>
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  );
}
