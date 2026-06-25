# Alcon Ops — Landing

Página web de presentación / ventas de **Alcon Ops** (sistema de gestión de
alquiler de maquinaria). Hecha con [Astro](https://astro.build). Es **independiente
del app**: vive en esta carpeta, no toca `index.html` ni la PWA de producción.

## Desarrollo

```bash
cd landing
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # genera landing/dist (estático)
npm run preview  # sirve el build localmente
```

## Deploy en Render (Static Site)

Crear un **nuevo** Static Site en Render apuntando a este repo:

| Campo | Valor |
|---|---|
| Root Directory | `landing` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `landing/dist` |
| Branch | la que se publique (p. ej. `main`) |

> Es un servicio **aparte** del app (`OPS-ALCON-ADMI`). No comparte deploy ni
> caché con alconops.com. El dominio (subdominio propio o raíz) se decide aparte.

## Estructura

- `src/pages/index.astro` — la página (hero, funciones, qué soluciona, roles, CTA).
- `src/components/FlowDemo.astro` — demo interactiva del ciclo de un equipo.
- `src/styles/global.css` — variables de marca (navy + rojo) y utilidades.
