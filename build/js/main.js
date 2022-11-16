"use strict";

//////////////////// CONST  ////////////////////////
const checking = document.querySelector('.checking');
const trail = document.querySelector('.trail');
const outfits = document.querySelector('.outfits');
const menuButtonChecking = document.querySelector('.navigation__button-ckecking-graf');
const menuButtonAttire = document.querySelector('.navigation__button-attire');
const menuButtonTrial = document.querySelector('.navigation__button-trial');
const checkingPopup = document.querySelector('.checking__popup');
const checkingPopupButtonOut = document.querySelector('.checking__popup-button-out');
const ckeckingButtonAdd = document.querySelector('.checking__button-add');
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
};
for (let i = 0; i < filterItems.length; i++) {
  sortElements(filterItems[i]);
}

// Всплытие popup по кнопке добавить
ckeckingButtonAdd.addEventListener('click', () => {
  checkingPopup.classList.remove('checking__popup--display-none');
});
checkingPopupButtonOut.addEventListener('click', () => {
  checkingPopup.classList.add('checking__popup--display-none');
});
const popUpDelete = document.querySelector('.checking__popup-delete');
const buttonDelete = document.querySelector('.checking__button-delete');
const buttonDeleteOut = document.querySelector('.checking__popup-delete-button-no');

// Всплытие popup по кнопке удалить
buttonDelete.addEventListener('click', () => {
  popUpDelete.classList.remove('checking__popup-delete--display-none');
});

// Исчезновение popup по кнопке НЕТ
buttonDeleteOut.addEventListener('click', () => {
  popUpDelete.classList.add('checking__popup-delete--display-none');
});