
class Length{    
      value;
      unit;
      constructor(value,unit)
      {
          this.value=value;
          this.unit=unit;
      }
      checkEquality(inches1,inches2)
      {
        console.log(inches1.unit);
        console.log(inches2.unit);
          if(inches1.unit === inches2.unit)
              if(inches1.value==inches2.value){
              return true;
              }
          else{
              return false;
          }
          return false;
      }
      compareAndCalculate(inches1,inches2)
      {
        if(inches1.unit ==1 && inches2.unit ==2)
        {
           let value1=inches1.value*12;
           let value2=inches2.value*1;
           if(value1==value2)
               return true;
           else if(value1==undefined||value2==undefined)
           return false;
        }
        return false;
      }
}
module.exports=Length;