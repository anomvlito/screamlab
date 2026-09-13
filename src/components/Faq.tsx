import { Section } from "@/components/Section";
import { faq } from "@/lib/content";

export function Faq() {
  return (
    <Section id="faq" eyebrow={faq.eyebrow} title={faq.title}>
      <div className="mx-auto max-w-3xl divide-y divide-line rounded-card border border-line bg-bg-2">
        {faq.items.map((item) => (
          <details key={item.q} className="group px-6 py-5 sm:px-8">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-step-0 font-medium [&::-webkit-details-marker]:hidden">
              {item.q}
              <span aria-hidden="true" className="display text-step-2 leading-none text-accent transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-step--1 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
