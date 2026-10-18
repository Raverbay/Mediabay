(() => {
  "use strict";

  const loader = document.getElementById("pcf-preloader");
  if (!loader) return;

  let hidden = false;
  const startedAt = performance.now();
  const MAX_DURATION = 1500;

  function hideLoader() {
    if (hidden) return;
    hidden = true;
    loader.classList.add("pcf-loader-hidden");
    document.documentElement.classList.remove("pcf-loading");

    window.setTimeout(() => loader.remove(), 300);
  }

  function finish() {
    const elapsed = performance.now() - startedAt;
    const remaining = Math.max(0, Math.min(500, MAX_DURATION - elapsed));
    window.setTimeout(hideLoader, remaining);
  }

  if (document.readyState === "complete") {
    finish();
  } else {
    window.addEventListener("load", finish, { once: true });
  }

  // Non lasciare mai il preloader bloccato se una risorsa tarda.
  window.setTimeout(hideLoader, MAX_DURATION);
})();
