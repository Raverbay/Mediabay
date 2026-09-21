(function(){
  'use strict';
  const KEY='mediabay-language';
  const root=document.documentElement;

  function apply(lang){
    const target=(lang==='en')?'en':'it';
    document.querySelectorAll('[data-lang-it][data-lang-en]').forEach(function(el){
      const value=el.getAttribute('data-lang-'+target);
      if(value!==null) el.innerHTML=value;
    });
    document.querySelectorAll('meta[data-lang-it][data-lang-en]').forEach(function(el){
      const value=el.getAttribute('data-lang-'+target);
      if(value!==null) el.setAttribute('content',value);
    });
    const title=document.querySelector('title[data-lang-it][data-lang-en]');
    if(title){
      title.textContent=title.getAttribute('data-lang-'+target);
    }
    root.lang=target;
    document.querySelectorAll('.lang-switch button[data-lang]').forEach(function(btn){
      btn.classList.toggle('active',btn.getAttribute('data-lang')===target);
    });
    try{localStorage.setItem(KEY,target)}catch(e){}
  }

  function init(){
    document.querySelectorAll('.lang-switch button[data-lang]').forEach(function(btn){
      btn.addEventListener('click',function(){
        apply(btn.getAttribute('data-lang'));
      });
    });
    let saved='it';
    try{saved=localStorage.getItem(KEY)||'it'}catch(e){}
    apply(saved);
  }

  window.MediaBayV4Lang={setLang:apply};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();