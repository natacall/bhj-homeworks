'use strict';

debugger
let tabs = Array.from(document.querySelectorAll('div.tab'));
let tabContent = document.querySelectorAll('div.tab__content');

function changeMenu() {
  for (const tab of tabs) {
    tab.className = 'tab';
  }
  for (const content of tabContent) {
    content.className = 'tab__content';
  }
  let index = tabs.indexOf(this)
  tabs[index].className = 'tab tab_active';
  tabContent[index].className = 'tab__content tab__content_active';
}
for (const item of tabs) {
  item.onclick = changeMenu;
}