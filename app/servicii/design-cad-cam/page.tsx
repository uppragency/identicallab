import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, serviceLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { CardGrid, Compare, FlowDark, InOut, RelatedServices, ServiceFaq, ServiceForm, ServiceHero, StickyList, Statement, TagWall } from "@/components/pages/blocks";
import { Accent } from "@/components/ui";

export const metadata: Metadata = metaFor("/servicii/design-cad-cam");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={[breadcrumbLd([["Acasă", "/"], ["Servicii", "/servicii"], ["Design CAD/CAM", "/servicii/design-cad-cam"]]), serviceLd("/servicii/design-cad-cam", "Design CAD/CAM")]} />
      <ServiceHero
        variant="centered"
        crumbs={[["Acasă", "/"], ["Servicii", "/servicii"], ["Design CAD/CAM"]]}
        title={<>{"Forma corectă, "}<Accent>proiectată</Accent>{" digital."}</>}
        intro="Proiectăm lucrările protetice în CAD, cu control asupra formei, ocluziei și integrării estetice. Tu aprobi designul înainte să înceapă producția."
        cta="Design CAD/CAM"
        photo="FOTO47"
        chips={["Scan sau amprentă digitală", "Aprobare înainte de producție", "Verificare la fiecare etapă"]}
      />
      <TagWall
        id="lucrari"
        eyebrow="Ce proiectăm"
        title={<>{"Lucrări pentru "}<Accent>fiecare caz</Accent></>}
        items={[
          ["Coroane", "Forme anatomice, adaptate marginal și ocluzal."],
          ["Punți", "Structuri dimensionate pentru stabilitate și estetică."],
          ["Fațete", "Design estetic, discutat cu medicul pe baza cazului."],
          ["Wax-up digital", "Propunere a rezultatului final, înainte de execuție."],
          ["Lucrări pe implant", "Design protetic orientat de poziția implanturilor."],
          ["Reabilitări complexe", "Cazuri extinse, coordonate de tehnicieni cu experiență."],
        ]}
      />
      <StickyList
        id="aprobare"
        tint
        eyebrow="Fluxul de aprobare"
        title={<>{"Tu decizi înainte "}<Accent>să producem</Accent></>}
        intro="Designul digital este o propunere, nu o hotărâre. Îl discutăm și îl ajustăm până când forma și ocluzia sunt cele potrivite."
        cta="Design CAD/CAM"
        items={[
          ["Primim datele cazului", "Scanul sau amprenta digitală, culoarea, indicațiile clinice și fotografiile relevante."],
          ["Proiectăm în CAD", "Tehnicianul modelează forma, contactele și ocluzia, cu atenție la grosimi și la aspectul final."],
          ["Îți trimitem designul", "Primești imagini ale designului pentru verificare și observații."],
          ["Producem și verificăm", "După aprobare, lucrarea este realizată și controlată înainte de livrare."],
        ]}
      />
      <Compare
        id="comparatie"
        eyebrow="Flux digital"
        title={<>{"Ce se schimbă față de "}<Accent>fluxul clasic</Accent></>}
        heads={["Etapă", "Flux clasic", "Flux digital CAD/CAM"]}
        rows={[
          ["Amprenta", "Material de amprentă, transport și turnare.", "Scan digital, transmis direct laboratorului."],
          ["Modificări", "Refaceri manuale, uneori pe lucrarea finită.", "Ajustări în design, înainte de producție."],
          ["Repetabilitate", "Dependentă de fiecare execuție.", "Datele digitale permit refacerea identică."],
          ["Comunicarea", "Indicații pe fișă și telefon.", "Design vizibil și comentat împreună cu medicul."],
        ]}
        note="Mâna tehnicianului rămâne parte din proces: caracterizarea, culoarea și finisarea se fac manual."
      />
      <ServiceFaq
        id="intrebari"
        title="Despre designul CAD/CAM"
        cta="Design CAD/CAM"
        items={[
          ["Ce date trebuie să trimit?", "Scanul intraoral sau al modelului, culoarea dorită și indicațiile clinice. Fotografiile ajută la cazurile estetice."],
          ["Pot vedea designul înainte de producție?", "Da. Designul îți este prezentat, iar producția începe după aprobarea ta."],
          ["Lucrați și cu amprentă clasică?", "Putem prelua cazuri pornite din amprentă clasică, pe care o digitizăm în laborator. Confirmăm fluxul la comandă."],
          ["Cum aflu termenul și prețul?", "Revenim cu ambele înainte să începem, pe baza lucrării cerute."],
        ]}
      />
      <ServiceForm
        workType="Design CAD/CAM"
        intro="Spune-ne ce lucrare ai nevoie. Revenim cu termenul de execuție și cu prețul înainte să începem."
        checklist={["Tipul de lucrare și numărul de elemente", "Scan sau amprentă (la primul răspuns)", "Culoarea și indicațiile clinice"]}
      />
      <RelatedServices current="design-cad-cam" />
    </PageShell>
  );
}
