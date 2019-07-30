let w = document.querySelector("#width");
let frame = document.querySelector("iframe");

function resize() {
  let goodNumber = Math.floor(window.innerWidth);
  w.textContent = window.innerWidth + "px";

  // I'm resetting the src on my iframe to a wikipedia link
  frame.setAttribute("src", `https://en.m.wikipedia.org/wiki/${goodNumber}`);
}

window.onresize = function() {
  resize();
};

resize();
