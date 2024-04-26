function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  const newBackgroundColor = document.body.style.backgroundColor;
  document.querySelector('.color').textContent = newBackgroundColor;
});


