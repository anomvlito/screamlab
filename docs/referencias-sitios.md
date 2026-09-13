# Referencias: sitios de academias de canto extremo

Investigación hecha el 2026-09-13 para diseñar screamlab.cl. Dos barridos: sitios en inglés y sitios en español.

## Qué copiamos y dónde quedó en el sitio

| Idea                                              | Origen                          | Dónde está en el código                       |
| ------------------------------------------------- | ------------------------------- | --------------------------------------------- |
| Promesa de salud vocal sobre el pliegue           | Metal Vocal Coach, Gritando Rock | `hero` en `src/lib/content.ts`                |
| Método con nombre y 4 fases                       | Gritando Rock ("Jedi")           | `method`, `src/components/Method.tsx`         |
| "Elige tu camino" (fry, false cord, cantante)     | Extreme Vocal Institute          | `paths`, `src/components/Paths.tsx`           |
| Audio antes/después (nadie del nicho lo tiene)    | Vacío detectado                  | `beforeAfter`, `src/components/BeforeAfter.tsx` |
| Precios visibles en portada, en CLP               | Academia Gutural, Canto Sin Fronteras | `pricing`, `src/components/Pricing.tsx`  |
| Escalera: gratis > prueba > pack                  | Canto Sin Fronteras              | `freebie` + `pricing`                         |
| Garantía explícita                                | Scream Academy                   | `guarantee`                                   |
| Testimonios con resultado concreto                | Scream Academy                   | `testimonials[].outcome`                      |
| WhatsApp como CTA principal y botón flotante      | Ana Rochas, Rock School Barcelona | `WhatsAppFloat.tsx`, todos los botones        |
| FAQ "¿Gritar daña la voz?"                        | Vacío detectado                  | `faq`                                         |
| Disclaimer médico en el pie                       | Melissa Cross                    | `footer.disclaimer`                           |
| Todo renderizado en servidor (SEO)                | Fallo de Scream Academy (SPA)    | Next.js App Router, páginas estáticas         |

## Sitios en inglés

| Sitio | URL | Vende | Stack | Fortaleza | Debilidad |
| --- | --- | --- | --- | --- | --- |
| Extreme Vocal Institute (David Benites) | https://www.extremevocalinstitute.com/ | Membresía USD 35/mes, 1:1 | Wix | Mayor prueba social del nicho (artistas, 269k subs) | Precios y resultados ocultos en portada |
| Melissa Cross, The Zen of Screaming | https://melissacross.com/ | Cursos grabados USD 20 a 197 | Shopify | Precios transparentes | Cero prueba social, parece tienda |
| Scream Academy (David Wu) | https://course.scream-academy.com/ | Curso + coaching en vivo por Zoom y Telegram, garantía | React SPA | Copy orientado a resultados, garantía | Sin SSR, precios invisibles sin JS |
| Metal Vocal Coach (Katarina) | https://www.metalvocalcoach.com/ | 1:1 EUR 200/45 min, cursos | Kajabi + Calendly | Promesa clarísima "sin dañar tu voz" | Paleta pastel, sin audios |
| Kardavox Academy | https://www.kardavoxacademy.com/ | Curso gratis por email, 1:1 | WordPress + Teachable | Lead magnet al frente | Identidad visual débil |
| The Charismatic Voice | https://thecharismaticvoice.com/ | Cohortes, curso con Will Ramos USD 298 | WordPress + Kajabi | Credibilidad científica | CTAs que compiten |

Otros vistos: chrisliepe.com, harsh-vocal-school.de, thevocaliststudio.com/extreme-singing, promixacademy.com (Britta Görtz).

Convenciones del nicho en inglés: bio del coach, lista de técnicas, historias de alumnos, lead magnet gratis, newsletter. FAQ y precios solo en páginas interiores. Mitad va oscuro metal, mitad claro y "seguro". Nadie usa audio antes/después en portada.

## Sitios en español

| Sitio | URL | País | Vende | Stack | Fortaleza | Debilidad |
| --- | --- | --- | --- | --- | --- | --- |
| Academia Gutural | https://academiagutural.com/ | España | Cursos grabados EUR 200 a 280, mentoría por Discord | WordPress + Elementor + WooCommerce | Oferta con precio y duración, llamada gratis | Sin fotos, audios ni testimonios |
| Canto Sin Fronteras | https://cantosinfronteras.com/ | Argentina | 1:1 USD 60, pack 4 USD 200, rutina USD 50, curso en Hotmart | WordPress + Divi | Escalera de precios visible | Guturales enterrados en un blog |
| Gritando Rock (Mariana Bianchini) | https://gritandorock.com/ | Buenos Aires | 1:1 presencial, método "Jedi" en 4 etapas | WordPress + Elementor | Identidad fuerte, método con nombre | Sin precio ni CTA directo |
| Clases de Canto Rock y Metal (Ana Rochas) | https://clasesdecantorockymetal.com/ | España | 1:1 presencial y online | WordPress + Divi | Dolor > promesa > reseñas Google > WhatsApp | 13 secciones, sin precio |
| Metal Academy of Music | https://www.metalacademyofmusic.com/ | Barcelona | Escuela de metal completa, canto gutural como una línea | WordPress + Elementor + Bookly | Logos de prensa, equipo con caras | El gutural se pierde entre 11 profes |
| Rock School Barcelona (taller voces extremas) | https://www.rockschoolbarcelona.com/canto-voz-extrema-gutural-distorsion-screaming | Barcelona | Taller 12 clases EUR 320 a 390 | HTML a medida | WhatsApp directo | Página aislada |

Chile: no existe ninguna academia de canto extremo con sitio propio indexado. Solo perfiles en Superprof (5.000 a 30.000 CLP por hora, por ejemplo un profesor en Providencia con diplomado en vocología) y cuentas de Instagram.

Convenciones en español: hero > método > oferta > profesor con credenciales > testimonios > contacto. Instagram siempre, WhatsApp en España y Latam, Discord o Telegram para alumnos. Negro con un acento (rojo sangre o amarillo), tipografía display condensada, 100% WordPress. Nadie usa Next.js: hay espacio para verse moderno.

## Ideas pendientes de implementar

- Video corto del coach haciendo fry y false cord en el hero.
- Reserva de horario con agenda (Cal.com o Calendly) y pago con Flow o MercadoPago.
- Reseñas de Google embebidas cuando existan.
- Discord o WhatsApp grupal solo para alumnos.
