const form = document.getElementById('formData')
const submit = document.getElementById('submit')
let i = 0
form.addEventListener('submit', handleSubmit)

function handleSubmit (event){
    form.style = 'display:none'
    const formData = new FormData(form)
    event.preventDefault();
    const test = [...formData.keys()]
    console.log(test)
    for(let key of formData.keys()){
        console.log(`${key} : ${formData.get(`${key}`)}`)
    }
    createATable(formData);
}

function createATable (formData){
    if(!document.body.querySelector('table')){
        const table = document.createElement('table');
        document.body.appendChild(table)
        const td = document.createElement('td')
        table.appendChild(td)
    }
}