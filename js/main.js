// Pilgrims Revenge — site JS
document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Header sticky shadow on scroll
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.service-card, .fleet-item, .process-step, .testimonial, .contact-info-block, .split-content, .split-image, .service-detail, .gallery-item');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('fade-up');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.10 });
    revealEls.forEach(el => {
      el.style.opacity = '0';
      io.observe(el);
    });
  }

  // Contact form (front-end only confirmation)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (form.elements['name']?.value || '').trim();
      const note = form.querySelector('.form-status');
      if (note) {
        note.textContent = `Thanks${name ? ', ' + name.split(' ')[0] : ''} — we'll be in touch within one business day. Fair winds.`;
        note.style.display = 'block';
      }
      form.reset();
    });
  }

  // Mark current page in nav
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
