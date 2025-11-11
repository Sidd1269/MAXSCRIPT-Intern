//Define an array of object with name & age property and pop out the last entry from the same array

let arr = [{
    name : "siddhesh",
    age : 24 
},
{
    name: "rohit",
    age : 24
},
{
    name : "vaishnavi",
    age : 23 
}
]
//if you want to remove specifically
arr.pop({name:"vaishnavi" , age:23});

console.log(arr);

//if only want to remove last one
arr.pop();

console.log(arr);
