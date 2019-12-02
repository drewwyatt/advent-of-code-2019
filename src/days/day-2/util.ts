import getRawInputs from '../../utils/get-inputs'

const toParsedInputs = (rawInputs: string) =>
  rawInputs
    .split(',')
    .map(i => Number.parseInt(i.trim()))
    .filter(Number.isInteger)

export const getInputs = async () => getRawInputs('day-2/inputs.txt', toParsedInputs)
