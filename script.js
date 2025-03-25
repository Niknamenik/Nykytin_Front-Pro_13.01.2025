// Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. 
// При зникненні фокуса - так само пропадає

const text = document.querySelector('input');
const info = document.getElementById('hiden');

info.style.color = 'green'
info.style.width = '900'
info.style.padding = '30px'
info.style.display = 'none'

text.addEventListener('focus', function (event) {
    info.style.display = 'block'
})
text.addEventListener('blur', () => {
    info.style.display = 'none'
})


//На сторінці є дві кнопки. 
// При натисканні на першу кнопку просимо користувача ввести в prompt посилання, при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). 
// Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо

const getter = document.getElementById('getter');
const launcher = document.getElementById('link')
getter.addEventListener('click', getALink)

function getALink () {
    const link = prompt('Enter yout link');
    if (link.slice(0,5) === 'http:' || link.slice(0,6) === 'https:'){ // https://www.mediaexpert.pl/profile/complaint/detail/f9acf651-f84d-4d06-b688-4762a44dd01c
        launcher.href = link;
        return link;
    }
    let repairedLink = 'https://' + link; 
    launcher.href = repairedLink;
    return repairedLink;
}

// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const table = document.querySelector('table');
const newTr = document.createElement('tr')
const newTd = document.createElement('td')
let i = 0
let number = 1

const createdTable = createETable()

function createETable () {
    if (table.getElementsByTagName('tr').length < 10){
        const newTr = document.createElement('tr')
        table.appendChild(newTr)
        return createETable()
    }
    if(table.getElementsByTagName('tr')[i].getElementsByTagName('td').length < 10){
        const newTd = document.createElement('td')
        table.getElementsByTagName('tr')[i].appendChild(newTd).textContent = number
        number ++
        return createETable()
    }
    if (i < 9){
        i++
        return createETable()
    }
}

// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вивести зображення з цієї папки отримане випадковим чином (Math.random)

const img = document.createElement('img')
document.body.appendChild(img)
let random = Math.floor((Math.random() * 10) + 1) 

img.setAttribute('src', `./imgs/${random}.jpg`)