 //          1     
let  str = "Piotras"
let i = 0 === str
do{
    console.log(str)
    i++
}while(i < 3)
//          2
let combo = "Sakyk"
const times = 5
let i1 = 0 === combo
do {
    console.log(combo)
    combo += "Taip "
    i1++
  }while (i1 < times)
//          3

//          4
const num = Math.floor(Math.random() * 5)+1
console.log(num)
//          5
const num1 = Math.floor(Math.random() * 8) + 5
console.log(num1)
//          6
const num3 = 5
if(num >= num3){
    alert("Jus laimejote ... Ar kartosite?")
}else{
    alert("Jus bilietas nieko nelaimejo")
}
//          7
let auto = Math.floor(Math.random() * 15) +1
let TV  = Math.floor(Math.random() * 15) +1
let win  = Math.floor(Math.random() * 15) +1

switch(auto) {
    case 1 :
    console.log("Jus laimejote automobili")
}
switch(TV){
    case 1, 2, 3:
    console.log("Jus laimejote Televizoriu")
}
switch(win){
    case 1, 2, 3, 4 ,5:
    console.log("Jus laimejote 2 Eurus")
    }
//          8
//document.body.textContent = "<h2>Piotras</h2>"
//          9
document.getElementById("name").textContent = "Piotras"
// //          10
document.querySelector("p:nth-child(4)").textContent = "Suris"
//          11
document.querySelectors("p").textContent = "blue" // nesigauna
//          12
