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
