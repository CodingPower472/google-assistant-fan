
const gpioMan = require('./gpio-man');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let power = 2, on = false;

function setPower(newPower) {
    console.log(`Setting fan power to ${newPower}`);
    if (newPower === 0) {
        on = false;
        gpioMan.allOff();
    } else {
        power = newPower;
        gpioMan.setPower(power);
    }
}

app.post('/', (req, res) => {
    console.log('POST request to root');
    console.log(req.body);
    console.log(`Response ID: ${req.body.responseId}`);
    let queryResult = req.body.queryResult;
    console.log(`Intent: ${queryResult.intent.displayName}`);
    let intentId = queryResult.intent.name;
    console.log(`Intent ID: ${intentId}`);
});

app.listen(8080);
