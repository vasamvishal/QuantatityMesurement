
class Quantity  {
    value;
    unit;
  
    constructor(value, unit,Type){
        this.value = value;
        this.unit = unit;
        console.log(this.unit);
    }

    checkEquality(inches1, inches2){
        console.log(inches1.unit);
        console.log(inches2.unit);
            if(inches1.unit==inches2.unit)
                if (inches1.value == inches2.value) {
                return true;
            }
            else {
                return false;
            }
        return false;
    }
    compareCelcius(temperature1,temperature2){
        if(temperature1.unit.values=="Celcius")
        {
            if(temperature1.unit.Type==temperature2.unit.Type)
            {
            let result=temperature1.value==(temperature2.value - 32) * 5/9;
            console.log(result);
            return result;
            }
        }
    }
    compare(quantity) {
            return quantity.value*quantity.unit;
        }
    addition(quantity,quantity1) {
            return quantity+quantity1;
        }
    }
module.exports = Quantity;