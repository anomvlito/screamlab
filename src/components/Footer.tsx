import { Logo } from "@/components/Logo";
import { footer, nav } from "@/lib/content";
import { instagramUrl, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-line/60">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-gutter py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo className="h-9 w-44 text-fg" />
          <p className="mt-3 text-step--1 text-muted">
            {site.tagline} · {site.city}
          </p>
        </div>
        <nav aria-label="Pie de página" className="label flex flex-wrap gap-x-6 gap-y-2 text-[0.7rem] text-muted">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-fg">
              {item.label}
            </a>
          ))}
          <a href={instagramUrl()} target="_blank" rel="noopener noreferrer" className="transition hover:text-fg">
            Instagram
          </a>
        </nav>
      </div>
      <p className="mx-auto w-full max-w-[90rem] px-gutter pb-8 text-[0.75rem] leading-relaxed text-muted/80 text-pretty">
        {footer.disclaimer}
      </p>
      <div className="border-t border-line/60">
        <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-1 px-gutter py-4 text-[0.75rem] text-muted sm:flex-row sm:justify-between">
          <span>
            © {year} {footer.legal}
          </span>
          <span>{footer.note}</span>
        </div>
      </div>
    </footer>
  );
}
