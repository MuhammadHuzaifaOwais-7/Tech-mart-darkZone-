/* ---------- DATA & HELPERS ---------- */

/* realistic tech products (50 items: name, price, image) */
const PRODUCTS = [
  {id:1,name:"Logitech G502 HERO Gaming Mouse",price:2500,img:"https://m.media-amazon.com/images/I/71cr8YFQxwL._AC_SL1500_.jpg"},
  {id:2,name:"Razer BlackWidow Mechanical Keyboard",price:8000,img:"https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg"},
  {id:3,name:"Sony WH-1000XM5 Wireless Headphones",price:55000,img:"https://m.media-amazon.com/images/I/71Zz3oZL0CL._AC_SL1500_.jpg"},
  {id:4,name:"Apple AirPods Pro (2nd Gen)",price:42000,img:"https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"},
  {id:5,name:"Samsung Galaxy S21 FE (128GB)",price:145000,img:"https://images.samsung.com/is/image/samsung/p6pim/levant/sm-g990ezgdmea/gallery/levant-galaxy-s21-fe-5g-g990-410546-sm-g990ezgdmea-534574232"},
  {id:6,name:"OnePlus 11",price:165000,img:"https://image01.oneplus.net/ebp/202301/17/1-m00-14-d8-rb8bwl7bdxcltvxaaavp6b9w8tw100.png"},
  {id:7,name:"Dell G15 Gaming Laptop (RTX3050)",price:185000,img:"https://i.dell.com/sites/csimages/Master_Imagery/all/g15_5511_nt_cnb_00055lf110_gy_fi.png"},
  {id:8,name:"ASUS ROG Strix Gaming Laptop",price:248000,img:"https://dlcdnwebimgs.asus.com/gain/09A7D9A0-6D75-4C4B-9EA2-3A9EF9D7C0A6/w717"},
  {id:9,name:"Samsung 27\" Curved Gaming Monitor (240Hz)",price:54000,img:"https://image-us.samsung.com/us/smart-monitors/s60a/s60a-gallery-01.png"},
  {id:10,name:"LG Ultrawide 34\" Monitor",price:122000,img:"https://www.lg.com/us/images/monitors/md07513714/gallery/desktop-01.jpg"},
  {id:11,name:"Kingston 1TB NVMe SSD",price:12000,img:"https://m.media-amazon.com/images/I/71jK3p1x4RL._AC_SL1500_.jpg"},
  {id:12,name:"Crucial 2TB SATA SSD",price:23000,img:"https://m.media-amazon.com/images/I/61R0yQxf+TL._AC_SL1500_.jpg"},
  {id:13,name:"Corsair RM750x Power Supply 750W",price:21000,img:"https://m.media-amazon.com/images/I/51Zs2r2kqCL._AC_SL1000_.jpg"},
  {id:14,name:"NZXT H510 Elite Case",price:18000,img:"https://nzxt.com/assets/cms/34297/1648060023-h510elite-gallery-1.jpg"},
  {id:15,name:"AMD Ryzen 7 5800X",price:82000,img:"https://m.media-amazon.com/images/I/61YH2Y2xv2L._AC_SL1500_.jpg"},
  {id:16,name:"Intel Core i7-12700K",price:89000,img:"https://m.media-amazon.com/images/I/61lQYf7ULwL._AC_SL1500_.jpg"},
  {id:17,name:"NVIDIA RTX 4060 Ti GPU",price:158000,img:"https://images.nvidia.com/aem-dam/Solutions/geforce/graphics-cards/40-series/geforce-rtx-4060-ti/gallery/RM-B_4060Ti-01_pdp-3840x2160.png"},
  {id:18,name:"WD 4TB External HDD",price:10000,img:"https://m.media-amazon.com/images/I/71x7Q4cQAKL._AC_SL1500_.jpg"},
  {id:19,name:"SanDisk 128GB Extreme USB 3.1",price:3200,img:"https://m.media-amazon.com/images/I/71M5qZqQXTL._AC_SL1500_.jpg"},
  {id:20,name:"Logitech C920 HD Webcam",price:9500,img:"https://m.media-amazon.com/images/I/71c88X3Z6-L._AC_SL1500_.jpg"},
  {id:21,name:"Elgato Stream Deck Mini",price:22000,img:"https://m.media-amazon.com/images/I/71jn5p3M0BL._AC_SL1500_.jpg"},
  {id:22,name:"Razer Viper 8KHz Mouse",price:19000,img:"https://m.media-amazon.com/images/I/61aZb0w4o6L._AC_SL1500_.jpg"},
  {id:23,name:"HyperX Cloud II Headset",price:12000,img:"https://m.media-amazon.com/images/I/61G5m5GxyKL._AC_SL1500_.jpg"},
  {id:24,name:"Blue Yeti USB Microphone",price:22000,img:"https://m.media-amazon.com/images/I/61dMsp0jQnL._AC_SL1500_.jpg"},
  {id:25,name:"Anker 65W USB-C Charger",price:5600,img:"https://m.media-amazon.com/images/I/61qQ8c2Y2aL._AC_SL1500_.jpg"},
  {id:26,name:"Belkin Wireless Charger Stand",price:4200,img:"https://m.media-amazon.com/images/I/71J5qz0w0KL._AC_SL1500_.jpg"},
  {id:27,name:"Samsung Galaxy Tab S8",price:160000,img:"https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-tab-s8/gallery/in-galaxy-tab-s8-5g-sf9-531566-sm-x700nzkdinu-530976585?$720_576_PNG$"},
  {id:28,name:"Apple iPad Air",price:185000,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-og-202203?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645036270300"},
  {id:29,name:"DJI Mini 2 Drone",price:145000,img:"https://m.media-amazon.com/images/I/61u0y7mXffL._AC_SL1500_.jpg"},
  {id:30,name:"GoPro HERO11 Black",price:98000,img:"https://m.media-amazon.com/images/I/61X9D+7rYXL._AC_SL1500_.jpg"},
  {id:31,name:"Philips Hue Starter Kit",price:22000,img:"https://m.media-amazon.com/images/I/710qNQXuFNL._AC_SL1500_.jpg"},
  {id:32,name:"TP-Link AC1750 WiFi Router",price:9500,img:"https://m.media-amazon.com/images/I/61XfmJ3I3PL._AC_SL1500_.jpg"},
  {id:33,name:"Seagate 2TB Game Drive",price:12600,img:"https://m.media-amazon.com/images/I/71Q7xw0TZ9L._AC_SL1500_.jpg"},
  {id:34,name:"Microsoft Surface Laptop",price:225000,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/Surface_Laptop_4_13_1?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1616444898000"},
  {id:35,name:"Google Pixel 7",price:155000,img:"https://store.google.com/product/images/phone_pixel_7?"},
  {id:36,name:"Anker Soundcore Liberty Air 2 Pro",price:7800,img:"https://m.media-amazon.com/images/I/61k6jQZ3b5L._AC_SL1500_.jpg"},
  {id:37,name:"TP-Link Deco Mesh WiFi",price:32000,img:"https://m.media-amazon.com/images/I/71KZ0hWQZLL._AC_SL1500_.jpg"},
  {id:38,name:"Netgear Nighthawk Router",price:42000,img:"https://m.media-amazon.com/images/I/71t8tV9rYtL._AC_SL1500_.jpg"},
  {id:39,name:"BenQ 24\" IPS Monitor",price:26000,img:"https://m.media-amazon.com/images/I/61cVf6w9gRL._AC_SL1500_.jpg"},
  {id:40,name:"Acer Predator Gaming Monitor",price:135000,img:"https://m.media-amazon.com/images/I/81xYbJ7x+PL._AC_SL1500_.jpg"},
  {id:41,name:"Samsung T7 Portable SSD 1TB",price:21000,img:"https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg"},
  {id:42,name:"Wyze Cam v3",price:6500,img:"https://m.media-amazon.com/images/I/61bn3bW1SSL._AC_SL1500_.jpg"},
  {id:43,name:"Logitech MX Master 3",price:20000,img:"https://m.media-amazon.com/images/I/61xYbQm2FHL._AC_SL1500_.jpg"},
  {id:44,name:"HyperX Alloy FPS Pro Keyboard",price:9500,img:"https://m.media-amazon.com/images/I/61rj0h0N2XL._AC_SL1500_.jpg"},
  {id:45,name:"Roku Streaming Stick+",price:9800,img:"https://m.media-amazon.com/images/I/61u0y7mXffL._AC_SL1500_.jpg"},
  {id:46,name:"TP-Link USB WiFi Adapter",price:2400,img:"https://m.media-amazon.com/images/I/61f8dA7cZSL._AC_SL1500_.jpg"},
  {id:47,name:"Sabrent 4-Bay USB Hub",price:7800,img:"https://m.media-amazon.com/images/I/71t0nN8gQHL._AC_SL1500_.jpg"},
  {id:48,name:"Fossil Gen 6 Smartwatch",price:58000,img:"https://m.media-amazon.com/images/I/61oNwG6c8OL._AC_SL1500_.jpg"},
  {id:49,name:"Xiaomi Mi Band 6",price:8000,img:"https://m.media-amazon.com/images/I/61MItLu0mvL._AC_SL1500_.jpg"},
  {id:50,name:"Microsoft Xbox Wireless Controller",price:10500,img:"https://m.media-amazon.com/images/I/61t6GZ7tWDL._AC_SL1500_.jpg"}
];

/* helper to format currency */
function money(n){ return "Rs. " + n.toLocaleString("en-PK"); }

/* ---------- STORAGE KEYS per user ---------- */
function getSessionUser(){
  const s = sessionStorage.getItem("loggedInUser");
  return s ? JSON.parse(s) : null;
}
function getLocalUser(){
  const s = sessionStorage.getItem("loggedInUser");
  if(!s) return null;
  const u = JSON.parse(s);
  const users = JSON.parse(localStorage.getItem("users")||"[]");
  return users.find(x=>x.email===u.email) || null;
}
function cartKeyFor(userEmail){ return `cart_${userEmail}` }
function wishKeyFor(userEmail){ return `wish_${userEmail}` }

/* ---------- AUTH (signup/login) ---------- */
function signupSubmit(name,email,password){
  if(!name||!email||!password){ alert("Please fill all fields"); return; }
  const users = JSON.parse(localStorage.getItem("users")||"[]");
  if(users.some(u=>u.email===email)){ alert("User already exists"); return; }
  const newUser = { name, email, password, balance:10000 }; // default balance
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  // set active session right away
  sessionStorage.setItem("loggedInUser", JSON.stringify({ email }));
  // also store current session balance for quick access
  localStorage.setItem("balance_"+email, newUser.balance);
  showToast("Signup successful — Logged in!");
  setTimeout(()=> location.href="index.html",900);
}

function loginSubmit(email,password){
  const users = JSON.parse(localStorage.getItem("users")||"[]");
  const found = users.find(u=>u.email===email && u.password===password);
  if(!found){ alert("Incorrect credentials"); return; }
  sessionStorage.setItem("loggedInUser", JSON.stringify({ email }));
  showToast("Login successful — Welcome back!");
  setTimeout(()=> location.href="index.html",900);
}

/* ---------- CART & WISHLIST ---------- */
function getCart(){
  const user = getSessionUser();
  if(!user) return [];
  return JSON.parse(localStorage.getItem(cartKeyFor(user.email))||"[]");
}
function saveCart(cart){ const user=getSessionUser(); if(!user) return; localStorage.setItem(cartKeyFor(user.email), JSON.stringify(cart)); }

function getWish(){
  const user=getSessionUser(); if(!user) return [];
  return JSON.parse(localStorage.getItem(wishKeyFor(user.email))||"[]");
}
function saveWish(wish){ const user=getSessionUser(); if(!user) return; localStorage.setItem(wishKeyFor(user.email), JSON.stringify(wish)); }

function addToCartById(id){
  const user = getSessionUser();
  if(!user){ alert("Please log in first"); location.href="login.html"; return; }
  const prod = PRODUCTS.find(p=>p.id===id);
  if(!prod) return;
  // get user balance
  const users = JSON.parse(localStorage.getItem("users")||"[]");
  const u = users.find(x=>x.email===user.email);
  const cart = JSON.parse(localStorage.getItem(cartKeyFor(user.email))||"[]");
  const totalAfter = cart.reduce((s,it)=>s + it.price * it.qty,0) + prod.price;
  if(u && (u.balance < totalAfter)){
    alert("Budget exceeded — not enough balance. Please remove items or top up.");
    return;
  }
  const existing = cart.find(x=>x.id===id);
  if(existing) existing.qty = (existing.qty||1)+1; else cart.push({id:prod.id,name:prod.name,price:prod.price,qty:1,img:prod.img});
  localStorage.setItem(cartKeyFor(user.email), JSON.stringify(cart));
  showToast(`${prod.name} added to cart`);
  updateNavCartCount();
}

function addToWishById(id){
  const user = getSessionUser();
  if(!user){ alert("Please log in first"); location.href="login.html"; return; }
  const prod = PRODUCTS.find(p=>p.id===id);
  const wish = JSON.parse(localStorage.getItem(wishKeyFor(user.email))||"[]");
  if(wish.some(x=>x.id===id)){ showToast("Already in wishlist"); return; }
  wish.push({id:prod.id,name:prod.name,price:prod.price,img:prod.img});
  localStorage.setItem(wishKeyFor(user.email), JSON.stringify(wish));
  showToast(`${prod.name} added to wishlist`);
  updateNavCartCount();
}

/* ---------- RENDERING helpers for pages ---------- */
function renderProductsGrid(containerId,limit){
  const cont = document.getElementById(containerId);
  if(!cont) return;
  cont.innerHTML = "";
  const list = PRODUCTS.slice(0, limit||PRODUCTS.length);
  list.forEach(p=>{
    const div = document.createElement("div");
    div.className = "card reveal";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="price">${money(p.price)}</div>
      <div class="btn-row">
        <button class="btn" onclick="addToCartById(${p.id})">Add to Cart</button>
        <button class="btn-outline" onclick="addToWishById(${p.id})">Wishlist</button>
      </div>
    `;
    cont.appendChild(div);
  });
  runReveal(); // animate reveals
}

function renderCartPage(){
  const wrap = document.getElementById("cart-body");
  if(!wrap) return;
  const user = getSessionUser();
  if(!user){ wrap.innerHTML = "<p>Please <a href='login.html'>login</a> to see your cart.</p>"; return; }
  const cart = JSON.parse(localStorage.getItem(cartKeyFor(user.email))||"[]");
  if(cart.length===0){ wrap.innerHTML="<p>Your cart is empty.</p>"; updateNavCartCount(); return; }
  let html = `<div class="cart-wrap"><table class="cart-table"><thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr></thead><tbody>`;
  let total = 0;
  cart.forEach((it,idx)=>{
    const subtotal = it.price * it.qty;
    total += subtotal;
    html += `<tr>
      <td style="width:45%"><div style="display:flex;gap:10px;align-items:center"><img src="${it.img}" style="width:66px;height:46px;object-fit:cover;border-radius:6px"><div><strong>${it.name}</strong></div></div></td>
      <td>${money(it.price)}</td>
      <td><button class="qty-btn" onclick="changeQty(${idx}, -1)">-</button> ${it.qty} <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button></td>
      <td>${money(subtotal)}</td>
      <td><button class="remove-btn" onclick="removeCartItem(${idx})">Remove</button></td>
    </tr>`;
  });
  html += `</tbody></table>
    <div class="total-row"><div><strong>Total</strong></div><div><strong>${money(total)}</strong></div></div>
    <div style="margin-top:12px;display:flex;gap:10px;justify-content:flex-end">
      <button class="btn-outline" onclick="clearCart()">Clear Cart</button>
      <button class="btn" onclick="goToDelivery()">Proceed to Delivery</button>
    </div>
  </div>`;
  wrap.innerHTML = html;
  updateNavCartCount();
}

/* quantity & remove */
function changeQty(idx,delta){
  const user = getSessionUser();
  if(!user){ alert("Please login"); location.href="login.html"; return; }
  const cart = JSON.parse(localStorage.getItem(cartKeyFor(user.email))||"[]");
  if(!cart[idx]) return;
  cart[idx].qty += delta;
  if(cart[idx].qty <=0) cart.splice(idx,1);
  localStorage.setItem(cartKeyFor(user.email), JSON.stringify(cart));
  renderCartPage();
}
function removeCartItem(idx){
  const user=getSessionUser(); if(!user) return;
  const cart = JSON.parse(localStorage.getItem(cartKeyFor(user.email))||"[]");
  cart.splice(idx,1);
  localStorage.setItem(cartKeyFor(user.email), JSON.stringify(cart));
  renderCartPage();
}
function clearCart(){ const user=getSessionUser(); if(!user) return; localStorage.setItem(cartKeyFor(user.email),"[]"); renderCartPage(); updateNavCartCount(); }

/* wishlist rendering */
function renderWishPage(){
  const wrap = document.getElementById("wish-body");
  if(!wrap) return;
  const user=getSessionUser();
  if(!user){ wrap.innerHTML = "<p>Please <a href='login.html'>login</a> to see wishlist.</p>"; return; }
  const wish = JSON.parse(localStorage.getItem(wishKeyFor(user.email))||"[]");
  if(wish.length===0){ wrap.innerHTML="<p>Your wishlist is empty.</p>"; return; }
  let html = `<div class="product-grid">`;
  wish.forEach((it, idx)=>{
    html += `<div class="card reveal">
      <img src="${it.img}" alt="${it.name}">
      <h3>${it.name}</h3>
      <div class="price">${money(it.price)}</div>
      <div class="btn-row">
        <button class="btn" onclick="moveWishToCart(${idx})">Move to Cart</button>
        <button class="btn-outline" onclick="removeWishItem(${idx})">Remove</button>
      </div>
    </div>`;
  });
  html += `</div>`;
  wrap.innerHTML = html;
  runReveal();
}
function moveWishToCart(idx){
  const user=getSessionUser(); if(!user){ alert("Please login"); location.href="login.html"; return; }
  const wish = JSON.parse(localStorage.getItem(wishKeyFor(user.email))||"[]");
  const cart = JSON.parse(localStorage.getItem(cartKeyFor(user.email))||"[]");
  const item = wish[idx];
  if(!item) return;
  // add to cart logic (quantity)
  const exist = cart.find(x=>x.id===item.id);
  if(exist) exist.qty = (exist.qty||1)+1; else cart.push({id:item.id,name:item.name,price:item.price,qty:1,img:item.img});
  localStorage.setItem(cartKeyFor(user.email), JSON.stringify(cart));
  wish.splice(idx,1);
  localStorage.setItem(wishKeyFor(user.email), JSON.stringify(wish));
  showToast(`${item.name} moved to cart`);
  renderWishPage(); updateNavCartCount();
}
function removeWishItem(idx){
  const user=getSessionUser(); if(!user) return;
  const wish = JSON.parse(localStorage.getItem(wishKeyFor(user.email))||"[]");
  wish.splice(idx,1);
  localStorage.setItem(wishKeyFor(user.email), JSON.stringify(wish));
  renderWishPage();
}

/* ---------- NAV helpers & utilities ---------- */
function money(n){ return "Rs. " + n.toLocaleString("en-PK"); }

function updateNavCartCount(){
  const el = document.getElementById("cart-count");
  const user = getSessionUser();
  if(!el) return;
  if(!user){ el.textContent = 0; return; }
  const cart = JSON.parse(localStorage.getItem(cartKeyFor(user.email))||"[]");
  const sum = cart.reduce((s,it)=>s + (it.qty||0),0);
  el.textContent = sum;
  // update balance display if present
  const balEl = document.getElementById("balance");
  if(balEl){
    const users = JSON.parse(localStorage.getItem("users")||"[]");
    const u = users.find(x=>x.email===user.email);
    const bal = u ? u.balance : 0;
    balEl.textContent = `Balance: ${money(bal)}`;
  }
}

/* toast */
function showToast(text){
  const t = document.createElement("div");
  t.className = "glow-toast";
  t.innerText = text;
  document.body.appendChild(t);
  setTimeout(()=> t.remove(),2200);
}

/* go to delivery */
function goToDelivery(){
  const user = getSessionUser();
  if(!user){ alert("Please login to continue"); location.href="login.html"; return; }
  location.href="delivery.html";
}

/* ---------- DELIVERY (place order) ---------- */
function submitDeliveryForm(){
  const user = getSessionUser();
  if(!user){ alert("Please login first"); location.href="login.html"; return; }
  const name = document.getElementById("d_name").value.trim();
  const addr = document.getElementById("d_addr").value.trim();
  const phone = document.getElementById("d_phone").value.trim();
  if(!name||!addr||!phone){ alert("Please complete all delivery info"); return; }
  // compute total
  const cart = JSON.parse(localStorage.getItem(cartKeyFor(user.email))||"[]");
  if(!cart || cart.length===0){ alert("Cart empty"); return; }
  const total = cart.reduce((s,it)=>s + it.price * (it.qty||1),0);
  // check balance
  const users = JSON.parse(localStorage.getItem("users")||"[]");
  const idx = users.findIndex(u=>u.email===user.email);
  if(idx===-1){ alert("User not found"); return; }
  if(users[idx].balance < total){ alert("Insufficient balance to place order"); return; }
  // deduct balance
  users[idx].balance -= total;
  localStorage.setItem("users", JSON.stringify(users));
  // clear cart
  localStorage.setItem(cartKeyFor(user.email), JSON.stringify([]));
  updateNavCartCount();
  // show animated success (overlay + confetti)
  showOrderSuccess();
}

/* order success overlay + confetti */
function showOrderSuccess(){
  // overlay card
  const overlay = document.createElement("div");
  overlay.className = "order-overlay";
  overlay.innerHTML = `<div class="order-card reveal"><h2>✅ Order Placed Successfully!</h2><p>Thanks for shopping at TechMart. Your order is on the way.</p></div>`;
  document.body.appendChild(overlay);
  runReveal();
  // confetti (if available)
  if(window.confetti){
    confetti({particleCount:160,spread:110,origin:{y:0.6}});
  } else {
    // fallback simple animation: animate overlay opacity
    setTimeout(()=>{},1400);
  }
  setTimeout(()=>{ overlay.remove(); showToast("Order complete — balance updated"); setTimeout(()=> location.href="index.html",800) }, 2400);
}

/* ---------- small utils and reveal animations ---------- */
function runReveal(){
  const els = document.querySelectorAll(".reveal");
  els.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", runReveal);
window.addEventListener("load", ()=>{
  // update nav count & balance
  updateNavCartCount();
  // if index has featured grid, render few items automatically
  const f = document.getElementById("featured-grid");
  if(f) renderProductsGrid("featured-grid",6);
});

/* ---------- rendering helper exposed for HTML pages ---------- */
window.renderProductsGrid = renderProductsGrid;
window.renderCartPage = renderCartPage;
window.renderWishPage = renderWishPage;
window.signupSubmit = signupSubmit;
window.loginSubmit = loginSubmit;
window.addToCartById = addToCartById;
window.addToWishById = addToWishById;
window.submitDeliveryForm = submitDeliveryForm;
