from pathlib import Path
import re
import shutil

ROOT = Path.home() / "Mediabay"
ASSETS = ROOT / "assets"
LOGO_SRC = Path("/storage/emulated/0/Download/mediabay-logo-transparent.png")
LOGO_DST = ASSETS / "mediabay-logo.png"

if not ROOT.exists():
    raise SystemExit(f"ERRORE: {ROOT} non esiste.")

if not LOGO_SRC.exists():
    raise SystemExit(
        "ERRORE: non trovo il nuovo logo.\n"
        f"Metti mediabay-logo-transparent.png in:\n{LOGO_SRC}"
    )

ASSETS.mkdir(parents=True, exist_ok=True)
shutil.copy2(LOGO_SRC, LOGO_DST)

# Root MediaBay pages only: intentionally exclude clients/ and demo projects.
pages = sorted(ROOT.glob("*.html"))
if not pages:
    raise SystemExit("ERRORE: nessuna pagina HTML trovata nella root di MediaBay.")

logo_css = r"""
<style id="mediabay-brand-logo-v1">
/* MEDIABAY BRAND SYSTEM — official logo */
.site-header .logo{
  display:flex!important;
  align-items:center!important;
  width:auto!important;
  height:auto!important;
  text-decoration:none!important;
  font-size:0!important;
  line-height:0!important;
  letter-spacing:0!important;
}
.site-header .logo img{
  display:block!important;
  width:42px!important;
  height:42px!important;
  object-fit:contain!important;
}
.footer-logo{
  display:block!important;
  width:52px!important;
  height:52px!important;
  object-fit:contain!important;
  margin-bottom:18px!important;
}
.mb-loader-logo{
  width:min(190px,52vw)!important;
  margin:0 auto!important;
  line-height:0!important;
  font-size:0!important;
  letter-spacing:0!important;
}
.mb-loader-logo img{
  display:block!important;
  width:100%!important;
  height:auto!important;
  object-fit:contain!important;
}
#mb-loader{
  background:#070a0b!important;
}
.mb-loader-inner{
  display:flex!important;
  flex-direction:column!important;
  align-items:center!important;
  justify-content:center!important;
}
.mb-loader-sub{
  margin-top:18px!important;
  color:#c8ff00!important;
  font-size:8px!important;
  letter-spacing:.24em!important;
}
.mb-loader-line{
  margin-top:24px!important;
  width:100px!important;
  height:2px!important;
  background:#ffffff18!important;
}
@media(max-width:800px){
  .site-header .logo img{
    width:38px!important;
    height:38px!important;
  }
  .footer-logo{
    width:48px!important;
    height:48px!important;
  }
  .mb-loader-logo{
    width:min(170px,48vw)!important;
  }
}
</style>
"""

loader = r"""<div id="mb-loader" aria-hidden="true">
  <div class="mb-loader-inner">
    <div class="mb-loader-logo">
      <img src="assets/mediabay-logo.png" alt="MediaBay">
    </div>
    <div class="mb-loader-sub">PHYGITAL MARKETING</div>
    <div class="mb-loader-line"></div>
  </div>
</div>
"""

changed = []
for page in pages:
    s = page.read_text(encoding="utf-8")
    original = s

    # Header logo: preserve the existing anchor href, replace only its contents.
    s = re.sub(
        r'(<a\b[^>]*class=["\'][^"\']*\blogo\b[^"\']*["\'][^>]*>).*?(</a>)',
        r'\1<img src="assets/mediabay-logo.png" alt="MediaBay">\2',
        s,
        count=1,
        flags=re.I|re.S
    )

    # Remove legacy loader and install the official logo loader.
    if re.search(r'<div[^>]*id=["\']mb-loader["\'][^>]*>.*?</div>\s*</div>', s, flags=re.I|re.S):
        s = re.sub(
            r'<div[^>]*id=["\']mb-loader["\'][^>]*>.*?</div>\s*</div>',
            loader,
            s,
            count=1,
            flags=re.I|re.S
        )
    else:
        # If a page has no loader, add the same brand loader before <body>.
        s = re.sub(r'<body([^>]*)>', r'<body\1>\n' + loader, s, count=1, flags=re.I)

    # Footer branding: add the official mark before existing footer brand text.
    if 'class="footer-logo"' not in s and "class='footer-logo'" not in s:
        s = re.sub(
            r'(<span\b[^>]*class=["\'][^"\']*footer-brand[^"\']*["\'][^>]*>)',
            '<img class="footer-logo" src="assets/mediabay-logo.png" alt="MediaBay">\\1',
            s,
            count=1,
            flags=re.I
        )

    # Add favicon if not already present.
    if 'mediabay-logo.png" rel="icon"' not in s and "mediabay-logo.png' rel='icon'" not in s:
        s = re.sub(
            r'</head>',
            '<link rel="icon" type="image/png" href="assets/mediabay-logo.png">\n</head>',
            s,
            count=1,
            flags=re.I
        )

    # Add brand CSS once.
    s = re.sub(
        r'<style id="mediabay-brand-logo-v1">.*?</style>',
        '',
        s,
        flags=re.I|re.S
    )
    s = re.sub(r'</head>', logo_css + '\n</head>', s, count=1, flags=re.I)

    if s != original:
        # Backup each page once.
        backup = page.with_suffix(page.suffix + ".brand-backup")
        if not backup.exists():
            shutil.copy2(page, backup)
        page.write_text(s, encoding="utf-8")
        changed.append(page.name)

print("MEDIABAY BRAND SYSTEM V1 APPLICATO.")
print(f"Logo: {LOGO_DST}")
print(f"Pagine aggiornate: {len(changed)}")
for name in changed:
    print(" -", name)

print()
print("Il nuovo logo sostituisce:")
print("  • logo/header")
print("  • preloader")
print("  • branding footer")
print("  • favicon")
print()
print("Client e progetti dentro clients/ NON sono stati toccati.")
print()
print("ORA CONTROLLA LOCALMENTE:")
print("cd ~/Mediabay")
print("python -m http.server 8080")
print("Apri http://localhost:8080/")
print()
print("Se tutto è OK:")
print("git add .")
print('git commit -m "Apply official MediaBay logo across brand system"')
print("git push origin main")
