const express = require('express');
const volleyball = require('volleyball');
const cors = require('cors');

const app = express();


const auth = require('./auth/index.js');

app.use(volleyball);  //http logger


app.use(cors({
   origin : 'http://localhost:3000'
}));


app.use(express.json());//build in body parser


app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  });
});

app.use('/auth', auth);

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port', port); 
});