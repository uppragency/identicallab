import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { AboutBand, AboutCta, AboutHero, AboutMethod, AboutStory, AboutTeam, AboutTech } from "@/components/pages/AboutSections";
import { Positioning } from "@/components/sections/Positioning";
import { Values } from "@/components/sections/Values";

export const metadata: Metadata = metaFor("/despre-noi");

export default function Page() {
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
