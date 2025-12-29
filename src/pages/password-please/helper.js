function PassVerify() {
  const minimumSize = 8;
  const needsNumber = true;
  const needsSpecialChar = true;
  const needsCapitalChar = true;

  function checkValidity(password) {
    if (password.length === 0) {
      return "Enter Pass";
    } else if (password.length < minimumSize) {
      return "Password must be 8 chars long";
    } else if (needsNumber && !/\d/.test(password)) {
      return "Password must contain a Number";
    } else if (needsSpecialChar && !/[^a-zA-Z0-9]/.test(password)) {
      return "Password must contain a Special Character";
    } else if (needsCapitalChar && !/[A-Z]/.test(password)) {
      return "Password must contain a Capital Character";
    } else {
      return "Valid Pass";
    }
  }

  return checkValidity;
}

export default PassVerify;
