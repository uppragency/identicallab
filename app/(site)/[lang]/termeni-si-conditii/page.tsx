import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import type { Lang } from "@/lib/i18n/config";
import { setPage } from "@/lib/i18n/store";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/pages/LegalPage";
import { TERMS } from "@/lib/legal";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor("/termeni-si-conditii", (await params).lang as Lang);
}

export default async function Page({ params }: Props) {
  setPage((await params).lang as Lang, "/termeni-si-conditii");
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Termeni și condiții", "/termeni-si-conditii"]])} />
      <LegalPage doc={TERMS} />
    </PageShell>
  );
}
