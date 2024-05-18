//Q.12: Create a new array named lastTwoFruits that contains the last
//  two elements of the fruits array using the method.
let fruits: string[] = ["apple", "banana", "mango", "orange", "grapefruit", "pinnaple"];
let lastTwoFruits:string[] = fruits.splice(-2)
console.log(lastTwoFruits)