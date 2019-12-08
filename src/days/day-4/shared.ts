import { allPass, compose } from 'ramda'
import { Validator } from './validators'

const toDigits = (n: number) => n.toString().split('')

export const toIsValid = (validators: Validator[]) =>
  compose(allPass(validators), toDigits)
