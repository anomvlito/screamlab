import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="#top" className="text-foreground transition hover:text-accent" aria-label="Scream Lab, inicio">
          <Logo className="h-8 w-32 sm:w-40" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="display inline-flex h-10 items-center rounded-full bg-accent px-4 text-sm tracking-wider text-white transition hover:bg-accent-hover"
        >
          Clase de prueba
        </a>
      </div>
    </header>
  );
}
