# Traducere RO/EN: cum functioneaza

## URL
* RO la radacina: `/servicii`. EN sub `/en` cu slug-uri engleze: `/en/services`.
* Tabela `ROUTES` din `lib/i18n/config.ts` leaga calea RO de cea EN.
* `proxy.ts` rescrie URL-urile publice catre `app/(site)/[lang]/<folder RO>` si redirectioneaza (308) `/ro/...` si `/en/<slug RO>`.
* URL necunoscut: `app/global-not-found.tsx` (limba vine din headerul `x-site-lang` setat in proxy).

## Texte
* Sursa ramane textul RO din componente. La randare pe server, `lib/jsx/translate.server.ts` cauta textul RO in catalog si pune varianta EN.
* Catalog: `lib/i18n/catalog.en.1..4.ts`, perechi `[RO, EN]`. Titlurile cu accent folosesc semnatura `*accent*` si `|` pentru rand nou.
* Daca modifici un text RO, EN cade pe RO pana actualizezi cheia din catalog (cheia trebuie sa fie identica cu textul RO, spatii normalizate).
* Pentru a adauga o traducere: adauga perechea in `catalog.en.4.ts`, apoi `npm run build`.
* Controale: `node tools/i18n-extract.mjs` (candidati netraduși), `i18n-check.mjs`, `i18n-crawl.mjs`.
* Texte client (formular, cookie): dictionare `TEXT` ro/en in `SiteBehaviors.tsx` si `CookieBanner.tsx`.
* Emailuri: `lib/mail.ts` (confirmare RO/EN, campul "Limba site" in notificarea interna).

## SEO
* `lib/seo.ts`: titluri si descrieri pe limba, canonical si hreflang (ro-RO, en, x-default), sitemap cu alternate.
* Paginile legale raman doar in RO, cu notificare EN pe pagina.

## De validat
* Terminologia EN trebuie validata de laborator.
* Pagina de termeni inca contine promisiunea de pret ("Revenim cu termenul de executie si cu pretul..."), eliminata in rest.
