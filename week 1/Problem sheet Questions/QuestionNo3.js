//Write a function that takes colour as param and returns a fruit of that colour (use switch)

// const randomNumber = Math.floor(Math.random()*10);
// console.log(randomNumber);

//this code if to genrate a random number and give condtion to it to if number if greater than 5 then red or number 
//  is 4 then green  




const color = "orange"

switch (color) {
    case "red":
        console.log("It is an apple");
        break;
    case "orange":
        console.log("It is an orange");
        break;
    case "yellow":
        console.log("It is an mango");
        break;
    case "green":
        console.log("It is an avacado");
        break;
    case "brown":
        console.log("It is an chiku");
        break;
        default:
            console.log("it is not a fruit");
            
}