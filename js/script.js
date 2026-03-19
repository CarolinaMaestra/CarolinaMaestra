// ── Nav activo al hacer scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateNav() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) el.classList.add('visible');
  });
}

// ── Hamburger menu ──
const toggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Cerrar menú al hacer click en un link
navLinks.forEach(a => {
  a.addEventListener('click', () => navMenu.classList.remove('open'));
});

// ── Foto fallback ──
const img = document.querySelector('.photo-wrap img');
const fallback = document.querySelector('.photo-fallback');
if (img && fallback) {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    fallback.style.display = 'flex';
  });
}

window.addEventListener('scroll', () => { updateNav(); checkReveal(); });
window.addEventListener('load', () => { updateNav(); checkReveal(); });