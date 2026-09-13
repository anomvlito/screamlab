import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "default" | "raised";
  align?: "left" | "center";
  /** Capa de fondo a pantalla completa (por ejemplo BackgroundVideo), detrás de todo el contenido. */
  background?: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children, tone = "default", align = "left", background }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-16 ${tone === "raised" ? "bg-bg-2" : ""} ${background ? "overflow-hidden" : ""}`}
    >
      {background}
      <div className="hairline relative" />
      <div className="relative mx-auto w-full max-w-[90rem] px-gutter py-section">
        <header className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow ? <p className="label text-step--1 text-accent">{eyebrow}</p> : null}
          <h2 className="display mt-3 text-step-3 text-balance">{title}</h2>
          {intro ? <p className="mt-5 max-w-2xl text-step-0 leading-relaxed text-muted text-pretty">{intro}</p> : null}
        </header>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
