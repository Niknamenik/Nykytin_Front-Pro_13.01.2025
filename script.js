// Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. 
// Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.

let arr = [1, 5, 7, 10, 34, 2];
console.log(arr);
arr.sort((a, b) => a - b);
console.log(arr);
arr.splice(1, 3, );
console.log(arr);

// Дано масив
const arr_1 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.
let resOfSum = arr_1.filter((element) => element > 0);

console.log(resOfSum.length);
console.log(resOfSum);

let initialValue = 0;
let sumWithInitial = resOfSum.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue);
    console.log(sumWithInitial);
    
// Знайти мінімальний елемент масиву та його порядковий номер.    
let arrInARow = arr_1.toSorted((a, b) => a - b);
console.log(arrInARow);

let min = arrInARow.shift();
let findMinIndex = arr_1.findIndex((element) => element === min);

console.log(`${min} - мінімальний елемент, його iндекс - ${findMinIndex}`);

// Знайти максимальний елемент масиву та його порядковий номер.
let max = arrInARow.pop();
let findMaxIndex = arr_1.findIndex((element) => element === max);

console.log(`${max} - максимальний елемент, його iндекс - ${findMaxIndex}`)

// Визначити кількість негативних елементів.  

let negativeArr = arr_1.filter((element) => element < 0);

console.log(negativeArr.length);

// Знайти кількість непарних позитивних елементів.

const countNotParOffPositive = arr_1.filter(num => num > 0 && num % 2 !== 0);
console.log(countNotParOffPositive.length);

// Визначити кількість парних позитивних елементів.

const countParOffPositive = arr_1.filter(num => num > 0 && num % 2 === 0);
console.log(countParOffPositive.length);

// Знайти суму парних позитивних елементів.

let sumOfPar = countParOffPositive.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfPar);

// Знайти суму непарних позитивних елементів.

let sumOfNotPar = countNotParOffPositive.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfNotPar);   

// Знайти добуток позитивних елементів.

let mult = resOfSum.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(mult);

//  Знайти найбільший серед елементів масиву, решту занулити.

const maxElement = Math.max(...arr_1);
const newArr = arr_1.map(num =>(num === maxElement ? num : 0));
console.log(newArr);