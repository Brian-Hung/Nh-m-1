const questions = document.querySelectorAll(".faq-question");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        ans.style.display = "none";
      });
      answer.style.display = "block";
    }
  });
});
