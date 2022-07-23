function firstchar(string){
    return string[0];
}

console.log(firstchar("amit"))

function findTarget(array, target){
    for(let i =0; i<array.length; i++){
        if(array[i] ===target){
            return i;
        }
    }return -1
}


const arr = [1,2,3,4,5,6,77];
console.log(findTarget(arr, 77))