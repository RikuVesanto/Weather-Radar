import { kelvinToCelsius } from '../utils/general-functions'

describe('Kelvin to celsius function', () => {
	test('It should return the given value reduced by 273.15', () => {
		expect(kelvinToCelsius(280)).toEqual(6.85)
	})
	test('It should throw a RangeError', () => {
		expect(() => {
			kelvinToCelsius(-1)
		}).toThrow(RangeError)
	})
})
