import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "default" | "surface";
};

export function Section({ id, title, intro, children, tone = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-b border-border/60 ${tone === "surface" ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="display text-4xl sm:text-5xl">{title}</h2>
          {intro ? <p className="mt-4 text-base text-muted sm:text-lg">{intro}</p> : null}
        </div>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
