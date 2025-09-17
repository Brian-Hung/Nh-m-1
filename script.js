// Quản lý giỏ hàng với localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cập nhật localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Thêm sản phẩm
function addToCart(name, price) {
  const item = cart.find(p => p.name === name);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  saveCart();
  alert("Đã thêm " + name + " vào giỏ!");
}

// Hiển thị giỏ hàng
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.price}đ x ${item.qty}
      <button onclick="removeFromCart(${index})">❌</button>`;
    container.appendChild(li);
  });
  totalEl.innerText = total + "đ";
}

// Xóa sản phẩm
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

// Khi load trang giỏ hàng
if (window.location.pathname.endsWith("cart.html")) {
  renderCart();
}
