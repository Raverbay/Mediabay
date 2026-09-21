
(function(){
  const menu=document.getElementById('menu');
  const btn=document.getElementById('menuBtn');
  const header=document.getElementById('header');

  if(menu && btn && header){
    function closeMenu(){
      menu.classList.remove('open');
      header.classList.remove('menu-active');
      btn.setAttribute('aria-expanded','false');
      document.body.style.overflow='';
    }

    btn.addEventListener('click',()=>{
      const open=!menu.classList.contains('open');
      menu.classList.toggle('open',open);
      header.classList.toggle('menu-active',open);
      btn.setAttribute('aria-expanded',String(open));
      document.body.style.overflow=open?'hidden':'';
    });

    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape') closeMenu();
    });
  }

  const KEY='mediabay-language';

  function setLang(lang){
    document.documentElement.lang=lang;
    localStorage.setItem(KEY,lang);
    document.querySelectorAll('[data-lang]').forEach(b=>{
      b.classList.toggle('active',b.dataset.lang===lang);
    });
    if(window.MediaBayLang && typeof window.MediaBayLang.setLang==='function'){
      window.MediaBayLang.setLang(lang);
    }
  }

  window.MediaBayServiceLang={setLang};

  document.addEventListener('DOMContentLoaded',()=>{
    const saved=localStorage.getItem(KEY)||'it';
    document.querySelectorAll('[data-lang]').forEach(b=>{
      b.addEventListener('click',()=>setLang(b.dataset.lang));
    });
    setLang(saved);
  });
})();
