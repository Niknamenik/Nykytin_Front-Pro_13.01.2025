class Resident {
  constructor(name) {
    this.name = name;
  }
}

class Flat {
  constructor(number) {
    this.number = number;
    this.residents = [];
  }

  addResident(resident) {
    this.residents.push(resident);
  }
}

class House {
  constructor() {
    this.flats = [];
  }

  addFlat(flat) {
    this.flats.push(flat);
  }

  getInfo() {
    return this.flats
      .map((flat) => {
        const names = flat.residents.map((r) => r.name).join(", ");
        return `Квартира ${flat.number}: ${names}`;
      })
      .join("<br>");
  }
}

class HouseBuilder {
  constructor() {
    this.house = new House();
    this.flatsSection = document.getElementById("flats-section");
    this.output = document.getElementById("output");
  }

  createFlatsForm() {
    const numFlats = +document.getElementById("num-flats").value;
    const numResidents = +document.getElementById("num-residents").value;

    if (!numFlats || !numResidents) {
      alert("Будь ласка, заповніть всі поля.");
      return;
    }

    this.house = new House(); // reset
    this.flatsSection.innerHTML = "";
    this.flatsSection.classList.remove("hidden");

    for (let i = 0; i < numFlats; i++) {
      const flat = new Flat(i + 1);
      this.house.addFlat(flat);

      const flatDiv = document.createElement("div");
      flatDiv.classList.add("block");
      flatDiv.innerHTML = `<h3>Квартира ${i + 1}</h3>`;

      for (let j = 0; j < numResidents; j++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Мешканець ${j + 1}`;
        input.dataset.flatIndex = i;
        flatDiv.appendChild(input);
      }

      this.flatsSection.appendChild(flatDiv);
    }

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Зберегти мешканців";
    saveBtn.onclick = () => this.saveResidents(numFlats, numResidents);
    this.flatsSection.appendChild(saveBtn);
  }

  saveResidents(numFlats, numResidents) {
    const inputs = this.flatsSection.querySelectorAll("input");
    let allFilled = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) allFilled = false;
    });

    if (!allFilled) {
      alert("Заповніть всі імена мешканців.");
      return;
    }

    this.house.flats.forEach((flat) => (flat.residents = []));

    inputs.forEach((input) => {
      const flatIndex = input.dataset.flatIndex;
      const name = input.value.trim();
      const resident = new Resident(name);
      this.house.flats[flatIndex].addResident(resident);
    });

    document.getElementById("show-data-btn").classList.remove("hidden");
    alert("Мешканців збережено!");
  }

  showHouseData() {
    this.output.innerHTML =
      `<h3>Інформація про будинок:</h3>` + this.house.getInfo();
  }
}

const builder = new HouseBuilder();
