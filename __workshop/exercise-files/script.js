/*
Basic Validation
When the user submits the form, the following validations should take place:

All fields are required. They should have at least 1 character. You can solve for this by adding the required attribute to the HTML inputs.

The email field needs to be a valid email. You can ensure that the browser validates this by using type="email"

Terms validation
If the user tries to submit the form before agreeing to the terms of service, the browser should open a window.alert explaining to the user that they need to agree to the terms.

Password validation
There are two rules for passwords:

The password should be at least 10 characters long.
The "password" and "confirm password" fields should match.
If either of these fails, a number of things should happen:

A pink error box should be shown. It should have a message about what the problem is and how to fix it:
*/

wrapper = document.querySelector(".wrapper");
form = document.querySelector("#actual-form");
inputField = document.querySelector(".input-style");
passwordInput = document.querySelector("#password-input");
confirmPasswordInput = document.querySelector("#confirm-password-input");
checkBox = document.querySelector("#terms-services-input");
errorBox = document.querySelector("#error-message");
clearBtn = document.querySelector(".btn-style-clear");
submitBtn = document.querySelector(".btn-style-submit");


//for the form
form.addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
}

submitBtn.addEventListener("click", clickSubmit);
function clickSubmit(e) {
  e.preventDefault;
  if (pwMatch() && pwLength() && termsCheck()) {
    console.log("all true, all good");
    form.submit();
    window.alert("Success!");
  } else {
    console.log("missing something");
  }
}


//password needs to at least 10 char
function pwLength() {
if (passwordInput.value.length < 10) {
    passwordInput.style.borderColor = "hsl(333deg, 100%, 44%)";
    //passwordInput.style.borderWidth = "thick";
    errorBox.className = "error-message";
    errorBox.innerHTML = "Your password is too short! Please provide a <br>password that is at least 10 characters long.";
  } else {
  return true;
  }
}



//passwords need to match  
function pwMatch() {
let pass1 = passwordInput.value;
let pass2 = confirmPasswordInput.value;
if (pass1 != pass2) {
    confirmPasswordInput.style.borderColor = "hsl(333deg, 100%, 44%)";
    //confirmPasswordInput.style.borderWidth = "thick";
    errorBox.className = "error-message";
    errorBox.innerHTML = "Your passwords didn't match! Please provide the same password in each field.";
  } else {
  return true;
  }
}


//box needs to be checked
function termsCheck() {
  if(checkBox.checked) {
    return true;  
  } else {
    window.alert("To continue, please agree to the terms of service.");
  }
}


// clear input and pink box
clearBtn.addEventListener("click", clearForm);
function clearForm(e) {
  //console.log("form reset");
  errorBox.style.display = "none";
  passwordInput.style.borderColor = null;
  confirmPasswordInput.style.borderColor = null;
  form.reset();
}


