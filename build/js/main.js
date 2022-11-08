"use strict";

//////////////////// CONST  ////////////////////////
const checking = document.querySelector('.checking');
const trail = document.querySelector('.trail');
const outfits = document.querySelector('.outfits');
const menuButtonChecking = document.querySelector('.navigation__button-ckecking-graf');
const menuButtonAttire = document.querySelector('.navigation__button-attire');
const menuButtonTrial = document.querySelector('.navigation__button-trial');
// const indocatorContent = document.querySelector('.trail__indicator');
// console.log(indocatorContent);

/////////   наряды   ////////////////////////////
menuButtonAttire.addEventListener('click', () => {
  checking.style = 'display: none';
  trail.style = 'display: none';
  outfits.style = 'display: block';
  menuButtonChecking.style = 'background-color: rgba(32,90,90,.473);';
  menuButtonAttire.style = 'background-color: rgba(32,90,90,.781);';
  menuButtonTrial.style = 'background-color: rgba(32,90,90,.473);';
});
////////// вывод popup график проверок //////////////////////
menuButtonChecking.addEventListener('click', () => {
  checking.style = 'display: block';
  trail.style = 'display: none';
  outfits.style = 'display: none';
  menuButtonChecking.style = 'background-color: rgba(32,90,90,.781);';
  menuButtonAttire.style = 'background-color: rgba(32,90,90,.473);';
  menuButtonTrial.style = 'background-color: rgba(32,90,90,.473);';
});

////////// вывод popup результаты проб ///////////////////////////
menuButtonTrial.addEventListener('click', () => {
  checking.style = 'display: none';
  trail.style = 'display: flex';
  outfits.style = 'display: none';
  menuButtonChecking.style = 'background-color: rgba(32,90,90,.473);';
  menuButtonAttire.style = 'background-color: rgba(32,90,90,.473);';
  menuButtonTrial.style = 'background-color: rgba(32,90,90,.781);';
});

//// уменьшение шрифта при заполнености контейнера //////////////
// if (indocatorContent.length > 200) {
//   indocatorContent.style = 'font-size: 16px; white-space: pre-line;';
// } else if (indocatorContent.length > 230) {
//   indocatorContent.style = 'font-size: 15px; white-space: pre-line;';
// } else if (indocatorContent.length > 250) {
//   indocatorContent.style = 'font-size: 14px; white-space: pre-line;';
// }

///// checking поворот svg после события ////////////////////////
const contentElementOfTable = document.querySelectorAll('.checking__wrapper-content-table');
for (let elementOfTable of contentElementOfTable) {
  const icon = elementOfTable.querySelector('.checking__svg');
  icon.classList.add('checking__svg--dnone');
}
const sortElements = item => {
  item.addEventListener('click', () => {
    // for (let elementOfTable of contentElementOfTable) {
    //   const icon = elementOfTable.querySelector('.checking__svg');
    //   icon.classList.add('checking__svg--dnone');
    //   // if (icon.classList.contains('checking__svg--rotate')) {
    //   //   icon.classList.remove('checking__svg--rotate');
    //   // }
    // }
    const itemIcon = item.querySelector('.checking__svg');
    itemIcon.classList.remove('checking__svg--dnone');
    itemIcon.classList.toggle('checking__svg--rotate');
  });
};
for (let i = 0; i < contentElementOfTable.length; i++) {
  sortElements(contentElementOfTable[i]);
}

// const elementInRowTable1 = document.getElementById('checking__svg-1');
// const elementInRowTable2 = document.getElementById('checking__svg-2');
// const elementInRowTable3 = document.getElementById('checking__svg-3');
// const elementInRowTable4 = document.getElementById('checking__svg-4');
// const elementInRowTable5 = document.getElementById('checking__svg-5');
// const elementInRowTable6 = document.getElementById('checking__svg-6');
// const elementInRowTable7 = document.getElementById('checking__svg-7');

// const ckeaningUpClassesOfElements = (elementId) => {
//   for(let i = 0; i < 7; i++) {
//     elementId.className = '';
//     elementId.classList.add('checking__svg--dnone');
//   }
// };

// const changePositionOfSVG = (elementId) => {
//   if (elementId.classList.contains('checking__svg--dnone')) {
//     ckeaningUpClassesOfElements(elementId);
//     elementId.classList.remove('checking__svg--dnone');
//     elementId.classList.add('checking__svg--dblock');

//   } else if (elementId.classList.contains('checking__svg--dblock')) {
//     ckeaningUpClassesOfElements(elementId);
//     elementId.classList.remove('checking__svg--dblock');
//     elementId.classList.add('checking__svg--rotate');
//   } else if (elementId.classList.contains('checking__svg--rotate')) {
//     ckeaningUpClassesOfElements(elementId);
//   }
// };

// contentElementOfTable.addEventListener('click', () => {
//   changePositionOfSVG(elementInRowTable1);
// });
// contentElementOfTable.addEventListener('click', () => {
//   changePositionOfSVG(elementInRowTable2);
// });
// contentElementOfTable.addEventListener('click', () => {
//   changePositionOfSVG(elementInRowTable3);
// });
// contentElementOfTable.addEventListener('click', () => {
//   changePositionOfSVG(elementInRowTable4);
// });
// contentElementOfTable.addEventListener('click', () => {
//   changePositionOfSVG(elementInRowTable5);
// });
// contentElementOfTable.addEventListener('click', () => {
//   changePositionOfSVG(elementInRowTable6);
// });
// contentElementOfTable.addEventListener('click', () => {
//   changePositionOfSVG(elementInRowTable7);
// });