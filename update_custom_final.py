from pathlib import Path
import re

ROOT = Path.home() / "Mediabay"
FILE = ROOT / "custom.html"

if not FILE.exists():
    raise SystemExit(f"ERRORE: {FILE} non esiste. Controlla ~/Mediabay.")

s = FILE.read_text(encoding="utf-8")

def replace_once(pattern, replacement, label):
    global s
    new, n = re.subn(pattern, replacement, s, count=1, flags=re.S)
    if n != 1:
        raise SystemExit(f"ERRORE: blocco '{label}' non trovato. Nessuna modifica salvata.")
    s = new

hero = r"""<section class="page-hero">
<div class="hero-content">
<div class="eyebrow">CUSTOM · SU MISURA</div>
<h1>NON ADATTARTI<br><em>A UN PACCHETTO.</em></h1>
<p class="hero-copy">Non tutte le attività hanno lo stesso problema.<br><br>Forse devi lanciare una nuova attività. Forse stai aprendo un negozio. Forse vuoi una campagna, automatizzare un processo con l'AI, costruire un nuovo sistema digitale o portare il tuo marketing sul territorio.<br><br><strong>Non devi sapere quale servizio ti serve. Ci racconti cosa vuoi ottenere. Noi costruiamo il percorso.</strong></p>
<a class="btn" href="#details">PARLACI DEL TUO PROGETTO ↘</a>
</div>
<div class="hero-side">
<div class="hero-role">CUSTOM · SU PROGETTO</div>
<p>Nessun pacchetto predefinito.<br><br>Partiamo dall'obiettivo e costruiamo intorno a ciò che serve.</p>
</div>
</section>"""
replace_once(r'<section class="page-hero">.*?</section>', hero, "hero")

price = r"""<section class="price-band">
<div>
<div style="font-size:8px;letter-spacing:.17em">MEDIABAY · CUSTOM</div>
<div class="price">SU PROGETTO</div>
<div style="font-size:9px;letter-spacing:.12em;margin-top:6px">SOLUZIONE COSTRUITA INTORNO ALLE TUE ESIGENZE</div>
</div>
<p>Prima capiamo cosa vuoi ottenere. Poi definiamo attività, strumenti, tempi e investimento. Nessun pacchetto forzato.</p>
</section>"""
replace_once(r'<section class="price-band">.*?</section>', price, "price-band")

details = r"""<section class="section paper" id="details">
<div class="section-head">
<div>
<div class="eyebrow" style="color:#182318">01 · QUANDO I PACCHETTI NON BASTANO</div>
<h2>HAI UN OBIETTIVO.<br>NON NECESSARIAMENTE<br>UN SERVIZIO.</h2>
</div>
<p>Un'attività può avere bisogno di tante cose diverse. Un sito da una parte, la pubblicità da un'altra, i social, la grafica, i contenuti, l'automazione. Custom parte dall'obiettivo e mette insieme ciò che serve.</p>
</div>
<div class="service-grid">
<div class="service-card"><div><div class="num">01</div><h3>NUOVA ATTIVITÀ</h3></div><p>Dal concept al lancio: identità, presenza digitale, comunicazione, campagne e strumenti per partire.</p></div>
<div class="service-card"><div><div class="num">02</div><h3>NUOVO NEGOZIO</h3></div><p>Costruisci l'apertura online e sul territorio con branding, contenuti, advertising e attivazioni locali.</p></div>
<div class="service-card"><div><div class="num">03</div><h3>NUOVO PROGETTO</h3></div><p>Un prodotto, un servizio, una campagna o un sistema che non rientra nei pacchetti standard.</p></div>
<div class="service-card"><div><div class="num">04</div><h3>PROBLEMA SPECIFICO</h3></div><p>Hai un processo da migliorare, un'attività da automatizzare o un obiettivo che non sai ancora come affrontare.</p></div>
</div>
<div class="signal-copy" style="margin-top:6vw">
<p><strong>Non devi costruire tu il puzzle.</strong></p>
<p>Ci racconti cosa vuoi ottenere. Noi analizziamo il progetto e definiamo il percorso più adatto.</p>
</div>
</section>"""
replace_once(r'<section class="section paper" id="details">.*?</section>', details, "details")

signal = r"""<section class="signal">
<div class="eyebrow" style="color:#182318">02 · UN SOLO PUNTO DI RIFERIMENTO</div>
<div class="signal-title">DIGITALE.<br>MARKETING.<br>AI.<br><em>FISICO.</em></div>
<div class="signal-copy">
<p>Non tutto succede online. E non tutto si risolve con un solo strumento.</p>
<p>Custom può unire tecnologia, comunicazione, marketing e territorio dentro un unico progetto, quando è quello che serve alla tua attività.</p>
</div>
</section>"""
replace_once(r'<section class="signal">.*?</section>', signal, "signal")

capabilities = r"""<section class="section paper">
<div class="section-head">
<div>
<div class="eyebrow" style="color:#182318">03 · COSA POSSIAMO COSTRUIRE</div>
<h2>QUELLO CHE<br>TI SERVE.</h2>
</div>
<p>Non vendiamo una lista chiusa di funzioni. Possiamo combinare competenze e strumenti diversi in base al progetto.</p>
</div>
<div class="service-grid">
<div class="service-card"><div><div class="num">01</div><h3>WEB</h3></div><p>Siti, landing page, e-commerce, piattaforme, micrositi, sistemi digitali e progetti speciali.</p></div>
<div class="service-card"><div><div class="num">02</div><h3>MARKETING</h3></div><p>Campagne locali, campagne di lancio, acquisizione clienti, strategie digitali e promozioni mirate.</p></div>
<div class="service-card"><div><div class="num">03</div><h3>SOCIAL</h3></div><p>Strategia, contenuti, creatività, gestione e campagne per i principali social network.</p></div>
<div class="service-card"><div><div class="num">04</div><h3>AI & AUTOMAZIONE</h3></div><p>AI, chatbot, assistenti, workflow, integrazioni e automazioni costruite intorno a problemi reali.</p></div>
<div class="service-card"><div><div class="num">05</div><h3>GRAPHIC & CONTENT</h3></div><p>Brand identity, grafiche, materiali promozionali, fotografie, video e contenuti.</p></div>
<div class="service-card"><div><div class="num">06</div><h3>OFFLINE & PHYSICAL</h3></div><p>Volantinaggio, stampa, campagne locali, branding sul territorio, advertising fisico e Mediabike.</p></div>
</div>
</section>"""
replace_once(r'<section class="section paper">.*?<section class="section paper" id="package-scope">',
             capabilities + "\n<section class=\"section paper\" id=\"package-scope\">",
             "capabilities")

scope = r"""<section class="section paper" id="package-scope">
<div class="section-head">
<div>
<div class="eyebrow" style="color:#182318">04 · IL PROGETTO</div>
<h2>PARTIAMO<br>DAL PROBLEMA.<br>NON DALLO STRUMENTO.</h2>
</div>
<p>Potresti pensare di aver bisogno di un sito. Oppure di una campagna. Oppure dell'AI. Prima di scegliere lo strumento, capiamo cosa deve cambiare nel tuo business.</p>
</div>
<div class="feature-grid">
<article class="feature"><b>001</b><h3>OBIETTIVO</h3><p>Definiamo cosa vuoi ottenere: aprire, lanciare, vendere, acquisire clienti, comunicare o automatizzare.</p></article>
<article class="feature"><b>002</b><h3>STRATEGIA</h3><p>Analizziamo business, pubblico, territorio, canali e risorse per capire cosa ha davvero senso.</p></article>
<article class="feature"><b>003</b><h3>ECOSISTEMA</h3><p>Mettiamo insieme web, marketing, AI, social, contenuti e attività fisiche quando servono al progetto.</p></article>
<article class="feature"><b>004</b><h3>ESECUZIONE</h3><p>Non ti lasciamo con una strategia dentro un PDF. Costruiamo ed eseguiamo.</p></article>
</div>
<div style="margin-top:7vw">
<div class="section-head">
<div>
<div class="eyebrow" style="color:#182318">MEDIABAY APPROACH</div>
<h2>UNA COSA<br>ALLA VOLTA.<br>O TUTTO INSIEME.</h2>
</div>
<p>Il progetto può essere piccolo e concreto oppure diventare un sistema completo. Partiamo da ciò che oggi ti serve di più.</p>
</div>
<div class="feature-grid">
<article class="feature"><b>01</b><h3>WEB</h3><p>Una nuova presenza, una landing, un e-commerce o una piattaforma speciale.</p></article>
<article class="feature"><b>02</b><h3>CAMPAIGN</h3><p>Una campagna mirata per un'apertura, un prodotto, un servizio o un obiettivo locale.</p></article>
<article class="feature"><b>03</b><h3>AUTOMATION</h3><p>Un processo AI o un workflow che riduce lavoro ripetitivo e rende l'attività più efficiente.</p></article>
<article class="feature"><b>04</b><h3>FULL PROJECT</h3><p>Brand, digitale, social, advertising, contenuti e territorio coordinati in un unico progetto.</p></article>
</div>
</div>
</section>"""
replace_once(r'<section class="section paper" id="package-scope">.*?<section class="section paper">',
             scope + "\n<section class=\"section paper\">",
             "package-scope")

process = r"""<section class="section paper">
<div class="section-head">
<div>
<div class="eyebrow" style="color:#182318">05 · COME FUNZIONA</div>
<h2>TU PORTI<br>L'OBIETTIVO.<br>NOI COSTRUIAMO<br>IL PERCORSO.</h2>
</div>
<p>Non serve arrivare con un brief perfetto. Puoi arrivare anche solo con un'idea, un problema o un obiettivo.</p>
</div>
<div class="feature-grid">
<article class="feature"><b>01</b><h3>CI RACCONTI</h3><p>Cosa stai facendo, cosa vuoi ottenere, cosa non funziona oggi e cosa vorresti cambiare.</p></article>
<article class="feature"><b>02</b><h3>ANALIZZIAMO</h3><p>Guardiamo business, pubblico, territorio, digitale, comunicazione e opportunità.</p></article>
<article class="feature"><b>03</b><h3>COSTRUIAMO</h3><p>Definiamo strumenti, attività, priorità e combinazione di servizi necessari.</p></article>
<article class="feature"><b>04</b><h3>FACCIAMO</h3><p>Costruiamo ed eseguiamo. Il progetto non resta dentro una presentazione.</p></article>
</div>
<div class="signal-copy" style="margin-top:6vw">
<p><strong>05 · FACCIAMO EVOLVERE</strong></p>
<p>Il progetto può cambiare insieme alla tua attività. Aggiungiamo, modifichiamo, automatizziamo e sviluppiamo ciò che serve nel tempo.</p>
</div>
</section>"""
replace_once(r'<section class="section paper">.*?<section class="section paper" id="faq">',
             process + "\n<section class=\"section paper\" id=\"faq\">",
             "process")

faq = r"""<section class="section paper" id="faq">
<div class="section-head">
<div>
<div class="eyebrow" style="color:#182318">06 · FAQ</div>
<h2>NON SAI<br>DA DOVE<br>PARTIRE?</h2>
</div>
<p>Non è un problema. È proprio per questo che esiste Custom.</p>
</div>
<div class="faq">
<details><summary>“CUSTOM È UN PACCHETTO?”</summary><p>No. È un progetto costruito intorno alle esigenze specifiche della tua attività.</p></details>
<details><summary>“DEVO SAPERE GIÀ COSA MI SERVE?”</summary><p>No. Puoi arrivare anche semplicemente con un problema o un obiettivo. Ti aiutiamo a capire quali strumenti possono essere utili.</p></details>
<details><summary>“FATE SOLO COSE DIGITALI?”</summary><p>No. Possiamo lavorare anche sulla comunicazione fisica e locale: stampa, volantinaggio, advertising sul territorio, Mediabike e altre attività.</p></details>
<details><summary>“FATE ANCHE AI E AUTOMAZIONI?”</summary><p>Sì. Possiamo progettare sistemi AI e automazioni quando hanno una funzione concreta per il business.</p></details>
<details><summary>“FATE ANCHE SOCIAL E VIDEO?”</summary><p>Possiamo integrare strategia, contenuti, creatività, social e produzione audiovisiva nel progetto, in base alle necessità.</p></details>
<details><summary>“POSSO PARTIRE DA UNA SOLA COSA?”</summary><p>Sì. Non devi costruire tutto subito. Partiamo da ciò che oggi ti serve di più.</p></details>
</div>
</section>"""
replace_once(r'<section class="section paper" id="faq">.*?<section class="cta" id="start">',
             faq + "\n<section class=\"cta\" id=\"start\">",
             "faq")

cta = r"""<div>
<div class="eyebrow" style="color:#182318">07 · START</div>
<h2>NON SAI<br>ESATTAMENTE<br>COSA TI SERVE?<br><em>PERFETTO.</em></h2>
<p class="cta-copy">Raccontaci cosa vuoi fare.<br><br>Anche se hai soltanto un'idea. Anche se hai un problema. Anche se non sai da dove iniziare.<br><br><strong>Partiamo da lì.</strong></p>
<a class="btn" href="brief.html">RACCONTACI IL TUO PROGETTO ↗</a>
</div>
<footer class="footer">"""
replace_once(r'<div>\s*<div class="eyebrow" style="color:#182318">07 · START</div>.*?<footer class="footer">',
             cta, "cta")

FILE.write_text(s, encoding="utf-8")

print("CUSTOM aggiornato correttamente.")
print(f"File: {FILE}")
print()
print("VERIFICA LOCALE:")
print("  cd ~/Mediabay")
print("  python -m http.server 8080")
print("  http://localhost:8080/custom.html")
print()
print("SE È TUTTO OK:")
print("  git add custom.html")
print('  git commit -m "Rewrite Custom positioning around tailored projects"')
print("  git push origin main")
