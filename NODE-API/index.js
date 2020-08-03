const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const user = require('./api/user');

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true  }));

app.use('/users', user);
// app.use('/photo', photo);

module.exports = app;
