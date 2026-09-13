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

- [ ] Reemplazar número de WhatsApp, Instagram y correo en `.env.local` y en Vercel.
- [ ] Nombre, bio y foto real del coach (`src/lib/content.ts`, `src/components/Coach.tsx`).
- [ ] Testimonios reales con nombre y banda.
- [ ] Precios definitivos.
- [ ] Audios antes/después en `public/audio/antes.mp3` y `public/audio/despues.mp3`, luego `ready: true` en `beforeAfter`.
- [ ] Comprar el dominio y ponerlo en `NEXT_PUBLIC_SITE_URL`.

## Logo

- `public/brand/screamlab-logo.svg`: versión web liviana (230 KB, `fill="currentColor"`), usada como máscara CSS por `src/components/Logo.tsx`.
- `public/brand/screamlab-logo-white.svg` y `-black.svg`: mismas curvas con color fijo, para redes o impresión rápida.
- `public/brand/screamlab-logo-print.svg`: trazado de máxima fidelidad (844 KB) para imprenta.

## Scripts

- `npm run dev`: servidor de desarrollo.
- `npm run build`: build de producción (también valida tipos).
- `npm run lint`: ESLint.
- `npm start`: sirve el build.
