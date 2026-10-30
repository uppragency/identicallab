import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import type { Lang } from "@/lib/i18n/config";
import { setPage } from "@/lib/i18n/store";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, faqLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { FAQ_GROUPS, FaqCta, FaqGroups, FaqHero } from "@/components/pages/FaqSections";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor("/intrebari", (await params).lang as Lang);
}

export default async function Page({ params }: Props) {
  setPage((await params).lang as Lang, "/intrebari");
  return (
    <PageShell>
      <JsonLd data={[breadcrumbLd([["Acasă", "/"], ["Întrebări frecvente", "/intrebari"]]), faqLd(FAQ_GROUPS.flatMap((g) => g.items))]} />
      <FaqHero />
      <FaqGroups />
      <FaqCta />
    </PageShell>
  );
}
