// function sayHello(){
//     console.log("Hello")
// }
// sayHello()

// function sayHello1(){
//     let name= "Piotr"
//     let age= 34
//     let surname = "Butkevic"
//     console.log( name,surname,age)
// }
// sayHello1()

// function logData(myCity,myCountry){
// console.log(myCity,myCountry)
// }
// let city ="Vilnius"
// let country = "Lithuania"
// logData(city,country)

// function logData(myObj){
//     console.log(myObj)
//     }
//   let obj ={
//       name: "Piotras",
//       city:"Vilnius",
//       country:"Lithuania"
//   }
//     logData(obj)
//Create a function that takes two numbers as arguments and return their sum.
// addition(3, 2) //➞ 5
// addition(-3, -6) //➞ -9
// addition(7, 3) //➞ 10
//  function addition(num1, num2){
//    console.log(num1 + num2)
//  }

////////////////////////////////////////////////////////
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// addition(0) //➞ 1
// addition(9) //➞ 10
// addition(-3) //➞ -2
//  function addition(num){
////     num+=1
//      console.log(num +1)
//  }
// ////////////////////////////////////////////////////////
//Create a function that takes an array and returns the first element.
// getFirstValue([1, 2, 3]) //➞ 1
// getFirstValue([80, 5, 100]) //➞ 80
// getFirstValue([-500, 0, 50]) //➞ -500

//  function getFirstValue(arr){
//      console.log(arr[0])
//  }
// /////////////////////////////////////////////////////////
// Write a function that converts hours into seconds.
// howManySeconds(2) //➞ 7200
// howManySeconds(10) //➞ 36000
// howManySeconds(24) //➞ 86400
//  function howManySeconds(hour){
//      console.log(hour * 3600)
//  }
// /////////////////////////////////////////////////////////
//Write a function that returns the string "something" joined with a space " " and the given argument a.
//  function giveMeSomething(str){
//      console.log( `something ${str}`)
// }
// giveMeSomething("is better than nothing") //➞ "something is better than nothing"
// giveMeSomething("Bob Jane") //➞ "something Bob Jane"
// giveMeSomething("something") //➞ "something something"
/////////////////////////////////////////////////////////
// // Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
//  function lessThanOrEqualToZero(num){
//   //  console.log(num <=0)
//      if(num<=0){
//      console.log(true)
//   }else{
//       console.log(false)
//   }
//   }
// lessThanOrEqualToZero(5) //➞ false
// lessThanOrEqualToZero(0) //➞ true
// lessThanOrEqualToZero(-2) //➞ true
// //Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// lessThan100(22, 15) //➞ true
// lessThan100(83, 34) //➞ false
// lessThan100(3, 77) //➞ true
// function lessThan100(num1,num2){
//     console.log(num1+num2< 100)

//     if(num1+num2 < 100){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
////////////////////////////////////////////////////
 //Create a function that returns true when num1 is equal to num2; otherwise return false.
// isSameNum(4, 8) //➞ false
// isSameNum(2, 2) //➞  true
// isSameNum(2, "2") //➞ false
// function isSameNum(num1,num2){
//   console.log(num1 === num2)
// }
//////////////////////////////////////////////////
 //Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points
// footballPoints(3, 4, 2) //➞ 13
// footballPoints(5, 0, 2) //➞ 15
// footballPoints(0, 0, 1) //➞ 0
//  function footballPoints(won, draw, loss){
//      let points = 0
//      points += won * 3
//      points += draw
//      console.log(points)
//  }
// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram")
// as input and calculates the area of that shape.

// Area of a triangle is 0.5 * b * h
// Area of a parallelogram is b * h
// Assume triangle and parallelogram are the only inputs for shape.
//  function count(base,height,shape){
//      if(shape === "triangle"){
//      console.log(0.5 * base * height)
//      }else{
//          console.log(base * height)
//      }
//  }
//////////////////////
// Create a function that returns a number, based on the string provided.
// Here is a list of all digits (if you are non english speaker):
 
// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
 
// word("one")
// word("two")
// word("nine")
//  function word(word){
//      if(word === "one") console.log(1)
//      if(word === "two") console.log(2)
//      if(word === "three") console.log(3)
//      if(word === "four") console.log(4)
//      if(word === "five") console.log(5)
//      if(word === "six") console.log(6)
//      if(word === "seven") console.log(7)
//      if(word === "eight") console.log(8)
//      if(word === "nine") console.log(9)
//  }
//  function word(word){
//      let arr = ["zero","one", "two","three","four","five","six","seven","eight","nine"]
//      console.log(arr.indexOf(word))
//  }
//    arr.map((item, index) => {
//          if(word === item)
//          console.log(index)
//      })
//     }
// for(let i=0;i<arr.length;i++){
//     i(wort === arr[i])
//      console.log(i)
// }
/////////////////
 
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name,
// return the relation of that person to Luke.
//
// Person	    Relation
// Darth Vader	father
// Leia	        sister
// Han	        brother in law
// R2D2	        droid
 
// function relationToLuke(name) {
//     if (name === "Darth Vader") {
//         return console.log('Luke, I am your father.')
//     }
 
//     if (name === "Leia") {
//         return console.log('Luke, I am your sister.')
//     }
 
//     if (name === "Han") {
//         return console.log('Luke, I am your brother in law.')
//     }
// }
// relationToLuke("Darth Vader") //➞ "Luke, I am your father."
// relationToLuke("Leia") //➞ "Luke, I am your sister."
// relationToLuke("Han") //➞ "Luke, I am your brother in law."
 
////////////////////////////
 
// Try finding your ancestors and offspring with code.
//
//     Create a function that takes a number x and a character y ("m" for male, "f" for female),
//     and returns the name of an ancestor (m/f) or descendant (m/f).
//
//     If the number is negative, return the related ancestor.
//     If positive, return the related descendant.
//     You are generation 0. In the case of 0 (male or female), return "me!".

// generation(2, "f") //➞ "granddaughter"
// generation(-3, "m") //➞ "great grandfather"
// generation(1, "f") //➞ "daughter"
//  function generation(num,gender){
//     //  if(num === -3) num = 0
//     //  if(num === -2) num = 1
//     //  if(num === -1) num = 2
//     //  if(num === 0) num = 3
//     //  if(num === 1) num = 4
//     //  if(num === 2) num = 5
//     //  if(num === 3) num = 6
//       num = num + 3
//      let generations ={
//          male: [ "great grandfather","grandfather","father","me!","son","grandson","great grandson" ],
//          female: [ "great grandmather","grandmather","mather","me!","daughter","granddaughter","great granddaughter" ] 
//      }
//         //  if(gender === "f"){
//         //      console.log(generations.female[num])
//         //  }else{
//         //     console.log(generations.male[num])
//         //  }
//          gender === "f" ? generations.female[num] : generations.male[num]      
//  }
// Notes
// Resources tab for helpful hints.
//
// Generation	Male	             Female
// -3	        great grandfather	 great grandmother
// -2	        grandfather	         grandmother
// -1	        father	             mother
// 0	        me!	                 me!
// 1	        son	                 daughter
// 2	        grandson	         granddaughter
// 3	        great grandson	     great granddaughter
let abc = 'abcdefghijklmnoprstuvz'
let arrayOfStuff = ['stuff one', 'stuff two', 'stuff three']
let number = 889
let emptyObject = {}

// add key to emptyObject and make its value to be arrOfStuff

// add key to emptyObject and make its value to be "number" divided by arrayOfStuff length

// create new key in empty object and make "abc" to be its value

function doStuff(){
    emptyObject.keyOne = arrayOfStuff
    emptyObject.keyTwo = number / arrayOfStuff.length
    emptyObject.newKey = abc
}
doStuff()
console.log(emptyObject)