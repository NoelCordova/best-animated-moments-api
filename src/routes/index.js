const express = require('express');

const app = express();

const moments = require('./moments');
const labels = require('./labels');

app.all('/', (req, res) => {
  res.json('best-animated-moments-api');
});

app.all('/ping', (req, res) => {
  res.json('pong');
});

app.use('/moments', moments);
app.use('/labels', labels);

app.all('*', (req, res) => {
  const url = req.originalUrl;

  res.status(404).json({
    message: `${url} - not found`,
  });
});

module.exports = app;
