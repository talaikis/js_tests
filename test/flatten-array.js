const expect = require('chai').expect

describe('flatten array', function () {
  it('should flatten an array', function () {
    let arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]]
    const expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5]
    // solution:
    arr = arr.flat().flat().flat().sort()

    expect(arr).to.deep.equal(expected)
  })
})
