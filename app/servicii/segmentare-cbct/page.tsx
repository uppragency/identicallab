import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CardGrid, Compare, FlowDark, InOut, RelatedServices, ServiceFaq, ServiceForm, ServiceHero, StickyList, Statement, TagWall } from "@/components/pages/blocks";
import { Accent } from "@/components/ui";

export const metadata: Metadata = {
  title: "Segmentare CBCT | iDentical Lab",
  description: "Segmentare CBCT: izolarea structurilor de interes din setul DICOM, cu verificare a acurateței, pentru planificare și printare 3D.",
  alternates: { canonical: "/servicii/segmentare-cbct" },
};

export default function Page() {
  return (
    <PageShell>
      <ServiceHero
        variant="dark"
        crumbs={[["Acasă", "/"], ["Servicii", "/servicii"], ["Segmentare CBCT"]]}
        title={<>{"Din DICOM, "}<Accent>structurile</Accent>{" de care ai nevoie."}</>}
        intro="Transformăm setul DICOM al pacientului în modele 3D curate: structurile de interes sunt izolate, verificate și pregătite pentru planificare sau printare."
        cta="Segmentare CBCT"
        photo="segmentare CBCT pe ecran"
        chips={["Format DICOM", "Export STL", "Verificare a acurateței"]}
      />
      <TagWall
        id="structuri"
        eyebrow="Ce segmentăm"
        title={<>{"Structurile pe care "}<Accent>lucrăm</Accent></>}
        aside="Alegem împreună zona și nivelul de detaliu, în funcție de scopul clinic al cazului."
        items={[
          ["Mandibula", "Os mandibular, pentru modele, planificare și ghiduri."],
          ["Maxilarul", "Volum osos și raporturi pentru intervenții în zona maxilară."],
          ["Canalul mandibular", "Traseul canalului, marcat pentru a fi evitat în planificare."],
          ["Sinusul maxilar", "Conturul sinusului, util pentru planificarea implantară."],
          ["Dinții", "Dinți individuali, separați de structura osoasă."],
          ["Zona de interes", "Orice altă structură indicată de medic pentru caz."],
        ]}
      />
      <StickyList
        id="control"
        tint
        eyebrow="Controlul calității"
        title={<>{"Cum verificăm "}<Accent>acuratețea</Accent></>}
        intro="Un model segmentat prost poate duce planificarea într-o direcție greșită. De aceea verificăm fiecare pas."
        cta="Segmentare CBCT"
        items={[
          ["Verificăm calitatea datelor", "Controlăm setul DICOM înainte de lucru: completitudine, rezoluție, artefacte care pot afecta rezultatul."],
          ["Izolăm structurile", "Segmentarea se face pe zona de interes, cu atenție la limitele dintre os, dinți și țesuturi."],
          ["Comparăm cu datele inițiale", "Suprapunem modelul rezultat peste imaginile originale și corectăm diferențele."],
          ["Livrăm modelul pregătit", "Primești fișierele în formatul potrivit scopului: planificare, printare sau arhivare."],
        ]}
      />
      <Statement
        id="de-ce"
        text={<>{"Planificarea bună începe cu o "}<Accent>segmentare corectă</Accent>.</>}
        sub="Orice model printat și orice ghid chirurgical pornește de aici. Cu cât segmentarea e mai curată, cu atât tratamentul este mai predictibil."
        cta="Segmentare CBCT"
        photo="comparație între imaginea CBCT și modelul 3D"
      />
      <InOut
        id="date"
        cta="Segmentare CBCT"
        send={{ title: "Datele cazului", items: ["Setul DICOM complet, necomprimat", "Structurile de interes și scopul clinic", "Preferința pentru formatul de export"] }}
        get={{ title: "Lucrarea livrată", items: ["Modele 3D ale structurilor segmentate", "Fișiere STL, gata de planificare sau printare", "Posibilitatea de a continua cu model sau ghid"] }}
      />
      <ServiceFaq
        id="intrebari"
        title="Despre segmentarea CBCT"
        cta="Segmentare CBCT"
        items={[
          ["Ce format de fișier trebuie să trimit?", "Setul complet de imagini DICOM din investigația CBCT. Dacă ai nevoie de un anumit format de ieșire, ne spui la comandă."],
          ["Pot folosi segmentarea în alt software de planificare?", "Da, exportăm fișiere STL, compatibile cu majoritatea programelor de planificare."],
          ["Cine verifică rezultatul?", "Un tehnician din laborator, prin suprapunere cu datele originale. Dacă ai observații, le corectăm."],
          ["Se poate continua direct cu un model sau un ghid?", "Da. Segmentarea este primul pas al lanțului, iar modelul sau ghidul se pot realiza în același laborator."],
        ]}
      />
      <ServiceForm
        workType="Segmentare CBCT"
        intro="Spune-ne ce structuri te interesează. Revenim cu termenul de execuție și cu prețul înainte să începem."
        checklist={["Setul DICOM (la primul răspuns)", "Structurile de interes", "Formatul de export dorit"]}
      />
      <RelatedServices current="segmentare-cbct" />
    </PageShell>
  );
}
