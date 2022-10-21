import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));






root.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}><App/></NextUIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
var canvas = document.querySelector("#scene"),
  ctx = canvas.getContext("2d"),
  particles = [],
  amount = 0,
  mouse = {x:0,y:0},
  radius = 1;

var colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];

var copy = document.querySelector("#copy");

var ww = canvas.width = window.innerWidth;
var wh = canvas.height = window.innerHeight;

function Particle(x,y){
  this.x =  Math.random()*ww;
  this.y =  Math.random()*wh;
  this.dest = {
    x : x,
    y: y
  };
  this.r =  Math.random()*5 + 2;
  this.vx = (Math.random()-0.5)*20;
  this.vy = (Math.random()-0.5)*20;
  this.accX = 0;
  this.accY = 0;
  this.friction = Math.random()*0.05 + 0.94;

  this.color = colors[Math.floor(Math.random()*6)];
}

Particle.prototype.render = function() {


  this.accX = (this.dest.x - this.x)/1000;
  this.accY = (this.dest.y - this.y)/1000;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;

  this.x += this.vx;
  this.y +=  this.vy;

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
  ctx.fill();

  var a = this.x - mouse.x;
  var b = this.y - mouse.y;

  var distance = Math.sqrt( a*a + b*b );
  if(distance<(radius*70)){
    this.accX = (this.x - mouse.x)/100;
    this.accY = (this.y - mouse.y)/100;
    this.vx += this.accX;
    this.vy += this.accY;
  }

}

function onMouseMove(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

function onTouchMove(e){
  if(e.touches.length > 0 ){
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
}

function onTouchEnd(e){
mouse.x = -9999;
mouse.y = -9999;
}

function initScene(){
  ww = canvas.width = window.innerWidth;
  wh = canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "bold "+(ww/10)+"px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(copy.value, ww/2, wh/2);

  var data  = ctx.getImageData(0, 0, ww, wh).data;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "screen";

  particles = [];
  for(var i=0;i<ww;i+=Math.round(ww/150)){
    for(var j=0;j<wh;j+=Math.round(ww/150)){
      if(data[ ((i + j*ww)*4) + 3] > 150){
        particles.push(new Particle(i,j));
      }
    }
  }
  amount = particles.length;

}

function onMouseClick(){
  radius++;
  if(radius ===5){
    radius = 0;
  }
}

function render(a) {
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < amount; i++) {
    particles[i].render();
  }
};

copy.addEventListener("keyup", initScene);
window.addEventListener("resize", initScene);
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("touchmove", onTouchMove);
window.addEventListener("click", onMouseClick);
window.addEventListener("touchend", onTouchEnd);
initScene();
requestAnimationFrame(render);

