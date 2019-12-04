import { pick } from 'ramda'
import getSolutions from './utils/get-solutions'
import * as prettyPrint from './utils/pretty-print'

const [dayInput, partInput] = process.argv
  .slice(2)
  .map(s => Number.parseInt(s.trim()))
  .filter(Number.isInteger)

const selectedDayOrAll = (key: string) => {
  if (Number.isInteger(dayInput!)) {
    const [, d] = key.split('-').map(s => Number.parseInt(s.trim()))
    return d === dayInput
  }

  return true
}

const selectedPartOrAll = (_: any, idx: number) => {
  if (Number.isInteger(partInput!)) {
    return idx + 1 === partInput
  }

  return true
}

const getAnswers = async () => {
  const allSolutions = await getSolutions()
  const days = Object.keys(allSolutions).filter(selectedDayOrAll)
  const solutions = pick(days, allSolutions)
  const answers: any = await Promise.all(
    Object.values(solutions).map(fns =>
      Promise.all(fns.filter(selectedPartOrAll).map(f => f())),
    ),
  ).catch(e => {
    console.error('e', e)
    process.exit(1)
  })
  ;(answers as [number, number][]).forEach((answers, idx) => {
    console.log(`📅 ${prettyPrint.day(days[idx])}:`)
    if (answers.length) {
      answers.forEach((a: any, i: any) =>
        console.log(`  [Part ${partInput ?? i + 1}]: ${a}`),
      )
    } else {
      console.log('  (No Solutions)')
    }
  })
}

getAnswers()
