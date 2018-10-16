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

form.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value == "") {
    result.innerHTML = `Please enter a telephone number`;
  }
  else if(telephoneCheck(input.value)) {
    result.innerHTML = `${input.value} is a valid US telephone number`;
  }
  else {
    result.innerHTML = `${input.value} is not a valid US telephone number`;
  }

  input.focus();
});