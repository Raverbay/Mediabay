(() => {
  const root = document.getElementById('pcf-video-hero');
  if (!root) return;
  const slides = [...root.querySelectorAll('.pcf-video-slide')];
  const dots = [...root.querySelectorAll('.pcf-video-dot')];
  const count = root.querySelector('.pcf-video-count');
  let current = 0;
  let timer;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    count.textContent = `0${current + 1} / 0${slides.length}`;
  }
  function restart() {
    clearInterval(timer);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = setInterval(() => show(current + 1), 6500);
    }
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => {
    show(i);
    restart();
  }));
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', restart);
  show(0);
  restart();
})();
