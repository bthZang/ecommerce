// Thông tin liên hệ dùng chung cho toàn bộ website — sửa ở đây là cập nhật mọi trang.
const SITE = {
  name: 'Boost Green Niva',
  tagline: 'Vì một nền nông nghiệp bền vững',
  hotline: '0353 352 479',
  email: 'boostgreenniva@gmail.com',
  address: 'Tăng Nhơn Phú, Khu Phố 12, Phường Phước Long, TP. Hồ Chí Minh',
};

const NAV = [
  { href: '/', label: 'Trang chủ', page: 'home' },
  { href: '/san-pham', label: 'Sản phẩm', page: 'san-pham' },
  { href: '/tu-van-ky-thuat', label: 'Tư vấn kỹ thuật', page: 'tu-van-ky-thuat' },
  { href: '/kien-thuc-nha-nong', label: 'Kiến thức nhà nông', page: 'kien-thuc-nha-nong' },
  { href: '/gioi-thieu', label: 'Giới thiệu', page: 'gioi-thieu' },
  { href: '/lien-he', label: 'Liên hệ', page: 'lien-he' },
];

const phoneDigits = SITE.hotline.replace(/\s/g, '');
const LINKS = {
  tel: `tel:${phoneDigits}`,
  zalo: `https://zalo.me/${phoneDigits}`,
  email: `mailto:${SITE.email}`,
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`,
};

const ICONS = {
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>',
  pin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>',
  chat:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.4 1.3 4.6 3.4 6.1L4.5 21l4.2-2.3c1 .2 2.1.3 3.3.3 5.5 0 10-3.6 10-8s-4.5-8-10-8z"/></svg>',
  leaf:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8C8 10 5.9 16.2 3.8 21.3l1.9.7.9-2.3c.5.2 1 .3 1.4.3C19 20 22 3 22 3c-1 2-8 2.3-13 3.3S2 11.5 2 13.5s1.8 3.8 1.8 3.8C7 8 17 8 17 8z"/></svg>',
};

const logo = `
  <a class="logo" href="/" aria-label="${SITE.name} - Trang chủ">
    <span class="logo-mark">BG</span>
    <span class="logo-text">BOOST GREEN <b>NIVA</b></span>
  </a>`;

function renderHeader(currentPage) {
  const navItems = NAV.map(
    (item) =>
      `<li><a href="${item.href}"${item.page === currentPage ? ' class="active" aria-current="page"' : ''}>${item.label}</a></li>`
  ).join('');

  return `
    <div class="topbar">
      <div class="container topbar-inner">
        <span>${SITE.name.toUpperCase()} – ${SITE.tagline}</span>
        <a href="${LINKS.tel}">${ICONS.phone} Hotline: ${SITE.hotline}</a>
      </div>
    </div>
    <header class="site-header">
      <div class="container header-inner">
        ${logo}
        <button class="nav-toggle" aria-label="Mở menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" aria-label="Menu chính">
          <ul>${navItems}</ul>
        </nav>
        <a class="btn btn-gold header-cta" href="${LINKS.tel}">${ICONS.phone} ${SITE.hotline}</a>
      </div>
    </header>`;
}

function renderFooter() {
  const navItems = NAV.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join('');
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          ${logo}
          <p class="footer-about">
            Cung cấp các sản phẩm phân bón và giải pháp dinh dưỡng cây trồng, hướng đến nền nông nghiệp xanh, bền vững.
          </p>
          <p class="footer-slogan">“Chất lượng tạo niềm tin – Hiệu quả tạo giá trị”</p>
        </div>
        <div>
          <h4>Liên kết</h4>
          <ul class="footer-links">${navItems}</ul>
        </div>
        <div>
          <h4>Liên hệ tư vấn</h4>
          <ul class="footer-contact">
            <li>${ICONS.phone}<a href="${LINKS.tel}">Hotline: ${SITE.hotline}</a></li>
            <li>${ICONS.chat}<a href="${LINKS.zalo}" target="_blank" rel="noopener">Zalo: ${SITE.hotline}</a></li>
            <li>${ICONS.mail}<a href="${LINKS.email}">${SITE.email}</a></li>
            <li>${ICONS.pin}<a href="${LINKS.map}" target="_blank" rel="noopener">${SITE.address}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">© ${year} ${SITE.name}. Gieo giá trị xanh, vun bồi mùa vụ.</div>
      </div>
    </footer>
    <div class="float-contact">
      <a class="float-zalo" href="${LINKS.zalo}" target="_blank" rel="noopener" aria-label="Chat Zalo">Zalo</a>
      <a class="float-phone" href="${LINKS.tel}" aria-label="Gọi hotline">${ICONS.phone}</a>
    </div>`;
}

function fillSiteData() {
  document.querySelectorAll('[data-site]').forEach((el) => {
    el.textContent = SITE[el.dataset.site];
  });
  document.querySelectorAll('[data-link]').forEach((el) => {
    el.href = LINKS[el.dataset.link];
  });
  document.querySelectorAll('[data-map-embed]').forEach((el) => {
    el.src = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`;
  });
}

function setupNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  });
}

const page = document.body.dataset.page;
document.getElementById('site-header').outerHTML = renderHeader(page);
document.getElementById('site-footer').outerHTML = renderFooter();
fillSiteData();
setupNavToggle();
