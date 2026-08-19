const $=s=>document.querySelector(s);
const theme=$('#themeToggle');
if(localStorage.getItem('eventnova-theme')==='dark') document.body.classList.add('dark');
if(theme) theme.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('eventnova-theme',document.body.classList.contains('dark')?'dark':'light')});
const menu=$('#menuBtn'), nav=$('#mainNav'); if(menu&&nav) menu.addEventListener('click',()=>nav.classList.toggle('open'));
function searchFromHome(){const q=$('#homeSearch')?.value.trim();location.href='events.html'+(q?'?search='+encodeURIComponent(q):'')}
function demoLogin(e){e.preventDefault();alert('Demo login successful.');location.href='index.html'}
function demoSignup(e){e.preventDefault();alert('Demo account created.');location.href='login.html'}