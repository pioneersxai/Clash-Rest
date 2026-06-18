/**
 * ============================================================
 *  BRAND CONFIG — Clash Restaurant كلاش
 *  PRO PACK — Burger & Fried Chicken — Sohag
 * ============================================================
 */

const BRAND = {

  name:        "Clash",
  tagline:     "كلاش موضوع مختلف",
  description: "كلاش — برجر وفراخ مقلية بأسلوب مختلف في سوهاج. تجربة أكل لا تنساها",
  keywords:    "كلاش, برجر, فراخ, سوهاج, مطعم, Clash, burger, sohag, pizza, crepe",
  author:      "Clash Restaurant",

  primaryColor:     "#ff6b00",
  primaryColorDark: "#e05a00",
  faviconLetter:    "C",
  faviconColor:     "%23ff6b00",

  lang: "ar",
  dir:  "rtl",

  phone:    "+20 109 040 7125",
  whatsapp: "201090407125",
  email:    "clash@clashsohag.com",
  city:     "شارع سيتي الرئيسي، سوهاج",
  hours:    "يومياً: ١٢:٠٠ ظ — ٢:٠٠ ص",

  apiBase: "",
  domain:  "https://pioneersxai.github.io/Clash-Rest",

  social: {
    twitter:   "",
    linkedin:  "",
    instagram: "https://www.instagram.com/clashrestaurant5/",
    youtube:   "",
    tiktok:    "https://www.tiktok.com/@clash57",
  },

  sections: ["hero", "stats", "features", "services", "testimonials", "cta", "contact"],

  showAuthButtons: false,

  navLinks: [
    { label: "الرئيسية",  href: "#home" },
    { label: "المنيو",    href: "#section-services" },
    { label: "عن كلاش",  href: "#section-features" },
    { label: "تواصل معنا", href: "#section-contact" },
  ],

  hero: {
    image:       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&q=80",
    tag:         "🔥 كلاش موضوع مختلف",
    title:       "الأكل اللي بيخليك تتكلم",
    tagline:     "برجر • فراخ • بيتزا — سوهاج",
    description: "مش بس أكل — كلاش تجربة. برجر ضخم، فراخ مقلية مقرمشة، بيتزا، كريب — وأسلوب مختلف في كل قضمة.",
    buttons: [
      { text: "اطلب دلوقتي", href: "whatsapp", style: "whatsapp", icon: "fab fa-whatsapp" },
      { text: "شوف المنيو",  href: "#section-services", style: "secondary" },
    ],
  },

  stats: [
    { number: "٢٠٢٢",   label: "سنة التأسيس" },
    { number: "١٠٠%",   label: "طازج يومياً" },
    { number: "٣٬٧٠٠+", label: "متابع إنستغرام" },
    { number: "٢٤/٧",   label: "متاح دايماً" },
  ],

  features: {
    title:    "ليه كلاش؟",
    subtitle: "لأن الأكل العادي مش إلنا — كلاش موضوع مختلف",
    items: [
      { icon: "fas fa-fire",           title: "طعم لا يُقاوم",      description: "تتبيلة سرية وأسلوب تحضير خاص بيخلي كل قضمة تجربة مختلفة تماماً." },
      { icon: "fas fa-drumstick-bite", title: "فراخ مقرمشة ١٠٠%",  description: "فراخ طازجة يومياً، مقلية بالطريقة الصح — برة مقرمشة، جوه طرية وعصيرة." },
      { icon: "fas fa-hamburger",      title: "برجر ضخم وجامد",     description: "لحمة عالية الجودة، خضار طازج، وصلصات بتجنن في كل بيتة." },
      { icon: "fas fa-motorcycle",     title: "توصيل سريع",          description: "أوردر وإنت في بيتك — بنوصل لأي مكان في سوهاج بسرعة." },
      { icon: "fas fa-tags",           title: "أسعار تنافسية",       description: "أكل جامد بسعر معقول — كلاش مش بيتنازل عن الجودة أو السعر." },
      { icon: "fas fa-star",           title: "تجربة مختلفة خالص",  description: "جو مختلف، عرض مختلف، أكل مختلف — كلاش موضوع تاني خالص." },
    ],
  },

  services: {
    title:    "المنيو",
    subtitle: "كل حاجة بتحبها في مكان واحد",
    items: [
      {
        image:       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
        icon:        "fas fa-hamburger",
        title:       "🍔 البرجر",
        description: "برجر ضخم بلحمة عالية الجودة وصلصات بتجنن",
        features:    ["تايجر برجر — من ١٠٥ جنيه", "أنجري برجر — من ١٠٥ جنيه", "بيج كلاش — من ١٠٠ جنيه", "بلاك كوبرا — من ١٤٠ جنيه", "فاير برجر — من ١١٠ جنيه"],
        price:       "يبدأ من ١٠٠ جنيه",
      },
      {
        image:       "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80",
        icon:        "fas fa-drumstick-bite",
        title:       "🍗 الفراخ",
        description: "فراخ مقلية مقرمشة بأحسن تتبيلة في سوهاج",
        features:    ["مكس كلاش — ١٧٠ جنيه", "فاير رانش — من ١٤٠ جنيه", "ستورم شيكن", "روكيت شيكن", "جودزيلا تشيكن — من ١٤٠ جنيه"],
        price:       "يبدأ من ١٠٠ جنيه",
      },
      {
        image:       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        icon:        "fas fa-pizza-slice",
        title:       "🍕 البيتزا",
        description: "بيتزا بعجينة كلاش الخاصة وتوبينجز فاخرة",
        features:    ["سوبر سوبريم — ١٩٥ جنيه", "بيتزا برجر — ١٧٥ جنيه", "كرانشي تشيكن — ١٨٥ جنيه", "بيتزا خضروات — ١٣٠ جنيه", "مارجريتا — ١١٥ جنيه"],
        price:       "يبدأ من ١١٥ جنيه",
      },
      {
        image:       "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80",
        icon:        "fas fa-bread-slice",
        title:       "🥞 الكريب",
        description: "كريب طازج بحشوات متنوعة حلوة ومالحة",
        features:    ["كريب كريسبي بارد/حار — ١٣٥ جنيه", "كريب شيش — ١٣٥ جنيه", "هاجيك كريب — ١٥٠ جنيه", "كريب كفته — ١٢٥ جنيه", "كريبي كريب — ١٥٥ جنيه"],
        price:       "يبدأ من ٨٠ جنيه",
      },
      {
        image:       "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80",
        icon:        "fas fa-french-fries",
        title:       "🍟 الفريز",
        description: "فريز مقرمش بأشهر صوصات كلاش",
        features:    ["كلاش فريز — ٦٥ جنيه", "كريمي فريز — ٦٥ جنيه", "تشيز فريز — ٦٥ جنيه", "بطاطس سادة صغير — ٣٥ جنيه", "بطاطس سادة كبير — ٤٥ جنيه"],
        price:       "يبدأ من ٣٥ جنيه",
      },
      {
        image:       "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80",
        icon:        "fas fa-glass-cheers",
        title:       "🥤 المشروبات والإضافات",
        description: "مشروبات ومقبلات تكمل تجربة كلاش",
        features:    ["بيبسي كان — ٥ جنيه | زجاجة — ٣٥", "سفن أب — ٣٥ جنيه", "موزاريلا ستيكس — ٣٥ جنيه", "كول سلو كبير — ٤٥ جنيه", "هالابينو ديبر — ٥٠ جنيه"],
        price:       "يبدأ من ٥ جنيه",
      },
    ],
  },

  testimonials: {
    title:    "الناس بتقول إيه؟",
    subtitle: "كلام حقيقي من ناس جربت كلاش",
    items: [
      {
        text:   "والله أحسن برجر جربته في سوهاج خالص. البيج كلاش ده بجد موضوع — اللحمة طازجة والصوص بيجنن. هعود تاني ومش هيبقى آخر مرة.",
        avatar: "م.أ", name: "محمد أحمد", role: "زبون منتظم — سوهاج",
      },
      {
        text:   "البيتزا عندهم غير تماماً — بيتزا برجر جربتها وبجد فكرة عبقرية. كلاش فعلاً موضوع مختلف زي ما بيقولوا والأسعار كويسة جداً.",
        avatar: "ع.م", name: "عمر محمود", role: "زبون — سوهاج",
      },
      {
        text:   "الكريب عندهم نار — هاجيك كريب ده لازم تجربه. بيجيلك سريع وساخن والتوصيل منضبط. كلاش دلوقتي ثاني مكان آكل فيه في سوهاج.",
        avatar: "س.ع", name: "سارة علي", role: "زبونة — سوهاج",
      },
    ],
  },

  cta: {
    image:    "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1600&q=80",
    title:    "جعان؟ كلاش موجود 🔥",
    subtitle: "اطلب دلوقتي على واتساب وهيوصلك طازج وساخن في أسرع وقت",
    buttons: [
      { text: "اطلب دلوقتي 🔥", href: "whatsapp", style: "whatsapp", icon: "fab fa-whatsapp" },
      { text: "شوف المنيو",     href: "#section-services", style: "secondary" },
    ],
  },

  contact: {
    title:           "اتواصل معانا",
    subtitle:        "اطلب أو استفسر — إحنا موجودين دايماً",
    formTitle:       "ابعت طلبك أو استفسارك",
    formPlaceholder: "اكتب طلبك هنا — مثلاً: عايز بيج كلاش دابل مع كلاش فريز وبيبسي...",
    formButton:      "ابعت",
    inquiries: [
      { value: "order",    label: "🍔 طلب أكل" },
      { value: "delivery", label: "🛵 استفسار توصيل" },
      { value: "offer",    label: "⚡ عرض أو باقة" },
      { value: "other",    label: "💬 أخرى" },
    ],
  },

  footer: {
    about:     "كلاش — برجر وفراخ مقلية وبيتزا وكريب بأسلوب مختلف في سوهاج. كلاش موضوع مختلف خالص.",
    copyright: `© ${new Date().getFullYear()} Clash Restaurant. جميع الحقوق محفوظة. صُمّم بواسطة PioneersX ⚡`,
    columns: [
      {
        title: "المنيو",
        links: [
          { label: "🍔 البرجر",         href: "#section-services" },
          { label: "🍗 الفراخ المقلية", href: "#section-services" },
          { label: "🍕 البيتزا",        href: "#section-services" },
          { label: "🥞 الكريب",         href: "#section-services" },
        ],
      },
      {
        title: "روابط سريعة",
        links: [
          { label: "الرئيسية",     href: "#home" },
          { label: "ليه كلاش",    href: "#section-features" },
          { label: "آراء الزباين", href: "#section-testimonials" },
          { label: "تواصل معنا",  href: "#section-contact" },
        ],
      },
    ],
  },

};

// ============================================================
//  ENGINE
// ============================================================
(function () {

  function applyColors() {
    const r = document.documentElement.style;
    r.setProperty('--primary-red',      BRAND.primaryColor);
    r.setProperty('--accent',           BRAND.primaryColor);
    r.setProperty('--espresso',         '#0f0f0f');
    r.setProperty('--dark-roast',       '#1a1a1a');
    r.setProperty('--caramel',          BRAND.primaryColor);
    r.setProperty('--cream',            '#fff7ed');
    r.setProperty('--latte',            '#ffedd5');
    r.setProperty('--parchment',        '#fffbf7');
    r.setProperty('--text-on-dark',     '#ffffff');
    r.setProperty('--text-muted-dark',  '#a3a3a3');
    r.setProperty('--text-on-light',    '#0f0f0f');
    r.setProperty('--text-muted-light', '#6b7280');
    r.setProperty('--card-dark',        '#1a1a1a');
    r.setProperty('--border-dark',      '#2a2a2a');
    r.setProperty('--border-light',     '#fed7aa');
    r.setProperty('--darker-bg',        '#0a0a0a');
    r.setProperty('--dark-bg',          '#0f0f0f');
    r.setProperty('--text-gray',        '#a3a3a3');
    r.setProperty('--card-bg',          '#1a1a1a');
    r.setProperty('--border-color',     '#2a2a2a');
    r.setProperty('--success-green',    '#25d366');
  }

  function buildTicker() {
    const ticker = document.getElementById('clash-ticker');
    if (!ticker) return;
    const items = ['🔥 CLASH', '🍔 برجر', '🍗 فراخ مقلية', '🍕 بيتزا', '🥞 كريب', '💥 كلاش موضوع مختلف', '🍟 فريز كلاش', '🔥 سوهاج', '🍔 اطلب دلوقتي'];
    const html = items.map(i => `<span>${i}</span>`).join('');
    ticker.innerHTML = html + html; // duplicate for seamless loop
  }

  function applySections() {
    const all = ['stats','features','services','products','team','process','casestudies','clients','testimonials','cta','contact'];
    all.forEach(id => {
      const el = document.getElementById('section-' + id);
      if (!el) return;
      el.style.display = BRAND.sections.includes(id) ? '' : 'none';
    });
  }

  function buildNav() {
    document.querySelectorAll('.brand-logo').forEach(el => el.textContent = BRAND.name);
    const authEl = document.getElementById('nav-auth');
    if (authEl) authEl.style.display = 'none';
    const navEl = document.getElementById('navLinks');
    if (navEl && BRAND.navLinks.length) {
      navEl.innerHTML = BRAND.navLinks.map(l =>
        `<li><a href="${l.href}">${l.label}</a></li>`
      ).join('');
    }
  }

  function buildHero() {
    const heroEl = document.querySelector('.hero');
    if (heroEl && BRAND.hero.image) {
      heroEl.style.backgroundImage = [
        'linear-gradient(160deg,rgba(15,15,15,0.88) 0%,rgba(255,107,0,0.28) 50%,rgba(15,15,15,0.92) 100%)',
        `url('${BRAND.hero.image}')`
      ].join(', ');
      heroEl.style.backgroundSize = 'cover';
      heroEl.style.backgroundPosition = 'center center';
      heroEl.style.backgroundRepeat = 'no-repeat';
    }
    const tagEl = document.querySelector('.hero-tag');
    if (tagEl) { if (BRAND.hero.tag) tagEl.innerHTML = BRAND.hero.tag; else tagEl.style.display='none'; }
    document.querySelectorAll('.hero-title').forEach(el => el.innerHTML = BRAND.hero.title);
    document.querySelectorAll('.hero-tagline').forEach(el => el.innerHTML = BRAND.hero.tagline);
    document.querySelectorAll('.hero-description').forEach(el => el.innerHTML = BRAND.hero.description);
    const btnsEl = document.querySelector('.hero-buttons');
    if (btnsEl) {
      btnsEl.innerHTML = BRAND.hero.buttons.map(b => {
        const href = b.href==='whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
        const icon = b.icon ? `<i class="${b.icon}"></i> ` : '';
        const cls  = b.style==='whatsapp' ? 'btn btn-whatsapp' : b.style==='primary' ? 'btn btn-primary' : 'btn btn-secondary';
        const tgt  = b.href==='whatsapp' ? ' target="_blank"' : '';
        return `<a href="${href}" class="${cls}"${tgt}>${icon}${b.text}</a>`;
      }).join('');
    }
  }

  function buildStats() {
    const grid = document.querySelector('.stats-grid');
    if (!grid) return;
    grid.innerHTML = BRAND.stats.map(s =>
      `<div class="stat-item fade-in"><div class="stat-number">${s.number}</div><div class="stat-label">${s.label}</div></div>`
    ).join('');
  }

  function buildFeatures() {
    const sec = document.getElementById('section-features');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.features.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.features.subtitle;
    const grid = sec.querySelector('.medical-grid');
    if (grid) {
      grid.innerHTML = BRAND.features.items.map(f =>
        `<div class="medical-card fade-in">
          <i class="${f.icon} medical-icon"></i>
          <h3 class="medical-title">${f.title}</h3>
          <p class="medical-description">${f.description}</p>
        </div>`
      ).join('');
    }
  }

  function buildServices() {
    const sec = document.getElementById('section-services');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.services.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.services.subtitle;
    const grid = sec.querySelector('.services-grid');
    if (grid) {
      grid.innerHTML = BRAND.services.items.map(s =>
        `<div class="service-card fade-in">
          ${s.image ? `<div class="service-card-img"><img src="${s.image}" alt="${s.title}" loading="lazy"></div>` : ''}
          <div class="service-card-body">
            <div class="service-card-top">
              <h3 class="service-title">${s.title}</h3>
              ${s.price ? `<span class="service-price-tag">${s.price}</span>` : ''}
            </div>
            <p class="service-description">${s.description}</p>
            <ul class="service-features">${s.features.map(f=>`<li>${f}</li>`).join('')}</ul>
            <a href="https://wa.me/${BRAND.whatsapp}?text=مرحباً، عايز أطلب من ${s.title}" class="service-order-btn" target="_blank"><i class="fab fa-whatsapp"></i> اطلب دلوقتي</a>
          </div>
        </div>`
      ).join('');
    }
  }

  function buildTestimonials() {
    const sec = document.getElementById('section-testimonials');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.testimonials.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.testimonials.subtitle;
    const grid = sec.querySelector('.testimonials-grid');
    if (grid) {
      grid.innerHTML = BRAND.testimonials.items.map(t =>
        `<div class="testimonial fade-in">
          <p class="testimonial-text">"${t.text}"</p>
          <div class="testimonial-author">
            <div class="author-avatar">${t.avatar}</div>
            <div class="author-info"><h4>${t.name}</h4><p>${t.role}</p></div>
          </div>
        </div>`
      ).join('');
    }
  }

  function buildCTA() {
    const sec = document.getElementById('section-cta');
    if (!sec) return;
    sec.querySelector('.cta-title').textContent   = BRAND.cta.title;
    sec.querySelector('.cta-subtitle').textContent = BRAND.cta.subtitle;
    if (BRAND.cta.image) {
      sec.style.backgroundImage    = `linear-gradient(135deg,rgba(15,15,15,0.88),rgba(255,107,0,0.5)),url('${BRAND.cta.image}')`;
      sec.style.backgroundSize     = 'cover';
      sec.style.backgroundPosition = 'center';
      sec.querySelector('.cta-title').style.color   = '#ffffff';
      sec.querySelector('.cta-subtitle').style.color = 'rgba(255,255,255,0.85)';
    }
    const btns = sec.querySelector('.hero-buttons');
    if (btns) {
      btns.innerHTML = BRAND.cta.buttons.map(b => {
        const href = b.href==='whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
        const icon = b.icon ? `<i class="${b.icon}"></i> ` : '';
        const cls  = b.style==='whatsapp' ? 'btn btn-whatsapp' : b.style==='primary' ? 'btn btn-primary' : 'btn btn-secondary';
        const tgt  = b.href==='whatsapp' ? ' target="_blank"' : '';
        return `<a href="${href}" class="${cls}"${tgt}>${icon}${b.text}</a>`;
      }).join('');
    }
  }

  function buildContact() {
    const sec = document.getElementById('section-contact');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.contact.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.contact.subtitle;
    const phone=sec.querySelector('.contact-phone'); if(phone) phone.textContent=BRAND.phone;
    const email=sec.querySelector('.contact-email'); if(email){email.textContent=BRAND.email;email.href=`mailto:${BRAND.email}`;}
    const wa=sec.querySelector('.contact-wa');       if(wa){wa.textContent=BRAND.phone;wa.href=`https://wa.me/${BRAND.whatsapp}`;}
    const city=sec.querySelector('.contact-city');   if(city) city.textContent=BRAND.city;
    const hours=sec.querySelector('.contact-hours'); if(hours) hours.textContent=BRAND.hours;
    const ft=sec.querySelector('.form-title');       if(ft) ft.textContent=BRAND.contact.formTitle;
    const sel=sec.querySelector('#service');
    if(sel){sel.innerHTML=`<option value="">نوع الطلب</option>`+BRAND.contact.inquiries.map(i=>`<option value="${i.value}">${i.label}</option>`).join('');}
    const ta=sec.querySelector('textarea'); if(ta) ta.placeholder=BRAND.contact.formPlaceholder;
    const sb=sec.querySelector('.contact-form button[type="submit"]'); if(sb) sb.textContent=BRAND.contact.formButton;
  }

  function buildFooter() {
    const ft=document.querySelector('footer');
    if(!ft) return;
    const abt=ft.querySelector('.footer-about'); if(abt) abt.textContent=BRAND.footer.about;
    ft.querySelectorAll('.footer-brand-name').forEach(el=>el.textContent=BRAND.name);
    const socMap={'footer-twitter':BRAND.social.twitter,'footer-linkedin':BRAND.social.linkedin,'footer-instagram':BRAND.social.instagram,'footer-youtube':BRAND.social.youtube,'footer-tiktok':BRAND.social.tiktok};
    Object.entries(socMap).forEach(([id,url])=>{const el=ft.querySelector(`#${id}`);if(!el)return;if(!url){el.style.display='none';}else{el.href=url;}});
    const fc=ft.querySelector('.footer-contact-phone'); if(fc) fc.textContent=BRAND.phone;
    const fe=ft.querySelector('.footer-contact-email'); if(fe){fe.textContent=BRAND.email;fe.href=`mailto:${BRAND.email}`;}
    const fw=ft.querySelector('.footer-contact-wa');    if(fw){fw.textContent=BRAND.phone;fw.href=`https://wa.me/${BRAND.whatsapp}`;}
    const fx=ft.querySelector('.footer-contact-city'); if(fx) fx.textContent=BRAND.city;
    const cols=ft.querySelector('.footer-dynamic-cols');
    if(cols&&BRAND.footer.columns){cols.innerHTML=BRAND.footer.columns.map(col=>`<div class="footer-section"><h3>${col.title}</h3><ul>${col.links.map(l=>`<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul></div>`).join('');}
    const cp=ft.querySelector('.footer-copyright'); if(cp) cp.textContent=BRAND.footer.copyright;
  }

  function buildWhatsApp() {
    const wa=document.querySelector('.whatsapp-float');
    if(wa) wa.href=`https://wa.me/${BRAND.whatsapp}`;
  }

  function buildMeta() {
    document.title=`${BRAND.name} - ${BRAND.tagline}`;
    document.documentElement.lang=BRAND.lang;
    document.documentElement.dir=BRAND.dir;
    const setMeta=(sel,val)=>{const m=document.querySelector(sel);if(m)m.content=val;};
    setMeta('meta[name="description"]',BRAND.description);
    setMeta('meta[name="keywords"]',BRAND.keywords);
    setMeta('meta[name="author"]',BRAND.author);
    setMeta('meta[property="og:title"]',`${BRAND.name} - ${BRAND.tagline}`);
    setMeta('meta[property="og:description"]',BRAND.description);
    setMeta('meta[property="og:url"]',BRAND.domain);
    const fav=document.getElementById('favicon');
    if(fav) fav.href=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='75' font-family='Arial,sans-serif' font-size='95' font-weight='bold' text-anchor='middle' fill='${BRAND.faviconColor}'%3E${BRAND.faviconLetter}%3C/text%3E%3C/svg%3E`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyColors();
    buildMeta();
    buildNav();
    buildHero();
    buildTicker();
    buildStats();
    buildFeatures();
    buildServices();
    buildTestimonials();
    buildCTA();
    buildContact();
    buildFooter();
    buildWhatsApp();
    applySections();

    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
      }, { threshold:0.1, rootMargin:'0px 0px -50px 0px' });
      document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight) el.classList.add('visible');
        else observer.observe(el);
      });
    }, 100);
  });

})();
