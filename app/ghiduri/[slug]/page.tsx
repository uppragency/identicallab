import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { GuideArticle, GuideCta } from "@/components/pages/GuideSections";
import { GUIDES, getGuide } from "@/lib/guides";
import { guideMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { articleLd, breadcrumbLd } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const g = getGuide((await params).slug);
  if (!g) return {};
  return guideMeta(g.slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const g = getGuide((await params).slug);
  if (!g) notFound();
  return (
    <PageShell>
      <JsonLd data={[breadcrumbLd([["Acasă", "/"], ["Ghiduri", "/ghiduri"], [g.title, `/ghiduri/${g.slug}`]]), articleLd(g)]} />
      <GuideArticle g={g} />
      <GuideCta cta={g.cta} />
    </PageShell>
  );
}
