//javascript array-copy-operation create shallow copies

const myArr= [0,1,2,3,]
const myHeroes = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);


//Array methods

myArr.push(6); // add an element in array
myArr.push(7);
myArr.pop(); // remove last element from an array

myArr.unshift(0); // add an element to the starting of array but avoid using it as it is time consuming as it will have to shift all the element
myArr.shift(); // remove an element from the start of an array


// console.log(myArr.includes(9)); // it checks whether 9 is present in array or not

// const newArr = myArr.join(); // bind and convert the array into string
// console.log(myArr);
// console.log( typeof newArr);


// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2= myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

// The difference between splice and slice is splice() modifies an array by adding/removing elements, while slice() returns a new array from the existing one.