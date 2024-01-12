import { expect } from 'chai'

import { getMiddle } from './middle.js'
import { findCompromised } from './compromised.js'

describe('unit tests', () => {
  it('middle', () => {
    expect(getMiddle('')).to.equal('')
    expect(getMiddle('test')).to.equal('es')
    expect(getMiddle('testing')).to.equal('t')
    expect(getMiddle('middle')).to.equal('dd')
    expect(getMiddle('A')).to.equal('A')
  })

  it('compromised', () => {
    expect(findCompromised([2, 4, 0, 100, 4, 11, 2602, 36, 22, 2, 4, 10, -20, -10300])).to.equal(11)
    expect(findCompromised([160, 3, 1719, 19, 11, 13, -21, -1, 20001])).to.equal(160)
  })
})
