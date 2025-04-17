class Humburger {
  static small_size = { price: 50, calories: 20 };
  static big_size = { price: 100, calories: 40 };
  static stuffing_cheese = { price: 10, calories: 20 };
  static stuffing_salad = { price: 20, calories: 5 };
  static stuffing_potato = { price: 5, calories: 10 };
  static topping_mayo = { price: 20, calories: 5 };
  static topping_sauce = { price: 15, calories: 0 };

  constructor(size, stuffing = [], topping = []) {
    this.size = size;
    this.stuffing = [stuffing];
    this.topping = [topping];
  }

  calculatePrice() {
    let price =
      this.size.price +
      this.stuffing.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      ) +
      this.topping.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
    return price;
  }

  calculateCalories() {
    let calories =
      this.size.calories +
      this.stuffing.reduce(
        (accumulator, currentValue) => accumulator + currentValue.calories,
        0
      ) +
      this.topping.reduce(
        (accumulator, currentValue) => accumulator + currentValue.calories,
        0
      );
    return calories;
  }

  addStuffing(stuffing) {
    this.stuffing.push(stuffing);
  }

  addTopping(topic) {
    this.topping.push(topic);
  }
}

//Example
const humburger = new Humburger(
  Humburger.small_size,
  Humburger.stuffing_cheese,
  Humburger.topping_sauce
);
console.log("Calories:" + humburger.calculateCalories());
console.log("Price:" + humburger.calculatePrice());

console.log("Add some mayo");
humburger.addTopping(Humburger.topping_mayo);

console.log("Calories:" + humburger.calculateCalories());
console.log("Price:" + humburger.calculatePrice());

console.log("Add some potato");
humburger.addStuffing(Humburger.stuffing_potato);

console.log("Calories:" + humburger.calculateCalories());
console.log("Price:" + humburger.calculatePrice());
