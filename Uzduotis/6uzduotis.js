// //      1
// const inp = document.querySelector('input')
// const btn = document.querySelector('button')
//  btn.onclick = ()=> {
//   inp.onchange=()=> {
//     console.log(inp.value)
//   }  
//  }
// //      2
// const inp = document.querySelector('input')
// const btn = document.querySelector('button')
// const h1 = document.querySelector('h1')
// btn.onclick= () => {
//   h1.innerHTML = "Tavo amzius " + inp.value
// }
// //      3
// const btn = document.querySelector('button')
// const inpName = document.getElementById('one')
// const inpAge = document.getElementById('two')
// const h1 = document.querySelector('h1')
// btn.onclick = () => {
//   if(inpAge.value >= 18){
//     h1.innerHTML = "Vairuoti gali: "+ inpName.value
//   }else{
//     h1.innerHTML = "Dar mokysis vairuotis: "+inpName.value
//   }
// }
////      4
// const ageInput = document.getElementById("age");
// const btn = document.querySelector("button");
// const priceDisplay = document.getElementById("price");
 
// btn.addEventListener("click", fn);
 
// function fn() {
//   const price = 6;
//   const age = Number(ageInput.value);
 
//   if (age >= 60) {
//     priceDisplay.textContent = (0.5 * price).toFixed(2);
//   } else if (age < 18) {
//     priceDisplay.textContent = (0.45 * price).toFixed(2);
//   } else {
//     priceDisplay.textContent = price.toFixed(2);
//   }
// }
////        5
// const ageInput = document.getElementById("age");
// const tInput = document.querySelector("input[type=checkbox]");
// const btn = document.querySelector("button");
 
// btn.addEventListener("click", () => {
//   const age = Number(ageInput.value);
//   const teistumas = tInput.checked;
 
//   if (age >= 18 && age <= 30 && !teistumas) {
//     document.getElementById("result").textContent = "Esi saukiamas!";
//   } else {
//     document.getElementById("result").textContent = "Esi laisvas!";
//   }
// });
