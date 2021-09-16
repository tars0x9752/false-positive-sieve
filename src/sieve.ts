import { createIntlSegmenterPolyfill } from 'intl-segmenter-polyfill'
import fs from 'fs'
import { createMap } from './create-map'
import { SuspiciousRecord, TargetRule } from './scheme'

const breakIteratorCJAWasmBuffer = fs.readFileSync(
  'node_modules/intl-segmenter-polyfill/dist/break_iterator_cja.wasm'
)
const breakIteratorCJAWasmBinary = new Uint8Array(breakIteratorCJAWasmBuffer)

export const sieve = async (susList: SuspiciousRecord[]): Promise<SuspiciousRecord[]> => {
  const IntlSegmenter = await createIntlSegmenterPolyfill(breakIteratorCJAWasmBinary)
  const segmenter = new IntlSegmenter('ja', { granularity: 'word' })

  const hasSuspiciousData = ({ line, offender }: SuspiciousRecord) => {
    const segments = segmenter.segment(line).map((v) => v.segment)

    const segmentsSet = new Set(segments)

    return segmentsSet.has(offender)
  }

  const suspiciousRecordsMap = createMap(susList, 'line')

  return Array.from(suspiciousRecordsMap.entries())
    .filter(([, record]) => {
      if (record.rule !== TargetRule) {
        return true
      }

      return hasSuspiciousData(record)
    })
    .map(([, record]) => record)
}
