import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/pages/LegalPage";
import { COOKIES } from "@/lib/legal";

export const metadata: Metadata = metaFor("/politica-cookie");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Politica de cookie-uri", "/politica-cookie"]])} />
      <LegalPage doc={COOKIES} />
    </PageShell>
  );
}
