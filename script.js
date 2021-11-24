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
let customButton = document.getElementById('custom-btn');

let resetBtn = document.getElementById('reset-btn');

let tipPersonAmount = document.getElementById('tipPerPerson');
let totalPersonAmount = document.getElementById('totalPerPerson');

let bill;
let numberOfPeople;
let percent;

const calcTipSplit = (bill, numberOfPeople, percent) => {
  bill = parseInt(bill);
  numberOfPeople = parseInt(numberOfPeople);
  percent /= 100;
  console.log(bill,numberOfPeople, percent)

  if (bill && numberOfPeople && percent) {
    let tipAmountPerPerson = (bill * percent) / numberOfPeople;
    let totalAmountPerPerson = (bill / numberOfPeople) + tipAmountPerPerson;

    tipPersonAmount.innerText = '$' + tipAmountPerPerson.toFixed(2);
    totalPersonAmount.innerText = '$' + totalAmountPerPerson.toFixed(2);
    }
  };

const resetButton = () => {
  tipPersonAmount.innerText = '$0.00';
  totalPersonAmount.innerText = '$0.00';

  bill = '';
  numberOfPeople = '';
  percent = '';

  billInput.value = '';
  peopleInput.value = '';
  buttons.innerText = '';
  customButton.value = '';
};

resetBtn.addEventListener('click', resetButton);

customButton.addEventListener('change', function() {
  percent = parseInt(customButton.value);
  calcTipSplit(bill, numberOfPeople, percent)
  }
)

billInput.addEventListener('change', function() {
  bill = billInput.value;
  calcTipSplit(bill, numberOfPeople, percent);
});

peopleInput.addEventListener('change', function() {
  numberOfPeople = peopleInput.value;
  calcTipSplit(bill, numberOfPeople, percent);
});

buttons.forEach((btn) => {
  btn.addEventListener('click', function() {
    percent = parseFloat(btn.innerText);
    calcTipSplit(bill, numberOfPeople, percent)
  })
});
