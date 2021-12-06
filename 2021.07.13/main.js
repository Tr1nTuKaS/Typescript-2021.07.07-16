// let arr = [1,2,3,4,5,6,7]
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr.pop())

// console.log(arr)
// let arr = ["Labas","iki","Taip","Ne"]
// let str = arr.pop() 
// console.log(arr.pop())
// console.log(arr.pop())

// console.log(arr)
// console.log(str)
////////////////////////////////
//remove last element from array, add it to result string, console log both of them

// const arr = ['zuvis', 'zvejyba', 'ezeras', 'meduolis']
// let str = arr.pop()
// let result = "Mmmmm koks velniskai skanus "
// result += str
// console.log(result)

////////////////////////////////
//return right type of values to their arrays

// const arrayWithNumbers = [1, 5, 9, 6, 'sun']
// const arrayWithString = [5, 'grass', 'nature']

// let str = arrayWithNumbers.pop()
// let num = arrayWithString.shift()

// arrayWithNumbers[4] = num
// arrayWithString [2] = str

// console.log(arrayWithNumbers)
// console.log(arrayWithString)

// let arr = ["Pirmas","Antras","Trecias"]
// arr.push("Ketvirtas","penktas")// prideda i gala
// arr.unshift("Nulinis")// prideda i prieki
// console.log(arr)
////////////////////////////////
//add 3 new products to shopping list array
// const shoppingList = ['tomatoe', 'milk']
// shoppingList.push("Majonez","Chees","Morkos")
// console.log(shoppingList)
////////////////////////////////
//remove first and last values from array1 and add them to empty array
// let array1 = ['first value', 2, 6, 4, 7, 'second value' ]
// let emptyArray = []
// let first =array1.shift()
// let last = array1.pop()
// emptyArray[0] = first
// emptyArray[1] = last
// console.log(emptyArray )
//emptyArray.push(array1.pop(),array1.shift())
////////////////////////////////
// //add arrayTwo to begining of arrayOne, console log value from arrayTwo
// let arrayOne = [5, 8,"anything", [5, 88]]
// let arrayTwo = [879, 'get this string']
// arrayOne.unshift(arrayTwo)
// console.log(arrayTwo)

// let arr = [1,2,3,4,5]
// arr.map(x => console.log(x*5))
// const lyricsOne = "vejas man pasake vien tavo varda"
// const lyricsTwo = "bet taves surasti as negaliu,"
// const lyricsThree = "kai pilka kregzdute padangem nardo"
// const lyricsFour = "jai labai pavydziu zydru keliu"
 
// let lyricsTotalLength = lyricsOne + lyricsTwo + lyricsThree + lyricsFour
// console.log(lyricsTotalLength.length)

// // Make lyricsTotalLength value to be length of all lyrics strings summed up
// let totalLengthInString = lyricsTotalLength.length +"is total length of lyrics"

// console.log(totalLengthInString)

// // Make totalLengthInString value to be " (NUMBER) is total length of lyrics"
// let lyricsStringAverageLength = lyricsTotalLength.length / 4

// console.log(lyricsStringAverageLength)

// // make lyricsStringAverageLength value to be mathematical expression
// // which counts average length of lyrics string
// const firstLetters = [lyricsOne[0] + lyricsTwo[0] + lyricsThree[0] + lyricsFour[0]];
// firstLetters.push(lyricsOne[0],lyricsTwo[0],lyricsThree[0],lyricsFour[0])
// console.log(firstLetters)
// // Get first letter of each lyrics string, add it array, using .push() or .unshift()
// const lastLetters = [lyricsOne[31] + lyricsTwo[28] + lyricsThree[33] + lyricsFour[29]]
// lastLetters.push(lyricsOne[lyricsOne.length-1],lyricsTwo[lyricsTwo.length-1],lyricsThree[lyricsThree.length-1],lyricsFour[lyricsFour.length-1])
// console.log(lastLetters)
// // Get last letter of each lyrics string, add it array, using .push() or .unshift()
 
// const authorsNameHidden = [
//     47,
//     'saldytuvas',
//     ['5877', [654, 'Danute'], 99, '', [88, 6547, 686, 'paprika', 1, [44, 'Neimontaite']]]
// ]
// console.log(authorsNameHidden [2][1][1],authorsNameHidden [2][4][5][1])
// // Get authors name from array, make authorsName value to be string with authors name and surname

// const numbersRandom = [0, 5, 6, 8, 1, 2, 3, 7]
// const ascendingOrder = [4]
// ascendingOrder.unshift(numbersRandom[0],numbersRandom[4],numbersRandom[5],numbersRandom[6])
// ascendingOrder.push(numbersRandom[1],numbersRandom[2],numbersRandom[7],numbersRandom[3])
// console.log(ascendingOrder)
// // Using .push() and .unshift() put numbers from numbersRandom to ascendingOrder in ascending order
// // numbersRandom array should not be updated or edited
 
// const coldThings = ['hot', 'hot', 'cold', 'cold', 'cold']
// const hotThings = ['hot', 'hot']
// hotThings.push(coldThings.shift(),coldThings.shift())
// console.log(hotThings)
// console.log(coldThings)
// // get hot strings from coldThings array, using .shift() method, and .push() it to hotThings array
 
// const arrayVariable = [2, 0, "any", [687, 'any', true, ['Black Cat', 0, false]]]
// let mycat = `arrayVariable has ${arrayVariable} items inside i have ${arrayVariable[3][3].shift()}`
// console.log(mycat)
// // remove 'Black Cat' from arr, make myCat value to be "arrayVariable has (number) items inside, i have Black Cat"
 
// check if counter is more than 74 * 8 if yes console.log length of firstLetters array
let data = {
    arrayItems: ['Zodziai ivairus', "naujas sakinys", 'sakinys be 858 skaiciu'],
    firstLetters: [],
    counter: 254 * 3
}
if(data.counter > 74 * 8) console.log(data.firstLetters.length)
// console log first item from arrayItems in upperCase
console.log(data.arrayItems[0].toUpperCase())
// console log last item from arrayItems in lowerCase
console.log(data.arrayItems[data.arrayItems.length-1].toLowerCase())
// create a new key in data object to have Boolean type
 data.newBoolean = true 
// check if newly created key is true or false if true create one more key in data object
if(data.newBoolean) data.newRandom = "Naujas Random"
console.log(data)