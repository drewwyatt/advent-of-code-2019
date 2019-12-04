/**
 * --- Day 4: Secure Container ---
 *
 * You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.
 *
 * However, they do remember a few key facts about the password:
 *
 *     It is a six-digit number.
 *     The value is within the range given in your puzzle input.
 *     Two adjacent digits are the same (like 22 in 122345).
 *     Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
 *
 * Other than the range rule, the following are true:
 *
 *     111111 meets these criteria (double 11, never decreases).
 *     223450 does not meet these criteria (decreasing pair of digits 50).
 *     123789 does not meet these criteria (no double).
 *
 * How many different passwords within the range given in your puzzle input meet these criteria?
 *
 * Your puzzle input is 248345-746315.
 */

import { allPass, ascend, compose, either, equals, identity, range, sort } from 'ramda'

type Validator = (n: string[]) => boolean

const hasDuplicateNeighbor: Validator = n =>
  n.reduce(
    (acc, dig, idx) => acc || either(equals(n[idx - 1]), equals(n[idx + 1]))(dig),
    false as boolean,
  )

const isAscendingOrder: Validator = n => equals(n, sort(ascend(identity), n))

const validators = [hasDuplicateNeighbor, isAscendingOrder]

const toDigits = (n: number) => n.toString().split('')

export const isPasswordCandidate = compose(allPass(validators), toDigits)

const solution = async () => range(248345, 746315).filter(isPasswordCandidate).length
export default solution
