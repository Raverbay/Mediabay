(() => {
  "use strict";
  const root = document.querySelector("#property-detail");
  if (!root) return;

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const properties = window.PCF_PROPERTIES || [];
  const p = properties.find(item => item.id === id);

  if (!p) {
    root.innerHTML = `
      <section class="detail-error">
        <h1>Immobile non trovato</h1>
        <p>La scheda richiesta non è disponibile nel catalogo.</p>
        <a class="detail-back-button" href="immobili.html">Torna agli immobili</a>
      </section>`;
    return;
  }

  const euro = value => new Intl.NumberFormat("it-IT", {
    style: "currency", currency: "EUR", maximumFractionDigits: 0
  }).format(value);
  const price = p.priceLabel || (p.price == null ? "Prezzo da confermare" : euro(p.price));
  const operation = p.operation === "vendita" ? "IN VENDITA" : "LOCAZIONE TURISTICA";
  const facts = [
    ["Tipologia", p.type || "Da confermare"],
    ["Camere", p.bedrooms == null ? "Da confermare" : p.bedrooms],
    ["Bagni", p.bathrooms == null ? "Da confermare" : p.bathrooms],
    ["Superficie", p.sqm == null ? "Da confermare" : `${p.sqm} m²`]
  ];

  root.innerHTML = `
    <nav class="detail-breadcrumb" aria-label="Percorso">
      <a href="index.html">Home</a><span> / </span><a href="immobili.html">Immobili</a><span> / </span><span>${escapeHtml(p.city)}</span>
    </nav>
    <article class="detail-property">
      <div class="detail-image-wrap">
        <img class="detail-image" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.imageAlt || p.title)}">
        <span class="detail-badge">${operation}</span>
      </div>
      <div class="detail-content">
        <p class="detail-location">${escapeHtml(p.area)} · ${escapeHtml(p.city)}</p>
        <h1>${escapeHtml(p.title)}</h1>
        <p class="detail-price">${escapeHtml(price)}</p>
        <div class="detail-facts">
          ${facts.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
        </div>
        <section class="detail-description">
          <h2>La proprietà</h2>
          <p>${escapeHtml(p.description || "Descrizione da confermare.")}</p>
        </section>
        <p class="detail-availability">${escapeHtml(p.availabilityLabel || "Disponibilità e caratteristiche da confermare con l'agenzia.")}</p>
        <div class="detail-actions">
          <a class="detail-back-button" href="immobili.html">← Torna al catalogo</a>
          <a class="detail-source-link" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">Consulta l'annuncio originale ↗</a>
        </div>
      </div>
    </article>`;
})();
