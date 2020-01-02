
const EnumTypes = {
    LENGTH: {
        INCHES: { values: "1", Type: "LENGTH" },
        FEET: { values: "12", Type: "LENGTH" },
        YARD: { values: "36", Type: "LENGTH" },
        CENTIMETER: { values: "0.4", Type: "LENGTH" }
    },
    VOLUME: {
        GALLON: { values: "3780", Type: "Volume" },
        LITRES: { values: "1000", Type: "Volume" },
        MILLILITRES: { values: "1", Type: "Volume" }
    },
    WEIGHT: {
        KILOGRAM: { values: "1", Type: "WEIGHT" },
        GRAM: { values: "0.001", Type: "WEIGHT" },
        TONNE: { values: "1000", Type: "WEIGHT" },
    },
    TEMPERATURE: {
        CELCIUS: { values: "Celcius", Type: "TEMP" },
        FARHENIET: { values: "Farheniet", Type: "TEMP" }
    }
}
module.exports = EnumTypes;