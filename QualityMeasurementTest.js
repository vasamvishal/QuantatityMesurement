let assert=require("assert");
let chai=require("chai");
let QualityMeasurement=require("./QualityMeasurement.js")
describe("test cases for 1 inch is equal 12 feets",function(){
    it("given 1 inches should return 1 inches",function(){
        var resultInInches=QualityMeasurement.convertToInches(1);
        assert.equal(resultInInches,1);
    });
});

