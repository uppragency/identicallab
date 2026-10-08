import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { GuideCta, GuidesGrid, GuidesHero } from "@/components/pages/GuideSections";

export const metadata: Metadata = metaFor("/ghiduri");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Ghiduri", "/ghiduri"]])} />
      <GuidesHero />
      <GuidesGrid />
      <GuideCta />
    </PageShell>
  );
}
