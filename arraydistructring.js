array1 = ['value1', 'value2', 'value3', 'value4'];

let [myvar1, myvar2] = array1;
console.log(myvar1, myvar2)

let myaray = array1.slice(2)

// destructuring of dictionary or object

const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true


const band = {
    bandname: 'queen',
    famousSong: 'bohemian rhapsody',
    year: 1998,
    genre: 'rock',
}

let { bandname:var1, famousSong:var2, ...restcvar} = band;
console.log(var1, var2);
console.log(restcvar);
