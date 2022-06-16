"use strict";
class Bike {
    ride() {
        console.log('Broooom!');
    }
}
class Car {
    ride() {
        console.log('peeeeep!');
    }
}
class Bicycle {
    ride() {
        console.log('------');
    }
}
class Vehicle {
}
const ins = new Vehicle();
ins.ride();
