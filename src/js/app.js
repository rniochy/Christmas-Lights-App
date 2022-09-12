const circle = document.getElementsByClassName('circle')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const btn = document.getElementById('submit')
const title = document.getElementById('title')
const row_quantity_button = document.getElementById('row_quantity_button')
const circles = document.getElementById('circle_content');
var len = circle.length;

const addRow = () => {
  for(let i=0; i< document.getElementById('row_quantity').value; i++){
    var newNode = document.createElement('div');
    newNode.className = "circle";
    circles.appendChild(newNode);
  }
    
}
const on = function() {
  for (var i = 0; i < len; i++) {
    circle[i].removeAttribute("style");
    circle[i].style.animationPlayState = "running";
    circle[i].style.WebkitAnimationPlayState = "running";
  }
}

const off = function() {
  title.style.animation = "none";

  for (var i = 0; i < len; i++) {
    circle[i].style.animation = "none";
    circle[i].style.background = "#563260";
  }
}

function convert() {
  var speed = document.getElementById('quantity').value;
  for (var i = 0; i < len; i++) {
    circle[i].style.animationDuration = speed + "s";
  }
}

row_quantity_button.addEventListener('click', addRow)
play.addEventListener('click', on);
stop.addEventListener('click', off);
createAmountOfCircles();