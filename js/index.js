// Your code goes here

// 1st Event Listener
const mainNav = document.querySelector(".logo-heading");

mainNav.addEventListener("click", (event) => {
    alert("Thanks for clicking");
});

// 2nd Event Listener
document.querySelector(".intro").onmouseover = function() {mouseOver()};
document.querySelector(".intro").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.querySelector(".intro").style.color = "red";
}

function mouseOut() {
  document.querySelector(".intro").style.color = "black";
}


// 3rd Event Listener
document.querySelector(".nav").onmouseover = function() {anotherMouseOver()};
document.querySelector(".nav").onmouseout = function() {anotherMouseOut()};

function anotherMouseOver() {
    document.querySelector(".nav").style.backgroundColor = "red";
}
function anotherMouseOut() {
    document.querySelector(".nav").style.backgroundColor = "white";
}

// 4th Event Listener
const body = document.querySelector("body");

window.addEventListener("load", () => {
    alert("Hey there!  My Name is Melissa");
});


// 5th Event Listener

document.querySelector(".img-content").onmouseover = function() {thirdMouseOver()};
document.querySelector(".img-content").onmouseout = function() {thirdMouseOut()};

function thirdMouseOver() {
    document.querySelector(".img-content").style.width = "20%";
}
function thirdMouseOut() {
    document.querySelector(".img-content").style.width = "inherit";
}

const navLinks = document.querySelectorAll(".main-navigation .nav-container .nav .nav-link");


navLinks.forEach(link => link.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    navLinks.forEach(link => link.style.textDecoration = "none")
    event.target.style.textDecoration = "underline";
    
}));