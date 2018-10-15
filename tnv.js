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

telephoneCheck("(555)555-5555");