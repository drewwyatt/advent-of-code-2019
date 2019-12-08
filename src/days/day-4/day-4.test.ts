import { isValidForPart1 } from './part-1'
import { isValidForPart2 } from './part-2'

describe('day-4', () => {
  const toValidateCandidacy = (isValid: (n: number) => boolean) => (
    n: number,
    shouldPass: boolean,
  ) => () => expect(isValid(n)).toEqual(shouldPass)
  let candidacyOf: ReturnType<typeof toValidateCandidacy>

  describe('part-1', () => {
    candidacyOf = toValidateCandidacy(isValidForPart1)
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

  describe('part-2', () => {
    candidacyOf = toValidateCandidacy(isValidForPart2)

    test(
      '112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.',
      candidacyOf(112233, true),
    )
    test(
      '123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).',
      candidacyOf(123444, false),
    )
    test(
      '111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).',
      candidacyOf(111122, true),
    )
  })
})
