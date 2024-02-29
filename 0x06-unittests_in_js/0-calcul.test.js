const assert = require('assert');
const calculateNumber = require("./0-calcul.js");
describe('calculateNumber', function () {
  it('should return 5 when added', function () {
    assert.equal(calculateNumber(2, 3), 5);
  });
  it('should return 5 also', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return 5 also', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 also', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
