const glow=document.createElement('div');
glow.className='cursor-glow';
document.body.appendChild(glow);
document.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px';
  glow.style.top=e.clientY+'px';
  document.body.classList.add('cursor-active');
},{passive:true});
document.addEventListener('pointerleave',()=>document.body.classList.remove('cursor-active'));

const menu=document.querySelector('.menu'),links=document.querySelector('.links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));

const modal=document.getElementById('modal');
document.getElementById('details').addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.getElementById('close').addEventListener('click',closeModal);
document.querySelector('.backdrop').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});

document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('form').addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.getElementById('name').value.trim(),email=document.getElementById('email').value.trim(),message=document.getElementById('message').value.trim();
 if(!name||!email||!message)return;
 location.href=`mailto:sentinokdir10@gmail.com?subject=${encodeURIComponent('Portfolio contact from '+name)}&body=${encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message)}`;
});
