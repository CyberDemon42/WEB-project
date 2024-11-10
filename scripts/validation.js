document.addEventListener('DOMContentLoaded', () =>{
  const form = document.getElementById('form');
  const login_input = document.getElementById("login");
  const email_input = document.getElementById("email");
  const password_input = document.getElementById("password");
  const repeat_password_input = document.getElementById('confpassword');
  const error_message = document.getElementById('error-message');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  form.addEventListener('submit', (e) => {
    let errors = [];

    if(email_input){
      errors = getSignupFormErrors(login_input.value, email_input.value, password_input.value, repeat_password_input.value);
      if(errors.length > 0){
        e.preventDefault();
        error_message.innerText = errors.join(". ");
      }
      else
      {
        e.preventDefault();
        registerUser(login_input.value, email_input.value, password_input.value)
      }
    }
    else{
      errors = getLoginFormErrors(login_input.value, password_input.value);
      if(errors.length > 0){
        e.preventDefault();
        error_message.innerText = errors.join(". ");
      }
      else
      {
        e.preventDefault();
        loginUser(login_input.value, password_input.value)
      }
    }
  });

  function getSignupFormErrors(firstname, email, password, repeatPassword){
    let errors = [];

    if(firstname === '' || firstname == null){
      errors.push('Login is required');
      login_input.classList.add('bg-danger');
    }
    if(email === '' || email == null){
      errors.push('Email is required');
      email_input.classList.add('bg-danger');
    }
    else if(!emailPattern.test(email)){
      errors.push("Please enter a valid email address");
      email_input.classList.add('bg-danger');
    }
    if(password === '' || password == null){
      errors.push('Password is required');
      password_input.classList.add('bg-danger');
    }
    else if(!passwordPattern.test(password)){
      errors.push('Password must have at least 8 characters, including an uppercase letter, a lowercase letter, a digit, and a special character');
      password_input.classList.add('bg-danger');
    }
    if(password !== repeatPassword){
      errors.push('Password does not match repeated password');
      password_input.classList.add('bg-danger');
      repeat_password_input.classList.add('bg-danger');
    }

    return errors;
  }

  function getLoginFormErrors(firstname, password){
    let errors = [];
    if(firstname === '' || firstname == null){
      errors.push('Login is required');
      login_input.classList.add('bg-danger');
    }
    if(password === '' || password == null){
      errors.push('Password is required');
      password_input.classList.add('bg-danger');
    }

    return errors;
  }

  const allInputs = [login_input, email_input, password_input, repeat_password_input].filter(input => input != null);

  allInputs.forEach(input => {
    input.addEventListener('input', () => {
      if(input.classList.contains('bg-danger')){
        input.classList.remove('bg-danger');
        error_message.innerText = '';
      }
    });
  });
  
});
