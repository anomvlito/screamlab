import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[90rem] items-center justify-between gap-4 px-gutter">
        <Link href="#top" className="text-fg transition hover:text-accent" aria-label="Scream Lab, inicio">
          <Logo className="h-7 w-28 sm:h-8 sm:w-36" />
        </Link>

        <nav aria-label="Principal" className="label hidden items-center gap-7 text-[0.7rem] text-muted lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary label inline-flex h-10 items-center rounded-full px-4 text-[0.7rem]"
          >
            Clase de prueba
          </a>

          {/* Menú móvil sin JavaScript */}
          <details className="group relative lg:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line text-fg [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menú"
            >
              <span className="relative block h-3.5 w-5">
                <span className="absolute inset-x-0 top-0 h-0.5 bg-current transition group-open:top-1.5 group-open:rotate-45" />
                <span className="absolute inset-x-0 top-1.5 h-0.5 bg-current transition group-open:opacity-0" />
                <span className="absolute inset-x-0 top-3 h-0.5 bg-current transition group-open:top-1.5 group-open:-rotate-45" />
              </span>
            </summary>
            <nav
              aria-label="Menú móvil"
              className="absolute right-0 top-12 w-56 rounded-card border border-line bg-bg-2 p-2 shadow-2xl shadow-black/50"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="label block rounded-xl px-4 py-3 text-[0.75rem] text-fg transition hover:bg-bg-3"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
