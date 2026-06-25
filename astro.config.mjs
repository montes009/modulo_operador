import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // No 'site' fijo: el sitio se sirve desde el dominio que asigne Render.
  // Sin 'site', Astro genera URLs relativas y funciona en cualquier host.
  server: { host: true, port: 4321 },
});
