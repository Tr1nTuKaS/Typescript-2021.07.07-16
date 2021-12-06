/*
 sk1 == Ar sk1 verte yra lygi?
 sk1 != Ar verte yra nelygi?

 sk1===  Ar sk1 verte ir tipas ligus?
 sk1!== Ar sk1 verte ir tipas neligus?

 sk1>  Ar didesnis sk1?
 sk1<  Ar mazesnis sk1?

 sk1=>  Didesnis arba lygus sk1?
 sk1<=  Mazesnis arba Lygus sk1?
*/
/*
 Truthy: true, non-zero number(!0), ""(netuscias),objektai,masyvas ir funkcijos
 Falsy: false,0,"",undefined,null,NaN(not a number)
 */
//  console.log( null > 0 );  // (1) false
//  console.log( null == 0 ); // (2) false
//  console.log( null >= 0 ); // (3) true
//  console.log( undefined >= 0 ); // (4) false
//  console.log( NaN >= 0); //(5) false

/*
Ivestis:
userName: Petraitis
passWord: 1234
Duomenu baze:
userName: Petraitis
funkcija tokia anokia(ivestis.password.value) => qwqwqwq
Prisijungimas:
userName: Petraitis
passWord: 1234
Prisijungimas.userName == DuomenuBaze.uzerName?
jaigu^ tiesa => (Prisungimas.passWord)=>qwqwqwq ===DuomenuBaze.password?
*/



// var k1 = 54;
// var k2 = '54';

// console.log(k1 !== k2);// 54 == 54 ir number ==string => Taip ir ne=> NE
// console.log(k1);

// //.slice()  concat()
// console.log("Labas" == "Labas")
// console.log("Labas" == "labas")
// console.log(1 + "labas" + 5 === 1labas5 ) //true
// console.log( 54 === "54"); //false
// console.log( 54 == "54");//true
// console.log( typeof(54) == typeof("54"))
// //          AND &&
// console.log(typeof(54) == typeof("54") && 54 == "54" );
// console.log("Labas" = "Labas" && 54 = 54) //true
// //          OR ||
// console.log( "labas"="labas" || 54 = 53) //true

// console.log( AND ir OR)
// console.log( (54 == 54 || "hello" == "helo") && false = true)

// const i = "i"
// const e = "e"
// let str1 = "Piotras"
// let str1Start = str1.slice(0,str1length-1)
// let str1End = str1.slice(str1.length-1, str1length)
// let str1End2 = str1.slice(str1.lenght-2,str1.length-1)
// console.log(str1Start)
// console.log(str1End)
// console.log(str1End2)

// let age = 20
// if( age > 21){
// console.log("if ptenkintas")
// }else{
//     console.log("eik namo snow man")
// }


// if(salyga){ // herarchija  jagu true toliau nebetikrina
//     veiksmai
// }else if(salyga){
//     veiksmus
// }else if(salyga){ // else if iki begalives
//     veiksmus
// } else{  //jaigu neiko netenkinama
//     veiksmas
// }

let age = prompt("koks tavo amzius?")
if( 3 < age && age < 7){
    console.log("tu jau didelis")
} else if(7 < age && age < 18){
    console.log("tu jau mokyklinukas")
} else if(age >= 18){
    console.log("gal jau turi vairotojo pazymejima?")
    let teises =prompt( "Ar turi vairotojo pazymejima?")
    if(teises == "Taip" || teises == "taip"){
        console.log("Sveikinu tu jau vairuotojas")
        let transportas = prompt( "Ar turi automobili?")
        if(transportas == "Taip" || transportas == "taip"){
            console.log("sveikas atvykias")
        }else{
            let kodel = prompt("Ir koks pasiteisinimas?")
            kodel += " Netinkamas pasiaiskinimas"
            console.log(kodel)
        }
    }
}

// let num = 20
// if(num > 20){
//     console.log(" Tavo skaicius (" + num + ") yra didesnis uz 20.")
// }else if(num == 20){
//     console.log( 'Tavo skaicius (${num}) yra lygus 20')
// }else{
//     console.log(`tavo skaicius ( num ) yra mazesnis uz 20`)
// }
