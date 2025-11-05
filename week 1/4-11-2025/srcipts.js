

// // function mayo(p1 , p2){
// //     return p1 * p2 ;
// // }

// // console.log(mayo(3 , 3));


// // let myFunc = (a , b ,c) => a * b * c ;

// // console.log(myFunc(1 , 3, 5 ));

// // let arr = [1 , 3, 5, ];

// // for(let i = 0 ; i )


// // //reverse the string 

// // function rever(str) {
// //     let rev = " ";

// //     for (let i = str.length-1 ; i >=0 ; i--){
// //         rev += str[i];
// //     }

// //     return rev
    
// }

// console.log(rever("eheheheheh"));

// const fru = ["apple" , "orange" , "mango" , "mango" , "apple" ];

// const num = [2,4,5,6,7,9];

// let text = "";
// num.forEach(func);
// document.getElementById("demo").innerHTML = text;

// function func (value , index , array) {
//     text += value + "<br>";
// }


//maps  
// const num1 = [ 4 ,6 ,7, 8,9,0 ,1]
// const num2 = num1.map(func);

// document.getElementById("demo").innerHTML = num2 ;

// function func(value , index , array){
//     return value *2 ;
// }


//Filters 

// const number = [ 1 ,4,6,8,9,5,3,2];
// const over5 = number.filter(num => num > 5 );




// //reduce

// const number1 = [ 1 ,4,6,8,9,5,3,2,99];
// const plus = number1.reduce((total , value) => total - value);


// // every 

// const arr2 = [34 , 67, 84 ,98 ,23, 64, 67]
// const check = arr2.every(num => num > 18);



// const arr3 = [ 4 ,6,7,8 ,2]
// const arr4 = [3 , 5, 6,8,]
// const arr5 = [...arr3,...arr4];


// let a , b , rest ;
// const arr9 = [4,6,7,8,976,5,4,3,3];
// [a ,b , ...rest] = arr9;
// document.getElementById("demo").innerHTML = rest;



// function Person (firstname , lastname , dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = dob ;
// }

//  const person1 = new Person("siddhesh" , "Ambatkar" , '12-01-2001' );
//  const person2 = new Person("sid" , "srrr" , '12-01-2001' );
//  const person3 = new Person("manav" , "shing" , "12-4-1998" );
//  const person4 = new Person("random" , "jskds" , "12-01-1990" );


// console.log(person2.dob.getFullYear()); 
// console.log(person1);
//  console.log(person3);
//  console.log(person4);
 
//  const js = JSON.stringify(person1)

//  console.log(js);
 
 
 function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0 ;
    for (let i = 0 ; i< ar.length ; i++){
        sum +=ar[i] ;
    }
    return sum;
}

console.log(aVeryBigSum([100003 ,12021 ,9123123, 32523432]));

function plusMinus(arr) {
    // Write your code here
    //so basically there are 3 positive numbers and 2 negative numbers and 1 o 
}