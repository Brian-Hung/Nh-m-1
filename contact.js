document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Cảm ơn ${name}! Chúng tôi sẽ phản hồi bạn qua email: ${email}.`);
  document.getElementById("contactForm").reset();
});
// Xử lý gửi form liên hệ (đã có ở contact.html)