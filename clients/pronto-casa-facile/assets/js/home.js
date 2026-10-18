(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Apri menu');
      document.body.classList.remove('menu-open');
    };

    toggle.addEventListener('click', () => {
      const opening = !nav.classList.contains('open');
      nav.classList.toggle('open', opening);
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.setAttribute('aria-label', opening ? 'Chiudi menu' : 'Apri menu');
      document.body.classList.toggle('menu-open', opening);
    });

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  document.querySelectorAll('[data-intent]').forEach(link => {
    link.addEventListener('click', () => {
      const select = document.querySelector('#intent');
      if (select) {
        const desired = link.dataset.intent;
        const option = [...select.options].find(item => item.text.trim() === desired);
        if (option) select.value = option.value;
      }
    });
  });

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const subject = `Richiesta dal sito — ${data.get('intent')}`;
      const body = [
        `Tipo di richiesta: ${data.get('intent')}`,
        `Nome: ${data.get('name')}`,
        `Telefono: ${data.get('phone') || 'Non indicato'}`,
        `Email: ${data.get('email')}`,
        '',
        'Messaggio:',
        data.get('message')
      ].join('\n');

      if (status) {
        status.textContent = 'Apertura del programma email. Controlla la bozza prima di inviarla.';
      }
      window.location.href =
        `mailto:prontocasafacile@prontocasafacile.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();

/* PCF — STICKY HEADER SCROLL STATE */
(() => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let scheduled = false;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
    scheduled = false;
  };

  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateHeader);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("pageshow", updateHeader);
  updateHeader();
})();


/* PCF HOME FINDER V2 — slide flow */
(() => {
  const root = document.querySelector('#pcf-home-finder');
  if (!root || root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';

  const choices = [...root.querySelectorAll('.pcf-intent')];
  const screens = [...root.querySelectorAll('.pcf-flow-screen')];
  const back = root.querySelector('#pcf-flow-back');
  const next = root.querySelector('#pcf-finder-submit');
  const hint = root.querySelector('#pcf-flow-hint');
  const areaGrid = root.querySelector('#pcf-area-grid');
  const budgetGrid = root.querySelector('#pcf-budget-grid');
  const budgetCopy = root.querySelector('#pcf-budget-copy');

  let step = 1;
  let intent = 'vendita';
  let area = '';
  let budget = '';

  function showStep(n) {
    step = n;
    screens.forEach(screen => {
      const active = Number(screen.dataset.screen) === n;
      screen.hidden = !active;
      screen.classList.toggle('is-active', active);
    });
    back.hidden = n === 1;
    next.disabled = (n === 1) || (n === 2 && !area) || (n === 3 && !budget);
    next.innerHTML = n === 3
      ? 'Mostrami le soluzioni <span aria-hidden="true">↗</span>'
      : 'Continua <span aria-hidden="true">↗</span>';
    hint.textContent = n === 1
      ? 'Scegli una delle quattro opzioni qui sopra.'
      : n === 2
        ? 'Puoi tornare indietro e cambiare scelta.'
        : 'Ultimo passaggio: scegli la fascia di budget.';
  }

  function selectOption(grid, attr, value) {
    [...grid.querySelectorAll('.pcf-flow-option')].forEach(button => {
      const selected = button.dataset[attr] === value;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  choices.forEach(button => {
    button.addEventListener('click', () => {
      intent = button.dataset.intent;

      choices.forEach(item => {
        const selected = item === button;
        item.classList.toggle('is-selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });

      if (intent === 'vendi' || intent === 'aiuto') {
        const target = document.querySelector('#contatti');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.href = 'index.html#contatti';
        }
        return;
      }

      area = '';
      budget = '';
      selectOption(areaGrid, 'area', '');
      selectOption(budgetGrid, 'budget', '');

      budgetCopy.textContent = intent === 'affitto'
        ? 'Scegli la fascia di canone mensile.'
        : 'Scegli la fascia di prezzo.';

      const labels = intent === 'affitto'
        ? ['Fino a €500/mese', '€500–€1.000/mese', 'Oltre €1.000/mese']
        : ['Fino a €100.000', '€100.000–€300.000', 'Oltre €300.000'];

      [...budgetGrid.querySelectorAll('.pcf-flow-option')].forEach((item, i) => {
        item.textContent = labels[i];
      });

      showStep(2);
    });
  });

  areaGrid.querySelectorAll('.pcf-flow-option').forEach(button => {
    button.addEventListener('click', () => {
      area = button.dataset.area;
      selectOption(areaGrid, 'area', area);
      next.disabled = false;
      hint.textContent = 'Zona selezionata: ' + area;
    });
  });

  budgetGrid.querySelectorAll('.pcf-flow-option').forEach(button => {
    button.addEventListener('click', () => {
      budget = button.dataset.budget;
      selectOption(budgetGrid, 'budget', budget);
      next.disabled = false;
      hint.textContent = 'Fascia di budget selezionata.';
    });
  });

  back.addEventListener('click', () => {
    showStep(Math.max(1, step - 1));
  });

  next.addEventListener('click', () => {
    if (intent === 'vendi' || intent === 'aiuto') {
      const target = document.querySelector('#contatti');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.location.href = 'index.html#contatti';
      return;
    }
    if (step === 2 && area) {
      showStep(3);
      return;
    }
    if (step !== 3 || !area || !budget) return;

    const params = new URLSearchParams();
    params.set('operazione', intent);
    params.set('localita', area);
    const ranges = intent === 'affitto'
      ? { low: ['0', '500'], mid: ['500', '1000'], high: ['1000', ''] }
      : { low: ['0', '100000'], mid: ['100000', '300000'], high: ['300000', ''] };
    const range = ranges[budget];
    if (range[0]) params.set('prezzo-min', range[0]);
    if (range[1]) params.set('prezzo-max', range[1]);
    window.location.href = 'immobili.html?' + params.toString();
  });

  showStep(1);
})();


/* PCF CUSTOM SELECT V1 — native-select replacement */
(() => {
  const root = document.querySelector('#pcf-home-finder');
  if (!root || root.dataset.customSelectsReady === 'true') return;
  root.dataset.customSelectsReady = 'true';

  const selects = [...root.querySelectorAll('#pcf-type, #pcf-location')];
  const instances = [];

  function closeAll(except) {
    instances.forEach(item => {
      if (item === except) return;
      item.panel.hidden = true;
      item.trigger.setAttribute('aria-expanded', 'false');
    });
  }

  selects.forEach((select, index) => {
    const label = select.closest('.pcf-finder-field');
    if (!label) return;

    const wrap = document.createElement('div');
    wrap.className = 'pcf-select-wrap';

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'pcf-select-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.id = `${select.id}-trigger`;

    const panel = document.createElement('div');
    panel.className = 'pcf-select-panel';
    panel.hidden = true;
    panel.id = `${select.id}-panel`;
    panel.setAttribute('role', 'listbox');
    panel.setAttribute('aria-label', select.id === 'pcf-location' ? 'Scegli la località' : 'Scegli la tipologia');
    trigger.setAttribute('aria-controls', panel.id);

    select.classList.add('pcf-select-native');
    select.setAttribute('tabindex', '-1');
    select.setAttribute('aria-hidden', 'true');

    select.parentNode.insertBefore(wrap, select);
    wrap.append(trigger, panel);
    wrap.append(select);

    const options = [...select.options].map((option, optionIndex) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'pcf-select-option';
      button.setAttribute('role', 'option');
      button.textContent = option.textContent;
      button.dataset.value = option.value;

      button.addEventListener('click', () => {
        select.value = option.value;
        select.dispatchEvent(new Event('change', { bubbles: true }));
        update();
        panel.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      });

      panel.append(button);
      return { option, button, optionIndex };
    });

    function update() {
      const current = select.options[select.selectedIndex];
      trigger.textContent = current ? current.textContent : 'Seleziona';
      options.forEach(({ option, button }) => {
        button.setAttribute('aria-selected', String(option.value === select.value));
      });
    }

    trigger.addEventListener('click', () => {
      const opening = panel.hidden;
      closeAll();
      panel.hidden = !opening;
      trigger.setAttribute('aria-expanded', String(opening));
      if (opening) {
        update();
        const selected = options.find(item => item.option.value === select.value);
        if (selected) selected.button.scrollIntoView({ block: 'nearest' });
      }
    });

    trigger.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        panel.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
      }
      if (event.key === 'ArrowDown' && panel.hidden) {
        event.preventDefault();
        trigger.click();
        panel.querySelector('[aria-selected="true"]')?.focus();
      }
    });

    panel.addEventListener('keydown', event => {
      const buttons = [...panel.querySelectorAll('.pcf-select-option')];
      const current = buttons.indexOf(document.activeElement);
      if (event.key === 'Escape') {
        panel.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        buttons[Math.min(current + 1, buttons.length - 1)]?.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        buttons[Math.max(current - 1, 0)]?.focus();
      }
    });

    select.addEventListener('change', update);
    const instance = { trigger, panel };
    instances.push(instance);
    update();
  });

  document.addEventListener('click', event => {
    if (root.contains(event.target)) {
      const insidePanel = instances.some(item => item.panel.contains(event.target));
      const insideTrigger = instances.some(item => item.trigger.contains(event.target));
      if (!insidePanel && !insideTrigger) closeAll();
      return;
    }
    closeAll();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeAll();
  });
})();
