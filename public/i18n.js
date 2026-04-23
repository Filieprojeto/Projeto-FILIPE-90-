/**
 * i18n.js — Wild Atlantic Madeira 4x4
 * Carrega textos do backend (editados pelo admin) e traduz com a API se necessário.
 * Idiomas: pt (default) | en
 */

(function () {
  'use strict';

  /* ── Estado ────────────────────────────────────────────── */
  const STORAGE_KEY = 'wam_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'pt';
  let siteTexts = {};        // textos guardados no backend (em PT)
  let translationCache = {}; // cache: { en: { key: texto } }

  /* ── Textos fallback (defaults hardcoded) ──────────────── */
  const DEFAULTS = {
    heroEyebrow:   'Madeira · Ilha da Magia',
    heroTitle1:    'A Natureza',
    heroTitle2:    'Selvagem',
    heroTitle3:    'Espera por Ti',
    heroSub:       'Passeios privados exclusivos em jipe 4×4 pelas montanhas, florestas e levadas da Madeira. Uma aventura autêntica, ao teu ritmo.',
    stat1n:        '500+',
    stat1l:        'Clientes Felizes',
    stat2n:        '15+',
    stat2l:        'Rotas Exclusivas',
    stat3n:        '100%',
    stat3l:        'Privado',
    sobreTitulo:   'Guias Locais.\nPaixão Autêntica.',
    sobreAnos:     '10',
    sobreTexto1:   'Somos uma empresa familiar com raízes profundas na Ilha da Madeira. Conhecemos cada curva de estrada, cada miradouro escondido, cada levada que serpenteia pela floresta laurissilva.',
    sobreTexto2:   'Os nossos passeios em jipe 4×4 são totalmente privados — só a sua família ou grupo. Sem multidões, sem pressa. Apenas a Madeira na sua forma mais autêntica.',
    contactoTelefone: '+351 912 345 678',
    contactoEmail:    'info@wildatlanticmadeira4x4.pt',
    contactoHorario:  'Todos os dias · 07:00 – 20:00',
  };

  /* ── Tradução via backend proxy → Anthropic ───────────── */
  async function translateTexts(texts, targetLang) {
    if (targetLang === 'pt') return texts;

    const cacheKey = targetLang;
    if (!translationCache[cacheKey]) translationCache[cacheKey] = {};

    // Filtra só o que ainda não foi traduzido
    const toTranslate = {};
    for (const [k, v] of Object.entries(texts)) {
      if (!translationCache[cacheKey][k]) toTranslate[k] = v;
    }

    if (Object.keys(toTranslate).length === 0) {
      return { ...texts, ...translationCache[cacheKey] };
    }

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texts: toTranslate, targetLang })
      });
      if (!res.ok) throw new Error('translate failed');
      const data = await res.json();
      Object.assign(translationCache[cacheKey], data.translated || {});
    } catch (e) {
      console.warn('[i18n] Translation failed:', e.message);
    }

    return { ...texts, ...translationCache[cacheKey] };
  }

  /* ── Aplica textos ao DOM ──────────────────────────────── */
  function applyTexts(texts) {
    for (const [id, value] of Object.entries(texts)) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (id === 'sobreTitulo') {
        // Mantém o <em> para o italic
        const parts = value.split('\n');
        el.innerHTML = parts[0] + (parts[1] ? '<br><em>' + parts[1] + '</em>' : '');
      } else if (id === 'linkEmail') {
        el.href = 'mailto:' + value;
        const span = document.getElementById('contactoEmail');
        if (span) span.textContent = value;
      } else {
        el.textContent = value;
      }
    }
  }

  /* ── Carrega textos do backend ─────────────────────────── */
  async function loadAndApply(lang) {
    // 1. Busca textos guardados pelo admin (sempre em PT)
    let base = { ...DEFAULTS };
    try {
      const res = await fetch('/api/content');
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data === 'object') base = { ...base, ...data };
      }
    } catch (e) {
      console.warn('[i18n] Could not load content from backend');
    }

    siteTexts = base;

    // 2. Traduz se necessário
    const final = await translateTexts(base, lang);

    // 3. Aplica ao DOM
    applyTexts(final);

    // 4. Atualiza atributo lang do <html>
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt';

    // 5. Actualiza UI do seletor
    updateSwitcherUI(lang);
  }

  /* ── Cria o seletor de língua ──────────────────────────── */
  function createSwitcher() {
    // Cria o elemento
    const switcher = document.createElement('div');
    switcher.id = 'langSwitcher';
    switcher.innerHTML = `
      <button class="lang-btn ${currentLang === 'pt' ? 'active' : ''}" data-lang="pt" aria-label="Português">
        <span class="lang-flag">🇵🇹</span><span class="lang-label">PT</span>
      </button>
      <div class="lang-divider"></div>
      <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" aria-label="English">
        <span class="lang-flag">🇬🇧</span><span class="lang-label">EN</span>
      </button>
    `;

    // Eventos
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const lang = btn.dataset.lang;
        if (lang === currentLang) return;
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        // Loading state
        switcher.classList.add('loading');
        await loadAndApply(lang);
        switcher.classList.remove('loading');
      });
    });

    return switcher;
  }

  function updateSwitcherUI(lang) {
    document.querySelectorAll('#langSwitcher .lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  /* ── Injeta CSS do seletor ─────────────────────────────── */
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* ── Language Switcher ── */
      #langSwitcher {
        display: flex;
        align-items: center;
        gap: 2px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 100px;
        padding: 3px;
        backdrop-filter: blur(8px);
        transition: opacity .2s;
        flex-shrink: 0;
      }
      #langSwitcher.loading { opacity: 0.5; pointer-events: none; }

      .lang-btn {
        display: flex;
        align-items: center;
        gap: 5px;
        background: transparent;
        border: none;
        border-radius: 100px;
        padding: 5px 10px;
        cursor: pointer;
        color: rgba(255,255,255,0.55);
        font-family: 'DM Sans', sans-serif;
        font-size: .72rem;
        font-weight: 500;
        letter-spacing: .08em;
        text-transform: uppercase;
        transition: all .2s;
        white-space: nowrap;
        line-height: 1;
      }
      .lang-btn:hover { color: rgba(255,255,255,0.9); }
      .lang-btn.active {
        background: rgba(255,255,255,0.15);
        color: #fff;
        box-shadow: 0 1px 4px rgba(0,0,0,0.3);
      }
      .lang-flag { font-size: .95rem; line-height: 1; }
      .lang-label { line-height: 1; }
      .lang-divider { width: 1px; height: 14px; background: rgba(255,255,255,0.15); flex-shrink: 0; }

      /* ── Nav integration ── */
      .nav-links li:last-child { display: flex; align-items: center; }

      /* ── Mobile ── */
      @media (max-width: 768px) {
        #langSwitcher {
          margin: .5rem auto 0;
          width: fit-content;
        }
        /* No menu mobile, o switcher aparece no fundo */
        .nav-links.open #langSwitcher {
          margin: .75rem auto .5rem;
        }
      }

      /* ── Loading spinner no texto enquanto traduz ── */
      .i18n-loading {
        opacity: 0.4;
        transition: opacity .3s;
      }
    `;
    document.head.appendChild(style);
  }

  /* ── Bootstrap ─────────────────────────────────────────── */
  function init() {
    injectStyles();

    // Aguarda o nav estar no DOM
    const tryInsert = () => {
      const navLinks = document.getElementById('navLinks');
      if (!navLinks) { setTimeout(tryInsert, 50); return; }

      // Cria item de nav com o seletor
      const li = document.createElement('li');
      li.appendChild(createSwitcher());
      navLinks.appendChild(li);

      // Carrega e aplica textos
      loadAndApply(currentLang);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', tryInsert);
    } else {
      tryInsert();
    }
  }

  init();
})();
