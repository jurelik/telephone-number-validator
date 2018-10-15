// Telephone Number Validator

function telephoneCheck(str) {
  let firstArea = /^1\s|^1/;
  let regexNum = /^([0-9][0-9][0-9])(\s|-|)([0-9][0-9][0-9])(\s|-|)([0-9][0-9][0-9][0-9])$/;
  let regexParenthesis = /^([(][0-9][0-9][0-9][)])(\s|-|)([0-9][0-9][0-9])(\s|-|)([0-9][0-9][0-9][0-9])$/;

  if (firstArea.test(str)) {
    str = str.replace(firstArea, "");
    if (regexNum.test(str) || regexParenthesis.test(str)) {
      return true;
    }
    return false;
  }
  else if (regexNum.test(str) || regexParenthesis.test(str)) {
    return true;
  }
  else {
    return false;
  }
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