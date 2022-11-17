'use strict'
document.addEventListener('scroll', () => {

  const elem = document.querySelectorAll('.reveal');
  elem.forEach(el => {
    const { top, bottom } = el.getBoundingClientRect();
    if ((top < window.innerHeight) || (bottom > 0)) {
      el.classList.toggle('reveal_active')
    }
    return false
  });
})