import type { Metadata, Viewport } from "next";
import { Archivo, Big_Shoulders } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import "./globals.css";

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

/** Paleta por defecto. Opciones: "ember" | "acid" | "uv". Previsualiza con /?theme=acid */
const DEFAULT_THEME = process.env.NEXT_PUBLIC_THEME ?? "ember";

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
  themeColor: "#0b0a0c",
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
        {/* Permite comparar paletas sin recompilar: /?theme=acid, /?theme=uv, /?theme=ember */}
        <Script id="theme-preview" strategy="beforeInteractive">
          {`try{var t=new URLSearchParams(location.search).get("theme");if(t&&/^(ember|acid|uv)$/.test(t)){document.documentElement.setAttribute("data-theme",t);}}catch(e){}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
