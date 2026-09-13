import { Section } from "@/components/Section";
import { press } from "@/lib/content";

export function Press() {
  return (
    <Section id="prensa" eyebrow={press.eyebrow} title={press.title} tone="raised">
      <ul className="grid gap-4 lg:grid-cols-3">
        {press.items.map((p) => (
          <li key={p.url} className="flex flex-col rounded-card border border-line bg-bg p-6 sm:p-8">
            <blockquote className="text-step-0 leading-relaxed text-fg/90 text-pretty">“{p.quote}”</blockquote>
            <footer className="mt-6 flex items-baseline justify-between gap-4 border-t border-line pt-4">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="display text-step-1 text-accent hover:text-accent-2"
              >
                {p.source}
              </a>
              <span className="text-right text-[0.7rem] text-muted">{p.context}</span>
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  );
}
