const marvel_heroes = ["thor","Ironman","spiderman"]

const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes); // both the array don't get merge 

// console.log(marvel_heroes)
//  const allHeros = marvel_heroes.concat(dc_heroes)
// console.log(allHeros);

//spread operator

const all_new_heros = [...marvel_heroes,...dc_heroes]

// The spread operator (...) in JavaScript is used to expand iterable objects (like arrays or strings) into individual elements12. 
//It can be used in function arguments, array literals, and object literals
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(2) // you can also use infinity inplace of 2 .

console.log(real_another_array);

console.log(Array.isArray("Hites"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"})) // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

