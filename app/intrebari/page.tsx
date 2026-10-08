import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { FAQ_GROUPS, FaqCta, FaqGroups, FaqHero } from "@/components/pages/FaqSections";

export const metadata: Metadata = metaFor("/intrebari");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={[breadcrumbLd([["Acasă", "/"], ["Întrebări frecvente", "/intrebari"]]), faqLd(FAQ_GROUPS.flatMap((g) => g.items))]} />
      <FaqHero />
      <FaqGroups />
      <FaqCta />
    </PageShell>
  );
}
