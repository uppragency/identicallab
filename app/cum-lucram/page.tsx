import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { CardGrid, Compare, InOut, ServiceFaq, ServiceForm, StickyList, Statement } from "@/components/pages/blocks";
import { PhaseDivider, WorkHero } from "@/components/pages/WorkSections";
import { Delivery } from "@/components/sections/Delivery";
import { Planning } from "@/components/sections/Planning";
import { StackableGuides } from "@/components/sections/StackableGuides";
import { Workflow } from "@/components/sections/Workflow";
import { Accent } from "@/components/ui";

export const metadata: Metadata = metaFor("/cum-lucram");

export default function Page() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([["Acasă", "/"], ["Cum lucrăm", "/cum-lucram"]])} />
      <WorkHero />

      <PhaseDivider n="01" title="Proces" />
      <Workflow />
      <StickyList
        id="trimite-un-caz"
        tint
        eyebrow="Cum trimiți un caz"
        title={
          <>
            {"Patru pași "}
            <Accent>simpli</Accent>
          </>
        }
        intro="Nu ai nevoie de un formular lung. Ne spui ce lucrare vrei, iar restul îl clarificăm împreună."
        cta="Cerere de ofertă, trimitere caz"
        items={[
          ["Alegi serviciul", "Modele mandibulare, segmentare CBCT, design CAD/CAM sau ghiduri chirurgicale. Dacă nu ești sigur, descrie cazul."],
          ["Ne trimiți cererea", "Completezi formularul sau ne suni la 0724 065 767. Fișierele (DICOM, STL, scan) le trimiți la primul răspuns."],
          ["Confirmăm cazul", "Verificăm datele și, dacă lipsește ceva, te contactăm în aceeași zi."],
          ["Primești oferta", "Revenim cu termenul de execuție și cu prețul înainte să începem lucrul."],
        ]}
      />

      <PhaseDivider n="02" title="Planificare" />
      <Planning />
      <CardGrid
        id="ce-planificam"
        eyebrow="Ce planificăm digital"
        title={
          <>
            {"Fiecare etapă, "}
            <Accent>înainte de intervenție</Accent>
          </>
        }
        aside="Planificarea se face împreună cu medicul. Decizia clinică îi aparține întotdeauna lui."
        items={[
          ["Scanare și suprapunere", "CBCT, scan intraoral și, unde este cazul, dual scan technique, într-un singur plan."],
          ["Poziția implanturilor", "Stabilită în funcție de os și de proiectul protetic, pentru un profil de emergență corect."],
          ["Simulare 3D", "Rezultatul final vizibil pe ecran, înainte de orice pas ireversibil."],
          ["Transfer în intervenție", "Ghiduri chirurgicale și modele care duc planul în sala de operație."],
        ]}
      />
      <StackableGuides />

      <PhaseDivider n="03" title="Livrare" />
      <Delivery />
      <InOut
        id="in-cutie"
        cta="Cerere de ofertă, termen de livrare"
        send={{ title: "Pregătirea lucrării", items: ["Verificare finală față de datele digitale", "Ambalare protejată pentru transport", "Documentația cazului, atașată"] }}
        get={{ title: "Ajunge la cabinet", items: ["Lucrarea verificată, gata de utilizare", "Indicațiile de utilizare și, după caz, ordinea pașilor", "Un interlocutor pentru orice întrebare"] }}
      />
      <Compare
        id="comunicare"
        eyebrow="Comunicare"
        title={
          <>
            {"Ce se întâmplă "}
            <Accent>dacă apare o problemă</Accent>
          </>
        }
        heads={["Situația", "Ce facem noi", "Ce faci tu"]}
        rows={[
          ["Lipsesc date sau scanul nu e clar", "Te sunăm în aceeași zi și spunem exact ce lipsește.", "Retrimiți fișierul sau confirmi cum continuăm."],
          ["Designul are nevoie de ajustări", "Îți trimitem designul pentru validare, cu observații tehnice.", "Aprobi sau ceri modificări, înainte de producție."],
          ["Cazul are nevoie de altă abordare", "Spunem direct și propunem alternativa.", "Alegi varianta potrivită clinic."],
        ]}
        note="Termenele reale pe tip de lucrare și regimul de urgență se confirmă la ofertă."
      />

      <ServiceFaq
        id="intrebari"
        title="Despre proces și livrare"
        cta="Întrebare despre un caz"
        items={[
          ["Ce fișiere trebuie să trimit?", "Pentru serviciile din CBCT, setul complet de imagini DICOM și o descriere a zonei de interes. Pentru design CAD/CAM, scanul sau amprenta și indicațiile clinice."],
          ["Cum aflu cât durează?", "Îți comunicăm termenul de execuție, împreună cu prețul, înainte să începem. Depinde de tipul și complexitatea lucrării."],
          ["Pot vedea designul înainte de producție?", "Da. Designul digital este trimis spre validare, iar producția începe după aprobarea ta."],
          ["Cum ajunge lucrarea la cabinet?", "Este verificată la finisare și expediată către cabinet, împreună cu documentația cazului."],
        ]}
      />
      <Statement
        text={
          <>
            {"Gata să trimiți "}
            <Accent>primul caz</Accent>?
          </>
        }
        sub="Spune-ne ce lucrare ai nevoie și revenim rapid, cu un răspuns clar direct de la laborator."
        cta="Cerere de ofertă"
        photo="FOTO50"
      />
      <ServiceForm
        workType="Cum lucrăm, trimitere caz"
        intro="Descrie-ne pe scurt cazul și zona de interes. Revenim cu termenul de execuție și cu prețul înainte să începem."
        checklist={["Tipul de lucrare", "Zona de interes", "Fișierele (DICOM, STL) le trimiți la primul răspuns"]}
      />
    </PageShell>
  );
}
