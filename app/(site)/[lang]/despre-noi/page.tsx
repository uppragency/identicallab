import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import type { Lang } from "@/lib/i18n/config";
import { setPage } from "@/lib/i18n/store";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { AboutBand, AboutCta, AboutHero, AboutMethod, AboutStory, AboutTeam, AboutTech } from "@/components/pages/AboutSections";
import { Positioning } from "@/components/sections/Positioning";
import { Values } from "@/components/sections/Values";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor("/despre-noi", (await params).lang as Lang);
}

export default async function Page({ params }: Props) {
  setPage((await params).lang as Lang, "/despre-noi");
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Despre noi", "/despre-noi"]])} />
      <AboutHero />
      <AboutBand />
      <Positioning />
      <AboutStory />
      <Values />
      <AboutMethod />
      <AboutTech />
      <AboutTeam />
      <AboutCta />
    </PageShell>
  );
}
