
const SET_FAN_POWER_INTENT = "projects/handlinguserinput-mnqyaq/agent/intents/f86ba9de-4eea-49e4-80b5-cbb494d9456f";
const TURN_FAN_OFF_INTENT = "projects/handlinguserinput-mnqyaq/agent/intents/cd53e4bf-37c6-48da-8c9f-555f23772728";
const TURN_FAN_ON_INTENT = "projects/handlinguserinput-mnqyaq/agent/intents/b4e1c094-22d1-4d69-aa06-07ec330d8d9d";

const gpioMan = require('./gpio-man');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let power = 2, on = false;

app.post('/', (req, res) => {
    console.log('POST request to root');
    console.log(req.body);
    console.log(`Response ID: ${req.body.responseId}`);
    let queryResult = req.body.queryResult;
    console.log(`Intent: ${queryResult.intent.displayName}`);
    let intentId = queryResult.intent.name;
    console.log(`Intent ID: ${intentId}`);
    if (intentId === SET_FAN_POWER_INTENT) {
        let parsedPower = parseInt(queryResult.parameters.power);
        if (!isNaN(parsedPower)) {
            console.log('Set fan power');
            power = parsedPower;
            on = true;
            gpioMan.setPower(power);
        } else {
            console.log('Cannot parse power');
        }
    } else if (intentId === TURN_FAN_OFF_INTENT) {
        console.log('Turn fan off');
        gpioMan.allOff();
        on = false;
    } else if (intentId === TURN_FAN_ON_INTENT) {
        console.log('Turn fan on');
        gpioMan.setPower(power);
        on = true;
    }
});

app.listen(8080);
