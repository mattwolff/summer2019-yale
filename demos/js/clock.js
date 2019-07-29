let bod = document.querySelector("body");
let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let block = document.querySelector("#time");

setInterval(function() {
  time();
}, 30);

time();

function time() {
  let d = new Date();
  let hours = d.getHours();
  let mins = d.getMinutes();
  let secs = d.getSeconds();
  let ms = d.getMilliseconds();

  // This is bad math...
  let smooth = ((secs + ms / 1000.0) / 60.0) * 360;

  block.style.transform = `rotate(${smooth}deg)`;

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


// there is a Clock
// we check what time it is every second

//
// if time is between 1 and 2 pm show procrastinate
// if time is 3:15pm show pet dog

//
//
// let age5 = ["/frown.png", "/smile.png", "/willow.jpg"];
// for (let i = 0; i < age5.length; i++) {
//   console.log(age5[i]);
// }
//
// let img = document.querySelector("img");
// img.setAttribute("src", '../images' + age5[0]);
//
//
//
