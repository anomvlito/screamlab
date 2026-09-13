import { Section } from "@/components/Section";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testimonios" eyebrow={testimonials.eyebrow} title={testimonials.title}>
      <ul className="grid gap-4 md:grid-cols-3">
        {testimonials.items.map((t) => (
          <li key={t.quote} className="flex flex-col rounded-card border border-line bg-bg-2 p-6 sm:p-8">
            <span className="label inline-block self-start rounded-full bg-accent-soft px-3 py-1 text-[0.65rem] text-accent">
              {t.outcome}
            </span>
            <blockquote className="mt-5 text-step-0 leading-relaxed text-fg/90">{t.quote}</blockquote>
            <footer className="mt-6 text-step--1 text-muted">
              <span className="block font-medium text-fg">{t.name}</span>
              {t.band}
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  );
}
