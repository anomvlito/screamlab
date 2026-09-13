import { Section } from "@/components/Section";
import { faq } from "@/lib/content";

export function Faq() {
  return (
    <Section id="faq" title={faq.title} tone="surface">
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-background">
        {faq.items.map((item) => (
          <details key={item.q} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
              {item.q}
              <span
                aria-hidden="true"
                className="display text-2xl leading-none text-accent transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
