/* ============================================================
   KANCHI HERBS – app.js
   All page navigation, product rendering, cart, auth
   ============================================================ */

// ─── PRODUCTS DATA ───────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: "Natural Weight Loss Powder",
    category: "powders",
    price: 599,
    weight: "500g",
    badge: "Best Seller",
    image: "https://i.postimg.cc/90wxp8NC/IMG-20260214-WA0037.jpg",
    shortDesc: "Powerful herbal blend for natural weight management",
    description: "Our signature Natural Weight Loss Powder is crafted from 100% pure, hand-selected herbs that work to boost metabolism, suppress appetite naturally, and support healthy fat burning. Mix with warm water daily for best results.",
    ingredients: ["Triphala", "Garcinia Cambogia", "Green Coffee Extract", "Fenugreek Seeds", "Ginger Root", "Black Pepper"],
    benefits: ["Boosts metabolism naturally", "Reduces bloating and water retention", "Curbs appetite and cravings", "Supports healthy digestion", "No synthetic additives"]
  },
  {
    id: 2,
    name: "Herbal Hair Growth Oil",
    category: "oils",
    price: 449,
    weight: "200ml",
    badge: "Popular",
    image: "https://i.postimg.cc/J4PyxrZN/IMG-20260214-WA0039.jpg",
    shortDesc: "Ancient herb-infused oil for thick, lustrous hair",
    description: "A potent blend of 21 Ayurvedic herbs cold-pressed in pure sesame oil. Massaged regularly into the scalp, this oil nourishes follicles, reduces hair fall, and promotes thick, healthy hair growth.",
    ingredients: ["Bhringraj", "Amla", "Brahmi", "Neem", "Sesame Oil", "Coconut Oil", "Hibiscus Extract"],
    benefits: ["Reduces hair fall", "Promotes new hair growth", "Conditions scalp and prevents dandruff", "Darkens and strengthens hair", "Suitable for all hair types"]
  },
  {
    id: 3,
    name: "Kumkumadi Face Oil",
    category: "oils",
    price: 749,
    weight: "30ml",
    badge: "Premium",
    image: "https://i.postimg.cc/DZRVnb96/IMG-20260214-WA0038.jpg",
    shortDesc: "Golden saffron face oil for radiant, glowing skin",
    description: "The royal Kumkumadi Tailam — an ancient Ayurvedic formula for luminous, flawless skin. Made with saffron, sandalwood, and rare herbs in a sesame base, this oil brightens, evens skin tone, and reverses aging.",
    ingredients: ["Saffron (Kumkuma)", "Sandalwood oil", "Lotus petals", "Vetiver", "Licorice extract", "Sesame oil"],
    benefits: ["Brightens and evens skin tone", "Reduces dark spots and pigmentation", "Deep anti-aging nourishment", "Restores youthful glow"]
  },
  {
    id: 4,
    name: "Immunity Booster Powder",
    category: "powders",
    price: 399,
    weight: "250g",
    badge: "New",
    image: "https://i.postimg.cc/t4qc05sK/IMG-20260214-WA0041.jpg",
    shortDesc: "Daily immunity support with ashwagandha and tulsi",
    description: "A carefully balanced blend of the most potent immune-supporting herbs in Ayurveda. Mix with warm milk or water daily to build a strong, resilient immune system year-round.",
    ingredients: ["Ashwagandha", "Tulsi", "Giloy (Guduchi)", "Amla", "Turmeric", "Black Pepper", "Mulethi"],
    benefits: ["Strengthens immune response", "Rich in natural antioxidants", "Reduces stress and fatigue", "Supports respiratory health", "Safe for daily use"]
  },
  {
    id: 5,
    name: "Neem Face Wash Powder",
    category: "soaps",
    price: 299,
    weight: "100g",
    badge: null,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?w=600&q=80",
    shortDesc: "Gentle neem-based cleanser for clear, healthy skin",
    description: "A chemical-free, soap-nut based face wash powder that cleanses deeply, removes excess oil, and fights acne-causing bacteria. Suitable for sensitive, oily, and combination skin types.",
    ingredients: ["Neem leaf powder", "Reetha (Soap nut)", "Multani Mitti", "Rose petal powder", "Turmeric", "Sandalwood powder"],
    benefits: ["Fights acne and pimples", "Controls excess oil", "Gentle for daily use", "No SLS or parabens", "Brightens complexion"]
  },
  {
    id: 6,
    name: "Digestive Churna",
    category: "powders",
    price: 349,
    weight: "200g",
    badge: null,
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&q=80",
    shortDesc: "Herbal blend for digestion, bloating, and acidity",
    description: "A classical Ayurvedic formulation to ease indigestion, acidity, gas, and bloating. This aromatic blend stimulates digestive fire (Agni) for complete, comfortable digestion.",
    ingredients: ["Ajwain", "Saunf (Fennel)", "Haritaki", "Bibhitaki", "Amalaki", "Trikatu", "Rock salt"],
    benefits: ["Relieves gas and bloating", "Soothes acidity and heartburn", "Improves appetite and digestion", "Reduces constipation", "100% natural"]
  },
  {
    id: 7,
    name: "Herbal Body Scrub",
    category: "soaps",
    price: 449,
    weight: "300g",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80",
    shortDesc: "Exfoliating herbal scrub for smooth, glowing skin",
    description: "A luxurious full-body scrub made from walnut shell powder, turmeric, and aromatic herbs. Removes dead skin, unclogs pores, and reveals soft, radiant skin beneath.",
    ingredients: ["Walnut shell powder", "Turmeric", "Ubtan herbs", "Rose water", "Coconut oil", "Almond powder"],
    benefits: ["Deep exfoliation", "Evens skin tone and texture", "Removes tan and dullness", "Moisturizes while cleansing"]
  },
  {
    id: 8,
    name: "Joint Relief Oil",
    category: "oils",
    price: 549,
    weight: "100ml",
    badge: null,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    shortDesc: "Warming herbal oil for joint pain and stiffness",
    description: "A deeply penetrating warming oil made from Mahanarayan base with added camphor and eucalyptus. Provides quick relief from joint pain, muscle stiffness, and arthritis-related discomfort.",
    ingredients: ["Mahanarayana Tailam base", "Camphor", "Eucalyptus oil", "Wintergreen", "Sesame oil", "Nirgundi extract"],
    benefits: ["Fast relief from joint pain", "Reduces inflammation and swelling", "Improves joint flexibility", "No harmful chemicals"]
  },
  {
    id: 9,
    name: "Shatavari Churna",
    category: "powders",
    price: 499,
    weight: "200g",
    badge: "For Women",
    image: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=600&q=80",
    shortDesc: "Women's wellness powder for hormonal balance",
    description: "Pure Shatavari root powder — Ayurveda's premier herb for women's health. Supports hormonal balance, fertility, lactation, and overall vitality through every stage of a woman's life.",
    ingredients: ["Organic Shatavari root (Asparagus racemosus)", "No additives or fillers"],
    benefits: ["Supports hormonal balance", "Boosts fertility and reproductive health", "Increases breast milk production", "Reduces menopausal symptoms"]
  },
  {
    id: 10,
    name: "Herbal Turmeric Soap",
    category: "soaps",
    price: 199,
    weight: "100g",
    badge: "New",
    image: "https://images.unsplash.com/photo-1600857544200-b2f468e9e2b6?w=600&q=80",
    shortDesc: "Handcrafted turmeric soap for glowing skin",
    description: "Cold-process handcrafted soap made with pure turmeric, neem, and coconut oil. A daily-use soap that cleanses deeply, fights bacteria, and leaves skin visibly brighter.",
    ingredients: ["Turmeric powder", "Neem extract", "Coconut oil", "Castor oil", "Shea butter", "Lemongrass essential oil"],
    benefits: ["Brightens skin naturally", "Antibacterial and antifungal", "Deep moisture and nourishment", "Reduces acne and blemishes", "100% natural"]
  },
  {
    id: 11,
    name: "Triphala Capsules",
    category: "capsules",
    price: 349,
    weight: "60 caps",
    badge: null,
    image: "https://images.unsplash.com/photo-1611073615830-9b609e5f93bc?w=600&q=80",
    shortDesc: "Classic 3-fruit formula for digestion and detox",
    description: "The most revered formula in Ayurveda — Triphala in convenient vegetarian capsules. Gentle daily detox, improved digestion, better immunity, and enhanced eye health.",
    ingredients: ["Amalaki", "Bibhitaki", "Haritaki", "Vegetarian capsule shell"],
    benefits: ["Gentle daily detox", "Improves digestion", "Rich in Vitamin C naturally", "Supports eye health", "Balances all three doshas"]
  },
  {
    id: 12,
    name: "Brahmi Memory Capsules",
    category: "capsules",
    price: 449,
    weight: "60 caps",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1588391668735-9c68b1b2aef7?w=600&q=80",
    shortDesc: "Brain tonic for sharp memory and mental clarity",
    description: "Pure Brahmi (Bacopa monnieri) extract in easy-to-swallow vegetarian capsules. Enhances memory, reduces anxiety, and sharpens focus.",
    ingredients: ["Standardized Brahmi extract (20% bacosides)", "Ashwagandha extract", "Vegetarian capsule"],
    benefits: ["Enhances memory and learning", "Reduces anxiety and fatigue", "Improves focus and concentration", "Supports healthy sleep", "Safe for daily use"]
  }
];

// ─── STATE ────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('kh_cart') || '[]');
let user = JSON.parse(localStorage.getItem('kh_user') || 'null');
let currentFilter = 'all';

// ─── PAGE NAVIGATION ─────────────────────────────────────────
function showPage(name) {
  // hide all pages
  document.querySelectorAll('.app-page').forEach(p => p.classList.remove('active'));
  // show target
  const el = document.getElementById('page-' + name);
  if (el) el.classList.add('active');

  // populate on demand
  if (name === 'home')     renderFeatured();
  if (name === 'products') renderProducts();
  if (name === 'cart')     renderCart();

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
}

// Landing → App transition
function goToApp() {
  const landing = document.getElementById('landing-page');
  const app     = document.getElementById('main-app');
  landing.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  landing.style.opacity = '0';
  landing.style.transform = 'scale(1.04)';
  setTimeout(() => {
    landing.classList.remove('active');
    app.classList.add('active');
    renderFeatured();
  }, 700);
}

// ─── PRODUCT RENDERING ───────────────────────────────────────
function makeCard(p) {
  return `
    <div class="product-card" onclick="openDetail(${p.id})">
      <div class="pc-img-wrap">
        <img class="pc-img" src="${p.image}" alt="${p.name}"
             onerror="this.src='https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80'"/>
        ${p.badge ? `<div class="pc-badge">${p.badge}</div>` : ''}
      </div>
      <div class="pc-info">
        <div class="pc-cat">${p.category}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-bottom">
          <div class="pc-price">₹${p.price} <span>/ ${p.weight}</span></div>
          <button class="btn-view" onclick="event.stopPropagation(); openDetail(${p.id})">View</button>
        </div>
      </div>
    </div>
  `;
}

function renderFeatured() {
  const g = document.getElementById('featured-grid');
  if (!g) return;
  g.innerHTML = PRODUCTS.slice(0, 4).map(makeCard).join('');
}

function renderProducts() {
  const g = document.getElementById('products-grid');
  if (!g) return;
  const list = currentFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === currentFilter);
  g.innerHTML = list.length
    ? list.map(makeCard).join('')
    : '<div class="no-results">No products found.</div>';
}

function filterProducts(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts();
}

// ─── PRODUCT DETAIL ──────────────────────────────────────────
function openDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const wrap = document.getElementById('detail-wrap');
  wrap.innerHTML = `
    <button class="btn-back" onclick="history.back(); showPage('products')">← Back to Products</button>
    <div class="detail-grid">
      <div>
        <img class="detail-img" src="${p.image}" alt="${p.name}"
             onerror="this.src='https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80'"/>
      </div>
      <div>
        <div class="detail-cat">${p.category.toUpperCase()} · ${p.weight}</div>
        <h1 class="detail-name">${p.name}</h1>
        <div class="detail-price">₹${p.price}</div>
        ${p.badge ? `<span class="pc-badge" style="position:static;display:inline-block;margin-bottom:16px">${p.badge}</span>` : ''}
        <p class="detail-desc">${p.description}</p>

        <div class="detail-list-title">Ingredients</div>
        <ul class="detail-list">
          ${p.ingredients.map(i => `<li>${i}</li>`).join('')}
        </ul>

        <div class="detail-list-title">Benefits</div>
        <ul class="detail-list">
          ${p.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>

        <div class="detail-actions" style="margin-top:24px">
          <button class="btn-add" onclick="addToCart(${p.id})">Add to Cart</button>
          <button class="btn-back" onclick="showPage('products')">← Products</button>
        </div>

        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
          <span style="font-size:12px;color:#8D7B72;background:#FDF3DC;padding:4px 12px;border-radius:20px;border:1px solid #EDE4D4">🌿 100% Natural</span>
          <span style="font-size:12px;color:#8D7B72;background:#FDF3DC;padding:4px 12px;border-radius:20px;border:1px solid #EDE4D4">🔬 Lab Tested</span>
          <span style="font-size:12px;color:#8D7B72;background:#FDF3DC;padding:4px 12px;border-radius:20px;border:1px solid #EDE4D4">🚚 Free Ship ₹500+</span>
        </div>
      </div>
    </div>
  `;

  showPage('detail');
}

// ─── CART ────────────────────────────────────────────────────
function addToCart(id) {
  if (!user) {
    showToast('Please login to add items to cart');
    toggleAuth();
    return;
  }
  const p = PRODUCTS.find(x => x.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, weight: p.weight, image: p.image, qty: 1 });
  }
  saveCart();
  updateBadge();
  showToast(p.name + ' added to cart!');
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart(); updateBadge(); renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(); renderCart();
}

function saveCart() {
  localStorage.setItem('kh_cart', JSON.stringify(cart));
}

function updateBadge() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  badge.textContent = total;
  badge.classList.toggle('show', total > 0);
}

function renderCart() {
  const list = document.getElementById('cart-list');
  const totalBox = document.getElementById('cart-total-box');
  if (!list) return;

  if (!cart.length) {
    list.innerHTML = `
      <div class="cart-empty">
        <div style="font-size:64px">🛒</div>
        <p>Your cart is empty</p>
        <button class="btn-gold" onclick="showPage('products')">Browse Products</button>
      </div>`;
    if (totalBox) totalBox.innerHTML = '';
    return;
  }

  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}"
           onerror="this.style.display='none'"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} <span style="font-size:12px;color:#9E8E85">/ ${item.weight}</span></div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span style="font-weight:700;min-width:24px;text-align:center">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <div style="text-align:right">
        <div style="font-weight:700;font-size:17px;color:#6B1A2A;margin-bottom:8px">₹${item.price * item.qty}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    </div>
  `).join('');

  const sub  = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const ship = sub >= 500 ? 0 : 60;
  const total = sub + ship;

  if (totalBox) {
    totalBox.innerHTML = `
      <div class="cart-total-box">
        <div class="total-row"><span>Subtotal</span><span>₹${sub}</span></div>
        <div class="total-row"><span>Shipping</span><span>${ship === 0 ? 'FREE' : '₹' + ship}</span></div>
        ${sub < 500 ? `<div class="total-row" style="color:#2A7B7C;font-size:12px"><span>Add ₹${500 - sub} more for free shipping!</span></div>` : ''}
        <div class="total-final"><span>Total</span><span>₹${total}</span></div>
        <button class="btn-checkout" onclick="checkout()">Proceed to Checkout</button>
      </div>
    `;
  }
}

function checkout() {
  if (!user) { toggleAuth(); return; }
  showToast('Order placed! Thank you 🌿');
  cart = [];
  saveCart(); updateBadge(); renderCart();
}

// ─── AUTH ────────────────────────────────────────────────────
function toggleAuth() {
  const m = document.getElementById('auth-modal');
  m.classList.toggle('open');
  if (m.classList.contains('open')) refreshAuthView();
}

function closeAuthOutside(e) {
  if (e.target === document.getElementById('auth-modal')) toggleAuth();
}

function switchTab(name, btn) {
  document.querySelectorAll('.m-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
  clearMsg();
}

function refreshAuthView() {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.m-tab').forEach(t => t.style.display = '');
  clearMsg();

  if (user) {
    document.getElementById('tab-user').classList.add('active');
    document.getElementById('user-hello').textContent = 'Hello, ' + user.name + '!';
    document.getElementById('user-mail').textContent = user.email;
    document.getElementById('user-av').textContent = user.name[0].toUpperCase();
    document.querySelectorAll('.m-tab').forEach(t => t.style.display = 'none');
  } else {
    document.getElementById('tab-login').classList.add('active');
    document.querySelectorAll('.m-tab')[0].classList.add('active');
  }
}

function doLogin() {
  const email = document.getElementById('l-email').value.trim();
  const pass  = document.getElementById('l-pass').value;
  if (!email || !pass) { setMsg('Please fill in all fields.', 'err'); return; }
  if (pass.length < 6) { setMsg('Password must be 6+ characters.', 'err'); return; }

  user = { email, name: email.split('@')[0] };
  localStorage.setItem('kh_user', JSON.stringify(user));
  setMsg('Logged in! ✓', 'ok');
  setTimeout(() => { toggleAuth(); showToast('Welcome back! 🌿'); }, 900);
}

function doSignup() {
  const name  = document.getElementById('s-name').value.trim();
  const email = document.getElementById('s-email').value.trim();
  const pass  = document.getElementById('s-pass').value;
  if (!name || !email || !pass) { setMsg('Please fill in all fields.', 'err'); return; }
  if (pass.length < 6) { setMsg('Password must be 6+ characters.', 'err'); return; }

  user = { name, email };
  localStorage.setItem('kh_user', JSON.stringify(user));
  setMsg('Account created! ✓', 'ok');
  setTimeout(() => { toggleAuth(); showToast('Welcome, ' + name + '! 🌿'); }, 900);
}

function doLogout() {
  user = null;
  localStorage.removeItem('kh_user');
  cart = []; saveCart(); updateBadge();
  toggleAuth();
  showToast('Logged out successfully.');
}

function setMsg(txt, cls) {
  const el = document.getElementById('auth-msg');
  el.textContent = txt;
  el.className = 'auth-msg ' + cls;
}
function clearMsg() {
  const el = document.getElementById('auth-msg');
  if (el) { el.textContent = ''; el.className = 'auth-msg'; }
}

// ─── MOBILE MENU ─────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}
function closeMenu() {
  const m = document.getElementById('nav-links');
  if (m) m.classList.remove('open');
}

// ─── TOAST ───────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateBadge();
});
