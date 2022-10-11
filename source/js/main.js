const convertAdress = () => {
  
}


router.get('/api/data', (request, response) => {
  var pg = require('pg');
  var pgURL = 'postgres://linktoyourdatabase';

  ////////// connect to the database /////////////////
  pg.connect(pgURL, (error, client, done) => {
    // query the database
    client.query('SELECT *', (error, result) => {
      // close connection
      done();
      // return the data requested
      response.json({ data: result });
    };
  };
};