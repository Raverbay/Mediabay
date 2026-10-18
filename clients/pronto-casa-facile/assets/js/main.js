(() => {
  const form = document.getElementById("visit-form");
  const note = document.getElementById("form-note");

  const topbar = document.querySelector(".site-header");

  function updateTopbar() {
    topbar?.classList.toggle("scrolled", window.scrollY > 40);
  }

  updateTopbar();
  window.addEventListener("scroll", updateTopbar, { passive: true });



  // MARINA BAY — storytelling sincronizzato in secondi reali.
  const heroVideo = document.querySelector(".hero-video");
  let currentLanguage = "it";
  const languageSwitch = document.getElementById("hero-language-switch");

  function getSlideCopy(slide) {
    return slide?.[currentLanguage] || { kicker: "", title: "", description: "" };
  }

  function updateHeroStaticLabels() {
    const en = currentLanguage === "en";
    const heroIndex = document.querySelector(".hero-index");
    const heroBottom = document.querySelector(".hero-bottom");
    const video = document.querySelector(".hero-video");

    if (heroIndex) {
      const labels = heroIndex.querySelectorAll("span");
      if (labels[0]) labels[0].textContent = en ? "MARINA BAY" : "MARINA BAY";
      if (labels[1]) labels[1].textContent = en ? "YOUR PLACE IN SARDINIA" : "IL TUO POSTO IN SARDEGNA";
    }
    if (heroBottom) {
      const labels = heroBottom.querySelectorAll("span");
      if (labels[0]) labels[0].textContent = en
        ? "TERRA MALA · QUARTU SANT’ELENA"
        : "TERRA MALA · QUARTU SANT’ELENA";
      if (labels[1]) labels[1].textContent = en ? "SCROLL TO EXPLORE ↓" : "SCORRI PER ESPLORARE ↓";
    }
    if (video) video.setAttribute("aria-label",
      en ? "Cinematic property video in Sardinia" : "Video panoramico della proprietà in Sardegna");

    languageSwitch?.querySelectorAll("[data-language]").forEach(button => {
      const selected = button.dataset.language === currentLanguage;
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  // MARINA BAY — audio controllato esplicitamente dal visitatore.
  const audioButton = document.getElementById("hero-audio-toggle");
  const audioLabel = audioButton?.querySelector(".hero-audio-label");

  function syncAudioButton() {
    if (!heroVideo || !audioButton || !audioLabel) return;

    const enabled = !heroVideo.muted && heroVideo.volume > 0;
    audioButton.classList.toggle("is-on", enabled);
    audioButton.setAttribute("aria-pressed", String(enabled));
    audioButton.setAttribute(
      "aria-label",
      enabled ? (currentLanguage === "en" ? "Turn sound off" : "Disattiva musica") : (currentLanguage === "en" ? "Turn sound on" : "Attiva musica")
    );
    audioLabel.textContent = enabled ? (currentLanguage === "en" ? "Turn sound off" : "Disattiva musica") : (currentLanguage === "en" ? "Turn sound on" : "Attiva musica");
  }

  if (heroVideo && audioButton) {
    // Preferisce la riproduzione con audio attivo.
    // Il browser può comunque bloccare l'autoplay sonoro.
    heroVideo.defaultMuted = false;
    heroVideo.muted = false;
    heroVideo.volume = 1;
    syncAudioButton();

    // Se il browser blocca l'autoplay con audio, avvia il video
    // in modalità silenziosa e lascia disponibile il controllo audio.
    const initialPlay = heroVideo.play();
    if (initialPlay && typeof initialPlay.catch === "function") {
      initialPlay.catch(() => {
        heroVideo.muted = true;
        heroVideo.play().catch(() => {});
        syncAudioButton();
      });
    }

    audioButton.addEventListener("click", async () => {
      const wasMuted = heroVideo.muted;

      if (wasMuted) {
        heroVideo.muted = false;
        heroVideo.volume = 1;

        try {
          if (heroVideo.paused) await heroVideo.play();
          syncAudioButton();
        } catch (error) {
          heroVideo.muted = true;
          syncAudioButton();
          console.warn("Impossibile attivare l'audio del video:", error);
        }
      } else {
        heroVideo.muted = true;
        syncAudioButton();
      }
    });

    heroVideo.addEventListener("volumechange", syncAudioButton);
  }

  const heroStory = document.getElementById("hero-story");
  const storyKicker = heroStory?.querySelector(".hero-story-kicker");
  const storyTitle = heroStory?.querySelector(".hero-story-title");
  const storyDescription = heroStory?.querySelector(".hero-story-description");
  const storyCta = heroStory?.querySelector(".hero-story-cta");

  const storySlides = [
    {
      at: 0,
      en: { kicker: "SARDINIA · GULF OF CAGLIARI", title: "Some places change<br>the way you see life.", description: "The Mediterranean has a way of making you stay a little longer." },
      it: { kicker: "SARDEGNA · GOLFO DI CAGLIARI", title: "Ci sono luoghi che cambiano<br>il tuo modo di vivere.", description: "Il Mediterraneo ha un modo tutto suo di farti desiderare di restare." },
      final: false
    },
    {
      at: 5,
      en: { kicker: "TERRA MALA · SARDINIA", title: "Sardinia. Naturally extraordinary.", description: "Clear waters, golden light and a culture made to be savoured." },
      it: { kicker: "TERRA MALA · SARDEGNA", title: "Sardegna. Straordinaria, naturalmente.", description: "Acque cristalline, luce dorata e una cultura tutta da assaporare." },
      final: false
    },
    {
      at: 9, blank: true,
      en: { kicker: "", title: "", description: "" },
      it: { kicker: "", title: "", description: "" },
      final: false
    },
    {
      at: 9.5,
      en: { kicker: "INTRODUCING MARINA BAY", title: "Your own corner<br>of the Mediterranean.", description: "Terra Mala · Quartu Sant’Elena · Sardinia" },
      it: { kicker: "SCOPRI MARINA BAY", title: "Il tuo angolo<br>di Mediterraneo.", description: "Terra Mala · Quartu Sant’Elena · Sardegna" },
      final: false
    },
    {
      at: 18.5, blank: true,
      en: { kicker: "", title: "", description: "" },
      it: { kicker: "", title: "", description: "" },
      final: false
    },
    {
      at: 20.5,
      en: { kicker: "INDOOR & OUTDOOR LIVING", title: "Space to share.<br>Room to breathe.", description: "" },
      it: { kicker: "DENTRO E FUORI", title: "Spazi da condividere.<br>Libertà di respirare.", description: "" },
      final: false
    },
    {
      at: 26,
      en: { kicker: "A PRACTICAL, WELCOMING HOME", title: "Everything you need<br>to feel at home.", description: "" },
      it: { kicker: "UNA CASA ACCOGLIENTE", title: "Tutto ciò che serve<br>per sentirsi a casa.", description: "" },
      final: false
    },
    {
      at: 32.5,
      en: { kicker: "YOUR PRIVATE SPACE", title: "A place to slow down<br>and recharge.", description: "A separate double bedroom." },
      it: { kicker: "IL TUO SPAZIO PERSONALE", title: "Il piacere di rallentare<br>e ritrovare il proprio ritmo.", description: "Una camera matrimoniale separata." },
      final: false
    },
    {
      at: 40,
      en: { kicker: "COMFORT & SIMPLICITY", title: "Thoughtful details.<br>Everyday comfort.", description: "" },
      it: { kicker: "COMFORT E SEMPLICITÀ", title: "Dettagli da apprezzare.<br>Comfort quotidiano.", description: "" },
      final: false
    },
    {
      at: 48,
      en: { kicker: "THE TERRACE", title: "Make room for<br>the Mediterranean way of life.", description: "" },
      it: { kicker: "LA TERRAZZA", title: "Lascia spazio<br>allo stile di vita mediterraneo.", description: "" },
      final: false
    },
    {
      at: 55, blank: true,
      en: { kicker: "", title: "", description: "" },
      it: { kicker: "", title: "", description: "" },
      final: false
    },
    {
      at: 56,
      en: { kicker: "TERRA MALA · QUARTU SANT’ELENA", title: "Sea, sunlight<br>and the soul of Sardinia.", description: "A Mediterranean setting to make your own." },
      it: { kicker: "TERRA MALA · QUARTU SANT’ELENA", title: "Il mare, la luce<br>e l’anima della Sardegna.", description: "Un luogo mediterraneo da sentire proprio." },
      final: false
    },
    {
      at: 65,
      en: {
        kicker: "30 METRES FROM THE SEA",
        title: "Just 30 metres<br>from the sea.",
        description: "Your opportunity in Sardinia."
      },
      it: {
        kicker: "A 30 METRI DAL MARE",
        title: "A soli 30 metri<br>dal mare.",
        description: "La tua opportunità in Sardegna."
      },
      final: false
    },
        {
      at: 77,
      en: { kicker: "PROPERTY FOR SALE", title: "MARINA BAY", description: "Your place in Sardinia. · €200,000", cta: "Discover the property · Arrange your viewing" },
      it: { kicker: "PROPRIETÀ IN VENDITA", title: "MARINA BAY", description: "Il tuo posto in Sardegna. · €200.000", cta: "Scopri la proprietà · Prenota una visita" },
      final: true
    }
  ];

  let activeStoryIndex = -1;
  let storyFadeTimer = null;
  let storyChangeTimer = null;

  function updateHeroStory() {
    if (!heroVideo || !heroStory || !storyTitle || !storyKicker ||
        !storyDescription) return;

    // Se i metadati non sono ancora pronti, mostra la prima scena
    // invece di lasciare il contenitore nascosto.
    if (!Number.isFinite(heroVideo.duration) || heroVideo.duration <= 0) {
      if (activeStoryIndex === -1) {
        const firstSlide = storySlides[0];
        const firstCopy = getSlideCopy(firstSlide);
        storyKicker.textContent = firstCopy.kicker;
        storyTitle.innerHTML = firstCopy.title;
        storyDescription.textContent = firstCopy.description;
        storyCta?.classList.toggle("is-visible", firstSlide.final === true);
        heroStory.classList.remove(
          "is-story-waiting", "is-changing", "is-faded"
        );
        heroStory.classList.add("is-entering");
        activeStoryIndex = 0;
      }
      return;
    }

    heroStory.classList.remove("is-story-waiting");
    const currentTime = heroVideo.currentTime;

    let nextIndex = 0;
    for (let i = 0; i < storySlides.length; i++) {
      if (currentTime >= storySlides[i].at) nextIndex = i;
      else break;
    }

    if (nextIndex === activeStoryIndex) return;
    activeStoryIndex = nextIndex;

    const slide = storySlides[nextIndex];
    const isFinalSlide = slide.final === true;
    const copy = getSlideCopy(slide);

    clearTimeout(storyFadeTimer);
    clearTimeout(storyChangeTimer);

    heroStory.classList.remove("is-story-empty");
    heroStory.classList.remove("is-entering", "is-faded");
    heroStory.classList.add("is-changing");

    storyChangeTimer = window.setTimeout(() => {
      storyKicker.textContent = copy.kicker;
      storyTitle.innerHTML = copy.title;
      storyDescription.textContent = copy.description;
      const ctaLabel = storyCta?.querySelector("span");
      if (ctaLabel) ctaLabel.textContent = copy.cta || (currentLanguage === "en" ? "Discover the property" : "Scopri la proprietà");
      storyCta?.classList.toggle("is-visible", isFinalSlide);

      if (slide.blank) {
        heroStory.classList.remove("is-changing", "is-entering", "is-faded");
        heroStory.classList.add("is-story-empty");
        return;
      }

      heroStory.classList.remove("is-changing");
      void heroStory.offsetWidth;
      heroStory.classList.add("is-entering");

      if (!isFinalSlide) {
        const nextSlide = storySlides[nextIndex + 1];
        const secondsUntilNext = nextSlide
          ? nextSlide.at - slide.at
          : 6;

        // Dissolvenza discreta poco prima della scena successiva.
        const fadeDelay = Math.max(1800, (secondsUntilNext - 0.8) * 1000);

        storyFadeTimer = window.setTimeout(() => {
          heroStory.classList.remove("is-entering");
          heroStory.classList.add("is-faded");
        }, fadeDelay);
      }
    }, 220);
  }


  function applyIntroLanguage() {
    const copy = currentLanguage === "it" ? {
      section: "IL LUOGO",
      eyebrow: "OLTRE LA DESTINAZIONE",
      title: "Non solo un luogo da possedere.<br>Un luogo da <em>vivere.</em>",
      p1: "Ci sono proprietà che offrono più di uno spazio: offrono un modo diverso di vivere il proprio tempo. A Terra Mala, nel territorio di Quartu Sant’Elena, Marina Bay ti avvicina al mare e al carattere autentico della Sardegna.",
      p2: "A soli 30 metri dal mare, questa proprietà rinnovata e arredata invita a immaginare una seconda casa mediterranea, un rifugio personale o un immobile da valutare per gli affitti turistici, nel rispetto delle regole e delle condizioni applicabili.",
      cta: "ESPLORA LA PROPRIETÀ"
    } : {
      section: "THE LOCATION",
      eyebrow: "BEYOND THE DESTINATION",
      title: "Not just a place to own.<br>A place to <em>experience.</em>",
      p1: "Some properties offer more than a space: they offer a different way to experience your time. In Terra Mala, in the area of Quartu Sant’Elena, Marina Bay brings you closer to the sea and to the authentic character of Sardinia.",
      p2: "Just 30 metres from the sea, this renovated and furnished property invites you to imagine a Mediterranean second home, a personal retreat or a property to evaluate for tourist rentals, subject to applicable rules and conditions.",
      cta: "EXPLORE THE PROPERTY"
    };

    const setText = (id, value) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    };

    setText("intro-section-label", copy.section);
    setText("intro-eyebrow", copy.eyebrow);
    setText("intro-paragraph-1", copy.p1);
    setText("intro-paragraph-2", copy.p2);

    const title = document.getElementById("intro-title");
    if (title) title.innerHTML = copy.title;



    document.documentElement.lang = currentLanguage;
  }

  function applyLanguage(language) {
    currentLanguage = language === "it" ? "it" : "en";
    applyIntroLanguage();
    updateHeroStaticLabels();
    if (heroVideo && heroStory && storySlides.length) {
      let index = 0;
      for (let i = 0; i < storySlides.length; i++) {
        if (heroVideo.currentTime >= storySlides[i].at) index = i;
        else break;
      }
      activeStoryIndex = -1;
      clearTimeout(storyFadeTimer);
      clearTimeout(storyChangeTimer);
      updateHeroStory();
    }
    syncAudioButton();
  }

  languageSwitch?.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });
  updateHeroStaticLabels();
  applyIntroLanguage();

  heroVideo?.addEventListener("timeupdate", updateHeroStory);
  heroVideo?.addEventListener("loadedmetadata", updateHeroStory);
  heroVideo?.addEventListener("seeked", updateHeroStory);
  heroVideo?.addEventListener("play", updateHeroStory);
  heroVideo?.addEventListener("ended", updateHeroStory);
  heroVideo?.addEventListener("loadeddata", updateHeroStory);
  heroVideo?.addEventListener("canplay", updateHeroStory);
  window.addEventListener("pageshow", updateHeroStory);

  function resetHeroStoryOnReplay() {
    if (!heroVideo || heroVideo.currentTime >= 0.5) return;

    activeStoryIndex = -1;
    clearTimeout(storyFadeTimer);
    clearTimeout(storyChangeTimer);

    heroStory?.classList.remove(
      "is-entering",
      "is-faded",
      "is-changing"
    );

    updateHeroStory();
  }

  heroVideo?.addEventListener("play", resetHeroStoryOnReplay);
  heroVideo?.addEventListener("seeked", () => {
    if (heroVideo.currentTime < 0.5) resetHeroStoryOnReplay();
  });


  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent("Richiesta informazioni — Casa a Terra Mala");
    const body = encodeURIComponent(
      "Richiesta informazioni sulla proprietà a Terra Mala\n\n" +
      "Nome: " + name + "\n" +
      "Email: " + email + "\n" +
      "Telefono: " + (phone || "Non indicato") + "\n\n" +
      "Messaggio:\n" + (message || "Vorrei ricevere informazioni sulla proprietà.") +
      "\n\nConsenso al ricontatto: sì"
    );

    note.textContent = "Si sta aprendo la tua app email. Controlla il messaggio e premi Invia per inoltrare la richiesta.";
    window.location.href =
      "mailto:prontocasafacile@prontocasafacile.it?subject=" + subject + "&body=" + body;
  });
})();

/* EXPERIENCE 2.0 — SCROLL REVEAL + PHOTO LIGHTBOX */
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealTargets = document.querySelectorAll(
    ".intro, .landscape, .gallery-heading, .gallery-item, .pine-overlay, .tour, .facts, .contact"
  );

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(el => el.classList.add("is-revealed"));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    revealTargets.forEach(el => {
      el.classList.add("experience-reveal");
      revealObserver.observe(el);
    });
  }

  const figures = [...document.querySelectorAll(".gallery-grid .gallery-item")];
  if (!figures.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "gallery-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Galleria fotografica");
  lightbox.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Chiudi galleria">×</button>' +
    '<button class="lightbox-prev" type="button" aria-label="Fotografia precedente">‹</button>' +
    '<img alt="">' +
    '<button class="lightbox-next" type="button" aria-label="Fotografia successiva">›</button>' +
    '<div class="lightbox-count"></div>';
  document.body.appendChild(lightbox);

  const image = lightbox.querySelector("img");
  const count = lightbox.querySelector(".lightbox-count");
  const close = lightbox.querySelector(".lightbox-close");
  const previous = lightbox.querySelector(".lightbox-prev");
  const next = lightbox.querySelector(".lightbox-next");
  let activeIndex = 0;
  let touchStartX = null;
  let previousFocus = null;

  function showImage(index) {
    activeIndex = (index + figures.length) % figures.length;
    const source = figures[activeIndex].querySelector("img");
    image.src = source.currentSrc || source.src;
    image.alt = source.alt || "Fotografia della proprietà";
    count.textContent = String(activeIndex + 1).padStart(2, "0") +
      " / " + String(figures.length).padStart(2, "0");
  }

  function openGallery(index) {
    previousFocus = document.activeElement;
    showImage(index);
    lightbox.classList.add("is-open");
    document.body.classList.add("lightbox-open");
    close.focus();
  }

  function closeGallery() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    image.removeAttribute("src");
    previousFocus?.focus();
  }

  figures.forEach((figure, index) => {
    figure.setAttribute("role", "button");
    figure.setAttribute("tabindex", "0");
    figure.setAttribute("aria-label", "Apri fotografia " + (index + 1));
    figure.addEventListener("click", () => openGallery(index));
    figure.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGallery(index);
      }
    });
  });

  close.addEventListener("click", closeGallery);
  previous.addEventListener("click", () => showImage(activeIndex - 1));
  next.addEventListener("click", () => showImage(activeIndex + 1));

  lightbox.addEventListener("touchstart", event => {
    if (event.touches.length === 1) touchStartX = event.touches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener("touchend", event => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 50) showImage(activeIndex + (delta < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeGallery();
  });
  document.addEventListener("keydown", event => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowRight") showImage(activeIndex + 1);
    if (event.key === "ArrowLeft") showImage(activeIndex - 1);
  });
})();



/* GALLERY V2 — fotografia singola e selezione diretta */
(() => {
  const root = document.querySelector(".gallery-v2");
  if (!root) return;

  const photos = [
    {
      src: "assets/immobile-quartu/image-256.png",
      alt: "Zona giorno della casa",
      title: "La zona giorno",
      description: "Luce naturale e spazi da vivere e condividere secondo il tuo ritmo."
    },
    {
      src: "assets/immobile-quartu/image-215.png",
      alt: "Seconda vista degli interni",
      title: "Gli interni",
      description: "Una seconda prospettiva per scoprire la disposizione degli spazi."
    },
    {
      src: "assets/immobile-quartu/image-295.png",
      alt: "Camera da letto",
      title: "La camera",
      description: "Uno spazio dedicato al riposo e alla tranquillità."
    },
    {
      src: "assets/immobile-quartu/image-292.png",
      alt: "Bagno della casa",
      title: "Il bagno",
      description: "Un dettaglio degli ambienti che accompagnano la vita quotidiana."
    }
  ];

  const mainButton = root.querySelector(".gallery-v2-main");
  const mainImage = mainButton.querySelector("img");
  const count = root.querySelector(".gallery-v2-count");
  const title = root.querySelector(".gallery-v2-caption h3");
  const description = root.querySelector(".gallery-v2-caption p");
  const thumbs = [...root.querySelectorAll("[data-photo]")];
  let active = 0;
  let overlay = null;

  function select(index) {
    active = (index + photos.length) % photos.length;
    const photo = photos[active];
    mainImage.src = photo.src;
    mainImage.alt = photo.alt;
    count.textContent = String(active + 1).padStart(2, "0") + " / 04";
    title.textContent = photo.title;
    description.textContent = photo.description;

    thumbs.forEach((button, i) => {
      const selected = i === active;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    if (overlay?.classList.contains("is-open")) updateOverlay();
  }

  thumbs.forEach((button, i) =>
    button.addEventListener("click", () => select(i))
  );

  root.querySelectorAll("[data-step]").forEach(button => {
    button.addEventListener("click", () =>
      select(active + Number(button.dataset.step))
    );
  });

  function createOverlay() {
    if (overlay) return;
    overlay = document.createElement("div");
    overlay.className = "gallery-v2-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Fotografia ingrandita");
    overlay.innerHTML = `
      <button type="button" data-close aria-label="Chiudi">×</button>
      <button type="button" data-prev aria-label="Foto precedente">‹</button>
      <img alt="">
      <button type="button" data-next aria-label="Foto successiva">›</button>
      <p></p>`;
    document.body.appendChild(overlay);
    overlay.querySelector("[data-close]").addEventListener("click", closeOverlay);
    overlay.querySelector("[data-prev]").addEventListener("click", () => select(active - 1));
    overlay.querySelector("[data-next]").addEventListener("click", () => select(active + 1));
    overlay.addEventListener("click", event => {
      if (event.target === overlay) closeOverlay();
    });
    let startX = null;
    overlay.addEventListener("touchstart", event => {
      startX = event.touches[0].clientX;
    }, {passive:true});
    overlay.addEventListener("touchend", event => {
      if (startX === null) return;
      const delta = event.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 45) select(active + (delta < 0 ? 1 : -1));
      startX = null;
    }, {passive:true});
  }

  function updateOverlay() {
    const photo = photos[active];
    overlay.querySelector("img").src = photo.src;
    overlay.querySelector("img").alt = photo.alt;
    overlay.querySelector("p").textContent =
      String(active + 1).padStart(2, "0") + " / 04 — " + photo.title;
  }

  function openOverlay() {
    createOverlay();
    updateOverlay();
    overlay.classList.add("is-open");
    document.body.classList.add("lightbox-open");
    overlay.querySelector("[data-close]").focus();
  }

  function closeOverlay() {
    overlay?.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    mainButton.focus();
  }

  mainButton.addEventListener("click", openOverlay);
  document.addEventListener("keydown", event => {
    if (!overlay?.classList.contains("is-open")) return;
    if (event.key === "Escape") closeOverlay();
    if (event.key === "ArrowRight") select(active + 1);
    if (event.key === "ArrowLeft") select(active - 1);
  });

  select(0);
})();

/* PROPERTY SHARING */
(() => {
  const button = document.getElementById("share-property");
  if (!button) return;
  button.addEventListener("click", async () => {
    const shareData = {
      title: document.title,
      text: "Scopri questa proprietà a Terra Mala con Pronto Casa Facile.",
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareData.url);
        button.textContent = "Link copiato ✓";
      } else {
        window.prompt("Copia il link della proprietà:", shareData.url);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        window.prompt("Copia il link della proprietà:", shareData.url);
      }
    }
  });
})();

/* FAQ ACCORDION */
(() => {
  const items = [...document.querySelectorAll("#domande .facts-list .fact")];
  if (!items.length) return;

  items.forEach(item => {
    const button = item.querySelector(".fact-question");
    const answer = item.querySelector(".fact-answer");
    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const shouldOpen = button.getAttribute("aria-expanded") !== "true";

      items.forEach(other => {
        const otherButton = other.querySelector(".fact-question");
        const otherAnswer = other.querySelector(".fact-answer");
        if (!otherButton || !otherAnswer) return;
        const isCurrent = other === item;
        other.classList.toggle("is-open", isCurrent && shouldOpen);
        otherButton.setAttribute("aria-expanded", String(isCurrent && shouldOpen));
        otherAnswer.hidden = !(isCurrent && shouldOpen);
      });
    });
  });
})();

/* MARINA BAY AUTOPLAY V1 */
(() => {
  document.querySelectorAll("[data-marina-slideshow]").forEach(slideshow => {
    const slides = Array.from(slideshow.querySelectorAll(".marina-slide"));
    if (slides.length < 2) return;

    let active = Math.max(0, slides.findIndex(slide =>
      slide.classList.contains("is-active")
    ));

    const show = index => {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const selected = i === active;
        slide.classList.toggle("is-active", selected);
        slide.setAttribute("aria-hidden", String(!selected));
      });
    };

    show(active);

    // Una fotografia nuova ogni due secondi, senza pulsanti o indicatori.
    window.setInterval(() => {
      if (document.hidden) return;
      show(active + 1);
    }, 2000);
  });
})();
