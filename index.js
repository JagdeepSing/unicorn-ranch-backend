'use strict';

require('dotenv').config();

const pg = require('pg');

//create client connection to database
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', (err) => console.error(err));


const cors = require('cors');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const PORT = process.env.PORT;

app.get('/unicorns', getUnicorns);

app.post('/moveUnicorn', moveUnicorn);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));


function getUnicorns(request, response) {
  const getUnicornsQuery = `SELECT * FROM unicorns;`;
  return client.query(getUnicornsQuery)
    .then((result) => {
      response.json(result.rows);
    })
    .catch((error) => {
      console.error(error);
      response.json([]);
    });
}

function moveUnicorn(request, response) {
  const updateQuery = `UPDATE unicorns SET location = $2 WHERE id=$1;`
  const values = [request.body.id, request.body.newLocation.toLowerCase()];
  client.query(updateQuery, values).then(() => {
    response.status(200).send('Success');
  }).catch((e) => {
    console.error(e);
    response.status(500).send('Server Error');
  });
}