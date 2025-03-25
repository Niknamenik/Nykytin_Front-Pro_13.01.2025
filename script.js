// Створити програму для відображення результатів голосування. Як варіанти відповіді - смайлики. 
// За замовчуванням 5 шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл
// При натисканні на смайл - під ним змінюється значення лічильника
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не призводило до додавання нових функцій

const arr = document.getElementsByClassName('smailik')
let smiles = Array(...arr)

smiles.forEach(element => {
    let counter = 0
    element.addEventListener('click', function (){
        this.getElementsByTagName('p')[0].textContent = ++counter
    })
});