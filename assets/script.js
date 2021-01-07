// Assignment Code
var lowerCaseLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var UpperCaseLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharecters = [
  '@',
  '%',
  '+',
  '\\',
  ',',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

function getPasswordCriteria() {
  var length = parseInt(prompt("How long do you wanr your password to be?"))

  if (length < 8) {
    alert("Your password must be at least 9 characters.")
    return;
  }



  if (length > 128) {
    alert("Your password must be at least 9 characters")
    return;
  }

  if (isNaN(length) === true) {
    alert("Your password must be at least 9 characters")
    return;
  }

  var getLowerCaseLetters = confirm("Click OK for Lower case letters ");
  var getUpperCaseLetters = confirm("Click OK for Uppercase letters");
  var getNumerics = confirm("Click OK for numbers");
  var getSpecialCharacters = confirm("Click OK for special characters");

  if
    (getLowerCaseLetters === false &&
    getUpperCaseLetters === false &&
    getNumerics === false &&
    getSpecialCharacters === false && 
 
    alert("Please choose at least one type"));
    return;

  

  var getPasswordCriteria = {
    length: length,
    getLowerCaseLetters: getLowerCaseLetters,
    getUpperCaseLetters: getUpperCaseLetters,


  }

  function getRandom(array) {
    var randomIndex = Math.floor(Math.random) * (array.length);
    var RandomEl = array[randomIndex];
    return RandomEl;
  }



  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword()
