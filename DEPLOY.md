# Desplegar la landing de Alcon Ops

La landing vive en esta carpeta `landing/` y es **independiente del app**
(no toca `index.html`, ni el `?v=`, ni la PWA de producción).

Hay dos caminos. Ambos dan **deploy aislado, caché aparte y dominio propio**.

---

## ✅ Camino A — Repositorio NUEVO (lo que elegiste)

> Esta sesión de Claude solo tiene acceso al repo `ops-alcon-admi`, así que el
> repo nuevo lo creas tú una vez (30 s) y empujas esta carpeta. Después puedes
> pedirme cambios y los hago sobre `ops-alcon-admi`, o me das acceso al repo nuevo.

1. **Crea el repo vacío** en GitHub: `montes009/alcon-ops-landing`
   (sin README, sin .gitignore — vacío).

2. **Empuja solo esta carpeta** como raíz del repo nuevo. Desde una copia local
   del repo `OPS-ALCON-ADMI` (en la rama que tiene `landing/`):

   ```bash
   # 1) copia la carpeta a un lugar aparte
   cp -r landing /tmp/alcon-ops-landing
   cd /tmp/alcon-ops-landing

   # 2) inicia git y sube
   git init -b main
   git add .
   git commit -m "feat: landing de Alcon Ops (Astro)"
   git remote add origin https://github.com/montes009/alcon-ops-landing.git
   git push -u origin main
   ```

3. **Conecta Render** al repo nuevo como **Static Site**:

   | Campo | Valor |
   |---|---|
   | Repository | `montes009/alcon-ops-landing` |
   | Branch | `main` |
   | Root Directory | *(vacío — la carpeta ya es la raíz)* |
   | Build Command | `npm install && npm run build` |
   | Publish Directory | `dist` |

---

## ⚡ Camino B — Mismo repo, deploy separado (cero pasos extra, ya está subido)

Si quieres verla en línea **ya mismo** sin crear repo, conecta Render
directamente a `ops-alcon-admi` apuntando a la subcarpeta:

| Campo | Valor |
|---|---|
| Repository | `montes009/OPS-ALCON-ADMI` |
| Branch | `claude/affectionate-gauss-gaxbce` (o `main` si la mergeas) |
| Root Directory | `landing` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `landing/dist` |

Es un servicio Render **aparte** del app: no comparten deploy ni caché. Es la
forma más rápida de obtener una URL `.onrender.com` temporal. Puedes migrar al
repo nuevo (Camino A) cuando quieras — el código es el mismo.

---

## Logo e imágenes (los subes después)

Coloca tus archivos en `landing/public/` (ej. `public/logo.svg`,
`public/captura-taller.png`). En el código se referencian con ruta absoluta
desde la raíz del sitio, p. ej. `<img src="/logo.svg" />`. Hoy el hero usa una
ventana simulada y la marca es la inicial "A"; cuando subas el logo lo cambiamos.
