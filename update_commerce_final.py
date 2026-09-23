
from pathlib import Path
import re

ROOT = Path.home() / "Mediabay"
FILE = ROOT / "commerce.html"

if not FILE.exists():
    raise SystemExit(f"ERRORE: {FILE} non esiste. Controlla ~/Mediabay.")

s = FILE.read_text(encoding="utf-8")

def replace_once(pattern, replacement, label):
    global s
    new, n = re.subn(pattern, replacement, s, count=1, flags=re.S)
    if n != 1:
        raise SystemExit(f"ERRORE: blocco '{label}' non trovato. Nessuna modifica salvata.")
    s = new

hero = r'''<section class="page-hero">
<div class="hero-content">
<div class="eyebrow">COMMERCE · E-COMMERCE</div>
<h1 data-it="HAI DEI PRODOTTI.<br><em>NOI LI PORTIAMO ONLINE.</em>" data-en="YOU HAVE PRODUCTS.<br><em>WE BRING THEM ONLINE.</em>">HAI DEI PRODOTTI.<br><em>NOI LI PORTIAMO ONLINE.</em></h1>
<p class="hero-copy" data-it="Se vendi prodotti e vuoi iniziare — o migliorare — la vendita online, Commerce costruisce per te lo spazio digitale in cui le persone possono scoprire, scegliere e acquistare.<br><br>Non devi sapere come si costruisce un e-commerce. Non devi occuparti della parte tecnica.<br><br><strong>Ci racconti cosa vendi. Noi costruiamo il sistema.</strong>" data-en="If you sell products and want to start — or improve — selling online, Commerce builds the digital space where people can discover, choose and buy.<br><br>You don't need to know how an e-commerce works. You don't need to handle the technical side.<br><br><strong>You tell us what you sell. We build the system.</strong>">Se vendi prodotti e vuoi iniziare — o migliorare — la vendita online, Commerce costruisce per te lo spazio digitale in cui le persone possono scoprire, scegliere e acquistare.<br><br>Non devi sapere come si costruisce un e-commerce. Non devi occuparti della parte tecnica.<br><br><strong>Ci racconti cosa vendi. Noi costruiamo il sistema.</strong></p>
<a class="btn" href="#details" data-it="SCOPRI COME FUNZIONA ↘" data-en="SEE HOW IT WORKS ↘">SCOPRI COME FUNZIONA ↘</a>
</div>
<div class="hero-side">
<div class="hero-role">€199 / MESE</div>
<p data-it="Sviluppo e gestione inclusi.<br><br>Il tuo prodotto resta al centro. MediaBay si occupa della parte digitale." data-en="Development and management included.<br><br>Your product stays at the center. MediaBay handles the digital side.">Sviluppo e gestione inclusi.<br><br>Il tuo prodotto resta al centro. MediaBay si occupa della parte digitale.</p>
</div>
</section>'''

replace_once(r'<section class="page-hero">.*?</section>', hero, "hero")

price = r'''<section class="price-band">
<div>
<div style="font-size:8px;letter-spacing:.17em">MEDIABAY · COMMERCE</div>
<div class="price">€199 <small>/ MESE</small></div>
<div style="font-size:9px;letter-spacing:.12em;margin-top:6px">SVILUPPO E GESTIONE INCLUSI</div>
</div>
<p>Un e-commerce gestito per presentare i tuoi prodotti, accompagnare la scelta e arrivare al checkout. Configurazione iniziale fino a 50 prodotti.</p>
</section>'''
replace_once(r'<section class="price-band">.*?</section>', price, "price-band")

details = r'''<section class="section paper" id="details">
<div class="section-head">
<div>
<div class="eyebrow" style="color:#ff3b30">01 · QUANDO TI SERVE COMMERCE</div>
<h2>NON TI SERVE<br>UN SEMPLICE<br>SITO.</h2>
</div>
<p>Se hai prodotti da vendere, ti serve un posto online dove le persone possano trovarli, capirli, sceglierli e acquistarli. Commerce è il livello MediaBay costruito per questo.</p>
</div>
<div class="service-grid">
<div class="service-card"><div><div class="num">01</div><h3>NEGOZIO</h3></div><p>Hai già un'attività fisica e vuoi aggiungere un canale di vendita online.</p></div>
<div class="service-card"><div><div class="num">02</div><h3>BRAND</h3></div><p>Hai un'identità e dei prodotti e vuoi costruire il tuo spazio digitale.</p></div>
<div class="service-card"><div><div class="num">03</div><h3>ARTIGIANO</h3></div><p>Produci qualcosa di tuo e vuoi permettere alle persone di acquistarlo anche online.</p></div>
<div class="service-card"><div><div class="num">04</div><h3>CATALOGO</h3></div><p>Moda, accessori, beauty, food, lifestyle o altri prodotti che possono essere acquistati online.</p></div>
</div>
<div class="signal-copy" style="margin-top:6vw"><p><strong>Non devi trasformarti in un tecnico.</strong></p><p>Tu conosci i tuoi prodotti e i tuoi clienti. Noi costruiamo la parte digitale che li mette in contatto.</p></div>
</section>'''
replace_once(r'<section class="section paper" id="details">.*?</section>', details, "details")

experience = r'''<section class="signal">
<div class="eyebrow" style="color:#ff3b30">02 · IL PERCORSO D'ACQUISTO</div>
<div class="signal-title" data-it="VEDERE.<br>CAPIRE.<br>SCEGLIERE.<br><em>COMPRARE.</em>" data-en="DISCOVER.<br>UNDERSTAND.<br>CHOOSE.<br><em>BUY.</em>">VEDERE.<br>CAPIRE.<br>SCEGLIERE.<br><em>COMPRARE.</em></div>
<div class="signal-copy">
<p>Un e-commerce non significa semplicemente mettere una fotografia e un prezzo online. Il cliente deve poter attraversare un percorso semplice e trovare le risposte che gli servono prima di acquistare.</p>
<p>Il prodotto resta al centro. Intorno costruiamo tutto ciò che serve per arrivare dalla scoperta all'ordine.</p>
</div>
</section>'''
replace_once(r'<section class="signal">.*?</section>', experience, "experience")

journey = r'''<section class="section paper">
<div class="section-head">
<div>
<div class="eyebrow" style="color:#ff3b30">03 · L'ESPERIENZA</div>
<h2>IL PRODOTTO<br>NON SI VENDE<br>DA SOLO.</h2>
</div>
<p>Prima dell'acquisto una persona si chiede: è quello che sto cercando? Mi serve? Posso fidarmi? Vale quello che costa? Commerce organizza l'esperienza per rispondere a queste domande.</p>
</div>
<div class="service-grid">
<div class="service-card"><div><div class="num">01</div><h3>SCOPRIRE</h3></div><p>Categorie, ricerca, navigazione e struttura aiutano la persona a trovare ciò che sta cercando.</p></div>
<div class="service-card"><div><div class="num">02</div><h3>CONOSCERE</h3></div><p>Foto, descrizioni, caratteristiche, varianti e informazioni aiutano a capire cosa si sta comprando.</p></div>
<div class="service-card"><div><div class="num">03</div><h3>SENTIRSI SICURO</h3></div><p>Prezzo, condizioni, spedizione, resi e informazioni chiare riducono l'incertezza prima dell'acquisto.</p></div>
<div class="service-card"><div><div class="num">04</div><h3>ACQUISTARE</h3></div><p>Quando la persona è pronta, carrello e checkout rendono semplice completare la decisione.</p></div>
</div>
</section>'''
replace_once(r'<section class="section paper">.*?<section class="section paper" id="package-scope">', journey + '\n<section class="section paper" id="package-scope">', "journey")

scope = r'''<section class="section paper" id="package-scope">
<div class="section-head">
<div><div class="eyebrow" style="color:#182318">04 · COSA PUÒ FARE COMMERCE</div><h2>UN SISTEMA<br>PRONTO A<br>VENDERE.</h2></div>
<p>Il perimetro viene costruito intorno alla vendita dei tuoi prodotti. Non ti vendiamo funzioni che non ti servono: costruiamo ciò che serve per portare il cliente dal prodotto all'ordine.</p>
</div>
<div class="feature-grid">
<article class="feature"><b>001</b><h3>STORE</h3><p>Struttura e-commerce professionale con categorie, navigazione e pagine necessarie alla vendita.</p></article>
<article class="feature"><b>002</b><h3>CATALOGO</h3><p>Configurazione iniziale fino a 50 prodotti, con struttura per categorie, varianti, immagini e informazioni.</p></article>
<article class="feature"><b>003</b><h3>PAGINE PRODOTTO</h3><p>Struttura pensata per presentare ogni prodotto in modo chiaro e accompagnare la scelta.</p></article>
<article class="feature"><b>004</b><h3>CARRELLO & CHECKOUT</h3><p>Percorso tecnico fino alla fase di acquisto, con i passaggi necessari per completare l'ordine.</p></article>
</div>
<div style="margin-top:7vw">
<div class="section-head">
<div><div class="eyebrow" style="color:#182318">CONFINE CHIARO</div><h2>COSA NON<br>FACCIAMO AL<br>POSTO TUO.</h2></div>
<p>Commerce si occupa della parte digitale dello store. Alcune attività operative restano naturalmente in capo al business.</p>
</div>
<div class="feature-grid">
<article class="feature"><b>001</b><h3>LOGISTICA</h3><p>Magazzino, preparazione ordini, imballaggio e spedizioni restano a carico dell'attività o dei fornitori scelti.</p></article>
<article class="feature"><b>002</b><h3>CUSTOMER CARE</h3><p>La gestione operativa delle richieste dei clienti non è compresa nella fee standard.</p></article>
<article class="feature"><b>003</b><h3>FOTO & VIDEO</h3><p>Produzione professionale di foto e video prodotto non inclusa salvo accordo specifico.</p></article>
<article class="feature"><b>004</b><h3>ADVERTISING</h3><p>Budget pubblicitario, commissioni marketplace e costi di servizi esterni sono esclusi.</p></article>
</div>
</div>
<div style="margin-top:7vw;padding:28px;border:1px solid #18231833">
<div class="eyebrow" style="color:#182318">MEDIA BAY MODEL</div>
<p style="font-size:16px;line-height:1.55;max-width:760px;margin:14px 0 0">Non compri soltanto un sito e poi te ne occupi da solo. Commerce è un servizio continuativo: sviluppo, gestione e supporto digitale fanno parte del modello.</p>
</div>
</section>'''
replace_once(r'<section class="section paper" id="package-scope">.*?<section class="section paper">', scope + '\n<section class="section paper">', "package-scope")

faq = r'''<section class="section paper">
<div class="section-head">
<div><div class="eyebrow" style="color:#ff3b30">05 · FAQ</div><h2>PRIMA DI<br>INIZIARE.</h2></div>
<p>Non devi conoscere l'e-commerce per capire se Commerce fa per te.</p>
</div>
<div class="faq">
<details><summary>“DEVO SAPER GESTIRE UN E-COMMERCE?”</summary><p>No. Tu conosci il tuo business e i tuoi prodotti. Noi ti aiutiamo con la parte digitale.</p></details>
<details><summary>“HO GIÀ UN NEGOZIO. POSSO USARLO?”</summary><p>Sì. Commerce può diventare il tuo secondo canale di vendita, collegando la presenza fisica con quella online.</p></details>
<details><summary>“POSSO PARTIRE CON POCHI PRODOTTI?”</summary><p>Sì. Non è necessario avere centinaia di prodotti per iniziare. La configurazione iniziale comprende fino a 50 prodotti.</p></details>
<details><summary>“I PAGAMENTI SONO INCLUSI?”</summary><p>Commerce costruisce il percorso fino al checkout. I costi dei provider di pagamento e dei servizi esterni restano separati.</p></details>
<details><summary>“GESTITE VOI LE SPEDIZIONI?”</summary><p>No. Logistica, magazzino, preparazione e spedizione degli ordini restano a carico dell'attività.</p></details>
<details><summary>“E SE IL CATALOGO CRESCE?”</summary><p>Possiamo valutare un'estensione oppure una soluzione Custom in base alla struttura del catalogo.</p></details>
</div>
</section>'''
replace_once(r'<section class="section paper">.*?<section class="cta" id="start">', faq + '\n<section class="cta" id="start">', "faq")

cta = r'''<div>
<div class="eyebrow" style="color:#ff3b30">06 · START</div>
<h2 data-it="HAI GIÀ<br>I PRODOTTI.<br><em>ORA PORTIAMOLI ONLINE.</em>" data-en="YOU ALREADY HAVE<br>THE PRODUCTS.<br><em>NOW BRING THEM ONLINE.</em>">HAI GIÀ<br>I PRODOTTI.<br><em>ORA PORTIAMOLI ONLINE.</em></h2>
<p class="cta-copy commerce-cta-copy">Raccontaci cosa vendi, quanti prodotti hai e come li vendi oggi.<br><br>Partiamo dal tuo catalogo e vediamo cosa possiamo costruire.</p>
<a class="btn" href="brief.html">PORTA IL TUO STORE ONLINE ↗</a>
</div>
<footer class="footer">'''
replace_once(r'<div>\s*<div class="eyebrow" style="color:#ff3b30">06 · START</div>.*?<footer class="footer">', cta, "cta")

s = s.replace("DA €199", "€199").replace("€199,90", "€199")
s = s.replace("SETUP €1.999 · INCLUSO ALL’ATTIVAZIONE", "SVILUPPO E GESTIONE INCLUSI")

FILE.write_text(s, encoding="utf-8")

print("COMMERCE aggiornato correttamente.")
print(f"File: {FILE}")
print()
print("VERIFICA LOCALE:")
print("  cd ~/Mediabay")
print("  python -m http.server 8080")
print("  http://localhost:8080/commerce.html")
print()
print("SE È TUTTO OK:")
print("  git add commerce.html")
print('  git commit -m "Rewrite Commerce positioning for online sales"')
print("  git push origin main")
