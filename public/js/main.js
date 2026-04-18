/* ============================================================
   WILD ATLANTIC MADEIRA 4x4 — Main JavaScript
   Loads content dynamically from /api/site
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {

  // ── LOAD SITE DATA FROM API ─────────────────────────────────
  let siteData = null;
  try {
    const r = await fetch('/api/site');
    siteData = await r.json();
    applyContent(siteData.content);
    renderPasseios(siteData.passeios);
    renderGaleria(siteData.galeria);
    updateWhatsApp(siteData.content.whatsapp);
  } catch(e) {
    console.warn('Could not load site data from API, using static content.');
  }

  // ── APPLY CONTENT ───────────────────────────────────────────
  function setText(id, val) { const el = document.getElementById(id); if (el) el.textContent = val ?? ''; }
  function setAttr(id, attr, val) { const el = document.getElementById(id); if (el && val) el.setAttribute(attr, val); }

  function applyContent(c) {
    if (!c) return;
    setText('heroEyebrow', c.hero_eyebrow);
    setText('heroTitle1', c.hero_title1);
    setText('heroTitle2', c.hero_title2);
    setText('heroTitle3', c.hero_title3);
    setText('heroSub', c.hero_sub);
    if (c.hero_bg) document.querySelector('.hero-bg')?.style.setProperty('background-image', `url('${c.hero_bg}')`);
    setText('sobreTitulo', c.sobre_titulo);
    setText('sobreTexto1', c.sobre_texto1);
    setText('sobreTexto2', c.sobre_texto2);
    setText('sobreAnos', c.sobre_anos);

    // Imagem principal — mostra ou esconde
    const img1 = document.getElementById('sobreImg1');
    if (img1) {
      if (c.sobre_img1) {
        img1.src = c.sobre_img1;
        img1.closest('.sobre-img-main').style.display = '';
      } else {
        img1.closest('.sobre-img-main').style.display = 'none';
      }
    }
    // Imagem secundária — mostra ou esconde
    const img2 = document.getElementById('sobreImg2');
    if (img2) {
      if (c.sobre_img2) {
        img2.src = c.sobre_img2;
        img2.closest('.sobre-img-accent').style.display = '';
      } else {
        img2.closest('.sobre-img-accent').style.display = 'none';
      }
    }

    setText('stat1n', c.stat1_n); setText('stat1l', c.stat1_l);
    setText('stat2n', c.stat2_n); setText('stat2l', c.stat2_l);
    setText('stat3n', c.stat3_n); setText('stat3l', c.stat3_l);
    setText('contactoTelefone', c.telefone);
    setText('contactoEmail', c.email);
    setText('contactoHorario', c.horario);
    setAttr('linkTelefone', 'href', `tel:${c.telefone}`);
    setAttr('linkEmail', 'href', `mailto:${c.email}`);
    if (c.instagram) document.querySelectorAll('.social-instagram').forEach(a => a.href = c.instagram);
    if (c.facebook)  document.querySelectorAll('.social-facebook').forEach(a => a.href = c.facebook);
    if (c.youtube)   document.querySelectorAll('.social-youtube').forEach(a => a.href = c.youtube);
    if (c.tripadvisor) document.querySelectorAll('.social-tripadvisor').forEach(a => a.href = c.tripadvisor);
  }

  function updateWhatsApp(num) {
    if (!num) return;
    const msg = encodeURIComponent('Olá! Gostaria de saber mais sobre os vossos passeios.');
    const url = `https://wa.me/${num}?text=${msg}`;
    document.querySelectorAll('.whatsapp-link').forEach(a => a.href = url);
  }

  function renderPasseios(passeios) {
    if (!passeios?.length) return;
    const grid = document.getElementById('passeiosGrid');
    if (!grid) return;
    grid.innerHTML = passeios.map(p => `
      <div class="passeio-card" data-aos>
        <div class="card-img">
          <img src="${p.imagem||''}" alt="${p.titulo}" loading="lazy" onerror="this.style.display='none'" />
          ${p.badge ? `<div class="card-badge ${p.badge_tipo==='gold'?'badge-gold':''}">${p.badge}</div>` : ''}
        </div>
        <div class="card-body">
          <div class="card-meta"><span>⏱ ${p.duracao}</span><span>👥 ${p.pax}</span></div>
          <h3>${p.titulo}</h3>
          <p>${p.descricao}</p>
          <div class="card-footer">
            <span class="price">A partir de <strong>${p.preco}</strong></span>
            <a href="#reservas" class="btn btn-sm">Reservar</a>
          </div>
        </div>
      </div>`).join('');
    grid.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));
  }

  function renderGaleria(galeria) {
    // Galeria agora é gerida pelo R2 no index.html
    // Só usa a galeria da DB se não houver fotos no R2
    const grid = document.getElementById('galeriaGrid');
    if (!grid || !galeria?.length) return;
    // Não sobrescreve se já tiver conteúdo do R2
    if (grid.children.length > 0) return;
    grid.innerHTML = galeria.map(g => `
      <div class="gal-item ${g.largura==='wide'?'gal-wide':''} ${g.largura==='tall'?'gal-tall':''}" data-lightbox>
        <img src="${g.ficheiro}" alt="" loading="lazy" />
      </div>`).join('');
    attachLightbox();
  }

  // ── NAV SCROLL ──────────────────────────────────────────────
  const nav = document.getElementById('nav');
  const onScroll = () => { nav.classList.toggle('scrolled', window.scrollY > 60); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── MOBILE NAV ──────────────────────────────────────────────
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { links.classList.remove('open'); document.body.style.overflow = ''; });
  });

  // ── PARTICLES ───────────────────────────────────────────────
  const particlesEl = document.getElementById('particles');
  if (particlesEl) {
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 15) + 's';
      p.style.animationDelay   = (Math.random() * -20) + 's';
      p.style.width  = (1 + Math.random() * 3) + 'px';
      p.style.height = p.style.width;
      particlesEl.appendChild(p);
    }
  }

  // ── AOS ─────────────────────────────────────────────────────
  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), 120);
        aosObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

  // ── LIGHTBOX ─────────────────────────────────────────────────
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  function attachLightbox() {
    document.querySelectorAll('[data-lightbox]').forEach(item => {
      item.removeEventListener('click', item._lbHandler);
      item._lbHandler = () => {
        const src = item.dataset.src || item.querySelector('img')?.src;
        if (src) {
          lightboxImg.src = src.replace(/w=\d+/, 'w=1600');
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      };
      item.addEventListener('click', item._lbHandler);
    });
  }
  attachLightbox();

  const closeLightbox = () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; };
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  // ── REVIEWS SLIDER ──────────────────────────────────────────
  const track   = document.getElementById('reviewsTrack');
  const btnPrev = document.getElementById('revPrev');
  const btnNext = document.getElementById('revNext');

  function initSlider() {
    if (!track || !btnPrev || !btnNext) return;
    const cards = track.querySelectorAll('.review-card');
    if (!cards.length) return;
    let current = 0;
    const total = cards.length;
    const visible = () => window.innerWidth < 700 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const slide = () => {
      const v = visible(), max = Math.max(0, total - v);
      current = Math.max(0, Math.min(current, max));
      const w = cards[0].getBoundingClientRect().width + 24;
      track.style.transform = `translateX(-${current * w}px)`;
    };
    btnNext.addEventListener('click', () => { current++; slide(); });
    btnPrev.addEventListener('click', () => { current--; slide(); });
    window.addEventListener('resize', slide);
    let autoSlide = setInterval(() => { const v=visible(); current=current<total-v?current+1:0; slide(); }, 5000);
    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => { const v=visible(); current=current<total-v?current+1:0; slide(); }, 5000);
    });
  }

  // Inicializa slider depois das reviews carregarem
  setTimeout(initSlider, 1500);

  // ── RESERVATION FORM ─────────────────────────────────────────
  const form    = document.getElementById('reservaForm');
  const success = document.getElementById('formSuccess');
  const dateInput = document.getElementById('data');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = '<span>A enviar...</span>'; btn.disabled = true;
    try {
      const fd = new FormData(form);
      const body = Object.fromEntries(fd.entries());
      const r = await fetch('/api/reserva', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const d = await r.json();
      if (d.success) {
        form.reset();
        success.classList.add('show');
        setTimeout(() => success.classList.remove('show'), 6000);
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } catch(e) { console.error(e); }
    btn.innerHTML = original; btn.disabled = false;
  });

  // ── SMOOTH SCROLL ───────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // ── COUNTER ANIMATION ────────────────────────────────────────
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const text = el.textContent;
      const num = parseInt(text.replace(/\D/g,''));
      const suffix = text.replace(/[\d]/g,'');
      if (!num) return;
      let start = 0;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts-start)/1500, 1);
        el.textContent = Math.floor((1-Math.pow(1-p,3))*num)+suffix;
        if (p<1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.8 });
  document.querySelectorAll('.stat-n').forEach(el => counterObserver.observe(el));

  // ── PARALLAX HERO ────────────────────────────────────────────
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    window.addEventListener('scroll', () => {
      if (window.scrollY < window.innerHeight)
        heroBg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    }, { passive: true });
  }

});
