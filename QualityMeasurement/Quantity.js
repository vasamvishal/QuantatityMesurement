
class Quantity {
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
    compareCelcius(temperature){
        
        console.log(temperature.unit);
        
        if(temperature.unit=="Celcius")
        {
            return temperature.value;
        }
        else{
            return (temperature.value - 32) * 5/9;
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