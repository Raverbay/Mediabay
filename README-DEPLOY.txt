MEDIABAY v6.0 — DEPLOY DEFINITIVO NETLIFY

Questa è la versione completa del sito pronta per un nuovo deploy.

FORM DEMO
- Netlify Forms: abilitato tramite data-netlify="true"
- Nome form: demo-request
- Metodo: POST
- Honeypot antispam: attivo
- Campo email del visitatore: name="email" (usato da Netlify anche per Reply-To)
- Oggetto notifica: Nuova richiesta Demo MediaBay
- Pagina di conferma: /thank-you/

DOPO IL DEPLOY — UNICA IMPOSTAZIONE DA FARE
1. Apri il nuovo progetto su Netlify.
2. Vai in Project configuration → Notifications → Emails and webhooks.
3. Nella sezione Form submission notifications scegli Email.
4. Inserisci come destinatario:
   Mediabaysardinia@gmail.com
5. Se disponibile, seleziona il form demo-request. In alternativa "Any form" va bene.
6. Salva.

NON SERVONO:
- Formspree
- webhook
- API
- codice server
- JavaScript esterno per l'invio

TEST
1. Apri /demo.html.
2. Invia una richiesta di prova.
3. Devi essere portato a /thank-you/.
4. Controlla Netlify → Forms → demo-request → submissions.
5. Controlla la casella Mediabaysardinia@gmail.com (anche Spam/Promozioni).

IMPORTANTE PER NETLIFY DROP
Estrai lo ZIP e trascina su Netlify Drop la CARTELLA che contiene direttamente index.html, demo.html, contact.html, ecc.
