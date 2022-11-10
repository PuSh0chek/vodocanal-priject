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

const sortElements = (item) => {
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


/////////// БД график проверок //////////
const inspectionsDate = [
  {
    Date: '2022-02-01',
    Name_incpector: 'контрагент-1',
    Addres_inspections: '1-я Баррикадная ул. 23',
    Prone: '8 800 555 35 35',
    Number_dogovor: 80481,
    Name: 'Иван',
    Adress: 'ул. М.Горького.293',
  },
  {
    Date: '2023-02-01',
    Name_incpector: 'контрагент-2',
    Addres_inspections: '2-я Баррикадная ул. 23',
    Prone: '8 800 555 35 36',
    Number_dogovor: 80482,
    Name: 'Антон',
    Adress: 'ул. М.Горького.294',
  },
  {
    Date: '2024-02-01',
    Name_incpector: 'контрагент-3',
    Addres_inspections: '3-я Баррикадная ул. 23',
    Prone: '8 800 555 35 37',
    Number_dogovor: 80483,
    Name: 'Гавриил',
    Adress: 'ул. М.Горького.295',
  },
  {
    Date: '2025-02-01',
    Name_incpector: 'контрагент-4',
    Addres_inspections: '4-я Баррикадная ул. 23',
    Prone: '8 800 555 35 38',
    Number_dogovor: 80484,
    Name: 'Джейсон',
    Adress: 'ул. М.Горького.296',
  },
];

console.log(inspectionsDate[0].Date);
console.log(inspectionsDate.length);

const createElement = () => {
  const tableBody = document.querySelector('.checking__table-body');
  const tableRow = document.createElement('tr');
  tableRow.classList.add('checking__table-row');
  const tableInput = document.createElement('input');
  tableInput.classList.add('checking__table-input');
  for (let i = 0; i < 7; i++) {
    const tableCell = document.createElement('td');
    tableCell.classList.add('checking__table-cell');
    tableBody.appendChild(tableRow);
    tableRow.appendChild(tableCell);
    tableCell.appendChild(tableInput);
  }
};
createElement();

const pushContent = () => {
  const tableCells = document.querySelectorAll('.checking__table-cell');
  console.log(tableCells);
  for(let i = 0; i < 4; i++) {
    tableCells.forEach((tableCells) => {
      tableCells.forEach((cell) => {
        tableCells.innerHTML = inspectionsDate[i].Date;
        tableCells.innerHTML = inspectionsDate[i].Name_incpector;
        tableCells.innerHTML = inspectionsDate[i].Addres_inspections;
        tableCells.innerHTML = inspectionsDate[i].Prone;
        tableCells.innerHTML = inspectionsDate[i].Number_dogovor;
        tableCells.innerHTML = inspectionsDate[i].Name;
        tableCells.innerHTML = inspectionsDate[i].Adress;
      });
    });
  }

};
pushContent();

// const lodgeContentInTable = () => {
//   const tableElement = document.querySelectorAll('.checking__content-table');
//   forOf(let tableElements of tableElement) {
//     tableElements.innerHTML += inspectionsDate[0].Date;
//     tableElements.innerHTML += inspectionsDate[0].Name_incpector;
//     tableElements.innerHTML += inspectionsDate[0].Addres_inspections;
//     tableElements.innerHTML += inspectionsDate[0].Prone;
//     tableElements.innerHTML += inspectionsDate[0].Name;
//     tableElements.innerHTML += inspectionsDate[0].Adress;
//   };

// };
// lodgeContentInTable();
