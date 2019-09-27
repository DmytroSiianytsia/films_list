const express = require('express');
const {Client} = require('pg');
const path = require('path');
const bodyParsing = express.urlencoded({extended: true});
const bodyParser = require('body-parser');

const app = express();
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

app.use(bodyParsing);
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000 ');
  res.set('Access-Control-Allow-Headers', 'content-type');
  next()
});

client.connect();
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/id', (req, res) => {
  client.query('SELECT * FROM movies ORDER BY id', (err, result) => {
    res.send(result.rows);
  });
});

app.post('/api', bodyParser.json(), (req, res) => {
  const {title, release, genres, actors, urlPoster, trailer, film_description} = req.body;
  client.query(`INSERT INTO movies (title, release, genres, actors, img, trailer, film_description)
     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
    [title, release, genres, [actors], urlPoster, trailer, film_description],
    (err) => {
      if (err) {
        res.status(500)
      } else {
        res.status(200)
      }
    })
});

app.delete('/api/:idFilm', (req, res) => {
  client.query('DELETE  FROM movies  WHERE id = $1', [req.params.idFilm], () => {
    res.status(200)
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
