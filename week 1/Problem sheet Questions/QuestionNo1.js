// Create a program that explains difference between let, var and const



//genrally var leaks out of block or out of code like for loop and if condition 

function demo(){
    var n = 34 ; 
    console.log(n);
    
}
demo()

//let is a block variable and const is also a block element means it does not geoes out of the block 
//const & let can not be re declared 
//But we can reassign it like in example

let l = 67;
const c = 89;

l = 56 ;

console.log(l);
console.log(c);
