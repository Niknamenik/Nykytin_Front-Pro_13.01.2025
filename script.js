const houseForm = document.querySelector("#house_creator");
const residentsInput = document.querySelector("#residents");
const flatsInput = document.querySelector("#flats");
const flatsForm = document.querySelector("#flat-form");

houseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const numOfResidents = residentsInput.value;
  const numOfFlats = flatsInput.value;

  document.body.appendChild(flatsForm);
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "save-btn");
  button.innerText = "Зберегти мешканців";

  for (let i = 1; i <= numOfFlats; i++) {
    const div = document.createElement(`div`);
    div.setAttribute("class", "flat");
    div.setAttribute("id", `flat_No-${i}`);
    flatsForm.appendChild(div).innerHTML = `<p>Kвартирa ${i}</p>`;

    for (let n = 1; n <= numOfResidents; n++) {
      const label = document.createElement("label");
      div.append(label);
      label.innerHTML = `<input type='text' required data-resident='${n}' data-flat='${i}' placeholder='Мешканець ${n}'>`;
    }
    flatsForm.prepend(button);
    flatsForm.style = "border: 1px solid";
  }
});

flatsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const houseArr = [];
  const flats = document.getElementsByClassName("flat");
  const showBtn = document.querySelector("#show-btn");
  for (let i = 0; i < flats.length; i++) {
    const flatInputs = document.querySelectorAll(`#flat_No-${i + 1} input`);
    let flatArr = [];
    houseArr.push(flatArr);
    flatInputs.forEach((input) => {
      flatArr.push(input.value);
    });
  }
  localStorage.setItem("house", JSON.stringify(houseArr));
  showBtn.removeAttribute("class");
  showBtn.addEventListener("click", showTheHouse);
  alert("Мешканців збережено!");
});

function showTheHouse() {
  const div = document.createElement("div");
  const houseArr = JSON.parse(localStorage.getItem("house"));

  document.body.append(div);
  houseArr.forEach((flat, index) => {
    const paragraf = document.createElement("p");
    div.appendChild(paragraf).innerText = `Kвартирa ${index + 1}: ${flat}`;
  });
}
