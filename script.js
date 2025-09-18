// script.js
let number = 0;

const numberDisplay = document.getElementById('number-display');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');

plusBtn.addEventListener('click', () => {
  number++;
  numberDisplay.textContent = number;
});

minusBtn.addEventListener('click', () => {
  if (number > 0) {
    number--;
    numberDisplay.textContent = number;
  }
});

resetBtn.addEventListener('click', () => {
  number = 0;
  numberDisplay.textContent = number;
});
