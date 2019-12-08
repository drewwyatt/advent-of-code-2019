import { ascend, either, equals, identity, sort } from 'ramda'

export type Validator = (n: string[]) => boolean

export const hasDuplicateNeighbor: Validator = n =>
  n.reduce(
    (acc, dig, idx) => acc || either(equals(n[idx - 1]), equals(n[idx + 1]))(dig),
    false as boolean,
  )

export const isAscendingOrder: Validator = n => equals(n, sort(ascend(identity), n))
