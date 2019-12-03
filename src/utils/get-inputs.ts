import * as fs from 'fs'
import * as path from 'path'
import * as util from 'util'

const readFile = util.promisify(fs.readFile)

const getInputs = async <T>(inputFile: string, transform: (str: string) => T) =>
  transform(await readFile(path.join(__dirname, '../../inputs', inputFile), 'utf8'))

export default getInputs
