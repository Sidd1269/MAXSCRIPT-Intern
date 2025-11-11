// Define an array of string and add “Test” string in 2nd position (use slice/splice)


let fruits = ["Apple", "Banana", "Cherry", "Mango"];


//in splice the the first is index , second is deletion , 3 is insertion on which index if specefied if not it adds at first
// fruits.splice(0, 0, "Test"); example 
fruits.splice(1, 0, "Test");

// Log the updated array
console.log(fruits);
