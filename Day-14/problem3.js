// Vehicle
//     ├── brand <string>
//     ├── tyres <number>
//     ├── doors <number>
//     ├── driver <string>
//     ├── accelerate <function that logs `accelerating`>
//     └── honking <function that logs `honking`>

// Car extends all properties and methods of a Vehicle
//     └── playMusic <function that logs `playing music`>

// Bus extends all properties and methods of a Vehicle
//     ├── ticketCollector <string>
//     └── collectFare <function that logs <driver> is driving and <ticketCollector> is `collecting fare`>


function Vehicle(brand,tyers,doors,driver){
    this.brand=brand;
    this.tyers=tyers;
    this.doors=doors;
    this.driver=driver;

}
Vehicle.prototype.accelerate=function(){
    console.log('accelerating');
}
Vehicle.prototype.honking=function(){
    console.log('honking...');
}

function Car(brand,tyers,doors,driver){
    Vehicle.call(this,brand,tyers,doors,driver)
}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype)
Car.prototype.playmusic=function(){
    console.log('playing music');
}
// let car1=new Car('BMW',4,4,'liju')
// console.log(car1);
// car1.honking()
function Bus(brand,tyers,doors,driver,ticketcollector){
    Vehicle.call(this,brand,tyers,doors,driver);
    this.ticketcollector=ticketcollector;

}
Bus.prototype.collectFare=function (){
    console.log(`${this.driver} is driving and ${this.ticketcollector} is collecting  fare `)
}
Object.setPrototypeOf(Bus.prototype,Vehicle.prototype)

let bus1=new Bus('volvo',8,2,'liju','tarkeshwar');
// console.log(bus1);
bus1.collectFare()

            /*ES6 */

class Vehicle{
    constructor(brand,tyers,doors,driver){
        this.brand=brand;
        this.tyers=tyers;
        this.doors=doors;
        this.driver=driver;
    }
    accelerate(){
        console.log('accelerating');
    }
    honking(){
        console.log('honking');
    }
}

class Car extends Vehicle{
    constructor(brand,tyers,doors,driver){
        super(brand,tyers,doors,driver);
    }
    playmusic(){
        console.log('playing music');
    }
}
class Bus extends Vehicle{
    constructor(brand,tyers,doors,driver,ticketcollector){
        super(brand,tyers,doors,driver);
        this.ticketcollector=ticketcollector;
    }
    collectFare(){
        console.log(`${this.driver} is driving and ${this.ticketcollector} is collecting  fare `)
    }
}
let bus2=new Bus('volvo',8,4,'shen','sanket');
console.log(bus1);
bus1.collectFare()