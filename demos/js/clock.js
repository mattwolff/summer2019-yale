let bod = document.querySelector("body");
let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let block = document.querySelector("#time");

setInterval(function() {
  time();
}, 1000);

time();

function time() {
  let hours = new Date().getHours();
  let mins = new Date().getMinutes();
  let secs = new Date().getSeconds();

  block.style.transform = `rotate(${(secs/60) * 360}deg)`;

  // Leading zeroes
  if (hours.toString().length < 2) {
    hours = '0' + hours;
  }
  if (mins.toString().length < 2) {
    mins = '0' + mins;
  }
  if (secs.toString().length < 2) {
    secs = '0' + secs;
  }

  if (secs % 2 == 0) {
    bod.classList.add("even");
  }
  else {
    bod.classList.remove("even");
  }

  hr.innerHTML = hours;
  min.innerHTML = mins;
  sec.innerHTML = secs;
}
