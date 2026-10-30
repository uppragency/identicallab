import { abs, seoFor, GUIDE_SEO, SITE_NAME } from "@/lib/seo";
import { pathFor, type Lang } from "@/lib/i18n/config";
import { getLang } from "@/lib/i18n/store";
import { t } from "@/lib/i18n/t";
import type { Guide } from "@/lib/guides";

export const ORG_ID = abs("/#organization");

export function orgGraph(lang: Lang = "ro") {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": ORG_ID,
        name: SITE_NAME,
        legalName: "DISTINGUISH DENT SRL",
        taxID: "38260814",
        url: abs(pathFor("/", lang)),
        description: seoFor("/", lang).description,
        telephone: "+40724065767",
        email: "gabriel.musetescu@identical.ro",
        address: { "@type": "PostalAddress", streetAddress: "Str. Fabricii 46", addressLocality: lang === "en" ? "Bucharest" : "București", postalCode: "013141", addressCountry: "RO" },
        areaServed: { "@type": "Country", name: lang === "en" ? "Romania" : "România" },
        openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" }],
        sameAs: ["https://www.instagram.com/identical.lab/", "https://www.facebook.com/identical.lab", "https://www.tiktok.com/@identical.lab"],
      },
      { "@type": "WebSite", "@id": abs("/#website"), url: abs(pathFor("/", lang)), name: SITE_NAME, inLanguage: lang === "en" ? "en" : "ro-RO", publisher: { "@id": ORG_ID } },
    ],
  };
}

export function breadcrumbLd(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name: t(name), item: abs(pathFor(path, getLang())) })),
  };
}

export function serviceLd(path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t(name),
    serviceType: t(name),
    description: seoFor(path, getLang()).description,
    url: abs(pathFor(path, getLang())),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: t("România") },
    audience: { "@type": "Audience", audienceType: t("Cabinete stomatologice și medici dentiști") },
  };
}

export function faqLd(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: t(q), acceptedAnswer: { "@type": "Answer", text: t(a) } })),
  };
}

export function articleLd(g: Guide) {
  const path = `/ghiduri/${g.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: GUIDE_SEO[g.slug].description,
    url: abs(path),
    mainEntityOfPage: abs(path),
    inLanguage: "ro-RO",
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}
