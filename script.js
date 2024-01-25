"use-strict";
const increaseBtn = document.querySelector(".inc");
const resetBtn = document.querySelector(".reset");
const decreaseBtn = document.querySelector(".dec");
const counter = document.querySelector(".counter");

const handleIncrease = () => {
  let currentNumber = Number(counter.innerHTML);
  currentNumber = currentNumber + 1;
  counter.textContent = currentNumber;
  if (currentNumber >= 1) {
    counter.style.color = "green";
  } else if (currentNumber === 0) {
    counter.style.color = "hsl(209, 61%, 16%)";
  }
};
const handleReset = () => {
  counter.textContent = 0;
  counter.style.color = "hsl(209, 61%, 16%)";
};
const handleDecrease = () => {
  let currentNumber = Number(counter.innerHTML);
  currentNumber = currentNumber - 1;
  counter.textContent = currentNumber;
  if (currentNumber < 0) {
    counter.style.color = "red";
  } else if (currentNumber === 0) {
    counter.style.color = "hsl(209, 61%, 16%)";
  }
};

increaseBtn.addEventListener("click", handleIncrease);
resetBtn.addEventListener("click", handleReset);
decreaseBtn.addEventListener("click", handleDecrease);
