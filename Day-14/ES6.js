
class Iphone1{
    constructor(generation,color,connectivity){
        this.generation=generation;
        this.color=color;
        this.connectivity=connectivity
    }
    dial(){
        return 'reing tring ....'
    }
}

class Iphone2 extends Iphone1{
    constructor(generation,color,connectivity,camera){
        super(generation,color,connectivity);
        this.camera=camera;

    }
    click(){
        return 'cliking .....'
    }
    calCulator(){
        return 'calculating ......'
    }
}
let i1=new Iphone1('first','space Blue','2G');
console.log(i1.dial());