import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ServiceForm } from "@/components/pages/blocks";
import { CompanyStrip, ContactDetails, ContactHero, ContactMap, ContactSteps } from "@/components/pages/ContactSections";

export const metadata: Metadata = {
  title: "Contact | iDentical Lab",
  description: "Contactează iDentical Lab: telefon 0724 065 767, email, program, adresa laboratorului din București și formular de ofertă.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <PageShell>
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
