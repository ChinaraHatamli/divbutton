//change Size(mouseover and mouse out)

// const btn = document.querySelector(".btn");

// btn.addEventListener("mouseover", () => {
//   btn.style.scale = "1.5";
// });

// btn.addEventListener("mouseout", () => {
//   btn.style.scale = "";
// });

//change color(setTimeout)

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//     btn.style.backgroundColor = "rgb(255, 0, 0)";

//     setTimeout(() => {
//         btn.style.backgroundColor = "";
//     }, 1000);
// });

//ballgamewithdiv

const container = document.querySelector(".container");
const ball = document.querySelector("#ball");

let counter = 0;

ball.style.left = "600px";
ball.style.top = "200px";

ball.addEventListener("click", () => {
    if (counter == 0) {
      ball.style.left = "50%";
      counter++;
    } else if (counter == 1) {
      ball.style.left = "5%";
      counter++;
    } else {
      ball.style.top = "5%";
      counter = 0;
    }
  });
  
