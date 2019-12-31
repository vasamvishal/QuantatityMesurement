
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
}
module.exports=Length;