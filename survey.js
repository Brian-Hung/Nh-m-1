function toggleCatCount() {
  const hasCat = document.getElementById("hasCat").value;
  const catCountWrapper = document.getElementById("catCountWrapper");
  if (hasCat === "yes") {
    catCountWrapper.style.display = "block";
  } else {
    catCountWrapper.style.display = "none";
  }
}

document.getElementById("surveyForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Cảm ơn bạn đã hoàn thành khảo sát! ❤️");
  window.location.href = "index.html"; // chuyển tới trang chính
});
