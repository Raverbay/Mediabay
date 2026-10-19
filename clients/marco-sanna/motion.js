(() => {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const loader = document.createElement('div');
  loader.className = 'site-loader';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-label', 'Caricamento del sito');

  const inner = document.createElement('div');
  inner.className = 'loader-inner';

  const logo = document.createElement('img');
  logo.className = 'loader-logo';
  logo.src = 'assets/logo-ms.png';
  logo.alt = '';

  const caption = document.createElement('div');
  caption.className = 'loader-caption';
  caption.textContent = 'IL TUO PERCORSO INIZIA QUI';

  const track = document.createElement('div');
  track.className = 'loader-track';

  const progress = document.createElement('span');
  track.appendChild(progress);
  inner.append(logo, caption, track);
  loader.appendChild(inner);

  if (document.body) {
    document.body.prepend(loader);
  }

  function hideLoader() {
    loader.classList.add('is-hidden');
    document.body.classList.add('page-ready');

    window.setTimeout(() => loader.remove(), 750);
  }

  if (document.readyState === 'complete') {
    if (reduceMotion) hideLoader();
    else window.setTimeout(hideLoader, 450);
  } else {
    window.addEventListener('load', () => {
      window.setTimeout(hideLoader, reduceMotion ? 0 : 450);
    }, { once: true });
  }

  document.documentElement.classList.add('js-motion');

  const revealTargets = document.querySelectorAll(
    '.principle .eyebrow, .principle h2, .section-intro, ' +
    '.principles article, .section-heading, .service-card, ' +
    '.start-heading, .lead-form, .location > *'
  );

  revealTargets.forEach((element, index) => {
    element.setAttribute('data-reveal', '');
    element.style.transitionDelay = `${(index % 4) * 70}ms`;
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -35px 0px'
  });

  revealTargets.forEach(el => observer.observe(el));
})();
