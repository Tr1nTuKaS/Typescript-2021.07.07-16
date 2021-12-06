//          1
let age = 34
let gm = 2021 - 34
console.log(gm)
//          2
// <script src=""></script>
//          3
let car = "Volksvagen"
switch(car){
    case "Audi":
    case "Bentley" :
    case "Bugatti" :
    case "Lamborghini" :
    case " Porsche" :
    case "Volksvagen" :
    alert( "Tas brand'as priklauso VW Group")
    break;
    case "BMW" :
    case "Mini" :
    case "Rolls-Royce" :
        alert( "Tas brand'as priklauso BMW Group")
        break;
        default:
        alert("Tas brand'as nei vienai GROUP nepriklauso")
}
//          4
let userInput = "Obuolys"
switch(userInput){
    case "Obuolys" :
    case "Kriause" :
    case "Melionas" :
    case "Arbuzas" :
    case "Slyvos" :
        console.log("Vaisius!")
        break;
        case "Bulve" :
        case "Svogunas" :
        case "Burokas" :
        case "Morka" :
        case "Ridikas" :
            console.log("Darzove!")
            break;
}
//      5
let weekDay = "4"
switch(weekDay){
    case "0":
        console.log("Pirmadienis")
        break;
    case "1":
        console.log("Antradienis")
        break;
    case "2":
        console.log("Treciadienis")
        break;
    case "3":
        console.log("Ketvirtadienis")
        break;
    case "4":
        console.log("Penktadienis")
        break;
    case "5":
        console.log("Sestaadienis")
        break;
    case "6":
        console.log("Sekmadienis")
        break;
        default:
            console.log("Trukt uz vadziu vel is pradziu")
}
//            6
for(let i = 0; i < 10; i++){
    console.log("Piotras")
}
//            7
let Piotras = 10
for(let i = 0; i < Piotras; i++){
    console.log("Piotras")
    console.log(Piotras)
}
//           8
for(let i = 1; i < 2; i++){
    for(let i = Math.floor(Piotras-1); i >0; i--){
    console.log(i + "." + "Piotras")
    }}
//            9
for(let i = Math.floor(Piotras-1); i >0; i--){
    console.log(i)
}
//           10
let name = "Piotras"
name.length < 5 ? alert("Short Name") : alert("Long Name")
//           11
let clientAge = 34
let legalAge = 18
clientAge >= legalAge ? alert("Can Drive") : alert("Can't drive")
//          12
let amzius = -1
amzius > 0 && amzius > 120 ? console.log("Invalid Age") : console.log("Kdl ne invalid age???")

//          13
let phone = "iPhone"
let isIphoneUser = phone === "iPhone" ? "visi telefonai tinkami" : false
console.log(isIphoneUser)
