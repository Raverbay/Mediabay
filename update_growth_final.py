from pathlib import Path

ROOT = Path.home() / "Mediabay"
FILE = ROOT / "growth.html"

if not FILE.exists():
    raise SystemExit(f"ERRORE: {FILE} non esiste. Controlla di essere nella cartella ~/Mediabay.")

s = FILE.read_text(encoding="utf-8")

replacements = [
    ("MediaBay — Growth · The Decision Path", "MediaBay — Growth · Digital Experience"),
    ("Growth turns digital presence into a clearer path from attention to understanding, trust and action.",
     "Growth turns an existing business into a clearer digital experience for customers, contacts and bookings."),
    ("Per trasformare la presenza digitale in attenzione, fiducia e crescita.",
     "Per attività e professionisti che hanno già qualcosa da offrire e hanno bisogno di farlo vivere meglio online."),
    ("FATTI<br><em>SCEGLIERE.</em>", "FAI VIVERE<br><em>IL TUO BUSINESS.</em>"),
    ("THE GROWTH LAYER", "THE DIGITAL EXPERIENCE"),
    (" Il sistema viene gestito e fatto evolvere da MediaBay.",
     " La tua attività resta al centro. MediaBay costruisce e gestisce l'esperienza digitale intorno ad essa."),
    ("€139,90 <small>/ MESE</small>", "€139 <small>/ MESE</small>"),
    ("SETUP €1.390 · INCLUSO ALL’ATTIVAZIONE", "SVILUPPO E GESTIONE INCLUSI"),
    ("Dalla presenza all’azione: una piattaforma progettata per trasformare attenzione e interesse in richieste.",
     "Un'esperienza digitale più completa per attività che hanno già clienti, servizi o strutture e vogliono rendere più semplice scoprirle, capirle, contattarle o prenotare."),

    ("01 · IL MOMENTO DELLA SCELTA", "01 · NON TI SERVE UNO STORE"),
    ("IL TUO CLIENTE<br>NON STA CERCANDO<br>UN'AZIENDA.", "IL TUO CLIENTE<br>STA CERCANDO<br>UN'ESPERIENZA."),
    ("Sta cercando una risposta. Growth costruisce il percorso che rende quella risposta chiara, credibile e semplice da raggiungere.",
     "Growth è pensato per chi non deve vendere prodotti online, ma deve aiutare le persone a capire un'attività, scegliere un servizio, contattarla, prenotare o tornare."),

    ("01 · ATTENZIONE", "01 · PRESENZA"),
    ("PRIMA TI DEVONO NOTARE.", "FATTI TROVARE E CAPIRE."),
    ("Non serve parlare a tutti. Serve essere riconoscibili dalle persone giuste. Posizionamento, contenuti e presenza digitale lavorano insieme per creare il primo segnale: “Questo potrebbe fare al caso mio.”",
     "Una presenza più completa della semplice vetrina: servizi, attività, ambiente, informazioni utili, contatti e contenuti organizzati intorno a ciò che offri."),

    ("02 · COMPRENSIONE", "02 · ESPERIENZA"),
    ("POI DEVONO CAPIRE.", "NON SOLO INFORMAZIONI."),
    ("Cosa fai? Per chi? Quale problema risolvi? Perché dovrebbero considerarti? Growth porta queste risposte in primo piano e riduce il lavoro necessario per comprenderle.",
     "Il cliente deve poter esplorare la tua attività nel modo più naturale: vedere cosa fai, capire come funziona, scoprire servizi e scegliere il passo successivo."),

    ("03 · FIDUCIA", "03 · CONTATTO"),
    ("DEVONO SENTIRSI SICURI.", "FALLO PARLARE CON TE."),
    ("Coerenza, prova, chiarezza, autorevolezza ed esperienza costruiscono segnali che riducono l'incertezza prima della decisione.",
     "WhatsApp, chiamata, richiesta informazioni, form o altri punti di contatto possono essere integrati nel percorso senza costringere il cliente a cercarli."),

    ("04 · AZIONE", "04 · PRENOTAZIONE"),
    ("RENDI FACILE IL PROSSIMO PASSO.", "QUANDO SERVE, SI PRENOTA."),
    ("Contattarti, chiedere informazioni, prenotare o acquistare: qualunque sia l'obiettivo, il percorso deve rendere evidente cosa fare dopo.",
     "Per case vacanze, professionisti, palestre, ristorazione e servizi: possiamo integrare un percorso di prenotazione o richiesta disponibilità coerente con la tua attività."),

    ("02 · GROWTH SIGNAL", "02 · COSA PUÒ FARE PER TE"),
    ("OGNI DETTAGLIO<br>RISPONDE A<br>UNA DOMANDA.", "UN SISTEMA<br>CHE LAVORA<br>PER TE."),
    ("“Perché dovrei scegliere te?” La risposta non è soltanto quello che dici. È quello che una persona percepisce mentre attraversa il tuo sistema digitale.",
     "Non serve trasformare la tua attività in un e-commerce. Serve costruire i punti digitali che rendono più facile scegliere, contattare e prenotare."),

    ("01 · STRATEGIA", "01 · SERVIZI"),
    ("DARE UN SIGNIFICATO.", "FARE CAPIRE COSA OFFRI."),
    ("Non comunichiamo tutto. Comunichiamo ciò che serve alla decisione.",
     "Servizi, menu, trattamenti, corsi, camere, attività, orari e informazioni organizzati in modo chiaro."),

    ("02 · CONVERSIONE", "02 · PRENOTAZIONI"),
    ("TOGLIERE FRIZIONE.", "DA INFORMAZIONE A PRENOTAZIONE."),
    ("Ogni passaggio inutile aumenta lo sforzo richiesto per continuare.",
     "Richiesta tavolo, appuntamento, lezione, soggiorno o disponibilità: il percorso può portare direttamente alla prenotazione."),

    ("03 · LEAD GENERATION", "03 · CONTATTI"),
    ("TRASFORMARE INTERESSE.", "QUANDO TI VOGLIONO CONTATTARE."),
    ("Creiamo punti di contatto quando l'interesse è sufficientemente alto.",
     "WhatsApp, telefono, form e richieste possono essere messi nel posto giusto, nel momento giusto."),

    ("04 · AUTOMAZIONE", "04 · AUTOMAZIONE"),
    ("NON LASCIARE IL PROCESSO A METÀ.", "LASCIA AL SISTEMA LE COSE RIPETITIVE."),
    ("I processi ripetitivi possono essere gestiti dal sistema, anche quando tu non puoi.",
     "Richieste, notifiche, conferme e altri passaggi ripetitivi possono essere automatizzati quando ha senso farlo."),

    ("03 · IL COSTO INVISIBILE", "03 · PER CHI È GROWTH"),
    ("NON VEDI<br>QUANTE PERSONE<br>PERDI.", "HAI GIÀ UN BUSINESS.<br>ORA FALLO VIVERE<br>MEGLIO ONLINE."),
    ("Vedi chi ti scrive. Vedi chi compra. Ma non necessariamente chi era interessato e ha scelto di non continuare.",
     "Growth è pensato per attività già avviate: professionisti, bar, ristoranti, pizzerie, palestre, studi, strutture ricettive, case vacanze e servizi locali."),

    ("01 · INCERTEZZA", "01 · PROFESSIONISTI"),
    ("“NON HO CAPITO.”", "SERVIZI E APPUNTAMENTI."),
    ("Una persona può essere interessata ma non trovare abbastanza informazioni per sentirsi pronta.",
     "Presenta competenze e servizi, rispondi alle domande frequenti e accompagna il cliente verso il contatto o l'appuntamento."),

    ("02 · ATTRITO", "02 · BAR, FOOD & RISTORAZIONE"),
    ("“CI PENSO.”", "MENU, CONTATTO E PRENOTAZIONE."),
    ("Ogni passaggio inutile può rimandare una decisione che era già vicina.",
     "Menu, proposta, atmosfera, posizione, contatti e richieste tavolo possono convivere in un'unica esperienza."),

    ("03 · CONFRONTO", "03 · PALESTRE & ATTIVITÀ"),
    ("“VEDIAMO GLI ALTRI.”", "CORSI, SERVIZI E PROVA."),
    ("Quando il tuo valore non emerge rapidamente, la persona confronta ciò che riesce a capire più facilmente.",
     "Mostra attività, corsi, orari e servizi e porta la persona verso richiesta informazioni, prova o iscrizione."),

    ("04 · OPPORTUNITÀ", "04 · CASE VACANZE & OSPITALITÀ"),
    ("PROGETTIAMO IL MOMENTO.", "SCOPERTA, DISPONIBILITÀ E PRENOTAZIONE."),
    ("Non possiamo sapere quante persone perdi. Possiamo però progettare meglio il momento in cui decidono.",
     "Presenta la struttura, camere e servizi e collega l'esperienza a richiesta disponibilità o prenotazione."),

    ("04 · IL PROCESSO", "04 · COME LO COSTRUIAMO"),
    ("PRIMA<br>CAPIAMO.<br>POI COSTRUIAMO.", "PRIMA<br>CAPIAMO IL BUSINESS.<br>POI COSTRUIAMO."),
    ("Un processo semplice, con un sistema professionale dietro. Partiamo da ciò che blocca la decisione e costruiamo il percorso necessario.",
     "Non ti chiediamo di sapere quale tecnologia ti serve. Ci racconti come lavori, cosa offri e cosa vuoi ottenere. Noi trasformiamo queste informazioni in un'esperienza digitale concreta."),

    ("DISCOVER", "CAPIAMO"),
    ("Capiamo il business, gli obiettivi e ciò che oggi rende più difficile la scelta.",
     "Ci racconti l'attività, i servizi, i clienti e il modo in cui oggi ricevi richieste e prenotazioni."),
    ("ARCHITECT", "PROGETTIAMO"),
    ("Disegniamo il percorso digitale e i punti di contatto che devono sostenerlo.",
     "Decidiamo cosa deve vedere il cliente, cosa deve poter fare e quali strumenti servono davvero."),
    ("BUILD", "COSTRUIAMO"),
    ("Costruiamo gli elementi necessari: pagine, percorsi, strumenti e automazioni.",
     "Creiamo la piattaforma, i percorsi, i contatti, le prenotazioni e le integrazioni previste."),
    ("EVOLVE", "GESTIAMO E FACCIAMO EVOLVERE"),
    ("Misuriamo, miglioriamo e aggiungiamo capacità quando il business cresce.",
     "Tu continui a gestire il tuo lavoro. Noi restiamo il tuo riferimento per gestione, aggiornamenti e sviluppo del servizio."),

    ("PERIMETRO DEL PACCHETTO", "COSA PUÒ ENTRARE IN GROWTH"),
    ("COSA<br>INCLUDE.", "NON È UN E-COMMERCE.<br>È UN'ESPERIENZA DIGITALE."),
    ("Dalla presenza all’azione: una piattaforma progettata per trasformare attenzione e interesse in richieste.",
     "Il perimetro viene costruito intorno al tuo tipo di attività: non vendiamo funzioni che non ti servono."),
    ("STRATEGIA", "ESPERIENZA DIGITALE"),
    ("Architettura dei contenuti e del percorso digitale orientata a chiarezza, fiducia e azione.",
     "Struttura e contenuti pensati per far capire rapidamente chi sei, cosa offri e perché contattarti."),
    ("CONVERSIONE", "CONTATTI"),
    ("UX e struttura delle pagine progettate per rendere più semplice capire cosa fare e perché farlo.",
     "WhatsApp, telefono, form, email e altri punti di contatto integrati nel percorso."),
    ("LEAD GENERATION", "PRENOTAZIONI"),
    ("Percorsi e punti di contatto per trasformare visite qualificate in richieste e contatti.",
     "Quando serve, integrazione di strumenti e percorsi per appuntamenti, tavoli, soggiorni, prove o richieste disponibilità."),
    ("ANALISI & AUTOMAZIONE", "AUTOMAZIONI"),
    ("Basi di misurazione e automazioni funzionali al percorso commerciale previsto dal pacchetto.",
     "Notifiche, richieste, conferme e passaggi ripetitivi possono essere gestiti dal sistema quando appropriato."),

    ("Growth parte dalla base Presence e aggiunge un livello di strategia e conversione. Commerce è dedicato alla vendita di prodotti. Custom interviene quando serve un sistema progettato su misura.",
     "Presence è la base per chi deve prima costruire la propria presenza digitale. Growth è il passo successivo: per attività già strutturate che hanno bisogno di un'esperienza digitale più ricca, contatti, prenotazioni e percorsi dedicati. Commerce è per chi deve vendere prodotti online. Custom interviene quando serve un sistema progettato su misura."),

    ("“HO GIÀ UN SITO. MI SERVE GROWTH?”", "“HO GIÀ UN SITO. POSSO USARE GROWTH?”"),
    ("Può essere il punto di partenza. Growth non nasce necessariamente per sostituire ciò che hai, ma per migliorare il percorso che porta dalla visita all'azione.",
     "Sì. Possiamo partire dal sito che hai, valutarlo e capire cosa manca all'esperienza digitale. Growth può evolverlo invece di ripartire da zero."),
    ("“GESTITE ANCHE I SOCIAL?”", "“È SOLO PER RISTORANTI?”"),
    ("La gestione editoriale completa non è inclusa automaticamente. Growth può però lavorare sulla strategia e sull'integrazione dei canali nel percorso digitale.",
     "No. È pensato per attività e professionisti che hanno un servizio, una struttura o un'esperienza da far conoscere e rendere più facile da scegliere: food, palestre, studi, ospitalità, servizi e molto altro."),
    ("“POSSO PARTIRE DA PRESENCE?”", "“QUAL È LA DIFFERENZA DA PRESENCE?”"),
    ("Sì. Presence è la base. Growth può essere attivato quando il business ha bisogno di un percorso più strutturato.",
     "Presence ti dà una presenza digitale professionale e gestita. Growth aggiunge un'esperienza più completa: servizi, percorsi, contatti, prenotazioni e automazioni in base a ciò che fa la tua attività."),

    ("Quando qualcuno<br>arriva da te…<br><em>perché dovrebbe sceglierti?</em>",
     "La tua attività<br>è già in piedi.<br><em>Ora facciamola vivere online.</em>"),
    ("Se la risposta è già evidente, hai una buona base.<br><br>Se invece vuoi costruirla meglio, partiamo da lì.",
     "Raccontaci come funziona la tua attività, cosa offri e cosa vorresti rendere più semplice per i tuoi clienti.<br><br>Partiamo da lì e costruiamo l'esperienza digitale giusta per te."),
    ("COSTRUISCI IL TUO PERCORSO ↗", "PARLIAMONE ↗"),
]

changed = 0
for old, new in replacements:
    if old in s:
        s = s.replace(old, new)
        changed += 1

s = s.replace("€139,90", "€139")
s = s.replace("SETUP €1.390", "SVILUPPO E GESTIONE")

marker = '<section class="section paper" id="growth-compare">'
if marker not in s:
    block = """
<section class="section paper" id="growth-compare">
<div class="section-head">
  <div>
    <div class="eyebrow" style="color:#182318">PRESENCE → GROWTH</div>
    <h2>QUALE<br>LIVELLO<br>TI SERVE?</h2>
  </div>
  <p>Non devi scegliere la tecnologia. Devi solo capire cosa vuoi ottenere. Da lì ti aiutiamo noi.</p>
</div>
<div class="decision-grid">
  <article><span>01 · PRESENCE</span><strong>PARTI DA ZERO.</strong><p>Per chi non ha ancora una presenza digitale professionale e vuole una base semplice, gestita e accessibile.</p></article>
  <article><span>02 · GROWTH</span><strong>HAI GIÀ UN BUSINESS.</strong><p>Per chi ha già clienti, servizi o una struttura e vuole un'esperienza digitale più completa.</p></article>
  <article><span>03 · COMMERCE</span><strong>DEVI VENDERE ONLINE.</strong><p>Per chi ha bisogno di catalogo, carrello, checkout e vendita di prodotti online.</p></article>
  <article><span>04 · CUSTOM</span><strong>SERVE QUALCOSA DI SPECIFICO.</strong><p>Per esigenze, sistemi e integrazioni che richiedono un progetto costruito su misura.</p></article>
</div>
</section>
"""
    faq_marker = '<section class="section paper">'
    pos = s.find(faq_marker)
    if pos != -1:
        s = s[:pos] + block + s[pos:]

s = s.replace('<div class="eyebrow">05 · START</div>', '<div class="eyebrow">06 · START</div>')

FILE.write_text(s, encoding="utf-8")

print(f"Growth aggiornato: {changed} sostituzioni applicate.")
print(f"File: {FILE}")
print()
print("VERIFICA LOCALE:")
print("  cd ~/Mediabay")
print("  python -m http.server 8080")
print("  http://localhost:8080/growth.html")
print()
print("SE È TUTTO OK, PUSH:")
print("  git add growth.html")
print('  git commit -m "Rewrite Growth positioning for established businesses"')
print("  git push origin main")
