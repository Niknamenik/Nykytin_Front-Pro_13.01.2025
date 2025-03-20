// Є масив об'єктів з товарами та їх цінами. Вивести в консоль список із даними по всіх товарах (кожен товар на окремому рядку в консолі). 
// Від користувача отримати номер товару (реалізувати перевірку на правильність введення номера) та кількість (також реалізувати валідацію), 
// вивести на сторінку підсумкову вартість покупки. Якщо вартість перевищує 10.000грн, розрахувати знижку в 20% і повідомити про це користувача.
// * ускладнити практичне завдання запровадженням категорій товарів. Відповідно, користувач може вибрати категорію товару, номер товару та кількість. 
// Потім результат його вибору з'явиться на сторінці
 let products = [
  {product: 'SDFHSF', price: 250, category: 'vegetables'}, 
  {product: 'asdad', price: 300, category: 'fruits'}, 
  {product: 'sdgwh', price: 500, category: 'fruits'}, 
  {product:'fdsghb', price: 100, category: 'vegetables'}];

 for (let i = 0; i < products.length; i++){
  console.log(`${i + 1}) ${products[i].product} : ${products[i].price}`);
 }
//  let check = products.find((value) => value.category === 'fruits')
// console.log(check)
 let categoryOfProducts = prompt('Виберiть категорiю товарiв:');
 while(!products.find((value) => value.category === categoryOfProducts)){
  alert(`Такоi категорii не iснуэ, сробуйте ще раз`)
  categoryOfProducts = prompt('Виберiть категорiю товарiв:')
 };
 let filteredProducts = products.filter((value) => value.category === categoryOfProducts);
 console.log(`Ви обрали категорiю - ${categoryOfProducts} :`)
 filteredProducts.forEach((product,item) => {
    console.log(`${item + 1}) ${product.product} : ${product.price}`)
 })

 let productNumber = parseInt(prompt(`Введiть номер товару:`));
 while (productNumber < 1 || productNumber > filteredProducts.length || isNaN(productNumber)){
  alert('Невiрний номер товару')
  productNumber = parseInt(prompt(`Введiть номер товару вiд 1 до ${filteredProducts.length}:`));
 };

 let quantity = parseInt(prompt(`Введiть кiлькiсть товару:`));
 while(quantity < 1 || isNaN(quantity)){
  alert(`Не вiрна кiлькiсть товару, сробуйте ще раз`)
  quantity = parseInt(prompt(`Введiть кiлькiсть товару:`))
 }

 let sumOfProductPrice = (filteredProducts[productNumber - 1].price * quantity)
 if(sumOfProductPrice >= 10000){
  alert(`Сума ваших товарiв превисила 10000 грн. Тому ви отримали знижку 20%`)
  sumOfProductPrice = sumOfProductPrice * 0.8
 }
 console.log(`Сума ваших товарiв:${sumOfProductPrice}`);