import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/pages/LegalPage";
import { TERMS } from "@/lib/legal";

export const metadata: Metadata = metaFor("/termeni-si-conditii");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Termeni și condiții", "/termeni-si-conditii"]])} />
      <LegalPage doc={TERMS} />
    </PageShell>
  );
}
