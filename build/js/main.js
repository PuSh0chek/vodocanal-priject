"use strict";

/////////////////////////////////////////////////
/////////   НАРЯДЫ   ////////////////////////////
/////////////////////////////////////////////////
const popupOutfits = document.querySelector('.outfits__popup');
const buttonOutfitsPopup = document.querySelector('.outfits__popup');
const buttonResult = document.querySelector('.outfits__button-result');
buttonResult.addEventListener('click', () => {
  popupOutfits.style = 'display: block';
});
buttonOutfitsPopup.addEventListener('click', () => {
  popupOutfits.style = 'display: none';
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
//       document.getElementById('one').value = MyGeoObj.geometry. ()[0];
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