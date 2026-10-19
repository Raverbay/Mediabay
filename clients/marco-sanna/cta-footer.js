(() => {
  const cta = document.querySelector('.mobile-cta');
  const footer = document.querySelector('.footer');
  if (!cta || !footer) return;

  const mobile = window.matchMedia('(max-width: 800px)');
  let ticking = false;

  function update() {
    ticking = false;

    if (!mobile.matches) {
      cta.classList.remove('cta-before-footer');
      cta.style.removeProperty('--cta-footer-top');
      return;
    }

    const footerRect = footer.getBoundingClientRect();
    const ctaHeight = cta.getBoundingClientRect().height;
    const overlaps = footerRect.top < window.innerHeight &&
                     footerRect.bottom > 0;

    if (overlaps) {
      const documentTop = footerRect.top + window.scrollY - ctaHeight;
      cta.style.setProperty('--cta-footer-top', `${documentTop}px`);
      cta.classList.add('cta-before-footer');
    } else {
      cta.classList.remove('cta-before-footer');
      cta.style.removeProperty('--cta-footer-top');
    }
  }

  function scheduleUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  mobile.addEventListener('change', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  scheduleUpdate();
})();
