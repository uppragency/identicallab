import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import type { Lang } from "@/lib/i18n/config";
import { setPage } from "@/lib/i18n/store";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { ServiceForm, StickyList } from "@/components/pages/blocks";
import { CasesGrid, DragCursor, FeaturedCase, PortfolioCta, PortfolioHero } from "@/components/pages/PortfolioSections";
import { Accent } from "@/components/ui";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor("/portofoliu", (await params).lang as Lang);
}

export default async function Page({ params }: Props) {
  setPage((await params).lang as Lang, "/portofoliu");
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Portofoliu", "/portofoliu"]])} />
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
      <ServiceForm
        workType="Caz din portofoliu"
        intro="Ai un caz asemănător cu unul din portofoliu? Descrie-l pe scurt. Un specialist iDentical Lab te contactează în cel mai scurt timp posibil."
        checklist={["Tipul de lucrare", "Zona de interes", "Fișierele le trimiți la primul răspuns"]}
      />
    </PageShell>
  );
}
