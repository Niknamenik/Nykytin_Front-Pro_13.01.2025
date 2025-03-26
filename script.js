// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2,3]) і генерує список з елементів
// Якщо ж у масиві зустрічається масив (наприклад, [1,2, [1.1,1.2,1.3], 3]) то робити вкладений список. 
// Для перевірки масиву використовуйте Array.isArray()

const arr = [1,2, [1.1,1.2,1.35,6,7,8,98,9], 3,4,5,[6,7,87,9],0]
function generateList (array){
    if (!document.body.querySelector('ul')){
        const ul = document.createElement('ul')
        document.body.appendChild(ul)
    }
    
    for (let i = 0; array.length > i; i++) {
        const li = document.createElement('li')
        const ul = document.querySelector('ul')
        ul.appendChild(li)
        if (!Array.isArray(array[i])){
            li.textContent = array[i]
        }
        if (Array.isArray(array[i])){
            const interUl = document.createElement('ul')
            const liArr = document.querySelectorAll('li')
            const lastLi = liArr[liArr.length - 1]
            lastLi.appendChild(interUl)
            for (let idx = 0; array[i].length > idx; idx ++){
                const li = document.createElement('li')
                interUl.appendChild(li).textContent = array[i][idx]
            }
        }
    }
}