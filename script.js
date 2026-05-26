const BRANDS = [
  {
    id: 'mercedes', name: 'Mercedes-Benz',
    vin: ['WDB', 'WDC', 'WDD', 'WDF', '4JG', '55S'],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e8edf3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="40"/>
      <line x1="50" y1="50" x2="50" y2="14"/>
      <line x1="50" y1="50" x2="81" y2="68"/>
      <line x1="50" y1="50" x2="19" y2="68"/>
    </svg>`,
  },
  {
    id: 'bmw', name: 'BMW',
    vin: ['WBA', 'WBS', 'WBY', '4US', '5UX'],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="38" fill="none" stroke="#e8edf3" stroke-width="3"/>
      <circle cx="50" cy="50" r="26" fill="none" stroke="#e8edf3" stroke-width="2"/>
      <path d="M50 24 A26 26 0 0 1 76 50 L50 50 Z" fill="#e8edf3" opacity="0.95"/>
      <path d="M50 76 A26 26 0 0 1 24 50 L50 50 Z" fill="#e8edf3" opacity="0.95"/>
      <text x="50" y="20" text-anchor="middle" font-family="Orbitron, sans-serif" font-weight="700" font-size="9" fill="#e8edf3" letter-spacing="2">BMW</text>
    </svg>`,
  },
  {
    id: 'audi', name: 'Audi',
    vin: ['WAU', 'WA1', 'TRU'],
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e8edf3" stroke-width="3.5">
      <circle cx="22" cy="30" r="18"/>
      <circle cx="54" cy="30" r="18"/>
      <circle cx="86" cy="30" r="18"/>
      <circle cx="118" cy="30" r="18"/>
    </svg>`,
  },
  {
    id: 'vw', name: 'Volkswagen',
    vin: ['WVW', 'WV1', 'WV2', '3VW'],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="38" fill="none" stroke="#e8edf3" stroke-width="3"/>
      <g fill="none" stroke="#e8edf3" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
        <path d="M28 36 L41 70 L50 54 L59 70 L72 36"/>
        <path d="M36 36 L50 62 L64 36"/>
      </g>
    </svg>`,
  },
  {
    id: 'porsche', name: 'Porsche',
    vin: ['WP0', 'WP1'],
    svg: `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e8edf3" stroke-width="2.5" stroke-linejoin="round">
      <path d="M50 8 L85 22 L85 60 Q85 86 50 102 Q15 86 15 60 L15 22 Z"/>
      <text x="50" y="60" text-anchor="middle" font-family="Orbitron, sans-serif" font-weight="900" font-size="11" fill="#e8edf3" letter-spacing="1.5">PORSCHE</text>
      <path d="M30 70 L70 70" stroke="#e8edf3" stroke-width="2"/>
      <path d="M50 22 L50 88" stroke="#e8edf3" stroke-width="0.8" opacity="0.4"/>
    </svg>`,
  },
  {
    id: 'opel', name: 'Opel',
    vin: ['W0L', 'W0V'],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e8edf3" stroke-width="2.5">
      <circle cx="50" cy="50" r="38"/>
      <circle cx="50" cy="50" r="30" opacity="0.5"/>
      <path d="M16 50 L84 50" stroke-width="5" stroke-linecap="round"/>
      <path d="M50 28 Q60 50 50 72" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'jaguar', name: 'Jaguar',
    vin: ['SAJ', 'SAD'],
    svg: `<svg viewBox="0 0 140 70" xmlns="http://www.w3.org/2000/svg" fill="#e8edf3">
      <path d="M8 42 Q18 36 28 38 L34 28 Q40 24 48 24 Q52 18 58 20 Q66 18 76 22 L88 30 Q98 28 108 30 L118 24 L120 32 L132 38 L128 42 L120 40 Q110 44 100 40 L92 46 Q78 44 68 40 L54 46 Q40 46 28 44 L18 48 Z" opacity="0.95"/>
      <circle cx="46" cy="28" r="1.5" fill="#0a0e16"/>
    </svg>`,
  },
  {
    id: 'landrover', name: 'Land Rover',
    vin: ['SAL'],
    svg: `<svg viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="70" cy="40" rx="62" ry="30" fill="none" stroke="#e8edf3" stroke-width="2.5"/>
      <ellipse cx="70" cy="40" rx="54" ry="23" fill="none" stroke="#e8edf3" stroke-width="1" opacity="0.5"/>
      <text x="70" y="37" text-anchor="middle" font-family="Orbitron, sans-serif" font-weight="900" font-size="12" fill="#e8edf3" letter-spacing="1.5">LAND</text>
      <text x="70" y="54" text-anchor="middle" font-family="Orbitron, sans-serif" font-weight="900" font-size="12" fill="#e8edf3" letter-spacing="1.5">ROVER</text>
    </svg>`,
  },
  {
    id: 'haval', name: 'Haval',
    vin: ['LGW'],
    svg: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
      <text x="100" y="42" text-anchor="middle" font-family="Orbitron, Arial, sans-serif" font-weight="900" font-style="italic" font-size="36" fill="#e8edf3" letter-spacing="3">HAVAL</text>
    </svg>`,
  },
  {
    id: 'geely', name: 'Geely',
    vin: ['L6T', 'LB3'],
    svg: `<svg viewBox="0 0 110 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e8edf3" stroke-width="2.5" stroke-linejoin="round">
      <path d="M12 12 L98 12 L98 56 Q55 74 12 56 Z"/>
      <g stroke-width="2">
        <rect x="20" y="20" width="14" height="12"/>
        <rect x="48" y="20" width="14" height="12"/>
        <rect x="76" y="20" width="14" height="12"/>
        <rect x="20" y="38" width="14" height="12"/>
        <rect x="48" y="38" width="14" height="12"/>
        <rect x="76" y="38" width="14" height="12"/>
      </g>
    </svg>`,
  },
  {
    id: 'chery', name: 'Chery',
    vin: ['LVV'],
    svg: `<svg viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e8edf3" stroke-width="2.8" stroke-linejoin="round">
      <ellipse cx="70" cy="40" rx="60" ry="26"/>
      <path d="M40 50 L60 24 L70 38 L80 24 L100 50" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="56" y1="52" x2="84" y2="52" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'omoda', name: 'Omoda',
    vin: ['LVA'],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e8edf3" stroke-width="4" stroke-linecap="round">
      <circle cx="50" cy="50" r="36"/>
      <path d="M50 14 Q24 38 50 86 Q76 38 50 14 Z" stroke-width="3"/>
      <circle cx="50" cy="50" r="3.5" fill="#e8edf3"/>
    </svg>`,
  },
];

const ICONS = {
  engine: `<svg viewBox="0 0 64 64" fill="none" stroke="#19e5ff" stroke-width="2" stroke-linejoin="round"><path d="M14 28h6v-6h12v-4h12v4h6v6h6v14h-6v6H44v4H32v-4H20v-6h-6V28z"/><circle cx="38" cy="35" r="5"/><path d="M14 35h-4M54 35h4"/></svg>`,
  exhaust: `<svg viewBox="0 0 64 64" fill="none" stroke="#19e5ff" stroke-width="2" stroke-linejoin="round"><path d="M6 30h32l8-6h12v16H46l-8-6H6z"/><circle cx="50" cy="32" r="3"/><path d="M10 22l4 4M10 42l4-4"/></svg>`,
  brakes: `<svg viewBox="0 0 64 64" fill="none" stroke="#19e5ff" stroke-width="2"><circle cx="32" cy="32" r="22"/><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="4" fill="#19e5ff"/><path d="M32 10v8M32 46v8M10 32h8M46 32h8M16 16l6 6M42 42l6 6M48 16l-6 6M22 42l-6 6"/></svg>`,
  body: `<svg viewBox="0 0 64 64" fill="none" stroke="#19e5ff" stroke-width="2" stroke-linejoin="round"><path d="M6 42l4-12 8-4 10-2h12l10 4 8 8 2 8v4H6v-6z"/><circle cx="18" cy="46" r="5"/><circle cx="46" cy="46" r="5"/><path d="M20 30h22"/></svg>`,
  wheels: `<svg viewBox="0 0 64 64" fill="none" stroke="#19e5ff" stroke-width="2"><circle cx="32" cy="32" r="24"/><circle cx="32" cy="32" r="6" fill="#19e5ff"/><path d="M32 8v18M32 38v18M8 32h18M38 32h18M15 15l13 13M36 36l13 13M49 15L36 28M28 36L15 49"/></svg>`,
};

const PRODUCTS = [
  { id: 1, cat: 'engine', cat_ru: 'ДВИГАТЕЛЬ', name: 'Турбина Garrett GT3582R', desc: 'Универсальная турбина для тюнинга. До 700 л.с.', price: 89900, old: 109900, badge: 'HIT' },
  { id: 2, cat: 'engine', cat_ru: 'ДВИГАТЕЛЬ', name: 'Интеркулер Mishimoto 600HP', desc: 'Алюминиевый front-mount, держит давление до 3 бар.', price: 42500 },
  { id: 3, cat: 'exhaust', cat_ru: 'ВЫХЛОП', name: 'Выхлопная система HKS Hi-Power', desc: 'Полная катбэк-система из нержавейки 76 мм.', price: 67800, badge: 'NEW', badgeType: 'new' },
  { id: 4, cat: 'exhaust', cat_ru: 'ВЫХЛОП', name: 'Прямоточный глушитель Magnaflow', desc: 'Глубокий мускульный звук без потери мощности.', price: 18900 },
  { id: 5, cat: 'brakes', cat_ru: 'ТОРМОЗА', name: 'Тормозные диски Brembo GT', desc: '6-поршневые суппорты + перфорированные диски 380 мм.', price: 132000, old: 149000, badge: 'HIT' },
  { id: 6, cat: 'brakes', cat_ru: 'ТОРМОЗА', name: 'Колодки EBC RedStuff', desc: 'Низкопыльные керамические колодки для трека и города.', price: 8900 },
  { id: 7, cat: 'body', cat_ru: 'ОБВЕС', name: 'Карбоновый сплиттер APR Performance', desc: 'Аэродинамика и стиль. Реальный карбон 3K.', price: 54000, badge: 'NEW', badgeType: 'new' },
  { id: 8, cat: 'body', cat_ru: 'ОБВЕС', name: 'Антикрыло Voltex GT', desc: 'Регулируемый угол атаки. Прижим до 80 кг на 200 км/ч.', price: 78500 },
  { id: 9, cat: 'wheels', cat_ru: 'КОЛЁСА', name: 'Диски Volk Racing TE37', desc: 'Кованые легендарные TE37, R18 9.5J. Bronze finish.', price: 215000, badge: 'HIT' },
  { id: 10, cat: 'wheels', cat_ru: 'КОЛЁСА', name: 'Резина Michelin Pilot Sport 4S', desc: 'Спортивные шины. 245/40 R18. Комплект 4 шт.', price: 86400 },
  { id: 11, cat: 'engine', cat_ru: 'ДВИГАТЕЛЬ', name: 'Холодный впуск K&N Typhoon', desc: 'Прирост +12 л.с. на стоковом моторе.', price: 21500 },
  { id: 12, cat: 'wheels', cat_ru: 'КОЛЁСА', name: 'Диски Work Meister S1 3P', desc: 'Сборные 3-составные. R19. Кастомный offset.', price: 285000, old: 320000 },
];

const cart = new Map();
let activeBrand = null;
let activeCategory = 'all';
let searchQuery = '';

function formatPrice(n) {
  return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
}

function renderBrands() {
  const grid = document.getElementById('brandsGrid');
  if (!grid) return;
  grid.innerHTML = BRANDS.map(b => `
    <div class="brand-card-wrap" data-brand-wrap="${b.id}">
      <button class="brand-card" data-brand="${b.id}" aria-label="${b.name}">
        <div class="brand-logo">${b.svg}</div>
      </button>
      <span class="brand-name">${b.name}</span>
    </div>
  `).join('');

  grid.querySelectorAll('.brand-card').forEach(card => {
    card.addEventListener('click', () => selectBrand(card.dataset.brand));
  });
}

function selectBrand(id) {
  activeBrand = id;
  document.querySelectorAll('.brand-card').forEach(c => {
    c.classList.toggle('active', c.dataset.brand === id);
  });
  document.querySelectorAll('.brand-card-wrap').forEach(w => {
    w.classList.toggle('active-wrap', w.dataset.brandWrap === id);
  });
  const clearBtn = document.getElementById('brandClear');
  if (clearBtn) clearBtn.hidden = false;
  const brand = BRANDS.find(b => b.id === id);
  if (brand) showToast(`Марка: ${brand.name.toUpperCase()}`);
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

function clearBrand() {
  activeBrand = null;
  document.querySelectorAll('.brand-card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.brand-card-wrap').forEach(w => w.classList.remove('active-wrap'));
  const clearBtn = document.getElementById('brandClear');
  if (clearBtn) clearBtn.hidden = true;
  showToast('Сброшено. Показаны все марки');
}

function detectBrandFromVin(vin) {
  if (!vin || vin.length < 3) return null;
  const prefix = vin.toUpperCase().slice(0, 3);
  for (const b of BRANDS) {
    if (b.vin.some(p => prefix.startsWith(p))) return b;
  }
  return null;
}

function renderProducts() {
  const grid = document.getElementById('products');
  const q = searchQuery.trim().toLowerCase();
  let items = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === activeCategory);
  if (q) {
    items = items.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.cat_ru.toLowerCase().includes(q)
    );
  }
  if (items.length === 0) {
    grid.innerHTML = `<div class="no-results">Ничего не найдено по запросу «${searchQuery}». Попробуй другой артикул или название.</div>`;
    return;
  }
  grid.innerHTML = items.map(p => `
    <article class="product">
      ${p.badge ? `<span class="product-badge ${p.badgeType || ''}">${p.badge}</span>` : ''}
      <div class="product-img">${ICONS[p.cat]}</div>
      <div class="product-body">
        <span class="product-category">${p.cat_ru}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <div>
            ${p.old ? `<span class="product-old">${formatPrice(p.old)}</span>` : ''}
            <span class="product-price">${formatPrice(p.price)}</span>
          </div>
          <button class="product-add" data-id="${p.id}">+ В КОРЗИНУ</button>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.product-add').forEach(btn => {
    btn.addEventListener('click', () => addToCart(Number(btn.dataset.id)));
  });
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.get(id);
  if (existing) {
    existing.qty++;
  } else {
    cart.set(id, { ...product, qty: 1 });
  }
  updateCart();
  showToast(`${product.name} — добавлено`);
}

function changeQty(id, delta) {
  const item = cart.get(id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart.delete(id);
  updateCart();
}

function removeFromCart(id) {
  cart.delete(id);
  updateCart();
}

function updateCart() {
  const count = [...cart.values()].reduce((s, i) => s + i.qty, 0);
  const total = [...cart.values()].reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = formatPrice(total);

  const container = document.getElementById('cartItems');
  if (cart.size === 0) {
    container.innerHTML = '<div class="cart-empty">КОРЗИНА ПУСТА<br/><br/>Выбери что-нибудь из каталога ↓</div>';
    return;
  }
  container.innerHTML = [...cart.values()].map(i => `
    <div class="cart-item">
      <div class="cart-item-img">${ICONS[i.cat]}</div>
      <div class="cart-item-info">
        <span class="cart-item-name">${i.name}</span>
        <span class="cart-item-price">${formatPrice(i.price)} × ${i.qty} = ${formatPrice(i.price * i.qty)}</span>
        <div class="cart-item-controls">
          <button class="qty-btn" data-action="dec" data-id="${i.id}">−</button>
          <span class="qty-val">${i.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${i.id}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-action="rm" data-id="${i.id}" aria-label="Удалить">×</button>
    </div>
  `).join('');

  container.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const action = btn.dataset.action;
      if (action === 'inc') changeQty(id, 1);
      else if (action === 'dec') changeQty(id, -1);
      else if (action === 'rm') removeFromCart(id);
    });
  });
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartBackdrop').classList.add('open');
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('open');
}

let toastTimer;
function showToast(text) {
  const t = document.getElementById('toast');
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

document.getElementById('filters').addEventListener('click', e => {
  if (!e.target.classList.contains('filter')) return;
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeCategory = e.target.dataset.filter;
  renderProducts();
});

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
if (searchForm && searchInput) {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    searchQuery = searchInput.value.trim();
    renderProducts();
    if (searchQuery) {
      showToast(`Поиск: ${searchQuery}`);
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    }
  });
  searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() === '' && searchQuery) {
      searchQuery = '';
      renderProducts();
    }
  });
}

document.querySelectorAll('.sub-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.sub-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

const vinForm = document.getElementById('vinForm');
const vinInput = document.getElementById('vinInput');
const vinHint = document.getElementById('vinHint');
if (vinForm) {
  vinInput.addEventListener('input', () => {
    vinInput.value = vinInput.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    vinHint.classList.remove('error', 'success');
    vinHint.textContent = 'VIN можно найти в ПТС, СТС или на стойке двери водителя. Определим марку и подберём детали.';
  });
  vinForm.addEventListener('submit', e => {
    e.preventDefault();
    const vin = vinInput.value.trim();
    if (vin.length !== 17) {
      vinHint.classList.add('error');
      vinHint.textContent = `VIN должен быть ровно 17 символов (сейчас ${vin.length}). Проверь и попробуй снова.`;
      return;
    }
    const brand = detectBrandFromVin(vin);
    if (brand) {
      vinHint.classList.add('success');
      vinHint.textContent = `✓ Определена марка: ${brand.name}. Открываем каталог.`;
      selectBrand(brand.id);
    } else {
      vinHint.classList.add('error');
      vinHint.textContent = 'Не удалось определить марку из VIN. Выбери её вручную ниже ↓';
    }
  });
}

const brandClearBtn = document.getElementById('brandClear');
if (brandClearBtn) brandClearBtn.addEventListener('click', clearBrand);

renderBrands();

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartBackdrop').addEventListener('click', closeCart);
document.getElementById('cartCheckout').addEventListener('click', () => {
  if (cart.size === 0) {
    showToast('Сначала добавь запчасти');
    return;
  }
  showToast('Заказ оформлен! Свяжемся в течение часа');
  cart.clear();
  updateCart();
  closeCart();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCart();
});

renderProducts();
updateCart();
