# Champions 2026

Landing independiente en Next.js para `WELS Foundation`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run build
```

El export sale en `out/`.

## Publicarlo como repo independiente

1. Entra a esta carpeta:

```bash
cd /Users/abelferro/GitHub/welsfoundation/lp/champions-2026
```

2. Inicializa el repo local:

```bash
git init
git add .
git commit -m "Initial Champions 2026 landing"
```

3. Crea un repo nuevo en GitHub, por ejemplo `champions-2026`.

4. Conecta el remoto y publica:

```bash
git remote add origin git@github.com:TU-USUARIO/champions-2026.git
git branch -M main
git push -u origin main
```

5. En GitHub, ve a `Settings > Pages` y deja `Source: GitHub Actions`.

## Notas de deploy

- El workflow `.github/workflows/deploy-pages.yml` ya compila y publica automáticamente en GitHub Pages.
- Para GitHub Pages de un repo proyecto, el build usa `LANDING_BASE_PATH="/<repo>"`.
- Para otro hosting, el valor por defecto sigue siendo `basePath: "/lp/champions-2026"` en `site.config.ts`.
- Si lo vas a publicar en un dominio raíz o en otra ruta, ajusta `LANDING_BASE_PATH` en CI o cambia `site.config.ts` y `public/.htaccess`.
