// Animal
//     ├── noOfLegs <number>
//     ├── vegetarian <boolean>
//     └── eat() <function that logs `eating...` >

// Cat extends all properties and methods of an Animal
//     ├── color <string>
//     └── meow() <function that logs `meowing...`


function Animal(legs,vegetarian){
    this.legs=legs;
    this.vegetarian=vegetarian;
}
Animal.prototype.eat=function(){
    console.log('eating...');
}

 let a1=new Animal(4,true);
console.log(a1);
a1.eat()

Object.setPrototypeOf(Cat.prototype,Animal.prototype)

function Cat(legs,vegetarian,color){
    Animal.call(this,legs,vegetarian);
    this.color=color

}
Cat.prototype.meow=function(){
    console.log('meowing...');
}

let cat1=new Cat(4,true,'grey');
console.log(cat1);
cat1.eat()

/* ES6 */

class Animal{
    constructor(legs,vegiterian){
        this.legs=legs;
        this.vegetarian=vegiterian;
    }
    eat(){
        console.log('eating........')
    }
}

let animal1=new Animal(4,false)
console.log(animal1);
animal1.eat()
class Cat extends Animal{
    constructor(legs,vegiterian,color){
        super(legs,vegiterian)
        this.color=color;
    }
    meow(){
        console.log('meowing........');
    }
}
let ca1=new Cat(4,true,'meroon');
ca1.eat();