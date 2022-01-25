// function example(message){
//     console.log(message);
// };

// let message = 'hello world';

// example(message)

// var abc:number = 20;
// console.log(abc);

// var xyz:string;
// console.log(xyz);

// xyz = 'hello';
// console.log(xyz);

// var abcd;
// abcd = 20;
// abcd = 'string';
// console.log(abcd);

// var abc:number|string = 'hello'
// console.log(abc);



// var obj:{name:string,age:number,place:string} = {
//     name : 'Ballaya',
//     age :24,
//     place : "hyd"
// }

// console.log(obj.name);
 
// enum Color{
//     blue,
//     black,
//     green,
//     hotpink,
//     pink
// }
// var abc : Color = Color.green
// console.log(abc);

// interface Product{
//     productName : string,
//     price:number,
//     isgood : boolean,
//     quantity : number
// }

// let chocolate : Product;
// chocolate = {
//     productName : 'DairyMilk',
//     price : 100,
//     isgood : true,
//     quantity : 100
// }

// let Icecream : Product;
// Icecream = {
//     productName : 'VENILLA',
//     price : 45,
//     isgood : true,
//     quantity : 36   
// }


// let chat : Product;
// chat = {
//     productName : 'Panipuri',
//     price : 45,
//     isgood : true,
//     quantity : 36   
// }


// console.log(chocolate,Icecream,chat);




class Animal{
    fName = 'DINOsaur';
    constructor(theName:string){
        this.fName = theName;
    }
    walk(distance:number){
        console.log(`the ${this.fName} will walk ${distance} meters`);
        
    }

    
};

let obj = new Animal('tiger');
obj.walk(200);



