function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  window.scrollTo(0, 0);
  setTimeout(triggerReveal, 50);
}

function triggerReveal() {
  const els = document.querySelectorAll(
    '.page.active .scroll-reveal, .page.active .scroll-reveal-left, .page.active .scroll-reveal-right'
  );
  els.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 60);
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
  .forEach(el => observer.observe(el));

triggerReveal();