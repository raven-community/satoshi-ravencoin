var should = require('chai').should();
var sb = require('../index.js');

describe('#toRavencoin', function() {
  it('converts simple integer amounts', function() {
    sb.toRavencoin(100000000).should.equal(1);
    sb.toRavencoin(123456789012345).should.equal(1234567.89012345);
  });
  it('converts simple string amounts', function() {
    sb.toRavencoin('100000000').should.equal(1);
    sb.toRavencoin('123456789012345').should.equal(1234567.89012345);
  });

  it('converts to Ravencoin, not to Satoshi', function() {
    sb.toRavencoin(98765).should.not.equal(9876500000000);
  });

  it('converts and handles corner case rounding', function() {
    sb.toRavencoin(46).should.equal(.00000046);
  });

  it('handles TypeError input', function() {
    sb.toRavencoin.bind(this, true).should.throw('toRavencoin must be called on a number or string');
    sb.toRavencoin.bind(this, 1.1).should.throw('toRavencoin must be called on a whole number or string format whole number');
  });
});

describe('#toSatoshi', function() {
  it('converts simple integer amounts', function() {
    sb.toSatoshi(0.00000001).should.equal(1);
    sb.toSatoshi(98765).should.equal(9876500000000);
  });
  it('converts simple string amounts', function() {
    sb.toSatoshi('0.00000001').should.equal(1);
    sb.toSatoshi('98765').should.equal(9876500000000);
  });

  it('converts to Satoshi, not to Ravencoin', function() {
    sb.toSatoshi(123456789012345).should.not.equal(1234567.89012345);
  });

  it('converts and handles corner case rounding', function() {
    sb.toSatoshi(4.6).should.equal(460000000);
  });

  it('handles TypeError input', function() {
    sb.toSatoshi.bind(this, true).should.throw('toSatoshi must be called on a number or string');
  });
});
