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

function createETable () {
    if(!table.innerHTML){
        table.appendChild(document.createElement('tr'))
    }

}