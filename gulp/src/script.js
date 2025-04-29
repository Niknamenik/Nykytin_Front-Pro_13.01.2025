var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-tooletip="tooletip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const warningBtn = document.querySelector("#btn_warning");

warningBtn.addEventListener("click", () => {
  const alert = document.querySelector("#alert");
  if (alert.hasAttribute("style")) {
    alert.removeAttribute("style");
  } else {
    alert.setAttribute("style", "display:none");
  }
});

const p = document.querySelector("#my_DoB");
p.innerText = moment("20000209", "YYYYMMDD").format("MMM Do Y");
// .innerHTML(``);

const formatDateBtn = document.querySelector("#formatDateBtn");

formatDateBtn.addEventListener("click", () => {
  const input = document.querySelector("#DoB_input");
  const userDOB = input.value.trim().toString();
  const formatedDate = userDOB.split(".").join("");
  const p = document.createElement("p");
  const form = document.querySelector(".form");

  form.appendChild(p).innerText = `${moment(
    `${formatedDate}`,
    "YYYYMMDD"
  ).format("MMM Do Y")}`;
});
