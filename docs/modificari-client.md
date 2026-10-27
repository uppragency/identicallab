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
  b. Titlul "Educație bazată pe practică, tehnologie și rezultate predictibile." are "practică" fără diacritică corectă în screenshot ("practica" scris cu ă în titlu), deci rămâne.
  c. "Dual Scan Technique" mai apare în panoul din secțiunea Planificare (modificarea 07, eticheta mică). Rămâne decizia de la 07.
