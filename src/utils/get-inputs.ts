import * as fs from 'fs'
import * as path from 'path'
import * as util from 'util'

const readFile = util.promisify(fs.readFile)

const getInputs = async (inputFile: string) => {
  const rawInputs = await readFile(path.join(__dirname, '../days', inputFile), 'utf8')
  return rawInputs
    .split('\n')
    .map(i => Number.parseInt(i.trim()))
    .filter(Number.isInteger)
}

export default getInputs
