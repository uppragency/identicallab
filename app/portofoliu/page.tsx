import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ServiceForm, StickyList } from "@/components/pages/blocks";
import { CasesGrid, DragCursor, FeaturedCase, PortfolioCta, PortfolioHero } from "@/components/pages/PortfolioSections";
import { Instagram } from "@/components/sections/Instagram";
import { Accent } from "@/components/ui";

export const metadata: Metadata = {
  title: "Portofoliu | iDentical Lab",
  description: "Cazuri înainte și după realizate de iDentical Lab: coroane și fațete, ghiduri chirurgicale, modele 3D și segmentare CBCT.",
  alternates: { canonical: "/portofoliu" },
};

export default function Page() {
  return (
    <PageShell>
      <DragCursor />
      <PortfolioHero />
      <FeaturedCase />
      <CasesGrid />
      <StickyList
        id="documentare"
        tint
        eyebrow="Cum documentăm"
        title={
          <>
            {"Ce vezi în "}
            <Accent>fiecare caz</Accent>
          </>
        }
        intro="Fiecare caz din portofoliu este prezentat cu situația inițială, lucrarea finală și o scurtă descriere a abordării."
        cta="Cerere de ofertă, caz din portofoliu"
        items={[
          ["Situația inițială", "Starea de la care am pornit: scan, CBCT sau fotografie clinică, după caz."],
          ["Lucrarea finală", "Rezultatul livrat cabinetului, comparat direct cu imaginea de dinainte."],
          ["Abordarea", "Serviciile folosite și motivele alegerilor făcute împreună cu medicul."],
          ["Acordul cabinetului", "Publicăm doar cazurile pentru care avem acordul medicului și al pacientului."],
        ]}
      />
      <PortfolioCta />
      <Instagram />
      <ServiceForm
        workType="Caz din portofoliu"
        intro="Ai un caz asemănător cu unul din portofoliu? Descrie-l pe scurt. Revenim cu termenul de execuție și cu prețul înainte să începem."
        checklist={["Tipul de lucrare", "Zona de interes", "Fișierele le trimiți la primul răspuns"]}
      />
    </PageShell>
  );
}
