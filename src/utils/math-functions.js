/**
 * Takes a kelvin temperature and converts it to celsius.
 * @param {number} kelvin Kelvin temperature value
 * @return {number} Celsius temperature value
 */
function kelvinToCelsius(kelvin) {
	return kelvin - 273.15
}

export { kelvinToCelsius }
