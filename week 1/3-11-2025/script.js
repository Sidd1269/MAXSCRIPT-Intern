// const todos =[
//     {
//     id : 1,
//      text :'trash out',
//     isCompleted : true
// },
// {
//     id : 2,
//      text :'go play',
//     isCompleted : true
// },
// {
//     id : 1,
//      text :'gym',
//     isCompleted : false
// }
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// //forEach , map , filter 
// todos.forEach(function(todo){
//     console.log(todo.text);
    
// })
// const todoText = todos.map(function(todo){
//     return todo.text;
    
// });

// console.log(todoText);


// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === false ; 

// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);


//conditions

const x = '19';

const color = x > 10 ? "red " : "blue"

switch (color){
    case "red":
        console.log('color is red');
        break;
    case "blue":
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        
        
        
}                        