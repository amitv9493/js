

let arr = ['amit', 'pritee', 'sunita', "lalbahadur"];
let obj = "";
console.log(typeof arr)

console.log(Array.isArray(arr))
console.log(Array.isArray(obj))


"ARRAY METHODS"

// adding a member in last of array ----> push

console.log(arr);
arr.push('sangeeta');
console.log(arr);

let poppedMember = arr.pop();
console.log(poppedMember)
console.log(arr)

// adding a member in first of array

arr.unshift('member_1')
console.log(arr)

// SHIFT removes the first element 

let removed = arr.shift();
console.log(removed)
console.log(arr)

'shift is slower than push'

// PREMITIVE DATA TYPE

let num1 = 6;
let num2 =num1;

'REFERENCE DATA TYPE'

let array1 = [1,2,3]; 
let array2 = array1;

console.log(array1)
array1.push(4)

console.log(array1);
console.log(array2);

"cloning of an array"

let array1 = [1,2,3];
let array2 = array1.slice(0)
console.log(array2)

let array3 = [].concat(array1);
console.log(array3)

//spread opeator
let array5 = [...array1];
console.log(array5)

'ALWAYS USER CONST TO CREATE ARRAY'

let array = ['amit', 'sunita', 'pritee'];

console.log(array[array.length - 2])

newMembers = [];

for(let i =0; i<array.length; i++){
    newMembers.push((array[i].toUpperCase()))
}

console.log(newMembers)

i = 0;
while(i < array.length){
    console.log(array[i]);
    i++;
}
















