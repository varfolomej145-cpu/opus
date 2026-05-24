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

function formatPrice(n) {
  return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
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
  renderProducts(e.target.dataset.filter);
});

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
