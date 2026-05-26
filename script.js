const BRANDS = [
  {
    id: 'mercedes', name: 'Mercedes-Benz', color: '#c0c4cb', glow: 'rgba(192, 196, 203, 0.6)',
    vin: ['WDB', 'WDC', 'WDD', 'WDF', '4JG', '55S'],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e8edf3"/><stop offset="1" stop-color="#7f8693"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#mg)" stroke-width="3.5"/>
      <g stroke="url(#mg)" stroke-width="4.5" stroke-linecap="round">
        <line x1="50" y1="50" x2="50" y2="12"/>
        <line x1="50" y1="50" x2="83" y2="69"/>
        <line x1="50" y1="50" x2="17" y2="69"/>
      </g>
    </svg>`,
  },
  {
    id: 'bmw', name: 'BMW', color: '#1c69d4', glow: 'rgba(28, 105, 212, 0.6)',
    vin: ['WBA', 'WBS', 'WBY', '4US', '5UX'],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bmwOuter" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.7" stop-color="#1a2230"/><stop offset="1" stop-color="#000"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#bmwOuter)" stroke="#9aa3b2" stroke-width="2"/>
      <circle cx="50" cy="50" r="30" fill="#0a0e16" stroke="#fff" stroke-width="1"/>
      <path d="M50 20 A30 30 0 0 1 80 50 L50 50 Z" fill="#fff"/>
      <path d="M80 50 A30 30 0 0 1 50 80 L50 50 Z" fill="#1c69d4"/>
      <path d="M50 80 A30 30 0 0 1 20 50 L50 50 Z" fill="#fff"/>
      <path d="M20 50 A30 30 0 0 1 50 20 L50 50 Z" fill="#1c69d4"/>
    </svg>`,
  },
  {
    id: 'audi', name: 'Audi', color: '#e8edf3', glow: 'rgba(232, 237, 243, 0.5)',
    vin: ['WAU', 'WA1', 'TRU'],
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#e8edf3" stroke-width="3.5">
        <circle cx="22" cy="30" r="18"/>
        <circle cx="55" cy="30" r="18"/>
        <circle cx="88" cy="30" r="18"/>
        <circle cx="121" cy="30" r="18"/>
      </g>
    </svg>`,
  },
  {
    id: 'vw', name: 'Volkswagen', color: '#1e90ff', glow: 'rgba(30, 144, 255, 0.6)',
    vin: ['WVW', 'WV1', 'WV2', '3VW'],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="vwg" cx="0.4" cy="0.3" r="0.7">
          <stop offset="0" stop-color="#3b9eff"/><stop offset="1" stop-color="#0a4d8c"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#vwg)" stroke="#fff" stroke-width="2.5"/>
      <g fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">
        <path d="M25 32 L42 70 L50 52 L58 70 L75 32"/>
        <path d="M33 32 L50 60 L67 32"/>
      </g>
    </svg>`,
  },
  {
    id: 'porsche', name: 'Porsche', color: '#ffd700', glow: 'rgba(255, 215, 0, 0.55)',
    vin: ['WP0', 'WP1'],
    svg: `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffeb7a"/><stop offset="1" stop-color="#a8801a"/>
        </linearGradient>
      </defs>
      <path d="M50 5 L88 22 L88 60 Q88 88 50 105 Q12 88 12 60 L12 22 Z"
            fill="url(#pg)" stroke="#1a1a1a" stroke-width="2"/>
      <rect x="36" y="30" width="28" height="55" fill="#1a1a1a"/>
      <text x="50" y="58" text-anchor="middle" font-family="Orbitron, sans-serif"
            font-weight="900" font-size="11" fill="#ffd700" letter-spacing="1">PORSCHE</text>
      <g transform="translate(38 65)">
        <rect x="0" y="0" width="24" height="14" fill="#c81515"/>
        <path d="M0 0 h24 v14 h-24z M4 0 v14 M8 0 v14 M12 0 v14 M16 0 v14 M20 0 v14"
              stroke="#fff" stroke-width="0.8"/>
      </g>
    </svg>`,
  },
  {
    id: 'opel', name: 'Opel', color: '#ffd400', glow: 'rgba(255, 212, 0, 0.55)',
    vin: ['W0L', 'W0V'],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="og" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.7" stop-color="#1a2230"/><stop offset="1" stop-color="#000"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#og)" stroke="#c0c4cb" stroke-width="2"/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="#e8edf3" stroke-width="1.5"/>
      <path d="M22 50 L78 50" stroke="#ffd400" stroke-width="5" stroke-linecap="round"
            filter="drop-shadow(0 0 4px #ffd400)"/>
      <path d="M40 38 L60 62 M40 62 L60 38" stroke="#ffd400" stroke-width="5"
            stroke-linecap="round" filter="drop-shadow(0 0 4px #ffd400)"/>
    </svg>`,
  },
  {
    id: 'jaguar', name: 'Jaguar', color: '#c0c4cb', glow: 'rgba(192, 196, 203, 0.55)',
    vin: ['SAJ', 'SAD'],
    svg: `<svg viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#f5f7fa"/><stop offset="1" stop-color="#5a6370"/>
        </linearGradient>
      </defs>
      <path d="M5 38 Q15 30 25 32 L30 22 L40 24 Q42 18 48 16 L52 22 Q60 18 75 22
               L88 30 Q100 26 110 30 L120 24 L122 32 L135 38 L130 42 L125 38
               Q115 42 105 38 L95 44 Q80 42 70 38 L55 44 Q40 44 28 42 L18 46 Z"
            fill="url(#jg)" stroke="#1a1a1a" stroke-width="1"/>
      <circle cx="46" cy="28" r="1.5" fill="#000"/>
    </svg>`,
  },
  {
    id: 'landrover', name: 'Land Rover', color: '#3a6a3e', glow: 'rgba(58, 106, 62, 0.6)',
    vin: ['SAL'],
    svg: `<svg viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lrg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#4d7d52"/><stop offset="1" stop-color="#1f3823"/>
        </linearGradient>
      </defs>
      <ellipse cx="70" cy="40" rx="65" ry="32" fill="url(#lrg)" stroke="#c0c4cb" stroke-width="2.5"/>
      <ellipse cx="70" cy="40" rx="58" ry="26" fill="none" stroke="#c0c4cb" stroke-width="1"/>
      <text x="70" y="38" text-anchor="middle" font-family="Orbitron, sans-serif"
            font-weight="900" font-size="13" fill="#fff" letter-spacing="1.5">LAND</text>
      <text x="70" y="54" text-anchor="middle" font-family="Orbitron, sans-serif"
            font-weight="900" font-size="13" fill="#fff" letter-spacing="1.5">ROVER</text>
    </svg>`,
  },
  {
    id: 'haval', name: 'Haval', color: '#e8edf3', glow: 'rgba(232, 237, 243, 0.55)',
    vin: ['LGW'],
    svg: `<svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff"/><stop offset="0.5" stop-color="#aab0bb"/><stop offset="1" stop-color="#6a7180"/>
        </linearGradient>
      </defs>
      <g fill="url(#hg)" stroke="#1a1a1a" stroke-width="0.8"
         font-family="Orbitron, Arial, sans-serif" font-weight="900" font-style="italic">
        <text x="100" y="38" text-anchor="middle" font-size="34" letter-spacing="3">HAVAL</text>
      </g>
    </svg>`,
  },
  {
    id: 'geely', name: 'Geely', color: '#1c69d4', glow: 'rgba(28, 105, 212, 0.6)',
    vin: ['L6T', 'LB3'],
    svg: `<svg viewBox="0 0 110 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffe07a"/><stop offset="1" stop-color="#a07d1a"/>
        </linearGradient>
      </defs>
      <path d="M10 8 L100 8 L100 60 Q55 78 10 60 Z" fill="url(#gg)" stroke="#1a1a1a" stroke-width="2"/>
      <g fill="#1c69d4" stroke="#0a1a40" stroke-width="0.5">
        <rect x="18" y="18" width="16" height="14"/>
        <rect x="46" y="18" width="16" height="14"/>
        <rect x="74" y="18" width="16" height="14"/>
        <rect x="18" y="38" width="16" height="14"/>
        <rect x="46" y="38" width="16" height="14"/>
        <rect x="74" y="38" width="16" height="14"/>
      </g>
    </svg>`,
  },
  {
    id: 'chery', name: 'Chery', color: '#c0c4cb', glow: 'rgba(192, 196, 203, 0.55)',
    vin: ['LVV'],
    svg: `<svg viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#f5f7fa"/><stop offset="1" stop-color="#6a7180"/>
        </linearGradient>
      </defs>
      <ellipse cx="70" cy="40" rx="62" ry="28" fill="none" stroke="url(#cg)" stroke-width="3.5"/>
      <g fill="url(#cg)" stroke="#1a1a1a" stroke-width="0.8">
        <path d="M40 48 L60 22 L70 38 L80 22 L100 48 L92 48 L78 30 L70 44 L62 30 L48 48 Z"/>
        <rect x="56" y="48" width="28" height="3"/>
      </g>
    </svg>`,
  },
  {
    id: 'omoda', name: 'Omoda', color: '#19e5ff', glow: 'rgba(25, 229, 255, 0.6)',
    vin: ['LVV'],
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="omg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e8edf3"/><stop offset="1" stop-color="#5a6370"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="40" fill="none" stroke="url(#omg)" stroke-width="6"/>
      <path d="M50 12 Q26 38 50 88 Q74 38 50 12 Z"
            fill="none" stroke="url(#omg)" stroke-width="4"/>
      <circle cx="50" cy="50" r="4" fill="url(#omg)"/>
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

function formatPrice(n) {
  return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
}

function renderBrands() {
  const grid = document.getElementById('brandsGrid');
  if (!grid) return;
  grid.innerHTML = BRANDS.map(b => `
    <button class="brand-card" data-brand="${b.id}"
            style="--brand-color: ${b.color}; --brand-glow: ${b.glow};"
            aria-label="${b.name}">
      <div class="brand-logo">${b.svg}</div>
      <span class="brand-name">${b.name}</span>
    </button>
  `).join('') + `<div style="grid-column: 1 / -1;">
    <button class="brand-clear" id="brandClear" hidden>× СБРОСИТЬ МАРКУ</button>
  </div>`;

  grid.querySelectorAll('.brand-card').forEach(card => {
    card.addEventListener('click', () => selectBrand(card.dataset.brand));
  });
  document.getElementById('brandClear').addEventListener('click', clearBrand);
}

function selectBrand(id) {
  activeBrand = id;
  document.querySelectorAll('.brand-card').forEach(c => {
    c.classList.toggle('active', c.dataset.brand === id);
  });
  document.getElementById('brandClear').hidden = false;
  const brand = BRANDS.find(b => b.id === id);
  showToast(`Марка: ${brand.name.toUpperCase()}`);
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

function clearBrand() {
  activeBrand = null;
  document.querySelectorAll('.brand-card').forEach(c => c.classList.remove('active'));
  document.getElementById('brandClear').hidden = true;
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

function renderProducts(filter = 'all') {
  const grid = document.getElementById('products');
  const items = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
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
  renderProducts(activeCategory);
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
