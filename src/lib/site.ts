/**
 * Datos de contacto y configuración del sitio.
 * Cambia estos valores antes de publicar; todo el sitio los lee desde aquí.
 */
export const site = {
  name: "Scream Lab",
  tagline: "Academia de canto extremo",
  description:
    "Aprende scream, growl, fry y falsas cuerdas con técnica segura. Clases online y presenciales en Santiago de Chile, para metal, hardcore y punk.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://screamlab.cl",
  locale: "es_CL",
  city: "Santiago, Chile",
  whatsapp: {
    // Solo dígitos, con código de país, sin "+".
    number: process.env.NEXT_PUBLIC_WHATSAPP ?? "56900000000",
    message: "Hola Scream Lab, quiero agendar una clase de prueba.",
  },
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "screamlab.cl",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hola@screamlab.cl",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE ?? "",
} as const;

export function whatsappUrl(text: string = site.whatsapp.message): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function instagramUrl(): string {
  return `https://instagram.com/${site.instagram}`;
}
