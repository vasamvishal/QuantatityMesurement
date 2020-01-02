let assert = require("assert");
let chai = require("chai");
let Quantity = require("../QualityMeasurement/Quantity");
let EnumTypes = require("../QualityMeasurement/EnumTypes");

describe("test cases for 1 inch is equal 12 feets", () => {

    it("given 1 Inch and 1 Inch should return true", () => {
        let inchObject = new Quantity(1.0, EnumTypes.LENGTH.INCHES);
        let inchObject1 = new Quantity(1.0, EnumTypes.LENGTH.INCHES);
        let result = inchObject1.checkEquality(inchObject, inchObject1);
        assert.equal(result, true);
    });

    it("given 1 Feet and 1 Feet should return true", () => {
        let feetObject = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let feetObject1 = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let result = feetObject.checkEquality(feetObject, feetObject1);
        assert.equal(result, true);
    });

    it("given 1 Feet and 1 Inch should return false", () => {
        let feetObject = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let inchObject1 = new Quantity(1.0, EnumTypes.LENGTH.INCHES);
        let result = feetObject.checkEquality(feetObject, inchObject1);
        assert.equal(result, false);
    });

    it("given 1 Inch and 1 Feet should return false", () => {
        let feetObject = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let inchObject1 = new Quantity(1.0, EnumTypes.LENGTH.INCHES);
        let result = inchObject1.checkEquality(feetObject, inchObject1);
        assert.equal(result, false);
    });


    it("given null and 1 Inches should return false", () => {
        let inchObject = new Quantity(null);
        let inchObject1 = new Quantity(1.0, EnumTypes.LENGTH.INCHES);
        let result = inchObject1.checkEquality(inchObject, inchObject1);
        assert.equal(result, false);
    });

    it("given 1 Feet and null should return false", () => {
        let feetObject = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let inchObject1 = new Quantity(null);
        let result = feetObject.checkEquality(feetObject, inchObject1);
        assert.equal(result, false);
    });

    it("given 1 Feet and 12 Inches should return true", () => {
        let inchObject = new Quantity(12.0, EnumTypes.LENGTH.INCHES);
        let feetObject = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let result = feetObject.compare(feetObject, inchObject);
        assert.equal(result, true);
    });

    it("given 1 Feet with null values and 12 Inches should return false", () => {
        let inchObject = new Quantity(12.0, EnumTypes.LENGTH.INCHES);
        let feetObject = new Quantity(null, EnumTypes.LENGTH.FEET);
        let result = feetObject.compare(inchObject, feetObject);
        assert.equal(result, false);
    });

    it("given 12 Inches and 1 Feet should return true", () => {
        let inchObject = new Quantity(12.0, EnumTypes.LENGTH.INCHES);
        let feetObject = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let result = feetObject.compare(inchObject, feetObject);
        assert.equal(result, true);

    });
});

describe("test cases for 3 feet is equal 1 yard", () => {

    it("given 3 Feet and 1 Yard should return true", () => {
        let inch = new Quantity(3.0, EnumTypes.LENGTH.FEET);
        let yard = new Quantity(1.0, EnumTypes.LENGTH.YARD);
        let result = inch.compare(inch, yard);
        assert.equal(result, true);
    });

    it("given 1 Feet and 1 Yard should return false", () => {
        let feet = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let yard = new Quantity(1.0, EnumTypes.LENGTH.YARD);
        let result = feet.compare(feet, yard);
        assert.equal(result, false);

    });

    it("given 1 inch and 1 Yard should return false", () => {
        let inch = new Quantity(1.0, EnumTypes.LENGTH.INCHES);
        let yard = new Quantity(1.0, EnumTypes.LENGTH.YARD);
        let result = yard.compare(yard, inch);
        assert.equal(result, false);
    });

    it("given 1 Yard and 36 inches should return true", () => {
        let inch = new Quantity(36.0, EnumTypes.LENGTH.INCHES);
        let yard = new Quantity(1.0, EnumTypes.LENGTH.YARD);
        let result = yard.compare(yard, inch);
        assert.equal(result, true);
    });

    it("given 36 inches and 1 yard should return true", () => {
        let inch = new Quantity(36.0, EnumTypes.LENGTH.INCHES);
        let yard = new Quantity(1.0, EnumTypes.LENGTH.YARD);
        let result = yard.compare(inch, yard);
        assert.equal(result, true);
    });

    it("given 1 Inch and 2 Inch in compareAndCalculate function should return false", () => {
        let yard = new Quantity(1.0, EnumTypes.LENGTH.INCHES);
        let inch = new Quantity(2.0, EnumTypes.LENGTH.INCHES);
        let result = inch.compare(inch, yard);
        assert.equal(result, false);
    });

    it("given 1 Yard and 3 Feet should return true", () => {
        let yard = new Quantity(1.0, EnumTypes.LENGTH.YARD);
        let feet = new Quantity(3.0, EnumTypes.LENGTH.FEET);
        let result = yard.compare(yard, feet);
        assert.equal(result, true);
    });

    it("given 2 Inches and 5 Centimetre should return true", () => {
        let inch = new Quantity(2.0, EnumTypes.LENGTH.INCHES);
        let Centimetre = new Quantity(5.0, EnumTypes.LENGTH.CENTIMETER);
        let result = inch.compare(inch, Centimetre);
        assert.equal(result, true);
    });

    it("given 2 Inches and 2 Inch should return 4 Inch", () => {
        let inch = new Quantity(2.0, EnumTypes.LENGTH.INCHES);
        let inch1 = new Quantity(2.0, EnumTypes.LENGTH.INCHES);
        let additionResult = inch.addition(inch, inch1);
        assert.equal(4, additionResult);
    });

    it("given 2 Inches and 2 Litres should return 4 Inch", () => {
        let inch = new Quantity(2.0, EnumTypes.LENGTH.INCHES);
        let inch1 = new Quantity(2.0, EnumTypes.VOLUME.LITRES);
        let additionResult = inch.addition(inch, inch1);
        assert.equal(additionResult, false);
    });

    it("given 1 Feet 2 Inch should return 14 Inch", () => {
        let feet = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let inch1 = new Quantity(2.0, EnumTypes.LENGTH.INCHES);
        let additionResult = inch1.addition(feet, inch1);
        assert.equal(14, additionResult);
    });

    it("given 1 Feet 1 Feet should return 24 Inch", () => {
        let feet = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let feet1 = new Quantity(1.0, EnumTypes.LENGTH.FEET);
        let additionResult = feet.addition(feet, feet1);
        assert.equal(24, additionResult);
    });

    it("given 2 Inch and 2.5 centimetre should return 3 Inch", () => {
        let inch = new Quantity(2.0, EnumTypes.LENGTH.INCHES);
        let centimetre = new Quantity(2.5, EnumTypes.LENGTH.CENTIMETER);
        let additionResult = inch.addition(inch, centimetre);
        assert.equal(3, additionResult);
    });
});

describe("test cases for volume in gallons ", () => {

    it("given 1 gallon should return 3.78 litres", () => {
        let gallon = new Quantity(1.0, EnumTypes.VOLUME.GALLON);
        let litres = new Quantity(3.78, EnumTypes.VOLUME.LITRES);
        let result = gallon.compare(gallon, litres);
        assert.equal(result, true);
    });


    it("given 1 litre should return 1000 ml", () => {
        let litres = new Quantity(1.0, EnumTypes.VOLUME.LITRES);
        let millilitres = new Quantity(1000, EnumTypes.VOLUME.MILLILITRES);
        let resultOfLitre = litres.compare(litres, millilitres);
        assert.equal(resultOfLitre, true);
    });

    it("given 1 gallon and 3.78 litres should return 7.57 litres", () => {
        let gallon = new Quantity(1.0, EnumTypes.VOLUME.GALLON);
        let litres = new Quantity(3.78, EnumTypes.VOLUME.LITRES);
        let result = Math.round(gallon.addition(gallon, litres));
        assert.equal(7560, result);
    });

    it("given 1 litre and 1000ml should return 2 litres", () => {
        let millilitres = new Quantity(1000.0, EnumTypes.VOLUME.MILLILITRES);
        let litres = new Quantity(1, EnumTypes.VOLUME.LITRES);
        let result = Math.round(millilitres.addition(millilitres, litres));
        assert.equal(2000, result);
    });
});
describe("test cases for volume in gallons ", () => {

    it("given 1 kilogram return 1000 grams", () => {
        let kilogram = new Quantity(1, EnumTypes.WEIGHT.KILOGRAM);
        let grams = new Quantity(1000, EnumTypes.WEIGHT.GRAM);
        let result = Math.round(kilogram.compare(kilogram, grams));
        assert.equal(result, true);
    });

    it("given 1 tonnne return 1000 kilograms", () => {
        let tonne = new Quantity(1, EnumTypes.WEIGHT.TONNE);
        let kilograms = new Quantity(1000, EnumTypes.WEIGHT.KILOGRAM);
        let result = Math.round(tonne.compare(tonne, kilograms));
        assert.equal(result, true);
    });

    it("given 1 tonnne and  1000 grams should return 1001 kg", () => {
        let tonne = new Quantity(1, EnumTypes.WEIGHT.TONNE);
        let grams = new Quantity(1000, EnumTypes.WEIGHT.GRAM);
        let result = tonne.addition(tonne, grams)
        assert.equal(1001, result);
    });

    it("given 1 tonnne and  1 milliter should return false", () => {
        let tonne = new Quantity(1.0, EnumTypes.WEIGHT.TONNE);
        let millilitres = new Quantity(1.0, EnumTypes.VOLUME.MILLILITRES);
        let result = Math.round(tonne.compare(tonne, millilitres));
        assert.equal(result, false);
    });
});

describe("test cases for celcius to farheniet", () => {
    it("given 212 Farheniet and  100 celcius should be equal", () => {
        let celcius = new Quantity(100.0, EnumTypes.TEMPERATURE.CELCIUS);
        let farheniet = new Quantity(212.0, EnumTypes.TEMPERATURE.FARHENIET);
        let resultOfFarheneiet = farheniet.compareCelcius(celcius, farheniet);
        assert.equal(true, resultOfFarheneiet);
    });
});

