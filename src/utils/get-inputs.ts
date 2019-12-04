import * as fs from 'fs'
import * as path from 'path'
import * as util from 'util'

const readFile = util.promisify(fs.readFile)

const PROMISE_MAP: Record<string, Promise<string>> = {}

const getInputs = async <T>(inputFile: string, transform: (str: string) => T) => {
  if (!PROMISE_MAP[inputFile]) {
    PROMISE_MAP[inputFile] = readFile(
      path.join(__dirname, '../../inputs', inputFile),
      'utf8',
    )
  }

  const file = await PROMISE_MAP[inputFile]
  return transform(file)
}

export default getInputs
