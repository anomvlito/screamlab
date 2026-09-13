import { Logo } from "@/components/Logo";
import { hero } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="glow grain relative overflow-hidden border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <p className="display text-xs tracking-[0.3em] text-accent sm:text-sm">{hero.kicker}</p>

        <Logo className="mt-6 w-full max-w-4xl text-foreground" label="Scream Lab" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <h1 className="display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
              {hero.title[0]}
              <br />
              <span className="text-accent">{hero.title[1]}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">{hero.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="display inline-flex h-12 items-center rounded-full bg-accent px-6 text-base tracking-wider text-white transition hover:bg-accent-hover"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#programas"
                className="display inline-flex h-12 items-center rounded-full border border-border px-6 text-base tracking-wider text-foreground transition hover:border-foreground"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="order-last text-xs text-muted sm:text-sm">{s.label}</dt>
                <dd className="display text-3xl text-foreground sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
