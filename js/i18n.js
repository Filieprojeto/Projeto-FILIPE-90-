/**
 * Wild Atlantic Madeira 4x4 — i18n v3
 * PT: usa os textos do admin (via evento siteDataReady do main.js)
 * EN: traduz via /api/translate com cache localStorage
 */

const STATIC_TRANSLATIONS = {
  pt: {
    nav_sobre:'Sobre',nav_passeios:'Passeios',nav_galeria:'Galeria',
    nav_videos:'Vídeos',nav_reservas:'Reservas',nav_contacto:'Contacto',
    hero_btn_reservar:'Reservar Passeio',hero_btn_ver:'Ver Experiências',
    hero_scroll:'Explorar',
    badge_popular:'Mais Popular',badge_exclusivo:'Exclusivo',
    preco_from:'A partir de',preco_consulta:'Sob <strong>consulta</strong>',
    btn_reservar:'Reservar',btn_pedir_info:'Pedir Info',
    videos_tag:'Em Movimento',videos_titulo:'Sinta a Adrenalina',
    videos_desc:'Cada curva revela uma nova paisagem. Cada trilho conta uma história.',
    videos_empty:'Em breve novos vídeos. Fique atento!',
    galeria_tag:'Galeria',galeria_titulo:'A Madeira em Imagens',
    reviews_tag:'Clientes',reviews_titulo:'O Que Dizem de Nós',
    review_form_titulo:'Partilhe a Sua Experiência',
    review_form_desc:'A sua opinião ajuda outros aventureiros a descobrir a Madeira.',
    review_stars_label:'A sua avaliação *',review_nome_label:'Nome *',
    review_nome_placeholder:'O seu nome',review_comentario_label:'Comentário *',
    review_comentario_placeholder:'Conte a sua experiência...',
    review_max:'Máx. 500 caracteres',review_btn:'Enviar Comentário',
    review_err_stars:'Por favor selecione uma avaliação em estrelas.',
    review_err_nome:'Por favor escreva o seu nome.',
    review_err_comentario:'Por favor escreva um comentário.',
    review_success:'✅ Obrigado! O seu comentário será publicado brevemente.',
    review_err_generic:'Erro ao enviar.',review_err_conn:'Erro de ligação. Tente novamente.',
    reservas_tag:'Reservas',reservas_titulo:'Reserve a Sua Aventura',
    reservas_desc:'Preencha o formulário e entraremos em contacto em menos de 24 horas.',
    form_nome:'Nome Completo *',form_nome_ph:'O seu nome',
    form_email:'Email *',form_email_ph:'email@exemplo.com',
    form_telefone:'Telefone / WhatsApp',form_telefone_ph:'+351 900 000 000',
    form_data:'Data Preferida *',form_pessoas:'Número de Pessoas *',
    form_pessoas_sel:'Selecionar...',form_pessoa:'pessoa',form_pessoas_plural:'pessoas',
    form_passeio:'Tipo de Passeio *',form_passeio_sel:'Selecionar...',
    form_mensagem:'Pedidos Especiais / Notas',
    form_mensagem_ph:'Diga-nos algo mais sobre si ou o que espera desta experiência...',
    form_gdpr:'Concordo com a <a href="#">Política de Privacidade</a> e o tratamento dos meus dados pessoais.',
    form_btn:'Enviar Pedido de Reserva',
    form_success:'✅ Pedido enviado! Entraremos em contacto brevemente.',
    aside_titulo:'Porquê Reservar Connosco?',
    aside_items:['✅ Confirmação em menos de 24h','✅ Cancelamento gratuito até 24h antes','✅ Passeios 100% privados','✅ Pegar no hotel/alojamento é grátis no Funchal','✅ Água a bordo','✅ Parceiro - www.reserv.pt'],
    whatsapp_titulo:'Prefere falar connosco?',
    whatsapp_desc:'Contacte-nos directamente pelo WhatsApp para uma resposta imediata.',
    whatsapp_btn:'Falar no WhatsApp',
    whatsapp_msg:'Olá! Gostaria de saber mais sobre os vossos passeios.',
    contacto_tag:'Contacto',contacto_titulo:'Fale Connosco',
    contacto_local_label:'Localização',contacto_local_val:'Funchal, Ilha da Madeira<br>Portugal',
    contacto_tel_label:'Telefone',contacto_email_label:'Email',
    contacto_horario_label:'Horário',contacto_horario_val:'Todos os dias · 07:00 – 20:00',
    sobre_tag:'Sobre Nós',sobre_anos_label:'Anos de<br>Experiência',
    passeios_tag:'Experiências',passeios_titulo:'Os Nossos Passeios',
    passeios_desc:'Cada rota foi desenhada para revelar a Madeira de uma perspectiva única. Escolha a sua aventura.',
    footer_desc:'Passeios privados em jipe 4×4 pela Ilha da Madeira. Aventura autêntica, natureza selvagem.',
    footer_passeios:'Passeios',footer_empresa:'Empresa',footer_legal:'Legal',
    footer_sobre:'Sobre Nós',footer_galeria:'Galeria',footer_videos:'Vídeos',
    footer_testemunhos:'Testemunhos',footer_contacto:'Contacto',
    footer_privacidade:'Política de Privacidade',footer_termos:'Termos e Condições',
    footer_cancelamento:'Política de Cancelamento',footer_reclamacoes:'Livro de Reclamações',
    footer_copy:'© 2025 Wild Atlantic Madeira 4×4. Todos os direitos reservados.',
    footer_license:'Licença Turismo RNAVT nº XXXX · Made with ❤️ in Madeira',
    feat1_title:'Guias Certificados',feat1_desc:'Experiência local de décadas',
    feat2_title:'Segurança Total',feat2_desc:'Viaturas preparadas e seguras',
    feat3_title:'Eco-Responsável',feat3_desc:'Respeito pela natureza',
    feat4_title:'Multilingue',feat4_desc:'PT · EN',
    feat5_title:'Damos de volta à comunidade',feat5_desc:'A sua doação',
    feat6_title:'Associação de resgate Animal',feat6_desc:'1€ por pessoa',
    feat7_title:'Associação para pessoas com dificuldades Especiais',feat7_desc:'1€ por pessoa',
    p1_titulo:'Picos & Montanhas',p2_titulo:'Floresta Laurissilva',
    p3_titulo:'Costa Norte Selvagem',p4_titulo:'Santana & Paul da Serra',
    p5_titulo:'Sunrise no Pico',p6_titulo:'Tour à Medida',
    p1_desc:'Ascenda ao Pico do Arieiro (1818m) e ao Pico Ruivo, os pontos mais altos da Madeira. Vistas acima das nuvens.',
    p2_desc:'Mergulhe na floresta primeva Património Mundial UNESCO. Levadas, fetos gigantes e silêncio absoluto.',
    p3_desc:'Falésias dramáticas, cascatas que caem para o oceano, aldeias remotas. A Madeira secreta que poucos conhecem.',
    p4_desc:'As casas típicas de Santana, o planalto agreste do Paul da Serra e as levadas mais remotas da ilha.',
    p5_desc:'Parta antes do amanhecer para assistir ao nascer do sol acima das nuvens. Uma experiência inesquecível.',
    p6_desc:'Desenhamos o passeio perfeito para si. Escolha os locais, o ritmo e as actividades. A sua Madeira.',
    hero_eyebrow:'Ilha da Madeira · Portugal',
    hero_title1:'A Natureza',hero_title2:'Selvagem',hero_title3:'Espera por Ti',
    hero_sub:'Passeios privados exclusivos em jipe 4×4 pelas montanhas, florestas e levadas da Madeira. Uma aventura autêntica, ao teu ritmo.',
    stat1_l:'Clientes Felizes',stat2_l:'Rotas Exclusivas',stat3_l:'Privado',
    sobre_titulo:'Guias Locais.<br><em>Paixão Autêntica.</em>',
    sobre_texto1:'Somos uma empresa familiar com raízes profundas na Ilha da Madeira.',
    sobre_texto2:'Os nossos passeios em jipe 4×4 são totalmente privados — só a sua família ou grupo.',
  },
  en: {
    nav_sobre:'About',nav_passeios:'Tours',nav_galeria:'Gallery',
    nav_videos:'Videos',nav_reservas:'Book',nav_contacto:'Contact',
    hero_btn_reservar:'Book a Tour',hero_btn_ver:'View Experiences',
    hero_scroll:'Explore',
    badge_popular:'Most Popular',badge_exclusivo:'Exclusive',
    preco_from:'From',preco_consulta:'On <strong>request</strong>',
    btn_reservar:'Book',btn_pedir_info:'Enquire',
    videos_tag:'In Motion',videos_titulo:'Feel the Thrill',
    videos_desc:'Every bend reveals a new landscape. Every trail tells a story.',
    videos_empty:'New videos coming soon. Stay tuned!',
    galeria_tag:'Gallery',galeria_titulo:'Madeira in Pictures',
    reviews_tag:'Clients',reviews_titulo:'What They Say About Us',
    review_form_titulo:'Share Your Experience',
    review_form_desc:'Your feedback helps other adventurers discover Madeira.',
    review_stars_label:'Your rating *',review_nome_label:'Name *',
    review_nome_placeholder:'Your name',review_comentario_label:'Comment *',
    review_comentario_placeholder:'Tell us about your experience...',
    review_max:'Max. 500 characters',review_btn:'Submit Review',
    review_err_stars:'Please select a star rating.',
    review_err_nome:'Please enter your name.',
    review_err_comentario:'Please write a comment.',
    review_success:'✅ Thank you! Your review will be published shortly.',
    review_err_generic:'Error submitting.',review_err_conn:'Connection error. Please try again.',
    reservas_tag:'Bookings',reservas_titulo:'Book Your Adventure',
    reservas_desc:'Fill in the form and we will get back to you within 24 hours.',
    form_nome:'Full Name *',form_nome_ph:'Your name',
    form_email:'Email *',form_email_ph:'email@example.com',
    form_telefone:'Phone / WhatsApp',form_telefone_ph:'+44 7000 000 000',
    form_data:'Preferred Date *',form_pessoas:'Number of People *',
    form_pessoas_sel:'Select...',form_pessoa:'person',form_pessoas_plural:'people',
    form_passeio:'Tour Type *',form_passeio_sel:'Select...',
    form_mensagem:'Special Requests / Notes',
    form_mensagem_ph:'Tell us more about yourself or what you expect from this experience...',
    form_gdpr:'I agree to the <a href="#">Privacy Policy</a> and the processing of my personal data.',
    form_btn:'Send Booking Request',
    form_success:'✅ Request sent! We will be in touch shortly.',
    aside_titulo:'Why Book With Us?',
    aside_items:['✅ Confirmation within 24h','✅ Free cancellation up to 24h before','✅ 100% private tours','✅ Pick-up from your hotel in Funchal is free','✅ Water on board','✅ Partner - www.reserv.pt'],
    whatsapp_titulo:'Prefer to talk to us?',
    whatsapp_desc:'Contact us directly on WhatsApp for an immediate response.',
    whatsapp_btn:'Chat on WhatsApp',
    whatsapp_msg:'Hello! I would like to know more about your tours.',
    contacto_tag:'Contact',contacto_titulo:'Get In Touch',
    contacto_local_label:'Location',contacto_local_val:'Funchal, Madeira Island<br>Portugal',
    contacto_tel_label:'Phone',contacto_email_label:'Email',
    contacto_horario_label:'Hours',contacto_horario_val:'Every day · 07:00 – 20:00',
    sobre_tag:'About Us',sobre_anos_label:'Years of<br>Experience',
    passeios_tag:'Experiences',passeios_titulo:'Our Tours',
    passeios_desc:'Each route was designed to reveal Madeira from a unique perspective. Choose your adventure.',
    footer_desc:'Private 4×4 jeep tours on Madeira Island. Authentic adventure, wild nature.',
    footer_passeios:'Tours',footer_empresa:'Company',footer_legal:'Legal',
    footer_sobre:'About Us',footer_galeria:'Gallery',footer_videos:'Videos',
    footer_testemunhos:'Testimonials',footer_contacto:'Contact',
    footer_privacidade:'Privacy Policy',footer_termos:'Terms & Conditions',
    footer_cancelamento:'Cancellation Policy',footer_reclamacoes:'Complaints Book',
    footer_copy:'© 2025 Wild Atlantic Madeira 4×4. All rights reserved.',
    footer_license:'Tourism Licence RNAVT nº XXXX · Made with ❤️ in Madeira',
    feat1_title:'Certified Guides',feat1_desc:'Decades of local experience',
    feat2_title:'Full Safety',feat2_desc:'Equipped and safe vehicles',
    feat3_title:'Eco-Responsible',feat3_desc:'Respect for nature',
    feat4_title:'Multilingual',feat4_desc:'PT · EN',
    feat5_title:'Giving back to the community',feat5_desc:'Your donation',
    feat6_title:'Animal Rescue Association',feat6_desc:'€1 per person',
    feat7_title:'Association for people with special needs',feat7_desc:'€1 per person',
  }
};

let currentLang = 'pt';
let adminContentPT = {};
let adminContentEN = {};
let siteDataLoaded = false;

const ADMIN_TRANSLATABLE_KEYS = [
  'hero_eyebrow','hero_title1','hero_title2','hero_title3','hero_sub',
  'sobre_titulo','sobre_texto1','sobre_texto2',
  'stat1_l','stat2_l','stat3_l','horario',
];

function t(key) {
  if (currentLang === 'en') {
    if (adminContentEN[key] !== undefined) return adminContentEN[key];
    if (STATIC_TRANSLATIONS.en[key] !== undefined) return STATIC_TRANSLATIONS.en[key];
    if (adminContentPT[key] !== undefined) return adminContentPT[key];
    return STATIC_TRANSLATIONS.pt[key] || key;
  }
  if (adminContentPT[key] !== undefined) return adminContentPT[key];
  return STATIC_TRANSLATIONS.pt[key] || key;
}

function mapAdminContent(content) {
  if (!content) return {};
  const mapped = {};
  ['hero_eyebrow','hero_title1','hero_title2','hero_title3','hero_sub',
   'sobre_titulo','sobre_texto1','sobre_texto2','sobre_anos',
   'stat1_n','stat1_l','stat2_n','stat2_l','stat3_n','stat3_l',
   'telefone','email','whatsapp','horario'].forEach(k => {
    if (content[k] !== undefined && content[k] !== '') mapped[k] = content[k];
  });
  return mapped;
}

const CACHE_TTL = 24 * 60 * 60 * 1000;

function getCacheKey() {
  const str = ADMIN_TRANSLATABLE_KEYS.map(k => adminContentPT[k] || '').join('|');
  try { return 'wam_trans_en_' + btoa(unescape(encodeURIComponent(str))).slice(0,32); }
  catch { return 'wam_trans_en_default'; }
}

function loadTranslationCache() {
  try {
    const raw = localStorage.getItem(getCacheKey());
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (Date.now() - data.timestamp > CACHE_TTL) { localStorage.removeItem(getCacheKey()); return null; }
    return data.translations;
  } catch { return null; }
}

function saveTranslationCache(translations) {
  try {
    const key = getCacheKey();
    localStorage.setItem(key, JSON.stringify({ translations, timestamp: Date.now() }));
    Object.keys(localStorage).filter(k => k.startsWith('wam_trans_en_') && k !== key).forEach(k => localStorage.removeItem(k));
  } catch {}
}

async function translateAdminTexts() {
  const toTranslate = {};
  ADMIN_TRANSLATABLE_KEYS.forEach(k => { if (adminContentPT[k]) toTranslate[k] = adminContentPT[k]; });
  if (Object.keys(toTranslate).length === 0) return {};

  const cached = loadTranslationCache();
  if (cached) { console.log('[i18n] Usando cache EN'); return cached; }

  console.log('[i18n] A traduzir', Object.keys(toTranslate).length, 'campos para EN...');
  try {
    const resp = await fetch('/api/translate', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ texts: toTranslate, from:'pt', to:'en' }),
      signal: AbortSignal.timeout(15000),
    });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const data = await resp.json();
    if (data.translations) {
      saveTranslationCache(data.translations);
      console.log('[i18n] Tradução OK:', Object.keys(data.translations).length, 'campos');
      return data.translations;
    }
  } catch(err) { console.warn('[i18n] Tradução falhou:', err.message); }
  return {};
}

function applyTranslations() {
  const lang = currentLang;
  document.documentElement.lang = lang;
  document.title = lang === 'en'
    ? 'Wild Atlantic Madeira 4x4 | Private Jeep Tours'
    : 'Wild Atlantic Madeira 4x4 | Passeios Privados em Jipe';

  const set  = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setH = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  const attr = (id, a, val) => { const el = document.getElementById(id); if (el) el.setAttribute(a, val); };

  // NAV
  const navLinks = document.querySelectorAll('#navLinks li a[href^="#"]');
  ['nav_sobre','nav_passeios','nav_galeria','nav_videos','nav_reservas','nav_contacto'].forEach((k,i) => { if(navLinks[i]) navLinks[i].textContent = t(k); });

  // HERO
  set('heroEyebrow', t('hero_eyebrow'));
  set('heroTitle1',  t('hero_title1'));
  set('heroTitle2',  t('hero_title2'));
  set('heroTitle3',  t('hero_title3'));
  set('heroSub',     t('hero_sub'));
  set('stat1l', t('stat1_l')); set('stat2l', t('stat2_l')); set('stat3l', t('stat3_l'));
  const heroBtns = document.querySelectorAll('.hero-cta .btn');
  if (heroBtns[0]) heroBtns[0].textContent = t('hero_btn_reservar');
  if (heroBtns[1]) heroBtns[1].textContent = t('hero_btn_ver');
  const scrollEl = document.querySelector('.hero-scroll span');
  if (scrollEl) scrollEl.textContent = t('hero_scroll');

  // SOBRE
  document.querySelectorAll('.sobre .section-tag').forEach(el => el.textContent = t('sobre_tag'));
  setH('sobreTitulo', t('sobre_titulo'));
  set('sobreTexto1',  t('sobre_texto1'));
  set('sobreTexto2',  t('sobre_texto2'));
  const badgeL = document.querySelector('.sobre-badge .badge-l');
  if (badgeL) badgeL.innerHTML = t('sobre_anos_label');
  const feats = document.querySelectorAll('.sobre-features .feature');
  [['feat1_title','feat1_desc'],['feat2_title','feat2_desc'],['feat3_title','feat3_desc'],
   ['feat4_title','feat4_desc'],['feat5_title','feat5_desc'],['feat6_title','feat6_desc'],['feat7_title','feat7_desc']
  ].forEach(([tk,dk], i) => {
    if (!feats[i]) return;
    const s = feats[i].querySelector('strong'); if(s) s.textContent = t(tk);
    const p = feats[i].querySelector('p'); if(p) p.textContent = t(dk);
  });

  // PASSEIOS
  document.querySelectorAll('.passeios .section-tag').forEach(el => el.textContent = t('passeios_tag'));
  const pT = document.querySelector('.passeios .section-title'); if(pT) pT.textContent = t('passeios_titulo');
  const pD = document.querySelector('.passeios .section-desc'); if(pD) pD.textContent = t('passeios_desc');
  const cards = document.querySelectorAll('#passeiosGrid .passeio-card');
  [
    {titulo:'p1_titulo',desc:'p1_desc',badge:'badge_popular'},
    {titulo:'p2_titulo',desc:'p2_desc',badge:null},
    {titulo:'p3_titulo',desc:'p3_desc',badge:null},
    {titulo:'p4_titulo',desc:'p4_desc',badge:null},
    {titulo:'p5_titulo',desc:'p5_desc',badge:'badge_exclusivo'},
    {titulo:'p6_titulo',desc:'p6_desc',badge:null},
  ].forEach((pd, i) => {
    const card = cards[i]; if(!card) return;
    const h3 = card.querySelector('h3'); if(h3) h3.textContent = t(pd.titulo);
    const p  = card.querySelector('.card-body > p'); if(p) p.textContent = t(pd.desc);
    const badge = card.querySelector('.card-badge'); if(badge && pd.badge) badge.textContent = t(pd.badge);
    const btn = card.querySelector('.btn-sm'); if(btn) btn.textContent = i===5 ? t('btn_pedir_info') : t('btn_reservar');
    const price = card.querySelector('.price');
    if (price) {
      if (i===5) { price.innerHTML = t('preco_consulta'); }
      else { const strong = price.querySelector('strong'); if(strong){ const amt=strong.textContent; price.innerHTML = lang==='en' ? `${t('preco_from')} <strong>${amt}</strong>/person` : `${t('preco_from')} <strong>${amt}</strong>/pessoa`; } }
    }
  });

  // VÍDEOS
  const vT = document.querySelector('.videos-section .section-tag'); if(vT) vT.textContent = t('videos_tag');
  const vTi = document.querySelector('.videos-section .section-title'); if(vTi) vTi.textContent = t('videos_titulo');
  const vD = document.querySelector('.videos-section .section-desc'); if(vD) vD.textContent = t('videos_desc');
  const vE = document.querySelector('.videos-empty'); if(vE) vE.textContent = t('videos_empty');

  // GALERIA
  const gT = document.querySelector('.galeria .section-tag'); if(gT) gT.textContent = t('galeria_tag');
  const gTi = document.querySelector('.galeria .section-title'); if(gTi) gTi.textContent = t('galeria_titulo');

  // REVIEWS
  const rT = document.querySelector('.reviews .section-tag'); if(rT) rT.textContent = t('reviews_tag');
  const rTi = document.querySelector('.reviews .section-title'); if(rTi) rTi.textContent = t('reviews_titulo');
  const rFT = document.querySelector('#reviewForm')?.closest('div')?.querySelector('h3'); if(rFT) rFT.textContent = t('review_form_titulo');
  const rFD = document.querySelector('#reviewForm')?.closest('div')?.querySelector('p'); if(rFD) rFD.textContent = t('review_form_desc');
  document.querySelectorAll('#reviewForm label').forEach(l => {
    if(l.getAttribute('for')==='reviewNome') l.textContent = t('review_nome_label');
    if(l.getAttribute('for')==='reviewComentario') l.textContent = t('review_comentario_label');
  });
  attr('reviewNome','placeholder',t('review_nome_placeholder'));
  attr('reviewComentario','placeholder',t('review_comentario_placeholder'));
  const rM = document.querySelector('#reviewComentario + p'); if(rM) rM.textContent = t('review_max');
  const rB = document.querySelector('#reviewForm button[onclick]'); if(rB) rB.textContent = t('review_btn');

  // RESERVAS
  const rsT = document.querySelector('.reservas .section-tag'); if(rsT) rsT.textContent = t('reservas_tag');
  const rsTi = document.querySelector('.reservas .section-title'); if(rsTi) rsTi.textContent = t('reservas_titulo');
  const rsD = document.querySelector('.reservas .section-desc'); if(rsD) rsD.textContent = t('reservas_desc');
  {'nome':t('form_nome'),'email':t('form_email'),'telefone':t('form_telefone'),'data':t('form_data'),'pessoas':t('form_pessoas'),'passeio':t('form_passeio'),'mensagem':t('form_mensagem')};
  [['nome','form_nome'],['email','form_email'],['telefone','form_telefone'],['data','form_data'],['pessoas','form_pessoas'],['passeio','form_passeio'],['mensagem','form_mensagem']].forEach(([id,k]) => {
    const lbl = document.querySelector(`label[for="${id}"]`); if(lbl) lbl.textContent = t(k);
  });
  attr('nome','placeholder',t('form_nome_ph')); attr('email','placeholder',t('form_email_ph'));
  attr('telefone','placeholder',t('form_telefone_ph')); attr('mensagem','placeholder',t('form_mensagem_ph'));
  const sp = document.getElementById('pessoas');
  if(sp){ const opts=sp.querySelectorAll('option'); if(opts[0]) opts[0].textContent=t('form_pessoas_sel');
    ['1','2','3','4','5','6'].forEach((n,i)=>{ if(opts[i+1]) opts[i+1].textContent=`${n} ${n==='1'?t('form_pessoa'):t('form_pessoas_plural')}`; });
    if(opts[7]) opts[7].textContent = lang==='en'?'7–8 people':'7–8 pessoas'; }
  const sps = document.getElementById('passeio');
  if(sps){ const opts=sps.querySelectorAll('option'); if(opts[0]) opts[0].textContent=t('form_passeio_sel');
    ['p1_titulo','p2_titulo','p3_titulo','p4_titulo','p5_titulo','p6_titulo'].forEach((k,i)=>{ if(opts[i+1]) opts[i+1].textContent=t(k); }); }
  const gdpr = document.querySelector('label[for="gdpr"]'); if(gdpr) gdpr.innerHTML = t('form_gdpr');
  const sub = document.querySelector('#reservaForm button[type="submit"] span'); if(sub) sub.textContent = t('form_btn');
  const asT = document.querySelector('.aside-card h3'); if(asT) asT.textContent = t('aside_titulo');
  const asI = document.querySelectorAll('.aside-card ul li'); const aItems = t('aside_items');
  if(Array.isArray(aItems)) asI.forEach((li,i)=>{ if(aItems[i]) li.textContent=aItems[i]; });
  const waT = document.querySelector('.aside-whatsapp h3'); if(waT) waT.textContent = t('whatsapp_titulo');
  const waD = document.querySelector('.aside-whatsapp p'); if(waD) waD.textContent = t('whatsapp_desc');
  const waB = document.querySelector('.aside-whatsapp .whatsapp-link');
  if(waB){ const tel=adminContentPT['whatsapp']||'351912345678';
    waB.innerHTML=`<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.552 4.116 1.52 5.845L.057 23.927l6.235-1.634A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.213-3.701.97.988-3.61-.234-.371A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg> ${t('whatsapp_btn')}`;
    waB.href=`https://wa.me/${tel}?text=${encodeURIComponent(t('whatsapp_msg'))}`; }

  // CONTACTO
  const cT = document.querySelector('.contacto .section-tag'); if(cT) cT.textContent = t('contacto_tag');
  const cTi = document.querySelector('.contacto .section-title'); if(cTi) cTi.textContent = t('contacto_titulo');
  const cItems = document.querySelectorAll('.contact-item');
  [{label:'contacto_local_label',val:'contacto_local_val',html:true},{label:'contacto_tel_label',val:null},{label:'contacto_email_label',val:null},{label:'contacto_horario_label',val:'contacto_horario_val'}]
    .forEach((k,i) => { if(!cItems[i]) return; const s=cItems[i].querySelector('strong'); if(s) s.textContent=t(k.label);
      if(k.val){ const p=cItems[i].querySelector('p'); if(p) k.html?(p.innerHTML=t(k.val)):(p.textContent=t(k.val)); } });
  const horEl = document.getElementById('contactoHorario');
  if(horEl) horEl.textContent = (lang==='en' && adminContentEN['horario']) ? adminContentEN['horario'] : (adminContentPT['horario'] || STATIC_TRANSLATIONS.pt['contacto_horario_val']);

  // FOOTER
  const fbP = document.querySelector('.footer-brand p'); if(fbP) fbP.textContent = t('footer_desc');
  const fCols = document.querySelectorAll('.footer-grid > div:not(.footer-brand) h4');
  ['footer_passeios','footer_empresa','footer_legal'].forEach((k,i) => { if(fCols[i]) fCols[i].textContent=t(k); });
  const eL = document.querySelectorAll('.footer-grid > div:nth-child(3) li a');
  ['footer_sobre','footer_galeria','footer_videos','footer_testemunhos','footer_contacto'].forEach((k,i) => { if(eL[i]) eL[i].textContent=t(k); });
  const lL = document.querySelectorAll('.footer-grid > div:nth-child(4) li a');
  ['footer_privacidade','footer_termos','footer_cancelamento','footer_reclamacoes'].forEach((k,i) => { if(lL[i]) lL[i].textContent=t(k); });
  const fB = document.querySelectorAll('.footer-bottom p');
  if(fB[0]) fB[0].textContent=t('footer_copy'); if(fB[1]) fB[1].textContent=t('footer_license');

  // WhatsApp float
  const wTel = adminContentPT['whatsapp']||'351912345678';
  document.querySelectorAll('a[href*="wa.me"]').forEach(a => { a.href=`https://wa.me/${wTel}?text=${encodeURIComponent(t('whatsapp_msg'))}`; });

  updateLangToggle();
}

function createLangToggle() {
  const nav = document.getElementById('navLinks');
  if (!nav || document.getElementById('langToggle')) return;
  const li = document.createElement('li'); li.id = 'langToggle';
  li.innerHTML = `<button class="lang-btn" id="langBtnPT" onclick="setLang('pt')" aria-label="Português"><span class="lang-flag">🇵🇹</span><span class="lang-code">PT</span></button><span class="lang-sep">|</span><button class="lang-btn" id="langBtnEN" onclick="setLang('en')" aria-label="English"><span class="lang-flag">🇬🇧</span><span class="lang-code">EN</span></button>`;
  nav.appendChild(li);
  const style = document.createElement('style');
  style.textContent = `#langToggle{display:flex;align-items:center;gap:.25rem;margin-left:.5rem}.lang-btn{display:flex;align-items:center;gap:4px;background:none;border:none;cursor:pointer;font-family:inherit;font-size:.75rem;font-weight:600;letter-spacing:.08em;color:rgba(244,237,224,0.5);padding:4px 6px;border-radius:4px;transition:color .2s,background .2s}.lang-btn:hover{color:#f4ede0;background:rgba(255,255,255,.08)}.lang-btn.active{color:#f4ede0;background:rgba(255,255,255,.12)}.lang-flag{font-size:1rem;line-height:1}.lang-sep{color:rgba(244,237,224,0.2);font-size:.7rem}.lang-btn.loading{opacity:.5;pointer-events:none}#langBanner{position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:rgba(10,20,10,0.95);border:1px solid rgba(184,201,168,0.3);color:#f4ede0;padding:.75rem 1.5rem;border-radius:8px;font-size:.85rem;z-index:8000;display:flex;align-items:center;gap:1rem;box-shadow:0 8px 32px rgba(0,0,0,.4);animation:slideUp .3s ease;white-space:nowrap}@keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}#langBanner button{background:#6b8f5e;border:none;color:#fff;padding:.35rem .9rem;border-radius:5px;cursor:pointer;font-size:.8rem;font-weight:600;font-family:inherit}#langBannerDismiss{background:none!important;color:rgba(244,237,224,0.4)!important;font-size:1.1rem!important;padding:0!important}`;
  document.head.appendChild(style);
}

function updateLangToggle() {
  document.getElementById('langBtnPT')?.classList.toggle('active', currentLang==='pt');
  document.getElementById('langBtnEN')?.classList.toggle('active', currentLang==='en');
}

async function setLang(lang, save=true) {
  currentLang = lang;
  if (save) localStorage.setItem('wam_lang', lang);
  document.getElementById('langBanner')?.remove();
  if (lang==='en' && Object.keys(adminContentPT).length > 0) {
    const btn = document.getElementById('langBtnEN'); if(btn) btn.classList.add('loading');
    adminContentEN = await translateAdminTexts() || {};
    if(btn) btn.classList.remove('loading');
  }
  applyTranslations();
}

function showEnglishBanner() {
  if (document.getElementById('langBanner')) return;
  const b = document.createElement('div'); b.id='langBanner';
  b.innerHTML=`🇬🇧 We detected you may prefer English. <button onclick="setLang('en')">Switch to English</button> <button id="langBannerDismiss" onclick="this.closest('#langBanner').remove()">✕</button>`;
  document.body.appendChild(b);
  setTimeout(()=>b.parentNode&&b.remove(), 10000);
}

function initI18n() {
  createLangToggle();

  // Ouve o evento siteDataReady disparado pelo main.js
  window.addEventListener('siteDataReady', async (e) => {
    const data = e.detail;
    if (data?.content) {
      adminContentPT = mapAdminContent(data.content);
      console.log('[i18n] Admin dados carregados:', Object.keys(adminContentPT).length, 'campos');
    } else {
      console.warn('[i18n] Sem dados do admin, usando fallback estático');
    }
    siteDataLoaded = true;

    const saved = localStorage.getItem('wam_lang');
    if (saved) {
      await setLang(saved, false);
    } else {
      try {
        const resp = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
        const ipData = await resp.json();
        const ptCountries = ['PT','BR','AO','MZ','CV','ST','GW','TL'];
        if (!ptCountries.includes(ipData.country_code||'') && ipData.country_code) {
          await setLang('en', false);
          showEnglishBanner();
        } else {
          await setLang('pt', false);
        }
      } catch {
        await setLang('pt', false);
      }
    }
  });

  // Segurança: se main.js já correu antes deste listener
  if (window.__siteData && !siteDataLoaded) {
    window.dispatchEvent(new CustomEvent('siteDataReady', { detail: window.__siteData }));
  }
}

document.addEventListener('DOMContentLoaded', initI18n);

window.setLang = setLang;
window.t = t;
