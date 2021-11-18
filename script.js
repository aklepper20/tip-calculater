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

let bill = 0;
let percent;
let amountOfPeople = 0;
let totalTip;
let totalAmountPerPerson;
let tipPerPerson;
let totalPerPerson;

let input = document.getElementById('input');
let inputPeople = document.getElementById('inputPeople');
let tipButtons = document.querySelectorAll('.cal-btn');

input.addEventListener('change', function() {
  bill = input.value;
  calcTipSplit(bill, percent, amountOfPeople);
});

tipButtons.forEach((btn) => {
  btn.addEventListener('click', function() {
    percent = parseFloat(btn.innerText)/100;
    calcTipSplit(bill, percent, amountOfPeople);
  })
});

inputPeople.addEventListener('change', function() {
  amountOfPeople = inputPeople.value;
  calcTipSplit(bill, percent, amountOfPeople);
});

function calcTipSplit(bill, percent, amountOfPeople) {
  totalTip = bill * percent;
  tipPerPerson = totalTip / amountOfPeople;
  totalAmountPerPerson = bill / amountOfPeople;
  totalPerPerson = tipPerPerson + totalAmountPerPerson;

  return totalPerPerson;
  return totalAmountPerPerson;
};

//Grab the ID of tip amount
//Put a lister on it. On change switch the innerText on that element
