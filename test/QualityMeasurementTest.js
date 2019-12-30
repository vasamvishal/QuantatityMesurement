let assert=require("assert");
let chai=require("chai");
let Inches=require("../QualityMeasurement/Inches")
describe("test cases for 1 inch is equal 12 feets",function(){
    it("given 1 inches should return 1 inches",function(){
        let inchObject=new Inches(1.0);
        let inchObject1=new Inches(1.5);
        let resultOfInches1=inchObject1.checkEquality(inchObject);
        let resultOfInches2=inchObject1.checkEquality(inchObject);
        assert.equal(resultOfInches1,resultOfInches2);
    });
});

