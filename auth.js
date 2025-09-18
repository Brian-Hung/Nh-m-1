document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "123") {
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
});
// Xử lý đăng nhập (đã có ở login.html)
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "123") {
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
});

// Xử lý đăng ký
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (pass !== confirm) {
    alert("Mật khẩu xác nhận không khớp!");
    return;
  }

  alert(`Đăng ký thành công!\nXin chào ${fullname}`);
  window.location.href = "login.html";
});
// Quản lý giỏ hàng (dùng localStorage)
let cart = JSON.parse(localStorage.getItem('cart') || '[]');