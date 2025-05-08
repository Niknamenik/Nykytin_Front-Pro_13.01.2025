// import "./style.scss";

const showBtnList = document.querySelectorAll(".show_prod_btn");
const productList = document.querySelectorAll(".child-list-group");
const orderBtnList = document.querySelectorAll(".order_btn");
const productCardList = document.querySelectorAll(".card");
const productPricesList = document.querySelectorAll(".price");

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
const doubleEspresso = { price: 1, milliliters: 60, name: "doubleEspresso" };
const orangeFresh = { price: 1, milliliters: 100, name: "orangeFresh" };
const caramelSyrup = { price: 1, milliliters: 30, name: "caramelSyrup" };
const crushedIce = { price: 1, gramm: 200, name: "crushedIce" };
const whiteRum = { price: 1, milliliters: 50, name: "whiteRum" };
const soda = { price: 1, milliliters: 100, name: "soda" };
const lime = { price: 1, gramm: 60, name: "lime" };
const strawberry = { price: 1, gramm: 120, name: "strawberry" };
const halfStrawberry = { price: 1, gramm: 5, name: "strawberry" };
const mint = { price: 1, gramm: 3, name: "mint" };
const espresso = { price: 1, milliliters: 30, name: "espresso" };
const steamedMilk = { price: 1, milliliters: 30, name: "steamedMilk" };
const foam = { price: 1, milliliters: 30, name: "foam" };
const eggs = { price: 1, pieces: 2, name: "eggs" };
const tosts = { price: 1, pieces: 2, name: "tosts" };
const avocado = { price: 1, gramm: 30, name: "avocado" };
const spinach = { price: 1, gramm: 10, name: "spinach" };
const bacon = { price: 1, gramm: 20, name: "bacon" };
const sauce = { price: 1, gramm: 30, name: "sauce" };
const tomatoes = { price: 1, gramm: 30, name: "tomatoes" };
const cabbageLeaf = { price: 1, gramm: 10, name: "cabbageLeaf" };
const cucumber = { price: 1, gramm: 10, name: "cucumber" };
const chicken = { price: 1, gramm: 50, name: "chicken" };
const BBQSouce = { price: 1, gramm: 30, name: "BBQSouce" };
const beefCutlet = { price: 1, gramm: 100, name: "beefCutlet" };
const cheese = { price: 1, gramm: 10, name: "cheese" };
const creamSouce = { price: 1, gramm: 50, name: "creamSouce" };
const raspberry = { price: 1, gramm: 20, name: "raspberry" };
const raspberryChocolate = { price: 1, gramm: 10, name: "raspberryChocolate" };
const cheesecakes = { price: 10, gramm: 300, name: "cheesecakes" };
const miniСheesecake = { price: 1, gramm: 30, name: "miniСheesecake" };
const powderedSugar = { price: 1, gramm: 3, name: "powderedSugar" };
const cheesecake = { price: 4, gramm: 150, name: "cheesecake" };

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
    if (span.dataset.productName === foodList[i].foodName) {
      span.innerHTML = `${foodList[i].calculatePrice()}$`;
    }
  }
});
