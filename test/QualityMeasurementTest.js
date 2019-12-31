let assert = require("assert");
let chai = require("chai");
let Length = require("../QualityMeasurement/Length");
let EnumTypes = require("../QualityMeasurement/EnumTypes");
describe("test cases for 1 inch is equal 12 feets", function () {
    it("given 1 Inch and 1 Inch should return true", function () {
        let inchObject = new Length(1.0, EnumTypes.INCHES);
        let inchObject1 = new Length(1.0, EnumTypes.INCHES);
        let resultOfInches = inchObject1.checkEquality(inchObject, inchObject1);
        assert.equal(resultOfInches, true);
    });

    it("given 1 Feet and 1 Feet should return true", function () {
        let feetObject = new Length(1.0, EnumTypes.FEET);
        let feetObject1 = new Length(1.0, EnumTypes.FEET);
        let resultOfFeets = feetObject.checkEquality(feetObject, feetObject1);
        assert.equal(resultOfFeets, true);
    });

    it("given 1 Feet and 1 Inch should return false", function () {
        let feetObject = new Length(1.0, EnumTypes.FEET);
        let inchObject1 = new Length(1.0, EnumTypes.INCHES);
        let result = feetObject.checkEquality(feetObject, inchObject1);
        assert.equal(result, false);
    });

    it("given 1 Inch and 1 Feet should return false", function () {
        let feetObject = new Length(1.0, EnumTypes.FEET);
        let inchObject1 = new Length(1.0, EnumTypes.INCHES);
        let result = inchObject1.checkEquality(feetObject, inchObject1);
        assert.equal(result, false);
    });


    it("given null and 1 Inches should return false", function () {
        let inchObject = new Length(null);
        let inchObject1 = new Length(1.0, EnumTypes.INCHES);
        let resultOfInches = inchObject1.checkEquality(inchObject, inchObject1);
        assert.equal(resultOfInches, false);
    });

    it("given 1 Feet and null should return false", function () {
        let feetObject = new Length(1.0, EnumTypes.FEET);
        let inchObject1 = new Length(null);
        let resultOfInches = feetObject.checkEquality(feetObject, inchObject1);
        assert.equal(resultOfInches, false);
    });

    it("given 1 Inch and 12 Feet should return true", function () {
        let inchObject = new Length(1.0, EnumTypes.INCHES);
        let feetObject = new Length(12.0, EnumTypes.FEET);
        let resultOfInches = feetObject.compareAndCalculate(inchObject, feetObject);
        assert.equal(resultOfInches, true);
    });

    it("given 1 Inch with null values and 12 Feet should return false", function () {
        let inchObject = new Length(null, EnumTypes.INCHES);
        let feetObject = new Length(12.0, EnumTypes.FEET);
        let resultOfInches = feetObject.compareAndCalculate(inchObject, feetObject);
        assert.equal(resultOfInches, false);
    });

    it("given 12 Feet and 1 Inch should return true", function () {
        let inchObject = new Length(1.0, EnumTypes.INCHES);
        let feetObject = new Length(12.0, EnumTypes.FEET);
        let resultOfInches = feetObject.compareAndCalculate(feetObject, inchObject);
        assert.equal(resultOfInches, true);
    });
});
describe("test cases for 3 feet is equal 1 yard", function () {
    it("given 3 Feet and 1 Yard should return true", function () {
        let inch = new Length(3.0, EnumTypes.FEET);
        let yard = new Length(1.0, EnumTypes.YARD);
        let result = inch.compareAndCalculate(inch,yard);
        assert.equal(result, true);
    });
});

