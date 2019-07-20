let elem = document.querySelector("#elem");
let body = document.querySelector("body");

elem.onclick = function() {
  body.classList.toggle("invert");
}

let dots = document.querySelector("#dots");

let loading = [".", "..", "...", "...."];
let i = 0;
setInterval(function() {
  dots.innerHTML = loading[i++ % loading.length];
}, 500);
