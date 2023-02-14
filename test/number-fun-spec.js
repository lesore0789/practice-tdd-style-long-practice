const {expect} = require('chai');

const { returnsThree, reciprocal } = require('../problems/number-fun');

describe("returnsThree", () => {
  let output = returnsThree()
  it('Should return 3', () => {
    expect(output).to.equal(3)
  })
});

describe("reciprocal", () => {
  let rec1 = reciprocal(5);
  let rec2 = reciprocal(8);
  it('Should return reciprocal of the input', () => {
    expect(rec1).to.equal(1 / 5);
    expect(rec2).to.equal(1 / 8);
  })

  let badInput = () => {reciprocal(-17)}
  it('Should only take inputs between 1 and 1,000,000', () => {
    expect(badInput).to.throw(TypeError, "Input needs to be between 1 and 1,000,000")
  })
});
