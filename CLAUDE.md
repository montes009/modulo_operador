# Alcon Ops — Landing

Sitio **Astro estático** (landing de presentación de Alcon Ops, software de gestión
de alquiler de maquinaria). Vive en la **raíz** de este repo `montes009/modulo_operador`.
Rama principal: `main`.

> Origen: el contenido se migró desde la carpeta `landing/` del repo `OPS-ALCON-ADMI`.
> El repo `modulo_operador` tenía una versión vieja de prueba que se borró por completo.

## Stack

- **Astro 4** (`astro build`), sin frameworks de UI. Salida estática en `dist/`.
- Una sola página: `src/pages/index.astro`.
- Componente de demo interactiva: `src/components/FlowDemo.astro` (vanilla JS, sin deps).
- Estilos: `src/styles/global.css` (variables CSS de tema) + `<style>` scopeado por componente.
- Fuentes: Inter + Space Grotesk (Google Fonts).

## Comandos

```bash
npm install
npm run dev       # desarrollo (astro dev)
npm run build     # genera dist/
npm run preview   # sirve dist/ por HTTP (NO abrir dist/index.html con file://, ver abajo)
```

## Deploy en Render (Static Site)

| Campo | Valor |
|---|---|
| Type | **Static Site** |
| Repo | `montes009/modulo_operador` |
| Branch | `main` |
| Root Directory | *(vacío)* |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

- URL en producción: `modulo-operador.onrender.com`.
- En `astro.config.mjs` **NO** se define `site` a propósito: así las URLs son relativas
  y el sitio corre en el dominio que asigne Render (antes apuntaba a `alconops.com`
  y eso tumbaba la app). No volver a fijar `site` salvo que se use dominio propio.

## ⚠️ Gotchas importantes

1. **No abrir `dist/index.html` con `file://`.** Astro enlaza el CSS con ruta absoluta
   (`/_astro/...`), que solo resuelve servido desde la raíz web. Por `file://` se ve sin
   estilos (todo gigante/roto). Para previsualizar local usar `npm run preview` o un
   `python3 -m http.server` dentro de `dist/`.
2. **CSS scopeado vs. JS.** El `<style>` de cada componente Astro se escopa con
   `[data-astro-cid-...]`. Los elementos que `FlowDemo.astro` inyecta por JS (innerHTML)
   **no** reciben ese atributo, así que las reglas scopeadas no los alcanzan. Para esos
   íconos el tamaño va **inline** (`width`/`height` en la etiqueta `<svg>`), no por clase.

## Sistema de íconos (plata / "pro", NO emojis)

Decisión de diseño: **nada de emojis a color** en el contenido; se ven como caricatura.
Todos los íconos son **SVG de línea monocromáticos** pintados con un degradado plata.

- El degradado se define **una sola vez** en `src/pages/index.astro`, justo tras `<body>`:
  `<linearGradient id="silver">` (de `#f6f8fb` a `#7c8597`). Cualquier SVG lo usa con
  `stroke="url(#silver)"`.
- Los paths viven en objetos `const ic = {...}` (en `index.astro`) y `const dic = {...}`
  (en `FlowDemo.astro`). Para añadir un ícono: agregar el/los `<path>` al objeto y
  referenciarlo por su clave.
- Patrón de uso: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#silver)"
  stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" set:html={ic.clave}>`.
- **Placas metálicas**: los íconos de funciones/roles/tarjetas van sobre un fondo
  `linear-gradient(160deg,#283142,#141a26)` con borde claro e `inset` highlight.
- **Sobre fondos claros** (las "pantallas" blancas de la demo) se usa
  `stroke="currentColor"` para que el ícono herede el color del contexto, no plata.

Zonas ya convertidas: módulos (funciones), roles, bullets de equipo, tarjetas "Tan
fácil…", chips, fila de confianza, y toda la demo "Flujo en vivo" (lista de pasos,
badge de rol, candado de URL, íconos internos de las pantallas).

Pendiente menor (intencional): los 2 toasts del hero (`ha-float` 🔔/✅) siguen con emoji
por ser "notificaciones tipo captura"; convertirlos solo si se pide.

## Convenciones

- Idioma del contenido y de la comunicación: **español**.
- Mantener el estilo del código existente (densidad de comentarios, nombres, CSS inline-ish).
- `gitignore` está en `.gitignore` (antes era `gitignore.txt`, mal nombrado).
