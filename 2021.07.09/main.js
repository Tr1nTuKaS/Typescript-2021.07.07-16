const name = "Piotras"
 switch(name){
     case "Piotras":
        console.log("Vyras")
        break;
     case "Jonas":
         console.log("Vyras")
         break;
    case "Ona":
    case"Zita":
    console.log("Moteris")
    break;
    default:
        console.log("domenu bazeja nera tokio vardo")
 }

 let year = 2020
 year === 2021 ? alert("this year") : alert("previous year")
const currentYear = year === 2021 ? alert("this year") : "last year"
console.log(currentYear)

let maistas = "obuolys"
switch(maistas){
    case "kriause" :
    case "Obuolys":
        console.log("Vaisius!")
        break;
    case "Bulve":
    case "Morka":
    case "Burokas":
        console.log("Darzove!")
        break;
        default:
            console.log( "tokio maisto neturim dombazeje")
}
let prisijungimas = true
prisijungimas ? console.log("Esi prisijungias") : console.log("Nesi prisijungias")

let dienosValandos = 14
dienosValandos < 8 ? console.log("Naktis") : 
dienosValandos>= 8 && dienosValandos < 12 ? console.log("Rytas") : 
dienosValandos >= 12 && dienosValandos < 18 ? console.log("Diena") : 
dienosValandos >= 18 && dienosValandos < 24 ? console.log("Vakaras") : 
console.log("Nera tokio laiko dienoje")

let age = 34
console.log(age < 18 ? "Nepilnametis" : "Pilnametis")

//              Ciklai
//                 FOR

let num = 20
for(let i=0; i < num; i++){
    console.log(i)
}

let miestai = ["Vilnius", "Kaunas", "Panevezys", "Klaipeda", "Siauliai", "Rokiskes"]
for(let i = 0; i < miestai.length; i++){
    console.log(miestai[i])
}
console.log("")
for(let i = miestai.length; i >= 0; i--){
    console.log(miestai[i])
}
console.log("")
for(let i = Math.floor((miestai.length-1)/2); i >= 0; i--){
    console.log(miestai[i])
}
// console.log("")
// for(let i = 0; i < Math.cell((miestai.length-1)/2); i++){
//     console.log(miestai[i])
// }
//            while
let i = 10
while(i > 0){
    console.log(i)
    i--
}
// let i = 0
// while(miestai.length > i){
//     console.log(miestai[i])
//     i++
// }
console.log("")
while(miestai.length){
    console.log(miestai.shift())
    console.log(miestai.length)
}