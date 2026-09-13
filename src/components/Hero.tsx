import { Logo } from "@/components/Logo";
import { hero, stages } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="mesh grain relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden">
      <div className="mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center px-gutter pb-10 pt-12 sm:pt-16">
        <p className="label text-step--1 text-accent">{hero.kicker}</p>

        {/* Logo vectorizado, ocupa todo el ancho disponible y se pinta con el degradado. */}
        <Logo
          tone="gradient"
          className="mt-6 w-full drop-shadow-[0_0_40px_var(--accent-soft)]"
          label="Scream Lab"
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-end lg:gap-12">
          <div>
            <h1 className="display text-step-4 text-balance">
              {hero.title[0]} <span className="grad-text">{hero.title[1]}</span>
            </h1>
            <p className="mt-5 max-w-xl text-step-1 leading-snug text-muted text-pretty">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary label inline-flex h-12 items-center rounded-full px-6 text-[0.8rem] sm:h-14 sm:px-8"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#programas"
                className="label inline-flex h-12 items-center rounded-full border border-line px-6 text-[0.8rem] text-fg transition hover:border-fg sm:h-14 sm:px-8"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <dl className="glass grid grid-cols-3 gap-3 rounded-card p-5 sm:p-6">
            {hero.proof.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-step--1 leading-tight text-muted">{s.label}</dt>
                <dd className="display text-step-3 text-fg">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Escenarios reales de la coach: prueba social desde el primer viewport. */}
      <div className="border-t border-line/60 bg-bg/40 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-2 px-gutter py-4 sm:flex-row sm:items-center sm:gap-6">
          <p className="label shrink-0 text-[0.65rem] text-muted">{stages.label}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {stages.items.map((s) => (
              <li key={s} className="display text-step-1 text-fg/90">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
