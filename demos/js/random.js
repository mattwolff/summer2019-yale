let header = document.querySelector("h1");

setInterval(function() {
  // Math.random() will get a random number between 0 and 1
  // Multiplying random # * 240 will mean a random between 0 and 240
  // I picked 240 for no particular reason
  let rando = Math.random() * 240;
  header.style.fontSize = `${rando}px`;
}, 1000);
