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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.fName = 'DINOsaur';
        this.fName = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("the ".concat(this.fName, " will walk ").concat(distance, " meters"));
    };
    return Animal;
}());
;
var obj = new Animal('tiger');
obj.walk(200);
