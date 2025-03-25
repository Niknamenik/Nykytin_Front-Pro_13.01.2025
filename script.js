// Пишемо свій слайдер зображень відображаємо зображення та кнопки Next, Prev з боків від зображення
// При натисканні на Next - показуємо наступне зображення
// При натисканні на Prev - попереднє
// При досягненні останнього зображення – ховати кнопку Next. Аналогічно з першим зображенням та кнопкою Prev.

const slider = document.getElementsByClassName('slider')[0]
const btnNext = document.querySelectorAll('button')[1]
const btnPrev = document.querySelectorAll('button')[0]

let offset = 0

if (offset === 0){
    btnPrev.disabled = true
}
btnNext.addEventListener('click', function (){
    offset -= 400
    slider.style.left = offset + 'px'
    btnPrev.disabled = false
    if(offset === -3600){
        this.disabled = true
    }
    
})
btnPrev.addEventListener('click', function (){
    offset += 400
    slider.style.left = offset + 'px'
    btnNext.disabled = false
    if(offset === 0){
        this.disabled = true
    }
})