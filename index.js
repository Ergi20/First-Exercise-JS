// 1.Write a program that logs "Hello, JavaScript!" to the console.
console.log("Hello, JavaScript!");

//Declare a variable for each data type: string, number, boolean, undefined, and null. Log them to the console.
let emri = "Ergi";
console.log(emri);

let mosha = 17;
console.log(mosha);

let student = true; 
console.log(student);

let x;
console.log(x);
console.log(x);
console.log(x);

let y = null;
console.log(y);

//Convert a string to a number and a number to a string. Verify the results using typeof.
let num = 20;
let numTostr = String(num);
console.log(numToStr);
console.log(typeof numToStr);

let str = "20";
let strToNum = Number(str);
console.log(strToNum);
console.log(typeof strToNum);

//Create a program that takes two numbers as input and performs addition, subtraction, multiplication, and division. Log the results.
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;
console.log(sum, sub, mul, div, mod);

//Write a program to check if a number is even or odd using the modulo operator (%).

let numri = 3;

if( numri % 2 === 0){
   console.log("Numri eshte cift");

}
else{

    console.log("Numri eshte tek");
}

// Compare two numbers using ==, ===, !=, !==, <, >, <=, and >=. Log the results.
let nr1 = 17
let nr2 = 20

console.log(`${nr1} == ${nr2}:`, nr1 == nr2);
console.log(`${nr1} === ${nr2}:`, nr1 === nr2);
console.log(`${nr1} != ${nr2}:`, nr1 != nr2);
console.log(`${nr1} !== ${nr2}:`, nr1 !== nr2);
console.log(`${nr1} < ${nr2}:`, nr1 < nr2);
console.log(`${nr1} > ${nr2}:`, nr1 > nr2);
console.log(`${nr1} <= ${nr2}:`, nr1 <= nr2);
console.log(`${nr1} >= ${nr2}:`, nr1 >= nr2);


/*Write a program that takes a score as input and logs the grade:

90 and above: "A"
80-89: "B"
70-79: "C"
60-69: "D"
Below 60: "F" */

let num_1 = prompt("Type your score: ")
num_1 = Number(num_1);

if(num_1 >= 90){
 console.log("A");
}
 else if(num_1 <= 89 && num_1 >= 80){
    console.log("B")
 }
 else if(num_1 <= 79 && num_1 >= 70){
    console.log("C")
 }
 else if(num_1 <= 69 && num_1 >= 60){
    console.log("D")
 }
 else if(num_1 <= 59){
    console.log("F")
 }

 // Write a program that logs numbers from 1 to 100. For multiples of 3, log "Fizz"; for multiples of 5, log "Buzz"; and for multiples of both, log "FizzBuzz".
 for (let i = 1; i <= 100; i++) {

   if (i % 3 === 0 && i % 5 === 0) {

       console.log("FizzBuzz");

   }
    else if (i % 3 === 0) {
       console.log("Fizz");
   }
    else if (i % 5 === 0) {
       console.log("Buzz");
   }
    else {
       console.log(i);
   }
}


 //Write a program that checks if a given password is at least 8 characters long and contains at least one number. Log whether it is valid or not.
let password = "ergi1234";
let containsNumber = false;

for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i]) && password[i] !== " ") {
        containsNumber = true;
       break;
    }
}

if (password.length >= 8 && containsNumber) {
    console.log("Password is valid!");
} else {
    console.log("Password is invalid!");
}


 //Write a function greet(name) that takes a name as input and logs "Hello, [name]!".
  function greet(name){
   console.log(`Hello, ${name}!`);

  }
  greet("Ergi");

//Write a function factorial(n) that calculates the factorial of a number using recursion.
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log(factorial(5));

//Write a function isPalindrome(str) that checks if a string is a palindrome (reads the same backward as forward).
str = "madam";
 function isPalindrome(str){
    let left = 0;
     let right = str.length - 1;
      while(left < right){
          if(str[left] != str[right]){
             return false;
       } 
       left ++; 
       right --;
         
      }
      return true; 
    }

   console.log(isPalindrome(str));

//Write a program that takes an array of numbers and returns the sum of all elements.
function sumArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      sum += number[i];
    }
  
    return sum;
  }
    const number = [1, 2, 3, 4, 5];
  console.log(sumArray(number));

//Write a program that finds the largest number in an array
function largestNumber(numbers) {
    if (numbers.length === 0) {
      return null; 
    }
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
  
    return largest;
  }
  const numbers = [3, 7, 2, 9, 1, 10, 4];
  console.log(largestNumber(numbers));

//Write a program that filters even numbers from an array.
function evenNumbers(numberss) {
    return numberss.filter(num => num % 2 === 0);
  }
  const numberss = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(evenNumbers(numberss));

 //Create an object representing a person with properties like name, age, and hobbies. Log each property to the console.

const person = {}

person.name = "Ergi";
person.age = 20;
person.hobby = "Reading";

console.log(person.name);
console.log(person.age);
console.log(person.hobby);

//Add a method introduce to the person object that logs "Hi, I'm [name] and I'm [age] years old!".

const person = {
Name: "Ergi",
Age: 20
}

console.log(`Hi, I'm ${person.Name} and I'm ${person.Age} years old!`);

/* Create an array of objects representing items in a shopping cart, each with name, price, and quantity.
 Write a function to calculate the total cost. */
 let product = [
   { name: "apple", price: 200, quantity: 4 },
   { name: "mango", price: 450, quantity: 1 },
   { name: "banana", price: 100, quantity: 7 }
];

product.forEach(product => console.log(product.price));