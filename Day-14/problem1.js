// Creature
//     ├── name <string>
//     └── eat <function that logs <name> is eating>

// Humans inherits everything from Creatures
//     └── sleep <function that logs <name> is sleeping>

// Employees inherits everything from Humans
//     ├── salary <number>
//     ├── changeSalary <function that sets salary>
//     └── displaySalary <function that logs <name>'s salary is <salary>.>

// Engineers inherits everything from Employees
//     ├── code <function that logs <name> is coding>
//     ├── fixBugs <function that logs <name> is fixingBugs>
//     └── sleep <function that logs <name> never sleeps>

/* By using constructor function*/

function Creature(name){
    this.name=name;
}
Creature.prototype.eat=function(){
    console.log(`${this.name} is eating`);
}
let cr1=new Creature("apes");

// console.log(cr1.eat());

Object.setPrototypeOf(Humans.prototype,Creature.prototype)

function Humans(name){
    Creature.call(this,name);

}
Humans.prototype.sleep=function(){
    console.log(`${this.name} is sleeping`);
}
let cr2=new Humans('aman');
// console.log(cr2);
// console.log(cr2.sleep());



Object.setPrototypeOf(Employees.prototype,Humans.prototype);
function Employees(name,salary){
    Humans.call(this,name);
    this.salary=salary;
}
Employees.prototype.changeSalary=function(x){
    this.salary=x;
}
Employees.prototype.displaySalary=function(){
    console.log(`${this.name}s salary is ${this.salary}`)
}
let e1=new Employees('liju',50000);
e1.changeSalary(65000);



// console.log(e1.displaySalary());

Object.setPrototypeOf(Engineers.prototype,Employees.prototype)
function Engineers(name,salary){
    Employees.call(this,name,salary);
}
Engineers.prototype.code=function(){
    console.log(`${this.name} is coding `)
}
Engineers.prototype.fixBugs=function(){
    console.log(`${this.name} is fixingbugs`)

}
Engineers.prototype.sleep=function(){
    console.log(`${this.name} never sleeps`);
}

let sde1=new Engineers('rizvan',75000);
// console.log(sde1);
// sde1.code()
// sde1.fixBugs()
// sde1.sleep()




/* By using ES6 classes */ 
class Creature{
    constructor(name){
        this.name=name;

    }
    eat(){
        console.log(`${this.name} is eating`);
    }

}

// let cr1=new Creature('humans')
// console.log(cr1);
// cr1.eat()


class Humans extends Creature{
    constructor(name){
        super(name)
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }

}

// let hr1=new Humans('aman');
// console.log(hr1);
// hr1.sleep()


class Employees extends Humans{
    constructor(name,salary){
        super(name)
        this.salary=salary;
    }
    changeSalary(x){
        this.salary=x;
    }
    displaySalary(){
        console.log(`${this.name}'s salary is ${this.salary}`)
    }
    
}

// let emp1=new Employees('liju',50000);
// console.log(emp1);
// emp1.changeSalary(75000);
// emp1.displaySalary()


class Engineers extends Humans{
    constructor(name,salary){
        super(name,salary)
    }
    code(){
        console.log(`${this.name} is coding `)
    }
    fixBugs(){
        console.log(`${this.name} is fixingbugs`)
    }
    sleep(){
        console.log(`${this.name} never sleeps`);
    }
}
let SDE1=new Engineers('sanket',65000);
// console.log(sde1);
// sde1.code();
// sde1.eat();
// sde1.fixBugs()
SDE1.sleep();