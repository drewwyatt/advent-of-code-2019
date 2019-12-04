import { readdirSync } from 'fs'
import { join } from 'path'

type Solution = () => Promise<number>
type SolutionMap = Record<string, Solution[]>

const DAYS_DIR = join(__dirname, '../days')

const getDays = async (): Promise<SolutionMap> => {
  const dirList = readdirSync(DAYS_DIR, { withFileTypes: true })
    .filter(t => t.isDirectory())
    .map(t => t.name)

  const promises = dirList.map(async dir => {
    let part1: Solution | undefined
    let part2: Solution | undefined
    try {
      part1 = (await import(join(DAYS_DIR, dir, 'part-1'))).default
    } catch {
      /* */
    }
    try {
      part2 = (await import(join(DAYS_DIR, dir, 'part-2'))).default
    } catch {
      /* */
    }

    return [part1 ?? null, part2 ?? null]
  })

  return (await Promise.all(promises)).reduce(
    (acc, solutions, idx) => ({ ...acc, [dirList[idx]]: solutions.filter(Boolean) }),
    {},
  )
}

export default getDays
