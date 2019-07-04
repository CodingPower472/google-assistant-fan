
const FAN_POWER_PINS = {
    1: 4,
    2: 5,
    3: 6
};

const Gpio = require('onoff').Gpio;

for (key in FAN_POWER_PINS) {
    FAN_POWER_PINS[key] = new Gpio(FAN_POWER_PINS[key], 'out');
}

console.log(FAN_POWER_PINS);

module.exports = {
    setPower: function(newPower) {
        this.allOff();
        FAN_POWER_PINS[newPower].writeSync(1);
    },
    allOff: function() {
        for (key in FAN_POWER_PINS) {
            FAN_POWER_PINS[key].writeSync(0);
        }
    }
}
