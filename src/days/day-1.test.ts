import solution from './day-1'

describe('day 1', () => {
  test('For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.', () =>
    expect(solution(12)).toEqual(2))
  test('For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.', () =>
    expect(solution(14)).toEqual(2))
  test('For a mass of 1969, the fuel required is 654.', () =>
    expect(solution(1969)).toEqual(654))
  test('For a mass of 100756, the fuel required is 33583.', () =>
    expect(solution(100756)).toEqual(33583))
})
