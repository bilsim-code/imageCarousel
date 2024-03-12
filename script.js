 /* let index = 0;
changePosition(index);
let previous = document.getElementById("prev");
let next = document.getElementById("next");
previous.onclick = function() {
  changePosition (-1);
}

next.onclick = ()=> {
   changePosition(1);
}

function changePosition(i) {

   index += i;
   let images = document.querySelectorAll("img");
   let dots = document.querySelectorAll(".dot");
   for(i = 0; i < images.length; i++) {
      images[i].style.display = "none";
   }

   for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
   }

   if(index > images.length -1) {
      index = 0;
   }

   if(index < 0) {
      index = images.length -1;
   }

   images[index].style.display = "block";
   dots[index].style.className = "active";

} */
/*
let index = 0;
let previous = document.getElementById("prev");
let next = document.getElementById("next");
changePosition(index);
previous.onclick = function() {
   changePosition(-1);
}

next.onclick = function() {
   changePosition(1);
}

function changePosition(num) {
   index += num;
   let image = document.querySelectorAll("img");
   let dots = document.querySelectorAll(".dot");
   for(let i = 0; i < image.length; i++) {
      image[i].style.display = "none";
   }
   for(let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
   }

   if(index > image.length - 1) {
      index = 0;
   }

   if(index < 0) {
      index = image.length - 1;
   }

   image[index].style.display = "inline-block";
   dots[index].classList.add("active");
} */
/* 
let index = 0;
changePosition(index);
let previous = document.getElementById("prev");
let next = document.getElementById("next");
previous.onclick = function()  {
   changePosition(-1);
}
next.onclick = function() {
   changePosition(1);
}

function changePosition(num) {
   index += num;
   let images = document.querySelectorAll("img");
   let dots = document.querySelectorAll(".dot");

   for(let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
      images[i].classList.add("fade")
   }

   for(let i = 0; i < dots.length; i++ ) {
      dots[i].className = dots[i].className.replace("active", "");
   }

   if(index > images.length -1) {
      index = 0;
   }

   if(index < 0) {
      index = images.length - 1;
   }

   images[index].style.display = "block";
   dots[index].classList.add("active");
}
 */

let index = 0;
let previous = document.getElementById("prev");
let next = document.getElementById("next");


previous.onclick = () => {
   changePosition(-1);
}

next.onclick = () => {
   changePosition(1);
}
function changePosition(num) {
   index += num;
   let images = document.querySelectorAll("img");
   let dots = document.querySelectorAll(".dot");
   for(let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
      images[i].classList.add("fade");
   }

   for(let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
   }

   if(index > images.length - 1) {
      index = 0;
   }

   if(index < 0) {
      index = images.length - 1;
   }

   images[index].style.display = "block";
   dots[index].classList.add("active");
}
changePosition(index);