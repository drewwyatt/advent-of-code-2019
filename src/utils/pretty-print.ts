export const day = (dayStr: string) => {
  return dayStr
    .split('-')
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ')
}
