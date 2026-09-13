/**
 * Datos de contacto y configuración del sitio.
 * Cambia estos valores antes de publicar; todo el sitio los lee desde aquí.
 */
/** Devuelve el valor de entorno si no está vacío; si no, el valor por defecto. */
function nonEmpty(value: string | undefined, fallback: string): string {
  const v = value?.trim();
  return v ? v : fallback;
}

/** URL pública válida, con https:// y sin barra final. Nunca lanza error en build. */
function resolveSiteUrl(): string {
  const fallback = "https://screamlab.net";
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const raw = nonEmpty(process.env.NEXT_PUBLIC_SITE_URL, vercelProd ? `https://${vercelProd}` : fallback);
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return fallback;
  }
}

export const site = {
  name: "Scream Lab",
  tagline: "Academia de canto extremo",
  description:
    "Aprende scream, growl, fry y falsas cuerdas con técnica segura. Clases online y presenciales en Santiago de Chile, para metal, hardcore y punk.",
  url: resolveSiteUrl(),
  locale: "es_CL",
  city: "Santiago, Chile",
  whatsapp: {
    // Solo dígitos, con código de país, sin "+".
    number: nonEmpty(process.env.NEXT_PUBLIC_WHATSAPP, "56900000000").replace(/\D/g, ""),
    message: "Hola Scream Lab, quiero agendar una clase de prueba.",
  },
  instagram: nonEmpty(process.env.NEXT_PUBLIC_INSTAGRAM, "screamlabnet").replace(/^@/, ""),
  email: nonEmpty(process.env.NEXT_PUBLIC_EMAIL, "hola@screamlab.net"),
  youtube: nonEmpty(process.env.NEXT_PUBLIC_YOUTUBE, ""),
} as const;

export function whatsappUrl(text: string = site.whatsapp.message): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function instagramUrl(): string {
  return `https://instagram.com/${site.instagram}`;
}
