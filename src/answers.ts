import solutions from './days'

const getAnswers = async () => {
  const days = Object.keys(solutions)
  const answers = await Promise.all(Object.values(solutions).map(fn => fn()))
  answers.forEach((answer, idx) => {
    console.log(days[idx], answer)
  })
}

getAnswers()
