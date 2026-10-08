export type LegalSection = { h: string; p?: string[]; list?: string[] };
export type LegalDoc = { slug: string; title: string; intro: string; updated: string; sections: LegalSection[] };

const OPERATOR =
  "DISTINGUISH DENT SRL, CUI 38260814, Nr. Reg. Com. J2017016329409, EUID ROONRC.J2017016329409, cu sediul în Str. Trotușului 31, cod poștal 012141, Sector 1, București (denumită în continuare „iDentical Lab”, „noi” sau „operatorul”). Contact: gabriel.musetescu@identical.ro, 0724 065 767.";

export const UPDATED = "8 octombrie 2026";

export const TERMS: LegalDoc = {
  slug: "termeni-si-conditii",
  title: "Termeni și condiții",
  intro: "Regulile de utilizare a site-ului iDentical Lab. Te rugăm să le citești înainte de a folosi site-ul sau de a trimite o cerere de ofertă.",
  updated: UPDATED,
  sections: [
    { h: "Cine suntem", p: [`Site-ul este operat de ${OPERATOR}`] },
    { h: "Obiectul site-ului", p: ["Site-ul prezintă serviciile laboratorului dentar iDentical Lab și permite cabinetelor și clinicilor stomatologice să ne trimită cereri de ofertă și întrebări.", "Site-ul nu este un magazin online. Nu se pot plăti comenzi prin site."] },
    { h: "Cereri de ofertă și comenzi", p: ["Trimiterea unei cereri prin formular nu reprezintă o comandă și nu creează o obligație contractuală pentru niciuna dintre părți.", "Revenim cu termenul de execuție și cu prețul înainte de începerea lucrului. Colaborarea se consideră începută după confirmarea scrisă a ofertei de către cabinet."] },
    { h: "Informații cu caracter medical", p: ["Conținutul site-ului, inclusiv ghidurile și descrierile serviciilor, are scop informativ și se adresează profesioniștilor din domeniul medicinei dentare.", "Nu reprezintă consult, diagnostic sau recomandare de tratament. Decizia clinică aparține în întregime medicului curant."] },
    { h: "Utilizarea site-ului", list: ["Folosești site-ul în scopuri legale și cu bună-credință", "Nu încerci să perturbi funcționarea site-ului sau să accesezi zone neautorizate", "Nu trimiți prin formulare conținut ilegal, înșelător sau malițios", "Ești responsabil pentru corectitudinea datelor de contact transmise"] },
    { h: "Proprietate intelectuală", p: ["Textele, imaginile, grafica, logo-ul și structura site-ului aparțin iDentical Lab sau sunt folosite cu acordul titularilor. Orice reproducere sau utilizare comercială fără acordul nostru scris este interzisă.", "Imaginile cazurilor din portofoliu sunt publicate cu acordul cabinetelor partenere."] },
    { h: "Limitarea răspunderii", p: ["Depunem eforturi rezonabile pentru ca informațiile de pe site să fie corecte și actuale, dar nu garantăm că sunt complete sau lipsite de erori.", "Nu răspundem pentru întreruperi ale site-ului, pentru conținutul site-urilor terțe către care trimit linkuri sau pentru decizii luate exclusiv pe baza informațiilor de pe site."] },
    { h: "Date personale și cookie-uri", p: ["Modul în care prelucrăm datele personale este descris în Politica de confidențialitate, iar utilizarea cookie-urilor în Politica de cookie-uri."] },
    { h: "Legea aplicabilă și soluționarea litigiilor", p: ["Acești termeni sunt guvernați de legea română. Eventualele neînțelegeri se rezolvă amiabil, iar în caz contrar de instanțele competente din România.", "Informații despre soluționarea alternativă a litigiilor găsești pe anpc.ro, iar platforma europeană de soluționare online a litigiilor (SOL) este disponibilă la ec.europa.eu/consumers/odr."] },
    { h: "Modificări", p: ["Putem actualiza acești termeni. Versiunea în vigoare este cea publicată pe această pagină, cu data ultimei actualizări afișată mai sus."] },
  ],
};

export const PRIVACY: LegalDoc = {
  slug: "politica-de-confidentialitate",
  title: "Politica de confidențialitate",
  intro: "Cum prelucrăm datele personale transmise prin site, în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și cu legislația română aplicabilă.",
  updated: UPDATED,
  sections: [
    { h: "Operatorul datelor", p: [OPERATOR] },
    { h: "Ce date colectăm", p: ["Prin formularele de ofertă și de contact colectăm datele pe care le introduci:"], list: ["Nume și prenume", "Clinica sau cabinetul", "Adresa de email și numărul de telefon", "Tipul de lucrare și descrierea cazului", "Pagina și sursa de pe care ai trimis cererea"] },
    { h: "De ce folosim datele și pe ce temei", list: ["Pentru a răspunde cererii tale și a-ți transmite o ofertă: executarea unor măsuri precontractuale la cererea ta (art. 6 alin. 1 lit. b GDPR)", "Pentru a ține evidența solicitărilor și a ne apăra interesele legitime (art. 6 alin. 1 lit. f GDPR)", "Pentru obligații legale, atunci când este cazul (art. 6 alin. 1 lit. c GDPR)", "Pentru comunicări de marketing, numai cu acordul tău (art. 6 alin. 1 lit. a GDPR), pe care îl poți retrage oricând"] },
    { h: "Date ale pacienților", p: ["Fișierele transmise ulterior pentru realizarea lucrărilor (CBCT, scanări) pot conține date cu caracter personal ale pacienților.", "Recomandăm ca ele să fie trimise fără date de identificare directă, de exemplu cu un cod intern al cabinetului. Cabinetul răspunde de temeiul legal al transmiterii acestor date. Condițiile detaliate de prelucrare se stabilesc prin acord separat între părți."] },
    { h: "Cui transmitem datele", p: ["Datele sunt accesibile doar persoanelor din laborator care au nevoie de ele. Folosim furnizori care prelucrează date în numele nostru:"], list: ["Găzduirea site-ului: Vercel Inc.", "Stocarea solicitărilor: Supabase", "Trimiterea emailurilor de notificare și confirmare: Resend", "Autorități publice, atunci când legea o impune"] },
    { h: "Transferuri în afara SEE", p: ["Unii furnizori pot prelucra date și în afara Spațiului Economic European. În acest caz ne bazăm pe garanții adecvate, precum clauzele contractuale standard aprobate de Comisia Europeană."] },
    { h: "Cât păstrăm datele", p: ["Solicitările neurmate de o colaborare se păstrează [de completat, de exemplu 24 de luni] de la ultima interacțiune. Datele necesare obligațiilor legale, de exemplu cele contabile, se păstrează pe durata prevăzută de lege."] },
    { h: "Drepturile tale", list: ["Dreptul de acces la date", "Dreptul la rectificare", "Dreptul la ștergere („dreptul de a fi uitat”)", "Dreptul la restricționarea prelucrării", "Dreptul la portabilitatea datelor", "Dreptul de opoziție", "Dreptul de a retrage consimțământul, fără a afecta prelucrările anterioare"], p: ["Pentru exercitarea drepturilor ne poți scrie la gabriel.musetescu@identical.ro. Ai dreptul să depui o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), B-dul G-ral Gheorghe Magheru 28-30, Sector 1, București, www.dataprotection.ro."] },
    { h: "Securitatea datelor", p: ["Aplicăm măsuri tehnice și organizatorice rezonabile: conexiune criptată (HTTPS), acces restricționat la date, stocare la furnizori cu controale de securitate. Niciun sistem nu este însă complet lipsit de risc."] },
    { h: "Cookie-uri", p: ["Informații despre cookie-uri și stocarea locală găsești în Politica de cookie-uri."] },
    { h: "Modificări ale politicii", p: ["Actualizăm această politică atunci când se schimbă modul în care prelucrăm datele. Versiunea în vigoare este cea de pe această pagină."] },
  ],
};

export const COOKIES: LegalDoc = {
  slug: "politica-cookie",
  title: "Politica de cookie-uri",
  intro: "Ce stocăm în browserul tău, de ce, și cum îți poți modifica alegerea.",
  updated: UPDATED,
  sections: [
    { h: "Ce sunt cookie-urile", p: ["Cookie-urile sunt fișiere mici stocate în browser. Folosim și alte mecanisme similare, precum stocarea locală (localStorage), pentru a reține preferințe."] },
    { h: "Ce folosim acum", list: ["Necesare: reținem alegerea ta privind cookie-urile (cheia „idl-cookie-consent”, în stocarea locală a browserului, până o modifici sau o ștergi). Nu pot fi dezactivate, deoarece fără ele nu am putea respecta alegerea ta.", "Analitice: în prezent nu folosim instrumente de analiză. Dacă vom activa unele, vor rula doar cu acordul tău.", "Marketing: în prezent nu folosim cookie-uri sau pixeli de marketing. Dacă vom activa unele, vor rula doar cu acordul tău."] },
    { h: "Cum îți modifici alegerea", p: ["Poți schimba oricând preferințele folosind butonul de mai jos. Poți șterge oricând datele stocate și din setările browserului."] },
    { h: "Setările browserului", p: ["Majoritatea browserelor permit blocarea sau ștergerea cookie-urilor. Blocarea celor necesare poate face ca alegerea ta să nu fie reținută între vizite."] },
    { h: "Operatorul site-ului", p: [OPERATOR] },
    { h: "Contact", p: ["Pentru întrebări despre această politică ne poți scrie la gabriel.musetescu@identical.ro."] },
  ],
};

export const LEGAL_DOCS = [TERMS, PRIVACY, COOKIES];
