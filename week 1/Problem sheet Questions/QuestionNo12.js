// Define an array of numbers and provide ascending/descending sort, iterate using loops

let numbers = [45, 12, 67, 23, 89, 5];




for (let i =0 ; i < numbers.length -1 ; i++){
    for(let j = 0 ; j< numbers.length - i - 1 ; j++){
        if(numbers[j] > numbers[j+1]) {

            let temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp
        }
    }
}

console.log("Ascending:", numbers);

let arr = [45 , 67 , 867, 6, 56, 34,75,34]

for(let i = 0 ; i < arr.length - 1 ; i++){
    for (let j = 0 ; j < arr.length -i - 1 ; j++){
        if (arr[j] < arr[j+1]) {
            
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp 
         }
    }
}

console.log("Decending " ,  arr);
