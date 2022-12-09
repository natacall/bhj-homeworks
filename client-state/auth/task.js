'use strict'


const signIn = document.getElementById('signin');
const signInForm = document.getElementById('signin__form');
const submitBtn = document.getElementById('signin__btn');

if (localStorage.user_id) {
  document.getElementById('user_id').textContent = localStorage.user_id;
  document.getElementById('welcome').classList.add('welcome_active');
}
else {
  signIn.classList.add('signin_active');

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(signInForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        if (data.success === true) {
          localStorage.setItem('user_id', data.user_id);
          document.getElementById('user_id').textContent;
          signIn.classList.remove('signin_active');
          document.getElementById('welcome').classList.add('welcome_active');
        }
        else {
          alert('Неверный логин/пароль');
        }
      };
    });
    xhr.send(formData);
  });
}