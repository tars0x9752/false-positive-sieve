import { sieve } from './sieve'
import arg from 'arg'
import fs from 'fs'

const args = arg({
  '--json': String,

  // Aliases
  '-j': '--json',
})

const handleArgs = () => {
  if (args['--json']) {
    // if --json provided, then read from json file
    const inputFilePath = args['--json']

    if (!inputFilePath) {
      throw new Error('Input file path is required.')
    }

    return JSON.parse(fs.readFileSync(inputFilePath, 'utf8'))
  }

  // otherwise try to read from stdin
  return JSON.parse(fs.readFileSync('/dev/stdin', 'utf8'))
}

const main = async () => {
  const data = handleArgs()

  const sieved = await sieve(data)

  console.log(JSON.stringify(sieved, null, 2))
}

main()
