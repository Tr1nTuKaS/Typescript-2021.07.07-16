// const random = Math.floor(Math.random() * 10) + 1
// console.log(random)

// let i = 0
// do{
//     alert(i)
//     i++
// }
// while( i < 5)

// let name1 = "Piotras"
// let surName = "Butkevic"
// let nameSur = "Lorensas"
// console.log(name1[3])// istraukti butent ta raide

// let first = "laba diena"
// let second = "Mano vardas Piotras"
// console.log(first + " " + second)

// let first = 55
// let second = "33"
// console.log(first * second)// daugyba dalyba atleka mat. veiksmus tik + nekeicia stringo

// let name1 = "Andrius"
// let name2 = "Tomas"
// let name3 = "Petras"
// // Make word Pienas to be appear in console log, using provided variables
// console.log(name3[0] + name1[4] + name3[1] + name1[1] + name3[4] + name3[5])

// //////////////////////////////
// //Declare five constant variables, assign different type of value to each of them
//  const one = 34
//  const two = "piotras"
//  const three = "0"
//  const four = ["Vilnius", "Kaunas","Klaipeda"]
//  const five ={
//      name : "Piotras",
//      city : "Vilnius",
//      hase : "Benamis"
//  }

// ////////////////////////////////
// let first = 22
// let second = 48

// let valueOfFirstAndSecond = first + second
// console.log(valueOfFirstAndSecond)

// ////////////////////////////////
// //substract second from first, divide by third, multiply by fourth

// const first2 = 100
// const second2 = 30
// const third = 2
// const fourth = 5
// let nzn = first2 - second2
// let gal = nzn / third
// let result = gal * fourth
// //let result = ( (first - second) / third) * fourth
// console.log(result)

// ////////////////////////////////
// //Declare a variable with value 99
// let num = 99
// let value1= num / 3
// console.log(value1)
// //log(33)
// let value2= value1 - 3
// console.log(value2)
// //log(30)
// let value3= value2 + 22
// console.log(value3 + " kortos yra kaladej")
// //log("52 kortos yra kaladej")

// //////////////////////////////
// //make result value to be "trains are cool, so i like trains"
// const quote1 = "trains are cool"
// const quote2 = "i like trains"

// let result = quote1 + ",so " + quote2
// console.log(result)
// let result2 = `${quote1},so ${quote2}`
// console.log(result2)

// ////////////////////////////////
// //make result to be "B is the second letter of alphabet"

// const forstOrSecond = ['first', 'second']
// let valueOne = "A is the"
// const valueTwo = "letter of alphabet"
// valueOne = valueOne.replace("A", "B")

// let result0 = `${valueOne} ${forstOrSecond} ${valueTwo}`
// console.log(result0)
// let result3 = valueOne + " " + forstOrSecond[1] + " " +valueTwo
// console.log(result3)

// //////////////////////////////
// //make rasult to be "this string length is ___"

// const string = "this string length is "

// console.log(string + string.length)

////////////////////////////////
//get last object of array, and divide it by 2

const arr = [5, 12, 18, 30, 40]
let result4= arr[4] / 2
console.log(result4)
let result5 = arr[arr.length-1] / 2
console.log(result5)
//change value of 'pienas' to 'jogurtas
let shoppingList = ['duona', 'ledai', 'maisto katinui', 'bananai', 'gyvenimo prasme', 'pienas', 'sokoladas']
shoppingList[shoppingList.length-2] = "Jogurtas"
console.log(shoppingList)

////////////////////////////////
//make result to be "ohh baby its cold outside"
const randomWords = [0, 20, "ohh", [78, "baby"], ['its cold', 11, 22], 'outside']
 let result = randomWords[2] + " " + randomWords[3][1] + " " + randomWords[4][0] + " " + randomWords[5]
console.log(result)

////////////////////////////////

let numbers = [1, 5, 2, 52, 88, 4]
let streetName = "Kestučio gatve"

//replace streetName to be "Kestucio"
streetName = "Kestučio"
console.log(streetName )
//create new variable to be "Kestucio 52-4" using back ticks and numbers from array
let adress = `${streetName} ${numbers[3]}-${numbers[numbers.length-1]}`
console.log(adress)
//create new variable to have last symbol of before created variable multiplied by fourth number from numbers array
let varvar = adress[adress.length-1] * numbers[3]
console.log(varvar)