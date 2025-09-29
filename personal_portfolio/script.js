// Theme toggle with localStorage
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');
const scrollTopBtn = document.getElementById('scrollTop');

function applyTheme(theme) {
  if (theme === 'dark') document.body.classList.add('dark');
  else document.body.classList.remove('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
});

// Restore theme
applyTheme(localStorage.getItem('theme') || 'light');

// Mobile menu
menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));

// Demo modal
function showDemo(text) {
  const tmpl = document.getElementById('modalTemplate');
  const clone = tmpl.content.cloneNode(true);
  document.body.appendChild(clone);
  document.getElementById('modalContent').innerText = text;
  document.getElementById('modalBackdrop').addEventListener('click', (e)=>{ if(e.target.id==='modalBackdrop') closeModal(); });
  document.addEventListener('keydown', function esc(e){ if(e.key==='Escape') closeModal(); }, { once: true });
}

function closeModal(){
  const backdrop = document.getElementById('modalBackdrop');
  if(backdrop) backdrop.remove();
}

// Contact handler (demo)
function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };
  // simple validation demo
  if(!data.name || !data.email || !data.message){
    alert('Please fill required fields.');
    return false;
  }
  alert('Thanks ' + data.name + '! Your message was received (demo).');
  form.reset();
  return false;
}

function resetForm(){document.getElementById('contact-form').reset();}

// Scroll top
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 300) scrollTopBtn.style.display = 'block';
  else scrollTopBtn.style.display = 'none';
});
scrollTopBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
