import getRawInputs from '../../utils/get-inputs'

const toParsedInputs = (rawInputs: string) =>
  rawInputs
    .split('\n')
    .map(i =>
      i
        .split(',')
        .map(j => j.trim())
        .filter(Boolean),
    )
    .filter(Boolean)

export const getInputs = async () => getRawInputs('day-3.txt', toParsedInputs)
