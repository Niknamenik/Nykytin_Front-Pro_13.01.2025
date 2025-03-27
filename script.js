// Реалізувати подобу інтернет-магазину
// Дано 3 блоки
// У лівій частині сторінки – перелік категорій.
// При натисканні на категорію виводиться у середній блок список товарів цієї категорії.
// Клік на товар – інформацію про товар у правому блоці.
// В інформації товару - кнопка "купити"
// При натисканні на “купити” з'являється повідомлення, що товар куплено та повернення у вихідний стан програми (коли відображається лише список категорій)

const categorysArr = Array(... document.getElementsByClassName('category')[0].querySelectorAll('li'));

categorysArr.forEach((element) => element.addEventListener('click', showProducts))

function showProducts (){
    const ul = document.getElementsByClassName(`${this.innerHTML}_products`)[0]
    const ulArr = Array(... document.getElementsByClassName('products')[0].querySelectorAll('ul'))
    ulArr.forEach((element) => element.style = 'display:none')
    ul.style = 'display:block'
    const liArr = Array(... ul.getElementsByTagName('li'))
    liArr.forEach((element) => element.addEventListener('click', showInfo))
    const info = document.getElementsByClassName('info')[0]
    info.innerHTML = ''

}
function showInfo (){
    const info = document.getElementsByClassName('info')[0]
    const p = document.createElement('p')
    const btn = document.createElement('button')
    const li = this
    info.style = 'display: block;'
    info.innerHTML = ''
    info.appendChild(p).textContent = `info about ${this.innerHTML}`
    info.appendChild(btn).textContent = 'Buy'
    btn.addEventListener('click', function () {
        alert(`Done! Ty for your order (${li.textContent})`)
        window.location.reload()
    })
}