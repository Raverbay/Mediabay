(() => {
  "use strict";
  const properties = [
  {
    "id": "marina-bay",
    "title": "Marina Bay",
    "operation": "vendita",
    "city": "Quartu Sant'Elena",
    "area": "Terra Mala",
    "price": 200000,
    "priceLabel": "€ 200.000 · da verificare",
    "type": null,
    "bedrooms": null,
    "bathrooms": null,
    "sqm": null,
    "image": "assets/immobile-quartu/nuovi-contenuti/interni-soggiorno-01.png",
    "imageAlt": "Interni della proprietà Marina Bay",
    "url": "immobile-terra-mala.html",
    "description": "Proprietà rinnovata e arredata, a circa 30 metri dal mare. Superficie e caratteristiche tecniche da verificare.",
    "publish": true,
    "priceSortable": 200000
  },
  {
    "id": "pcf-001",
    "title": "Luminoso trivano ampio con terrazza a livello",
    "operation": "vendita",
    "city": "Assemini",
    "area": "Assemini",
    "price": 137000,
    "priceLabel": "€ 137.000 · da confermare",
    "type": "Appartamento",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqm": 125,
    "image": "https://prontocasafacile.it/wp-content/uploads/2026/10/F_349237-1024x525.jpg",
    "imageAlt": "Luminoso trivano ampio con terrazza a livello",
    "url": "https://prontocasafacile.it/Propriet%C3%A0/appartamento/assemini/luminoso-trivano-ampio-con-terrazza-a-livello/",
    "description": "Assemini, vicinanze Municipio. Proponiamo un ampio appartamento di 125 mq situato al primo e ultimo piano di un tranquillo contesto residenziale, con ingresso indipendente e piccolo cortiletto privato. La posizione strategica dell’appartamento consente di raggiungere facilmente i principali servizi e le vie di comunicazione, rendendo questa proposta interessante per chi desidera vivere in un ambiente tranquillo ma ben collegato. Questo luminoso immobile è composto da tre vani ben distribuiti, ideali per famiglie o per chi cerca spazi confortevoli. Attualmente dispone di un ampio salone doppio dove poter realizzare un angolo cottura o una cucina a vista, due camere da letto di 24 mq e 20 mq, due disimpegni ampi e un bagno. Uno dei punti di forza di questa proposta abitativa è la terrazza a livello di 45 mq, con affaccio sul fronte strada. L’ingresso indipendente garantisce la massima privacy e autonomia. L’immobile è attualmente da ristrutturare e si presta bene alla realizzazione di un quadrilocale.",
    "publish": true,
    "priceSortable": 137000,
    "availabilityLabel": "Disponibilità da confermare",
    "sourceId": "PCF-001"
  },
  {
    "id": "pcf-002",
    "title": "Casa semindipendente con ampio giardino al Villaggio Normann- Gonnesa",
    "operation": "vendita",
    "city": "Gonnesa",
    "area": "Gonnesa",
    "price": 135000,
    "priceLabel": "€ 135.000 · da confermare",
    "type": "Casa indipendente",
    "bedrooms": 4,
    "bathrooms": 1,
    "sqm": 160,
    "image": "https://prontocasafacile.it/wp-content/uploads/2026/10/F_193789-1024x473.jpg",
    "imageAlt": "Casa semindipendente con ampio giardino al Villaggio Normann- Gonnesa",
    "url": "https://prontocasafacile.it/Propriet%C3%A0/casa-semi-indipendente/gonnesa/casa-semindipendente-con-ampio-giardino-al-villaggio-normann-gonnesa/",
    "description": "Situato a pochi minuti dalle meravigliose spiagge di Fontanamare e Porto Paglia, troviamo il villaggio Normann. Un antico villaggio minerario situato in posizione dominante con vista sul Golfo del Leone. Attualmente è abitato da una ventina di nuclei familiari e in questa atmosfera, sospesa nel tempo, vi proponiamo un ampia residenza con vista panoramica sul mare e sulle montagne, lontano dal caos cittadino ma strategicamente vicino alla città di Iglesias e Gonnesa. Parliamo di un appartamento al piano terra con ingresso indipendente e giardino privato di circa 550 mq. All’ interno troviamo un comodo soggiorno, una cucina abitabile con camino, (entrambi i vani hanno accesso diretto all’area esterna), tre camere da letto, uno studio, un ampio disimpegno, un bagno e due ripostigli. Gli ambienti conservano il fascino originale e offrono ampi margini di rinnovamento creativo. La proprietà richiede alcuni interventi di riammodernamento con la possibilità, tuttavia, di usufruire dei bonus edilizi vigenti. Questa proprietà rappresenta la sintesi perfetta per chi cerca generosi spazi in un contesto architettonico unico nel suo genere; Ideale per gli amanti del trekking, per il turismo minerario, per gli investitori in ricettività, per artisti e creativi, per chi cerca non solo “una casa”, ma uno specifico stile di vita.",
    "publish": true,
    "priceSortable": 135000,
    "availabilityLabel": "Disponibilità da confermare",
    "sourceId": "PCF-002"
  },
  {
    "id": "pcf-003",
    "title": "Dolianova terreno agricolo recintato, servito acqua e luce.",
    "operation": "vendita",
    "city": "Dolianova",
    "area": "Dolianova",
    "price": 27000,
    "priceLabel": "€ 27.000 · da confermare",
    "type": "Terreno",
    "bedrooms": null,
    "bathrooms": null,
    "sqm": 4495,
    "image": "https://prontocasafacile.it/wp-content/uploads/2026/10/F_498016-1024x474.jpg",
    "imageAlt": "Dolianova terreno agricolo recintato, servito acqua e luce.",
    "url": "https://prontocasafacile.it/Propriet%C3%A0/terreno-agricolo/dolianova/dolianova-terreno-agricolo-recintato-servito-acqua-e-luce/",
    "description": "Dolianova, traversa via Sa Tiria. Proponiamo in vendita un interessante lotto agricolo di circa 4.495 mq, situato in posizione strategica a ridosso del centro urbano. La proprietà, interamente recintata, è ideale per chi cerca un’area produttiva o un angolo di relax vicino al paese. Il terreno è arricchito da piante da frutto (agrumeto con aranci) ed è già dotato di pozzo artesiano e allaccio all’energia elettrica. Rete fognaria adiacente alla proprietà. Presenza di un fabbricato di mq 21 ad uso capanno attrezzi, costruito in data antecedente al 1960. Possibilità di realizzare una tettoia aperta stile pergola o patio. L’accesso è agevole: il lotto è raggiungibile tramite strada asfaltata, con solo l’ultimo tratto di 150 metri su stradello agricolo ben percorribile. Possibile edificabilità futura.",
    "publish": true,
    "priceSortable": 27000,
    "availabilityLabel": "Disponibilità da confermare",
    "sourceId": "PCF-003"
  },
  {
    "id": "pcf-004",
    "title": "Ampia villa unifamiliare con giardino - Frazionabile.",
    "operation": "vendita",
    "city": "San Vito",
    "area": "San Vito",
    "price": 300000,
    "priceLabel": "€ 300.000 · da confermare",
    "type": "Villa",
    "bedrooms": 8,
    "bathrooms": 3,
    "sqm": 275,
    "image": "https://prontocasafacile.it/wp-content/uploads/2026/10/F_515917-1024x683.jpg",
    "imageAlt": "Ampia villa unifamiliare con giardino - Frazionabile.",
    "url": "https://prontocasafacile.it/Propriet%C3%A0/villa/san-vito/ampia-villa-unifamiliare-con-giardino-frazionabile/",
    "description": "La villa sorge nel cuore di un territorio magico e strategico, San Vito, una deliziosa cittadina del Sarrabus a 4 km da Muravera. In soli 15-20 minuti d’auto si raggiungono le spettacolari spiagge di Muravera (come San Giovanni e Torre Salinas), Porto Corallo e le acque cristalline della rinomata Costa Rei. Chi ama la storia e il trekking si troverà a pochissimi minuti dal fascino senza tempo di Monte Narba, il suggestivo villaggio minerario dell’Ottocento e, nelle immediate vicinanze, dalle millenarie Domus de Janas, i misteriosi siti archeologici scavati nella roccia. Tutto questo senza rinunciare alla comodità; il centro abitato di San Vito, con tutti i suoi servizi essenziali, si trova a portata di mano. Questa esclusiva residenza si sviluppa su tre livelli, è libera su quattro lati ed è inserita in un lotto complessivo di mq 650. Grazie alle dimensioni interne generose e alla disposizione dei vani, è ideale per più nuclei familiari, per famiglie numerose o per un investimento ricettivo di alto livello (B&B o affittacamere). E’ cosi composta: – al piano rialzato, un grande salone impreziosito dal camino, angolo cottura, 4 camere da letto, studio, 2 disimpegni e 2 bagni (mq 160 in totali); – il piano seminterrato, collegato al piano rialzato sia da scala interna che da accesso esterno, ospita una grande e luminosa zona relax/hobby dotata di forno sardo, oltre a tre locali sgombero luminosi e arieggiati e il confortevole terrazzino esterno; – il primo piano (115 mq + esterni) mansardato alto con tetto spiovente, è accessibile internamente dall’ingresso del piano terra, è attualmente un appartamento da ultimare, già tramezzato per una tipologia quadrivano, ma comunque agevolmente personalizzabile. Il piano è arricchito da 3 balconi e da una splendida terrazza a livello panoramica di 26 mq. La casa è circondata da un ampio giardino privato di circa 490 mq: una tela bianca perfetta per realizzare una lussuosa zona solarium con piscina, ideale per chi cerca massima privacy e uno stile di vita all’aria aperta.",
    "publish": true,
    "priceSortable": 300000,
    "availabilityLabel": "Disponibilità da confermare",
    "sourceId": "PCF-004"
  },
  {
    "id": "pcf-005",
    "title": "Esclusiva casa indipendente da personalizzare - Ampio giardino",
    "operation": "vendita",
    "city": "Dolianova",
    "area": "Dolianova",
    "price": null,
    "priceLabel": "Prezzo da confermare · prezzo da verificare",
    "type": "Casa indipendente",
    "bedrooms": null,
    "bathrooms": null,
    "sqm": 185,
    "image": "https://prontocasafacile.it/wp-content/uploads/2026/10/F_335033-1024x474.jpg",
    "imageAlt": "Esclusiva casa indipendente da personalizzare - Ampio giardino",
    "url": "https://prontocasafacile.it/Propriet%C3%A0/casa-singola/dolianova/esclusiva-casa-indipendente-da-personalizzare-ampio-giardino/",
    "description": "Nel suggestivo centro storico di Dolianova, a pochi passi dalla rinomata Chiesa di San Biagio, proponiamo in vendita una straordinaria casa indipendente bilivelli da ultimare, sita all’interno di un lotto totale di 700 mq. L’immobile ha beneficiato di un attento restauro conservativo delle strutture effettuato di-versi anni fa. Lo stato attuale interno offre la massima flessibilità, permettendo di persona-lizzare la distribuzione degli ambienti e le finiture in base ai propri gusti e necessità familiari. La disposizione interna da progetto prevede una suddivisione funzionale e ottimale degli ampi 180 mq coperti: – al piano terra un accogliente ingresso, ampio e luminoso pranzo soggiorno con accesso diretto alla corte interna caratterizzata dalla presenza di un antico pozzo, ideale per ricrea-re un giardino d’inverno; ampio studio, bagno, spaziosa veranda coperta affacciata sul cortile, locale di sgombero/lavanderia, vano scala per l’accesso al livello superiore; – al primo piano, un grande disimpegno d’ingresso che distribuisce gli ambienti; due ampie camere da letto matrimoniali, bagno padronale, seconda e generosa veranda con vista panoramica sul giardino. Nel giardino, trova spazio anche una tettoia aperta perfetta come zona parcheggio coperta, dependance estiva o area barbecue. Le dimensioni del lotto consentono l’eventuale installazione di una piscina. Questa proprietà rappresenta un’opportunità unica nel mercato locale. Grazie alla necessità di essere ultimata, si trasforma in una dimora da plasmare interamente sui propri desideri e ideale per diverse destinazioni: una prestigiosa residenza principale per la famiglia, uno studio professionale di charme per chi cerca una sede di alta rappresentanza, oppure una raffinata struttura ricettiva (B&B o affittacamere) nel cuore storico del paese.",
    "publish": true,
    "priceSortable": null,
    "availabilityLabel": "Disponibilità da confermare",
    "sourceId": "PCF-005"
  },
  {
    "id": "pcf-006",
    "title": "San Vito - Ampia villa unifamiliare plurilivelli con giardino - Frazionabile",
    "operation": "vendita",
    "city": "San Vito",
    "area": "San Vito",
    "price": 300000,
    "priceLabel": "€ 300.000 · da confermare",
    "type": "Villa",
    "bedrooms": 8,
    "bathrooms": 3,
    "sqm": 419,
    "image": "https://prontocasafacile.it/wp-content/uploads/2026/08/Screenshot_20260624_142044_YouTube-1024x750.jpg",
    "imageAlt": "San Vito - Ampia villa unifamiliare plurilivelli con giardino - Frazionabile",
    "url": "https://prontocasafacile.it/Propriet%C3%A0/villa-su-3-livelli/san-vito-su/san-vito-ampia-villa-unifamiliare-plurilivelli-con-giardino-frazionabile/",
    "description": "La villa sorge nel cuore di un territorio magico e strategico, San Vito, una deliziosa cittadina del Sarrabus a 4 km da Muravera. Questa esclusiva residenza si sviluppa su tre livelli, è libera su quattro lati ed è inserita in un lotto complessivo di mq 650. Grazie alle dimensioni interne generose e alla disposizione dei vani, è ideale per più nuclei familiari, per famiglie numerose o per un investimento ricettivo di alto livello (B&B o affittacamere). E’ cosi composta: – al piano rialzato, un grande salone impreziosito dal camino, angolo cottura, 4 camere da letto, studio, 2 disimpegni e 2 bagni (mq 160 in totali); – il piano seminterrato, collegato al piano rialzato sia da scala interna che da accesso esterno, ospita una grande e luminosa zona relax/hobby dotata di forno sardo, oltre a tre locali sgombero luminosi e arieggiati e il confortevole terrazzino esterno; – il primo piano (115 mq + esterni) mansardato alto con tetto spiovente, è accessibile internamente dall’ingresso del piano terra, è attualmente un appartamento da ultimare, già tramezzato per una tipologia quadrivano, ma comunque agevolmente personalizzabile. Il piano è arricchito da 3 balconi e da una splendida terrazza a livello panoramica di 26 mq. La casa è circondata da un ampio giardino privato di circa 490 mq: una tela bianca perfetta per realizzare una lussuosa zona solarium con piscina, ideale per chi cerca massima privacy e uno stile di vita all’aria aperta. Per chi ama il mare, in soli 15-20 minuti d’auto si raggiungono le spettacolari spiagge di Muravera, come San Giovanni Torre Salinas,, Porto Corallo e le acque cristalline della rinomata Costa Rei. Chi ama la storia e il trekking si troverà a pochissimi minuti dal fascino senza tempo di Monte Narba, il suggestivo villaggio minerario dell’Ottocento e, nelle immediate vicinanze, dalle millenarie Domus de Janas, i misteriosi siti archeologici scavati nella roccia. Tutto questo senza rinunciare alla comodità. Il centro abitato di San Vito, con tutti i suoi servizi essenziali, si trova a portata di mano. Garage 45mq",
    "publish": true,
    "priceSortable": 300000,
    "availabilityLabel": "Disponibilità da confermare",
    "sourceId": "PCF-006"
  },
  {
    "id": "pcf-008",
    "title": "CHIA - Deliziosa villetta tra mare e montagna",
    "operation": "affitto",
    "city": "Domus de Maria",
    "area": "Chia",
    "price": 500,
    "priceLabel": "€ 500 / settimana · prezzo settimanale da confermare",
    "type": "Villa",
    "bedrooms": 2,
    "bathrooms": 2,
    "sqm": 105,
    "image": "https://prontocasafacile.it/wp-content/uploads/2025/04/20250310_103444-1024x525.jpg",
    "imageAlt": "CHIA - Deliziosa villetta tra mare e montagna",
    "url": "https://prontocasafacile.it/Propriet%C3%A0/villa-bifamiliare/domus-de-maria/chia-deliziosa-villetta-tra-mare-e-montagna/",
    "description": "Situata nella parte meridionale dell’isola, Chia è una frazione del comune di Domus de Maria, in provincia di Cagliari. E’ un susseguirsi di spiagge pittoresche, con colori del mare cristallini, estese dune sabbiose e incantevoli calette rocciose. Tra le meravigliose spiagge da visitare troviamo: Sa Colonia, Porto Campana, su Giudeu, Spartivento, una delle più estese della Sardegna meridionale. Davanti alla spiaggia a brevissima distanza è ubicato l’isolotto su Giudeu facilmente raggiungibile per il fondale basso che lo separa dalla terraferma. Cala Cipolla, raggiungibile solo a piedi, è una piccola spiaggia da dove parte un sentiero che conduce al Faro di Capo Spartivento da cui si domina l’intera costa. Incantevole villetta rosa. Capo schiera su due livelli immersa nel verde e con una vista panoramica sulle montagne, perfetta per chi cerca tranquillità, comfort e la possibilità di raggiungere percorrendo un solo chilometro le meravigliose spiagge di Chia. La casa offre un giardino privato su tre lati, ideale per momenti di relax all’aperto. Al piano terra ci accoglie un luminoso ingresso soggiorno con una comoda cucina abitabile, con zona cottura riservata, un bagno con doccia e un patio meraviglioso dove poter godere appieno la bellezza circostante. Al primo piano, la zona notte comprende due camere da letto, un secondo bagno e due balconi che offrono splendide viste. Gli ambienti sono arredati con mobilio realizzato su misura e corredati di tutti i comforts. L’immobile è idoneo ad ospitare comodamente fino a 4 persone e particolarmente adatto a bambini che desiderano trascorrere momenti all’aria aperta in un luogo sicuro immerso nel verde. La villetta è dotata di pompe di calore e diversi posti auto disponibili che rendono questa proprietà ancora più pratica. La casa è perfetta per chi desidera soggiornare in un ambiente luminoso, nuovo e accogliente. A 800 metri dalle meravigliose spiagge e circa 400 metri dai due markets (Sirio e Mongittu), tabacchino, 500 mt dal ristorante Mirage, 700 mt dal Chiostro (bar, ristorante, pizzeria, rivendita alimentari, macelleria, pescheria). A soli 15 minuti di auto si trovano la turistica cittadina Pula dove ogni sera c’è animazione in piazza con spettacoli musicali e folkloristici e il sito archeologico di Nora visitato da migliaia di turisti all’anno. A circa 10 km il rinomato campo da golf Is Molas. Tra le proposte della zona, suggestive escursioni a cavallo sulle bellissime coste panoramiche ed in prossimità delle spiagge. Da euro 500,00 a settimana ( i prezzi variano in base al periodo). CIN IT111015C2000T3144.",
    "publish": true,
    "priceSortable": 500,
    "availabilityLabel": "Disponibilità da confermare",
    "sourceId": "PCF-008"
  }
];

  window.PCF_PROPERTIES = properties;

  const form = document.querySelector("#catalog-filters");
  const grid = document.querySelector("#catalog-grid");
  const count = document.querySelector("#catalog-count");
  const summary = document.querySelector("#catalog-summary");
  const reset = document.querySelector("#catalog-reset");
  const sort = document.querySelector("#catalog-sort");
  if (!form || !grid || !count || !summary || !reset || !sort) return;

  const params = new URLSearchParams(window.location.search);
  const requestedOperation = params.get("operazione");
  const requestedLocation = params.get("localita");
  const requestedType = params.get("tipologia");
  const requestedMinPrice = params.get("prezzo-min");
  const requestedMaxPrice = params.get("prezzo-max");

  if (["vendita", "affitto"].includes(requestedOperation)) {
    form.elements.operazione.value = requestedOperation;
  }

  if (requestedLocation && [...form.elements.localita.options].some(
    option => option.value === requestedLocation
  )) {
    form.elements.localita.value = requestedLocation;
  }

  if (requestedType && [...form.elements.tipologia.options].some(
    option => option.value === requestedType
  )) {
    form.elements.tipologia.value = requestedType;
  }

  if (requestedMinPrice !== null && /^\d+(?:\.\d+)?$/.test(requestedMinPrice)) {
    form.elements["prezzo-min"].value = requestedMinPrice;
  }

  if (requestedMaxPrice !== null && /^\d+(?:\.\d+)?$/.test(requestedMaxPrice)) {
    form.elements["prezzo-max"].value = requestedMaxPrice;
  }

  const euro = value => new Intl.NumberFormat("it-IT", {
    style: "currency", currency: "EUR", maximumFractionDigits: 0
  }).format(value);
  const selected = name => String(form.elements[name]?.value ?? "").trim();

  function matches(p) {
    const operation = selected("operazione");
    const city = selected("localita");
    const type = selected("tipologia");
    const minPrice = selected("prezzo-min");
    const maxPrice = selected("prezzo-max");
    const beds = selected("camere");
    const baths = selected("bagni");
    const minSqm = selected("mq-min");
    const maxSqm = selected("mq-max");

    if (operation && p.operation !== operation) return false;
    if (city && p.city !== city) return false;
    if (type && p.type !== type) return false;
    if (minPrice && (p.price === null || p.price < Number(minPrice))) return false;
    if (maxPrice && (p.price === null || p.price > Number(maxPrice))) return false;
    if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) return false;
    if (beds && (p.bedrooms === null || p.bedrooms < Number(beds))) return false;
    if (baths && (p.bathrooms === null || p.bathrooms < Number(baths))) return false;
    if (minSqm && (p.sqm === null || p.sqm < Number(minSqm))) return false;
    if (maxSqm && (p.sqm === null || p.sqm > Number(maxSqm))) return false;
    return true;
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function card(p) {
    const operationLabel = p.operation === "vendita" ? "VENDITA" : "LOCAZIONE TURISTICA";
    const facts = [
      p.type || "Tipologia da confermare",
      p.bedrooms !== null ? `${p.bedrooms} camere` : "Camere da confermare",
      p.bathrooms !== null ? `${p.bathrooms} bagni` : "Bagni da confermare",
      p.sqm !== null ? `${p.sqm} m²` : "Superficie da confermare"
    ];
    const price = p.priceLabel || (p.price === null ? "Prezzo da confermare" : euro(p.price));
    const localUrl = p.id === "marina-bay"
      ? p.url
      : `scheda-immobile.html?id=${encodeURIComponent(p.id)}`;
    const description = String(p.description || "");
    const preview = description.length > 165
      ? description.slice(0, 162).trimEnd() + "…"
      : description;

    return `
      <article class="catalog-card">
        <a class="catalog-card-image" href="${escapeHtml(localUrl)}" aria-label="Apri la scheda di ${escapeHtml(p.title)}">
          <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.imageAlt)}" loading="lazy">
          <span class="catalog-badge">${operationLabel}</span>
        </a>
        <div class="catalog-card-body">
          <p class="catalog-location">${escapeHtml(p.area)} · ${escapeHtml(p.city)}</p>
          <h3>${escapeHtml(p.title)}</h3>
          <p class="catalog-price">${escapeHtml(price)}</p>
          <details class="catalog-description-details">
            <summary>Leggi la descrizione completa</summary>
            <p class="catalog-description-preview">${escapeHtml(preview)}</p>
            <p class="catalog-description-full">${escapeHtml(description)}</p>
          </details>
          <div class="catalog-facts">${facts.map(f => `<span>${escapeHtml(f)}</span>`).join("")}</div>
          <p class="catalog-availability">${escapeHtml(p.availabilityLabel || "Disponibilità e dati da confermare")}</p>
          <a class="catalog-card-link" href="${escapeHtml(localUrl)}">
            <span>Scopri la proprietà</span><span aria-hidden="true">→</span>
          </a>
        </div>
      </article>`;
  }

  function render() {
    let results = properties.filter(matches);
    if (sort.value === "prezzo-crescente") {
      results.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    }
    if (sort.value === "prezzo-decrescente") {
      results.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    }

    count.textContent = `${results.length} ${results.length === 1 ? "immobile trovato" : "immobili trovati"}`;
    summary.textContent = results.length
      ? "Consulta gli annunci e contattaci per verificare disponibilità, prezzo e caratteristiche."
      : "Nessun annuncio corrisponde a tutti i filtri selezionati.";

    if (results.length) {
      grid.innerHTML = results.map(card).join("");
    } else {
      grid.innerHTML = `<div class="catalog-empty"><h3>Nessun immobile trovato</h3>
        <p>Prova a modificare i filtri o contattaci per una ricerca mirata.</p>
        <button type="button" id="catalog-empty-reset">Azzera i filtri</button></div>`;
      document.querySelector("#catalog-empty-reset")?.addEventListener("click", clearFilters);
    }
  }

  function clearFilters() {
    form.reset();
    sort.value = "recenti";
    render();
  }

  form.addEventListener("submit", event => { event.preventDefault(); render(); });
  form.addEventListener("change", render);
  sort.addEventListener("change", render);
  reset.addEventListener("click", clearFilters);
  render();
})();