/* */
// Write a function that capitalizes the first and fourth letters of a name
// function oldMacDonald(name) {
//     firstLetter = name.charAt(0).toUpperCase() + name.slice(1)  // here you find the first character and capitalize it, then use name.slice(1) to get the entire name without the first character to attach it.
//     convertedFourth = firstLetter.slice(0,3) + firstLetter.charAt(3).toUpperCase() + firstLetter.slice(4)   // here get leters 1, 2 and 3.... then add the 4th letter and uppercase it... then attach all letters after the 4th letter.
//     return convertedFourth
// }


// goulash = oldMacDonald('macdonald')
// console.log(goulash)

//###########################################################################################################################################

//LESSER OF TWO EVENS: Write a function that returns the lesser of two given numbers if both numbers are even, but returns the greater if one or both numbers are odd¶
// lesser_of_two_evens(2,4) --> 2
// lesser_of_two_evens(2,5) --> 5

// function lesserOfTwoEvens(a,b) {
//     const trueChoice = a < b;
//     if (trueChoice === true) {
//         return a
//     }else{
//         return b
//     }
// }
// console.log(lesserOfTwoEvens(99,255))
//###########################################################################################################################################

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output 
// “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.


// const fizzBuzz = (n) => [...Array(n)].map((_, i)=> ++i % 15 == 0 ? 'FizzBuzz'
//                                           : i % 5 == 0 ? 'Buzz'
//                                           : i % 3 == 0 ? 'Fizz'
//                                           : i + '');





// var output = [];
// var count = 1;

// function fizzBuzz(){

//   if (count % 3 === 0 && count % 5 === 0){
//     output.push("fizzBuzz");

//   } else if (count % 3 === 0) {
//     output.push("fizz");

//   } else if (count % 5 === 0) {
//     output.push("Buzz");
//   }
//   else {
//     output.push(count);
//   }
//   count++;
// }
// console.log(output);

//###########################################################################################################################################

// 1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true




// let cars = ["Audi", "Mazda", "BMW", "Toyota"];
// console.log(cars.toString())   //Audi,Mazda,BMW,Toyota





// let a = "Timothy"
// let b = "Rose"
// let c = "Zebra"


// let cars = [c, b, a];
// console.log(cars.sort())


// console.log(cars.reverse())



// let goulash = [30, 200, -200, 2, 3, 15, 10];
// goulash.sort()
// console.log(goulash)





// goulash.sort((x, y) => { return y - x})
// console.log(goulash)





// var points = ["Nate", "Bro", "Tim"]





// function sortAlphabetically() {
//  points.sort();
//  console.log(points) 
// }
// function sortNumerically() {
//  points.sort((a, b) => { return a - b });
//  console.log(points) 
// }

// sortAlphabetically()
// sortNumerically()



// var cars = ["Audi", "Mazda", "BMW", "Toyota"];
// cars.push("Goulash", "Bread")

// console.log(cars)

// cars.splice(2, 0, "Bite", "Me")
// console.log(cars)





// MASTER YODA: Given a sentence, return a sentence with the words reversed
// master_yoda('I am home') --> 'home am I'
// master_yoda('We are ready') --> 'ready are We'

//  function masterYoda(text){
//      let word = Array.from(text.split(" ").reverse());
//      return word.join(" ")
//  }

// yoda = masterYoda("I am home")
// console.log(yoda)
// //OUTPUT:   home am I       !!!!!!!!!!




// function reverseString(text) {
//     let word = Array.from(text).reverse();
//     return word
// }


// goulash = reverseString("hello")
// console.log(goulash)




// function yodaMan(text){
//     let phrase = Array.from(text.split(" ").reverse());
//     return phrase.join(" ")
// }

// yoda = yodaMan("I am home")
// console.log(yoda)

// function myArrayMax(ar) {
//     return Math.min.apply(null, ar);
// }
// let highestOutput = myArrayMax([15, 5858, 3830000, 2938, 59, 39393, 29])
// console.log(highestOutput)

// let years = Math.max.apply(null, [1950, 1960, 1970, 1980, 1990, 2000, 2010])
// console.log(years)







// const myOtherArray = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
// console.log(Math.max.apply(null, myOtherArray))




// function maxArray(ar) {
//     let length = ar.length
//     let maximum = -Infinity;
//     while (length--) {
//         if (ar[length] > maximum){
//             maximum = ar[length];
//         }
//     }
//     return maximum
// }




// let degree = "Let's visit bitdegree!";
// let x = degree.replace(/bitdegree/i, "bitdegree.org")
// console.log(x)




// function mArrayMin(ar) {
//     let length = ar.length
//     let minim = Infinity;
//     while (length--) {
//         if (ar[length] < minim) {
//             minim = ar[length];
//         }
//     }
//     return minim;
// }


// console.log(mArrayMin([15, 5858, 3830000, 2938, 59, 39393, 29]))
// // Output:  15





// var car = [
//     { type: "Honda", priority: 2 },
//     { type: "Audi", priority: 3 },
//     { type: "Toyota", priority: 1 },
//   ];


// // car.sort((x, y) => {return x.priority - y.priority})
// // console.log(car)



// car.sort((x, y) => {
//     var a = x.type.toLowerCase();
//     var b = y.type.toLowerCase();
//     if (a < b) { 
//         return -1; 
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// });


// console.log(car)








// let users = [
//     {type: "human", priorityLevel: 4},
//     {type: "polar bear", priorityLevel: 3},
//     {type: "bunny", priorityLevel: 2},
//     {type: "hawkB", priorityLevel: 1},
//     {type: "hawkA1", priorityLevel: 1},
// ]


// function sortByPrioity(ar) {
//     return ar.sort((a, b) => {return a.priorityLevel - b.priorityLevel})
// }






// ar1 = sortByPrioity(users);
// console.log(ar1)





// let carTypes = ["Audi", "Mazda", "BMW", "Toyota"]; 
// console.log(carTypes.toString())
// Output:  Audi,Mazda,BMW,Toyota



// append new item to end of array with length property
// let dancers = ["David", "Paul", "Abel", "Dustin"]
// dancers[dancers.length] = "Steven"
// console.log(dancers)
// Output:  ["David", "Paul", "Abel", "Dustin", "Steven"]





// let paragraph = "The two methods bring back -1 when no text is found. We already \
// know that JavaScript starts calculating from 0. Therefore, the methods may take in \
// an additional parameter as the starting index to start the inquiry."

// let locateWord = paragraph.lastIndexOf("as")
// console.log(locateWord)  // Output:  171


// let wordsInArray = ["devil", "angel", "God", "baby", "man", "child", "good", "evil"]
// let wordLocate = wordsInArray.lastIndexOf("God")
// console.log(wordLocate)




// var txt = "Let us find where 'place' starts!";
// var loc = txt.search("place");  //Output 19
// console.log(loc)




// let colors = "Red, Yellow, Blue, Green"
// let answer = colors.slice(7, 18);  //Output: llow, Blue,
// console.log(answer)




// let text1 = "BMW, Tesla, Volvo, MT1"
// let answer = text1.substring(7, 13)

// console.log(answer)



// let goulashBread = "HELLO WORLD"
// goulashBread.charAt(0)  // returns H


// let unicodeLookup = "HELLO EVERYONE"
// unicodeLookup.charCodeAt(0)  //returns 72






// let milSec = Date.parse("March 20, 2021")
// let date = new Date(milSec)
// console.log(date)




// let today, goodDay, textOut;
// today = new Date();

// goodDay = new Date();

// goodDay.setFullYear(2021, 10, 14)

// if (goodDay > today) {
//     textOut = "Today is before October 14, 2021"
// } else {
//     textOut = "Today is after October 14, 2021"
// }

// console.log(textOut)





// let exampleVar = setInterval(exampleTimer, 2000)
// function exampleTimer() {
//     let d = new Date();
//     return d.toLocaleTimeString();
// }


// console.log(exampleVar)







// let info = location.hostname;
// console.log(info)  //Output:  127.0.0.1




// console.log(Math.floor(Math.random() * 500) + 100)


// function myFunction(text) {
//     document.getElementById("example").innerHTML = "I hate learning programming from people online. They don't explain why they do certain things"
// }



// document.write(Date())
// document.write(" Hello Everyone. Thanks for tuning in today on KRS1 Radio")





// let element = document.getElementById("id1");
// element.innerHTML = "Welcome To Your Random Workouts"


// function myFunction(text) {
//     document.getElementById("example").innerHTML = randomFunction(randomPhrases)
// }


// let randomPhrases = [
//     "100 pushups", "150 burpies", "60 pushups",
//     "Jumping Jacks 2 Minutes", "75 burpies", 
//     "Plank for 10 minutes", "Jump rope 20 minutes", 
//     "Walking 1.5 hours"
// ]




// function randomFunction(ar) {
//     return ar[Math.floor(Math.random() * ar.length)]
// }



// document.getElementById("myImage").src = "/IMG_1794.jpeg";



//###########################################################################################################################################
// let nums = [10, 30, 50, 70];

// function multiplyElements(num=1){
//     return num * document.getElementById("multiplyBy").value;
// }

// function mapFunction(){
//     document.getElementById("result").innerHTML = nums.map(multiplyElements);
// }



//###########################################################################################################################################
// let people = [
//     { name : "Dan", age: 32 },
//     { name : "Joe", age: 45 },
//     { name : "Brian", age: 28 }
// ];

// function getNameAge(item, index) {
//     let nameAge = [item.name, item.age].join(" ")
//     return nameAge;
// }
// function mapFunction(){
//     document.getElementById("result").innerHTML = people.map(getNameAge);
// }

//###########################################################################################################################################

// reduce() function built-in JS
// const array1 = [55, 3, 76, 34]
// document.getElementById("test").innerHTML = array1
// function myFunction() {
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     document.getElementById("test").innerHTML = array1.reduce(reducer)
// }

// function sampleFunction() {
//     document.getElementById("sampleForm").submit();
//   }





//###########################################################################################################################################
//###########################################################################################################################################

//LEET CODE QUESTIONS

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it in the maximum amount of balanced strings.
// Return the maximum amount of split balanced strings.


// var balancedStringSplit = function(s) {
//     let val = 0, res = 0;
//     for (let x of s) {
//         x === 'R' ? val++ : val--;
//         if (val == 0) res++;
//     }
//     return res;
// };

// goulash = balancedStringSplit("RLLLLRRRLR")



// let strgSplitBalanced = function(s) {
//     let val = 0, res = 0;
//     for (let x of s) {
//         x === 'R' ? val++ : val--;
//         if (val == 0) res++;
//     }
//     return res
// }

// goulash2 = strgSplitBalanced("RLLLLRRRLR")
// console.log(goulash2)


//###########################################################################################################################################

//Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


// let nums = [0,0,1,1,1,2,2,3,3,4];   // Output should be:  [0, 1, 2, 3, 4]

// let i = 0;                          // Pointer
// let countUniqueValues = 0;          // Counter of unique values in the array

// for(let j = 1; j<= nums.length;)
// {
//     if (nums[j] != nums[i])         // If current value is different than next one
//     {
//         ++i;                        // Then move pointer 1 block forward
//         ++countUniqueValues;        // Counter add 1
//         nums[i] = nums[j];                  
//     }
//     j++;                             // If current value is same with next one, move next by add 1 to local loop pointer
// }   
// nums.splice(countUniqueValues)      // Before return result array, use splice to delete rest of filtered values
// console.log(nums)




//###########################################################################################################################################

//344. Reverse String


//Write a function that reverses a string. The input string is given as an array of characters s.

// function stringReverse(text) {
//    console.log(text.reverse())
// } 

// stringReverse(["h", "e", "l", "l", "o"])


// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// // Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]



// const array101 = [200, 500, 5838, 39, 29];

// function myFunction101() {
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     console.log(array101.reduce(reducer))
// }

// myFunction101()






// //Running Sum of 1d Array

// //Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// //Return the running sum of nums.


// var runningSum = function(nums) {
//     let sum = 0;
//     for(i = 0; i < nums.length ; i++){
//         sum += nums[i];
//         nums[i] = sum;
//     }
//     return nums;
// };



// let nums = runningSum([1,2,3,4])
// console.log(nums)


//###########################################################################################################################################
// Write a function called Triple add that returns the total of all numbers added together
// Example:    tripleAdd(10)(20)(30)   Output:  60

// function tripleAdd(num1) {
//     return function(num2) {
//         return function(num3){
//         return num1 + num2 + num3
//         }
//     }
// }

// tripleAdd(10)(20)(30); //return total of all 3 of these numbers





//###########################################################################################################################################
// What is an IIFE and why are they used. 
// Answer:  Immediately Invoked Function Expression or Self-Executing Anonymous Function. 
// A JS function that runs as soon as it's identified.
// These functions are called inside of the function so they don't have to be called outside of the function.
//the main reason to use an IIFE is to preserve a private scope within your function.



// (function numberTimesTwo(num) {
//     console.log(num * 2);
// })(10);


// //--------------------------------------
// //--------------------------------------   
//   (function() {
    
//     function getTotal(a, b) {
//       return a + b;
//     }
    
//     var $ = 'currency';
    
//     if (true) console.log('hello world');
    
//   })();
  
//###########################################################################################################################################

// //Look at the code shown. It adds five buttons to the screen. What will be alerted to the screen when you click button 5 and why? 

// function createButtons() {
//     for (let i = 1; i <= 5; i++) {
//       let body = document.getElementsByTagName("BODY")[0];
//       let button = document.createElement("BUTTON");
//       button.innerHTML = 'Button ' + i;
//       button.onclick = function() {
//            alert('This is button ' + i);
//       }
//       body.appendChild(button);
//     }
//  }
  
//  createButtons();





//###########################################################################################################################################

//What is a Closure?  Make an example
// A closure is an inner function

// function init(name) {
    
//     function displayName() {
//         console.log(name)
//     }
//     displayName();
// }

// init("Mozilla")




// const globalVariable = 'global var'

// function outterFunc(param1) {
//     const variable1 = "Var one"

//     function innerFunc(param2) {
//         const variable2 = "Var two"

//         console.log('globalVariable: ', globalVariable);
//         console.log('variable1: ', variable1);
//         console.log('variable2: ', variable2)
//     }
//     innerFunc('param one')
// }

// outterFunc('param two')


//###########################################################################################################################################

// What is the 'this' keyword and how is it used?
// It refers to whatever obejct it is directly inside of.   If you went into your browswer and typed console.log(this), it would refer to the global window.


// let house = {
//     price: 100000,
//     squareFeet: 2000, 
//     owner: 'Taylor', 
//     getPricePerSquareFoot: function() {
//         return this.price / this.squareFeet;  //this refers to the house object
//     }
// }

// console.log(house.price); //100000
// console.log(house.getPricePerSquareFoot()) // 50


//###########################################################################################################################################

// What is variable and function Hoisting?
// Variables and functions are hoisted to the top of the scope in which they are declared (global or function scope)
// So variable and function hoisting is when the JS interpreter looks ahead in the code to find all of the variable and function declarations, 
// and then it hoists those declarations to the top of the file...
// console.log(color)  // variable can't be accesed before initialization

// let color = "blue";     // behind the scenes, the interpreter hoists color to the top of the screen but doesn't set it equal to anything. Then as the interpreter moves through the file up to where it was originally declared, it sets the variable to the string "blue"




// console.log(getProduct(2, 3))  // Important:  Can't access the function yet because getProduct is a function expression (function has let, var, or const keyword).

// let getProduct = function(num1, num2) {
//     return num1 * num2
// }




// console.log(thisFunction(8, 9))  // This works fine and returns 17.  This is because thisFunction is a function declaration. 
// // Function declarations are useful because they make hoisting easier.


// function thisFunction(num1, num2) {
//     return num1 + num2
// }

//###########################################################################################################################################

// Hoisting - variables and functions are hoisted to the top of the scope that they are declared in  -  BLOCK SCOPE -this is present whenever there is a block of code. 


// function getTotal() {

//     let total = 0;       // this is hoisted to the top of the function; the function getTotal is the only block that "total" is located in.

//     for(var i = 0; i < 10; i++) {
//         let valueToAdd = i;     //  "valueToAdd" is hoisted to the top of the for Loop, not to the top of the function. 
//         var multiplier = 2;     //   This is hoisted to the top of the function; since the "var" keyword is global scoped, it's not block scoped
//         total += valueToAdd * multiplier;   
//     }

//     return total;
// }

//###########################################################################################################################################

// var myCar = {
//     color: "Blue",
//     logColor: function() {
//         var self = this;
//         console.log("In logColor - this.color: " + this.color);     //output:  Blue
//         console.log("In logColor - self.color: " + self.color);     //output:  Blue
//         (function() {
//             console.log("In IIFE - this.color: " + this.color);     // Undefined   Since 'this' can't look outside of the new function. 
//                                                                     // If there were a globabl vairable above the function like this.color = "Blue"
//                                                                     // then the output would show "Blue". This is why it's best to set 'this' to a vairable "self"
            
//             console.log("In IIFE - self.color: " + self.color);     //output:  Blue
//         })();
//     }
// };
 
// myCar.logColor();

//###########################################################################################################################################
//   Extra Hoisting Example - A tricky way hoisting works

// var num = 50;
 
// function logNumber() {
//     console.log(num);      //Output:  Undefined.......You'd think the output would be 50. look at below function to see it under the hood.
//     var num = 100;
// }
 
// logNumber();






// var num = 50;
 
// function logNumber() {
//     var num;            //In the above function, 'num' is called at the top of the function here but without the value of 100. 
//                         // The value of 100 only gets assigned where you assigned it at the bottom. Since you console.logged it before
//                         // 100 was assigned, the output is undefined. 
//     console.log(num);      
//     var num = 100;
// }                       // Changing all 'var' elements to 'let' makes the code run correctly.  
//                         // Var is an ES5 element that still comes up in interviews and companies need programmers to understand elements of ES5
//                         // Since a lot of older code used this syntax. Programmers need to know the under-the-hood reasons we use "let" and "const"
 
//###########################################################################################################################################
// Strict Mode  - It's considered best practice to put 'use strict' at the beginning of source code. 
// Reason: The benefits of using strict mode or 'use strict' is to enforce stricter parsing and error handling in your code
// 1.  Prevents the use of globabl variables
// 2.  All parameter names for a function must be unique
// 3.  Deleting properties that you shouldn't delete


// // Example 1:
// 'use strict'        // Since we forgot to use let or const below, use strict will show and error 'city is not defined,' which is a good thing.
//                     // This saves a lot of bugs as the code becomes larger. 


// city = "London"    // Notice we forgot to use a keyword like "let" or "const"

// console.log(city);  //Output:  London  Undefined.



// // Example 2:
// 'use strict'

// function myFunc(a, a, b) {
//     console.log(a, a, b);
// }

// myFunc(1, 2, 3) // If 'use strict' is at the top of your code, you'll get an error because in your function, there are two 'a' variables. You want the error.
//                 // If 'use strict' wasn't at the top of your code, it would run with no error, even though you have 2 'a' variables... bugs down the line.


// // Example 3:


// delete Object.prototype;   // this should never be deleted since its an object constructor that's built into Javascript. 
//                             //  In strict mode, you'd get an error that tells you not to delete this important object. So always use 'strict mode'

//                             // Summary: basically, if you're doing something that isn't the best practice, strict mode stops/warns you of the issue.


//###########################################################################################################################################
// // Curry Function  - To curry a function, you must take a single functin and return more functions

// // function getProduct(num1, num2) {
// //     return num1 * num2;                  This is the first function that we will curry below
// // }

// function getProduct(num1) {
//     return function(num2) {
//         return num1 * num2
//     };
// }


// getProduct(10)(20)   // Output: 200




// //Example 2    Practical Example of why we'd curry a function. 
// // This function will show us how long it takes to travel any distance at a certain speed. 

// function getTravelTime1(distance, speed) {
//     return distance / speed;
// }

// getTravelTime1(600, 50);  // Output 12
// // If your distance never changed, meaning it's always 600, and you simply just want to know a different speed, then you'd have to write in
// // 600 each time you call the function.  So the below is why you'd curry this function.  



// function getTravelTime2(distance) {
//     return function(speed) {
//         return distance / speed;
//     }
// }


// const travelTimeBosNyc = getTravelTime2(400);
// console.log(travelTimeBosNyc(100))  // Output: 4

//###########################################################################################################################################
// Counter Function  -  Create a function that returns how many times the function was called.
// One of the best ways to make a function keep track of itself is with a closure.

// function myFunc() {
//     let count = 0;

//     return function() {     //This function is the closure
//         count++;            // You called the count at the top of the first function. Here you just increase the count.
//         return count;       // Simply return the count to see what it is.
//     }
// }

// console.log(myFunc());

// const instanceOne = myFunc();
// const instanceTwo = myFunc();

// console.log('instanceOne: ', instanceOne())
// console.log('instanceOne: ', instanceOne())
// console.log('instanceOne: ', instanceOne())
// console.log('instanceOne: ', instanceTwo())
// console.log('instanceTwo: ', instanceTwo())
// console.log('instanceOne: ', instanceOne())
// // Output:  Each time an instance runs, it shows the number of times it ran.
// // Closures are very important. If you wanted to, in myFunc you could place a For Loop that says that count can only be ran 4 times or else
// // an error is thrown. You may want to do this if you only want your function ran a limited number of times.

//###########################################################################################################################################
//Logging X and Y :  What is the output of x and what is the output of y in the function below?

// (function() {
//     var x = y = 200;
//   })();
   
//     console.log('y: ', y); // Output:  200   This is because under the hood, you're saying y = 200 with no variable. Thus y is a global variable
//                             // Then you're saying var x = y which makes x non accessible outside if the IFFE function
//                             // IMPORTANT:  if you used 'strict mode' at the top of the file, you'll get the error that y is not defined, which is good.
//     console.log('x: ', x);  // Undefined because you can't access it outside of the IFFE function



//###########################################################################################################################################
// What are Call and Apply methods?  How do they function?  How are they different?   Very Important concept.

// call()     Any function that you define in JS can use the call method
// The call method gives you an alternative way to call your functions instead of the normal way we call functions. 



// ---------CALL METHOD------
// 'use strict'


// const car1 = {
//     brand: 'Porche',
//     getCarDescription: function(cost, year, color) {    // this line is a method (similar to Python methods inside of Classes)
//         console.log(`This car is a ${this.brand}. The price is $${cost}. The \
//         year is ${year}. The color is ${color}.\n`);
//     }
// }


// const car2 = {
//     brand: 'Lamborghini'
// };


// car1.getCarDescription(80000, 2010, 'blue');   //normal way to call the function. Gives you the correct info in the output.

// // With the call method, you can change what the "this" is in the getCarDescription above....

// //USing the Call method
// car1.getCarDescription.call(car2, 2000000, 2013, 'yellow')
// // Here you called car1, then in the parenthesis you passed in car2 as the 'this context. Then you just pass in the rest of the arguments that 
// // getCarDescription takes (cost, year, color)


// // --------APPLY METHOD------
// // Apply is basically the same as the Call method with one major difference: when passiging in paramaters, you pass them in as an array.

// const car3 = {
//     brand: 'Ford'
// }


// car1.getCarDescription.apply(car3, [35000], 2012, 'black');
// // So when choosing whether to use call or apply, it depends on if you need to pass in an array or not when calling a function.


//###########################################################################################################################################
// Question 1: What will list 2 contain when it's printed out to the console?

const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
 
list1.push(6, 7, 8);
 
// console.log(list2);



// Question 2: How can we set list02 equal to an array that has the same value as list1 without actually referencing the same 
// underlying array that list one does?   Answer:  Make a copy of list1 and assign it to list2. This way we have 2 arrays of the same value
// But they are completely separate. So updating one wont affect the other.

const list01 = [1, 2, 3, 4, 5];
const list02 = list1.slice();    // this copies all of the elements in list one and returns them as an array.
// we can also use the concat method:    const list02 = list01.concat([])

list1.push(6, 7, 8);
 
console.log(list02);








//###########################################################################################################################################
//###########################################################################################################################################
//https://www.bitdegree.org/learn/javascript-array-methods#javascript-array-methods-main-tips
//https://www.bitdegree.org/learn/javascript-sort-array


//https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/?currentPage=1&orderBy=hot&query=&tag=javascript