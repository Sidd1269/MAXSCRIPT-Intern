//Define an array of object with name & age property and print name in console, iterate using loops

// Define an array of objects
const people = [
  { name: "Siddhesh", age: 24 },
  { name: "Rohit", age: 25 },
  { name: "Vaishnavi", age: 23 }
];

// Iterate using a for loop
for (let i = 0 ; i < people.length ; i++){
    console.log(people[i].age);
    console.log(people[i].name);
    
}

//by using . we can access any atribute in object 