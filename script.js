const conteiner = document.querySelector(".timer_conteiner");

function setTimer() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const secunds = date.getSeconds().toString().padStart(2, 0);
  conteiner.innerHTML = `<img src="./imgs/numbers 1-10/${hours[0]}.png" alt="" />
  <img src="./imgs/numbers 1-10/${hours[1]}.png" alt="" />
  <hr>
  <img src="./imgs/numbers 1-10/${minutes[0]}.png" alt="" />
  <img src="./imgs/numbers 1-10/${minutes[1]}.png" alt="" />
  <hr>
  <img src="./imgs/numbers 1-10/${secunds[0]}.png" alt="" />
  <img src="./imgs/numbers 1-10/${secunds[1]}.png" alt="" />`;
}

setInterval(setTimer, 1000);
