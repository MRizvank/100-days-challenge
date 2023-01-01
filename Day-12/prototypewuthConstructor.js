// just a made up example to demonstrate object creation & inheritance.

function IPhone1(generation, ASIN, weight, OS, RAM, color, display, camera) {
    this.generation = generation;
    this.asin = ASIN;
    this.weight = weight;
    this.os = OS;
    this.ram = RAM;
    this.color = color;
    this.display = display;
    this.camera = camera;
  }
  
  IPhone1.prototype.dial = function(){
    console.log('tring.. tring...');
  }
  
  IPhone1.prototype.sendMessage = function() {
    console.log('Sending message...');
  }
  
  IPhone1.prototype.cameraClick = function() {
    console.log('Camera clicked')
  }
  
  let i1 = new IPhone1(1,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0 MP');
  
  // --------------------------------
  // bluetooth feature added
  // 3g Internet feature added
  // high resolution capture added
  // -------------------------------- 
  function IPhone2(generation, ASIN, weight, OS, RAM, color, display, camera, bluetooth, internetType){
    IPhone1.call(this,generation,ASIN,weight,OS, RAM,color,display,camera);
    this.bluetooth = bluetooth;
    this.internet = internetType;
  }
  
  IPhone2.prototype.connectWithBlutoothDevice = function(){
    console.log('Connecting with bluetooth divice...')
  }
  
  IPhone2.prototype.connectWithInternet = function(){
    console.log('Connecting with 3g Internet...')
  }
  
  IPhone2.prototype.cameraClick = function(){
    console.log('Clicking a high resolution pic...')
  }
  
  Object.setPrototypeOf(IPhone2.prototype, IPhone1.prototype);
  
  let i2 = new IPhone2(2,'B09X67JBQw',8.8,'IOS 2', '256mb','Black','100mm','4.0 MP','2.0', '3g');
//   console.log(i2);
  console.log(i2.cameraClick());