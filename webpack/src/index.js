// import "./style.scss";

const showBtnList = document.querySelectorAll(".show_prod_btn");
const productList = document.querySelectorAll(".child-list-group");
const orderBtnList = document.querySelectorAll(".order_btn");
const productCardList = document.getElementsByClassName("card");
const productPricesList = document.querySelectorAll(".price");
const curStuffingList = document.querySelector(".editing_order");
const scrollController = {
  disable() {
    document.body.style.cssText = `overflow: hidden;`;
  },
  enable() {
    document.body.style.cssText = `overflow:'';`;
  },
};
const formEditor = document.getElementById("form_editor");
const addStuffingBtn = document.getElementById("add_stuffing_btn");
const stuffingSelector = document.getElementById("stuffing-additor");
let currentProduct;

showBtnList.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.toggle("rotate");
    const index = [...showBtnList].indexOf(this);
    productList[index].classList.toggle("open");
  });
});

orderBtnList.forEach((element) =>
  element.addEventListener("click", function () {
    const index = [...orderBtnList].indexOf(this);
    productCardList[index];
  })
);

const standartSize = 1;
const bigSize = 2;
const doubleEspresso = {
  price: 1,
  milliliters: 60,
  name: "Double espresso - 60 ml",
  id: "doubleEspresso",
};
const orangeFresh = {
  price: 1,
  milliliters: 100,
  name: "Orange fresh - 100 ml",
  id: "orangeFresh",
};
const caramelSyrup = {
  price: 1,
  milliliters: 30,
  name: "Caramel syrup - 30 ml",
  id: "caramelSyrup",
};
const crushedIce = {
  price: 1,
  gramm: 200,
  name: "Crushed ice - 200g",
  id: "crushedIce",
};
const whiteRum = {
  price: 1,
  milliliters: 50,
  name: "White rum Cubana Cultura - 50ml",
  id: "whiteRum",
};
const soda = { price: 1, milliliters: 100, name: "Soda - 100ml", id: "soda" };
const lime = { price: 1, gramm: 60, name: "Lime - 60g", id: "lime" };
const strawberry = {
  price: 1,
  gramm: 120,
  name: "Strawberry - 120g",
  id: "strawberry",
};
const halfStrawberry = {
  price: 1,
  gramm: 5,
  name: "Strawberry - 5g",
  id: "halfStrawberry",
};
const mint = { price: 1, gramm: 3, name: "Mint - 3g", id: "mint" };
const espresso = {
  price: 1,
  milliliters: 30,
  name: "Espresso - 30ml",
  id: "espresso",
};
const steamedMilk = {
  price: 1,
  milliliters: 30,
  name: "Steamed milk - 30ml",
  id: "steamedMilk",
};
const foam = { price: 1, milliliters: 30, name: "Foam - 30ml", id: "foam" };
const eggs = { price: 1, pieces: 2, name: "Eggs - 2", id: "eggs" };
const tosts = { price: 1, pieces: 2, name: "Tosts - 2 pieces", id: "tosts" };
const avocado = { price: 1, gramm: 30, name: "Avocado - 30g", id: "avocado" };
const spinach = { price: 1, gramm: 10, name: "Spinach - 10g", id: "spinach" };
const bacon = { price: 1, gramm: 20, name: "Bacon - 20g", id: "bacon" };
const sauce = { price: 1, gramm: 30, name: "Sauce - 30g", id: "sauce" };
const tomatoes = {
  price: 1,
  gramm: 30,
  name: "Tomatoes - 30g",
  id: "tomatoes",
};
const cabbageLeaf = {
  price: 1,
  gramm: 10,
  name: "Сabbage leaf - 10g",
  id: "cabbageLeaf",
};
const cucumber = {
  price: 1,
  gramm: 10,
  name: "Сucumber - 10g",
  id: "cucumber",
};
const chicken = { price: 1, gramm: 50, name: "Chicken - 50g", id: "chicken" };
const BBQSouce = {
  price: 1,
  gramm: 30,
  name: "BBQ Souce - 30g",
  id: "BBQSouce",
};
const beefCutlet = {
  price: 1,
  gramm: 100,
  name: "Beef cutlet - 100g",
  id: "beefCutlet",
};
const cheese = { price: 1, gramm: 10, name: "Cheese - 10g", id: "cheese" };
const creamSouce = {
  price: 1,
  gramm: 50,
  name: "Cream souce - 50g",
  id: "creamSouce",
};
const raspberry = {
  price: 1,
  gramm: 20,
  name: "Raspberry - 20g",
  id: "raspberry",
};
const raspberryChocolate = {
  price: 1,
  gramm: 10,
  name: "Raspberry chocolate - 10g",
  id: "raspberryChocolate",
};
const cheesecakes = {
  price: 10,
  gramm: 300,
  name: "Сheesecakes - 10 (1 - 30g)",
  id: "cheesecakes",
};
const miniСheesecake = {
  price: 1,
  gramm: 30,
  name: "Mini Cheesecake - 30g",
  id: "miniСheesecake",
};
const powderedSugar = {
  price: 1,
  gramm: 3,
  name: "Powdered sugar - 3g",
  id: "powderedSugar",
};
const cheesecake = {
  price: 4,
  gramm: 150,
  name: "Сheesecake - 150g",
  id: "cheesecake",
};
const stuffingList = [
  doubleEspresso,
  orangeFresh,
  caramelSyrup,
  crushedIce,
  whiteRum,
  soda,
  lime,
  strawberry,
  halfStrawberry,
  mint,
  espresso,
  steamedMilk,
  foam,
  eggs,
  tosts,
  avocado,
  spinach,
  bacon,
  sauce,
  tomatoes,
  cabbageLeaf,
  cucumber,
  chicken,
  BBQSouce,
  beefCutlet,
  cheese,
  creamSouce,
  raspberry,
  raspberryChocolate,
  cheesecakes,
  miniСheesecake,
  powderedSugar,
  cheesecake,
];

class Food {
  constructor(foodName, size, stuffing = [], topping = []) {
    this.foodName = foodName;
    this.size = size;
    this.stuffing = [...stuffing];
    this.topping = [...topping];
  }
  calculatePrice() {
    let price =
      this.size *
      (this.stuffing.reduce((acc, curr) => acc + curr.price, 0) +
        this.topping.reduce((acc, curr) => acc + curr.price, 0));
    return price;
  }
  addStuffing(stuffing) {
    this.stuffing.push(stuffing);
  }

  removeStiffing(stuffing) {
    const index = this.stuffing.indexOf(stuffing);
    console.log(index);
    this.stuffing.splice(index, 1);
  }

  addTopping(topping) {
    this.topping.push(topping);
  }
}

const bumble = new Food("bumble", standartSize, [
  doubleEspresso,
  orangeFresh,
  caramelSyrup,
  crushedIce,
]);

const strawberryMojito = new Food("strawberry_mojito", standartSize, [
  whiteRum,
  soda,
  lime,
  strawberry,
  mint,
  crushedIce,
]);

const cappuccino = new Food("cappuccino", standartSize, [
  espresso,
  steamedMilk,
  foam,
]);

const englishBreakfast = new Food("english_breakfast", standartSize, [
  eggs,
  tosts,
  avocado,
  spinach,
  bacon,
  sauce,
]);

const sandwich = new Food("sandwich", standartSize, [
  tosts,
  tomatoes,
  cabbageLeaf,
  cucumber,
  chicken,
  BBQSouce,
]);

const burger = new Food("burger", standartSize, [
  beefCutlet,
  cabbageLeaf,
  tomatoes,
  cheese,
  BBQSouce,
]);

const croissant = new Food("croissant", standartSize, [
  creamSouce,
  raspberry,
  raspberryChocolate,
]);

const miniCheesecakes = new Food("mini_cheesecakes", standartSize, [
  cheesecakes,
  strawberry,
  creamSouce,
  powderedSugar,
]);

const cheesecakeDessert = new Food("cheesecake", standartSize, [
  cheesecake,
  strawberry,
  powderedSugar,
]);

const foodList = [
  bumble,
  strawberryMojito,
  cappuccino,
  englishBreakfast,
  sandwich,
  burger,
  croissant,
  miniCheesecakes,
  cheesecakeDessert,
];

productPricesList.forEach((span) => {
  for (let i = 0; i < foodList.length; i++) {
    if (span.dataset.productId === foodList[i].foodName) {
      span.innerHTML = `${foodList[i].calculatePrice()}$`;
    }
  }
});

const editORderBtn = document.querySelectorAll("#order_editor");
const orderEditModal = document.querySelector("#order_edit_modal");
const closeEdidorBtn = document.querySelector("#close_editor_btn");

closeEdidorBtn.addEventListener("click", () => {
  orderEditModal.classList.toggle("editing");
  scrollController.enable();
});

editORderBtn.forEach((element) => {
  element.addEventListener("click", function () {
    orderEditModal.classList.toggle("editing");
    scrollController.disable();
    const productId = this.dataset.productId;
    const img = document.getElementById("product_img");
    const addBtn = document.createElement("button");
    const spanForPrice = document.createElement("span");

    img.setAttribute("src", `../../imgs/food/${productId}.jpg`);
    spanForPrice.setAttribute("id", "editing_prise");
    spanForPrice.setAttribute("class", "price");

    const currentProductName = [...productCardList].filter(
      (div) => div.dataset.productId == productId
    )[0].dataset.productName;
    curStuffingList.innerHTML = "";
    const p = document.querySelector(".editor_product_name");

    const currentProductClass = foodList.filter(
      (element) => element.foodName == productId
    )[0];
    currentProduct = currentProductClass;
    console.log(currentProduct);

    addBtn.textContent = "Add order";
    addBtn.setAttribute("class", "btn btn-primary");
    addBtn.setAttribute("type", "submit");
    addBtn.setAttribute("id", "addOrderBtn");
    p.textContent = currentProductName;
    stuffingListCreator(currentProductClass.stuffing);
    spanForPrice.innerText = `${currentProductClass.calculatePrice()}$`;
    curStuffingList.append(spanForPrice);
    curStuffingList.append(addBtn);

    addStuffingBtn.removeEventListener("click", stuffingAdding);
    addStuffingBtn.addEventListener("click", stuffingAdding);
  });
});

formEditor.addEventListener("submit", (event) => {
  event.preventDefault();
});

function stuffingAdding() {
  if (stuffingSelector.value) {
    const stuffingName = stuffingList.filter(
      (element) => element.id === stuffingSelector.value
    );
    stuffingListCreator(stuffingName);
    currentProduct.addStuffing(stuffingName[0]);
    console.log(currentProduct);
    resetPrice();
  }
}
function stuffingDeleting() {
  const stuffingId = this.parentElement.dataset.productId;
  const stuffing = stuffingList.filter((element) => element.id === stuffingId);
  console.log(stuffing[0]);
  currentProduct.removeStiffing(stuffing[0]);
  this.parentElement.remove();
  console.log(currentProduct);
  resetPrice();
}

function classCreator(currentProductClass) {}

function stuffingListCreator(stuffingList) {
  for (let kej of stuffingList) {
    const listItem = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "del_Stuffing");
    delBtn.setAttribute("type", "button");
    delBtn.textContent = `-`;
    delBtn.addEventListener("click", stuffingDeleting);
    const p = document.createElement("p");
    p.innerHTML = `${kej.name}`;
    listItem.dataset.productId = kej.id;
    listItem.append(p);
    listItem.append(delBtn);
    curStuffingList.prepend(listItem);
  }
}

function resetPrice() {
  const spanForPrice = document.getElementById("editing_prise");

  spanForPrice.innerText = `${currentProduct.calculatePrice()}$`;
}
