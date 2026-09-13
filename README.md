# Scream Lab

Sitio web de la academia de canto extremo Scream Lab (Santiago, Chile).
Next.js 16 (App Router) + TypeScript + Tailwind CSS 4. Pensado para publicarse en Vercel sin configuración extra.

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # edita WhatsApp, Instagram, correo y URL
npm run dev                  # http://localhost:3000
```

## Publicar en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com/new](https://vercel.com/new) importa el repo. Vercel detecta Next.js solo; no cambies nada.
3. En **Settings > Environment Variables** agrega las variables de `.env.example`.
4. Deploy. Cada push a `main` vuelve a publicar.

Alternativa por terminal:

```bash
npx vercel          # preview
npx vercel --prod   # producción
```

## Dónde editar cada cosa

| Qué                                  | Archivo                                   |
| ------------------------------------ | ----------------------------------------- |
| Textos, precios, FAQ, testimonios    | `src/lib/content.ts`                      |
| WhatsApp, Instagram, correo, URL     | `src/lib/site.ts` y variables de entorno  |
| Colores y fuentes                    | `src/app/globals.css`, `src/app/layout.tsx` |
| Secciones y su orden                 | `src/app/page.tsx`                        |
| Logo (vector)                        | `public/brand/screamlab-logo.svg`         |
| Favicon y previsualización en redes  | `src/app/icon.png`, `src/app/opengraph-image.png` |

## Pendientes antes de lanzar

- [ ] Testimonios reales con nombre y banda.
- [ ] Precios definitivos.
- [ ] Audios antes/después en `public/audio/antes.mp3` y `public/audio/despues.mp3`, luego `ready: true` en `beforeAfter`.
- [ ] Comprar el dominio y ponerlo en `NEXT_PUBLIC_SITE_URL` (Vercel > Settings > Environment Variables). Sin esto `robots.ts` y el sitemap usan el dominio de respaldo.

Ya resuelto: WhatsApp, Instagram y correo reales; foto y autorización del coach; `robots.ts` ya no indexa vistas previas de Vercel, solo producción; analítica instalada (ver abajo).

## Analítica

- **Vercel Analytics** y **Speed Insights**: activos por defecto, sin configurar nada (vienen con el hosting). Se ven en el dashboard de Vercel, pestaña Analytics / Speed Insights del proyecto.
- **Google Analytics 4** (opcional): crea una propiedad GA4, copia su ID de medición (`G-XXXXXXXXXX`) y ponlo en Vercel como `NEXT_PUBLIC_GA_ID`. Sin esa variable, GA4 simplemente no carga.

## Logo

- `public/brand/screamlab-logo.svg`: versión web liviana (230 KB, `fill="currentColor"`), usada como máscara CSS por `src/components/Logo.tsx`.
- `public/brand/screamlab-logo-white.svg` y `-black.svg`: mismas curvas con color fijo, para redes o impresión rápida.
- `public/brand/screamlab-logo-print.svg`: trazado de máxima fidelidad (844 KB) para imprenta.

## Scripts

- `npm run dev`: servidor de desarrollo.
- `npm run build`: build de producción (también valida tipos).
- `npm run lint`: ESLint.
- `npm start`: sirve el build.
