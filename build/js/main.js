"use strict";

//////////////////// CONST  ////////////////////////
const checking = document.querySelector('.checking');
const trail = document.querySelector('.trail');
const outfits = document.querySelector('.outfits');
const menuButtonChecking = document.querySelector('.navigation__button-ckecking-graf');
const menuButtonAttire = document.querySelector('.navigation__button-attire');
const menuButtonTrial = document.querySelector('.navigation__button-trial');
// const indocatorContent = document.querySelector('.trail__indicator');

//// уменьшение шрифта при заполнености контейнера //////////////
// if (indocatorContent.length > 200) {
//   indocatorContent.style = 'font-size: 16px; white-space: pre-line;';
// } else if (indocatorContent.length > 230) {
//   indocatorContent.style = 'font-size: 15px; white-space: pre-line;';
// } else if (indocatorContent.length > 250) {
//   indocatorContent.style = 'font-size: 14px; white-space: pre-line;';
// }

///// checking поворот svg после события ////////////////////////
const filterItems = document.querySelectorAll('.checking__sortable');
const sortElements = item => {
  item.addEventListener('click', () => {
    for (let filterItem of filterItems) {
      if (filterItem.classList.contains('checking__sortable--active')) {
        filterItem.classList.remove('checking__sortable--active');
      }
    }
    if (!item.classList.contains('checking__sortable--active')) {
      item.classList.add('checking__sortable--active');
    } else {
      item.classList.remove('checking__sortable--active');
    }
  });

  // if (!evt.currentTarget.classList.contains('checking__sortable--active')) {
  //   evt.currentTarget.classList.remove('checking__sortable--active');
  // } else {
  //   evt.currentTarget.classList.add('checking__sortable--active');
  // }
};

for (let i = 0; i < filterItems.length; i++) {
  sortElements(filterItems[i]);
}