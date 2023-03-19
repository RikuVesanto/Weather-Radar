import { limitFunction } from '../utils/general-functions'

describe('Function that returns an anonymous function that can execute the given function a limited amount of time', () => {
	const num = (a) => a
	test('1 call doesnt exceed the call limit so it should return 1', () => {
		const limitToTwo = limitFunction(num, 2)
		expect(limitToTwo(1)).toEqual(1)
	})

	test('2 calls hits the call limit but the function should still execute twice and return 2', () => {
		const limitToTwo = limitFunction(num, 2)
		expect(limitToTwo(1) + limitToTwo(1)).toEqual(2)
	})

	test('With a limit of 2 even with 3 calls the function should only execute twice and return 2', () => {
		const limitToTwo = limitFunction(num, 2)
		expect(limitToTwo(1) + limitToTwo(1) + limitToTwo(1)).toEqual(2)
	})
})
