import { SuspiciousRecord } from './scheme'

export const createMap = <T extends keyof SuspiciousRecord>(
  recordList: SuspiciousRecord[],
  uniqKey: T
): Map<T, SuspiciousRecord> => {
  const keyValueArr = recordList.map((record) => {
    const key = record[uniqKey]
    const value = record

    return [key, value] as [T, SuspiciousRecord]
  })

  return new Map(keyValueArr)
}
