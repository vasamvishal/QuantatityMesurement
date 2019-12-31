let assert = require("assert");
let chai = require("chai");
let Length = require("../QualityMeasurement/Length");
let EnumTypes = require("../QualityMeasurement/EnumTypes");

describe("test cases for 1 inch is equal 12 feets", function () {

    it("given 1 Inch and 1 Inch should return true", function () {
        let inchObject = new Length(1.0,EnumTypes.LENGTH.INCHES);
        let inchObject1 = new Length(1.0, EnumTypes.LENGTH.INCHES);
        let resultOfInches = inchObject1.checkEquality(inchObject, inchObject1);
        assert.equal(resultOfInches,true);
    });

    it("given 1 Feet and 1 Feet should return true", function () {
        let feetObject = new Length(1.0, EnumTypes.LENGTH.FEET);
        let feetObject1 = new Length(1.0, EnumTypes.LENGTH.FEET);
        let resultOfFeets = feetObject.checkEquality(feetObject, feetObject1);
        assert.equal(resultOfFeets, true);
    });

    it("given 1 Feet and 1 Inch should return false", function () {
        let feetObject = new Length(1.0, EnumTypes.LENGTH.FEET);
        let inchObject1 = new Length(1.0, EnumTypes.LENGTH.INCHES);
        let result = feetObject.checkEquality(feetObject, inchObject1);
        assert.equal(result, false);
    });

    it("given 1 Inch and 1 Feet should return false", function () {
        let feetObject = new Length(1.0, EnumTypes.LENGTH.FEET);
        let inchObject1 = new Length(1.0, EnumTypes.LENGTH.INCHES);
        let result = inchObject1.checkEquality(feetObject, inchObject1);
        assert.equal(result, false);
    });


    it("given null and 1 Inches should return false", function () {
        let inchObject = new Length(null);
        let inchObject1 = new Length(1.0, EnumTypes.LENGTH.INCHES);
        let resultOfInches = inchObject1.checkEquality(inchObject, inchObject1);
        assert.equal(resultOfInches, false);
    });

    it("given 1 Feet and null should return false", function () {
        let feetObject = new Length(1.0, EnumTypes.LENGTH.FEET);
        let inchObject1 = new Length(null);
        let resultOfInches = feetObject.checkEquality(feetObject, inchObject1);
        assert.equal(resultOfInches, false);
    });

    it("given 1 Feet and 12 Inches should return true", function () {
        let inchObject = new Length(12.0, EnumTypes.LENGTH.INCHES);
        let feetObject = new Length(1.0, EnumTypes.LENGTH.FEET);
        let resultOfInches = feetObject.compare(inchObject);
        let resultOfFeets = feetObject.compare(feetObject);
        assert.equal(resultOfInches, resultOfFeets);
    });

    it("given 1 Feet with null values and 12 Inches should return false", function () {
        let inchObject = new Length(12.0, EnumTypes.LENGTH.INCHES);
        let feetObject = new Length(null, EnumTypes.LENGTH.FEET);
        let resultOfInches = feetObject.compare(inchObject);
        let resultOfFeets = feetObject.compare(feetObject);
        assert.notEqual(resultOfInches,resultOfFeets);
    });

    it("given 12 Inches and 1 Feet should return true", function () {
        let inchObject = new Length(12.0, EnumTypes.LENGTH.INCHES);
        let feetObject = new Length(1.0, EnumTypes.LENGTH.FEET);
        let resultOfInches = feetObject.compare(inchObject);
        let resultOfFeets = feetObject.compare(feetObject);
        assert.equal(resultOfInches,resultOfFeets);
      
    });
});

describe("test cases for 3 feet is equal 1 yard", function () {

    it("given 3 Feet and 1 Yard should return true", function () {
        let inch = new Length(3.0, EnumTypes.LENGTH.FEET);
        let yard = new Length(1.0, EnumTypes.LENGTH.YARD);
        let resultOfInches = inch.compare(inch);
        let resultOfFeets = yard.compare(yard);
        assert.equal(resultOfInches,resultOfFeets);
    });

    it("given 1 Feet and 1 Yard should return false", function () {
        let feet = new Length(1.0, EnumTypes.LENGTH.FEET);
        let yard = new Length(1.0, EnumTypes.LENGTH.YARD);
        let resultOfInches = feet.compare(feet);
        let resultOfFeets = yard.compare(yard);
        assert.notEqual(resultOfInches,resultOfFeets);
      
    });

    it("given 1 inch and 1 Yard should return false", function () {
        let inch = new Length(1.0, EnumTypes.LENGTH.INCHES);
        let yard = new Length(1.0, EnumTypes.LENGTH.YARD);
        let resultOfInches = inch.compare(inch);
        let resultOfFeets = yard.compare(yard);
        assert.notEqual(resultOfInches,resultOfFeets);
    });

    it("given 1 Yard and 36 inches should return true", function () {
        let inch = new Length(36.0, EnumTypes.LENGTH.INCHES);
        let yard = new Length(1.0, EnumTypes.LENGTH.YARD);
        let resultOfFeets = yard.compare(yard);
        let resultOfInches = inch.compare(inch);
        assert.equal(resultOfFeets,resultOfInches);
    });

    it("given 36 inches and 1 yard should return true", function () {
        let inch = new Length(36.0, EnumTypes.LENGTH.INCHES);
        let yard = new Length(1.0, EnumTypes.LENGTH.YARD);
        let resultOfInches = inch.compare(inch);
        let resultOfYards = yard.compare(yard);
        assert.equal(resultOfInches,resultOfYards);
    });

    it("given 1 Inch and 2 Inch in compareAndCalculate function should return false", function () {
        let yard = new Length(1.0, EnumTypes.LENGTH.INCHES);
        let inch = new Length(2.0, EnumTypes.LENGTH.INCHES);
        let resultOfInches = inch.compare(inch);
        let resultOfYards = yard.compare(yard);
        assert.notEqual(resultOfInches,resultOfYards);
    });

    it("given 1 Yard and 3 Feet should return true", function () {
        let yard = new Length(1.0, EnumTypes.LENGTH.YARD);
        let feet = new Length(3.0, EnumTypes.LENGTH.FEET);
        let resultOfYards = yard.compare(yard);
        let resultOfFeets = feet.compare(feet);
        assert.equal(resultOfYards,resultOfFeets);
    });

    it("given 2 Inches and 5 Centimetre should return true", function () {
        let inch = new Length(2.0, EnumTypes.LENGTH.INCHES);
        let Centimetre = new Length(5.0, EnumTypes.LENGTH.CENTIMETER);
        let resultOfInches = inch.compare(inch);
        let resultOfCentimetre = Centimetre.compare(Centimetre);
        assert.equal(resultOfInches,resultOfCentimetre);
    });

    it("given 2 Inches and 2 Inch should return 4 Inch", function () {
        let inch = new Length(2.0, EnumTypes.LENGTH.INCHES);
        let inch1 = new Length(2.0, EnumTypes.LENGTH.INCHES);
        let resultOfInch1 = inch.compare(inch);
        let resultOfInch2 = inch1.compare(inch1);
        let additionResult=inch.addition(resultOfInch1,resultOfInch2);
        assert.equal(4,additionResult);
    });

    it("given 1 Feet 2 Inch should return 14 Inch", function () {
        let feet= new Length(1.0, EnumTypes.LENGTH.FEET);
        let inch1 = new Length(2.0, EnumTypes.LENGTH.INCHES);
        let resultOfFeet = feet.compare(feet);
        let resultOfInch = inch1.compare(inch1);
        let additionResult=inch1.addition(resultOfInch,resultOfFeet);
        assert.equal(14,additionResult);
    });

    it("given 1 Feet 1 Feet should return 24 Inch", function () {
        let feet= new Length(1.0, EnumTypes.LENGTH.FEET);
        let feet1 = new Length(1.0, EnumTypes.LENGTH.FEET);
        let resultOfFeet = feet.compare(feet);
        let resultOfFeet1 = feet1.compare(feet1);
        let additionResult=feet.addition(resultOfFeet1,resultOfFeet);
        assert.equal(24,additionResult);
    });

    it("given 2 Inch and 2.5 centimetre should return 3 Inch", function () {
        let inch= new Length(2.0, EnumTypes.LENGTH.INCHES);
        let centimetre = new Length(2.5, EnumTypes.LENGTH.CENTIMETER);
        let resultOfFeet = inch.compare(inch);
        let resultOfFeet1 = centimetre.compare(centimetre);
        let additionResult=inch.addition(resultOfFeet1,resultOfFeet);
        assert.equal(3,additionResult);
    });
});

    describe("test cases for volume in gallons ", function () {

    it("given 1 gallon should return 3.78 litres", function () {
        let gallon= new Length(1.0, EnumTypes.VOLUME.GALLON);
        let litres = new Length(3.78, EnumTypes.VOLUME.LITRES);
        let resultOfGallon = gallon.compare(gallon);
        let resultOfLitres = litres.compare(litres);
        assert.equal(resultOfGallon,resultOfLitres);
    });

});

