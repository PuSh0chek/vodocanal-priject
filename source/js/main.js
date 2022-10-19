//////////////////// CONST  ////////////////////////
const popupOutfits = document.querySelector('.outfits__popup');
const buttonOutfitsPopup = document.querySelector('.outfits__popup');
const buttonResult = document.querySelector('.outfits__button-result');
// const buttonClosePopup = document.querySelector('.header__button-entry');
// const buttonOpenPopup = document.querySelector('.header__button-exet');
const dialogPopup = document.querySelector('.header__popup');
const header = document.querySelector('.header');
const checking = document.querySelector('.checking');
const trail = document.querySelector('.trail');
const outfits = document.querySelector('.outfits');
const menuButtonChecking = document.querySelector('.navigation__button-ckecking-graf');
const menuButtonAttire = document.querySelector('.navigation__button-attire');
const menuButtonTrial = document.querySelector('.navigation__button-trial');


/////////   наряды   ////////////////////////////
menuButtonAttire.addEventListener('click', () => {
  checking.style = 'display: none';
  trail.style = 'display: none';
  outfits.style = 'display: block';
  menuButtonChecking.style = 'background-color: rgba(32,90,90,.473);';
  menuButtonAttire.style = 'background-color: rgba(32,90,90,.781);';
  menuButtonTrial.style = 'background-color: rgba(32,90,90,.473);';
});

//////////////////// наряды popup ///////////////

buttonResult.addEventListener('click', () => {
  popupOutfits.style = 'display: flex';
});
buttonOutfitsPopup.addEventListener('click', () => {
  popupOutfits.style = 'display: none';
});

/////////////// авторизация (popup)  ////////////////////
// buttonClosePopup.addEventListener('click', () => {
// //   dialogPopup.style = 'display: none';
// //   header.style = 'align-items: center;';
// // });
// // buttonOpenPopup.addEventListener('click', () => {
// //   dialogPopup.style = 'display: block';
// //   header.style = 'min-height: 100px;width: 100 %;height: 100px;background - color: rgba(140, 159, 207, .658);display: flex;justify - content: space - between;';
// // });
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

// const burder = document.querySelector('.navigation__burger');
// const navList = document.querySelector('.navigation__list');
// const mian = document.querySelector('.');
// let counter = 1;

// burder.addEventListener('click', () => {
//   if(counter === 0) {
//     counter++;
//     navList.style = 'display: inline-block';
//     console.log(counter);
//   } else if(counter === 1) {
//     counter--;
//     navList.style = 'display: none';
//     console.log(counter);
//   }
// });

// function show() {
//   //заносим текст формы в переменную
//   var t = document.forma1.Address.value;
//   //определяем координаты по адресу: Москва, Тимирязевская ул. 49
//   ymaps.geocode(t, { results: 1 }).then(
//     function (res) {
//       var MyGeoObj = res.geoObjects.get(0);
//       //извлечение координат
//       document.getElementById('one').value = MyGeoObj.geometry.()[0];
//       document.getElementById('two').value = MyGeoObj.geometry.getCoordinates()[1];
//       //добавляем метку на карте
//       var myPlacemark = new ymaps.Placemark([MyGeoObj.geometry.getCoordinates()[0], MyGeoObj.geometry.getCoordinates()[1]]);
//       myMap.geoObjects.add(myPlacemark);
//     });
// }

// router.get('/api/data', (request, response) => {
//   var pg = require('pg');
//   var pgURL = 'postgres://linktoyourdatabase';

//   ////////// connect to the database /////////////////
//   pg.connect(pgURL, (error, client, done) => {
//     // query the database
//     client.query('SELECT *', (error, result) => {
//       // close connection
//       done();
//       // return the data requested
//       response.json({ data: result });
//     };
//   };
// };


// ///////////////////////////

// $.getJSON('https://geocode-maps.yandex.ru/1.x/?',{
// 	geocode:'Санкт-Петербург ул. бабушкина 3',
// 	format :'json'
// }).done(
// 	function(data){

// 	}
// )
