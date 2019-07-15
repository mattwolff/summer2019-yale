let pizza = document.querySelector("body");
// let body = document.querySelector("body");

pizza.onclick = function() {
  // pizza.classList.toggle("invert");
}


// //
// let loading = [".", "..", "...", "...."];
// let i = -1;
// setInterval(function() {
//   if (i < loading.length - 1) {
//     i++;
//   }
//   else {
//     i = 0;
//   }
//   console.log(loading[i]);
// }, 500)

let loading = [".", "..", "...", "...."];
let i = 0;
setInterval(function() {
  console.log(loading[i++ % loading.length]);
}, 500);
