import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Archivo, Big_Shoulders } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import "./globals.css";

// Google Analytics 4: opcional. Se activa solo si existe esta variable en
// Vercel (Settings > Environment Variables). Sin ID, no se carga nada.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const body = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "800", "900"],
  display: "swap",
});

/** Paleta por defecto. Opciones: "ember" | "acid" | "uv" | "mono". Previsualiza con /?theme=ember */
const DEFAULT_THEME = process.env.NEXT_PUBLIC_THEME ?? "mono";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "canto extremo",
    "clases de guturales",
    "scream",
    "growl",
    "fry scream",
    "falsas cuerdas",
    "coach vocal metal",
    "Tamara Rivas",
    "Chances",
    "Santiago",
    "Chile",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      data-theme={DEFAULT_THEME}
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        {/* Aplica antes del primer paint la paleta guardada por el selector del sitio
            (localStorage) o la de un enlace de prueba (?theme=), para que no haya parpadeo. */}
        <Script id="theme-preview" strategy="beforeInteractive">
          {`try{var t=new URLSearchParams(location.search).get("theme");if(!t){try{t=localStorage.getItem("screamlab-theme");}catch(e){}}if(t&&/^(ember|acid|uv|mono)$/.test(t)){document.documentElement.setAttribute("data-theme",t);}}catch(e){}`}
        </Script>
        {children}

        {/* Analítica de Vercel: visitas y Core Web Vitals reales, sin cookies
            ni configuración adicional (ya viene incluida con el hosting). */}
        <Analytics />
        <SpeedInsights />

        {/* Google Analytics 4: solo carga si hay ID configurado. */}
        {GA_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
