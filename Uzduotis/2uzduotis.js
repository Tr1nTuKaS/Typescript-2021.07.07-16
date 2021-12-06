//              0
// console.log(2 === 2) //true
// console.log(2 == "2") //true
// console.log(2 !== 2) //false
//  console.log(5 < 5) //false
// console.log(5 >= 4) //true
//  console.log(true !== false) //true
//  console.log(9 - 5 === 4) //true
// console.log(5 * 5 !== "25") //true
// console.log(true && true) //true
// console.log(2 === 5 && true)//false
// console.log(6 * 6 === 36 && 15 - 9 == "6") //true
// console.log(false || false) //true ??? visdel false
// console.log(10 === 10 || 5 == 2) // true
// console.log(2 * 2 / 2 == "1" || 5 * 5 === 25) //true
// console.log(14 * 2 !== "28" || "Jonas" == "Jonas") //true
// console.log(10 && 15 > 10) //true 
// console.log("Petras" && 0) //false ??? 0
// console.log(("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13))  // false && (110 || false) ??? 110
// console.log("jonas" === "Jonas") //false
// console.log("Petras" + 5 === "Petras" + "5") //true
// console.log("Jonas" + 5 + 5 === "Jonas10") //false
// console.log(5 + 10 + "Antanas" === "15Antanas") //true
// console.log(2 + 1 + "Jonas" + 3 + 2 === "3Jonas5") //false
// console.log(10 % 1 === 1) //false
// console.log(5 * "5" === 25) //true

//            1
// let legalAge = 20
// let clientAge = 34
// if(legalAge < clientAge){
//     alert('Sveiki atvykia')
// }else{
//     alert('Grizk kai uzaugsi')
// }
// //             2
// let name = "Piotras"
// myLength = 6 
// if( myLength >= 5){
//     console.log("Ilgas Vardas")
// }else{
//     console.log("reiktu kreiptis tikru vardu")
// }
//                  3
// let age = 34
// if( 0 < age && age > 100){
//     alert(" Praeitis ir ateitis neatvaizdojama realybeja")
// }else{
//     alert("Invalid age")
// }
//  else if(1 =< age && age =< 18){
//   alert(" Tai gi as esu vyresnis")
// }else{
//     alert("Child")
// }
//  else if( 19 =< age && age =< 99){
//     alert("Adut")
// }else{
//     alert(" WTF ")
// }
//                  4 
// let car = "Volkswagen"
// let VW = ["Audi","Volkswagen","Bently", "Bugatti", "Lamborghini", "Porsche"]
// let BMW = ["BMW", "Mini", "Rolls-Royce"]
//  if(car = Audi || car = Volksvagen || car = Bently || car = Bugatti || car = Lamborgini || car || Porsche){
//      alert("Lidlas sveikina jus laimejote automobili")
//  }else{
//     alert("kreipkities i kita grupia")
// }
// if(car = BMW){
//     alert("mes jusu laukiame")
// }else("betkoks automobilis uz jusu pinigelius")
//             5
// let age = prompt("Koks jusu amzius?")
// if( age >= 18){
//     alert(" Jau galite tapti transporto vairotoju ir gauti vairotojo pazymejima :)")
// }else{
//     alert("Atsiprasome bet jus dar labai jaunas ir negalite gauti vairotojo pazimejimo")
// }
// let real = prompt("Ar turite vairotojo pazymejima?")
// if(real == "Taip" || real == "taip"){
//     alert("Sveikinu jus esata visavertis vairuotojas !!!")
// }else if(real === "Ne" || real === "ne" || real === "NE"){
//     alert("Jus neturite teises vairuoti transporto priemones")
// }else{
//     alert("OOO cia kazkas tinginiauja")
// }
//              6
// let asmuo =["Piotras","Vilnius",34]
// let asmuo={
//     vardas: "Piotras",
//     miestas: "Vilnius",
//     amzius: 34
// }
// const i = "i"
// const e = "e"

// let str1Start = str1.slice(0,str1length-1)
// let str1End = str1.slice(str1.length-1, str1length)
// let str1End2 = str1.slice(str1.lenght-2,str1.length-1)
// if(asmuo.vardas.slice(asmuo.vardas.length-1,asmuo.vardas.length) == s){
//     console.log(galune s)
// } else if(asmuo.vardas.slice(asmuo.vardas.length-1,asmuo.vardas.length) == e){
//     console.log(galune e)
// }if(asmuo.vardas.slice(asmuo.vardas.length-1,asmuo.vardas.length) == i){
//     console.log(galune i)
// }
//              7
//let asmuo =["Piotras","Vilnius",34]
let asmuo = {}
const i = "i"
const e = "e"
const au = "au"
//                  Rokas
// let str1Start = str1.slice(0,str1length-1) //Roka
// let str1End = str1.slice(str1.length-1, str1length)  //s
// let str1End2 = str1.slice(str1.lenght-2,str1.length-1) //a
asmuo.vardas = prompt("koks tavo vardas")
if(asmuo.vardas.slice(asmuo.vardas.length-1, asmuo.vardas.length) == "s"){

    if(asmuo.vardas.slice(asmuo.vardas.length-2,asmuo.vardas.length-1) == "i"){
        console.log("Labas"+ asmuo.vardas + "!")
        
        asmuo.miestas = prompt("Koks tavo gimtasis miesas?")
        console.log(asmuo.miestas + "yra geriausias miestas pasaulyje!")
        asmuo.amzius = prompt("Koks jusu amzius")
        console.log(asmuo.amzius + "ieji yra geriausi gyvenimo metai!")

    }else if(asmuo.vardas.slice(0,asmuo.vardas.length-2,asmuo.vardas.length-1) == "a"){
        let vardoPradzia = asmuo.vardas.slice(0, asmuo.vardas.length-1)
        let vardasPasisveikinti = vardoPradzia + i
        console.log("Labas"+ vardasPasisveikinti + "!")
        asmuo.miestas = prompt("Koks tavo gimtasis miesas?")
        console.log(asmuo.miestas + "yra geriausias miestas pasaylyje!")
        asmuo.amzius = prompt("Koks jusu amzius")
        console.log(asmuo.amzius + "ieji yra geriausi gyvenimo metai!")

     }else if(asmuo.vardas.slice(0,asmuo.vardas.length-2,asmuo.vardas.length-1) == "u"){
        let vardoPradzia = asmuo.vardas.slice(0, asmuo.vardas.length-2)
        let vardasPasisveikinti = vardoPradzia + au
        console.log("Labas"+ vardasPasisveikinti + "!")
        asmuo.miestas = prompt("Koks tavo gimtasis miesas?")
        console.log(asmuo.miestas + "yra geriausias miestas pasaylyje!")
        asmuo.amzius = prompt("Koks jusu amzius")
        console.log(asmuo.amzius + "ieji yra geriausi gyvenimo metai!")

     }
} else if(asmuo.vardas.slice(asmuo.vardas.length-1,asmuo.vardas.length) == "e"){
    console.log("Labas"+ asmuo.vardas + "!")
    asmuo.miestas = prompt("Koks tavo gimtasis miesas?")
    console.log(asmuo.miestas + "yra geriausias miestas pasaylyje!")
    asmuo.amzius = prompt("Koks jusu amzius")
        console.log(asmuo.amzius + "ieji yra geriausi gyvenimo metai!")
  
}else if(asmuo.vardas.slice(asmuo.vardas.length-1,asmuo.vardas.length) == "i"){
    let vardoPradzia = asmuo.vardas.slice(0, asmuo.vardas.length-1)
    let vardasPasisveikinti = vardoPradzia + e
        console.log("Labas"+ vardasPasisveikinti + "!")
        asmuo.miestas = prompt("Koks tavo gimtasis miesas?")
        console.log(asmuo.miestas + "yra geriausias miestas pasaylyje!")
        asmuo.amzius = prompt("Koks jusu amzius")
        asmuo.amzius = prompt("Koks jusu amzius")
        console.log(asmuo.amzius + "ieji yra geriausi gyvenimo metai!")
    
}

