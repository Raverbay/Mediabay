(async()=>{
  const root=document.querySelector('#brands');
  if(!root)return;

  try{
    const products=await FLIPCO.load();
    const usable=p=>FLIPCO.stock(p)>0||p.available===true;
    const esc=FLIPCO.esc;
    const available=products.filter(p=>usable(p)&&p.brand);
    const brands=[...new Set(
      available.map(p=>String(p.brand).trim()).filter(Boolean)
    )].sort((a,b)=>a.localeCompare(b,'it'));

    root.innerHTML=brands.length
      ?brands.map((brand,index)=>`
        <a href="shop.html?brand=${encodeURIComponent(brand)}"
           aria-label="Scopri i prodotti ${esc(brand)}">
          <span>${String(index+1).padStart(2,'0')}</span>
          <h2>${esc(brand)}</h2>
          <small>CATALOGO DEMO</small>
          <i aria-hidden="true">↗</i>
        </a>`).join('')
      :'<p class="muted">La selezione dei marchi è in aggiornamento.</p>';
  }catch(error){
    console.error('Impossibile caricare i marchi.',error);
    root.innerHTML='<p class="muted">La selezione dei marchi non è temporaneamente disponibile.</p>';
  }
})();
