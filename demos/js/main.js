// let elements = document.querySelectorAll('h1'); // all the headers

function scream() {
  let screamText = document.querySelector('h1');
  screamText.textContent = screamText.textContent + 'H' + '\n';
}

setInterval(scream, 40);
