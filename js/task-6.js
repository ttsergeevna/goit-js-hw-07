function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const parrentBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    alert`Кількість елементів має бути числом в межах від 1 до 100`;
    return;
  }


  const fragment = document.createDocumentFragment();


  let size = 30;
  for (let i = 0; i < amount; i++) {
    const divWrap = document.createElement("div");
    divWrap.style.backgroundColor = getRandomHexColor();
    divWrap.style.width = `${size}px`;
    divWrap.style.height = `${size}px`;
    divWrap.classList.add("new-boxes")
    parrentBoxes.appendChild(divWrap);
    size += 10;


  }

  parentBoxes.appendChild(fragment);
}
// get button
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');



// processing button
createButton.addEventListener('click', () => {
  createBoxes(Number(input.value));
  input.value = '';
});

destroyButton.addEventListener('click', () => {
  const parentElement = document.getElementById('boxes');
  parentElement.innerHTML = '';
});











