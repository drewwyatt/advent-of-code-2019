import getSolutions from './utils/get-solutions'
import * as prettyPrint from './utils/pretty-print'

const getAnswers = async () => {
  const solutions = await getSolutions()
  const days = Object.keys(solutions)
  const answers: any = await Promise.all(
    Object.values(solutions).map(fns => Promise.all(fns.map(f => f()))),
  ).catch(e => console.error('e', e))
  ;(answers as [number, number][]).forEach((answers, idx) => {
    console.log(`📅 ${prettyPrint.day(days[idx])}:`)
    if (answers.length) {
      answers.forEach((a: any, i: any) => console.log(`  [Part ${i + 1}]: ${a}`))
    } else {
      console.log('  (No Solutions)')
    }
  })
}

getAnswers()
