import type { Metadata } from "next";

export const SITE_NAME = "iDentical Lab";
export const BRAND_SUFFIX = " | iDentical Lab";

export type PageSeo = {
  /** Primary target keyword (Romanian search intent). */
  kw: string;
  /** Full <title>, max 60 chars. */
  title: string;
  /** Meta description, max 155 chars. */
  description: string;
  /** Change frequency and priority for the sitemap. */
  priority: number;
};

export const SEO: Record<string, PageSeo> = {
  "/": {
    kw: "laborator dentar digital București",
    title: "Laborator dentar digital București | iDentical Lab",
    description: "Laborator dentar digital în București: modele 3D, segmentare CBCT, CAD/CAM și ghiduri chirurgicale. Trimite primul caz și cere o ofertă.",
    priority: 1,
  },
  "/despre-noi": {
    kw: "laborator dentar București",
    title: "Despre noi: laborator dentar, 30 de ani | iDentical Lab",
    description: "Cunoaște laboratorul iDentical Lab din București: 30 de ani de experiență și flux digital complet, de la scanare la livrare. Vezi cum lucrăm.",
    priority: 0.7,
  },
  "/servicii": {
    kw: "servicii laborator dentar digital",
    title: "Servicii de laborator dentar digital | iDentical Lab",
    description: "Modele mandibulare 3D, segmentare CBCT, design CAD/CAM și ghiduri chirurgicale pentru cabinete. Alege serviciul și cere o ofertă rapidă.",
    priority: 0.9,
  },
  "/servicii/modele-mandibulare-3d": {
    kw: "model mandibular 3D",
    title: "Model mandibular 3D printat din CBCT | iDentical Lab",
    description: "Model mandibular 3D printat din CBCT: replică fidelă a osului pentru măsurători și planificare. Trimite DICOM și primești oferta rapid.",
    priority: 0.9,
  },
  "/servicii/segmentare-cbct": {
    kw: "segmentare CBCT",
    title: "Segmentare CBCT pentru implantologie | iDentical Lab",
    description: "Segmentare CBCT din DICOM, cu verificarea acurateței pentru planificare și printare 3D. Trimite setul de imagini și cere o ofertă.",
    priority: 0.9,
  },
  "/servicii/design-cad-cam": {
    kw: "design CAD/CAM dentar",
    title: "Design CAD/CAM dentar pentru coroane | iDentical Lab",
    description: "Design CAD/CAM dentar cu control asupra formei, ocluziei și esteticii, aprobat de medic înainte de producție. Cere o ofertă pentru cazul tău.",
    priority: 0.9,
  },
  "/servicii/ghiduri-chirurgicale": {
    kw: "ghid chirurgical implant",
    title: "Ghid chirurgical pentru implant | iDentical Lab",
    description: "Ghid chirurgical pentru implanturi, realizat din planul digital aprobat de tine și verificat înainte de livrare. Cere ofertă pentru cazul tău.",
    priority: 0.9,
  },
  "/portofoliu": {
    kw: "lucrări dentare înainte și după",
    title: "Portofoliu: lucrări dentare înainte și după | iDentical Lab",
    description: "Vezi cazuri înainte și după: coroane, fațete, ghiduri chirurgicale, modele 3D și segmentare CBCT. Trimite cazul tău și primești o ofertă.",
    priority: 0.7,
  },
  "/cum-lucram": {
    kw: "flux digital laborator dentar",
    title: "Cum lucrăm: de la CBCT la livrare | iDentical Lab",
    description: "Fluxul digital iDentical Lab, de la fișierul CBCT la lucrarea livrată în cabinet: pași, planificare și termene. Trimite primul caz azi.",
    priority: 0.8,
  },
  "/ghiduri": {
    kw: "ghiduri laborator dentar digital",
    title: "Ghiduri pentru cabinete dentare digitale | iDentical Lab",
    description: "12 ghiduri practice despre CBCT, DICOM/STL, planificare implantară, CAD/CAM și ghiduri chirurgicale. Citește și trimite cazul fără greșeli.",
    priority: 0.7,
  },
  "/intrebari": {
    kw: "întrebări laborator dentar digital",
    title: "Întrebări frecvente despre laborator dentar | iDentical Lab",
    description: "Răspunsuri despre fișiere, servicii, termene, prețuri și colaborare cu un laborator dentar digital. Nu găsești răspunsul? Scrie-ne.",
    priority: 0.6,
  },
  "/contact": {
    kw: "contact laborator dentar București",
    title: "Contact laborator dentar București | iDentical Lab",
    description: "Contactează iDentical Lab: telefon 0724 065 767, email, program și adresa din București. Completează formularul și primești oferta.",
    priority: 0.8,
  },
  "/termeni-si-conditii": {
    kw: "termeni și condiții",
    title: "Termeni și condiții | iDentical Lab",
    description: "Regulile de utilizare a site-ului iDentical Lab și ale cererilor de ofertă. Citește termenii înainte de a trimite un caz.",
    priority: 0.2,
  },
  "/politica-de-confidentialitate": {
    kw: "politica de confidențialitate",
    title: "Politica de confidențialitate | iDentical Lab",
    description: "Cum prelucrăm datele personale transmise prin formulare: scop, temei legal, durată și drepturile tale conform GDPR. Citește politica.",
    priority: 0.2,
  },
  "/politica-cookie": {
    kw: "politica de cookie",
    title: "Politica de cookie-uri | iDentical Lab",
    description: "Ce cookie-uri și date locale folosește site-ul iDentical Lab și cum îți modifici oricând preferințele. Gestionează-ți alegerea aici.",
    priority: 0.2,
  },
};

export type GuideSeo = { title: string; description: string; kw: string };

/** Per-guide SEO, keyed by slug (see lib/guides.ts). */
export const GUIDE_SEO: Record<string, GuideSeo> = {
  "cum-trimiti-un-fisier-cbct": {
    kw: "trimitere fișier CBCT laborator",
    title: "Cum trimiți un fișier CBCT la laborator | iDentical Lab",
    description: "Ce conține un export CBCT complet, cum îl arhivezi și pe ce canal îl trimiți laboratorului. Evită întârzierile și trimite cazul corect.",
  },
  "dicom-stl-sau-ply": {
    kw: "DICOM STL PLY diferențe",
    title: "DICOM, STL sau PLY: ce format alegi | iDentical Lab",
    description: "Ce format de fișier trimiți pentru fiecare lucrare: DICOM pentru CBCT, STL sau PLY pentru scan. Regula practică pentru cabinete.",
  },
  "ce-face-un-cbct-util": {
    kw: "CBCT pentru segmentare",
    title: "CBCT util pentru segmentare: cerințe | iDentical Lab",
    description: "Ce face un CBCT bun pentru segmentare: câmp vizual, rezoluție și poziționarea pacientului. Verifică-ți examinarea înainte să o trimiți.",
  },
  "ce-este-segmentarea-cbct": {
    kw: "ce este segmentarea CBCT",
    title: "Ce este segmentarea CBCT, pe scurt | iDentical Lab",
    description: "Ce este segmentarea CBCT, ce rezultat primești și cum o folosești pentru planificare și modele 3D. Ghid scurt pentru medici.",
  },
  "cand-merita-un-model-mandibular": {
    kw: "model mandibular printat 3D",
    title: "Când merită un model mandibular 3D | iDentical Lab",
    description: "Când ajută un model mandibular printat 3D: cazuri complexe, regenerare osoasă și discuția cu pacientul. Află dacă merită pentru cazul tău.",
  },
  "planificare-implantara-digitala": {
    kw: "planificare implantară digitală",
    title: "Planificare implantară digitală, pas cu pas | iDentical Lab",
    description: "Pașii planificării implantare digitale: date, poziționare, validare și ghid chirurgical. Ce primești de la laborator la fiecare etapă.",
  },
  "dual-scan-technique": {
    kw: "dual scan technique",
    title: "Dual scan technique: când și de ce | iDentical Lab",
    description: "Ce este dual scan technique, când o folosești și ce date trimiți laboratorului. Ghid practic pentru planificarea protezărilor complexe.",
  },
  "scan-intraoral-pentru-laborator": {
    kw: "scan intraoral pentru laborator",
    title: "Scan intraoral pentru laborator: verificări | iDentical Lab",
    description: "Ce verifici într-un scan intraoral înainte să-l trimiți laboratorului: margini, ocluzie, acoperire. Checklist care reduce refacerile.",
  },
  "culoare-si-fotografii": {
    kw: "comunicare culoare laborator dentar",
    title: "Comunicarea culorii: fișă și fotografii | iDentical Lab",
    description: "Cum comunici culoarea laboratorului: fișă, fotografii și condiții de lumină. Reduci diferențele de nuanță și retușurile la lucrare.",
  },
  "cum-validezi-un-design-cad-cam": {
    kw: "validare design CAD/CAM",
    title: "Cum validezi un design CAD/CAM | iDentical Lab",
    description: "Ce verifici când primești designul CAD/CAM: formă, ocluzie, margini și estetică. Ghid de validare înainte de producție.",
  },
  "tipuri-de-ghiduri-chirurgicale": {
    kw: "tipuri de ghiduri chirurgicale",
    title: "Ghiduri chirurgicale: tipuri și alegere | iDentical Lab",
    description: "Diferențele dintre ghidurile dento-, mucozo- și osos-purtate și când alegi fiecare tip. Alege ghidul potrivit cazului tău.",
  },
  "verificarea-ghidului-inainte-de-interventie": {
    kw: "verificare ghid chirurgical",
    title: "Verificarea ghidului înainte de intervenție | iDentical Lab",
    description: "Cum verifici potrivirea ghidului chirurgical înainte de intervenție: stabilitate, sleeve-uri, poziție. Checklist pentru siguranța cazului.",
  },
};

const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "iDentical Lab, laborator dentar digital" };

/** Build Next.js Metadata for a path, with canonical and social tags. */
export function metaFor(path: string, over?: Partial<Pick<PageSeo, "title" | "description">>): Metadata {
  const s = SEO[path];
  const title = over?.title ?? s.title;
  const description = over?.description ?? s.description;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "ro_RO", siteName: SITE_NAME, url: path, title, description, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

export function guideMeta(slug: string): Metadata {
  const g = GUIDE_SEO[slug];
  const path = `/ghiduri/${slug}`;
  return {
    title: { absolute: g.title },
    description: g.description,
    alternates: { canonical: path },
    openGraph: { type: "article", locale: "ro_RO", siteName: SITE_NAME, url: path, title: g.title, description: g.description, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title: g.title, description: g.description, images: [OG_IMAGE.url] },
  };
}

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://identicallab.vercel.app").replace(/\/$/, "");
export const abs = (path: string) => SITE_URL + path;
