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
