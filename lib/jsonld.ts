import { abs, SEO, GUIDE_SEO, SITE_NAME } from "@/lib/seo";
import type { Guide } from "@/lib/guides";

export const ORG_ID = abs("/#organization");

export function orgGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": ORG_ID,
        name: SITE_NAME,
        legalName: "DISTINGUISH DENT SRL",
        taxID: "38260814",
        url: abs("/"),
        description: SEO["/"].description,
        telephone: "+40724065767",
        email: "gabriel.musetescu@identical.ro",
        address: { "@type": "PostalAddress", streetAddress: "Str. Fabricii 46", addressLocality: "București", postalCode: "013141", addressCountry: "RO" },
        areaServed: { "@type": "Country", name: "România" },
        openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" }],
        sameAs: ["https://www.instagram.com/identical.lab/", "https://www.facebook.com/identical.lab", "https://www.tiktok.com/@identical.lab"],
      },
      { "@type": "WebSite", "@id": abs("/#website"), url: abs("/"), name: SITE_NAME, inLanguage: "ro-RO", publisher: { "@id": ORG_ID } },
    ],
  };
}

export function breadcrumbLd(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
  };
}

export function serviceLd(path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description: SEO[path].description,
    url: abs(path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "România" },
    audience: { "@type": "Audience", audienceType: "Cabinete stomatologice și medici dentiști" },
  };
}

export function faqLd(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
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
