// static small_size = { price: 50, calories: 20 };
// static big_size = { price: 100, calories: 40 };
// static stuffing_cheese = { price: 10, calories: 20 };
// static stuffing_salad = { price: 20, calories: 5 };
// static stuffing_potato = { price: 5, calories: 10 };
// static topping_mayo = { price: 20, calories: 10 };
// static topping_sauce = { price: 15, calories: 0 };

// static sizeOptions = [small_size, big_size];
// static stuffingOptions = [stuffing_cheese, stuffing_salad, stuffing_potato];
// static toppingOptions = [topping_sauce, topping_mayo];
class Humburger {
  static small_size = { price: 50, calories: 20 };
  static big_size = { price: 100, calories: 40 };
  static stuffing_cheese = { price: 10, calories: 20 };
  static stuffing_salad = { price: 20, calories: 5 };
  static stuffing_potato = { price: 5, calories: 10 };
  static topping_mayo = { price: 20, calories: 10 };
  static topping_sauce = { price: 15, calories: 0 };

  constructor(size, stuffings = {}, toppings = {}) {
    this.size = size;
    this.stuffings = stuffings;
    this.toppings = toppings;
  }
}
const humburger = new Humburger(
  Humburger.small_size,
  Humburger.stuffing_cheese,
  Humburger.topping_sauce
);
console.log(humburger);
