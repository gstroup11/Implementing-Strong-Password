// Variables for what charcters need to be picked.
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialcharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function formpasswordoptions() {
  var characterlength = parseInt(
    prompt('How many characters do you need in your password?'), 
    10
  );

  if(Number.isNaN(characterlength)) {
    alert('Password length must be a number.');
    return null;
  }

  if (length < 8) {
    alert('Password must be larger than 8 characters.');
    return null;
  }

  if (length > 128) {
    alert('Password must be smaller than 128 characters.');
    return null;
  }

  var haslowercase = confirm(
    'Click OK to confirm including lowercase characters in the password.'
  );

  var hasuppercase = confirm(
    'Click OK to confirm including uppercase characters in the password.'
  );

  var hasspecialcharacters = confirm(
    'Click OK to confirm including special characters in the password.' 
  );

  var hasnumbers = confirm(
    'Click OK to confirm including number in the password.'
  );

  if (
    haslowercase === false &&
    hasuppercase === false &&
    hasspecialcharacters === false &&
    hasnumbers === false
  ) { 
    alert('Must select at least one character.')
    return null;
  }

  var passwordoptions = {
    characterlength: characterlength,
    haslowercase: haslowercase,
    hasuppercase: hasuppercase,
    hasspecialcharacters: hasspecialcharacters,
    hasnumbers: hasnumbers,
  };

  return passwordoptions;
}


  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }


function generatepassword() {
  var options = formpasswordoptions();
  var result = [];
  var possiblecharacters = [];
  var guranteedcharacters = [];

  if (!options) return null;

  if (options.haslowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }

  if (options.hasuppercase) {
    possiblecharacters = possiblecharacters.concat(uppercase);
    guranteedcharacters.push(getRandom(uppercase));
  }

  if (options.hasspecialcharacters) {
    possiblecharacters = possiblecharacters.concat(specialcharacters);
    guranteedcharacters.push(getRandom(hasspecialcharacters));
  }

  if (options.hasnumbers) {
    possiblecharacters = possiblecharacters.concat(hasnumbers);
    guranteedcharacters.push(getRandom(hasnumbers));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);