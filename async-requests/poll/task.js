'use strict'

debugger
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const pollTitle = document.getElementById('poll__title');
    pollTitle.textContent = response.data.title;
    const answers = document.getElementById('poll__answers');
    
    for (let answer of response.data.answers) {
      const button = `<button class="poll__answer" onclick="alert('Спасибо, ваш ответ засчитан!');">${answer}</button>`;
      answers.insertAdjacentHTML('beforeend', button);
    }
  }
})