export const toParsedInputs = (rawInputs: string) =>
  rawInputs
    .split('\n')
    .map(i => Number.parseInt(i.trim()))
    .filter(Number.isInteger)
