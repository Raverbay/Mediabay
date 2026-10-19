(() => {
  "use strict";

  const config = window.PropertyAdvisorConfig;
  if (!config || document.getElementById("property-advisor-root")) return;

  const lang = document.documentElement.lang.toLowerCase().startsWith("en")
    ? "en" : "it";

  const copy = {
    it: {
      launch: "Consulente immobiliare",
      sublaunch: "Scopri se è la casa giusta per te",
      brand: "PRONTO CASA FACILE · PROPERTY ADVISOR",
      heading: "Parliamo di casa.",
      close: "Chiudi consulente",
      status: "Assistente digitale · Marina Bay",
      welcome: "Ciao, sono il consulente digitale dedicato a Marina Bay. Posso aiutarti a esplorare la proprietà e capire quali informazioni ti servono. Come vorresti iniziare?",
      choices: [
        ["price", "Prezzo e dettagli"],
        ["visit", "Vorrei organizzare una visita"],
        ["fit", "Capire se fa per me"]
      ],
      questions: {
        price: "Il prezzo indicato nella pagina è €200.000. La superficie e la documentazione sono da verificare con l’agenzia. Quale dettaglio vorresti approfondire?",
        visit: "Per organizzare una visita puoi contattare direttamente Pronto Casa Facile al numero +39 351 422 55 83. Se vuoi, prepara anche le domande che vorresti fare durante la visita.",
        fit: "Per capire se questa proprietà potrebbe fare al caso tuo, iniziamo da una cosa: la cerchi come abitazione principale, seconda casa o investimento?",
        primary: "Perfetto. Per valutare la casa come abitazione principale, ti suggerisco di verificare con l’agenzia superficie, distribuzione degli ambienti e documentazione.",
        second: "Una seconda casa vicino al mare può rispondere a esigenze diverse. Conviene chiarire quanto spesso vorresti utilizzarla e quali caratteristiche sono indispensabili per te.",
        investment: "Per valutare un investimento servono dati verificati su costi, condizioni dell’immobile, regole applicabili e possibili ricavi. Non abbiamo ancora dati sufficienti per stimare la redditività.",
        fallback: "Posso aiutarti a orientarti, ma il consulente AI non è ancora collegato. Per informazioni aggiornate o una visita, contatta Pronto Casa Facile al +39 351 422 55 83.",
        placeholder: "Scrivi cosa vorresti sapere…",
        send: "Invia",
        disclaimer: "Assistente automatico basato sul catalogo. Non è un'IA conversazionale; prezzi e disponibilità vanno confermati."
      }
    },
    en: {
      launch: "Property advisor",
      sublaunch: "Discover if this home is right for you",
      brand: "PRONTO CASA FACILE · PROPERTY ADVISOR",
      heading: "Let's talk property.",
      close: "Close advisor",
      status: "Digital assistant · Marina Bay",
      welcome: "Hello, I'm the digital assistant dedicated to Marina Bay. I can help you explore the property and identify the information you need. Where would you like to start?",
      choices: [
        ["price", "Price and details"],
        ["visit", "Arrange a viewing"],
        ["fit", "See if it suits me"]
      ],
      questions: {
        price: "The price shown on the page is €200,000. The floor area and documentation must be confirmed with the agency. What would you like to know more about?",
        visit: "To arrange a viewing, contact Pronto Casa Facile directly on +39 351 422 55 83. You can also prepare any questions you would like to ask during the visit.",
        fit: "To explore whether this property could suit you, let's start here: are you looking for a primary home, a second home or an investment?",
        primary: "For a primary home, I suggest confirming the floor area, room layout and documentation with the agency.",
        second: "A second home near the sea can meet different needs. Consider how often you would use it and which features are essential to you.",
        investment: "Assessing an investment requires verified information about costs, property condition, applicable rules and potential revenue. There is not enough verified data to estimate returns.",
        fallback: "I can help you get oriented, but the AI engine is not connected yet. For current information or a viewing, contact Pronto Casa Facile on +39 351 422 55 83.",
        placeholder: "Ask about the property…",
        send: "Send",
        disclaimer: "Automated catalogue assistant, not a conversational AI. Prices and availability must be confirmed."
      }
    }
  }[lang];

  const root = document.createElement("div");
  root.id = "property-advisor-root";
  root.innerHTML = `
    <div class="pa-quick-menu">
      <a class="pa-quick-action pa-whatsapp" href="https://wa.me/393514225583" target="_blank" rel="noopener noreferrer" aria-label="Contatta su WhatsApp" title="WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3ZM12.1 21.5c-1.7 0-3.4-.5-4.8-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.6 9.6 0 1 1 8.4 4.8Zm5.3-7.2c-.3-.2-1.7-.9-2-.9s-.5-.2-.7.2-.8.9-1 1.1-.4.2-.7.1a7.8 7.8 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.5Z"/></svg>
      </a>
      <button class="pa-quick-action pa-ai-action" type="button" aria-label="Apri assistente AI" title="Assistente AI">
        <span class="pa-launcher-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" focusable="false">
          <path d="M24 5.5 27.5 17 39 20.5 27.5 24 24 35.5 20.5 24 9 20.5 20.5 17 24 5.5Z"/>
          <path d="m37 30 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z"/>
          <path d="m11 5 1.3 3.7L16 10l-3.7 1.3L11 15l-1.3-3.7L6 10l3.7-1.3L11 5Z"/>
        </svg>
      </span>
      <span class="pa-launcher-label">
        <strong>${copy.launch}</strong><small>${copy.sublaunch}</small>
        </span>
      </button>
      <button class="pa-launcher" type="button" aria-expanded="false" aria-controls="pa-panel" aria-label="Apri menu contatti">
        <span class="pa-plus-icon" aria-hidden="true">+</span>
      </button>
    </div>
    <section class="pa-panel" id="pa-panel" role="dialog" aria-label="${copy.heading}" hidden>
      <header class="pa-header">
        <div><div class="pa-brand">${copy.brand}</div><h2 class="pa-heading">${copy.heading}</h2></div>
        <button class="pa-close" type="button" aria-label="${copy.close}">×</button>
      </header>
      <div class="pa-status">${copy.status}</div>
      <div class="pa-messages" aria-live="polite"></div>
      <form class="pa-compose">
        <div class="pa-input-row">
          <input class="pa-input" name="message" maxlength="800" autocomplete="off" placeholder="${copy.placeholder}" aria-label="${copy.placeholder}" required>
          <button class="pa-send" type="submit" aria-label="${copy.send}">↑</button>
        </div>
        <p class="pa-disclaimer">${copy.disclaimer}</p>
      </form>
    </section>`;

  document.body.appendChild(root);

  const launcher = root.querySelector(".pa-launcher");
  const aiAction = root.querySelector(".pa-ai-action");
  const panel = root.querySelector(".pa-panel");
  const close = root.querySelector(".pa-close");
  const messages = root.querySelector(".pa-messages");
  const form = root.querySelector(".pa-compose");
  const input = root.querySelector(".pa-input");
  const disclaimer = root.querySelector(".pa-disclaimer");

  // Difesa da eventuali valori mancanti nella UI.
  input.placeholder = copy.placeholder || "Scrivi cosa vorresti sapere…";
  input.setAttribute("aria-label", copy.placeholder || "Scrivi cosa vorresti sapere…");
  form.querySelector(".pa-send").setAttribute("aria-label", copy.send || "Invia");
  disclaimer.textContent = copy.disclaimer ||
    "Assistente automatico basato sul catalogo. Non è un assistente AI conversazionale; prezzi e disponibilità vanno confermati.";

  function addMessage(text, user = false) {
    const item = document.createElement("div");
    item.className = "pa-message" + (user ? " pa-user" : "");
    item.textContent = text;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
    return item;
  }

  function addChoices(choices) {
    const group = document.createElement("div");
    group.className = "pa-actions";
    choices.forEach(([key, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pa-action";
      button.textContent = label;
      button.addEventListener("click", () => choose(key, label));
      group.appendChild(button);
    });
    messages.appendChild(group);
  }

  function choose(key, label) {
    addMessage(label, true);
    const answer = copy.questions[key] || copy.questions.fallback;
    addMessage(answer);

    if (key === "fit") {
      addChoices([
        ["primary", lang === "it" ? "Abitazione principale" : "Primary home"],
        ["second", lang === "it" ? "Seconda casa" : "Second home"],
        ["investment", lang === "it" ? "Investimento" : "Investment"]
      ]);
    }
  }

  function openPanel() {
    panel.hidden = false;
    root.classList.add("pa-open");
    launcher.setAttribute("aria-expanded", "true");
    if (!messages.dataset.started) {
      messages.dataset.started = "1";
      addMessage(copy.welcome);
      addChoices(copy.choices);
    }
    input.focus();
  }

  function closePanel() {
    panel.hidden = true;
    root.classList.remove("pa-open");
    launcher.setAttribute("aria-expanded", "false");
    launcher.focus();
  }

  launcher.addEventListener("click", () => {
    const expanded = root.classList.toggle("pa-menu-open");
    launcher.setAttribute("aria-expanded", String(expanded));
    launcher.setAttribute("aria-label", expanded ? "Chiudi menu contatti" : "Apri menu contatti");
  });

  aiAction.addEventListener("click", () => {
    root.classList.remove("pa-menu-open");
    launcher.setAttribute("aria-expanded", "false");
    if (panel.hidden) openPanel();
    else closePanel();
  });

  close.addEventListener("click", closePanel);

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  }

  function addContact() {
    const contact = document.createElement("a");
    contact.className = "pa-contact";
    contact.href = "tel:+393514225583";
    contact.textContent = lang === "it"
      ? "Contatta Pronto Casa Facile ↗"
      : "Contact Pronto Casa Facile ↗";
    messages.appendChild(contact);
  }

  function showProperties(items) {
    const heading = document.createElement("div");
    heading.className = "pa-message";
    heading.textContent = lang === "it"
      ? `Ho trovato ${items.length} annunci pertinenti nel catalogo:`
      : `I found ${items.length} matching listings in the catalogue:`;
    messages.appendChild(heading);

    items.slice(0, 5).forEach(property => {
      const card = document.createElement("div");
      card.className = "pa-message pa-property-card";

      const title = document.createElement("strong");
      title.textContent = property.title || "Immobile";
      card.appendChild(title);

      const details = document.createElement("p");
      const features = [
        property.city,
        property.area,
        property.type,
        property.sqm ? `${property.sqm} m²` : "",
        property.bedrooms != null
          ? `${property.bedrooms} ${lang === "it" ? "camere" : "bedrooms"}`
          : "",
        property.priceLabel
      ].filter(Boolean);
      details.textContent = features.join(" · ");
      card.appendChild(details);

      const link = document.createElement("a");
      link.href = property.url || "immobili.html";
      link.textContent = lang === "it" ? "Apri annuncio ↗" : "View listing ↗";
      if (/^https?:\/\//i.test(link.href)) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      card.appendChild(link);
      messages.appendChild(card);
    });

    const note = document.createElement("div");
    note.className = "pa-message";
    note.textContent = lang === "it"
      ? "Prezzi, disponibilità e caratteristiche devono essere confermati con l’agenzia."
      : "Prices, availability and property details must be confirmed with the agency.";
    messages.appendChild(note);
    addContact();
    messages.scrollTop = messages.scrollHeight;
  }

  function answerText(value) {
    const q = normalize(value);

    const agencyTerms = [
      "contatto", "contatti", "telefono", "numero", "email", "agenzia",
      "servizi", "valutazione", "vendere casa", "vendita casa",
      "commissioni", "mutuo", "documenti", "documentazione",
      "contact", "phone", "agency", "services", "valuation",
      "mortgage", "documents", "fees"
    ];

    if (agencyTerms.some(term => q.includes(normalize(term)))) {
      addMessage(lang === "it"
        ? "Pronto Casa Facile offre supporto nella vendita e nella locazione, promozione degli immobili, valutazioni e assistenza documentale. Condizioni e commissioni vanno verificate con l’agenzia. Telefono: +39 351 422 55 83. Email: prontocasafacile@prontocasafacile.it."
        : "Pronto Casa Facile supports property sales and rentals, promotion, valuations and documentation. Terms and fees must be confirmed with the agency. Phone: +39 351 422 55 83. Email: prontocasafacile@prontocasafacile.it.");
      addContact();
      return;
    }

    const properties = Array.isArray(window.PCF_PROPERTIES)
      ? window.PCF_PROPERTIES.filter(p => p && p.publish)
      : [];

    const has = (...terms) => terms.some(term => q.includes(normalize(term)));

    const locations = [
      { names: ["dolianova"], test: p => normalize(p.city) === "dolianova" },
      { names: ["gonnesa"], test: p => normalize(p.city) === "gonnesa" },
      { names: ["assemini"], test: p => normalize(p.city) === "assemini" },
      { names: ["san vito"], test: p => normalize(p.city) === "san vito" },
      { names: ["chia"], test: p => normalize(p.area) === "chia" || normalize(p.title).includes("chia") },
      { names: ["domus de maria"], test: p => normalize(p.city) === "domus de maria" },
      { names: ["quartu sant elena", "quartu sant elena", "quartu"], test: p => normalize(p.city).includes("quartu") }
    ];

    const location = locations.find(loc => loc.names.some(name => {
      const n = normalize(name);
      return new RegExp("(^| )" + n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "( |$)").test(q);
    }));

    const wantsRent = has("affitto", "affittare", "locazione", "rent", "rental");
    const wantsSale = has("vendita", "comprare", "acquistare", "in vendita", "for sale", "buy");
    const operation = wantsRent ? "affitto" : wantsSale ? "vendita" : null;

    const wantsVilla = has("villa", "ville");
    const wantsApartment = has("appartamento", "appartamenti", "trivano", "bilocale", "quadrivano");
    const wantsLand = has("terreno", "terreni", "agricolo", "agricola");
    const wantsIndependent = has("casa indipendente", "semindipendente", "casa singola");

    const asksCatalog = has(
      "immobili", "annunci", "catalogo", "case disponibili", "cerca casa",
      "cerco casa", "cerco un immobile", "appartamenti", "ville", "terreni",
      "affitto", "vendita", "property", "properties", "listings", "catalogue",
      "rent", "for sale", "apartment", "villa"
    ) || !!location || !!operation || wantsVilla || wantsApartment || wantsLand || wantsIndependent;

    const filtered = properties.filter(p => {
      if (location && !location.test(p)) return false;
      if (operation && p.operation !== operation) return false;

      const type = normalize(p.type);
      const title = normalize(p.title);
      const description = normalize(p.description);

      if (wantsVilla && type !== "villa") return false;
      if (wantsApartment && !(type.includes("appartamento") || title.includes("trivano"))) return false;
      if (wantsLand && !(type.includes("terreno") || title.includes("terreno") || description.includes("terreno agricolo"))) return false;
      if (wantsIndependent && !(type.includes("indipendente") || title.includes("indipendente") || title.includes("semindipendente"))) return false;

      // "Casa" indica una proprietà abitativa, non un terreno agricolo.
      if (has("casa", "abitazione", "home", "house") && !wantsLand &&
          (type.includes("terreno") || title.includes("terreno"))) return false;

      return true;
    });

    if (filtered.length) {
      showProperties(filtered);
      return;
    }

    if (asksCatalog) {
      addMessage(lang === "it"
        ? "Non ho trovato annunci che soddisfino tutti i criteri indicati. Prova a cambiare località, tipologia o operazione. Le informazioni disponibili dipendono dal catalogo pubblicato."
        : "I couldn't find listings matching all the criteria. Try changing the location, property type or sale/rental option.");
      addContact();
      return;
    }

    addMessage(copy.questions.fallback);
    addContact();
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    addMessage(value, true);
    input.value = "";
    answerText(value);
  });
})();
