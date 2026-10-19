(() => {
  const form = document.getElementById('lead-form');
  if (!form) return;

  const steps = [...form.querySelectorAll('fieldset[data-step]')];
  const next = document.getElementById('next-btn');
  const back = document.getElementById('back-btn');
  const label = document.getElementById('step-label');
  const bar = document.getElementById('progress-bar');

  let current = 0;

  // WhatsApp resta disattivato finché Marco non conferma
  // il proprio numero ufficiale.
  const verifiedWhatsAppNumber = '';

  function render() {
    steps.forEach((step, index) => {
      step.hidden = index !== current;
    });

    label.textContent =
      `PASSO ${String(current + 1).padStart(2, '0')} / ${String(steps.length).padStart(2, '0')}`;

    bar.style.width = `${((current + 1) / steps.length) * 100}%`;
    back.hidden = current === 0;

    next.innerHTML = current === steps.length - 1
      ? 'SCOPRI IL TUO PROSSIMO PASSO <span>↗</span>'
      : 'CONTINUA <span>→</span>';
  }

  function getMessage(data) {
    const name = String(data.get('name') || '').trim();
    const goal = String(data.get('goal') || 'Da definire').trim();
    const level = String(data.get('level') || 'Da definire').trim();
    const format = String(data.get('format') || 'Da valutare').trim();
    const time = String(data.get('time') || '').trim();

    return [
      'Ciao Marco! Ho visto la tua presentazione e vorrei informazioni sul tuo percorso di personal training.',
      '',
      name ? `Mi chiamo ${name}.` : '',
      '',
      'Ti racconto da dove parto:',
      `• Il mio obiettivo: ${goal}.`,
      `• Il mio punto di partenza: ${level}.`,
      `• La formula che preferisco: ${format}.`,
      time ? `• La mia disponibilità: ${time}.` : '',
      '',
      'Vorrei capire come potremmo impostare un percorso adatto alle mie esigenze.',
      'Come possiamo iniziare?',
      '',
      'Grazie!'
    ].filter((line, index, array) =>
      line !== '' || (index > 0 && array[index - 1] !== '')
    ).join('\n');
  }

  function addMessagePreview(message) {
    const old = form.querySelector('.message-preview');
    if (old) old.remove();

    const preview = document.createElement('div');
    preview.className = 'message-preview';

    const heading = document.createElement('strong');
    heading.textContent = 'IL TUO MESSAGGIO PER MARCO';

    const intro = document.createElement('p');
    intro.textContent =
      'Hai individuato il tuo punto di partenza. Ecco il messaggio che puoi inviare per chiedere informazioni, senza impegno.';

    const messageBox = document.createElement('textarea');
    messageBox.value = message;
    messageBox.setAttribute('aria-label', 'Messaggio da inviare a Marco');
    messageBox.rows = 9;

    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.className = 'button button-lime';
    copyButton.textContent = 'COPIA IL MESSAGGIO';

    copyButton.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(messageBox.value);
        } else {
          messageBox.focus();
          messageBox.select();
          if (!document.execCommand('copy')) {
            throw new Error('Copia non disponibile');
          }
        }
        copyButton.textContent = 'MESSAGGIO COPIATO ✓';
      } catch {
        messageBox.focus();
        messageBox.select();
        copyButton.textContent = 'SELEZIONA E COPIA IL TESTO';
      }
    });

    const whatsappButton = document.createElement('button');
    whatsappButton.type = 'button';
    whatsappButton.className = 'button';
    whatsappButton.style.marginTop = '10px';

    const number = verifiedWhatsAppNumber.replace(/\D/g, '');

    if (number) {
      whatsappButton.textContent = 'APRI WHATSAPP ↗';
      whatsappButton.addEventListener('click', () => {
        const url = `https://wa.me/${number}?text=${encodeURIComponent(messageBox.value)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    } else {
      whatsappButton.textContent = 'WHATSAPP NON ANCORA ATTIVATO';
      whatsappButton.disabled = true;
      whatsappButton.setAttribute('aria-disabled', 'true');
    }

    const note = document.createElement('small');
    note.textContent = number
      ? 'Controlla il testo: WhatsApp si aprirà e potrai inviare il messaggio manualmente.'
      : 'Questa è una demo. Il contatto WhatsApp sarà attivato soltanto dopo la conferma del numero ufficiale di Marco. Puoi già copiare il messaggio.';

    preview.append(heading, intro, messageBox, copyButton, whatsappButton, note);
    form.appendChild(preview);
    preview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  next.addEventListener('click', () => {
    const active = steps[current];

    for (const field of active.querySelectorAll('[required]')) {
      if (field.type === 'radio') {
        if (!active.querySelector(`input[name="${field.name}"]:checked`)) {
          const first = active.querySelector(`input[name="${field.name}"]`);
          if (first) first.focus();
          return;
        }
      } else if (!field.reportValidity()) {
        return;
      }
    }

    if (current < steps.length - 1) {
      current += 1;
      render();
      return;
    }

    addMessagePreview(getMessage(new FormData(form)));
  });

  back.addEventListener('click', () => {
    if (current > 0) {
      current -= 1;
      render();
    }
  });

  render();
})();
