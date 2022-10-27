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