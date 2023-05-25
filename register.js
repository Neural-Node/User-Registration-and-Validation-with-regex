function checkForm(fullName, email, password, confirmPassword) {
   //Retrieve form elements
   const fullNameInput = document.getElementById('fullName');
   const emailInput = document.getElementById('email');
   const passwordInput = document.getElementById('password');
   const confirmPasswordInput =document.getElementById('passwordConfirm');
   const formErrorsDiv = document.getElementById('formErrors');

   //Reset form errors and input classes
   formErrorsDiv.innerHTML = '';
   formErrorsDiv.classList.add('hide');
   fullNameInput.classList.remove('error');
   emailInput.classList.remove('error');
   passwordInput.classList.remove('error');
   confirmPasswordInput.classList.remove('error');

   let errors = [];

   //Validate full name
   if(!fullName|| fullName.length < 1){
      errors.push("Missing full name.")
   }

   //Validate email address
   if(!email|| !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/)){
      errors.push("Invalid or missing email address.")
   }

   //Validate password length
   if(!password || password.length < 10 || password.length >20){
      errors.push("Password must be between 10 and 20 characters.")
   }


   //Validate lowercase character in password
   if(!/[a-z]/.test(password)){
      errors.push("Password must contain at least one lowercase character.");
   }

   //Validate uppercase character in password
   if(!/[A-Z]/.test(password)){
      errors.push("Password must contain at least one uppercase character.");
   }

   //Validate digit in password
   if(!/\d/.test(password)){
      errors.push("Password must contain at least one digit.");
   }

   //Validate password and confirmation password match
   if(password !== confirmPassword){
      errors.push("Password and confirmation password don't match.");
   }

   //Display error messages
   if(errors.length >0){
      for (let i = 0; i< errors.length; i++){
         console.log(errors[i]);
      }

   } else {
      console.log("Form validation successful.")
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});