// //          1
// function vardas(){
//     let name = "Piotras"
//    alert(name)
// }
// vardas()
// //          2
// function rnd() {
//     console.log(Math.floor(Math.random() * 5) +1)
// }
// rnd()
// //          3
// function num(str){
//     let name ="Piotras"
//     let surName = "Butkevic"
//     str = name.length + surName.length
//     console.log(str)
// }
// num()
// //          4
// function arr (){
//     let leter =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"]
//     for(let i =0;i<leter.length;i++){
//     console.log(i)
//     }
// }
// arr()
// //          5
// function mat(n1,n2,operator){
//    let result 
//    if(operator === "sum"){
//     result = n1+n2
//    }
//     if(operator === "sub"){
//       result=n1-n2
//    }
//    if(operator === "mult"){
//       result= n1*n2
//    }
//    if(operator === "div"){
//       result=n1/n2
//    }
// }
// //          6
// function sumOfSquares() {
//     let random = Math.floor(Math.random() * 10) +1
//     let num = random
//     console.log(random)
//     let result = num * num
//     console.log(result)   
// }
// sumOfSquares()
//         7
// const button = document.querySelector('.btn')
// button.onclick = () =>{
//     alert('Piotras')
// }
//            8
// const button = document.querySelector('.btn')
// const h2 = document.querySelector('h2')

// button.onclick = () => {
// h2.innerText = " Hello world"
// }
// //         9
// const button = document.querySelector('.btn')
// const p = document.querySelector('p')
// button.onclick = () =>{
//     p.innerHTML = 'Text about me'
// }
// //          10
// const button = document.querySelector('.btn')
// const p = document.querySelector('p')
// button.onclick = () =>{
//     p.innerHTML ++
// }
//          11
// const button = document.querySelector('.btn')
// const h1 = document.querySelector('h1')
 
// button.onclick= () =>{
//    let rand = Math.floor(Math.random() *100) +1
// h1.innerText = rand
// }

// //          12
// const button = document.querySelector('.btn')
// const h1 = document.querySelector('h1')
// button.onclick = () =>{
// let random = Math.floor(Math.random() * 100) +1
// h1.innerHTML = random
// }
// //          13
// const button = document.querySelector('.btn')
// const button2 = document.querySelector('button')
// const h1 = document.querySelector('h1')
// const h2 = document.querySelector('h2')
// button2.onclick = () =>{
//  h1.innerHTML = "Alus"
// }
// button.onclick = () =>{
//     h2.innerHTML = "nepilnametis - nieko neturim"
//     }
// //          14
// const btn1 = document.querySelector('.bnt1')
// const btn2 = document.querySelector('.bnt2')
// const btn3 = document.querySelector('.bnt3')
// let random = Math.floor(Math.random() * 3) +1
// console.log(random)
// btn1.onclick = (random) => {
//     if(random===1){
//         lert("Yay")
//     }else{
//         alert("Nay")
//     }
// }
// btn2.onclick = (random) => {
//     if(random===2){
//         lert("Yay")
//     }else{
//         alert("Nay")
//     }
// }
// btn3.onclick = (random) => {
//     if(random===3){
//         lert("Yay")
//     }else{
//         alert("Nay")
//     }
// }              //neveikia
//          15
// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const btn3 = document.querySelector('.btn3')
// const h1 = document.querySelector('h1')
// btn1.onclick = () =>{
//    h1.innerHTML = "Neklausote manęs"
// }
// btn2.onclick = () =>{
//     h1.innerHTML = " Kiek galima kartoti"
//  }
//  btn3.onclick = () =>{
//    h1.innerHTML = " Kdl Neklausote manęs"
//  }
//          16
window.onscroll = () => {
   alert("kiek galima neklausyti")
}