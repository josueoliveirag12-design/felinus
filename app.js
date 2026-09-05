/* =========================================================
   MÉTODO FELINUS™ — CONFIGURAÇÕES EDITÁVEIS
   Altere preços, links e imagens somente neste bloco.
   ========================================================= */
const SITE_CONFIG = {
  prices: {
    basic: "[EDITÁVEL]",
    premium: "[EDITÁVEL]",
    vip: "[EDITÁVEL]"
  },
  links: {
    basic: "#",
    premium: "#",
    vip: "#",
    terms: "#",
    privacy: "#",
    contact: "#"
  },
  images: {
    // Fotos Unsplash — troque por qualquer URL de imagem própria quando quiser.
    hero: "https://images.unsplash.com/photo-1785836374013-bc2f31ad8bb0?auto=format&fit=crop&w=1400&q=88",
    alert: "https://images.unsplash.com/photo-1786327088062-dd8eb61051c2?auto=format&fit=crop&w=1100&q=88",
    bond: "https://images.unsplash.com/photo-1781556706092-f3d100fa7fca?auto=format&fit=crop&w=1200&q=88"
  }
};

function applyConfig(){
  document.querySelectorAll('[data-price]').forEach(el=>{el.textContent=SITE_CONFIG.prices[el.dataset.price]});
  document.querySelectorAll('[data-link]').forEach(el=>{el.href=SITE_CONFIG.links[el.dataset.link]});
  document.querySelectorAll('[data-footer]').forEach(el=>{el.href=SITE_CONFIG.links[el.dataset.footer]});
  document.querySelectorAll('[data-img]').forEach(el=>{const url=SITE_CONFIG.images[el.dataset.img]; if(url) el.style.backgroundImage=`linear-gradient(180deg,rgba(23,60,52,.02),rgba(23,60,52,.08)),url("${url}")`});
}

function setupReveal(){
  const els=[...document.querySelectorAll('.reveal')];
  if(!('IntersectionObserver' in window)){els.forEach(el=>el.classList.add('is-visible'));return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -40px'});
  els.forEach(el=>observer.observe(el));
}

function setupBrandColor(){
  const brand=document.querySelector('.brand');
  const mark=document.querySelector('.brand-mark');
  if(brand) brand.style.color='#c5423b';
  if(mark) mark.style.backgroundColor='#c5423b';
}

document.addEventListener('DOMContentLoaded',()=>{applyConfig();setupReveal();setupBrandColor()});
