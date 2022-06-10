"use strict";
//CAR CONSTRUCTOR
const Car = function (manufacturer, price, engineType) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType
}

//DEALERSHIP CONSTRUCTOR
const Dealership = function (name, capactiy, stock) {
    this.name = name;
    this.capactiy = capactiy;
    this.stock = stock;
}

//DEALERSHIP METHODS
//stock count
Dealership.prototype.stockCount = function () {
    return this.stock.length;
}

//add car to stock
Dealership.prototype.addCarToStock = function (car) {
    if(this.stock.length < this.capactiy){
        this.stock.push(car);
    }
}

//return an array of each car's manufacturer
Dealership.prototype.getManufacturerName = function () {

    let manufacturerNameArray = this.stock.map(stock => stock.manufacturer); //gets all the maufacturers of the cars in the stock, and stores in a separate array

     return manufacturerNameArray;
}

//find all cars from a given manufacturer
Dealership.prototype.getAllCarsByAManufacturer = function (make) {
    return this.stock.filter(stock => stock.manufacturer == make)
}

//find total value of stock
Dealership.prototype.gettotalValue = function () {
    const initialValue = 0;
    const valueArray =  this.stock.map(stock => stock.price) //gets all the prices of the cars in the stock, and stores in a separate array

    let totalValue = valueArray.reduce((prevTotal, currentTotal) => prevTotal + currentTotal, initialValue);
    
    return totalValue;
}

//CUSTOMER CONSTRUCTOR
const Customer = function (name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

//CUSTOMER METHOD
// customer can buy a car
Customer.prototype.buyCar = function (car, dealership) {
    let soldCar = dealership.stock.findIndex(obj => obj == car);

    if(this.wallet >= car.price) {
        this.car = car;
        dealership.stock.splice(soldCar,1);
    }
}


module.exports = {
    Car,
    Dealership,
    Customer
}