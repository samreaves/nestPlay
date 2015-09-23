var nest = require('nest-thermostat').init('username', 'password');

nest.getInfo('serialnumber', function(data) {
    console.log('Currently ' + celsiusToFahrenheit(data.current_temperature) + ' degrees fahrenheit');
    console.log('Target is ' + celsiusToFahrenheit(data.target_temperature) + ' degrees fahrenheit');
    console.log(data);
});

function celsiusToFahrenheit(temp) {
    return Math.round(temp * (9 / 5.0) + 32.0);
};