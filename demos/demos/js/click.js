let wrap = document.querySelector(".wrap");

// I made up a function called 'trace';
function dot(pos) {

  // I want to create a new element on the page!
  // I'm referencing this new element by naming it simply "el".
  // document.createElement() means make a new element
  let el = document.createElement('div');
  // This defines the text inside the newly created element!

  // These are using different style attributes.
  // They'll add inline style to my newly created element
  el.style.position = "fixed";
  el.style.width = "20px";
  el.style.height = "20px";
  el.style.background = "black";

  // These are inherited properties
  // They're from window.onclick event that I call later
  el.style.left = pos.pageX + "px";
  el.style.top = pos.pageY + "px";

  // Wrap refers an HTML element on my page.
  // I defined it on line 1!
  // appendChild() is a function
  // Here it means add a new element inside of <div class="wrap>"
  // What element? The one I just made up inside this function!
  wrap.appendChild(el);
}

window.onclick = function(pos) {
  dot(pos);
};
