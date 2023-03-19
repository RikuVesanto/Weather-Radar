import { getWeatherIcon } from '../utils/general-functions'

describe('Function that returns a link to the icon based on the given id', () => {
	test('It should return the link for the icon of the id', () => {
		expect(getWeatherIcon('04d')).toEqual(
			'https://openweathermap.org/img/wn/04d@2x.png'
		)
	})
})
