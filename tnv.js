// Telephone Number Validator

function telephoneCheck(str) {
  let regexUlti = /^(1\s?)?(\(\d{3})\)|(\d{3})(\s|-)?(\d{3})(\s|-)?(\d{4})$/;
  return regexUlti.test(str);
}

// DOM Interaction

let form = document.getElementById('check-num');
let input = document.getElementById('input-text');
let result = document.getElementById('result');
let btn = document.getElementById('submit-btn');
let phone = document.getElementById('phone-icon');

// On button click do the following

form.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value == "") {
    result.innerHTML = `Please enter a telephone number`;
  }
  else if(telephoneCheck(input.value)) {
    result.innerHTML = `You entered a valid US telephone number`;
    phone.classList.add('anim-enable'); // Animate a phone wiggle
  }
  else {
    result.innerHTML = `You entered a non-valid US telephone number`;
    phone.classList.add('anim-enable'); // Animate a phone wiggle
  }

  btn.blur();
});

// Reset phone wiggle

phone.addEventListener('animationend', e => {
  phone.classList.remove('anim-enable');
});