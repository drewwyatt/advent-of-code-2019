import getSolutions from './utils/get-solutions'
import * as prettyPrint from './utils/pretty-print'

const getAnswers = async () => {
  const solutions = await getSolutions()
  const days = Object.keys(solutions)
  const answers = await Promise.all(
    Object.values(solutions).map(fns => Promise.all(fns.map(f => f()))),
  )
  answers.forEach((answers, idx) => {
    console.log(`📅 ${prettyPrint.day(days[idx])}:`)
    if (answers.length) {
      answers.forEach((a, i) => console.log(`  [Part ${i + 1}]: ${a}`))
    } else {
      console.log('  (No Solutions)')
    }
  })
}

getAnswers()
