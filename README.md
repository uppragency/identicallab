# iDentical Lab

Website iDentical Lab, implementat 1:1 după design-ul "iDentical Lab v2" (Next.js App Router, Vercel).

## Structură
- `components/sections/*`: secțiunile paginii, generate din design (markup și stiluri identice).
- `components/SiteBehaviors.tsx`: interacțiunile din design (mega menu Servicii, căutare Ctrl/Cmd+K, drawer mobil, modal ofertă, filtre portofoliu, comparatoare înainte/după, carusel testimoniale, jurnal + articol, animații de reveal, header auto-hide) și trimiterea formularelor.
- `app/api/leads`: formularele de ofertă (modal + secțiunea Contact). Salvează în Supabase (`leads`) și trimite email prin Resend.
- `app/api/newsletter`: abonare newsletter (Supabase `newsletter_subscribers`).
- `supabase/migrations`: schema bazei de date (RLS activ, anon poate doar INSERT).

## Variabile de mediu
Vezi `.env.example`. În Vercel sunt setate pentru Production și Preview.

| Variabilă | Rol |
| --- | --- |
| `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` | scriere formulare (server-only) |
| `RESEND_API_KEY` | trimitere email |
| `RESEND_FROM` | expeditor. Până la verificarea domeniului identicallab: `onboarding@resend.dev` |
| `LEADS_TO_EMAIL` | destinatar notificări (separate prin virgulă) |
| `BROCHURE_URL` | opțional, link PDF broșură în emailul de confirmare |
| `ALLOW_INDEXING` | `true` la lansarea pe domeniul final, altfel site-ul este `noindex` |

Emailul de confirmare către cabinet se trimite doar când `RESEND_FROM` folosește un domeniu verificat în Resend.

## Rulare locală
```bash
npm install
cp .env.example .env.local
npm run dev
```
