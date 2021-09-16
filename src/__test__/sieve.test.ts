import { sieve } from '../sieve'
import dummyFixture from '../dummy.json'

describe('sieve', () => {
  it('remove false positives', async () => {
    const expected = [
      {
        line: '// ユーザーは関さんです。',
        offender: '関',
        rule: 'Family name',
      },
      {
        line: '// ユーザーは田中さんです。',
        offender: '田中',
        rule: 'Family name',
      },
    ]

    const res = await sieve(dummyFixture)

    expect(res).toStrictEqual(expected)
  })
})
