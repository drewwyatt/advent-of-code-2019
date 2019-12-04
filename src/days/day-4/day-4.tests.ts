import { isPasswordCandidate } from './part-1'

describe('day-4', () => {
  const candidacyOf = (n: number, shouldPass: boolean) => () =>
    expect(isPasswordCandidate(n)).toEqual(shouldPass)

  describe('part-1', () => {
    test(
      '111111 meets these criteria (double 11, never decreases)',
      candidacyOf(111111, true),
    )
    test(
      '223450 does not meet these criteria (decreasing pair of digits 50)',
      candidacyOf(223450, false),
    )
    test('123789 does not meet these criteria (no double)', candidacyOf(123789, false))
  })
})
