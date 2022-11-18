'use strict'
document.addEventListener('scroll', () => {

  const elem = document.querySelectorAll('.reveal');
  elem.forEach(el => {
    const { top, bottom } = el.getBoundingClientRect();
    if ((top > 0) && (bottom < window.innerHeight)) {
      el.classList.add('reveal_active')
    } else
      el.classList.remove('reveal_active')
    return false
  });
})