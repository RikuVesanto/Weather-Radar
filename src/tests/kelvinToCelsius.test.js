import { kelvinToCelsius } from '../utils/general-functions'

describe('Kelvin to celsius function', () => {
	test('It should return the given value reduced by 273.15', () => {
		const input = 280
		const output = 6.85
		expect(kelvinToCelsius(input)).toEqual(output)
	})
})
