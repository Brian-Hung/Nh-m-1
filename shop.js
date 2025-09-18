// shop.js - tự gắn xử lý cho nút sản phẩm (nếu bạn dùng data-attr)
document.addEventListener('DOMContentLoaded', ()=>{
  // nút có data-add
  document.querySelectorAll('[data-add-to-cart]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const name = btn.dataset.name;
      const price = Number(btn.dataset.price || 0);
      const img = btn.dataset.img || '';
      addToCart(name, price, 1, img);
      alert(`${name} đã thêm vào giỏ`);
    });
  });
  // nút mua ngay
  document.querySelectorAll('[data-buy-now]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const name = btn.dataset.name;
      const price = Number(btn.dataset.price || 0);
      const img = btn.dataset.img || '';
      buyNow(name, price, 1, img);
    });
  });
});
function addToCart(productName) {
  alert(productName + " đã được thêm vào giỏ hàng!");
  // Ở đây có thể lưu vào localStorage hoặc giỏ hàng backend
}
    cart.push({ name, price, qty, image });