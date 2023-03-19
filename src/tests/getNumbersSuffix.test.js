import { getNumbersSuffix } from '../utils/general-functions'

describe('Function for getting the appropriate suffix for a number', () => {
	test('11 is a special case so it should return 11th', () => {
		const input = 11
		expect(getNumbersSuffix(input)).toEqual(input + 'th')
	})
	test('12 is a special case so it should return 12th', () => {
		const input = 12
		expect(getNumbersSuffix(input)).toEqual(input + 'th')
	})
	test('13 is a special case so it should return 13th', () => {
		const input = 13
		expect(getNumbersSuffix(input)).toEqual(input + 'th')
	})
	test('113 ends in 13 so it should return 113th', () => {
		const input = 113
		expect(getNumbersSuffix(input)).toEqual(input + 'th')
	})
	test('121 ends in 1 so it should return 121st', () => {
		const input = 121
		expect(getNumbersSuffix(input)).toEqual(input + 'st')
	})
	test('122 ends in 2 so it should return 122nd', () => {
		const input = 122
		expect(getNumbersSuffix(input)).toEqual(input + 'nd')
	})
	test('1223 ends in 3 so it should return 123rd', () => {
		const input = 123
		expect(getNumbersSuffix(input)).toEqual(input + 'rd')
	})
	test('0 doesnt have a suffix so it should throw a RangeError', () => {
		const input = 0
		expect(() => {
			getNumbersSuffix(input)
		}).toThrow(RangeError)
	})
	test('Negative numbers dont have a suffix so it should throw a RangeError', () => {
		const input = -1
		expect(() => {
			getNumbersSuffix(input)
		}).toThrow(RangeError)
	})
})
