'use strict';

/*document.querySelectorAll('.menu__link').forEach((link) => {
  link.addEventListener('click', (event) => {
      const linkMenu = link.parentElement.querySelector('.menu_sub');
      link.closest('.menu').querySelectorAll('.menu_sub').forEach((menuSub) => {
          if (linkMenu !== menuSub) {
              menuSub.classList.remove('menu_active');
          }
      });
      if (linkMenu !== null) {
          linkMenu.classList.toggle('menu_active');
          event.preventDefault();
      }
  })
})*/

const menuLink = document.getElementsByClassName('menu__link');

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function () {
    const menuMain = this.closest('ul');
    const menuSub = classList.contains('.menu_active');

    if (menuMain.className === 'menu menu_main') {
      const menuActive = menuMain.querySelector('.menu_active');
      if (menuActive && (menu_active !== menuSub))
        menuActive.className = 'menu menu_sub';
    }

    if (menuLink !== null) {
        menuSub.classList.toggle('menu_active');
        
    }
    return false;
  }
}