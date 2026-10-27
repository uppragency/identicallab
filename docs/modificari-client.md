# Modificări primite de la client

Status: colectare. Implementarea pornește doar la comanda "start implementare".

## 01. Secțiunea Valori, cardul "03 · COLABORARE / Relații"
- Fișier: components/sections/Values.tsx (linia ~122)
- Screenshot: docs/modificari-client/01-a.png
- Cerință client: înlocuim "răspundem repede" cu "avem un grad de expertiză avansat".
- Text nou: "Peste 700 de cabinete lucrează cu noi pentru că avem un grad de expertiză avansat și spunem lucrurile pe față, inclusiv când un caz are nevoie de o altă abordare."
- De verificat: textul similar din components/pages/AboutSections.tsx (linia 100, "04 Astăzi") nu conține "răspundem repede", deci rămâne neschimbat.

## 02. Secțiunea Positioning (sub titlul "Dental laboratory. Aesthetics & Technology lovers..."), paragraful descriptiv
- Fișier: components/sections/Positioning.tsx (linia ~60)
- Screenshot: docs/modificari-client/02-a.png (porțiunea tăiată cu albastru: "de la scanare 3D precisă, la design CAD/CAM și realizare în laborator")
- Cerință client: înlocuim porțiunea tăiată cu "de la departamentul de turnare modele, către cel de design asistat de calculator, până la cel de frezare computerizată, ajungând în cele din urmă în departamentul de ceramică și finisare".
- Text nou: "... O lucrare dentară digitală trece prin mâinile mai multor specialiști – de la departamentul de turnare modele, către cel de design asistat de calculator, până la cel de frezare computerizată, ajungând în cele din urmă în departamentul de ceramică și finisare. Perfect adaptată, verificată în fiecare etapă și livrată rapid, pentru confortul și siguranța pacientului."
- Întrebare la final: semnul "–" dinaintea porțiunii rămâne? Propun să-l înlocuiesc cu două puncte, conform regulii tale fără linii de separare. Textul clientului are diacritice corectate față de dictare ("către", "până", "ceramică").

## 03. Homepage, secțiunea "Ce livrăm clinicii" (6 carduri de servicii)
- Fișier: components/sections/Services.tsx
- Screenshot: docs/modificari-client/03-a.png (starea actuală: Modele mandibulare, Segmentare CBCT, Prelucrare digitală, Printare 3D, Design CAD/CAM, Ghiduri chirurgicale; placeholdere FOTO03, 05, 07, 09, 11, 13)
- Cerință client: lista nouă de 6 servicii, în această ordine:
  1. Reabilitări totale înșurubate
  2. Fațete dentare
  3. Coroane și punți
  4. Bonturi personalizate
  5. SmileCloud wax up
  6. Ghiduri chirurgicale
- Corespondență propusă cu cardurile actuale (în ordinea poziției): 1 înlocuiește Modele mandibulare, 2 Segmentare CBCT, 3 Prelucrare digitală, 4 Printare 3D, 5 Design CAD/CAM, 6 Ghiduri chirurgicale (rămâne).
- Întrebări la final:
  a. Descrierile scurte de sub fiecare titlu pentru cele 5 servicii noi: le scriu eu (fără promisiuni neverificabile, de validat de client) sau le dă clientul?
  b. Linkurile cardurilor: există pagini doar pentru Modele mandibulare, Segmentare CBCT, Design CAD/CAM, Ghiduri chirurgicale. Serviciile noi duc la formularul de ofertă sau cer pagini noi?
  c. Se schimbă și meniul Servicii, pagina /servicii, footerul, sitemap, SEO și JSON-LD, ca să fie consecvente cu lista nouă? Sau doar homepage-ul?
  d. Paginile existente (modele mandibulare, segmentare CBCT, design CAD/CAM) rămân active, nelistate pe homepage?

## 04. Homepage, secțiunea "[ WORKFLOW ] Patru pași de la fișier la obiect"
- Fișier: components/sections/Workflow.tsx (titlul apare și în app/cum-lucram/page.tsx, linia ~30, unde pașii pot fi duplicați)
- Screenshot: docs/modificari-client/04-a.png (starea actuală: 01 DICOM, 02 Segmentare, 03 STL, 04 Printare 3D)
- Cerință client: cei 4 pași devin, în ordine:
  1. Scanare intraorală
  2. Fotografii documentare
  3. Validare proiect design
  4. Execuție și finisare
- Întrebări la final:
  a. Descrierile din dreapta fiecărui pas (acum despre DICOM, segmentare, STL, printare) nu mai corespund. Le scriu eu pe baza noilor titluri, sau le dă clientul?
  b. Titlul "Patru pași de la fișier la obiect" mai e valabil? Pașii noi pornesc de la scanare, nu de la fișier. Propun "Patru pași de la scanare la lucrare", de validat.
  c. Se schimbă la fel și pagina /cum-lucram, FAQ și ghidurile care repetă fluxul DICOM, segmentare, STL, printare, sau doar homepage-ul?

## 05. Homepage, secțiunea "[ GHIDURI STACKABLE ] Ghiduri stackable, pas cu pas"
- Fișier: components/sections/StackableGuides.tsx (linia ~54)
- Screenshot: docs/modificari-client/05-a.png (starea actuală: pașii Scanare, Design 3D, Producție, Chirurgie; placeholdere FOTO18 la FOTO21)
- Cerințe client, interpretare:
  1. Primul paragraf (sus): lista "osteotomie, poziționare, inserție" devine "osteotomie, poziționare, inserție și lucrare provizorie". Text nou: "Ghidurile stackable se așează unul peste altul și păstrează aceeași referință pe tot parcursul intervenției: osteotomie, poziționare, inserție și lucrare provizorie. Poziția planificată digital rămâne aceeași și în sala de operație."
  2. Al doilea paragraf: "Le realizăm din rezină biocompatibilă" (înlocuiește "Le realizăm din rezine biocompatibile, pe baza planificării făcute împreună cu medicul").
  3. Titlurile pașilor, în ordine: 1. Achiziția de date: CBCT, scanare intraorală, poze documentare; 2. Planificare protetică și chirurgicală; 3. Producție; 4. Chirurgie.
- Întrebări la final:
  a. La punctul 2, se elimină complet partea "pe baza planificării făcute împreună cu medicul", sau textul clientului completează doar începutul propoziției?
  b. Descrierile de sub pașii 1, 2 și 3 (acum despre CBCT cu dual scan, Design 3D, Producție) rămân ca acum sau se rescriu pentru titlurile noi? Mai ales pasul 1, care acum include și scanare intraorală și poze.
  c. Titlul pasului 1 e lung ("Achiziția de date: CBCT, scanare intraorală, poze documentare"). Îl folosesc ca titlu pe cardul îngust sau titlu "Achiziția de date" cu restul ca descriere?
  d. Placeholderul din dreapta jos "[ completează termenul de execuție pentru ghiduri ]" rămâne neschimbat până primim termenul real.

## 06. Homepage, secțiunea "[ LIVRARE ] Ce se întâmplă în primele trei zile"
- Fișier: components/sections/Delivery.tsx (titlul linia ~30, etichetele "Ziua 1/2/3" linia ~62; probabil și pagina Livrare și pagina /cum-lucram folosesc blocul)
- Screenshot: docs/modificari-client/06-a.png (3 carduri: Preluare și verificare, Design și validare, Execuție și expediere)
- Cerințe client:
  1. Titlu nou: "Ce se întâmplă după ce primim cazul tău" (înlocuiește "Ce se întâmplă în primele trei zile").
  2. Se elimină etichetele "ZIUA 1", "ZIUA 2", "ZIUA 3" de pe carduri (cercurile numerotate 1, 2, 3 rămân).
- Întrebări la final:
  a. Cercurile 1, 2, 3 rămân (presupun că da, doar textul "ZIUA n" dispare)?
  b. Placeholderul "[ completează termenele reale pe tip de lucrare și regimul de urgență ]" și butonul "Verifică termenul pentru cazul tău" rămân? Fără "primele trei zile" în titlu, promisiunea de termen dispare din titlu, dar rămâne în buton.
  c. Se aplică și pe paginile care repetă blocul (verific la implementare unde apare "Ziua 1/2/3" și "primele trei zile", inclusiv SEO și FAQ)?

## 07. Homepage, secțiunea "[ Planificare digitală ] Viitorul stomatologiei este digital" (comparator Cu ghid / Fără ghid)
- Fișier: components/sections/Planning.tsx (titlul linia ~58, butoanele și panourile liniile ~90 la ~140)
- Screenshot: nu a fost atașat la acest mesaj (textul a venit fără imagine). Locul a fost identificat în cod.
- Cerințe client:
  1. Titlu nou: "Prezentul stomatologiei este digital" (înlocuiește "Viitorul stomatologiei este digital"; cuvântul "digital" rămâne evidențiat turcoaz).
  2. Butonul și panoul "Cu ghid protetic" (acum "Cu ghidaj protetic", text despre Dual scan technique) primește textul: "Cu ajutorul ghidului chirurgical, planificăm cazul înainte de prima incizie, pornind de la un avatar digital al pacientului, care devine reperul comun pentru toate etapele tratamentului. Planificarea pornește de la viitoarele restaurări protetice, provizorie și definitivă, în funcție de care stabilim pozițiile optime ale implanturilor."
  3. Butonul și panoul "Fără ghid" (acum "Fără ghidaj") primește textul: "Preluăm cazul în etapa postchirurgicală și realizăm restaurările protetice provizorie și definitivă pe implanturi deja inserate free-hand. Poziția acestora poate fi justificată chirurgical de anatomia osoasă, însă nu întotdeauna favorizează o restaurare protetică optimă. Pot apărea compromisuri ale profilului de emergență, dificultăți de execuție și disconfort pentru pacient."
- Întrebări la final:
  a. Etichetele mici din panouri: "Dual scan technique" (panoul Cu ghid) și "Fără ghidaj protetic" (panoul Fără ghid). Se păstrează, se elimină sau se redenumesc "Cu ghid protetic" / "Fără ghid"? Propun a doua variantă pentru consecvență cu butoanele.
  b. Cei doi paragrafi introductivi (despre scanări și ghiduri, respectiv DICOM, segmentare și imprimare 3D) rămân neschimbați?
  c. Terminologia "ghidaj" apare și în alte locuri (Portofoliu, meniu, Servicii, pagina Portofoliu). Propun să le aliniez la "ghid" doar dacă clientul confirmă, altfel rămân.
  d. Textul clientului folosește "free-hand" (anglicism). Îl păstrez ca atare, conform textului primit.

## 08. Homepage, secțiunea cifre "Suntem mândri să spunem că, în acest an, am realizat peste:"
- Fișier: components/sections/Results.tsx (titlul linia ~34, "Toleranță declarată" linia ~192; cifrele sunt acum placeholdere)
- Screenshot: docs/modificari-client/08-a.png (8 celule; marcajul "VALORI DE COMPLETAT" din dreapta titlului trebuie scos după completare)
- Cerință client, valori pe celule (ordinea din screenshot):
  1. Coroane și fațete: 45.000
  2. Modele printate 3D (acum "Modele mandibulare printate 3D"): 3500, cu mențiunea "pe Stratasys" ("modele printate pe Stratasys")
  3. Ghiduri chirurgicale: 870
  4. Wax-up-uri și planificări digitale: 3000 (clientul scrie "wax up uri"; eticheta rămâne "Wax-up-uri și planificări digitale" sau devine doar "Wax-up-uri", de confirmat)
  5. Cazuri complexe procesate: 15000 (clientul scrie "cazuri procesate", fără "complexe")
  6. Cabinete stomatologice partenere: 700+ (neschimbat)
  7. Timp mediu de livrare: 5 zile lucrătoare (acum format "00 h")
  8. Toleranță declarată: 0,2% rată de refacere (acum format "0,0 mm")
- Întrebări și riscuri la final:
  a. Titlul spune "în acest an, am realizat peste". Cifrele (45.000 coroane și fațete, 15.000 cazuri) par cumulate pe mai mulți ani. Propun "de la înființare" sau "până în prezent" în loc de "în acest an". De confirmat perioada reală cu clientul.
  b. "15000 cazuri procesate" fără "complexe": păstrez eticheta cu "complexe" sau o scot?
  c. 0,2% rată de refacere e o afirmație de performanță. Recomand ca clientul să o poată susține cu date interne (nr. refaceri / nr. lucrări), mai ales într-un context medical. Eticheta propusă: "Rată de refacere" cu valoarea "0,2%", în loc de "Toleranță declarată".
  d. Textul de sub cifre ("Fiecare dintre aceste lucrări intră în reabilitări orale complete...") rămâne neschimbat?
  e. Formatul numerelor: 45.000 și 3500 și 15000 trebuie scrise unitar. Propun cu punct la mii, în stilul românesc: 45.000, 3.500, 870, 3.000, 15.000.
  f. Animația de numărare (dacă există) trebuie verificată cu numere mari.

## 09. Întrebări frecvente (homepage "Înainte de primul caz" și posibil pagina /intrebari)
- Fișiere: components/sections/Faq.tsx (5 întrebări pe homepage: Ce fișiere trebuie să trimit? / Cât durează realizarea unui model? / Primesc și fișierul STL? / Cum se stabilește prețul? / Lucrați cu clinici din toată țara?), components/pages/FaqSections.tsx (FAQ_GROUPS, folosit pe /intrebari și în JSON-LD FAQPage)
- Screenshot: nu a fost atașat (text fără imagine).
- Cerință client: cele 5 întrebări cu răspunsuri devin, în ordine:
  1. Ce informații sunt necesare pentru a trimite un caz? Fișierele scanării intraorale, fotografiile de documentare și informațiile aferente comenzii. Suntem prezenți pe platformele cloud ale principalilor producători de scanere, astfel încât să ne poți transmite fișierele direct.
  2. Care este termenul de execuție? Termenul mediu de execuție este de 5 zile lucrătoare.
  3. Cum se stabilește necesarul de componente protetice? Odată ce cazul intră în etapa de proiectare, selectăm componentele necesare și îți transmitem lista pentru a le comanda.
  4. Cum pot solicita catalogul de produse și lista de prețuri? Completează formularul de contact, iar noi te vom contacta pentru a-ți oferi catalogul de produse și lista de prețuri.
  5. Colaborați cu clinici din afara țării? Da, colaborăm cu clinici atât din România, cât și din Europa. Livrările sunt realizate prin servicii externe de curierat.
- Întrebări la final:
  a. Se înlocuiește doar lista de pe homepage, sau și lista completă de pe /intrebari (FAQ_GROUPS, pe grupe), împreună cu schema FAQPage pentru SEO?
  b. Întrebarea 1 spune "te poți transmite fișierele direct" prin platforme cloud ale producătorilor de scanere: de confirmat care platforme (3Shape, iTero, Medit etc.), pentru a le putea afișa ca logo-uri sau listă. Nu le inventez.
  c. Întrebarea 4: "Completează formularul de contact" trebuie să ducă la /contact sau la modalul de ofertă? Propun link către /contact.
  d. Răspunsul 5 spune "Europa", iar la 2 "5 zile lucrătoare": pentru livrări externe termenul include curierul? De clarificat.
  e. Pe paginile de servicii, FAQ-urile proprii (de ex. ghiduri chirurgicale) rămân neschimbate.

## 10. Homepage, secțiunea "Materiale și tehnologii" (id #materiale)
- Fișier: components/sections/Materials.tsx (linkul din footer "Materiale și tehnologii" ducă la /#materiale)
- Screenshot: nu a fost atașat (text fără imagine).
- Starea actuală: 7 rânduri la Materiale (Zirconiu multistrat, Disilicat de litiu, Ceramică feldspatică, Ceramică pe refractar, PMMA și compozit, Rezine biocompatibile, Rezine pentru modele) și 7 la Tehnologii (Scanere de laborator, Software CAD dentar, Planificare implantară, Imprimante 3D, Freze CAM, Cuptoare de sinterizare, Control final), cu marcaje "[ brand / model ]" de completat.
- Cerință client, conținut nou:
  MATERIALE
  - Zirconiu multilayer: Dentsply Sirona sau Ivoclar
  - Disilicat de litiu: Ivoclar IPS e.max CAD (clientul a lipit și "Lithium disilicate block for CAD/CAM", probabil text de link/pagină produs)
  - Ceramică feldspatică: selectată în funcție de caz
  - Compozit: COLTENE BRILLIANT Crios sau VOCO Grandio disc multicolor
  - Rășini biocompatibile: Stratasys MED610 și VeroGlaze MED620
  - Rășini pentru modele: Stratasys VeroDent PureWhite, VeroMagentaV, VeroCyanV și VeroYellowV (clientul a lipit și "Stratasys Support Center", probabil text de link)
  TEHNOLOGII
  - Scanner de laborator: Medit T710
  - Software de proiectare și fabricație digitală: exocad, inLab, Materialise Magics, MillBox, SUM3D, GrabCAD Print și Blender for Dental
  - Software de planificare implantară: coDiagnostiX
  - Imprimantă 3D: Stratasys J5 DentaJet (plus "Stratasys Support Center", probabil link)
  - Mașini de frezat: imes-icore
  - Cuptoare de sinterizare: Dentsply Sirona și MIHM-VOGT
- Diferențe față de starea actuală: rândurile "Ceramică pe refractar" și "Control final" nu apar în lista clientului (le scot?); "PMMA și compozit" devine "Compozit"; "Zirconiu multistrat" devine "Zirconiu multilayer".
- Întrebări la final:
  a. "Lithium disilicate block for CAD/CAM" și "Stratasys Support Center" (apar de două ori) sunt text de link copiat de pe site-urile producătorilor? Le pun ca linkuri externe (cu adresele oficiale, de confirmat) sau le omit? Nu le afișez ca text brut.
  b. Scot rândurile "Ceramică pe refractar" și "Control final", cum rezultă din lista clientului?
  c. Mențiunile de brand (Ivoclar, Dentsply Sirona, Stratasys, COLTENE, VOCO, Medit etc.) sunt mărci înregistrate: clientul confirmă că poate indica folosirea lor (nu logo-urile, doar nume)? Recomand doar nume text, fără logo-uri, fără sigle.
  d. "MIHM-VOGT" apare scris cu două "T" în ortografia mărcii (MIHM-VOGT); păstrez cum a scris clientul.
  e. Lista de la Software e lungă (7 produse): o afișez pe mai multe rânduri în coloana din dreapta. Verific lizibilitatea pe mobil la implementare.
  f. Secțiunea "Accreditations" (components/sections/Accreditations.tsx) are text similar și placeholder "[ brand de aparatură / materiale ]": se aliniază cu aceste branduri sau rămâne separat?

## 11. Homepage, secțiunea "[ CARIERE ] Te-ai gândit vreodată să devii tehnician dentar?"
- Fișier: components/sections/Careers.tsx (titlul linia ~40, paragraful linia ~43)
- Screenshot: docs/modificari-client/11-a.png
- Cerință client: titlul nu mai sugerează că se poate deveni tehnician dentar fără școală (e nevoie de studii). Propunere client: "Vrei să te alături echipei?" (formularea exactă: "ceva de genul: vrei să te alături echipei?").
- Titlu nou propus: "Vrei să te alături echipei?"
- Întrebări la final:
  a. Paragraful de sub titlu: "Transformi materiale în zâmbete și tehnologia în rezultate reale. Iar dacă ai deja experiență, avem o veste bună: angajăm." Se leagă de ideea veche (cineva fără experiență). Propun: "Transformi materiale în zâmbete și tehnologia în rezultate reale. Dacă ai experiență în tehnică dentară, avem o veste bună: angajăm." De validat de client.
  b. Butonul "Trimite-ne CV-ul" rămâne.
  c. Titlul pe pagina de cariere, dacă există (verific la implementare dacă se repetă în footer sau meniu: "Cariere").

## 12. Homepage, secțiunea "[ EDUCAȚIE ] Educație bazată pe practică, tehnologie și rezultate predictibile."
- Fișier: components/sections/Careers.tsx (paragraful linia ~80; secțiunea Educație e în același fișier cu Cariere)
- Screenshot: docs/modificari-client/12-a.png
- Cerință client: în paragraf, "printre care Dual Scan Technique" se înlocuiește cu "printre care: metode de execuție ale coroanelor și punților înșurubate, planificări digitale și chirurgicale 3D".
- Text nou: "Publicăm serii educative despre implantologia digitală, printre care: metode de execuție ale coroanelor și punților înșurubate, planificări digitale și chirurgicale 3D. Scrie-ne ce subiecte ai avea nevoie să fie abordate."
- Întrebări la final:
  a. Două puncte după "printre care" (cum a scris clientul) sunt corecte gramatical cu enumerare; le păstrez. Altfel varianta fără două puncte: "printre care metode de execuție...".
  b. "Dual Scan Technique" mai apare în panoul din secțiunea Planificare (modificarea 07, eticheta mică). Rămâne decizia de la 07.

## 13. Pagina /cum-lucram, hero cu cele 3 carduri (Proces, Planificare, Livrare)
- Fișiere: components/pages/WorkSections.tsx (WorkHero, tabs liniile ~6 la ~8), app/cum-lucram/page.tsx (PhaseDivider n="01" title="Proces", și probabil titlurile separatoarelor 02 și 03)
- Screenshot: docs/modificari-client/13-a.png (titlu "De la fișier la lucrarea livrată.", cardurile 01 Proces, 02 Planificare, 03 Livrare)
- Cerință client: etichetele cardurilor devin: 1. Procesare, 2. Planificare, 3. Livrare. Practic singura schimbare de text: "Proces" devine "Procesare" (Planificare și Livrare rămân).
- Se aplică și în titlul separatorului de fază "01 Proces" din pagină (PhaseDivider), pentru consecvență. Ancora linkului (#proces) rămâne neschimbată ca să nu strice linkuri existente, sau se schimbă în #procesare cu redirect? Propun să rămână #proces.
- Întrebări la final:
  a. Descrierile cardurilor ("De la fișierul primit la modelul din cabinet, în patru pași.", "Scanări, simulări 3D și ghiduri, înainte de intervenție.", "Preluare, design, validare, execuție și expediere.") rămân? Prima se referă la fluxul vechi DICOM, segmentare, STL, printare, care se schimbă la modificarea 04, iar a doua la planificare/CBCT.
  b. Titlul paginii "De la fișier la lucrarea livrată." mai e valabil? Pașii noi pornesc de la scanare (modificarea 04). Propun "De la scanare la lucrarea livrată.", de validat.
  c. Pașii "Cum trimiți un caz" de pe aceeași pagină (Alegi serviciul: Modele mandibulare, segmentare CBCT, design CAD/CAM sau ghiduri chirurgicale; fișiere DICOM, STL) se schimbă cu lista nouă de servicii (modificarea 03) și cu noul flux?
  d. Această pagină folosește aceeași secțiune Workflow de pe homepage: modificarea 04 se aplică automat și aici, sau doar pe homepage?

## 14. Pagina /cum-lucram, secțiunea "[ CUM TRIMIȚI UN CAZ ] Patru pași simpli"
- Fișier: app/cum-lucram/page.tsx (StickyList id="trimite-un-caz", items liniile ~35 la ~40; același bloc poate apărea și în alte pagini, de verificat la implementare)
- Screenshot: docs/modificari-client/14-a.png (starea actuală: 01 Alegi serviciul, 02 Ne trimiți cererea, 03 Confirmăm cazul, 04 Primești oferta)
- Cerințe client:
  1. Pasul 01 "Alegi serviciul": descrierea trebuie să listeze produsele din oferta reală (lista nouă de la modificarea 03: Reabilitări totale înșurubate, Fațete dentare, Coroane și punți, Bonturi personalizate, SmileCloud wax up, Ghiduri chirurgicale), nu "Modele mandibulare, segmentare CBCT, design CAD/CAM sau ghiduri chirurgicale".
  2. Se elimină tot ce ține de preț: pasul 04 "Primești oferta / Revenim cu termenul de execuție și cu prețul înainte să începem lucrul" dispare ca formulare. Se păstrează "confirmăm cazul" (pasul 03 rămâne).
  3. Pasul 04 devine: "Începem proiectarea și stabilim termenele".
- Propunere text (de validat):
  - 01 Alegi serviciul: "Reabilitări totale înșurubate, fațete dentare, coroane și punți, bonturi personalizate, SmileCloud wax up sau ghiduri chirurgicale. Dacă nu ești sigur, descrie cazul."
  - 02 Ne trimiți cererea: neschimbat în text, cu excepția fișierelor: "Fișierele (DICOM, STL, scan) le trimiți la primul răspuns." devine "Fișierele scanării intraorale și fotografiile de documentare le trimiți la primul răspuns." (aliniat cu FAQ-ul de la modificarea 09), de validat.
  - 03 Confirmăm cazul: neschimbat ("Verificăm datele și, dacă lipsește ceva, te contactăm în aceeași zi.").
  - 04 Începem proiectarea și stabilim termenele: "Odată cazul confirmat, începem proiectarea și stabilim împreună termenul de execuție." (descriere propusă, clientul a dat doar titlul).
- Întrebări și riscuri la final:
  a. "Tăiem treaba cu prețul": confirm că înseamnă eliminarea oricărei mențiuni a prețului din acest bloc (pasul 04 vechi). Dar FAQ-ul de la modificarea 09 spune că oferim "catalogul de produse și lista de prețuri" la cerere: coerent, dar prețul nu mai e promis înainte de lucru. Ok pentru client?
  b. Descrierea de la pasul 04 nu a fost dată de client: propunerea de mai sus.
  c. "Ne trimiți cererea ... le trimiți la primul răspuns" conține numărul de telefon 0724 065 767, rămâne.
  d. Același bloc ("Revenim cu termenul de execuție și cu prețul...") poate exista pe homepage sau în paginile de servicii: verific la implementare cu grep și aliniez.

## 15. Pagina /cum-lucram, secțiunea "[ COMUNICARE ] Ce se întâmplă dacă apare o problemă"
- Fișier: app/cum-lucram/page.tsx (liniile ~80 la ~90, tabel Situația / Ce facem noi / Ce faci tu)
- Screenshot: docs/modificari-client/15-a.png (3 rânduri: Lipsesc date sau scanul nu e clar; Designul are nevoie de ajustări; Cazul are nevoie de altă abordare)
- Cerințe client, interpretare:
  1. Rândul 1: situația devine "Lipsesc date", iar "Ce facem noi" devine "Te sunăm și îți spunem exact ce lipsește" (acum: "Te sunăm în aceeași zi și spunem exact ce lipsește"). Coloana "Ce faci tu" ("Retrimiți fișierul sau confirmi cum continuăm.") rămâne neschimbată.
  2. Rândul 2: "La cazurile complexe îți trimitem design-ul pentru validare". Interpretare: situația devine "Cazuri complexe" (acum "Designul are nevoie de ajustări"), iar "Ce facem noi" devine "Îți trimitem design-ul pentru validare" (acum "Îți trimitem designul pentru validare, cu observații tehnice.").
- Întrebări la final:
  a. Rândul 1: elimin "în aceeași zi" (clientul scrie "te sunăm și îți spunem exact ce lipsește"). Intenționat, ca să nu promitem termenul de aceeași zi? Atunci și pasul 03 din "Cum trimiți un caz" ("te contactăm în aceeași zi") ar trebui aliniat.
  b. Rândul 2: coloana "Ce faci tu" ("Aprobi sau ceri modificări, înainte de producție.") rămâne neschimbată?
  c. Rândul 3 ("Cazul are nevoie de altă abordare / Spunem direct și propunem alternativa. / Alegi varianta potrivită clinic.") nu a fost menționat: rămâne neschimbat?
  d. Nota de sub tabel ("Termenele reale pe tip de lucrare și regimul de urgență se confirmă la ofertă.") menționează oferta: după modificarea 14 (fără preț/ofertă) trebuie ajustată? Propun: "Termenele se stabilesc la începerea proiectării."
  e. "Design-ul" apare cu cratimă la client; în restul site-ului e "designul". Folosesc "designul" pentru consecvență.

## 16. Meniu nou "Cursuri" (înainte de Contact), link extern către DMA
- Fișiere: components/sections/Header.tsx (meniul desktop, linia ~184 zona Ghiduri/Contact ~196), components/sections/MobileDrawer.tsx (meniul mobil), probabil și Footer.tsx
- Screenshot: nu a fost atașat (text fără imagine).
- Cerință client: un element separat de meniu "Cursuri", plasat înainte de "Contact", care deschide într-un tab nou pagina DMA: https://dentalmasters.ro/
- Implementare propusă: link extern cu target="_blank" și rel="noopener noreferrer", în meniul desktop și în meniul mobil (drawer), cu o iconiță mică de link extern (săgeată diagonală) ca să fie clar că iese din site. În footer, după decizia clientului.
- Întrebări la final:
  a. Se adaugă "Cursuri" și în footer (coloana de linkuri), sau doar în meniul principal și mobil?
  b. Eticheta rămâne "Cursuri" (exact cum a cerut clientul)?
  c. Pentru tracking (GA4, când e activ) marchez linkul ca eveniment "click_cursuri_dma"? Opțional.
  d. Domeniul dentalmasters.ro e un site separat al clientului/partenerului: confirm că trebuie link simplu, fără UTM. Propun un UTM (?utm_source=identical.ro&utm_medium=menu) ca să vadă traficul venit din site, doar cu acordul clientului.

## 17. Meniul "Ghiduri" (/ghiduri, 12 ghiduri): ascundere temporară
- Fișiere: components/sections/Header.tsx (linia ~184), MobileDrawer.tsx (linia ~127), Footer.tsx (linia ~216), app/ghiduri/*, app/sitemap.ts, lib/seo.ts, lib/jsonld.ts, components/sections/SearchOverlay.tsx, linkurile "Ghiduri utile" din blocks.tsx (RelatedGuides, deja neutilizat), link din components/pages/GuideSections.tsx, secțiuni de homepage care trimit la ghiduri.
- Screenshot: nu a fost atașat (text fără imagine).
- Cerință client: ghidurile 1 la 12 vor deveni filmulețe de 30 de secunde până la 1 minut, cu explicații, încărcate din YouTube. Până când clientul revine cu videoclipurile, secțiunea Ghiduri se ascunde.
- Implementare propusă: un flag în lib/features.ts (`guides: false`, ca la blog și newsletter, care sunt deja dezactivate). Cu flagul oprit: dispar linkurile din meniu desktop, meniu mobil, footer, căutare și homepage; paginile /ghiduri și /ghiduri/[slug] întorc 404 (sau noindex și fără linkuri); ghidurile ies din sitemap și din schema JSON-LD; metadatele de ghiduri rămân în cod. Reactivarea: `guides: true` plus înlocuirea conținutului cu embed YouTube.
- Întrebări și riscuri la final:
  a. 404 sau pagini încă accesibile direct, dar ascunse din meniu (noindex)? Dacă ghidurile au fost deja indexate de Google (site-ul e blocat la indexare până la lansare, deci nu), 404 e curat. Recomand 404.
  b. Pagina de portofoliu și paginile de servicii au linkuri către ghiduri ("Despre ghidurile chirurgicale" ducă la serviciul, nu la /ghiduri: nu se ating). De verificat la implementare ce linkuri duc spre /ghiduri și ascuns toate.
  c. Videoclipurile: cine le face și când? Cât de multe în total (12)? Format YouTube Shorts (vertical) sau 16:9? Recomand 16:9 încorporat cu youtube-nocookie.com (conform politicii de cookie-uri, fără cookie-uri până la consimțământ) și un schelet de pagină gata pentru ele.
  d. Cele 12 texte de ghiduri existente (SEO) se păstrează în cod pentru reutilizare ca transcrieri sub videoclipuri.

## Răspunsuri la întrebările 16 și 17 (15:05)
- 16a. "doar în footer": AMBIGUU. Cerința inițială (16) cere un element de meniu "Cursuri" înainte de Contact. Răspunsul poate însemna: (i) apare și în footer, pe lângă meniu; sau (ii) apare doar în footer, nu în meniul principal. De clarificat înainte de implementare. Implicit, până la clarificare, fac (i): meniu desktop, meniu mobil și footer.
- 16b/c. "da": se adaugă UTM la linkul către DMA: https://dentalmasters.ro/?utm_source=identical.ro&utm_medium=menu (în footer: utm_medium=footer).
- 17. "ascunde și pagina ghiduri": se ascunde complet, inclusiv pagina /ghiduri și paginile individuale /ghiduri/[slug]: întorc 404, ies din sitemap, căutare, JSON-LD și toate linkurile. Flag lib/features.ts `guides: false`.
- 17c. "videoclipurile vor fi 16:9": embed 16:9 cu youtube-nocookie.com, la reactivare.

## Clarificare 16a (15:06)
- "Cursuri" apare în header (meniu desktop și mobil, înainte de Contact) și în footer. Ambiguitatea de mai sus e rezolvată: varianta (i).

## Status implementare (27.10.2026)
- Implementate: 01 la 17, cu valorile implicite propuse în note. Decizii luate fără răspuns explicit: titlul de la 08 ("până în prezent"), eticheta "Rată de refacere", titlurile "Patru pași de la scanare la lucrare" (04) și "De la scanare la lucrarea livrată" (13), cardurile noi de servicii duc la /contact (03), pasul 1 din Ghiduri stackable are titlul "Achiziția de date" (05), 09 doar pe homepage (/intrebari neschimbat), 17 flag guides:false.
- Neatinse (nepromise de client): meniul mega Servicii din header, pagina /servicii, /intrebari, secțiunile Planificare de pe /cum-lucram, FAQ-urile de pe paginile de servicii.
- Next.js actualizat 16.4.0 la 16.4.3 (patch de securitate, build-ul nu mai trecea).

## Propagare în restul site-ului (27.10.2026)
- Actualizat: meniul Servicii (6 servicii), /servicii (rânduri, flux în 5 etape, comparație, FAQ, formular), /intrebari, Cum lucrăm (Planificare fără DICOM/STL), footer, drawer mobil, Despre noi, Contact, SEO, mail de confirmare.
- Prețul eliminat peste tot; promisiunea înlocuită cu "Un specialist iDentical Lab te contactează în cel mai scurt timp posibil."
- Portofoliu: categorii noi (Coroane și punți, Fațete dentare, Ghiduri chirurgicale, Bonturi personalizate, Reabilitări totale înșurubate, SmileCloud wax up). Cazurile existente sunt retaginte provizoriu, de revizuit cu cazuri reale.
- Doar Ghiduri chirurgicale păstrează pagină proprie. Celelalte 5 servicii trimit la /servicii#slug.
- Paginile vechi (modele mandibulare, segmentare CBCT, design CAD/CAM) dau 404 și sunt scoase din sitemap (flag `legacyServices` în lib/features.ts).
