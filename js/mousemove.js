let wrap = document.querySelector(".wrap");
let num = document.querySelector(".num");
let i = 0;

// I made up a function called 'trace';
function trace(pos) {

  // I want to create a new element on the page!
  // I'm referencing this new element by naming it simply "el".
  // document.createElement() means make a new element
  let el = document.createElement('p');
  // This defines the text inside the newly created element!
  // i++ is a quick way to write i plus 1;
  el.innerHTML = i++;

  // These are using different style attributes.
  // They'll add inline style to my newly created element
  el.style.position = "fixed";
  el.style.left = pos.pageX + "px";
  el.style.top = pos.pageY + "px";

  // Wrap refers an HTML element on my page.
  // I defined it on line 1!
  // appendChild() is a function
  // Here it means add a new element inside of <div class="wrap>"
  // What element? The one I just made up inside this function!
  wrap.appendChild(el);

  // Displays the up-to-date number
  num.textContent = i;
}

window.onmousemove = function(pos) {
  trace(pos);
};

window.onclick = function() {
  i = 0;
  wrap.innerHTML = '';

  // Display an up-to-date number
  num.textContent = i;
}
