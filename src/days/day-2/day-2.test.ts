import { intCode } from './part-1'
import { findNounAndVerbFor } from './part-2'
import { getInputs } from './util'

describe('day-2', () => {
  describe('part-1', () => {
    it('1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2).', () =>
      expect(intCode([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]))
    it('2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6).', () =>
      expect(intCode([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]))
    it('2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801).', () =>
      expect(intCode([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]))
    it('1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99.', () =>
      expect(intCode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([
        30,
        1,
        1,
        4,
        2,
        5,
        6,
        0,
        99,
      ]))
  })

  describe('part-2', () => {
    let input: number[]
    beforeAll(async () => {
      input = await getInputs()
    })

    it('finds the inputs for part-1', () =>
      expect(findNounAndVerbFor(input, 6087827)).toEqual([12, 2]))
  })
})
