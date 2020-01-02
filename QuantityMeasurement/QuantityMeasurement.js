
class QuantityMeasurement {
    value;
    unit;

    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    }

    checkEquality(quantity1, quantity2) {
        console.log(quantity1.unit);
        if (quantity1.unit.values== quantity2.unit.values)
            if (quantity1.value == quantity2.value) {
                return true;
            }else {
                return false;
            }
        return false;
    }
    compareCelcius(temperature1, temperature2) {
        if (temperature1.unit.values == "Celcius") {
            if (temperature1.unit.Type == temperature2.unit.Type) {
                return (temperature1.value == (temperature2.value - 32) * 5 / 9);
            }else{
                return (((temperature1.value+32)*9/5)== temperature2.value);
            }
        }
    }
    compare(quantity1, quantity2) {
        if (quantity1.unit.Type == quantity2.unit.Type){
            return quantity1.value * quantity1.unit.values == quantity2.value * quantity2.unit.values;
        }else{
            return false;
        }
    }

    addition(quantity, quantity1) {
        if (quantity.unit.Type == quantity1.unit.Type){
            return quantity.value * quantity.unit.values + quantity1.value * quantity1.unit.values;
        }else{
            return false;
        }
    }
}
module.exports = QuantityMeasurement;