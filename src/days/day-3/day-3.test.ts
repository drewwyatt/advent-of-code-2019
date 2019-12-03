import { distanceToClosestIntersection } from './part-1'

describe('day-3', () => {
  describe('part-1', () => {
    test('These wires cross at two locations (marked X), but the lower-left one is closer to the central port: its distance is 3 + 3 = 6.', () =>
      expect(
        distanceToClosestIntersection(['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']),
      ).toEqual(6))
  })
})
