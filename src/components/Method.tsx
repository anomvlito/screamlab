import { Section } from "@/components/Section";
import { method } from "@/lib/content";

export function Method() {
  return (
    <Section id="metodo" title={method.title} intro={method.intro}>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {method.pillars.map((p, i) => (
          <li key={p.title} className="rounded-2xl border border-border bg-surface p-6">
            <span className="display text-sm tracking-[0.3em] text-accent">0{i + 1}</span>
            <h3 className="display mt-3 text-2xl">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
