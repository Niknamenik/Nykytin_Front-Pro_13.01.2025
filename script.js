const slider = document.getElementsByClassName("slider")[0];
const btnNext = document.getElementById("next_btn");
const btnPrev = document.getElementById("prev_btn");
let timerId = setInterval(slideNext, 3000);

let offset = 0;

slider.style.left = offset;
btnNext.addEventListener("click", function () {
  if (offset === -3600) {
    offset = 0;
    slider.style.left = offset + "px";
  } else {
    offset -= 400;
    slider.style.left = offset + "px";
  }
  resetInterval();
});
btnPrev.addEventListener("click", function () {
  if (offset === 0) {
    offset = -3600;
    slider.style.left = offset + "px";
  } else {
    offset += 400;
    slider.style.left = offset + "px";
  }
  resetInterval();
});

function slideNext() {
  if (offset === -3600) {
    offset = 0;
    slider.style.left = offset + "px";
  } else {
    offset -= 400;
    slider.style.left = offset + "px";
  }
}

function resetInterval() {
  clearInterval(timerId);
  timerId = setInterval(slideNext, 3000);
}
