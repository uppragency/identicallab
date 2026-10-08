# SEO iDentical Lab: ce s-a făcut și ce rămâne

## Făcut (8 octombrie 2026)
- A1: `sitemap.xml` și `robots.txt` (indexarea rămâne oprită până se setează `ALLOW_INDEXING=true`).
- A2: titluri, meta description, canonical, Open Graph, Twitter card și imagine de partajare (`/og.png`) pe toate cele 27 de pagini.
- A3: JSON-LD: LocalBusiness, WebSite, BreadcrumbList, Service (4 servicii), FAQPage (Întrebări și FAQ-urile serviciilor), Article (12 ghiduri).
- A4: un singur H1 pe pagină, `lang="ro"`, ierarhie verificată.
- A6: Lighthouse mobil: SEO 100, Best Practices 100, Accesibilitate 96, Performanță 86-97. Rămâne de corectat contrastul unor texte mici.
- B1: tabel title/meta/H1 implementat din `lib/seo.ts` (cuvinte-cheie țintă incluse acolo).
- B5: linkuri interne: servicii → ghiduri relevante (bloc "Ghiduri utile"), ghiduri → serviciu și alte ghiduri, homepage → toate paginile.

## De făcut mai târziu
| Cod | Acțiune | Depinde de |
|---|---|---|
| A5 | Redirecturi 301 din vechiul WordPress | Lista URL-urilor vechi (export sitemap WordPress) |
| B2 | Cuvinte-cheie long-tail pe intenție de căutare | Export Search Console sau Keyword Planner (date reale de volum) |
| B3 | Briefuri de conținut pentru ghiduri noi și pagini cu text subțire | Conținutul final |
| B4 | Oportunități FAQ noi, cu întrebări reale ale medicilor | Întrebări reale de la clinici |
| B6 | Îmbunătățirea secțiunilor slabe și a placeholderelor `[ completează ... ]` | Conținut validat de client |
| C1 | Analiză SERP și lacune de conținut față de competitori din România | Date reale pentru Google.ro (unealta de căutare e limitată la SUA) |
| C2 | Repurposing ghiduri → social și email | Canalele active ale clientului |
| Alte | H1 de homepage și de servicii sunt texte de design, fără cuvânt-cheie. Decizie de luat: păstrăm designul sau adăugăm cuvântul-cheie în H1. | Decizia ta |
| Alte | Imagini în `next/image` cu alt text descriptiv | Fotografiile reale (vezi lista-placeholdere.md) |
| Alte | Pornire indexare: `ALLOW_INDEXING=true` și `NEXT_PUBLIC_SITE_URL=https://identical.ro` în Vercel | Conectarea domeniului |
| Alte | Search Console: verificare domeniu și trimitere sitemap | Conectarea domeniului |
| Alte | Contrast text mic (Lighthouse color-contrast) | Decizie de design |
