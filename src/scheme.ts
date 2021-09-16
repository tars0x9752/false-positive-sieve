export const TargetRule = 'Family name'

export type SuspiciousRecord = Record<string, unknown> & {
  line: string
  offender: string
  rule: typeof TargetRule | string
}
