const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.nav-menu');
const links=document.querySelectorAll('.nav-menu a');

function updateHeader(){
  header?.classList.toggle('scrolled',window.scrollY>30);
}
window.addEventListener('scroll',updateHeader,{passive:true});
updateHeader();

toggle?.addEventListener('click',()=>{
  const open=menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
});

links.forEach(link=>link.addEventListener('click',()=>{
  menu?.classList.remove('open');
  toggle?.setAttribute('aria-expanded','false');
  toggle?.setAttribute('aria-label','Open navigation');
}));

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...links];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));
  });
},{rootMargin:'-40% 0px -50% 0px',threshold:0});
sections.forEach(section=>observer.observe(section));

document.querySelectorAll('a[href^="#"]').forEach(anchor=>anchor.addEventListener('click',event=>{
  const id=anchor.getAttribute('href');
  const target=id&&document.querySelector(id);
  if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
}));
