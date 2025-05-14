// import "./style.scss";

const showBtnList = document.querySelectorAll(".show_prod_btn");
const productList = document.querySelectorAll(".child-list-group");
const orderBtnList = document.querySelectorAll(".order_btn");
const productCardList = document.getElementsByClassName("card");
const productPricesList = document.querySelectorAll(".price");
const curStuffingList = document.querySelector(".editing_order");
// const scrollController = {
//   disable() {
//     document.body.style.cssText = `
//     overflow: hidden;`;
//   },
//   enable() {
//     document.body.style.cssText = `
//     overflow:'';`;
//   },
// };
const formEditor = document.getElementById("form_editor");
const addStuffingBtn = document.getElementById("add_stuffing_btn");
const stuffingSelector = document.getElementById("stuffing-additor");
let currentProduct;
const orders = [];

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
  name: "Double espresso",
  id: "doubleEspresso",
};
const orangeFresh = {
  price: 1,
  milliliters: 100,
  name: "Orange fresh",
  id: "orangeFresh",
};
const caramelSyrup = {
  price: 1,
  milliliters: 30,
  name: "Caramel syrup",
  id: "caramelSyrup",
};
const crushedIce = {
  price: 1,
  gramm: 200,
  name: "Crushed ice",
  id: "crushedIce",
};
const whiteRum = {
  price: 1,
  milliliters: 50,
  name: "White rum Cubana Cultura",
  id: "whiteRum",
};
const soda = { price: 1, milliliters: 100, name: "Soda", id: "soda" };
const lime = { price: 1, gramm: 60, name: "Lime", id: "lime" };
const strawberry = {
  price: 1,
  gramm: 120,
  name: "Strawberry",
  id: "strawberry",
};
const halfStrawberry = {
  price: 1,
  gramm: 5,
  name: "Strawberry",
  id: "halfStrawberry",
};
const mint = { price: 1, gramm: 3, name: "Mint", id: "mint" };
const espresso = {
  price: 1,
  milliliters: 30,
  name: "Espresso",
  id: "espresso",
};
const steamedMilk = {
  price: 1,
  milliliters: 30,
  name: "Steamed milk",
  id: "steamedMilk",
};
const foam = { price: 1, milliliters: 30, name: "Foam", id: "foam" };
const eggs = { price: 1, pieces: 2, name: "Eggs", id: "eggs" };
const tosts = { price: 1, pieces: 2, name: "Tosts", id: "tosts" };
const avocado = { price: 1, gramm: 30, name: "Avocado", id: "avocado" };
const spinach = { price: 1, gramm: 10, name: "Spinach", id: "spinach" };
const bacon = { price: 1, gramm: 20, name: "Bacon", id: "bacon" };
const sauce = { price: 1, gramm: 30, name: "Sauce", id: "sauce" };
const tomatoes = {
  price: 1,
  gramm: 30,
  name: "Tomatoes",
  id: "tomatoes",
};
const cabbageLeaf = {
  price: 1,
  gramm: 10,
  name: "Сabbage leaf",
  id: "cabbageLeaf",
};
const cucumber = {
  price: 1,
  gramm: 10,
  name: "Сucumber",
  id: "cucumber",
};
const chicken = { price: 1, gramm: 50, name: "Chicken", id: "chicken" };
const BBQSouce = {
  price: 1,
  gramm: 30,
  name: "BBQ Souce",
  id: "BBQSouce",
};
const beefCutlet = {
  price: 1,
  gramm: 100,
  name: "Beef cutlet",
  id: "beefCutlet",
};
const cheese = { price: 1, gramm: 10, name: "Cheese", id: "cheese" };
const creamSouce = {
  price: 1,
  gramm: 50,
  name: "Cream souce",
  id: "creamSouce",
};
const raspberry = {
  price: 1,
  gramm: 20,
  name: "Raspberry",
  id: "raspberry",
};
const raspberryChocolate = {
  price: 1,
  gramm: 10,
  name: "Raspberry chocolate",
  id: "raspberryChocolate",
};
const cheesecakes = {
  price: 10,
  gramm: 300,
  name: "Сheesecakes",
  id: "cheesecakes",
};
const miniСheesecake = {
  price: 1,
  gramm: 30,
  name: "Mini Cheesecake",
  id: "miniСheesecake",
};
const powderedSugar = {
  price: 1,
  gramm: 3,
  name: "Powdered sugar",
  id: "powderedSugar",
};
const cheesecake = {
  price: 4,
  gramm: 150,
  name: "Сheesecake",
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
  constructor(foodName, size, stuffing = []) {
    this.foodName = foodName;
    this.size = size;
    this.stuffing = [...stuffing];
  }
  calculatePrice() {
    let price =
      this.size * this.stuffing.reduce((acc, curr) => acc + curr.price, 0);
    return price;
  }
  addStuffing(stuffing) {
    this.stuffing.push(stuffing);
  }

  removeStiffing(stuffing) {
    const index = this.stuffing.indexOf(stuffing);
    this.stuffing.splice(index, 1);
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
  // scrollController.enable();
});

addOrderToCart();

editORderBtn.forEach((element) => {
  element.addEventListener("click", function () {
    formEditor.reset();
    orderEditModal.classList.toggle("editing");
    // scrollController.disable();
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

    document.documentElement.scrollTop = 0;

    orderSaving();
  });
});

function orderSaving() {
  const addOrderBtn = document.getElementById("addOrderBtn");
  const sizeRadio = document.getElementsByName("size");
  const ordersFormLS = JSON.parse(localStorage.getItem("orders"));
  addOrderBtn.addEventListener("click", function () {
    const size = [...sizeRadio].filter((element) => element.checked == true)[0]
      .value;
    currentProduct.size = size;
    currentProduct.totalPrice = currentProduct.calculatePrice();
    currentProduct.orderId = +new Date();
    orderEditModal.classList.toggle("editing");
    orders.push(currentProduct);
    if (ordersFormLS) {
      ordersFormLS.push(currentProduct);
      localStorage.setItem("orders", JSON.stringify(ordersFormLS));
    } else {
      localStorage.setItem("orders", JSON.stringify(orders));
    }

    addOrderToCart();
  });
}

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
    resetPrice();
  }
}
function stuffingDeleting() {
  const stuffingId = this.parentElement.dataset.productId;
  const stuffing = stuffingList.filter((element) => element.id === stuffingId);
  currentProduct.removeStiffing(stuffing[0]);
  this.parentElement.remove();
  resetPrice();
}

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

function getSizeOfProduct(element) {
  currentProduct.size = element.value;
  resetPrice();
}

function resetPrice() {
  const spanForPrice = document.getElementById("editing_prise");

  spanForPrice.innerText = `${currentProduct.calculatePrice()}$`;
}
function addOrderToCart() {
  const ordersFromLS = localStorage.getItem("orders");
  if (ordersFromLS) {
    const cartBody = document.getElementById("cart_body");

    cartBody.innerHTML = "";
    for (let kej of JSON.parse(ordersFromLS)) {
      const listItem = document.createElement("li");
      const p = document.createElement("p");
      const stuffingList = document.createElement("ul");
      const delOrderBtn = document.createElement("button");
      const spanForPrice = document.createElement("span");
      const img = document.createElement("img");
      const productId = kej.foodName;
      const currentProducrCard = [...productCardList].filter(
        (element) => element.dataset.productId == productId
      );
      const productName = currentProducrCard[0].dataset.productName;

      img.setAttribute("src", `../../imgs/food/${productId}.jpg`);
      delOrderBtn.setAttribute("id", "del_order_btn");
      delOrderBtn.innerText = "Delete order";
      delOrderBtn.dataset.orderId = kej.orderId;
      spanForPrice.setAttribute("class", "price final_price");
      p.innerHTML = `${productName} - `;
      spanForPrice.innerText = `${kej.totalPrice}$`;
      listItem.append(img);
      p.append(spanForPrice);
      stuffingList.append(p);
      listItem.append(stuffingList);
      listItem.append(delOrderBtn);
      cartBody.append(listItem);

      delOrderBtn.addEventListener("click", function () {
        const orderId = this.dataset.orderId;
        const curOrdersFormLS = localStorage.getItem("orders");
        const currOrders = JSON.parse(curOrdersFormLS);
        currOrders.splice(
          currOrders.indexOf(
            currOrders.filter((element) => element.orderId == orderId)[0]
          ),
          1
        );
        localStorage.setItem("orders", JSON.stringify(currOrders));

        this.parentElement.remove();
        setTotalPrice();
      });

      for (let stuffing of kej.stuffing) {
        const li = document.createElement("li");

        li.innerText = `${stuffing.name}`;
        stuffingList.append(li);
      }
    }
    setTotalPrice();
  } else {
    return;
  }
}

function setTotalPrice() {
  const cartFooter = document.querySelector(".modal-footer");
  const priceList = document.getElementsByClassName("final_price");
  let spanForFinalPrice = "";
  if (document.querySelector(".total_price")) {
    spanForFinalPrice = document.querySelector(".total_price");
  } else {
    spanForFinalPrice = document.createElement("span");
  }

  const priceArr = [...priceList].map(
    (element) => (element = parseInt(element.innerHTML))
  );
  spanForFinalPrice.innerText = `Total price: ${priceArr.reduce(
    (acc, curr) => acc + curr,
    0
  )}$`;
  cartFooter.prepend(spanForFinalPrice);
  spanForFinalPrice.setAttribute("class", "price total_price");
}
