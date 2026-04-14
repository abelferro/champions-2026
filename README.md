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

5. En GitHub, agrega estos `Actions secrets` para el deploy por FTP:

```text
FTP_SERVER
FTP_USERNAME
FTP_PASSWORD
FTP_DIR
```

## Notas de deploy

- El workflow `.github/workflows/deploy-hostinger.yml` compila y publica automáticamente en Hostinger por FTP.
- Para este landing, el destino recomendado es `FTP_DIR=/public_html/lp/champions-2026/`.
- El `basePath` por defecto ya está configurado como `"/lp/champions-2026"` en `site.config.ts`.
- Si lo vas a publicar en otra ruta, ajusta `site.config.ts` antes de hacer deploy.
