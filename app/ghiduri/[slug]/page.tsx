import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { GuideArticle, GuideCta } from "@/components/pages/GuideSections";
import { GUIDES, getGuide } from "@/lib/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const g = getGuide((await params).slug);
  if (!g) return {};
  return { title: `${g.title} | Ghiduri iDentical Lab`, description: g.excerpt, alternates: { canonical: `/ghiduri/${g.slug}` } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const g = getGuide((await params).slug);
  if (!g) notFound();
  return (
    <PageShell>
      <GuideArticle g={g} />
      <GuideCta cta={g.cta} />
    </PageShell>
  );
}
