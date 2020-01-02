
class Quantity {
    value;
    unit;

    constructor(value, unit, Type) {
        this.value = value;
        this.unit = unit;
    }

    checkEquality(quantity1, quantity2) {
        if (quantity1.unit == quantity2.unit)
            if (quantity1.value == quantity2.value) {
                return true;
            }
            else {
                return false;
            }
        return false;
    }
    compareCelcius(temperature1, temperature2) {
        if (temperature1.unit.values == "Celcius") {
            if (temperature1.unit.Type == temperature2.unit.Type) {
                return (temperature1.value == (temperature2.value - 32) * 5 / 9);

            }
        }
    }
    compare(quantity, quantity1) {
        if (quantity.unit.Type == quantity1.unit.Type)
            return quantity.value * quantity.unit.values == quantity1.value * quantity1.unit.values;
        else
            return false;
    }

    addition(quantity, quantity1) {
        if (quantity.unit.Type == quantity1.unit.Type)
            return quantity.value * quantity.unit.values + quantity1.value * quantity1.unit.values;
        else
            return false;
    }
}
module.exports = Quantity;