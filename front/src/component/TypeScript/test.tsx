let bus : string[] = ['kim', 'park'];
let taxi : { name? : string } = { name : 'kim'};
let car : typestnum = 123;
type typestnum = string[] | number;
console.log(bus);

function calcu( x : number) : number {
    return x*2;
}

type Memeber = {
   
    [key : string ] : string,
}
let join : Memeber = { name : 'jung'};


class User {
    name : string;
    constructor(name : string){
        this.name = name;
    }
}

function split( str : string) : string[]{
    return str.split(' ');
}
let myFn : Function = function() {};


class Person {
    age : number;
    constructor(arg: number | Person) {
        if (typeof arg === 'number'){
            this.age = arg;
        }else if (arg instanceof Person) {
            this.age = arg.age;
        }
        
    }
}

let jung : string = 'goood' ;
let min : string | number = 1;
min = 4;
console.log(4);

function findStar(x : number | String){
    if(typeof x === 'number'){
        return x*2
    }
}

type jungg = {
    [key : string] : number | string ;
}

let lee : jungg = {
    age : 1,
    height : 175,
    name : 'jungmin'
}