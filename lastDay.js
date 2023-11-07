'use strict'

var imgball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  img: "./ball.jpg",
  // draw: function () {
  //   ctx.beginPath();
  //   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  //   ctx.closePath();
  //   ctx.fillStyle = this.color;
  //   ctx.fill();
  // },
};

// クリックによる開始と射出速度の決定
function startButtonDown() {
  downTime = new Date().getTime();
  //console.log("downTime = ", downTime)

  const field = document.getElementById("field");
  let ball = "./ball.jpg";
  draw(field, ball);
  function draw(ball, imagePath){
    const image = new Image();
    image.addEventListener("load", function () {
        
        const ctx = ball.getContext("2d");
        ctx.drawImage(image, 270, 140, 20, 10); //手動で調整
    });
    image.src = imagePath;
  }
}

function startButtonUp() {
  upTime = new Date().getTime();
  //console.log("upTime = ", upTime);
  clickTime = upTime - downTime;
  console.log(clickTime, " ms");
  // const clickTimeTxt = document.getElementsByClassName("click_time");
  // clickTimeTxt[0].textContent = String(clickTime) + " ms";
  // document.body.appendChild(clickTimeTxt[0]);
  const clickTimeTxt = document.getElementsByClassName("click_time");
  clickTimeTxt[0].textContent = "clickした時間 : " + String(clickTime) + " ms";
  document.body.appendChild(clickTimeTxt[0]);
}

const button = document.getElementById("start_button");

let upTime;
let downTime;
let clickTime;
button.addEventListener("mousedown", startButtonDown);
button.addEventListener("mouseup", startButtonUp);


// MDNよりコピペ
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var raf;

// var ball = {
//   x: 100,
//   y: 100,
//   vx: 5,
//   vy: 2,
//   radius: 25,
//   color: "blue",
//   draw: function () {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//     ctx.closePath();
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   },
// };

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ball.draw();
//   ball.x += ball.vx;
//   ball.y += ball.vy;

//   if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
//     ball.vy = -ball.vy;
//   }
//   if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
//     ball.vx = -ball.vx;
//   }

//   raf = window.requestAnimationFrame(draw);
// }

// canvas.addEventListener("mouseover", function (e) {
//   raf = window.requestAnimationFrame(draw);
// });

// canvas.addEventListener("mouseout", function (e) {
//   window.cancelAnimationFrame(raf);
// });

// ball.draw();
