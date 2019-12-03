// import solutions from './days'
import getSolutions from './utils/get-solutions'

const getAnswers = async () => {
  const solutions = await getSolutions()
  const days = Object.keys(solutions)
  const answers = await Promise.all(
    Object.values(solutions).map(fns => Promise.all(fns.map(f => f()))),
  )
  answers.forEach((answers, idx) => {
    console.log(`📅 ${days[idx]}:`)
    answers.forEach((a, i) => console.log(`  [Part ${i + 1}]: ${a}`))
  })
}

getAnswers()
