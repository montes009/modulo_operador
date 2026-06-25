import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://alconops.com',
  server: { host: true, port: 4321 },
});
