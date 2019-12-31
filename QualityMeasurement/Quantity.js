
class Quantity {
    value;
    unit;

    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
        console.log(this.unit);
    }

    checkEquality(inches1, inches2) {
        console.log(inches1.unit);
        console.log(inches2.unit);
        if (inches1.unit === inches2.unit)
            if (inches1.value == inches2.value) {
                return true;
            }
            else {
                return false;
            }
        return false;
    }

    compare(quantity) {
            return quantity.value*quantity.unit;
        }
    addition(quantity,quantity1) {
        {
            return quantity+quantity1;
        }
    }
}
module.exports = Quantity;