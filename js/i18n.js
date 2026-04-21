/**
 * Wild Atlantic Madeira 4x4 — i18n (PT / EN)
 * Deteção automática por IP · Toggle manual persistido em localStorage
 */

const TRANSLATIONS = {
  pt: {
    // NAV
    nav_sobre: 'Sobre',
    nav_passeios: 'Passeios',
    nav_galeria: 'Galeria',
    nav_videos: 'Vídeos',
    nav_reservas: 'Reservas',
    nav_contacto: 'Contacto',

    // HERO
    hero_eyebrow: 'Ilha da Madeira · Portugal',
    hero_title1: 'A Natureza',
    hero_title2: 'Selvagem',
    hero_title3: 'Espera por Ti',
    hero_sub: 'Passeios privados exclusivos em jipe 4×4 pelas montanhas, florestas e levadas da Madeira. Uma aventura autêntica, ao teu ritmo.',
    hero_btn_reservar: 'Reservar Passeio',
    hero_btn_ver: 'Ver Experiências',
    hero_scroll: 'Explorar',
    stat1_l: 'Clientes Felizes',
    stat2_l: 'Rotas Exclusivas',
    stat3_l: 'Privado',

    // SOBRE
    sobre_tag: 'Sobre Nós',
    sobre_titulo: 'Guias Locais.<br><em>Paixão Autêntica.</em>',
    sobre_texto1: 'Somos uma empresa familiar com raízes profundas na Ilha da Madeira. Conhecemos cada curva de estrada, cada miradouro escondido, cada levada que serpenteia pela floresta laurissilva.',
    sobre_texto2: 'Os nossos passeios em jipe 4×4 são totalmente privados — só a sua família ou grupo. Sem multidões, sem pressa. Apenas a Madeira na sua forma mais autêntica.',
    sobre_anos_label: 'Anos de<br>Experiência',
    feat1_title: 'Guias Certificados',
    feat1_desc: 'Experiência local de décadas',
    feat2_title: 'Segurança Total',
    feat2_desc: 'Viaturas preparadas e seguras',
    feat3_title: 'Eco-Responsável',
    feat3_desc: 'Respeito pela natureza',
    feat4_title: 'Multilingue',
    feat4_desc: 'PT · EN · DE · FR · ES',

    // PASSEIOS
    passeios_tag: 'Experiências',
    passeios_titulo: 'Os Nossos Passeios',
    passeios_desc: 'Cada rota foi desenhada para revelar a Madeira de uma perspectiva única. Escolha a sua aventura.',
    badge_popular: 'Mais Popular',
    badge_exclusivo: 'Exclusivo',
    p1_titulo: 'Picos & Montanhas',
    p1_desc: 'Ascenda ao Pico do Arieiro (1818m) e ao Pico Ruivo, os pontos mais altos da Madeira. Vistas acima das nuvens.',
    p2_titulo: 'Floresta Laurissilva',
    p2_desc: 'Mergulhe na floresta primeva Património Mundial UNESCO. Levadas, fetos gigantes e silêncio absoluto.',
    p3_titulo: 'Costa Norte Selvagem',
    p3_desc: 'Falésias dramáticas, cascatas que caem para o oceano, aldeias remotas. A Madeira secreta que poucos conhecem.',
    p4_titulo: 'Santana & Paul da Serra',
    p4_desc: 'As casas típicas de Santana, o planalto agreste do Paul da Serra e as levadas mais remotas da ilha.',
    p5_titulo: 'Sunrise no Pico',
    p5_desc: 'Parta antes do amanhecer para assistir ao nascer do sol acima das nuvens. Uma experiência inesquecível.',
    p6_titulo: 'Tour à Medida',
    p6_desc: 'Desenhamos o passeio perfeito para si. Escolha os locais, o ritmo e as actividades. A sua Madeira.',
    preco_from: 'A partir de',
    preco_consulta: 'Sob <strong>consulta</strong>',
    btn_reservar: 'Reservar',
    btn_pedir_info: 'Pedir Info',

    // VIDEOS
    videos_tag: 'Em Movimento',
    videos_titulo: 'Sinta a Adrenalina',
    videos_desc: 'Cada curva revela uma nova paisagem. Cada trilho conta uma história.',
    videos_empty: 'Em breve novos vídeos. Fique atento!',

    // GALERIA
    galeria_tag: 'Galeria',
    galeria_titulo: 'A Madeira em Imagens',

    // REVIEWS
    reviews_tag: 'Clientes',
    reviews_titulo: 'O Que Dizem de Nós',
    review_form_titulo: 'Partilhe a Sua Experiência',
    review_form_desc: 'A sua opinião ajuda outros aventureiros a descobrir a Madeira.',
    review_stars_label: 'A sua avaliação *',
    review_nome_label: 'Nome *',
    review_nome_placeholder: 'O seu nome',
    review_comentario_label: 'Comentário *',
    review_comentario_placeholder: 'Conte a sua experiência...',
    review_max: 'Máx. 500 caracteres',
    review_btn: 'Enviar Comentário',
    review_err_stars: 'Por favor selecione uma avaliação em estrelas.',
    review_err_nome: 'Por favor escreva o seu nome.',
    review_err_comentario: 'Por favor escreva um comentário.',
    review_success: '✅ Obrigado! O seu comentário será publicado brevemente.',
    review_err_generic: 'Erro ao enviar.',
    review_err_conn: 'Erro de ligação. Tente novamente.',

    // RESERVAS
    reservas_tag: 'Reservas',
    reservas_titulo: 'Reserve a Sua Aventura',
    reservas_desc: 'Preencha o formulário e entraremos em contacto em menos de 24 horas.',
    form_nome: 'Nome Completo *',
    form_nome_ph: 'O seu nome',
    form_email: 'Email *',
    form_email_ph: 'email@exemplo.com',
    form_telefone: 'Telefone / WhatsApp',
    form_telefone_ph: '+351 900 000 000',
    form_data: 'Data Preferida *',
    form_pessoas: 'Número de Pessoas *',
    form_pessoas_sel: 'Selecionar...',
    form_pessoa: 'pessoa',
    form_pessoas_plural: 'pessoas',
    form_passeio: 'Tipo de Passeio *',
    form_passeio_sel: 'Selecionar...',
    form_mensagem: 'Pedidos Especiais / Notas',
    form_mensagem_ph: 'Diga-nos algo mais sobre si ou o que espera desta experiência...',
    form_gdpr: 'Concordo com a <a href="#">Política de Privacidade</a> e o tratamento dos meus dados pessoais.',
    form_btn: 'Enviar Pedido de Reserva',
    form_success: '✅ Pedido enviado! Entraremos em contacto brevemente.',
    aside_titulo: 'Porquê Reservar Connosco?',
    aside_items: ['✅ Confirmação em menos de 24h','✅ Cancelamento gratuito até 48h antes','✅ Passeios 100% privados','✅ Pick-up no hotel/alojamento','✅ Seguro de viagem incluído','✅ Água e snacks a bordo'],
    whatsapp_titulo: 'Prefere falar connosco?',
    whatsapp_desc: 'Contacte-nos directamente pelo WhatsApp para uma resposta imediata.',
    whatsapp_btn: 'Falar no WhatsApp',
    whatsapp_msg: 'Olá! Gostaria de saber mais sobre os vossos passeios.',

    // CONTACTO
    contacto_tag: 'Contacto',
    contacto_titulo: 'Fale Connosco',
    contacto_local_label: 'Localização',
    contacto_local_val: 'Funchal, Ilha da Madeira<br>Portugal',
    contacto_tel_label: 'Telefone',
    contacto_email_label: 'Email',
    contacto_horario_label: 'Horário',
    contacto_horario_val: 'Todos os dias · 07:00 – 20:00',

    // FOOTER
    footer_desc: 'Passeios privados em jipe 4×4 pela Ilha da Madeira. Aventura autêntica, natureza selvagem.',
    footer_passeios: 'Passeios',
    footer_empresa: 'Empresa',
    footer_legal: 'Legal',
    footer_sobre: 'Sobre Nós',
    footer_galeria: 'Galeria',
    footer_videos: 'Vídeos',
    footer_testemunhos: 'Testemunhos',
    footer_contacto: 'Contacto',
    footer_privacidade: 'Política de Privacidade',
    footer_termos: 'Termos e Condições',
    footer_cancelamento: 'Política de Cancelamento',
    footer_reclamacoes: 'Livro de Reclamações',
    footer_copy: '© 2025 Wild Atlantic Madeira 4×4. Todos os direitos reservados.',
    footer_license: 'Licença Turismo RNAVT nº XXXX · Made with ❤️ in Madeira',
  },

  en: {
    // NAV
    nav_sobre: 'About',
    nav_passeios: 'Tours',
    nav_galeria: 'Gallery',
    nav_videos: 'Videos',
    nav_reservas: 'Book',
    nav_contacto: 'Contact',

    // HERO
    hero_eyebrow: 'Madeira Island · Portugal',
    hero_title1: 'Wild',
    hero_title2: 'Nature',
    hero_title3: 'Awaits You',
    hero_sub: 'Exclusive private jeep 4×4 tours through the mountains, forests and levadas of Madeira. An authentic adventure, at your own pace.',
    hero_btn_reservar: 'Book a Tour',
    hero_btn_ver: 'View Experiences',
    hero_scroll: 'Explore',
    stat1_l: 'Happy Clients',
    stat2_l: 'Exclusive Routes',
    stat3_l: 'Private',

    // SOBRE
    sobre_tag: 'About Us',
    sobre_titulo: 'Local Guides.<br><em>Genuine Passion.</em>',
    sobre_texto1: 'We are a family business with deep roots on the Island of Madeira. We know every bend in the road, every hidden viewpoint, every levada that winds through the laurisilva forest.',
    sobre_texto2: 'Our 4×4 jeep tours are completely private — just your family or group. No crowds, no rush. Just Madeira in its most authentic form.',
    sobre_anos_label: 'Years of<br>Experience',
    feat1_title: 'Certified Guides',
    feat1_desc: 'Decades of local experience',
    feat2_title: 'Full Safety',
    feat2_desc: 'Equipped and safe vehicles',
    feat3_title: 'Eco-Responsible',
    feat3_desc: 'Respect for nature',
    feat4_title: 'Multilingual',
    feat4_desc: 'PT · EN · DE · FR · ES',

    // PASSEIOS
    passeios_tag: 'Experiences',
    passeios_titulo: 'Our Tours',
    passeios_desc: 'Each route was designed to reveal Madeira from a unique perspective. Choose your adventure.',
    badge_popular: 'Most Popular',
    badge_exclusivo: 'Exclusive',
    p1_titulo: 'Peaks & Mountains',
    p1_desc: 'Ascend to Pico do Arieiro (1818m) and Pico Ruivo, the highest points of Madeira. Views above the clouds.',
    p2_titulo: 'Laurisilva Forest',
    p2_desc: 'Immerse yourself in the ancient UNESCO World Heritage forest. Levadas, giant ferns and absolute silence.',
    p3_titulo: 'Wild North Coast',
    p3_desc: 'Dramatic cliffs, waterfalls cascading to the ocean, remote villages. The secret Madeira few know.',
    p4_titulo: 'Santana & Paul da Serra',
    p4_desc: 'The traditional thatched houses of Santana, the rugged Paul da Serra plateau and the island\'s most remote levadas.',
    p5_titulo: 'Sunrise at the Peak',
    p5_desc: 'Depart before dawn to watch the sunrise above the clouds. An unforgettable experience.',
    p6_titulo: 'Custom Tour',
    p6_desc: 'We design the perfect tour for you. Choose the locations, pace and activities. Your Madeira.',
    preco_from: 'From',
    preco_consulta: 'On <strong>request</strong>',
    btn_reservar: 'Book',
    btn_pedir_info: 'Enquire',

    // VIDEOS
    videos_tag: 'In Motion',
    videos_titulo: 'Feel the Thrill',
    videos_desc: 'Every bend reveals a new landscape. Every trail tells a story.',
    videos_empty: 'New videos coming soon. Stay tuned!',

    // GALERIA
    galeria_tag: 'Gallery',
    galeria_titulo: 'Madeira in Pictures',

    // REVIEWS
    reviews_tag: 'Clients',
    reviews_titulo: 'What They Say About Us',
    review_form_titulo: 'Share Your Experience',
    review_form_desc: 'Your feedback helps other adventurers discover Madeira.',
    review_stars_label: 'Your rating *',
    review_nome_label: 'Name *',
    review_nome_placeholder: 'Your name',
    review_comentario_label: 'Comment *',
    review_comentario_placeholder: 'Tell us about your experience...',
    review_max: 'Max. 500 characters',
    review_btn: 'Submit Review',
    review_err_stars: 'Please select a star rating.',
    review_err_nome: 'Please enter your name.',
    review_err_comentario: 'Please write a comment.',
    review_success: '✅ Thank you! Your review will be published shortly.',
    review_err_generic: 'Error submitting.',
    review_err_conn: 'Connection error. Please try again.',

    // RESERVAS
    reservas_tag: 'Bookings',
    reservas_titulo: 'Book Your Adventure',
    reservas_desc: 'Fill in the form and we will get back to you within 24 hours.',
    form_nome: 'Full Name *',
    form_nome_ph: 'Your name',
    form_email: 'Email *',
    form_email_ph: 'email@example.com',
    form_telefone: 'Phone / WhatsApp',
    form_telefone_ph: '+44 7000 000 000',
    form_data: 'Preferred Date *',
    form_pessoas: 'Number of People *',
    form_pessoas_sel: 'Select...',
    form_pessoa: 'person',
    form_pessoas_plural: 'people',
    form_passeio: 'Tour Type *',
    form_passeio_sel: 'Select...',
    form_mensagem: 'Special Requests / Notes',
    form_mensagem_ph: 'Tell us more about yourself or what you expect from this experience...',
    form_gdpr: 'I agree to the <a href="#">Privacy Policy</a> and the processing of my personal data.',
    form_btn: 'Send Booking Request',
    form_success: '✅ Request sent! We will be in touch shortly.',
    aside_titulo: 'Why Book With Us?',
    aside_items: ['✅ Confirmation within 24h','✅ Free cancellation up to 48h before','✅ 100% private tours','✅ Pick-up at hotel/accommodation','✅ Travel insurance included','✅ Water and snacks on board'],
    whatsapp_titulo: 'Prefer to talk to us?',
    whatsapp_desc: 'Contact us directly on WhatsApp for an immediate response.',
    whatsapp_btn: 'Chat on WhatsApp',
    whatsapp_msg: 'Hello! I would like to know more about your tours.',

    // CONTACTO
    contacto_tag: 'Contact',
    contacto_titulo: 'Get In Touch',
    contacto_local_label: 'Location',
    contacto_local_val: 'Funchal, Madeira Island<br>Portugal',
    contacto_tel_label: 'Phone',
    contacto_email_label: 'Email',
    contacto_horario_label: 'Hours',
    contacto_horario_val: 'Every day · 07:00 – 20:00',

    // FOOTER
    footer_desc: 'Private 4×4 jeep tours on Madeira Island. Authentic adventure, wild nature.',
    footer_passeios: 'Tours',
    footer_empresa: 'Company',
    footer_legal: 'Legal',
    footer_sobre: 'About Us',
    footer_galeria: 'Gallery',
    footer_videos: 'Videos',
    footer_testemunhos: 'Testimonials',
    footer_contacto: 'Contact',
    footer_privacidade: 'Privacy Policy',
    footer_termos: 'Terms & Conditions',
    footer_cancelamento: 'Cancellation Policy',
    footer_reclamacoes: 'Complaints Book',
    footer_copy: '© 2025 Wild Atlantic Madeira 4×4. All rights reserved.',
    footer_license: 'Tourism Licence RNAVT nº XXXX · Made with ❤️ in Madeira',
  }
};

// ── Idioma ativo
let currentLang = 'pt';

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['pt'][key] || key;
}

// ── Aplica todas as traduções ao DOM
function applyTranslations() {
  const lang = currentLang;
  const html = document.documentElement;
  html.lang = lang;
  document.title = lang === 'en'
    ? 'Wild Atlantic Madeira 4x4 | Private Jeep Tours'
    : 'Wild Atlantic Madeira 4x4 | Passeios Privados em Jipe';

  // Helper para innerText/innerHTML
  const set   = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setH  = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML   = val; };
  const setQ  = (sel, val) => { document.querySelectorAll(sel).forEach(el => el.textContent = val); };
  const setQH = (sel, val) => { document.querySelectorAll(sel).forEach(el => el.innerHTML   = val); };
  const attr  = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

  // NAV links
  const navLinks = document.querySelectorAll('#navLinks li a[href]');
  const navKeys = ['nav_sobre','nav_passeios','nav_galeria','nav_videos','nav_reservas','nav_contacto'];
  navLinks.forEach((a, i) => { if (navKeys[i]) a.textContent = t(navKeys[i]); });

  // HERO
  set('heroEyebrow',  t('hero_eyebrow'));
  set('heroTitle1',   t('hero_title1'));
  set('heroTitle2',   t('hero_title2'));
  set('heroTitle3',   t('hero_title3'));
  set('heroSub',      t('hero_sub'));
  set('stat1l',       t('stat1_l'));
  set('stat2l',       t('stat2_l'));
  set('stat3l',       t('stat3_l'));
  const heroBtns = document.querySelectorAll('.hero-cta .btn');
  if (heroBtns[0]) heroBtns[0].textContent = t('hero_btn_reservar');
  if (heroBtns[1]) heroBtns[1].textContent = t('hero_btn_ver');
  const scrollEl = document.querySelector('.hero-scroll span');
  if (scrollEl) scrollEl.textContent = t('hero_scroll');

  // SOBRE
  setQ('.sobre .section-tag', t('sobre_tag'));
  setH('sobreTitulo',  t('sobre_titulo'));
  set('sobreTexto1',   t('sobre_texto1'));
  set('sobreTexto2',   t('sobre_texto2'));
  const badgeL = document.querySelector('.sobre-badge .badge-l');
  if (badgeL) badgeL.innerHTML = t('sobre_anos_label');
  const feats = document.querySelectorAll('.sobre-features .feature');
  const featKeys = [
    ['feat1_title','feat1_desc'],['feat2_title','feat2_desc'],
    ['feat3_title','feat3_desc'],['feat4_title','feat4_desc'],
  ];
  feats.forEach((f, i) => {
    if (!featKeys[i]) return;
    const strong = f.querySelector('strong');
    const p = f.querySelector('p');
    if (strong) strong.textContent = t(featKeys[i][0]);
    if (p) p.textContent = t(featKeys[i][1]);
  });

  // PASSEIOS (section header)
  const passTags = document.querySelectorAll('.passeios .section-tag');
  passTags.forEach(el => el.textContent = t('passeios_tag'));
  const passTitle = document.querySelector('.passeios .section-title');
  if (passTitle) passTitle.textContent = t('passeios_titulo');
  const passDesc = document.querySelector('.passeios .section-desc');
  if (passDesc) passDesc.textContent = t('passeios_desc');

  // Cards dos passeios
  const cards = document.querySelectorAll('#passeiosGrid .passeio-card');
  const passData = [
    { titulo:'p1_titulo', desc:'p1_desc', badge:'badge_popular' },
    { titulo:'p2_titulo', desc:'p2_desc', badge:null },
    { titulo:'p3_titulo', desc:'p3_desc', badge:null },
    { titulo:'p4_titulo', desc:'p4_desc', badge:null },
    { titulo:'p5_titulo', desc:'p5_desc', badge:'badge_exclusivo' },
    { titulo:'p6_titulo', desc:'p6_desc', badge:null },
  ];
  cards.forEach((card, i) => {
    const pd = passData[i];
    if (!pd) return;
    const h3 = card.querySelector('h3');
    const p  = card.querySelector('.card-body > p');
    const badge = card.querySelector('.card-badge');
    const btn = card.querySelector('.btn-sm');
    if (h3) h3.textContent = t(pd.titulo);
    if (p)  p.textContent  = t(pd.desc);
    if (badge && pd.badge) badge.textContent = t(pd.badge);
    // preço
    const priceSpan = card.querySelector('.price');
    if (priceSpan) {
      if (i === 5) {
        priceSpan.innerHTML = t('preco_consulta');
      } else {
        const strong = priceSpan.querySelector('strong');
        if (strong) {
          const amount = strong.textContent;
          priceSpan.innerHTML = `${t('preco_from')} <strong>${amount}</strong>/pessoa`;
          if (lang === 'en') priceSpan.innerHTML = `${t('preco_from')} <strong>${amount}</strong>/person`;
        }
      }
    }
    if (btn) btn.textContent = i === 5 ? t('btn_pedir_info') : t('btn_reservar');
  });

  // VÍDEOS
  const vidTag = document.querySelector('.videos-section .section-tag');
  if (vidTag) vidTag.textContent = t('videos_tag');
  const vidTitle = document.querySelector('.videos-section .section-title');
  if (vidTitle) vidTitle.textContent = t('videos_titulo');
  const vidDesc = document.querySelector('.videos-section .section-desc');
  if (vidDesc) vidDesc.textContent = t('videos_desc');
  const vidEmpty = document.querySelector('.videos-empty');
  if (vidEmpty) vidEmpty.textContent = t('videos_empty');

  // GALERIA
  const galTag = document.querySelector('.galeria .section-tag');
  if (galTag) galTag.textContent = t('galeria_tag');
  const galTitle = document.querySelector('.galeria .section-title');
  if (galTitle) galTitle.textContent = t('galeria_titulo');

  // REVIEWS
  const revTag = document.querySelector('.reviews .section-tag');
  if (revTag) revTag.textContent = t('reviews_tag');
  const revTitle = document.querySelector('.reviews .section-title');
  if (revTitle) revTitle.textContent = t('reviews_titulo');
  const revFormTitle = document.querySelector('#reviewForm').closest('div').querySelector('h3');
  if (revFormTitle) revFormTitle.textContent = t('review_form_titulo');
  const revFormDesc = document.querySelector('#reviewForm').closest('div').querySelector('p');
  if (revFormDesc) revFormDesc.textContent = t('review_form_desc');
  const starsLabel = document.querySelector('#starPicker').previousElementSibling;
  if (starsLabel) starsLabel.textContent = t('review_stars_label');
  const nomeLabel = document.querySelector('label[for-approx="reviewNome"]');
  // labels do review form via querySelectorAll
  const rLabels = document.querySelectorAll('#reviewForm label');
  rLabels.forEach(l => {
    if (l.textContent.includes('avaliação') || l.textContent.includes('rating')) l.textContent = t('review_stars_label');
    if (l.htmlFor === 'reviewNome' || l.getAttribute('for') === 'reviewNome') l.textContent = t('review_nome_label');
    if (l.htmlFor === 'reviewComentario' || l.getAttribute('for') === 'reviewComentario') l.textContent = t('review_comentario_label');
  });
  attr('reviewNome', 'placeholder', t('review_nome_placeholder'));
  attr('reviewComentario', 'placeholder', t('review_comentario_placeholder'));
  const revMax = document.querySelector('#reviewComentario + p');
  if (revMax) revMax.textContent = t('review_max');
  const revBtn = document.querySelector('#reviewForm button[onclick]');
  if (revBtn) revBtn.textContent = t('review_btn');

  // RESERVAS
  const resTag = document.querySelector('.reservas .section-tag');
  if (resTag) resTag.textContent = t('reservas_tag');
  const resTitle = document.querySelector('.reservas .section-title');
  if (resTitle) resTitle.textContent = t('reservas_titulo');
  const resDesc = document.querySelector('.reservas .section-desc');
  if (resDesc) resDesc.textContent = t('reservas_desc');
  // form labels
  const formLabels = {
    'nome': t('form_nome'), 'email': t('form_email'),
    'telefone': t('form_telefone'), 'data': t('form_data'),
    'pessoas': t('form_pessoas'), 'passeio': t('form_passeio'),
    'mensagem': t('form_mensagem'),
  };
  Object.entries(formLabels).forEach(([id, text]) => {
    const lbl = document.querySelector(`label[for="${id}"]`);
    if (lbl) lbl.textContent = text;
  });
  attr('nome', 'placeholder', t('form_nome_ph'));
  attr('email', 'placeholder', t('form_email_ph'));
  attr('telefone', 'placeholder', t('form_telefone_ph'));
  attr('mensagem', 'placeholder', t('form_mensagem_ph'));
  // select pessoas
  const selPessoas = document.getElementById('pessoas');
  if (selPessoas) {
    const opts = selPessoas.querySelectorAll('option');
    opts[0].textContent = t('form_pessoas_sel');
    ['1','2','3','4','5','6'].forEach((n, i) => {
      if (opts[i+1]) opts[i+1].textContent = `${n} ${n === '1' ? t('form_pessoa') : t('form_pessoas_plural')}`;
    });
    if (opts[7]) opts[7].textContent = lang === 'en' ? '7–8 people' : '7–8 pessoas';
  }
  // select passeio
  const selPasseio = document.getElementById('passeio');
  if (selPasseio) {
    const opts = selPasseio.querySelectorAll('option');
    opts[0].textContent = t('form_passeio_sel');
    const names = ['p1_titulo','p2_titulo','p3_titulo','p4_titulo','p5_titulo','p6_titulo'];
    names.forEach((k, i) => { if (opts[i+1]) opts[i+1].textContent = t(k); });
  }
  // gdpr
  const gdprLabel = document.querySelector('label[for="gdpr"]');
  if (gdprLabel) gdprLabel.innerHTML = t('form_gdpr');
  // submit btn
  const submitBtn = document.querySelector('#reservaForm button[type="submit"] span');
  if (submitBtn) submitBtn.textContent = t('form_btn');
  // aside
  const asideTitle = document.querySelector('.aside-card h3');
  if (asideTitle) asideTitle.textContent = t('aside_titulo');
  const asideItems = document.querySelectorAll('.aside-card ul li');
  const aItems = t('aside_items');
  asideItems.forEach((li, i) => { if (aItems[i]) li.textContent = aItems[i]; });
  const waTitle = document.querySelector('.aside-whatsapp h3');
  if (waTitle) waTitle.textContent = t('whatsapp_titulo');
  const waDesc = document.querySelector('.aside-whatsapp p');
  if (waDesc) waDesc.textContent = t('whatsapp_desc');
  const waBtn = document.querySelector('.aside-whatsapp .whatsapp-link');
  if (waBtn) {
    waBtn.textContent = '';
    waBtn.insertAdjacentHTML('afterbegin', `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.552 4.116 1.52 5.845L.057 23.927l6.235-1.634A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.213-3.701.97.988-3.61-.234-.371A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg> ${t('whatsapp_btn')}`);
    waBtn.href = `https://wa.me/351912345678?text=${encodeURIComponent(t('whatsapp_msg'))}`;
  }

  // CONTACTO
  const ctTag = document.querySelector('.contacto .section-tag');
  if (ctTag) ctTag.textContent = t('contacto_tag');
  const ctTitle = document.querySelector('.contacto .section-title');
  if (ctTitle) ctTitle.textContent = t('contacto_titulo');
  const ctItems = document.querySelectorAll('.contact-item');
  const ctKeys = [
    { label:'contacto_local_label', val:'contacto_local_val', html:true },
    { label:'contacto_tel_label', val:null },
    { label:'contacto_email_label', val:null },
    { label:'contacto_horario_label', val:'contacto_horario_val' },
  ];
  ctItems.forEach((item, i) => {
    const k = ctKeys[i]; if (!k) return;
    const strong = item.querySelector('strong');
    if (strong) strong.textContent = t(k.label);
    if (k.val) {
      const p = item.querySelector('p');
      if (p) { if (k.html) p.innerHTML = t(k.val); else p.textContent = t(k.val); }
    }
  });

  // FOOTER
  const ftBrand = document.querySelector('.footer-brand p');
  if (ftBrand) ftBrand.textContent = t('footer_desc');
  const ftCols = document.querySelectorAll('.footer-grid > div:not(.footer-brand) h4');
  const ftColKeys = ['footer_passeios','footer_empresa','footer_legal'];
  ftCols.forEach((h, i) => { if (ftColKeys[i]) h.textContent = t(ftColKeys[i]); });
  // empresa links
  const empLinks = document.querySelectorAll('.footer-grid > div:nth-child(3) li a');
  const empKeys = ['footer_sobre','footer_galeria','footer_videos','footer_testemunhos','footer_contacto'];
  empLinks.forEach((a, i) => { if (empKeys[i]) a.textContent = t(empKeys[i]); });
  // legal links
  const legLinks = document.querySelectorAll('.footer-grid > div:nth-child(4) li a');
  const legKeys = ['footer_privacidade','footer_termos','footer_cancelamento','footer_reclamacoes'];
  legLinks.forEach((a, i) => { if (legKeys[i]) a.textContent = t(legKeys[i]); });
  const ftBottom = document.querySelectorAll('.footer-bottom p');
  if (ftBottom[0]) ftBottom[0].textContent = t('footer_copy');
  if (ftBottom[1]) ftBottom[1].textContent = t('footer_license');

  // WhatsApp float
  document.querySelectorAll('a.whatsapp-link[href*="wa.me"]').forEach(a => {
    const msg = t('whatsapp_msg');
    a.href = a.href.replace(/text=[^&]*/, `text=${encodeURIComponent(msg)}`);
  });

  // Atualiza o toggle
  updateLangToggle();
}

// ── Cria o toggle na navbar
function createLangToggle() {
  const nav = document.getElementById('navLinks');
  if (!nav) return;
  if (document.getElementById('langToggle')) return; // já existe

  const li = document.createElement('li');
  li.id = 'langToggle';
  li.innerHTML = `
    <button class="lang-btn" id="langBtnPT" onclick="setLang('pt')" aria-label="Português">
      <span class="lang-flag">🇵🇹</span><span class="lang-code">PT</span>
    </button>
    <span class="lang-sep">|</span>
    <button class="lang-btn" id="langBtnEN" onclick="setLang('en')" aria-label="English">
      <span class="lang-flag">🇬🇧</span><span class="lang-code">EN</span>
    </button>`;
  nav.appendChild(li);

  // Estilos
  const style = document.createElement('style');
  style.textContent = `
    #langToggle {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      margin-left: 0.5rem;
    }
    .lang-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: rgba(244,237,224,0.5);
      padding: 4px 6px;
      border-radius: 4px;
      transition: color 0.2s, background 0.2s;
    }
    .lang-btn:hover { color: #f4ede0; background: rgba(255,255,255,0.08); }
    .lang-btn.active { color: #f4ede0; background: rgba(255,255,255,0.12); }
    .lang-flag { font-size: 1rem; line-height: 1; }
    .lang-sep { color: rgba(244,237,224,0.2); font-size: 0.7rem; }
    /* Banner de língua detetada */
    #langBanner {
      position: fixed;
      bottom: 5rem;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(10,20,10,0.95);
      border: 1px solid rgba(184,201,168,0.3);
      color: #f4ede0;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: 0.85rem;
      z-index: 8000;
      display: flex;
      align-items: center;
      gap: 1rem;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      animation: slideUp 0.3s ease;
      white-space: nowrap;
    }
    @keyframes slideUp {
      from { opacity:0; transform: translateX(-50%) translateY(10px); }
      to   { opacity:1; transform: translateX(-50%) translateY(0); }
    }
    #langBanner button {
      background: #6b8f5e;
      border: none;
      color: #fff;
      padding: 0.35rem 0.9rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.8rem;
      font-weight: 600;
      font-family: inherit;
    }
    #langBannerDismiss {
      background: none !important;
      color: rgba(244,237,224,0.4) !important;
      font-size: 1.1rem !important;
      padding: 0 !important;
    }
  `;
  document.head.appendChild(style);
}

function updateLangToggle() {
  const ptBtn = document.getElementById('langBtnPT');
  const enBtn = document.getElementById('langBtnEN');
  if (ptBtn) ptBtn.classList.toggle('active', currentLang === 'pt');
  if (enBtn) enBtn.classList.toggle('active', currentLang === 'en');
}

// ── Muda idioma
function setLang(lang, save = true) {
  currentLang = lang;
  if (save) localStorage.setItem('wam_lang', lang);
  applyTranslations();
  // Remove banner se existir
  const banner = document.getElementById('langBanner');
  if (banner) banner.remove();
}

// ── Mostra banner "Detected English — switch?"
function showEnglishBanner() {
  if (document.getElementById('langBanner')) return;
  const banner = document.createElement('div');
  banner.id = 'langBanner';
  banner.innerHTML = `
    🇬🇧 We detected you may prefer English.
    <button onclick="setLang('en')">Switch to English</button>
    <button id="langBannerDismiss" onclick="this.closest('#langBanner').remove()">✕</button>`;
  document.body.appendChild(banner);
  setTimeout(() => { if (banner.parentNode) banner.remove(); }, 10000);
}

// ── Deteção por IP
async function detectLangByIP() {
  // 1. Preferência guardada → usa sempre
  const saved = localStorage.getItem('wam_lang');
  if (saved) { setLang(saved, false); return; }

  // 2. Tenta detetar país via API gratuita
  try {
    const resp = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
    const data = await resp.json();
    const country = data.country_code || '';
    // Países de língua portuguesa
    const ptCountries = ['PT','BR','AO','MZ','CV','ST','GW','TL'];
    if (ptCountries.includes(country)) {
      setLang('pt', false);
    } else {
      // Qualquer outro país → EN, mas mostra banner
      setLang('en', false);
      if (country && country !== 'PT') showEnglishBanner();
    }
  } catch {
    // Fallback: PT
    setLang('pt', false);
  }
}

// ── INIT
document.addEventListener('DOMContentLoaded', () => {
  createLangToggle();
  detectLangByIP();
});

// Expõe globalmente
window.setLang = setLang;
window.t = t;
