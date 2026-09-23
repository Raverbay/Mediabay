from pathlib import Path
import re
import shutil

ROOT = Path.home() / "Mediabay"
FILE = ROOT / "custom.html"

if not FILE.exists():
    raise SystemExit(f"ERRORE: {FILE} non esiste.")

backup = FILE.with_suffix(".html.custom-v2-backup")
shutil.copy2(FILE, backup)

s = FILE.read_text(encoding="utf-8")

# Replace the details section with a more editorial, mobile-friendly block.
new_details = r"""<section class="section paper custom-problem-section" id="details">
<div class="section-head custom-section-intro">
<div>
<div class="eyebrow" style="color:#182318">01 · QUANDO I PACCHETTI NON BASTANO</div>
<h2>HAI UN'IDEA.<br>UN OBIETTIVO.<br>UN PROBLEMA.</h2>
</div>
<p>Non devi arrivare sapendo già cosa comprare. Ci racconti cosa vuoi fare, cosa vuoi cambiare o dove vuoi arrivare. <strong>Da lì costruiamo il progetto.</strong></p>
</div>

<div class="custom-cards">
<article class="custom-card">
<div class="custom-card-top"><span>01</span><span>START</span></div>
<h3>DEVI APRIRE<br>UNA NUOVA ATTIVITÀ?</h3>
<p>Partiamo da zero: identità, presenza digitale, comunicazione, contenuti, lancio e promozione.</p>
</article>

<article class="custom-card">
<div class="custom-card-top"><span>02</span><span>LAUNCH</span></div>
<h3>STAI APRENDO<br>UN NUOVO NEGOZIO?</h3>
<p>Costruiamo ciò che serve per arrivare sul mercato online e sul territorio con un progetto coordinato.</p>
</article>

<article class="custom-card">
<div class="custom-card-top"><span>03</span><span>GROW</span></div>
<h3>HAI UN PROGETTO<br>DA FAR PARTIRE?</h3>
<p>Un prodotto, un servizio, una campagna o un'idea che non rientra nei pacchetti standard.</p>
</article>

<article class="custom-card">
<div class="custom-card-top"><span>04</span><span>SOLVE</span></div>
<h3>HAI UN PROBLEMA<br>DA RISOLVERE?</h3>
<p>Un processo lento, troppo lavoro manuale, poca visibilità o qualcosa che semplicemente non sta funzionando.</p>
</article>
</div>

<div class="custom-bridge">
<div class="custom-bridge-label">IL PUNTO DI PARTENZA</div>
<div class="custom-bridge-title">NON DEVI<br>COSTRUIRE TU<br>IL PUZZLE.</div>
<p>Ci racconti cosa hai in mente. Noi capiamo quali pezzi servono davvero e come metterli insieme.</p>
</div>
</section>
"""

m = re.search(r'<section[^>]*id=["\']details["\'][^>]*>.*?</section>', s, flags=re.I|re.S)
if not m:
    raise SystemExit(f"ERRORE: sezione #details non trovata. Backup: {backup}")

s = s[:m.start()] + new_details + s[m.end():]

css = r"""
<style id="custom-v2-details-mobile">
/* CUSTOM V2 — editorial problem section */
.custom-problem-section{
  overflow:hidden;
}

.custom-problem-section .custom-section-intro{
  align-items:flex-end;
}

.custom-problem-section .custom-section-intro h2{
  max-width:900px;
  font-size:clamp(42px,7.2vw,112px)!important;
  line-height:.86!important;
  letter-spacing:-.055em!important;
  margin:0!important;
}

.custom-problem-section .custom-section-intro > p{
  max-width:440px;
  font-size:clamp(17px,1.5vw,22px);
  line-height:1.45;
}

.custom-cards{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:1px;
  margin-top:7vw;
  background:#182318;
  border:1px solid #182318;
}

.custom-card{
  background:#eee9dc;
  padding:32px 30px 36px;
  min-height:290px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.custom-card-top{
  display:flex;
  justify-content:space-between;
  gap:20px;
  font-size:9px;
  letter-spacing:.15em;
  font-weight:700;
  opacity:.7;
}

.custom-card h3{
  font-size:clamp(25px,3vw,46px)!important;
  line-height:.92!important;
  letter-spacing:-.035em!important;
  margin:42px 0 18px!important;
}

.custom-card p{
  max-width:430px;
  font-size:16px;
  line-height:1.45;
  margin:0;
}

.custom-bridge{
  margin-top:9vw;
  padding-top:32px;
  border-top:1px solid rgba(24,35,24,.28);
  display:grid;
  grid-template-columns:1fr 1.5fr 1fr;
  gap:30px;
  align-items:start;
}

.custom-bridge-label{
  font-size:9px;
  letter-spacing:.16em;
  font-weight:700;
}

.custom-bridge-title{
  font-size:clamp(40px,6vw,86px);
  line-height:.84;
  letter-spacing:-.05em;
  font-weight:800;
}

.custom-bridge p{
  font-size:17px;
  line-height:1.45;
  margin:0;
  max-width:360px;
}

@media (max-width:700px){
  .custom-problem-section{
    padding-top:58px!important;
    padding-bottom:72px!important;
  }

  .custom-problem-section .custom-section-intro{
    display:block!important;
  }

  .custom-problem-section .custom-section-intro .eyebrow{
    margin-bottom:24px!important;
    font-size:9px!important;
    line-height:1.4!important;
  }

  .custom-problem-section .custom-section-intro h2{
    font-size:clamp(43px,12.8vw,70px)!important;
    line-height:.88!important;
    letter-spacing:-.055em!important;
    max-width:100%!important;
    overflow:visible!important;
  }

  .custom-problem-section .custom-section-intro > p{
    margin-top:34px!important;
    font-size:18px!important;
    line-height:1.45!important;
    color:#626b66!important;
  }

  .custom-cards{
    display:block;
    margin-top:46px;
    background:transparent;
    border:0;
  }

  .custom-card{
    min-height:0;
    padding:27px 0 31px;
    border-top:1px solid rgba(24,35,24,.28);
    background:transparent;
  }

  .custom-card:last-child{
    border-bottom:1px solid rgba(24,35,24,.28);
  }

  .custom-card-top{
    font-size:9px;
  }

  .custom-card h3{
    font-size:31px!important;
    line-height:.94!important;
    margin:25px 0 14px!important;
  }

  .custom-card p{
    font-size:17px;
    line-height:1.42;
    max-width:100%;
  }

  .custom-bridge{
    margin-top:58px;
    padding-top:26px;
    display:block;
  }

  .custom-bridge-label{
    margin-bottom:20px;
  }

  .custom-bridge-title{
    font-size:48px;
    line-height:.86;
  }

  .custom-bridge p{
    margin-top:25px;
    font-size:17px;
  }
}
</style>
"""

# Put the CSS before </head>; replace prior v2 block if it exists.
s = re.sub(r'<style id="custom-v2-details-mobile">.*?</style>', '', s, flags=re.I|re.S)
if re.search(r'</head>', s, flags=re.I):
    s = re.sub(r'</head>', css + '\n</head>', s, count=1, flags=re.I)
else:
    s = css + s

FILE.write_text(s, encoding="utf-8")

print("CUSTOM V2 aggiornato.")
print(f"File: {FILE}")
print(f"Backup: {backup}")
print()
print("Ora:")
print("cd ~/Mediabay")
print("python -m http.server 8080")
print("Apri http://localhost:8080/custom.html")
print()
print("NON fare ancora git push.")
