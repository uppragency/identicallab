import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, serviceLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { CardGrid, Compare, FlowDark, InOut, RelatedGuides, RelatedServices, ServiceFaq, ServiceForm, ServiceHero, StickyList, Statement, TagWall } from "@/components/pages/blocks";
import { Accent } from "@/components/ui";

export const metadata: Metadata = metaFor("/servicii/ghiduri-chirurgicale");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={[breadcrumbLd([["Acasă", "/"], ["Servicii", "/servicii"], ["Ghiduri chirurgicale", "/servicii/ghiduri-chirurgicale"]]), serviceLd("/servicii/ghiduri-chirurgicale", "Ghiduri chirurgicale")]} />
      <ServiceHero
        variant="photoLeft"
        crumbs={[["Acasă", "/"], ["Servicii", "/servicii"], ["Ghiduri chirurgicale"]]}
        title={<>{"Planul digital, "}<Accent>transferat</Accent>{" în gura pacientului."}</>}
        intro="Realizăm ghiduri chirurgicale pornind de la planificarea implantară aprobată de tine. Ghidul transferă poziția și direcția implanturilor din plan în intervenție."
        cta="Ghid chirurgical"
        photo="FOTO48"
        chips={["Din plan aprobat", "Verificat pe model", "Livrat cu indicații de utilizare"]}
      />
      <CardGrid
        id="tipuri"
        tint
        cols={3}
        eyebrow="Tipuri de ghiduri"
        title={<>{"Reazem potrivit "}<Accent>fiecărui caz</Accent></>}
        aside="Alegem tipul de ghid în funcție de situația clinică și de planul tău chirurgical."
        items={[
          ["Dento-purtat", "Se sprijină pe dinții rămași. Potrivit pentru cazuri cu suficienți dinți stabili."],
          ["Mucozo-purtat", "Se sprijină pe mucoasă, în zonele edentate. Necesită fixare corectă în timpul intervenției."],
          ["Osos-purtat", "Se sprijină direct pe os, după decolare. Folosit în situații selectate, la decizia medicului."],
        ]}
      />
      <FlowDark
        id="proces"
        eyebrow="De la plan la ghid"
        title={<>{"Cum se naște "}<Accent>un ghid chirurgical</Accent></>}
        steps={[
          ["Planificare implantară", "Poziționăm implanturile digital, pe baza CBCT și a designului protetic."],
          ["Aprobarea ta", "Planul îți este prezentat. Nu producem nimic fără acordul tău."],
          ["Proiectarea ghidului", "Modelăm ghidul, cu manșoane și reazeme potrivite sistemului de implanturi."],
          ["Printare", "Ghidul este printat 3D în laborator, din materialul ales pentru această utilizare."],
          ["Verificare și livrare", "Controlăm potrivirea pe model înainte să expediem ghidul către cabinet."],
        ]}
      />
      <StickyList
        id="siguranta"
        eyebrow="Siguranța intervenției"
        title={<>{"Ce verificăm "}<Accent>înainte de livrare</Accent></>}
        intro="Un ghid este util doar dacă se potrivește exact. Controalele de mai jos se fac la fiecare comandă."
        cta="Ghid chirurgical"
        items={[
          ["Potrivirea pe model", "Ghidul se așază stabil pe modelul pacientului, fără balans sau jocuri."],
          ["Poziția manșoanelor", "Verificăm că direcția și adâncimea corespund planului aprobat."],
          ["Compatibilitatea cu trusa", "Confirmăm, la comandă, sistemul de implanturi și trusa chirurgicală folosită."],
          ["Indicațiile de utilizare", "Primești ghidul împreună cu informațiile necesare pentru pregătirea și utilizarea lui."],
        ]}
      />
      <Statement
        id="de-ce"
        text={<>{"Intervenția nu începe în sala de operație, ci "}<Accent>pe ecran</Accent>.</>}
        sub="Cu cât planul este mai bine gândit, cu atât mai predictibil este tratamentul. Ghidul este puntea dintre cele două."
        cta="Ghid chirurgical"
        photo="FOTO49"
      />
      <ServiceFaq
        id="intrebari"
        title="Despre ghidurile chirurgicale"
        cta="Ghid chirurgical"
        items={[
          ["Pot trimite eu planificarea implantară?", "Da, dacă ai deja un plan aprobat. Altfel, îl realizăm împreună în laborator, pe baza CBCT."],
          ["Ce informații trebuie să cunoașteți despre sistemul de implanturi?", "Producătorul și sistemul folosit, pentru ca manșoanele și trusa chirurgicală să fie compatibile."],
          ["Cine decide poziția implanturilor?", "Medicul. Noi propunem și executăm planul doar după aprobarea ta."],
          ["Cât durează realizarea unui ghid?", "Depinde de complexitatea cazului. Îți comunicăm termenul înainte să începem."],
        ]}
      />
      <ServiceForm
        workType="Ghid chirurgical"
        intro="Spune-ne despre caz și despre sistemul de implanturi. Revenim cu termenul de execuție și cu prețul înainte să începem."
        checklist={["CBCT și, dacă ai, planul implantar", "Sistemul de implanturi folosit", "Termenul intervenției"]}
      />
      <RelatedGuides service="ghiduri-chirurgicale" />
      <RelatedServices current="ghiduri-chirurgicale" />
    </PageShell>
  );
}
