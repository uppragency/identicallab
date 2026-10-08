import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/pages/LegalPage";
import { PRIVACY } from "@/lib/legal";

export const metadata: Metadata = metaFor("/politica-de-confidentialitate");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Politica de confidențialitate", "/politica-de-confidentialitate"]])} />
      <LegalPage doc={PRIVACY} />
    </PageShell>
  );
}
