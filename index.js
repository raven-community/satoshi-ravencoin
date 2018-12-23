/**
 * @module satoshi-ravencoin
 */

var Big = require('big.js');

// @private
var conversion = 100000000;

// es6 polyfill
if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num === 'number' && num % 1 === 0;
  }
}

// @private
function toNumber(notNum) {
  return Number(notNum);
}

module.exports = {

  /**
   * Convert Satoshi to Ravencoin
   * @param {number|string} satoshi Amount of Satoshi to convert. Must be a whole number
   * @throws {TypeError} Thrown if input is not a number or string
   * @throws {TypeError} Thrown if input is not a whole number or string format whole number
   * @returns {number}
   */
  toRavencoin: function(satoshi) {
    //validate arg
    var satoshiType = typeof satoshi;
    if (satoshiType === 'string') {
      satoshi = toNumber(satoshi);
      satoshiType = 'number';
    }
    if (satoshiType !== 'number'){
      throw new TypeError('toRavencoin must be called on a number or string, got ' + satoshiType);
    }
    if (!Number.isInteger(satoshi)) {
      throw new TypeError('toRavencoin must be called on a whole number or string format whole number');
    }

    var bigSatoshi = new Big(satoshi);
    return Number(bigSatoshi.div(conversion));
  },

  /**
   * Convert Ravencoin to Satoshi
   * @param {number|string} ravencoin Amount of Ravencoin to convert
   * @throws {TypeError} Thrown if input is not a number or string
   * @returns {number}
   */
  toSatoshi: function(ravencoin) {
    //validate arg
    var ravencoinType = typeof ravencoin;
    if (ravencoinType === 'string') {
      ravencoin = toNumber(ravencoin);
      ravencoinType = 'number';
    }
    if (ravencoinType !== 'number'){
      throw new TypeError('toSatoshi must be called on a number or string, got ' + ravencoinType);
    }

    var bigRavencoin = new Big(ravencoin);
    return Number(bigRavencoin.times(conversion));
  }

};
