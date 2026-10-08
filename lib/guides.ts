export type GuideSection = { h: string; p?: string; list?: string[] };
export type Guide = {
  slug: string;
  title: string;
  category: "Fișiere și date" | "Planificare" | "Lucrări protetice" | "Chirurgie ghidată";
  minutes: number;
  excerpt: string;
  intro: string;
  sections: GuideSection[];
  /** Related service page slug under /servicii. */
  service: string;
  /** Subject prefilled in the offer popup. */
  cta: string;
};

export const CATEGORIES: Guide["category"][] = ["Fișiere și date", "Planificare", "Lucrări protetice", "Chirurgie ghidată"];

export const GUIDES: Guide[] = [
  {
    slug: "cum-trimiti-un-fisier-cbct",
    title: "Cum trimiți corect un fișier CBCT",
    category: "Fișiere și date",
    minutes: 4,
    excerpt: "Ce conține un export complet, cum îl arhivezi și pe ce canal ni-l trimiți.",
    intro: "Un caz începe cu un set de date complet. Cele mai multe întârzieri apar fiindcă exportul este incomplet sau în alt format decât cel cerut.",
    sections: [
      { h: "Ce trimiți", list: ["Setul complet de imagini în format DICOM, nu doar capturi de ecran sau PDF", "O scurtă descriere a zonei de interes și a scopului clinic", "Dacă există, scanul intraoral sau amprenta digitală aferentă"] },
      { h: "Cum exporți", p: "Majoritatea softurilor de achiziție au o opțiune de export DICOM. Alege exportul care include toate felierele din volum și păstrează structura de foldere generată de aparat." },
      { h: "Cum trimiți", p: "Arhivează folderul într-un singur fișier ZIP și trimite-l prin canalul agreat cu laboratorul. Dacă fișierul este mare, spune-ne și stabilim împreună cea mai simplă metodă de transfer." },
      { h: "Ce urmează", p: "Verificăm datele la primire. Dacă lipsește ceva, te contactăm în aceeași zi, iar după confirmare revenim cu termenul și prețul." },
    ],
    service: "segmentare-cbct",
    cta: "Ghid: trimitere fișier CBCT",
  },
  {
    slug: "dicom-stl-sau-ply",
    title: "DICOM, STL sau PLY: ce format pentru ce scop",
    category: "Fișiere și date",
    minutes: 3,
    excerpt: "Diferența dintre datele radiologice, modelele 3D și scanurile de suprafață.",
    intro: "Fiecare format răspunde unei nevoi diferite. Dacă știi ce urmează să faci cu fișierul, alegi formatul corect din prima.",
    sections: [
      { h: "DICOM", p: "Formatul standard al imaginilor radiologice. Conține volumul CBCT și este punctul de plecare pentru segmentare, modele mandibulare și planificare implantară." },
      { h: "STL", p: "Descrie suprafața unui obiect 3D prin triunghiuri. Este formatul uzual pentru printare, pentru design CAD și pentru schimbul de modele între programe." },
      { h: "PLY", p: "Format pentru scanuri de suprafață, care poate păstra și informația de culoare. Apare frecvent la scanerele intraorale." },
      { h: "Regula practică", list: ["Pornești de la CBCT: trimiți DICOM", "Ai un scan intraoral: trimiți fișierul exportat de scaner, în formatul lui nativ sau în STL/PLY", "Ai nevoie de modelul segmentat: îl primești în STL"] },
    ],
    service: "segmentare-cbct",
    cta: "Ghid: formate de fișiere",
  },
  {
    slug: "ce-face-un-cbct-util",
    title: "Ce face un CBCT util pentru segmentare",
    category: "Fișiere și date",
    minutes: 4,
    excerpt: "Câmpul de vizualizare, stabilitatea pacientului și artefactele care pot complica lucrul.",
    intro: "Calitatea modelului digital depinde direct de calitatea investigației. Câteva aspecte se pot controla chiar la achiziție.",
    sections: [
      { h: "Câmpul de vizualizare", p: "Alege un câmp care acoperă zona de interes cu o marjă de siguranță. Un câmp prea mic poate lăsa în afara imaginii structuri de care avem nevoie." },
      { h: "Stabilitatea pacientului", p: "Mișcarea în timpul achiziției produce imagini neclare și contururi duble. Poziționarea corectă și instrucțiunile clare înainte de scanare reduc riscul." },
      { h: "Artefactele metalice", p: "Lucrările metalice existente pot produce artefacte în imagine. Dacă sunt în apropierea zonei de interes, menționează-le în descrierea cazului, ca să le avem în vedere la segmentare." },
      { h: "Protocolul aparatului", p: "Setările de achiziție aparțin cabinetului și radiologului. Dacă ai dubii, discută cu ei înainte de investigație; noi te ajutăm cu informațiile despre ce date ne sunt utile." },
    ],
    service: "segmentare-cbct",
    cta: "Ghid: calitatea CBCT",
  },
  {
    slug: "ce-este-segmentarea-cbct",
    title: "Segmentarea CBCT, explicată pe scurt",
    category: "Planificare",
    minutes: 4,
    excerpt: "Cum transformăm un volum de imagini într-un model 3D al structurilor de interes.",
    intro: "Un CBCT este un volum de date. Segmentarea separă din acest volum structurile care ne interesează, ca să le putem vedea, măsura și printa.",
    sections: [
      { h: "Ce înseamnă segmentare", p: "Marcăm, în imaginile radiologice, ce aparține osului, dinților sau altor structuri, iar softul reconstruiește din aceste zone un model 3D." },
      { h: "Ce structuri se pot izola", list: ["Mandibulă și maxilar", "Canalul mandibular", "Sinusul maxilar", "Dinți individuali", "Alte zone indicate de medic"] },
      { h: "De ce contează verificarea", p: "Segmentarea automată are limite. Rezultatul se compară cu imaginile originale și se corectează manual acolo unde diferă." },
      { h: "Ce primești", p: "Modele 3D în format STL, pregătite pentru planificare, printare sau arhivare." },
    ],
    service: "segmentare-cbct",
    cta: "Ghid: segmentare CBCT",
  },
  {
    slug: "cand-merita-un-model-mandibular",
    title: "Când merită un model mandibular printat 3D",
    category: "Planificare",
    minutes: 3,
    excerpt: "Situațiile în care un obiect fizic aduce claritate față de imaginea de pe ecran.",
    intro: "Nu fiecare caz are nevoie de un model fizic. În anumite situații însă, el scurtează planificarea și reduce incertitudinea.",
    sections: [
      { h: "Cazuri în care ajută", list: ["Anatomie complexă sau atipică", "Intervenții extinse, cu mai multe etape", "Cazuri în care vrei să repeți pașii înainte de intervenție", "Explicarea planului unui pacient care înțelege mai bine pe un obiect concret"] },
      { h: "Ce poți face pe model", p: "Măsori dimensiuni și distanțe, verifici raporturile anatomice și poți testa adaptarea unor componente, înainte să ajungi în câmpul operator." },
      { h: "Limitele modelului", p: "Modelul reproduce osul, nu țesuturile moi, iar precizia depinde de calitatea CBCT-ului. Este un instrument de planificare, nu un substitut al evaluării clinice." },
    ],
    service: "modele-mandibulare-3d",
    cta: "Ghid: model mandibular 3D",
  },
  {
    slug: "planificare-implantara-digitala",
    title: "Planificarea implantară digitală, pas cu pas",
    category: "Planificare",
    minutes: 5,
    excerpt: "De la datele pacientului la un plan aprobat, înainte de orice intervenție.",
    intro: "Planificarea digitală mută deciziile dificile înaintea intervenției. Procesul este același, indiferent dacă lucrarea se termină cu un ghid sau fără.",
    sections: [
      { h: "1. Strângerea datelor", p: "CBCT, scan intraoral sau al modelului și indicațiile clinice. Cu cât datele sunt mai complete, cu atât planul este mai sigur." },
      { h: "2. Suprapunerea", p: "Datele se aduc într-un singur sistem de coordonate, astfel încât osul și proiectul protetic să poată fi privite împreună." },
      { h: "3. Poziționarea implanturilor", p: "Poziția se stabilește în funcție de volumul osos și de proiectul protetic, pentru ca profilul de emergență să rezulte corect." },
      { h: "4. Aprobarea", p: "Planul îți este prezentat. Decizia clinică îți aparține, iar producția începe numai după acordul tău." },
    ],
    service: "ghiduri-chirurgicale",
    cta: "Ghid: planificare implantară",
  },
  {
    slug: "dual-scan-technique",
    title: "Dual scan technique: când și de ce",
    category: "Planificare",
    minutes: 4,
    excerpt: "Cum se suprapun datele CBCT cu proiectul protetic pentru o poziționare ghidată protetic.",
    intro: "Poziția chirurgicală corectă nu este suficientă dacă proteza nu se poate adapta. Tehnica dublului scan aduce proiectul protetic în planificare.",
    sections: [
      { h: "Principiul", p: "Se efectuează două investigații: una cu proteza sau cu un ghid radiologic în gură, alta doar cu pacientul. Datele se suprapun, iar implanturile se plasează în raport cu viitoarea restaurare." },
      { h: "Ce câștigi", list: ["Poziție orientată de proiectul protetic", "Profil de emergență planificat", "Mai puține compromisuri la restaurare"] },
      { h: "Ce are nevoie laboratorul", p: "Ambele seturi DICOM, marcajele de referință folosite la suprapunere și indicațiile tale privind proiectul protetic." },
    ],
    service: "ghiduri-chirurgicale",
    cta: "Ghid: dual scan technique",
  },
  {
    slug: "scan-intraoral-pentru-laborator",
    title: "Scanul intraoral: ce verifici înainte să-l trimiți",
    category: "Lucrări protetice",
    minutes: 4,
    excerpt: "Limitele preparației, ocluzia și zonele care se verifică de obicei înainte de transmitere.",
    intro: "Un scan bun face diferența dintre un design aprobat din prima și o rundă suplimentară de corecturi.",
    sections: [
      { h: "Preparația", p: "Limitele trebuie să fie vizibile și continue pe întreaga circumferință. Zonele cu sânge, salivă sau gingie suprapusă se refac înainte de transmitere." },
      { h: "Antagoniștii și ocluzia", p: "Include arcada antagonistă și înregistrarea ocluziei. Fără ele, designul nu poate fi verificat în contact." },
      { h: "Dinții vecini", p: "Contactele proximale se proiectează pe dinții vecini; scanul trebuie să îi redea fidel." },
      { h: "La final", p: "Revizuiește scanul pe ecran înainte de export. Dacă ai observații, notează-le în descrierea cazului." },
    ],
    service: "design-cad-cam",
    cta: "Ghid: scan intraoral",
  },
  {
    slug: "culoare-si-fotografii",
    title: "Cum comunici culoarea: fișă și fotografii",
    category: "Lucrări protetice",
    minutes: 3,
    excerpt: "Informațiile care ajută tehnicianul să reproducă culoarea și caracterizarea dorită.",
    intro: "Culoarea este cea mai subiectivă parte a unei lucrări estetice. Fotografiile și o fișă clară reduc ambiguitatea.",
    sections: [
      { h: "Fișa de comandă", list: ["Culoarea de bază și, dacă e cazul, culoarea la colet", "Zonele care necesită caracterizare", "Forma și textura dorite, comparativ cu dinții vecini"] },
      { h: "Fotografiile", p: "Fotografiază dintele sau dinții vecini împreună cu o cheie de culoare, în lumină cât mai constantă. Adaugă o imagine de ansamblu a zâmbetului." },
      { h: "Discuția cu tehnicianul", p: "Pentru cazuri estetice complexe, un telefon scurt economisește timp. Sună-ne sau notează în cerere ce este esențial pentru pacient." },
    ],
    service: "design-cad-cam",
    cta: "Ghid: culoare și fotografii",
  },
  {
    slug: "cum-validezi-un-design-cad-cam",
    title: "Cum validezi un design CAD/CAM",
    category: "Lucrări protetice",
    minutes: 4,
    excerpt: "Ce urmărești când primești designul digital, înainte să înceapă producția.",
    intro: "Aprobarea designului este ultimul moment în care ajustările sunt simple. Merită câteva minute de verificare atentă.",
    sections: [
      { h: "Forma și contururile", p: "Compară forma cu dinții vecini și cu planul discutat. Verifică înălțimea, lățimea și raportul cu gingia." },
      { h: "Contactele și ocluzia", p: "Privește contactele proximale și relația cu antagoniștii, în ocluzie statică și, unde este posibil, în mișcări." },
      { h: "Grosimile", p: "Verifică ca zonele subțiri să fie în limite acceptabile pentru materialul ales. Dacă ai dubii, întreabă tehnicianul." },
      { h: "Răspunsul", p: "Aprobă sau trimite observații punctuale. Producția începe după acordul tău." },
    ],
    service: "design-cad-cam",
    cta: "Ghid: validare design",
  },
  {
    slug: "tipuri-de-ghiduri-chirurgicale",
    title: "Ghiduri dento-, mucozo- și osos-purtate",
    category: "Chirurgie ghidată",
    minutes: 4,
    excerpt: "Cum alegi reazemul ghidului în funcție de situația clinică.",
    intro: "Tipul de reazem determină stabilitatea ghidului și modul în care îl folosești în intervenție.",
    sections: [
      { h: "Dento-purtat", p: "Se sprijină pe dinții rămași. Este potrivit când există suficienți dinți stabili, bine distribuiți pe arcadă." },
      { h: "Mucozo-purtat", p: "Se sprijină pe mucoasă în zone edentate. Fixarea corectă în timpul intervenției este esențială." },
      { h: "Osos-purtat", p: "Se sprijină direct pe os, după decolare. Se folosește în situații selectate, la decizia medicului." },
      { h: "Cum alegi", p: "Alegerea ține de situația clinică și de planul chirurgical. Discutăm opțiunile pe baza datelor cazului, iar decizia finală este a ta." },
    ],
    service: "ghiduri-chirurgicale",
    cta: "Ghid: tipuri de ghiduri chirurgicale",
  },
  {
    slug: "verificarea-ghidului-inainte-de-interventie",
    title: "Verificarea ghidului înainte de intervenție",
    category: "Chirurgie ghidată",
    minutes: 3,
    excerpt: "Lista scurtă de controale pe care le faci când primești ghidul în cabinet.",
    intro: "Ghidul pleacă din laborator verificat, dar o ultimă verificare în cabinet, înainte de ziua intervenției, evită surprizele.",
    sections: [
      { h: "Potrivirea", p: "Așază ghidul pe modelul pacientului, dacă îl ai, și verifică stabilitatea: fără balans, fără jocuri." },
      { h: "Manșoanele", p: "Confirmă că manșoanele sunt fixe și că diametrul corespunde trusei chirurgicale pe care o vei folosi." },
      { h: "Planul", p: "Compară poziția manșoanelor cu planul aprobat și cu ordinea pașilor din documentația primită." },
      { h: "Pregătirea pentru utilizare", p: "Urmează instrucțiunile de curățare și pregătire specifice materialului și protocolului cabinetului. Dacă ai întrebări, ne poți contacta înainte de intervenție." },
    ],
    service: "ghiduri-chirurgicale",
    cta: "Ghid: verificarea ghidului",
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
