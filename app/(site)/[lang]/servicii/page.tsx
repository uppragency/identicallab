import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import type { Lang } from "@/lib/i18n/config";
import { setPage } from "@/lib/i18n/store";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";
import { PageShell } from "@/components/PageShell";
import { Compare, FlowDark, ServiceFaq, ServiceForm, ServiceHero, Statement } from "@/components/pages/blocks";
import { ServiceRows } from "@/components/pages/ServiceRows";
import { Accent } from "@/components/ui";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return metaFor("/servicii", (await params).lang as Lang);
}

export default async function Page({ params }: Props) {
  setPage((await params).lang as Lang, "/servicii");
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
        intro="Șase servicii care se leagă între ele: de la scanarea intraorală și planificarea digitală, la lucrarea finită și ghidul din timpul intervenției. Un singur laborator răspunde pentru tot lanțul."
        cta="Cerere de ofertă"
        photo="FOTO38"
        chips={["Reabilitări totale înșurubate", "Fațete dentare", "Coroane și punți", "Bonturi personalizate", "SmileCloud wax up", "Ghiduri chirurgicale"]}
      />
      <ServiceRows />
      <FlowDark
        id="flux"
        eyebrow="Cum se leagă"
        title={
          <>
            {"Un caz, cinci etape, "}
            <Accent>un responsabil</Accent>
          </>
        }
        steps={[
          ["Achiziția de date", "Primim scanarea intraorală, CBCT-ul, fotografiile de documentare și informațiile comenzii."],
          ["Planificare", "Planificăm protetic și chirurgical, împreună cu medicul."],
          ["Validare proiect design", "Îți trimitem proiectul digital, iar execuția începe după acordul tău."],
          ["Execuție și finisare", "Lucrarea este executată, finisată și verificată în fiecare etapă."],
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
          ["Ai nevoie de o restaurare completă pe implanturi", "Reabilitări totale înșurubate", "Lucrare completă, proiectată digital"],
          ["Vrei un aspect natural al dinților frontali", "Fațete dentare", "Fațete adaptate precis, validate de tine"],
          ["Ai nevoie de o lucrare protetică fixă", "Coroane și punți", "Material ales în funcție de caz"],
          ["Ai un implant și ai nevoie de un profil de emergență corect", "Bonturi personalizate", "Bont realizat pe măsura implantului"],
          ["Vrei să vezi rezultatul înainte de execuție", "SmileCloud wax up", "Wax up digital, validat înainte de execuție"],
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
          ["Ce informații sunt necesare pentru a trimite un caz?", "Fișierele scanării intraorale, fotografiile de documentare și informațiile aferente comenzii. Suntem prezenți pe platformele cloud ale principalilor producători de scanere, astfel încât să ne poți transmite fișierele direct."],
          ["Care este termenul de execuție?", "Termenul mediu de execuție este de 5 zile lucrătoare."],
          ["Cum pot solicita catalogul de produse și lista de prețuri?", "Completează formularul de contact, iar noi te vom contacta pentru a-ți oferi catalogul de produse și lista de prețuri."],
          ["Colaborați cu clinici din afara țării?", "Da, colaborăm cu clinici atât din România, cât și din Europa. Livrările sunt realizate prin servicii externe de curierat."],
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
        intro="Descrie-ne pe scurt cazul și zona de interes. Un specialist iDentical Lab te contactează în cel mai scurt timp posibil."
        checklist={["Tipul de lucrare dorit", "Zona de interes", "Fișierele scanării intraorale și fotografiile de documentare le trimiți la primul răspuns"]}
      />
    </PageShell>
  );
}
