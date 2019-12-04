import { distanceToClosestIntersection } from './part-1'
import { fewestCombinedStepsFor } from './part-2'

describe('day-3', () => {
  describe('part-1', () => {
    test('These wires cross at two locations (marked X), but the lower-left one is closer to the central port: its distance is 3 + 3 = 6.', () =>
      expect(
        distanceToClosestIntersection(['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']),
      ).toEqual(6))

    test('input 2', () =>
      expect(
        distanceToClosestIntersection(
          ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
          ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'],
        ),
      ).toEqual(159))

    test('input 3', () =>
      expect(
        distanceToClosestIntersection(
          ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
          ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'],
        ),
      ).toEqual(135))
  })

  describe('part-2', () => {
    test('input-1', () =>
      expect(
        fewestCombinedStepsFor(
          ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
          ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'],
        ),
      ).toEqual(610))

    test('input-2', () =>
      expect(
        fewestCombinedStepsFor(
          ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
          ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'],
        ),
      ).toEqual(410))
  })
})
