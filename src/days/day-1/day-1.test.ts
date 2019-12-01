import { calculateRequiredFuel } from './part-1'
import { calculateRequiredFuelConsideringFuel } from './part-2'

describe('day 1', () => {
  describe('part 1', () => {
    test('For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.', () =>
      expect(calculateRequiredFuel(12)).toEqual(2))
    test('For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.', () =>
      expect(calculateRequiredFuel(14)).toEqual(2))
    test('For a mass of 1969, the fuel required is 654.', () =>
      expect(calculateRequiredFuel(1969)).toEqual(654))
    test('For a mass of 100756, the fuel required is 33583.', () =>
      expect(calculateRequiredFuel(100756)).toEqual(33583))
  })

  describe('part 2', () => {
    test('A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.', () =>
      expect(calculateRequiredFuelConsideringFuel(12)).toEqual(2))
    test('At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.', () =>
      expect(calculateRequiredFuelConsideringFuel(1969)).toEqual(966))
    test('The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.', () =>
      expect(calculateRequiredFuelConsideringFuel(100756)).toEqual(50346))
  })
})
