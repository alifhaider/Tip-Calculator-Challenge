const billHTML = document.getElementById("bill");
const peopleHTML = document.getElementById("people");
const customHTML = document.getElementById("custom");
const button1 = document.querySelectorAll(".button1");
const button2 = document.querySelectorAll(".button2");
const button3 = document.querySelectorAll(".button3");
const button4 = document.querySelectorAll(".button4");
const button5 = document.querySelectorAll(".button5");
const warning = document.querySelector(".warning");

const tipHTML = document.querySelector(".tip");
const total = document.querySelector(".total");
let bill = 0;
let custom = 0;
let people = 0;

const reset = () => {
  peopleHTML.value = "";
  customHTML.value = "";
  billHTML.value = "";
  tipHTML.innerHTML = "0.00";
  total.innerHTML = "0.00";
};

const customInputHandler = (e) => {
  custom = parseInt(e.target.value);
  if (custom > 0) {
    changeTip(custom);
  }
};

const peopleInputHandler = (e) => {
  people = parseInt(e.target.value);
  if (people > 0) {
    warning.style.opacity = 0;
    peopleHTML.style.border = "none";
  }
};

const billInputHandler = (e) => {
  bill = parseInt(e.target.value);
};

function changeTip(tip) {
  if (tip) {
    let tipAmount = (bill * tip) / 100;
    let totalTip = tipAmount * people;
    tipHTML.innerHTML = tipAmount;
    total.innerHTML = bill + totalTip;
    if (people === 0) {
      warning.style.opacity = 1;
      peopleHTML.style.border = "1px solid red";
    }
  }
}

billHTML.addEventListener("input", billInputHandler);
customHTML.addEventListener("input", customInputHandler);
peopleHTML.addEventListener("input", peopleInputHandler);
