"use client";

import { useSyncExternalStore } from "react";

/**
 * Selector de paleta visible en el sitio. El cliente puede probar las 3 y
 * quedarse con la que más le guste; la elección se guarda en este navegador.
 * Para fijarla como única paleta del sitio más adelante: pon su id en
 * NEXT_PUBLIC_THEME (ver src/app/layout.tsx) y opcionalmente quita este
 * componente de Header.tsx.
 */
const THEMES = [
  { id: "ember", label: "Ember", gradient: "linear-gradient(120deg,#ff2e3d,#ff8a00)" },
  { id: "acid", label: "Acid", gradient: "linear-gradient(120deg,#c8ff2e,#2ee6a8)" },
  { id: "uv", label: "UV", gradient: "linear-gradient(120deg,#ff2d7a,#7c4dff)" },
  { id: "mono", label: "Mono", gradient: "linear-gradient(120deg,#f2f2f2,#4d4d4d)" },
] as const;

const STORAGE_KEY = "screamlab-theme";

type ThemeId = (typeof THEMES)[number]["id"];

function isThemeId(v: string | null): v is ThemeId {
  return v === "ember" || v === "acid" || v === "uv" || v === "mono";
}

// El atributo data-theme en <html> es la fuente de verdad (lo lee también el
// CSS); useSyncExternalStore lo observa sin efectos ni desajustes con el SSR.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getSnapshot(): ThemeId {
  const current = document.documentElement.getAttribute("data-theme");
  return isThemeId(current) ? current : "mono";
}

function getServerSnapshot(): ThemeId {
  return "mono";
}

function runWithViewTransition(fn: () => void) {
  // Da un fundido nativo entre paletas; si el navegador no lo soporta
  // (Firefox por ahora), aplica el cambio sin animación.
  const withVT = document as unknown as { startViewTransition?: (cb: () => void) => void };
  if (typeof withVT.startViewTransition === "function") {
    withVT.startViewTransition(fn);
  } else {
    fn();
  }
}

function choose(id: ThemeId) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // localStorage puede fallar en modo privado; el cambio visual igual funciona.
  }
  runWithViewTransition(() => {
    document.documentElement.setAttribute("data-theme", id);
  });
}

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const active = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div role="group" aria-label="Elegir paleta de color" className={`flex items-center gap-2 ${className}`}>
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => choose(t.id)}
          aria-pressed={active === t.id}
          title={`Paleta ${t.label}`}
          className={`h-6 w-6 shrink-0 rounded-full transition ${
            active === t.id ? "scale-110 ring-2 ring-fg ring-offset-2 ring-offset-bg" : "ring-1 ring-line/70 hover:ring-fg/50"
          }`}
          style={{ backgroundImage: t.gradient }}
        >
          <span className="sr-only">Paleta {t.label}</span>
        </button>
      ))}
    </div>
  );
}
