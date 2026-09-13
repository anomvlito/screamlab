import { Section } from "@/components/Section";
import { paths } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function Paths() {
  return (
    <Section id="caminos" title={paths.title} intro={paths.intro} tone="surface">
      <div className="grid gap-4 md:grid-cols-3">
        {paths.items.map((p) => (
          <a
            key={p.name}
            href={whatsappUrl(`Hola Scream Lab, quiero partir por el camino: ${p.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-background p-6 transition hover:border-accent"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">{p.who}</p>
            <h3 className="display mt-2 text-3xl transition group-hover:text-accent">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
            <span className="display mt-6 inline-block text-sm tracking-[0.2em] text-accent">Empezar aquí →</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
