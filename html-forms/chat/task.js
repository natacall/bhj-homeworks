'use strict'

debugger
const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');
const chatContainer = document.querySelector('.chat-widget__messages-container')
const newDate = new Date();
const botAnswer = [
  'Добрый день! До свидания!',
  'Где ж ты был раньше?',
  'Поздравляем! Вы как обычно ничего не успели купить!',
  'Вы купите, а потом поговорим!',
  'К сожалению, все всегда заняты. Прощайте',
  'У нас ничего не осталось!',
  'Добрый день! Как погодка?',
];

// активация чата
document.addEventListener('click', () => {
  chat.classList.add('chat-widget_active');
});

// скролл сообщений
function scroll() {         
  const scrollMes =  chatContainer.getBoundingClientRect().bottom;
  chatContainer.scroll(0, scrollMes);
};

//  отправка сообщений
chat.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    answer();
    scroll();
  }
});

function answer() {
  messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${newDate.getHours()}:${newDate.getMinutes()}</div>
    <div class="message__text">${input.value}</div>
  </div>
  `;
  input.value = '';

const random = Math.floor(Math.random() * botAnswer.length);
messages.innerHTML += `
<div class="message">
    <div class="message__time">${newDate.getHours()}:${newDate.getMinutes()}</div>
    <div class="message__text">${botAnswer[random]}</div>
</div>`;

}