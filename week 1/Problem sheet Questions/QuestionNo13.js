// // Define an array of object with name & age property and perform following: (hint: need to use array helper functions)
// Need to print name in console
// Need to console new array with existing array value with new property as genderNeed to filter array with age > 18, age < 18, age = 18 (3 different consoles)
// Need to check whether array of object has every object age is >18
// Need to check whether array of object has some object age is = 18
// Need to provide total sum of age in console
// Need to find object with name “Alex”
// Need to find index of object with name “Alex”
// Need to console array ascending/descending based on age


let arr = [
    {name : "siddhesh" , age : 34},
    {name : "vaishnavi" , age : 24},
    {name : "rohit" , age : 14},
    {name : "deepak" , age : 54},
    {name : "yash" , age : 18},
    {name : "rashi" , age : 24},
    {name : "adarsh" , age : 16},
    {name : "jhalak" , age : 19}
]

//Function	Purpose
// forEach()	Loops through array (used to print names)
// map()	Creates new array (used to add gender)
// filter()	Returns subset based on condition
// every()	Checks if all elements match condition
// some()	Checks if any element matches condition
// reduce()	Accumulates values (used to sum ages)
// find()	Finds the first matching object
// findIndex()	Finds index of first matching object
// sort()	Orders array elements based on a condition


//1 Need to print name in console
arr.forEach(arr => console.log(arr.name));

//2.  Need to console new array with existing array value with new property as 
// genderNeed to filter array with age > 18, age < 18, age = 18 (3 different consoles)
const updatedPeople = arr.map(arr => ({ ...arr, gender: "Male" }));
console.log("New Array with Gender:", updatedPeople);

//3.  Need to check whether array of object has every object age is >18

const above18 = arr.filter(arr => arr.age > 18);
const below18 = arr.filter(arr => arr.age < 18);
const equal18 = arr.filter(arr => arr.age === 18);


console.log("people are above 18" , above18);
console.log("people are below 18" , below18);
console.log("people are  18" , equal18);


//4.Need to check whether array of object has some object age is = 18 

const allAbove18 = arr.every(arr => arr.age > 18);
console.log("All above 18?", allAbove18);



const sumOfAge = arr.some(arr => arr.age === 18);
console.log("some are above 18", sumOfAge);

//5., Need to provide total sum of age in console
const totalAge = arr.reduce((sum, arr) => sum + arr.age, 0);
console.log("Total Sum of Ages:", totalAge);

//// Need to find object with name “Alex”
const found = arr.find(arr => arr.name === "yash");
console.log("Found yash:", found);

//  Need to find index of object with name “Alex”
 const found1 = arr.findIndex(arr => arr.name === "yash");
console.log("Found yash index:", found1);


// Need to console array ascending/descending based on age
//basically it itrates thorough the array of objects and seprates it
const asc = [...arr].sort((a, b) => a.age - b.age);
const desc = [...arr].sort((a, b) => b.age - a.age);

console.log("Ascending by age:", asc);
console.log("Descending by age:", desc);