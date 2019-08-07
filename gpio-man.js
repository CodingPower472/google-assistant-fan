
const FAN_POWER_PINS = {
    1: 3,
    2: 5,
    3: 7
};

const rpiGpio = require('rpi-gpio');

for (key in FAN_POWER_PINS) {
    console.log(`Setting pin ${FAN_POWER_PINS[key]} to output`);
    rpiGpio.setup(FAN_POWER_PINS[key]); // defaults to output
}

console.log(FAN_POWER_PINS);

module.exports = {
    setPower: function(newPower) {
        this.allOff();
        console.log(`Sending HIGH to ${FAN_POWER_PINS[newPower]}`);
        if (FAN_POWER_PINS[newPower]) {
            rpiGpio.write(FAN_POWER_PINS[newPower], true);
        }
    },
    allOff: function() {
        for (key in FAN_POWER_PINS) {
            console.log(`Sending LOW to ${FAN_POWER_PINS[key]}`);
            rpiGpio.write(FAN_POWER_PINS[key], false);
        }
    }
}
