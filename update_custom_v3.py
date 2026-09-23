from pathlib import Path
import re, shutil

ROOT = Path.home() / "Mediabay"
FILE = ROOT / "custom.html"
if not FILE.exists():
    raise SystemExit(f"ERRORE: {FILE} non esiste.")

backup = FILE.with_suffix(".html.custom-v3-backup")
shutil.copy2(FILE, backup)
s = FILE.read_text(encoding="utf-8")

# 1) Fix mobile typography clipping caused by oversized editorial headings.
css = r"""
<style id="custom-v3-mobile-fix">
@media (max-width:700px){
  .page-hero h1,
  .section h2,
  .signal-title,
  .custom-bridge-title{
    max-width:100%!important;
    overflow-wrap:normal!important;
    word-break:normal!important;
    transform:none!important;
  }

  .section h2{
    font-size:clamp(42px,12.5vw,68px)!important;
    line-height:.9!important;
    letter-spacing:-.045em!important;
  }

  .custom-bridge-title{
    font-size:clamp(42px,12.5vw,64px)!important;
    line-height:.9!important;
  }

  .custom-problem-section .custom-section-intro h2{
    font-size:clamp(42px,12vw,66px)!important;
    line-height:.9!important;
  }

  .signal{
    padding-top:52px!important;
    padding-bottom:58px!important;
    overflow:hidden!important;
  }

  .signal .eyebrow{
    color:rgba(255,255,255,.55)!important;
    margin-bottom:24px!important;
  }

  .signal-title{
    color:#fff!important;
    font-size:clamp(43px,13vw,70px)!important;
    line-height:.9!important;
  }

  .signal-copy{
    color:#fff!important;
  }

  .signal-copy p{
    font-size:18px!important;
    line-height:1.42!important;
  }

  .custom-problem-section{
    overflow:hidden!important;
  }
}

@media (min-width:701px){
  .signal .eyebrow{
    color:#fff!important;
  }
}
</style>
"""
s = re.sub(r'<style id="custom-v3-mobile-fix">.*?</style>', '', s, flags=re.I|re.S)
s = re.sub(r'</head>', css + "\n</head>", s, count=1, flags=re.I)

# 2) Replace the first old capabilities section if its old title is still present.
new_capabilities = r"""<section class="section paper custom-capabilities-v3">
<div class="section-head">
<div>
<div class="eyebrow" style="color:#182318">03 · COSA POSSIAMO COSTRUIRE</div>
<h2>NON È SOLO<br>DIGITALE.</h2>
</div>
<p>Un progetto può attraversare più mondi. Possiamo combinare ciò che facciamo in base a quello che vuoi ottenere.</p>
</div>

<div class="custom-cap-grid">
<article><span>01</span><h3>WEB</h3><p>Siti, landing page, e-commerce, piattaforme e progetti digitali speciali.</p></article>
<article><span>02</span><h3>MARKETING</h3><p>Campagne, lanci, acquisizione clienti, promozioni e strategie mirate.</p></article>
<article><span>03</span><h3>SOCIAL</h3><p>Strategia, contenuti, creatività, gestione e campagne social.</p></article>
<article><span>04</span><h3>AI & AUTOMAZIONE</h3><p>Assistenti, chatbot, workflow e sistemi che riducono il lavoro ripetitivo.</p></article>
<article><span>05</span><h3>VIDEO & CONTENT</h3><p>Grafiche, identità, fotografia, video e contenuti per raccontare il progetto.</p></article>
<article><span>06</span><h3>OFFLINE</h3><p>Stampa, volantinaggio, advertising locale, territorio e Mediabike.</p></article>
</div>

<div class="custom-cap-end">
<strong>UNA SQUADRA. PIÙ COMPETENZE.</strong>
<p>Non devi coordinare fornitori diversi per ogni pezzo. Quando ha senso, possiamo costruire il progetto insieme.</p>
</div>
</section>
"""

# Find a section containing the exact old heading phrase and replace it.
matches = list(re.finditer(
    r'<section\b[^>]*>.*?</section>',
    s, flags=re.I|re.S
))
replaced = False
for m in matches:
    block = m.group(0)
    if ("COSA POSSIAMO COSTRUIRE" in block and
        ("NON È SOLO" in block or "NON E SOLO" in block or "WEB" in block)):
        s = s[:m.start()] + new_capabilities + s[m.end():]
        replaced = True
        break

# If not found, leave structure intact and insert the new section before package-scope.
if not replaced:
    marker = re.search(r'<section[^>]*id=["\']package-scope["\'][^>]*>', s, flags=re.I)
    if marker:
        s = s[:marker.start()] + new_capabilities + "\n" + s[marker.start():]

# 3) Style the new capability cards.
cap_css = r"""
<style id="custom-v3-capabilities">
.custom-capabilities-v3{overflow:hidden}
.custom-cap-grid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:1px;
  margin-top:7vw;
  background:#182318;
  border:1px solid #182318;
}
.custom-cap-grid article{
  background:#eee9dc;
  min-height:230px;
  padding:26px 24px 28px;
  display:flex;
  flex-direction:column;
}
.custom-cap-grid span{
  font-size:9px;
  letter-spacing:.15em;
  font-weight:700;
  opacity:.65;
}
.custom-cap-grid h3{
  font-size:clamp(25px,2.5vw,38px)!important;
  line-height:.9!important;
  letter-spacing:-.035em!important;
  margin:45px 0 14px!important;
}
.custom-cap-grid p{
  font-size:16px;
  line-height:1.42;
  margin:0;
  max-width:360px;
}
.custom-cap-end{
  margin-top:7vw;
  padding-top:28px;
  border-top:1px solid rgba(24,35,24,.28);
  display:grid;
  grid-template-columns:1fr 1.2fr;
  gap:30px;
}
.custom-cap-end strong{
  font-size:clamp(24px,3vw,42px);
  line-height:.95;
  letter-spacing:-.035em;
}
.custom-cap-end p{
  font-size:17px;
  line-height:1.45;
  margin:0;
  max-width:430px;
}
@media(max-width:700px){
  .custom-capabilities-v3{
    padding-top:64px!important;
    padding-bottom:70px!important;
  }
  .custom-capabilities-v3 .section-head{
    display:block!important;
  }
  .custom-capabilities-v3 .section-head .eyebrow{
    margin-bottom:24px!important;
  }
  .custom-capabilities-v3 .section-head h2{
    font-size:clamp(44px,13vw,70px)!important;
    line-height:.88!important;
  }
  .custom-capabilities-v3 .section-head>p{
    margin-top:30px!important;
    font-size:18px!important;
    line-height:1.45!important;
    color:#626b66!important;
  }
  .custom-cap-grid{
    display:block;
    margin-top:46px;
    background:transparent;
    border:0;
  }
  .custom-cap-grid article{
    min-height:0;
    padding:27px 0 30px;
    border-top:1px solid rgba(24,35,24,.28);
    background:transparent;
  }
  .custom-cap-grid article:last-child{
    border-bottom:1px solid rgba(24,35,24,.28);
  }
  .custom-cap-grid h3{
    font-size:31px!important;
    margin:23px 0 13px!important;
  }
  .custom-cap-grid p{
    font-size:17px;
    line-height:1.42;
  }
  .custom-cap-end{
    display:block;
    margin-top:54px;
    padding-top:25px;
  }
  .custom-cap-end strong{
    display:block;
    font-size:38px;
    line-height:.9;
  }
  .custom-cap-end p{
    margin-top:22px;
    font-size:17px;
  }
}
</style>
"""
s = re.sub(r'<style id="custom-v3-capabilities">.*?</style>', '', s, flags=re.I|re.S)
s = re.sub(r'</head>', cap_css + "\n</head>", s, count=1, flags=re.I)

FILE.write_text(s, encoding="utf-8")

print("CUSTOM V3 applicato.")
print(f"File: {FILE}")
print(f"Backup: {backup}")
print()
print("Ora:")
print("cd ~/Mediabay")
print("python -m http.server 8080")
print("Apri http://localhost:8080/custom.html")
print()
print("NON fare git push finché non controlliamo lo screenshot.")
