/**
 * ============================================================
 *  BRAND CONFIG — THE ONLY FILE YOU EVER EDIT PER CLIENT
 *  Zero hardcoded content anywhere else. Everything lives here.
 * ============================================================
 */

const BRAND = {

  // ── Identity ──────────────────────────────────────────────
  name:         "Alex Cafe",
  tagline:      "أفضل تجربة قهوة في صعيد مصر",
  description:  "كافيه أليكس - وجهتك المثالية للقهوة والمشروبات الفاخرة في سوهاج",
  keywords:     "كافيه, قهوة, سوهاج, مشروبات, كافيه أليكس",
  author:       "Alex Cafe",

  // ── Theme ─────────────────────────────────────────────────
  primaryColor:      "#1a1a1a",
  primaryColorDark:  "#000000",
  primaryColorGlow:  "rgba(26,26,26,0.4)",
  faviconLetter:     "A",
  faviconColor:      "%231a1a1a",

  // ── Language ──────────────────────────────────────────────
  lang: "ar",
  dir:  "rtl",

  // ── Contact ───────────────────────────────────────────────
  phone:     "+20 100 000 0000",
  whatsapp:  "201000000000",
  email:     "hello@alexcafe.com",
  city:      "سوهاج، مصر",
  hours:     "يومياً: 8:00 ص - 12:00 م",

  // ── API & Domain ──────────────────────────────────────────
  apiBase: "https://api.alexcafe.com/api",
  domain:  "https://pioneersxai.github.io/Alex-Cafe",

  // ── Social (empty string = icon hidden) ───────────────────
  social: {
    twitter:   "",
    linkedin:  "",
    instagram: "https://www.instagram.com/alexcafe",
    youtube:   "",
    tiktok:    "https://www.tiktok.com/@alexcafe",
  },

  // ── Sections to show (everything else auto-hides) ─────────
  // Available: hero, stats, features, services, products,
  //            team, process, casestudies, clients,
  //            testimonials, cta, contact
  sections: ["hero", "stats", "features", "testimonials", "cta", "contact"],

  // ── Show/hide nav auth buttons (login/register) ───────────
  showAuthButtons: false,

  // ── Nav links (only sections listed in `sections` appear) ──
  // Leave empty [] to auto-generate from sections list
  navLinks: [
    { label: "الرئيسية",    href: "#home" },
    { label: "مميزاتنا",   href: "#features" },
    { label: "آراء العملاء", href: "#testimonials" },
    { label: "تواصل معنا", href: "#contact" },
  ],

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    title:       "أفضل قهوة في صعيد مصر",
    tagline:     "كافيه أليكس — سوهاج",
    description: "استمتع بتجربة قهوة فريدة في قلب سوهاج. أجواء هادئة، قهوة مختصة، ومشروبات فاخرة تناسب كل الأذواق.",
    buttons: [
      { text: "تواصل معنا",    href: "#contact",  style: "primary" },
      { text: "واتساب",         href: "whatsapp",  style: "whatsapp", icon: "fab fa-whatsapp" },
    ],
  },

  // ── Stats ─────────────────────────────────────────────────
  stats: [
    { number: "5+",   label: "سنوات خبرة" },
    { number: "20+",  label: "نوع مشروب" },
    { number: "24/7", label: "متاح دائماً" },
    { number: "100%", label: "رضا العملاء" },
  ],

  // ── Features ──────────────────────────────────────────────
  features: {
    title:    "لماذا أليكس؟",
    subtitle: "نقدم أكثر من مجرد قهوة — نقدم تجربة لا تُنسى",
    items: [
      { icon: "fas fa-coffee",       title: "قهوة مختصة",      description: "حبوب قهوة مختارة بعناية من أفضل المزارع العالمية، محمصة بشكل مثالي." },
      { icon: "fas fa-couch",        title: "أجواء مريحة",     description: "ديكور أنيق وأجواء هادئة تجعلك تستمتع بوقتك بعيداً عن ضغوط اليوم." },
      { icon: "fas fa-wifi",         title: "واي فاي مجاني",   description: "اتصال إنترنت سريع ومجاني لجميع زوارنا طوال فترة إقامتهم." },
      { icon: "fas fa-utensils",     title: "مأكولات خفيفة",   description: "تشكيلة من أشهى المأكولات الخفيفة والحلويات المصنوعة يومياً." },
      { icon: "fas fa-snowflake",    title: "مشروبات باردة",   description: "تشكيلة واسعة من العصائر الطازجة والمشروبات الباردة المنعشة." },
      { icon: "fas fa-star",         title: "جودة لا تُضاهى",  description: "نلتزم بأعلى معايير الجودة في كل كوب نقدمه لضمان رضاك التام." },
    ],
  },

  // ── Services ──────────────────────────────────────────────
  services: {
    title:    "خدماتنا",
    subtitle: "نقدم تشكيلة متنوعة من الخدمات",
    items: [
      {
        number: "01", icon: "fas fa-coffee", title: "قهوة مختصة",
        description: "أفضل أنواع القهوة من حول العالم",
        features: ["إسبريسو", "كابوتشينو", "لاتيه", "فلات وايت"],
      },
      {
        number: "02", icon: "fas fa-glass-cheers", title: "مناسبات خاصة",
        description: "خدمة القهوة للمناسبات والفعاليات",
        features: ["حجز صالة كاملة", "باريستا خاص", "قائمة مخصصة", "ديكور مميز"],
      },
    ],
  },

  // ── Products ──────────────────────────────────────────────
  products: {
    title:    "منتجاتنا",
    subtitle: "تشكيلتنا المميزة",
    items: [
      {
        badge: "الأكثر طلباً", icon: "fas fa-coffee",
        name: "قهوة أليكس المميزة", tagline: "مزيجنا السري",
        description: "مزيج خاص من أجود أنواع حبوب القهوة يمنحك طعماً لا يُنسى.",
        features: ["حبوب مختارة يدوياً", "تحميص طازج", "طعم فريد", "يُقدم يومياً"],
        price: "25", currency: "جنيه",
        buttons: [
          { text: "اطلب الآن", href: "whatsapp", style: "primary" },
        ],
      },
    ],
  },

  // ── Team ──────────────────────────────────────────────────
  team: {
    title:    "فريقنا",
    subtitle: "باريستا محترفون في خدمتك",
    members: [
      { avatar: "أ.م", name: "أحمد محمد", role: "مدير الكافيه", bio: "خبرة أكثر من 8 سنوات في عالم القهوة المختصة." },
      { avatar: "س.ع", name: "سارة علي",  role: "رئيسة الباريستا", bio: "حاصلة على شهادات دولية في تحضير القهوة المختصة." },
    ],
  },

  // ── Process ───────────────────────────────────────────────
  process: {
    title:    "كيف نعمل",
    subtitle: "من الحبة إلى الكوب",
    steps: [
      { icon: "fas fa-seedling", title: "اختيار الحبوب", items: ["مزارع معتمدة", "اختيار يدوي دقيق", "جودة مضمونة"] },
      { icon: "fas fa-fire",     title: "التحميص",       items: ["تحميص يومي طازج", "درجات حرارة مضبوطة", "رائحة لا تُقاوم"] },
      { icon: "fas fa-coffee",   title: "التحضير",       items: ["باريستا محترف", "معدات حديثة", "وصفات مدروسة"] },
      { icon: "fas fa-smile",    title: "التقديم",        items: ["تقديم أنيق", "خدمة مميزة", "ابتسامة دائمة"] },
    ],
  },

  // ── Case Studies ──────────────────────────────────────────
  casestudies: {
    title:    "قصص نجاحنا",
    subtitle: "أرقام تتحدث عن نفسها",
    items: [
      {
        icon: "fas fa-coffee", title: "نمو أليكس كافيه", client: "سوهاج، مصر — منذ 2019",
        content: "بدأنا بفرع واحد وحلم كبير. اليوم نخدم مئات العملاء يومياً ونُعدّ من أشهر الكافيهات في سوهاج.",
        results: [
          { number: "500+", label: "عميل يومياً" },
          { number: "4.9", label: "تقييم جوجل" },
          { number: "5+",  label: "سنوات نجاح" },
          { number: "98%", label: "رضا العملاء" },
        ],
      },
    ],
  },

  // ── Clients ───────────────────────────────────────────────
  clients: {
    title:    "عملاؤنا",
    subtitle: "نفخر بثقة عملائنا",
    icons: ["fas fa-building", "fas fa-university", "fas fa-store", "fas fa-hotel", "fas fa-graduation-cap", "fas fa-briefcase"],
  },

  // ── Testimonials ──────────────────────────────────────────
  testimonials: {
    title:    "آراء عملائنا",
    subtitle: "ماذا يقول زوارنا عن تجربتهم",
    items: [
      {
        text:   "أفضل قهوة جربتها في سوهاج! الأجواء رائعة والخدمة ممتازة. بصراحة مش هتلاقي أحسن من كده.",
        avatar: "م.أ", name: "محمد أحمد", role: "زبون منتظم — سوهاج",
      },
      {
        text:   "كل مرة أجي أليكس أحس إن اليوم بدأ صح. القهوة خرافية والفريق محترف ومبتسم دايماً.",
        avatar: "س.م", name: "سارة محمود", role: "زبونة منتظمة — سوهاج",
      },
      {
        text:   "عملنا حفلة تخرج هنا وكانت تجربة استثنائية. الاهتمام بالتفاصيل والخدمة فاقت توقعاتنا.",
        avatar: "ع.ح", name: "علي حسن", role: "حجز مناسبة — سوهاج",
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────────────
  cta: {
    title:    "تعال وجرّب بنفسك",
    subtitle: "انضم لآلاف العملاء الراضين واستمتع بأفضل تجربة قهوة في سوهاج",
    buttons: [
      { text: "تواصل معنا",  href: "#contact", style: "primary" },
      { text: "واتساب", href: "whatsapp", style: "whatsapp", icon: "fab fa-whatsapp" },
    ],
  },

  // ── Contact ───────────────────────────────────────────────
  contact: {
    title:    "تواصل معنا",
    subtitle: "يسعدنا سماعك — زورنا أو تواصل معنا",
    formTitle: "أرسل لنا رسالة",
    formPlaceholder: "اكتب رسالتك هنا...",
    formButton: "إرسال",
    inquiries: [
      { value: "reservation", label: "حجز طاولة" },
      { value: "event",       label: "حجز مناسبة" },
      { value: "feedback",    label: "اقتراح أو شكوى" },
      { value: "other",       label: "أخرى" },
    ],
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    about:     "كافيه أليكس — وجهتك المثالية للقهوة المختصة والمشروبات الفاخرة في قلب سوهاج.",
    copyright: `© ${new Date().getFullYear()} Alex Cafe. جميع الحقوق محفوظة.`,
    columns: [
      {
        title: "روابط سريعة",
        links: [
          { label: "الرئيسية",     href: "#home" },
          { label: "مميزاتنا",    href: "#features" },
          { label: "آراء العملاء", href: "#testimonials" },
          { label: "تواصل معنا",  href: "#contact" },
        ],
      },
    ],
  },

};

// ============================================================
//  ENGINE — DO NOT EDIT BELOW THIS LINE
//  This reads BRAND and builds the entire page automatically
// ============================================================

(function () {
  // Apply CSS color vars
  function applyColors() {
    const r = document.documentElement.style;
    r.setProperty('--primary-red',   BRAND.primaryColor);
    r.setProperty('--primary-dark',  BRAND.primaryColorDark);
    r.setProperty('--primary-glow',  BRAND.primaryColorGlow);
  }

  // Show only sections listed in BRAND.sections
  function applySections() {
    const all = ['stats','features','services','products','team','process','casestudies','clients','testimonials','cta'];
    all.forEach(id => {
      const el = document.getElementById('section-' + id);
      if (!el) return;
      el.style.display = BRAND.sections.includes(id) ? '' : 'none';
    });
  }

  // Build navbar
  function buildNav() {
    // Logo
    document.querySelectorAll('.brand-logo').forEach(el => el.textContent = BRAND.name);

    // Auth buttons
    const authEl = document.getElementById('nav-auth');
    if (authEl) authEl.style.display = BRAND.showAuthButtons ? '' : 'none';

    // Nav links
    const navEl = document.getElementById('navLinks');
    if (navEl && BRAND.navLinks.length) {
      navEl.innerHTML = BRAND.navLinks.map(l =>
        `<li><a href="${l.href}">${l.label}</a></li>`
      ).join('');
    }
  }

  // Build hero
  function buildHero() {
    const set = (sel, val) => document.querySelectorAll(sel).forEach(el => el.innerHTML = val);
    set('.hero-title',       BRAND.hero.title);
    set('.hero-tagline',     BRAND.hero.tagline);
    set('.hero-description', BRAND.hero.description);

    const btnsEl = document.querySelector('.hero-buttons');
    if (btnsEl) {
      btnsEl.innerHTML = BRAND.hero.buttons.map(b => {
        const href = b.href === 'whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
        const icon = b.icon ? `<i class="${b.icon}"></i> ` : '';
        const cls  = b.style === 'whatsapp' ? 'btn btn-whatsapp' : b.style === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
        const tgt  = b.href === 'whatsapp' ? ' target="_blank"' : '';
        return `<a href="${href}" class="${cls}"${tgt}>${icon}${b.text}</a>`;
      }).join('');
    }
  }

  // Build stats
  function buildStats() {
    const grid = document.querySelector('.stats-grid');
    if (!grid) return;
    grid.innerHTML = BRAND.stats.map(s =>
      `<div class="stat-item fade-in"><div class="stat-number">${s.number}</div><div class="stat-label">${s.label}</div></div>`
    ).join('');
  }

  // Build features
  function buildFeatures() {
    const sec = document.getElementById('section-features');
    if (!sec) return;
    sec.querySelector('.section-title').textContent  = BRAND.features.title;
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

  // Build services
  function buildServices() {
    const sec = document.getElementById('section-services');
    if (!sec) return;
    sec.querySelector('.section-title').textContent  = BRAND.services.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.services.subtitle;
    const grid = sec.querySelector('.services-grid');
    if (grid) {
      grid.innerHTML = BRAND.services.items.map(s =>
        `<div class="service-card fade-in">
          <span class="service-number">${s.number}</span>
          <i class="${s.icon} service-icon"></i>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-description">${s.description}</p>
          <ul class="service-features">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>`
      ).join('');
    }
  }

  // Build products
  function buildProducts() {
    const sec = document.getElementById('section-products');
    if (!sec) return;
    sec.querySelector('.section-title').textContent  = BRAND.products.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.products.subtitle;
    const grid = sec.querySelector('.products-grid');
    if (grid) {
      grid.innerHTML = BRAND.products.items.map(p => {
        const btns = p.buttons.map(b => {
          const href = b.href === 'whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
          return `<a href="${href}" class="btn btn-${b.style}">${b.text}</a>`;
        }).join('');
        return `<div class="product-card fade-in">
          <div class="product-badge">${p.badge}</div>
          <div class="product-icon"><i class="${p.icon}"></i></div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-tagline">${p.tagline}</p>
          <p class="product-description">${p.description}</p>
          <ul class="product-features">${p.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}</ul>
          <div class="product-price"><span class="price-amount">${p.price}</span><span class="price-currency"> ${p.currency}</span></div>
          <div class="product-buttons">${btns}</div>
        </div>`;
      }).join('');
    }
  }

  // Build team
  function buildTeam() {
    const sec = document.getElementById('section-team');
    if (!sec) return;
    sec.querySelector('.section-title').textContent  = BRAND.team.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.team.subtitle;
    const grid = sec.querySelector('.team-grid');
    if (grid) {
      grid.innerHTML = BRAND.team.members.map(m =>
        `<div class="team-card fade-in">
          <div class="team-avatar">${m.avatar}</div>
          <h3 class="team-name">${m.name}</h3>
          <p class="team-role">${m.role}</p>
          <p class="team-bio">${m.bio}</p>
        </div>`
      ).join('');
    }
  }

  // Build process
  function buildProcess() {
    const sec = document.getElementById('section-process');
    if (!sec) return;
    sec.querySelector('.section-title').textContent  = BRAND.process.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.process.subtitle;
    const steps = sec.querySelector('.process-steps');
    if (steps) {
      steps.innerHTML = BRAND.process.steps.map(s =>
        `<div class="process-step fade-in">
          <div class="process-icon-wrapper"><i class="${s.icon} process-icon"></i></div>
          <h3 class="process-title">${s.title}</h3>
          <ul class="process-items">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>`
      ).join('');
    }
  }

  // Build case studies
  function buildCaseStudies() {
    const sec = document.getElementById('section-casestudies');
    if (!sec) return;
    sec.querySelector('.section-title').textContent  = BRAND.casestudies.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.casestudies.subtitle;
    const container = sec.querySelector('.case-studies-container');
    if (container) {
      container.innerHTML = BRAND.casestudies.items.map(c =>
        `<div class="case-study fade-in">
          <div class="case-study-header">
            <div class="case-study-icon"><i class="${c.icon}"></i></div>
            <div><h3 class="case-study-title">${c.title}</h3><p class="case-study-client">${c.client}</p></div>
          </div>
          <p class="case-study-content">${c.content}</p>
          <div class="case-study-results">
            ${c.results.map(r => `<div class="result-item"><div class="result-number">${r.number}</div><div class="result-label">${r.label}</div></div>`).join('')}
          </div>
        </div>`
      ).join('');
    }
  }

  // Build clients
  function buildClients() {
    const sec = document.getElementById('section-clients');
    if (!sec) return;
    sec.querySelector('.section-title').textContent  = BRAND.clients.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.clients.subtitle;
    const grid = sec.querySelector('.clients-grid');
    if (grid) {
      grid.innerHTML = BRAND.clients.icons.map(i =>
        `<div class="client-logo fade-in"><i class="${i}"></i></div>`
      ).join('');
    }
  }

  // Build testimonials
  function buildTestimonials() {
    const sec = document.getElementById('section-testimonials');
    if (!sec) return;
    sec.querySelector('.section-title').textContent  = BRAND.testimonials.title;
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

  // Build CTA
  function buildCTA() {
    const sec = document.getElementById('section-cta');
    if (!sec) return;
    sec.querySelector('.cta-title').textContent  = BRAND.cta.title;
    sec.querySelector('.cta-subtitle').textContent = BRAND.cta.subtitle;
    const btns = sec.querySelector('.hero-buttons');
    if (btns) {
      btns.innerHTML = BRAND.cta.buttons.map(b => {
        const href = b.href === 'whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
        const icon = b.icon ? `<i class="${b.icon}"></i> ` : '';
        const cls  = b.style === 'whatsapp' ? 'btn btn-whatsapp' : b.style === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
        const tgt  = b.href === 'whatsapp' ? ' target="_blank"' : '';
        return `<a href="${href}" class="${cls}"${tgt}>${icon}${b.text}</a>`;
      }).join('');
    }
  }

  // Build contact
  function buildContact() {
    const sec = document.getElementById('section-contact');
    if (!sec) return;
    sec.querySelector('.section-title').textContent  = BRAND.contact.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.contact.subtitle;

    // Contact info
    const phone = sec.querySelector('.contact-phone'); if (phone) phone.textContent = BRAND.phone;
    const email = sec.querySelector('.contact-email'); if (email) { email.textContent = BRAND.email; email.href = `mailto:${BRAND.email}`; }
    const wa    = sec.querySelector('.contact-wa');    if (wa)    { wa.textContent = BRAND.phone;    wa.href = `https://wa.me/${BRAND.whatsapp}`; }
    const city  = sec.querySelector('.contact-city'); if (city) city.textContent = BRAND.city;
    const hours = sec.querySelector('.contact-hours'); if (hours) hours.textContent = BRAND.hours;

    // Form title
    const ft = sec.querySelector('.form-title'); if (ft) ft.textContent = BRAND.contact.formTitle;

    // Inquiry dropdown
    const sel = sec.querySelector('#service');
    if (sel && BRAND.contact.inquiries) {
      sel.innerHTML = `<option value="">اختر نوع الاستفسار</option>` +
        BRAND.contact.inquiries.map(i => `<option value="${i.value}">${i.label}</option>`).join('');
    }

    // Textarea placeholder
    const ta = sec.querySelector('textarea'); if (ta) ta.placeholder = BRAND.contact.formPlaceholder;

    // Submit button
    const sb = sec.querySelector('.contact-form button[type="submit"]'); if (sb) sb.textContent = BRAND.contact.formButton;
  }

  // Build footer
  function buildFooter() {
    const ft = document.querySelector('footer');
    if (!ft) return;

    // About
    const abt = ft.querySelector('.footer-about'); if (abt) abt.textContent = BRAND.footer.about;

    // Brand name in footer
    ft.querySelectorAll('.footer-brand-name').forEach(el => el.textContent = BRAND.name);

    // Social
    const socMap = {
      'footer-twitter':   BRAND.social.twitter,
      'footer-linkedin':  BRAND.social.linkedin,
      'footer-instagram': BRAND.social.instagram,
      'footer-youtube':   BRAND.social.youtube,
      'footer-tiktok':    BRAND.social.tiktok,
    };
    Object.entries(socMap).forEach(([id, url]) => {
      const el = ft.querySelector(`#${id}`);
      if (!el) return;
      if (!url) { el.style.display = 'none'; } else { el.href = url; }
    });

    // Contact column
    const fc = ft.querySelector('.footer-contact-phone'); if (fc) fc.textContent = BRAND.phone;
    const fe = ft.querySelector('.footer-contact-email'); if (fe) { fe.textContent = BRAND.email; fe.href = `mailto:${BRAND.email}`; }
    const fw = ft.querySelector('.footer-contact-wa');    if (fw) { fw.textContent = BRAND.phone;  fw.href = `https://wa.me/${BRAND.whatsapp}`; }
    const fx = ft.querySelector('.footer-contact-city'); if (fx) fx.textContent = BRAND.city;

    // Dynamic columns
    const cols = ft.querySelector('.footer-dynamic-cols');
    if (cols && BRAND.footer.columns) {
      cols.innerHTML = BRAND.footer.columns.map(col =>
        `<div class="footer-section">
          <h3>${col.title}</h3>
          <ul>${col.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
        </div>`
      ).join('');
    }

    // Copyright
    const cp = ft.querySelector('.footer-copyright'); if (cp) cp.textContent = BRAND.footer.copyright;
  }

  // Build WhatsApp float
  function buildWhatsApp() {
    const wa = document.querySelector('.whatsapp-float');
    if (wa) wa.href = `https://wa.me/${BRAND.whatsapp}`;
  }

  // Meta tags
  function buildMeta() {
    document.title = `${BRAND.name} - ${BRAND.tagline}`;
    document.documentElement.lang = BRAND.lang;
    document.documentElement.dir  = BRAND.dir;
    const setMeta = (sel, val) => { const m = document.querySelector(sel); if (m) m.content = val; };
    setMeta('meta[name="description"]',    BRAND.description);
    setMeta('meta[name="keywords"]',       BRAND.keywords);
    setMeta('meta[name="author"]',         BRAND.author);
    setMeta('meta[property="og:title"]',   `${BRAND.name} - ${BRAND.tagline}`);
    setMeta('meta[property="og:description"]', BRAND.description);
    setMeta('meta[property="og:url"]',     BRAND.domain);

    // Favicon
    const fav = document.getElementById('favicon');
    if (fav) fav.href = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='75' font-family='Arial,sans-serif' font-size='95' font-weight='bold' text-anchor='middle' fill='${BRAND.faviconColor}'%3E${BRAND.faviconLetter}%3C/text%3E%3C/svg%3E`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyColors();
    buildMeta();
    buildNav();
    buildHero();
    buildStats();
    buildFeatures();
    buildServices();
    buildProducts();
    buildTeam();
    buildProcess();
    buildCaseStudies();
    buildClients();
    buildTestimonials();
    buildCTA();
    buildContact();
    buildFooter();
    buildWhatsApp();
    applySections();
  });
})();
