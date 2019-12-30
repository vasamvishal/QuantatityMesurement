let assert=require("assert");
let chai=require("chai");
let Inches=require("../QualityMeasurement/Inches")
let Feet=require("../QualityMeasurement/Feet");
describe("test cases for 1 inch is equal 12 feets",function(){
    it("given 1 inches should return 1 inches",function(){
        let inchObject=new Inches(1.0);
        let inchObject1=new Inches(1.0);
        let resultOfInches=inchObject1.checkEquality(inchObject,inchObject1);
        assert.equal(resultOfInches,true);
    });

    it("given 1 Feet and 1 Feet should return true",function(){
        let feetObject=new Feet(1.0);
        let feetObject1=new Feet(1.0);
        let resultOfFeets=feetObject.checkEquality(feetObject,feetObject1);
        assert.equal(resultOfFeets,true);
    });
});

