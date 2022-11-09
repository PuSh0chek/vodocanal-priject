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
const contentElementOfTable = document.querySelectorAll('.checking__wrapper-content-table');

// for (let elementOfTable of contentElementOfTable) {
//   const icon = elementOfTable.querySelector('.checking__svg');
//   icon.classList.add('checking__svg--dnone');
// }
// const sortElements = (item) => {
//   item.addEventListener('click', () => {
//     for (let elementOfTable of contentElementOfTable) {
//       const icon = elementOfTable.querySelector('.checking__svg');
//       icon.classList.add('checking__svg--dnone');
//       if (icon.classList.contains('checking__svg--rotate')) {
//         icon.classList.remove('checking__svg--rotate');
//       }
//     }
//     const itemIcon = item.querySelector('.checking__svg');
//     itemIcon.classList.remove('checking__svg--dnone');
//     itemIcon.classList.toggle('checking__svg--rotate');
//     itemIcon.classList.toggle('checking__svg--rotate');
//   });
// };

for (let elementOfTable of contentElementOfTable) {
  const icon = elementOfTable.querySelector('.checking__svg');
  icon.classList.add('checking__svg--dnone');
}

const forOf = (el) => {
  const icon = item.querySelector('.checking__svg');
  for (let item of contentElementOfTable) {
    el;
  }
};

const sortElements = (item) => {
  item.addEventListener('click', () => {
    const icon = item.querySelector('.checking__svg');
    (icon.classList.contains('checking__svg--dnone')) ? forOf(icon.classList.replace('checking__svg--dnone', 'checking__svg--rotate')) : console.log('not done.');
    (icon.classList.contains('checking__svg--rotate')) ? forOf(icon.classList.remove('checking__svg--rotate')) : console.log('not done');
    (!icon.classList.contains('checking__svg--rotate' && !icon.classList.contains('checking__svg--dnone'))) ? forOf(
      icon.classList.add('checking__svg--rotate')) : console.log('not done');
    
  });
};

for (let i = 0; i < contentElementOfTable.length; i++) {
  sortElements(contentElementOfTable[i]);
}


