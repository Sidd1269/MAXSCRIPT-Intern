//Create an arrow function that displays params passed to that function in console


const arrowFunc =  (...params) => {
        console.log("parametrs are" , params);     
}

//we are using rest operator to collect all the parameters that are passed in the Arrow function

arrowFunc("hello World" , 56 , true , {name : "siddhesh"} );
