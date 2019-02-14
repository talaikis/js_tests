const expect = require('chai').expect

describe('clone object', function () {
  it('should clone an object', function () {
    const expected = { name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating'] }
    let obj = {}

    // solution
    obj = Object.assign({}, expected)

    expect(obj).to.be.deep.equal(expected)
    // this shouldn't change expected object:
    obj.name = 'New name'
    expect(obj).to.not.be.deep.equal(expected)
  })
})
