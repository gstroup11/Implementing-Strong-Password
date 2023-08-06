// Variables for what charcters need to be picked.
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialcharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Main Function to form the options for the password.
function formpasswordoptions() {
  var characterlength = parseInt(
    prompt('How many characters do you need in your password?'), 
    10
  );
//returns if the user doesn't use a number
  if(Number.isNaN(characterlength)) {
    alert('Password length must be a number.');
    return null;
  }
//returns if the user doesnt select more than 8 characters
  if (characterlength < 8) {
    alert('Password must be larger than 8 characters.');
    return null;
  }
//returns if the user doesnt select less than 128 characters
  if (characterlength > 128) {
    alert('Password must be smaller than 128 characters.');
    return null;
  }
//Boolean statement set to ask the user if they want lowercase letters or not
  var haslowercase = confirm(
    'Click OK to confirm including lowercase characters in the password.'
  );
//Boolean statement set to ask the user if they want uppercase letters or not
  var hasuppercase = confirm(
    'Click OK to confirm including uppercase characters in the password.'
  );
//Boolean statement set to ask the user if they want special characters or not
  var hasspecialcharacters = confirm(
    'Click OK to confirm including special characters in the password.' 
  );
//Boolean statment set to ask if the user wants numbers or not
  var hasnumbers = confirm(
    'Click OK to confirm including number in the password.'
  );
//if statement setting if all the options are not slected then it will return and make them select an option.
  if (
    haslowercase === false &&
    hasuppercase === false &&
    hasspecialcharacters === false &&
    hasnumbers === false
  ) { 
    alert('Must select at least one character.')
    return null;
  }
//storing the variables 
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
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.haslowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }

  if (options.hasuppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }

  if (options.hasspecialcharacters) {
    possibleCharacters = possibleCharacters.concat(specialcharacters);
    guaranteedCharacters.push(getRandom(specialcharacters));
  }

  if (options.hasnumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  for (var i = 0; i < options.characterlength; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.characterlength; i++) {
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