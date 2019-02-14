const expect = require('chai').expect

describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    const mod = new Module()
    let request

    request = function (callback) {
      return callback()
    }

    function Module () {
      this.foo = 'bar'
    }

    Module.prototype.method = function () {
      // solution this -> mod
      return mod.foo
    }

    Module.prototype.req = function () {
      return request(mod.method)
    }

    expect(mod.req()).to.be.deep.equal('bar')
  })
})
