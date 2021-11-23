let theme = document.getElementById('theme');
let darkMode = false;

let backgroundColorOfBody = document.body;

function darkModeProperties() {
  backgroundColorOfBody.style.backgroundColor = 'rgb(20,29,47)'
  theme.src = './images/icon-sun (1).svg';
  darkMode = true;
}

function lightModeProperties() {
  theme.src = './images/icon-moon (1).svg'
  backgroundColorOfBody.style.backgroundColor = 'hsl(185, 41%, 84%'
  darkMode = false;
}

theme.addEventListener('click', function() {
  if (darkMode == false) {
    darkModeProperties();
  } else {
      lightModeProperties();
    }
});

let billInput = document.getElementById('input');
let peopleInput = document.getElementById('inputPeople');
let buttons = document.querySelectorAll('.cal-btn');
let resetBtn = document.getElementById('reset-btn');
let tipPersonAmount = document.getElementById('tipPerPerson');
let totalPersonAmount = document.getElementById('totalPerPerson');

const calcTipSplit = (bill, numberOfPeople, tipPercentage) => {
  let tipAmountPerPerson = (bill * tipPercentage) / numberOfPeople;
  let totalAmountPerPerson = (bill / numberOfPeople) + tipAmountPerPerson;

  tipPersonAmount.innerText = '$' + tipAmountPerPerson.toFixed(2);
  totalPersonAmount.innerText = '$' + totalAmountPerPerson.toFixed(2);
};

const getInputs = () => {
  let bill = billInput.value;
  let numberOfPeople = peopleInput.value;
  buttons.forEach((btn) => {
  btn.addEventListener('click', function() {
      let tipPercentage = parseFloat(btn.innerText) / 100;
      calcTipSplit(bill, numberOfPeople, tipPercentage);
    })
  });
};

const resetButton = () => {
  tipPersonAmount.innerText = '$0.00';
  totalPersonAmount.innerText = '$0.00';

  billInput.value = '';
  peopleInput.value = '';
  buttons.value = '';
};

billInput.addEventListener('change', getInputs);
peopleInput.addEventListener('change', getInputs);
resetBtn.addEventListener('click', resetButton);
