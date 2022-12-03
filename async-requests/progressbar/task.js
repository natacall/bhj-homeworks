'use strict'

debugger
const progress = document.getElementById('progress');

document.forms.form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(document.forms.form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.upload.onprogress = (event) => {
    progress.value = event.loaded / event.total;
    
  }
  xhr.send(formData);
};