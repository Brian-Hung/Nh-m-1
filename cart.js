// Mẫu giỏ hàng (fake data để demo)
let cart = [
  { name: "Thức ăn cho mèo", qty: 2, price: 50000 },
  { name: "Đồ chơi cho mèo", qty: 1, price: 80000 }
];

function renderCart() {
  const tbody = document.querySelector("#cart-table tbody");
  tbody.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let row = document.createElement("tr");

    let subtotal = item.qty * item.price;
    total += subtotal;

    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>${item.price.toLocaleString()} VND</td>
      <td>${subtotal.toLocaleString()} VND</td>
      <td><button onclick="removeItem(${index})">Xóa</button></td>
    `;

    tbody.appendChild(row);
  });

  document.getElementById("total").innerText = total.toLocaleString();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function checkout() {
  alert("Cảm ơn bạn đã mua hàng tại CatCorner!");
  cart = [];
  renderCart();
}

renderCart();
// Lưu giỏ hàng vào localStorage
function saveCart(){
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}