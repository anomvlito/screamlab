import { Section } from "@/components/Section";
import { method } from "@/lib/content";

export function Method() {
  return (
    <Section id="metodo" eyebrow={method.eyebrow} title={method.title} intro={method.intro}>
      <ol className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
        {method.steps.map((s, i) => (
          <li key={s.title} className="group relative bg-bg p-6 sm:p-8">
            <span className="display text-step-4 leading-none text-bg-3 transition group-hover:text-accent/70">
              0{i + 1}
            </span>
            <h3 className="display mt-4 text-step-2">{s.title}</h3>
            <p className="mt-3 text-step--1 leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
