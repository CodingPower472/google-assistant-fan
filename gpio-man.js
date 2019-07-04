
const FAN_POWER_PINS = {
    1: 4,
    2: 5,
    3: 6
};

const rpiGpio = require('rpi-gpio');

for (key in FAN_POWER_PINS) {
    rpiGpio.setup(FAN_POWER_PINS[key]); // defaults to output
}

console.log(FAN_POWER_PINS);

module.exports = {
    setPower: function(newPower) {
        this.allOff();
        rpiGpio.write(FAN_POWER_PINS[newPower], true);
    },
    allOff: function() {
        for (key in FAN_POWER_PINS) {
            rpiGpio.write(FAN_POWER_PINS[key], false);
        }
    }
}
