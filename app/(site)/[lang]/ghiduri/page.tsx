import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { features } from "@/lib/features";
import { metaFor } from "@/lib/seo";
import type { Lang } from "@/lib/i18n/config";
import { setPage } from "@/lib/i18n/store";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { GuideCta, GuidesGrid, GuidesHero } from "@/components/pages/GuideSections";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor("/ghiduri", (await params).lang as Lang);
}

export default async function Page({ params }: Props) {
  setPage((await params).lang as Lang, "/ghiduri");
  if (!features.guides) notFound();
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Ghiduri", "/ghiduri"]])} />
      <GuidesHero />
      <GuidesGrid />
      <GuideCta />
    </PageShell>
  );
}
