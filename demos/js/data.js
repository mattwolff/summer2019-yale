let images = [
  {
    year: "year1",
    ids: ["pic1", "pic2", "pic3", "pic4"],
    srcs: ["https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Ff2%2F14%2F72%2Ff21472b3bfd89a2c299e4ce0882b3a60.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-W7finZ3qe4E%2FV6kPZc5s1xI%2FAAAAAAAAEuM%2F6GQRrJOLzxA2KNh8-AyJcKrm_GdgabP5QCLcB%2Fs1600%2FIMG_2818.JPG&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F8e%2Fea%2Fa9%2F8eeaa9b8b6df6c62f2a0f9a14f43eed3--samoyed-dogs-sammy.jpg&f=1", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F18%2Fd4%2F8e%2F18d48e8e130a9e7aec538bd1cbac1c82.jpg&f=1"]
  },
  {
    year: "year2",
    ids: ["pic4", "pic5", "pic6"],
    srcs: ["4.jpg", "5.jpg", "6.jpg"]
  }
]

let wrap = document.querySelector(".wrap");
let imgs = document.querySelectorAll(".wrap img");

setInterval(function() {
	time();
}, 1000)

let age;

function time() {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();

  if (hours == 7 ) {
    age = 0;
    getWhatever();
  }

  else {
    age = 1;
    getWhatever()
  }

}

time();
getWhatever();

function getWhatever() {
  // console.log(images[age].year, images[age].srcs);

  for (i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.src = images[age].srcs[i];
    img.id = images[age].ids[i];
  }

}
