function telephoneCheck(str) {
  let firstNum = /^[0-9]/;
  let firstParanthesis = /^[(]/;
  let firstArea = /^1\s|^1/;

  let regexNum = /^([0-9][0-9][0-9])(\s|-|)([0-9][0-9][0-9])(\s|-|)([0-9][0-9][0-9][0-9])$/;
  let regexParenthesis = /^([(][0-9][0-9][0-9][)])(\s|-|)([0-9][0-9][0-9])(\s|-|)([0-9][0-9][0-9][0-9])$/;

  if (firstArea.test(str)) {
    str = str.replace(firstArea, "");
    if (regexNum.test(str) || regexParenthesis.test(str)) {
      console.log(true);
      return true;
    }
    console.log(false);
    return false;
  }
  else if (firstNum.test(str)) {
    console.log(regexNum.test(str));
    return regexNum.test(str);
  }
  else if (firstParanthesis.test(str)) {
    console.log(regexParenthesis.test(str));
    return regexParenthesis.test(str);
  }
  else {
    console.log(false);
    return false;
  }
}

telephoneCheck("555-555-5555");