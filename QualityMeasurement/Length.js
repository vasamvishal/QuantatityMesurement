
class Length {
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
        console.log(quantity.value);
        if(quantity.unit==1) {
            return quantity.value * 1;
        }
        else if (quantity.unit == 12) {
            return quantity.value * 12;
        }
        else if ( quantity.unit == 36) {
            return quantity.value*36;
        }
        else if ( quantity.unit == 2.5) {
            return quantity.value*1/2.5;
        }
        else {
            return false;
        }
    }
}
module.exports = Length;