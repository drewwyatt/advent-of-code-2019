export const toParsedInputs = (rawInputs: string) => {
  const inputs = rawInputs
    .split(',')
    .map(i => Number.parseInt(i.trim()))
    .filter(Number.isInteger)

  // replace position 1 with the value 12 and replace position 2 with the value 2
  inputs[1] = 12
  inputs[2] = 2
  return inputs
}
