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

    for(let i = 0; i < keysArr.length; i++){
        const newTr = document.createElement('tr')
        const firstTd = document.createElement('td')
        const table = document.querySelector('table')
        const secondTd = document.createElement('td')

        if(keysArr[i].slice(0, 8) !== 'language'){
            table.appendChild(newTr)
            newTr.appendChild(firstTd).innerHTML = keysArr[i]
            newTr.appendChild(secondTd).innerHTML = formData.get(`${keysArr[i]}`)
        }
        else{
            if(document.querySelectorAll('td')[document.querySelectorAll('td').length - 2].innerHTML !== 'languages'){
                table.appendChild(newTr)
                newTr.appendChild(firstTd).innerHTML = `${keysArr[i].slice(0, 8)}s`
                newTr.appendChild(secondTd).innerHTML = formData.get(`${keysArr[i]}`)
            }
            const lastTd = document.querySelectorAll('td')[document.querySelectorAll('td').length - 1]
            if(formData.get(`${keysArr[i + 1]}`) !== null){
            lastTd.innerHTML = lastTd.innerHTML + `, ${formData.get(`${keysArr[i + 1]}`)}`
            }
        }
    }
    
}