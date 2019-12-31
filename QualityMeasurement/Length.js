
class Length {
    value;
    unit;
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
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

    compareAndCalculate(inches1, inches2) {
        var value1, value2;
        console.log(inches1.value);
        console.log(inches2.value);
        if (inches1.unit == 1 && inches2.unit == 12) {
            value1 = inches1.value * inches2.unit;
            value2 = inches2.value * inches1.unit;
        }
        else if (inches1.unit == 12 && inches2.unit == 1) {
            value1 = inches1.value * inches2.unit;
            value2 = inches2.value * inches1.unit;
        }
        else if (inches1.unit == 12 && inches2.unit == 36) {
            value1 = inches1.value * inches1.unit;
            value2 = inches2.value * inches2.unit;
        }
        else {
            return false;
        }
        console.log(value1);
        console.log(value2);
        if (value1 == undefined || value2 == undefined || value1 == 0 || value2 == 0)
            return false;
        else if (value1 == value2)
            return true;

    }
}
module.exports = Length;