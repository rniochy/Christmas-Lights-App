const root = document.documentElement;
const circle = document.getElementsByClassName('circle')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const btn = document.getElementById('submit')
const title = document.getElementById('title')
const row_quantity_button = document.getElementById('row_quantity_button')
const circles = document.getElementById('circle_content');
var len = circle.length;

const addRow = (e) => {
  circles.innerHTML = ''

  for(let i=1; i <=document.getElementById('row_quantity').value; i++){
    var newDiv = document.createElement('div');
    var newInput = document.createElement('input');

    newInput.type = "color";
    newDiv.className = `circle color`;
    newDiv.id = `color${i}`;
    newInput.className = `picker`;
    newInput.id = `picker${i}`;
    newInput.setAttribute('onchange', `changeColor(${i})`);

    circles.appendChild(newDiv);
    newDiv.appendChild(newInput);
  }
    
}

const changeColor = (i)=>{
   const ele = document.getElementById(`color${i}`);
   const pickerValue = document.getElementById(`picker${i}`).value;
   ele.style.background = pickerValue;
   ele.style.animation = ` glow-${i} 1000ms infinite`;
   root.style.setProperty(`--change${i}`, pickerValue);
   
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

row_quantity_button.addEventListener('click', addRow);
play.addEventListener('click', on);
stop.addEventListener('click', off);
