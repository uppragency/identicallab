import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, serviceLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { CardGrid, Compare, FlowDark, InOut, RelatedServices, ServiceFaq, ServiceForm, ServiceHero, StickyList, Statement, TagWall } from "@/components/pages/blocks";
import { Accent } from "@/components/ui";

export const metadata: Metadata = metaFor("/servicii/modele-mandibulare-3d");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={[breadcrumbLd([["Acasă", "/"], ["Servicii", "/servicii"], ["Modele mandibulare 3D", "/servicii/modele-mandibulare-3d"]]), serviceLd("/servicii/modele-mandibulare-3d", "Modele mandibulare 3D")]} />
      <ServiceHero
        variant="split"
        crumbs={[["Acasă", "/"], ["Servicii", "/servicii"], ["Modele mandibulare 3D"]]}
        title={<>{"Anatomia pacientului, "}<Accent>în mâna ta</Accent>.</>}
        intro="Realizăm modele mandibulare personalizate, printate 3D pe baza investigației CBCT. Modelul reproduce fidel anatomia osoasă și îți permite să analizezi cazul, să măsori și să planifici intervenția înainte de etapa chirurgicală."
        cta="Model mandibular 3D"
        photo="FOTO44"
        chips={["Din CBCT", "Replică personalizată", "Pentru planificare chirurgicală"]}
      />
      <CardGrid
        id="utilizari"
        eyebrow="Pentru ce folosești modelul"
        title={<>{"Un obiect fizic care "}<Accent>clarifică cazul</Accent></>}
        aside="Tehnologia nu înlocuiește experiența clinicianului. O susține cu date și cu un obiect pe care îl poți ține în mână."
        items={[
          ["Analiza cazului", "Vezi volumul osos, raporturile anatomice și zonele dificile, fără să te rezumi la imaginea de pe ecran."],
          ["Măsurători", "Verifici dimensiuni și distanțe direct pe model, înainte să ajungi în câmpul operator."],
          ["Planificare chirurgicală", "Repeți pașii intervenției pe o replică și alegi abordarea cea mai sigură."],
          ["Comunicare cu pacientul", "Explici tratamentul pe un obiect concret, ceea ce ajută la înțelegere și la acceptarea planului."],
        ]}
      />
      <FlowDark
        id="proces"
        eyebrow="De la CBCT la model"
        title={<>{"Cum ajunge fișierul tău "}<Accent>obiect fizic</Accent></>}
        steps={[
          ["Primim CBCT-ul", "Setul DICOM și indicațiile clinice: zona de interes și scopul modelului."],
          ["Segmentăm", "Izolăm structurile osoase relevante și curățăm modelul digital."],
          ["Printăm 3D", "Modelul este realizat în laborator, cu materialul ales pentru utilizarea lui."],
          ["Finisăm și verificăm", "Controlăm suprafața și corespondența cu datele digitale."],
          ["Livrăm", "Primești modelul în cutie, protejat pentru transport."],
        ]}
      />
      <Compare
        id="comparatie"
        eyebrow="Ecran sau model fizic"
        title={<>{"De ce să ai și "}<Accent>modelul</Accent></>}
        heads={["Aspect", "Doar imagini CBCT", "Cu model mandibular 3D"]}
        rows={[
          ["Percepția volumului", "Reconstrucții pe ecran, în plan 2D sau 3D virtual.", "Obiect real, rotit și privit din orice unghi."],
          ["Măsurători", "Instrumente software, dependente de interfață.", "Măsurători directe, cu instrumentele pe care le folosești deja."],
          ["Pregătirea intervenției", "Planificare mentală și pe ecran.", "Simulare a pașilor pe replică înainte de etapa chirurgicală."],
          ["Discuția cu pacientul", "Imagini greu de interpretat de un nespecialist.", "Explicație pe un obiect concret."],
        ]}
      />
      <InOut
        id="date"
        cta="Model mandibular 3D"
        send={{ title: "Datele cazului", items: ["Setul complet de imagini DICOM din CBCT", "Zona de interes și scopul clinic al modelului", "Termenul la care ai nevoie de el"] }}
        get={{ title: "Lucrarea livrată", items: ["Model mandibular printat 3D, personalizat", "Verificarea corespondenței cu datele digitale", "Livrare protejată, către cabinet"] }}
      />
      <ServiceFaq
        id="intrebari"
        title="Despre modelele mandibulare"
        cta="Model mandibular 3D"
        items={[
          ["Pot comanda doar modelul, fără alte servicii?", "Da. Pornim de la CBCT-ul tău, facem segmentarea necesară și livrăm modelul."],
          ["Cât de fidel este modelul față de anatomia reală?", "Modelul este construit direct din datele CBCT, iar înainte de livrare îl verificăm față de modelul digital. Precizia finală depinde și de calitatea investigației."],
          ["Se poate printa doar o zonă, nu toată mandibula?", "Da, putem limita modelul la zona de interes, în funcție de scopul clinic."],
          ["Cum aflu termenul?", "Îți comunicăm termenul și prețul înainte să începem, pe baza cazului descris."],
        ]}
      />
      <ServiceForm
        workType="Model mandibular 3D"
        intro="Descrie-ne pe scurt cazul și zona de interes. Revenim cu termenul de execuție și cu prețul înainte să începem."
        checklist={["Setul DICOM din CBCT (la primul răspuns)", "Zona de interes și scopul modelului", "Termenul dorit"]}
      />
      <RelatedServices current="modele-mandibulare-3d" />
    </PageShell>
  );
}
