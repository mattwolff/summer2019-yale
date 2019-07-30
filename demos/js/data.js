// This is just your data!
let images = [
  {
    year: "year1",
    // Ideally there should be an equal number of ids to srcs.
    // 4 ids, 4 src files
    ids: ["pic1", "pic2", "pic3", "pic4"],
    srcs: ["img_21.jpg", "img_22.jpg", "img_21.jpg", "img_22.jpg"]
  },
  {
    year: "year2",
    ids: ["pic4", "pic5", "pic6"],
    srcs: ["img_24.jpg", "b-2.jpg", "img_21.jpg", "img_22.jpg"]
  },
  {
    year: "year3",
    ids: ["blah", "whatever"],
    srcs: ["b-3.jpg", "img_21.jpg", "img_22.jpg"]
  },
  {
    year: "year4",
    ids: ["pic1", "pic2", "pic3", "pic4"],
    srcs: ["img_21.jpg", "img_22.jpg"]
  },
  {
    year: "year5",
    ids: ["pic4", "pic5", "pic6"],
    srcs: ["img_24.jpg"]
  },
  {
    year: "year6",
    ids: ["blah", "whatever"],
    srcs: ["b-3.jpg", "img_23.jpg", "b-2.jpg"]
  },
  {
    year: "year7",
    ids: ["pic1", "pic2", "pic3", "pic4"],
    srcs: ["img_21.jpg", "img_22.jpg"]
  },
  {
    year: "year8",
    ids: ["pic4", "pic5", "pic6"],
    srcs: ["img_24.jpg", "b-2.jpg"]
  },
  {
    year: "year9",
    ids: ["blah", "whatever"],
    srcs: ["b-3.jpg"]
  },
  {
    year: "year10",
    ids: ["pic1", "pic2", "pic3", "pic4"],
    srcs: ["img_21.jpg", "img_22.jpg"]
  },
  {
    year: "year11",
    ids: ["pic4", "pic5", "pic6"],
    srcs: ["img_24.jpg", "b-2.jpg"]
  },
  {
    year: "year12",
    ids: ["blah", "whatever"],
    srcs: ["b-3.jpg", "img_21.jpg", "img_22.jpg", "img_23.jpg"]
  },
  {
    year: "year13",
    ids: ["pic1", "pic2", "pic3", "pic4"],
    srcs: ["img_21.jpg", "img_22.jpg"]
  },
  {
    year: "year14",
    ids: ["pic4", "pic5", "pic6"],
    srcs: ["img_24.jpg", "b-2.jpg"]
  },
  {
    year: "year15",
    ids: ["blah", "whatever"],
    srcs: ["b-3.jpg"]
  },
  {
    year: "year16",
    ids: ["blah", "whatever"],
    srcs: ["b-3.jpg", "img_23.jpg"]
  }
]

// Just declaring a few variables
let wrap = document.querySelector(".wrap");
let imgs = document.querySelectorAll(".wrap img");
let age = document.querySelector("#age")
let initialAge = -1;

// Here we run some function called "time()" every second!
setInterval(function() {
	time();
}, 1000);

// This is that "time()" function we run every second!
function time() {
  // These are some variables for getting the current hour/minute/second
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();


  // Here's a variable to divide 24 day into some number of parts
  // We use images.length so that you can always add another year.
  // 16 years would mean 90-minute segments
  // 2 years would means 12-hour segments
  let percentOfDay = (hours * 60 + minutes) / 1440;

  // For this example, I can instead do everything in 60 seconds
  // let percentOfDay = seconds / 60;

  // This should allow the function to work with any number of years
  let calcAge = Math.floor(percentOfDay * images.length);

  // The eon is a variable to detemine how much time should it should take before a new image appears. This variable is currently incorrect...
  let eon = 1440 / images.length;

  let delay = eon / images[calcAge].srcs.length;

  // Check to see if you've aged in your new time schema
  if (calcAge > initialAge) {
    initialAge = calcAge;
    console.log("Older by a year!!!", delay, calcAge, initialAge);
    console.log(seconds, `Age: ${calcAge + 1}`);

    age.innerHTML = `Age: ${calcAge + 1}, Images: ${images[calcAge].srcs.length}`;

    wrap.innerHTML = "";
    // For each means do this for however many images there are
    images[calcAge].srcs.forEach(function(image, i) {
      setTimeout(function() {
        // console.log(image, i);
        // create a new HTML img element!
        let newImage = document.createElement("img");
        // Set the img src attribute
        newImage.src = `../images/${image}`;
        // Set the id
        newImage.id = images[calcAge].ids[i];

        // Append Child means add this new img element to the page.
        wrap.appendChild(newImage);
      }, Math.floor(i * delay * 1000));
      // SetTimeout is a function that runs after a certain amount of delay...
      // our delay is based on how many items are in the array.
      // * 1000 puts that number in milliseconds
    });
  }
  // Otherwise, start over!
  // We run this weird check so it doesn't constantly fire...
  else if (calcAge == 0 && initialAge !== 0) {
    initialAge = calcAge;
    console.log("BABY AGAIN!!!", delay, calcAge, initialAge);
    console.log(seconds, `Age: ${calcAge + 1}`);

    age.innerHTML = `Age: ${calcAge + 1}, Images: ${images[calcAge].srcs.length}`;

    wrap.innerHTML = "";

    images[calcAge].srcs.forEach(function(image, i) {
      setTimeout(function() {
        // console.log(image, i);
        let newImage = document.createElement("img");
        newImage.src = `../images/${image}`;
        newImage.id = images[calcAge].ids[i];

        wrap.appendChild(newImage);
      }, Math.floor(i * delay * 1000));
    });
  }

}
