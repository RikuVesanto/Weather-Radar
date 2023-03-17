/**
 * Takes a kelvin temperature and converts it to celsius.
 * @param {number} kelvin Kelvin temperature value
 * @return {number} Celsius temperature value
 */
function kelvinToCelsius(kelvin) {
	return kelvin - 273.15
}

/**
 * Takes an id of a weather icon retrieves the icon and returns it.
 * @param {string} id Icon id
 * @return {string} A weather icon
 */
function getWeatherIcon(id) {
	return `https://openweathermap.org/img/wn/${id}@2x.png`
}

export { kelvinToCelsius, getWeatherIcon }