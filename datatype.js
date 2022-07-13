// data type
// string
// number
// bolleans
// undefined
// null
// BigInt
// symbol

let age = 22;
let name = "amit";

console.log(typeof age);

// typecasting number to str:
// add a blank str to number
age = age + "";
console.log(typeof age);

age = String(age);

// str to number
let var2 = "3345";
var2 = Number(var2);
console.log(typeof var2);


// string concatenate

let first_name = 'amit';
let last_name = 'patel';
console.log(first_name + last_name)

// number concatenate
let num1 = '33';
let num2 = '22'
console.log(num1 + num2)
console.log(+num1 + +num2)

// undefined
let myvar;
console.log(typeof myvar) // this is undefined

// Null
let novar = null;
console.log(typeof novar)
// while printing the type of Null datatype it will show an object which is an error

// BingInt // >> to store big numbers
let mynumber = 123n;
// or
let samenumber = BigInt(123);
console.log(mynumber)

