import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { ServiceForm } from "@/components/pages/blocks";
import { CompanyStrip, ContactDetails, ContactHero, ContactMap, ContactSteps } from "@/components/pages/ContactSections";

export const metadata: Metadata = metaFor("/contact");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Contact", "/contact"]])} />
      <ContactHero />
      <ContactDetails />
      <ContactMap />
      <ContactSteps />
      <ServiceForm
        workType=""
        intro="Descrie-ne pe scurt cazul și zona de interes. Revenim cu termenul de execuție și cu prețul înainte să începem."
        checklist={["Tipul de lucrare", "Zona de interes", "Fișierele (DICOM, STL) le trimiți la primul răspuns"]}
      />
      <CompanyStrip />
    </PageShell>
  );
}
