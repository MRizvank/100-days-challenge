IPhone1.prototype.sayHi = function (){
    return 'say hi...'
}

function IPhone1(generation,color,processor){
    this.generation = generation;
    this.color = color;
    this.processor=processor;
}
let i1 = new IPhone1(1,'grey',"B1");

// Object.setPrototypeOf(IPhone2.prototype,IPhone1.prototype);    /*Setting prototypical chain between two objects way 1*/
IPhone2.prototype = Object.create(IPhone1.prototype)             /*Setting prototypical chain between two objects  way 2 uring object . create method*/

function IPhone2(generation,color,processor,internetType,camera){
    IPhone1.call(this,generation,color,processor);
    this.internetType = internetType;
    this.camera=camera;

}
IPhone2.prototype.blueTooth=function(){    /*setting methods inside prototype object*/
    return "connecting to blutooth ...."
}
IPhone2.prototype.wifi=function(){
    return "connecting to wifi >>>>"
}

let i2 = new IPhone2(2,'white',"B2",'4G',"5mp")   /* invonking function with new keyword by doing thid it 
                                                will create a new object and retrun that object ans set a prototypical
                                                     chain between this object and prototype object*/

// console.log(i2);
// console.log(i2.blueTooth());

function IPhone3(generation,color,processor,internetType,camera,RAM,ROM){
    IPhone2.call(this,generation,color,processor,internetType,camera);
    this.RAM=RAM;
    this.ROM=ROM;
}
IPhone3.prototype.ramType=function(){
    return "DDR3";
}
IPhone3.prototype.faceRecognition=function(){
    return "facerecognition is turned on ...."
}
Object.setPrototypeOf(IPhone3.prototype,IPhone2.prototype)
let i3=new IPhone3(3,"space grey","B3","4G","8Mp","3GB","16GB")
// console.log(i3);
console.log(i3.faceRecognition());