const buttons = document.querySelectorAll(".actions button");
const reply = document.querySelector("#reply");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    reply.textContent = button.dataset.answer;
  });
});