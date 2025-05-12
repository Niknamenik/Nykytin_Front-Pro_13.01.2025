// import "./style.scss";

const showBtnList = document.querySelectorAll(".show_prod_btn");
const productList = document.querySelectorAll(".child-list-group");
const orderBtnList = document.querySelectorAll(".order_btn");
const productCardList = document.getElementsByClassName("card");
const productPricesList = document.querySelectorAll(".price");
const scrollController = {
  disable() {
    document.body.style.cssText = `overflow: hidden;`;
  },
  enable() {
    document.body.style.cssText = `overflow:'';`;
  },
};

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
};
const orangeFresh = {
  price: 1,
  milliliters: 100,
  name: "Orange fresh - 100 ml",
};
const caramelSyrup = {
  price: 1,
  milliliters: 30,
  name: "Caramel syrup - 30 ml",
};
const crushedIce = { price: 1, gramm: 200, name: "Crushed ice - 200g" };
const whiteRum = {
  price: 1,
  milliliters: 50,
  name: "White rum Cubana Cultura - 50ml",
};
const soda = { price: 1, milliliters: 100, name: "Soda - 100ml" };
const lime = { price: 1, gramm: 60, name: "Lime - 60g" };
const strawberry = { price: 1, gramm: 120, name: "Strawberry - 120g" };
const halfStrawberry = { price: 1, gramm: 5, name: "Strawberry - 5g" };
const mint = { price: 1, gramm: 3, name: "Mint - 3g" };
const espresso = { price: 1, milliliters: 30, name: "Espresso - 30ml" };
const steamedMilk = { price: 1, milliliters: 30, name: "Steamed milk - 30ml" };
const foam = { price: 1, milliliters: 30, name: "Foam - 30ml" };
const eggs = { price: 1, pieces: 2, name: "Eggs - 2" };
const tosts = { price: 1, pieces: 2, name: "Tosts - 2 pieces" };
const avocado = { price: 1, gramm: 30, name: "Avocado - 30g" };
const spinach = { price: 1, gramm: 10, name: "Spinach - 10g" };
const bacon = { price: 1, gramm: 20, name: "Bacon - 20g" };
const sauce = { price: 1, gramm: 30, name: "Sauce - 30g" };
const tomatoes = { price: 1, gramm: 30, name: "Tomatoes - 30g" };
const cabbageLeaf = { price: 1, gramm: 10, name: "Сabbage leaf - 10g" };
const cucumber = { price: 1, gramm: 10, name: "Сucumber - 10g" };
const chicken = { price: 1, gramm: 50, name: "Chicken - 50g" };
const BBQSouce = { price: 1, gramm: 30, name: "BBQ Souce - 30g" };
const beefCutlet = { price: 1, gramm: 100, name: "Beef cutlet - 100g" };
const cheese = { price: 1, gramm: 10, name: "Cheese - 10g" };
const creamSouce = { price: 1, gramm: 50, name: "Cream souce - 50g" };
const raspberry = { price: 1, gramm: 20, name: "Raspberry - 20g" };
const raspberryChocolate = {
  price: 1,
  gramm: 10,
  name: "Raspberry chocolate - 10g",
};
const cheesecakes = {
  price: 10,
  gramm: 300,
  name: "Сheesecakes - 10 (1 - 30g)",
};
const miniСheesecake = { price: 1, gramm: 30, name: "Mini Cheesecake - 30g" };
const powderedSugar = { price: 1, gramm: 3, name: "Powdered sugar - 3g" };
const cheesecake = { price: 4, gramm: 150, name: "Сheesecake - 150g" };

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
    img.setAttribute("src", `../../imgs/food/${productId}.jpg`);

    const currentProductName = [...productCardList].filter(
      (div) => div.dataset.productId == productId
    )[0].dataset.productName;

    const ul = document.querySelector(".editing_order");
    ul.innerHTML = "";
    const p = document.querySelector(".editor_product_name");

    const currentProductClass = foodList.filter(
      (element) => element.foodName == productId
    )[0];

    addBtn.textContent = "Add some stuffing";
    addBtn.setAttribute("class", "btn btn-primary");
    p.textContent = currentProductName;

    for (let kej of currentProductClass.stuffing) {
      const listItem = document.createElement("li");
      const delBtn = document.createElement("button");
      delBtn.setAttribute("class", "del_Stuffing");
      delBtn.textContent = `-`;
      const p = document.createElement("p");
      p.innerHTML = `${kej.name}`;
      listItem.append(p);
      listItem.append(delBtn);
      ul.append(listItem);
    }
    ul.append(addBtn);
  });
});
