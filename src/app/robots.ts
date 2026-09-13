import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Vercel marca cada deploy con VERCEL_ENV: "production" | "preview" | "development".
// Solo la producción real debe indexarse; las vistas previas (otra rama, otro
// dominio *.vercel.app) le dicen a los buscadores que no las indexen, para no
// generar contenido duplicado bajo URLs que van a desaparecer.
const isProduction = process.env.VERCEL_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isProduction ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
