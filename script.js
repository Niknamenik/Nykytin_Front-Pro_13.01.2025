// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeElement(array, item) {
   const findItem =  array.indexOf(item);
    array.splice(findItem, 1);
    return array;
};
console.log(removeElement(array, 3));