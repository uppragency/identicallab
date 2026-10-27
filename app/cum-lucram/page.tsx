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

      <PhaseDivider n="01" title="Procesare" />
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
          ["Alegi serviciul", "Reabilitări totale înșurubate, fațete dentare, coroane și punți, bonturi personalizate, SmileCloud wax up sau ghiduri chirurgicale. Dacă nu ești sigur, descrie cazul."],
          ["Ne trimiți cererea", "Completezi formularul sau ne suni la 0724 065 767. Fișierele scanării intraorale și fotografiile de documentare le trimiți la primul răspuns."],
          ["Confirmăm cazul", "Verificăm datele și, dacă lipsește ceva, te contactăm în aceeași zi."],
          ["Începem proiectarea și stabilim termenele", "Odată cazul confirmat, începem proiectarea și stabilim împreună termenul de execuție."],
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
          ["Scanare și suprapunere", "Scanare intraorală, CBCT și fotografii documentare, într-un singur plan."],
          ["Poziția implanturilor", "Stabilită în funcție de os și de proiectul protetic, pentru un profil de emergență corect."],
          ["Simulare 3D", "Rezultatul final vizibil pe ecran, înainte de orice pas ireversibil."],
          ["Transfer în intervenție", "Ghiduri chirurgicale care duc planul în sala de operație."],
        ]}
      />
      <StackableGuides />

      <PhaseDivider n="03" title="Livrare" />
      <Delivery />
      <InOut
        id="in-cutie"
        cta="Cere termenul pentru cazul tău"
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
          ["Lipsesc date", "Te sunăm și îți spunem exact ce lipsește.", "Retrimiți fișierul sau confirmi cum continuăm."],
          ["Cazuri complexe", "Îți trimitem designul pentru validare.", "Aprobi sau ceri modificări, înainte de producție."],
          ["Cazul are nevoie de altă abordare", "Spunem direct și propunem alternativa.", "Alegi varianta potrivită clinic."],
        ]}
        note="Termenele se stabilesc la începerea proiectării."
      />

      <ServiceFaq
        id="intrebari"
        title="Despre proces și livrare"
        cta="Întrebare despre un caz"
        items={[
          ["Ce informații sunt necesare pentru a trimite un caz?", "Fișierele scanării intraorale, fotografiile de documentare și informațiile aferente comenzii. Suntem prezenți pe platformele cloud ale principalilor producători de scanere, astfel încât să ne poți transmite fișierele direct."],
          ["Care este termenul de execuție?", "Termenul mediu de execuție este de 5 zile lucrătoare."],
          ["Pot vedea designul înainte de producție?", "Da. Proiectul digital este trimis spre validare, iar execuția începe după acordul tău."],
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
        intro="Descrie-ne pe scurt cazul și zona de interes. Un specialist iDentical Lab te contactează în cel mai scurt timp posibil."
        checklist={["Tipul de lucrare", "Zona de interes", "Fișierele scanării intraorale și fotografiile de documentare le trimiți la primul răspuns"]}
      />
    </PageShell>
  );
}
