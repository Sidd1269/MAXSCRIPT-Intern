
function showNumbers(...nums) {
 //it creates 
  console.log("Rest Operator Example:");
  console.log(nums);
}

// Calling with multiple arguments
showNumbers(10, 20, 30, 40);

// ---------- SPREAD OPERATOR ----------
const numbers = [10, 20, 30, 40];

console.log("Spread Operator Example:");
console.log(...numbers); 

const moreNumbers = [50, 60];
const allNumbers = [...numbers, ...moreNumbers];
console.log("Merged Array:", allNumbers);
