
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('POST request');
  console.log(req.body);
  console.log(`Response ID: ${req.body.responseId}`);
  console.log(`Intent: ${req.body.queryResult.intent.displayName}`);
});

app.listen(8080);
