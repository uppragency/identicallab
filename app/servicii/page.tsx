import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { Compare, FlowDark, ServiceFaq, ServiceForm, ServiceHero, Statement } from "@/components/pages/blocks";
import { ServiceRows } from "@/components/pages/ServiceRows";
import { Accent } from "@/components/ui";

export const metadata: Metadata = metaFor("/servicii");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Servicii", "/servicii"]])} />
      <ServiceHero
        variant="dark"
        crumbs={[["Acasă", "/"], ["Servicii"]]}
        title={
          <>
            {"Ce livrăm "}
            <Accent>clinicii</Accent>
          </>
        }
        intro="Patru servicii care se leagă între ele: de la fișierul CBCT la modelul din mână, de la designul digital la ghidul din timpul intervenției. Un singur laborator răspunde pentru tot lanțul."
        cta="Cerere de ofertă"
        photo="FOTO38"
        chips={["Modele mandibulare 3D", "Segmentare CBCT", "Design CAD/CAM", "Ghiduri chirurgicale"]}
      />
      <ServiceRows />
      <FlowDark
        id="flux"
        eyebrow="Cum se leagă"
        title={
          <>
            {"Un caz, patru etape, "}
            <Accent>un responsabil</Accent>
          </>
        }
        steps={[
          ["CBCT al pacientului", "Primim setul DICOM și o scurtă descriere clinică a cazului."],
          ["Segmentare", "Izolăm structurile de interes și pregătim modelul 3D digital."],
          ["Design și planificare", "Proiectăm lucrarea sau poziționarea implanturilor, împreună cu medicul."],
          ["Model sau ghid", "Printăm modelul mandibular sau ghidul chirurgical și îl verificăm."],
          ["Livrare", "Cabinetul primește lucrarea verificată, cu indicațiile de utilizare."],
        ]}
      />
      <Compare
        id="alege"
        eyebrow="Alege serviciul"
        title={
          <>
            {"De ce ai nevoie "}
            <Accent>acum?</Accent>
          </>
        }
        heads={["Situația cabinetului", "Serviciul potrivit", "Ce obții"]}
        rows={[
          ["Vrei să vezi anatomia pacientului în mână", "Modele mandibulare 3D", "Obiect fizic pentru măsurători și planificare"],
          ["Ai un CBCT și ai nevoie de modele digitale", "Segmentare CBCT", "Structuri izolate, gata de planificare sau printare"],
          ["Ai nevoie de o lucrare protetică", "Design CAD/CAM", "Design aprobat de tine înainte de producție"],
          ["Ai un plan implantar aprobat", "Ghiduri chirurgicale", "Ghid care transferă planul în gura pacientului"],
        ]}
        note="Nu ești sigur ce se potrivește? Descrie cazul și îți recomandăm abordarea."
      />
      <ServiceFaq
        id="intrebari"
        title="Înainte de primul caz"
        cta="Întrebare despre un caz"
        items={[
          ["Pot comanda un singur serviciu?", "Da. Fiecare serviciu se poate comanda separat sau ca parte dintr-un flux complet, de exemplu segmentare, apoi model sau ghid."],
          ["Ce fișiere trebuie să trimit?", "Pentru serviciile pornite din CBCT, setul complet de imagini DICOM și o descriere a zonei de interes. Pentru design CAD/CAM, scanul sau amprenta și indicațiile clinice."],
          ["Cum aflu termenul și prețul?", "Revenim cu termenul de execuție și cu prețul înainte să începem lucrul, pe baza cazului descris."],
          ["Lucrați cu cabinete din afara Bucureștiului?", "Da. Colaborăm cu cabinete din România și din afara ei; fișierele se transmit digital, iar lucrarea ajunge prin curier."],
        ]}
      />
      <Statement
        text={
          <>
            {"Nu știi de unde să începi? Trimite "}
            <Accent>cazul</Accent>.
          </>
        }
        sub="Îți spunem direct ce serviciu se potrivește, ce date ne trebuie și în cât timp putem livra."
        cta="Cerere de ofertă"
        photo="FOTO43"
      />
      <ServiceForm
        workType="Servicii iDentical Lab"
        intro="Descrie-ne pe scurt cazul și zona de interes. Revenim cu termenul de execuție și cu prețul înainte să începem."
        checklist={["Tipul de lucrare dorit", "Zona de interes", "Fișierele (DICOM, STL) le trimiți la primul răspuns"]}
      />
    </PageShell>
  );
}
