// let task = {
//     first: [ 454, 87,65, { two: 'aaa',
//                            one: 'peasdegergasdoiuwerasdasdvLe'},
//                             [ 8874, 51, ['s', 'd', 'A',],99 ]],
//     second: {
//         oneMore: { arr: [ 'opaa', 'betkas', {
//                     letterYouNeed: {
//                         maybeHere: "maybe yes maybe no",
//                         lookDeeper: [ 45,88, [68,32, ["ss", "B", "fsdftg"], 987]]}}, 'kaip sekasi', {
//                              snow: ['white','white',{ moreSnow: 'laskkm68478468lasasdiujtsdasdaefertlkgsdyfisdyf_____S'
//                         }
//                     ]
//                 }
//             ],
//         }
//     }
// }
// // extract upper case letters and make word - LABAS
// function sayHello(){
// console.log(task.first[3].one[task.first[3].one.length-2]+task.first[4][2][2]+task.second.oneMore.arr[2].letterYouNeed.lookDeeper[2][2][1]+task.first[4][2][2]+task.second.oneMore.arr[4].snow[2].moreSnow[task.second.oneMore.arr[4].snow[2].moreSnow.length-1])
// }
// sayHello()
// let one = {
//     numbers: [25, 87, 684, 2874, 687, 28, 68],
//     words: ['first', 'second', 'third', 'forth'],
//     objects: [{one: 'EMPTY'}, {two: 'replace to milk', three: 'full'}],
//     arrays: [[[[[[[[84, 85, 257, 577, 'word', 'small', 'BIG']]]]]]]]
// }
// //create new key in object make it value to be first and last numbers from 'numbers' key (remove them from array)
// one.newKey = one.numbers.shift() + one.numbers.pop()
// // make something with number 2874 in 'numbers' so it becomes string, and replace 28 with $$
// one.numbers[2] = "$$" + one.numbers[2].toString().replace("28","")
// //one.numbers[2] = String(one.numbers[2])
// console.log(one.numbers[2]) 
// // take out last word from 'words' and put it to beginning of the array, make it to be upperCase
// let last = one.words.pop()
// one.arrays[0][0][0][0][0][0][0].unshift(last.toUpperCase())
// // replace second word in 'words' array to be 'secondddddd' and add its length to the and of word
// one.arrays[0][0][0][0][0][0][0][1] = "secondddddd"
// one.words.push( one.words[2].length)
// // remove last word from 'words' array and put it to new key in object 'lostWord'
// one.lostWord = one.words.pop()
// // in key 'objects', replace text 'replace to milk' to - 'replace to silk'
// one.objects[1].two ='replace to silk'
// //one.objects[1].two = one.objects[1].two.replase(`milk`,`silk`)
// console.log(one.objects)
// // in key 'objects', make EMPTY to be in lower case, and replace its last letter with '88'
// one.objects[0].one = one.objects[0].one.toLowerCase()
// one.objects[0].one = one.objects[0].one.replace(``,`88`)
// // in key 'arrays' make all text in lower case to be upper case and vice versa
// one.arrays[0][0][0][0][0][0][0][1]
//  let arr = one.arrays[0][0][0][0][0][0][0][1]
//  for(let i=0;i<arr.length;i++){
//    //  console.log(typeof arr[i])
//  if(typeof arr[i] === "string"){
//  }else if (arr[i] === arr[i].toLowerCase()){
//      // console.log("LowerCase",arr[i])
//       one.arrays[0][0][0][0][0][0][0][i] = arr[i].toUpperCase()
//   }else{
//    // console.log("UpperCase",arr[i])
//    one.arrays[0][0][0][0][0][0][0][i] = arr[i].toUpperCase()
//   }
//  }


// function doStuff(){
//  one.newKey = one.numbers.shift() + one.numbers.pop()
//  one.numbers[2] = one.numbers
//  //one.numbers[2] = String(one.numbers[2])
//  //one.numbers[2] = one.numbers[2].toString().replace(`28`,`$$`)
//  one.numbers[2] = `$$` +one.numbers[2].toString().replace("28","")
//  one.words.unshift( one.words.pop().toUpperCase())
//  one.words[2] = "secondddddd"
//  one.words.push( one.words[2].length)
//  one.lostWord = one.words.pop()
//  one.objects[1].two =  one.objects[1].two.replace(`milk`,`silk`)
//  one.objects[0].one = one.objects[0].one.toLowerCase()
//  one.objects[0].one = one.objects[0].one.replace(``,`88`)
//  one.arrays[0][0][0][0][0][0][0][1]
//  let arr = one.arrays[0][0][0][0][0][0][0][1]
//  for(let i=0;i<arr.length;i++){
//    //  console.log(typeof arr[i])
//  if(typeof arr[i] === "string"){
//  }else if (arr[i] === arr[i].toLowerCase()){
//      // console.log("LowerCase",arr[i])
//       one.arrays[0][0][0][0][0][0][0][i] = arr[i].toUpperCase()
//   }else{
//    // console.log("UpperCase",arr[i])
//    one.arrays[0][0][0][0][0][0][0][i] = arr[i].toUpperCase()
//   }
// one.nums = []
// for(i=0;i<one.numbers.length;i++){
// if(one.numbers[i].toString().includes(`7`)){
// one.nums.push(one.numbers[i])
// }
// }
// for(i=0;i<one.numbers.length;i++){
//     if(arr[i].toString().includes(`7`)){
//     one.nums.push(arr[i])
// }
// }
//  }
//  console.log(one)
// }
// doStuff()
// create new object with key 'nums' to be empty array
// take all numbers which has 7 from object one and put to newly created object array 'nums'
// one.nums = []
// for(i=0;i<one.numbers.length;i++){
// if(one.numbers[i].toString().includes(`7`)){
// one.nums.push(one.numbers[i])}}
/////////////////////////////////////////////////////////////////////////////////
// let arr = [
//     15,
//     47,
//     {
//         sup: {name: 'sriuba', cost: 1.5},
//         supTwo: {name: "makaronai", cost: 3.20},
//         supThree: {
//             name: 'kompotas', cost: 0.20
//         }
//     },
//     [879, true],
//     {totalMoney: 3.50}
// ]
// //check if you can buy 'makaronai' by checking is total money enough for cost of makaronai
// function sup(){
//     if(arr[4].totalMoney > arr[2].supTwo.cost){
//         console.log("Yes")
// }
// }
// sup()
// // if money is enough buy makaronai by removing makaronai cost from total money
// arr[4].totalMoney = arr[4].totalMoney -  arr[2].supTwo.cost

// // and log - bought (makaronai) for (makaronai cost), money left (totalMoney)
// console.log(arr[2].supTwo.name,arr[4].totalMoney)
// // check if there is enough money left for kompotas if yes buy kompotas, by removing kompotas cost
// arr[4].totalMoney = arr[4].totalMoney - arr[2].supThree.cost

// // from total money and log - bought kompotas from - (kompotas cost), money left (totalMoney)

// // check if there is enough money for sriuba if yes remove sriuba cost from totalMoney

// let words = [1,2,3,4,5,6,8,4,9,10]
 
// // map through array and console log each of items

// // map through array and console log each of items index
// // map through array and console log each of items and index summed up
// // map through array and convert each of items to new string - create new array
// // map through array and multiply each of elements by its index - create new array
// // map through array and convert items to string if their index is more than 4 - create new array
//  let arr = []
//  let arr1 =[]
//  for(let i=0;i<words.length;i++){
//     console.log(words[i])
    
//     console.log(i)
    
//     console.log(i + words[i])

//     arr.push(words[i].toString)

//     arr1.push(words[i] * i)

//     if(i>4){
//         arr1.push(words[i].toString())
//     }
// }
// console.log(arr)

// let strings = ['first', 'second', 'third', 'fourth', 'fifth']
 
// //map through array of strings and console log length of each of strings
// // map through array of strings and console log first and second words letters summed up
// // map through array of strings and add "this is" to beginning and "word" to the end of each string
// // create new array with all strings in upper case
// // create new array make its values to be lengths of strings
// let nan = []
// let nan1=[]
//  for(let i=0; i<strings.length; i++){
//     console.log(strings[i].length)

//     console.log(strings[i][0]+strings[i][1])

//     console.log("this is" + strings[i] + "word")
//     nan.push(strings[i].toUpperCase())
//     console.log(nan)
//      nan1.push(strings[i].length)
//      console.log(nan1)
// }


let thing = {
    numbers: [1, 2, 3, 4, 5, 6, 7],
    words: ['word', 'sword', 'honda accord', 'board', 'tort', 'sport', 'ord'],
    answers: []
}
 
// using map go through numbers array log each of them
// using map go through words array and log each string first letter
// map through numbers and multiply each of them by its index
// map through words and add each string length to the end of string
// map numbers and words at same time, multiply numbers by words length and put answers to answers array
for(let i = 0;i <thing.numbers.length;i++){
    console.log(thing.numbers[i])
}
for(let i = 0;i <thing.words.length;i++){
    console.log(thing.words[i][0])
}
for(let i = 0;i <thing.numbers.length;i++){
    console.log(thing.numbers[i] * i)
}
for(let i = 0;i <thing.words.length;i++){
    console.log(thing.words[i] + thing.words[i].length)
}

//thing.answers.push(thing.numbers[i] * thing.words[i].length)

//thing.answers.push(thing.words[index].length * items)

console.log(thing)

// thing.numbers.map(item,index)=>{
//     thing.answers.push(thing.words[index].length * item)
// }
// thing.numbers.map(item,index) => {
//     thing.answers.push(thing.words[index].length * thing.numbers[index])
// }