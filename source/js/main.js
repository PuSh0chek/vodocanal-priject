const buttonOpenDialog = document.querySelector('');
const dialog = document.querySelector('');





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
