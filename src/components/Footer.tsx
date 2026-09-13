import { Logo } from "@/components/Logo";
import { footer, nav } from "@/lib/content";
import { instagramUrl, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo className="h-10 w-48 text-muted" />
          <p className="mt-3 text-sm text-muted">
            {site.tagline} · {site.city}
          </p>
        </div>
        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </a>
          ))}
          <a href={instagramUrl()} target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground">
            Instagram
          </a>
        </nav>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-8 text-xs leading-relaxed text-muted/80 sm:px-6">{footer.disclaimer}</p>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
          <span>
            © {year} {footer.legal}
          </span>
          <span>{footer.note}</span>
        </div>
      </div>
    </footer>
  );
}
