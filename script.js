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

function turnOffSuperfluous (){
    const products = document.querySelector ('.products').children
    const selectedProduct = [...products].find((element) => element.getAttribute('style') === "display: block;")
    if(selectedProduct){
        selectedProduct.style = 'display: none'
    }
    document.querySelector ('.info').style = 'display: none'
}

const form = document.getElementById('formData')
form.addEventListener('submit', handleSubmit)

function handleSubmit (event){
    form.style = 'display:none'
    const formData = new FormData(form)
    event.preventDefault();
    turnOffSuperfluous ();
    createATable(formData);
    saveOrder(formData);

}

function createATable (formData){

    const table = document.createElement('table');
    document.body.appendChild(table)

    const keysArr = [...formData.keys()]

    for(let i = 0; i < keysArr.length + 1; i++){
        const newTr = document.createElement('tr')
        const firstTd = document.createElement('td')
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

function saveOrder (formData){
    let order = {}
    const keysArr = [...formData.keys()]
    for(let i = 0; i < keysArr.length + 1; i ++){
        if(i < keysArr.length){
            order[keysArr[i]] = formData.get(`${keysArr[i]}`)
        }
        order[clickedProduct.getAttribute('id')] = `${document.querySelector('p').innerText}`
        const currnetDate = new Date()
        order['date'] = `${currnetDate.getDate()}.${currnetDate.getMonth()}.${currnetDate.getFullYear()}`
        order['price'] = `${Math.floor(Math.random() * 1000) + 1}`
        order['order_No'] = `${Date.now()}`
    }
    const ordersFromLocalStorage = localStorage.getItem('orders')
    if(!ordersFromLocalStorage){
        localStorage.setItem('orders', JSON.stringify([order]))
    }
    if(ordersFromLocalStorage){
        const orders = JSON.parse(ordersFromLocalStorage)
        orders.push(order)
        localStorage.setItem('orders', JSON.stringify(orders))
    }
}

const basketBtn = document.querySelector('.basket_btn')

basketBtn.addEventListener('click', showOrders)

function showOrders(){
    document.querySelector('.category').style = 'display: none'
    turnOffSuperfluous ()
    const tables = document.getElementsByTagName('table');
    [...tables].forEach((element) => element.style = "display: none")
    document.querySelector('.basket_conteiner').style = "display: block"
    if(document.querySelector('.basket').children[0]){
        return
    }
    const ordersFromLocalStorage = JSON.parse(localStorage.getItem('orders'))
    
    for(let i = 0; i < ordersFromLocalStorage.length; i++){
        const basketList = document.querySelector('.basket')
        const li = document.createElement("li")
        const orderInfo = document.createElement('ul')
        const delBtn = document.createElement('button')
        const showInfoBtn = document.createElement('button')
        li.setAttribute('class', 'order')
        orderInfo.setAttribute('class', 'hidden')
        showInfoBtn.addEventListener('click', showOrderInfo)
        delBtn.addEventListener('click', deleteOrder)
        basketList.append(li)
        showInfoBtn.innerHTML= `↓`
        delBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 360.004 360.004" xml:space="preserve">
                            <g id="XMLID_859_">
                                <path id="XMLID_860_" d="M290.087,146.061L297.298,110H315c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-30h-14.39   l-65.037-64.628c-5.877-5.839-15.374-5.809-21.213,0.067c-5.839,5.877-5.809,15.374,0.067,21.213L228.049,80H101.091l44.504-44.404   c5.864-5.852,5.875-15.349,0.024-21.213c-5.852-5.865-15.349-5.875-21.213-0.024L58.616,80H45H15C6.716,80,0,86.716,0,95   c0,8.284,6.716,15,15,15h17.704l27.588,137.895c1.402,7.008,7.555,12.054,14.703,12.057l76.081,0.03   c7.283,50.838,51.11,90.044,103.929,90.044c57.897,0,105-47.103,105-105C360.004,199.428,330.784,160.531,290.087,146.061z    M63.298,110h203.405l-6.034,30.18c-1.876-0.1-3.765-0.154-5.665-0.154c-52.789,0-96.597,39.161-103.917,89.957l-63.79-0.025   L63.298,110z M255.004,320.026c-41.355,0-74.999-33.645-74.999-75c0-0.009,0.001-0.018,0.001-0.026c0-0.002,0-0.004,0-0.006   c0-0.001,0-0.002,0-0.002c0.019-41.34,33.655-74.966,74.998-74.966c41.355,0,75,33.645,75,75.001   C330.004,286.382,296.359,320.026,255.004,320.026z"/>
                                <path id="XMLID_864_" d="M285.004,230.026h-60c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15   C300.004,236.742,293.288,230.026,285.004,230.026z"/>
                            </g>
                            </svg>`
        li.innerHTML = `<span>Price: ${ordersFromLocalStorage[i].price}$</span>___<span>Date: ${ordersFromLocalStorage[i].date}`
        li.appendChild(delBtn)
        li.appendChild(showInfoBtn)
        for(let key in ordersFromLocalStorage[i]){
            li.append(orderInfo)
            const hiddenLi = document.createElement('li')
            orderInfo.appendChild(hiddenLi).innerHTML = `<span>${key}:</span> <span>${ordersFromLocalStorage[i][key]}</span>`

        }
        
    }

}
 function showOrderInfo(){
    const hiddenUl = this.parentElement.querySelector('ul')
    hiddenUl.classList.toggle("hidden")
 }


 function deleteOrder(){
    if(confirm('Ви дiсно хочете видалити замовлення?')){
        const li = this.parentElement
        const basket = li.parentElement
        basket.removeChild(li)
        
    }

 }

 const basketCloser = document.querySelector('.close_basket')
 basketCloser.addEventListener('click', closeBasket)

 function closeBasket (){
    document.querySelector('.category').style = 'display: block'
    document.querySelector('.basket_conteiner').style = 'display: none'
 }  
