const chai = require("chai");
const expect = chai.expect;

const reverseString = require('../problems/reverse-string')

describe("reverseString", () => {
  let string = "fun";

  it("Should reverse string input", () => {
    expect(reverseString(string)).to.equal("nuf");
  });

  let badInput = () => {reverseString(33)}

  it('Should throw an error if input is not a string'), () => {
    expect(badInput).to.throw(TypeError, "Input needs to be a string")
  }
})
