function readMore(button) {
  const extra = button.nextElementSibling;
  if (extra.style.display === "block") {
    extra.style.display = "none";
    button.innerText = "Đọc thêm";
  } else {
    extra.style.display = "block";
    button.innerText = "Thu gọn";
  }
}
