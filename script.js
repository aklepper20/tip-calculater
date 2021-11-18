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

////////////////////////////////////////////////////////////////
//How can I record what input I press in the bill.
let input = document.getElementById('input');
console.log(input)

input.addEventListener('change', function() {
  console.log(input.value)
})

let inputPeople = document.getElementById('inputPeople');
inputPeople.addEventListener('change', function() {
  console.log(inputPeople.value)
})

// loop through the buttons and on each button grab its innerText value
//Since its a string, we parseFloat function to change it into an integer
let tipButtons = document.querySelectorAll('.cal-btn')

tipButtons.forEach((btn) => {
  btn.addEventListener('click', function() {
    console.log(parseFloat(btn.innerText)/100)
  })
})

function calcTipSplit(bill, percent, amountOfPeople) {
  //create the logic
  //return tip amount per person
  //return total amount per person
}

//calcTipSplit(100, .15,2)
