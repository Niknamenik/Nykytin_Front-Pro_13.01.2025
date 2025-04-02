
const categorysArr = document.getElementsByClassName('category')[0].querySelectorAll('li');

categorysArr.forEach((element) => element.addEventListener('click', showProducts))

function showProducts (){
    const parantUl = document.getElementsByClassName(`${this.innerHTML}_products`)[0]
    const allUl = document.getElementsByClassName('products')[0].querySelectorAll('ul')
    allUl.forEach((element) => element.style = 'display:none')
    parantUl.style = 'display:block'
    
    const allLi = parantUl.querySelectorAll('li')
    allLi.forEach((element) => element.addEventListener('click', showInfo))
    const info = document.getElementsByClassName('info')[0]
    info.innerHTML = ''
    
}
function showInfo (){
    const info = document.getElementsByClassName('info')[0]
    const p = document.createElement('p')
    const btn = document.createElement('button')
    const li = this
    getLi(li)
    info.style = 'display: block;'
    info.innerHTML = ''
    info.appendChild(p).textContent = `info about ${this.getAttribute('id')}`
    info.appendChild(btn).textContent = 'Buy'
    btn.addEventListener('click', function () {
        document.querySelector('form').style = "display:flex"
    })
}

let clickedProduct;
function getLi (li){
    clickedProduct = li
    return clickedProduct
}

const form = document.getElementById('formData')
form.addEventListener('submit', handleSubmit)

function handleSubmit (event){
    form.style = 'display:none'
    const formData = new FormData(form)
    event.preventDefault();
    createATable(formData);
}

function createATable (formData){

    if(!document.body.querySelector('table')){
        const table = document.createElement('table');
        document.body.appendChild(table)
    }
    const keysArr = [...formData.keys()]

    for(let i = 0; i < keysArr.length + 1; i++){
        const newTr = document.createElement('tr')
        const firstTd = document.createElement('td')
        const table = document.querySelector('table')
        const secondTd = document.createElement('td')
        if(i === keysArr.length){
            table.prepend(newTr)
            newTr.appendChild(firstTd).textContent = `${clickedProduct.getAttribute('id')}`
            newTr.appendChild(secondTd).textContent = `${document.querySelector('p').innerText}`
            return
        }
        table.appendChild(newTr)
        newTr.appendChild(firstTd).innerHTML = keysArr[i]
        newTr.appendChild(secondTd).innerHTML = formData.get(`${keysArr[i]}`)
        
    }
    
}