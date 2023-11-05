
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Allowed characters for password 
const allowedChars = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '1234567890',
    charactrers: '!@#$%^&*()?><',
};

// Generate password function 
function generatePassword() {
var passwordCharSet = "";


// Prompt the user about password criteria 

// Length 
var passwordLength = window.prompt('Enter a password length between 8 and 128');

// Validate input
if (passwordLength >=8 && passwordLength <=128) {
    window.alert('valid');
} else {
    window.alert('invaild');
}

//Character sets 
var lowercase = window.confirm('Include lowercase?');
if (lowercase) { 
    passwordCharSet += lowercase.allowedChars
};

var uppercase = window.confirm('Include uppercase?');
if (uppercase) { 
    passwordCharSet += uppercase.allowedChars
};

var numbers = window.confirm('Include numbers?');
if (numbers) { 
    passwordCharSet += allowedChars.numbers;
};

var characters = window.confirm('Include special characters?');
if (characters) { 
    passwordCharSet += allowedChars.charactrers
};


// Generate password
var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
