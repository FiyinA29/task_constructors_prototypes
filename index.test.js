
const {
    Car,
    Dealership
} = require(".");

describe('car properties', () => {
    let car = new Car("BMW", 32000, "V8");

    test('can get manufacturer', () => {
        expected = "BMW";
        actual = car.manufacturer;
        expect(actual).toBe(expected);
    });
    test('can get price', () => {
        expected = 32000;
        actual = car.price;
        expect(actual).toBe(expected);
    });
    test('can get engine type', () => {
        expected = "V8";
        actual = car.engineType;
        expect(actual).toBe(expected);
    });
});

describe('dealership properties and methods', () => {
    let car1 = new Car("BMW", 32000, "4.4L twin-turbocharged V8"); 
    let car2 = new Car("Audi", 34000, "5.0L naturally-aspirated V10");
    let car3 = new Car("Mercedes", 36000, "4.0L twin-turbocharged V8");
    let car4 = new Car("Jaguar", 38000, "5.3L naturally-aspirated V12");
    let car5 = new Car("Range Rover", 40000, "6.2L naturally-aspirated V8 LT1");
    let car6 = new Car("Audi", 50000, "5.7L naturally-aspirated V10")
    let dealership = new Dealership("WheelsLTD", 50,[car1, car2, car3, car4, car5]);

    test('can get name', () => {
        expected = "WheelsLTD";
        actual = dealership.name;
        expect(actual).toBe(expected);
    });
    test('can get capacity', () => {
        expected = 50;
        actual = dealership.capactiy;
        expect(actual).toBe(expected);
    });
    test('can count stock', () => {
        expected = 5;
        actual = dealership.stockCount();
        expect(actual).toBe(expected);
    });
    test('can add car to stock', () => {
        dealership.addCarToStock(car6)

        expected = 6;
        actual = dealership.stockCount();
        expect(actual).toBe(expected);
    });
    test('can return array of manufacturers', () => {
        expected = ["BMW", "Audi", "Mercedes", "Jaguar", "Range Rover", "Audi"];
        actual = dealership.getManufacturerName();
        expect(actual).toStrictEqual(expected);
    });
    test('can find all cars for a given manufacturer', () => {
        expected = 2
        actual = dealership.getAllCarsByAManufacturer("Audi").length
        expect(actual).toBe(expected);
    });
    test('can calculate total value of stock', () => {
        expected = 230000
        actual = dealership.gettotalValue();
        expect(actual).toBe(expected);
    });
});