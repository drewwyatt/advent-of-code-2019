import day1Part1 from './day-1/part-1'
import day1Part2 from './day-1/part-2'

const solutions = { day1Part1, day1Part2 } as Record<string, () => Promise<number>>
export default solutions
