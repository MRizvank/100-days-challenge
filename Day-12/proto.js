// Base vehicle constructor function
function Vehicle(speed, color, fuel) {
    this.speed = speed;
    this.color = color;
    this.fuel = fuel;
  }
  

  // Add methods to the prototype
  Vehicle.prototype.setSpeed = function(newSpeed) {
    this.speed = newSpeed;
  };
  Vehicle.prototype.updateColor = function(newColor) {
    this.color = newColor;
  };
  Vehicle.prototype.updateFuel = function(newFuel) {
    this.fuel = newFuel;
  };

  // Four-wheeler constructor function
  function FourWheeler(wheels, model, speed, color, fuel) {
    Vehicle.call(this, speed, color, fuel);
    this.wheels = wheels;
    this.model = model;
  }
  
  // Set the prototype chain
  FourWheeler.prototype = Object.create(Vehicle.prototype);
  FourWheeler.prototype.constructor = FourWheeler;
  Vehicle.speed(55)
  Vehicle.updateFuel(20)
  
  // Create a new four-wheeler instance
  const myFourWheeler = new FourWheeler(4, "Honda Civic", 0, "red", "gasoline");
  console.log(myFourWheeler);
  

  