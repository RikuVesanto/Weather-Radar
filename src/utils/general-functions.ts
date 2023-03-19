/**
 * Takes a function and returns a wrapper function that allows executing it only a specific amount of times
 * @param {Function} func Any function
 * @param {number} limit Amount of times the function can be executed
 * @return {Function} An anonomyous function that can be called to execute the given function but only x amount of times
 */
function limitFunction(func: any, limit: number): Function {
	let amount = limit
	return (...args: any[]) => {
		if (amount > 0) {
			amount--
			return func(...args)
		} else {
			return null
		}
	}
}

/**
 * Takes a kelvin temperature and converts it to celsius.
 * @param {number} kelvin Kelvin temperature value
 * @return {number} Celsius temperature value
 */
function kelvinToCelsius(kelvin: number): number {
	return kelvin - 273.15
}

/**
 * Takes an id of a weather icon retrieves the icon and returns it.
 * @param {string} id Icon id
 * @return {string} A weather icon
 */
function getWeatherIcon(id: string): string {
	return `https://openweathermap.org/img/wn/${id}@2x.png`
}

/**
 * Takes a number and returns it with its suffix
 * @param {number} number Any number
 * @return {string} The number with its suffix
 */
function getNumbersSuffix(number: number): string {
	const numberString: string = number.toString()
	const lastDigit: string = numberString[numberString.length - 1]
	return number === 11 || number === 12 || number === 13
		? number + 'th'
		: lastDigit === '1'
		? number + 'st'
		: lastDigit === '2'
		? number + 'nd'
		: lastDigit === '3'
		? number + 'rd'
		: number + 'th'
}

export { limitFunction, kelvinToCelsius, getWeatherIcon, getNumbersSuffix }