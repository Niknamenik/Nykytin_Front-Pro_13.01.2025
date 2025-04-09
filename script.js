const formAddUser = document.querySelector('#add_user_form')
const formEditUser = document.querySelector('#edit_user_form')
const addUserInput = document.querySelector('#add_user')
const editUserInput = document.querySelector('#edit_user')
const tbody = document.querySelector('tbody')
const editBtn = document.querySelector('#edit_user_btn')

window.addEventListener('load', buildATable)

function buildATable(){
    const users = JSON.parse(localStorage.getItem('users'))
    if(users){
        users.forEach((user) => buildARow(user.name, user.id));
    }

}

function buildARow (name, id){
    const tr =  document.createElement('tr')
    const td = document.createElement('td')
    tr.setAttribute('data_id', id)
    td.textContent = name || "Unknown"

    tr.append(td)
    tr.append(createButtons('View', 'view'))
    tr.append(createButtons('Edit', 'edit'))
    tr.append(createButtons('Remove', 'remove'))

    tbody.append(tr)
}

function createButtons (btnName, btnId){
    const td = document.createElement('td')
    const button = document.createElement('button')
    button.setAttribute('id', btnId)
    button.textContent = btnName
    td.append(button)
    return td
}

formAddUser.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = addUserInput.value
    const id = + new Date()

    buildARow(name, id)

    const usersFromLS = JSON.parse(localStorage.getItem('users'))
    if(usersFromLS){
        usersFromLS.push({name:name || "Unknown", id: id})
        localStorage.setItem('users', JSON.stringify(usersFromLS))
    }else{
        localStorage.setItem('users', JSON.stringify([{name:name || "Unknown", id:id}]))}

    formAddUser.reset();
})

tbody.addEventListener('click', (event) => {
    const button = event.target.getAttribute('id')
    const tr = event.target.closest('tr');
    const trId = tr.getAttribute('data_id')

    switch(button){
        case 'view':
            console.log(tr.querySelector("td").textContent, trId)
            break;
        case 'edit':
            editUserInput.removeAttribute('disabled')
            editBtn.removeAttribute('disabled')
            editUserInput.value = tr.querySelector('td').textContent
            editUserInput.focus()

            localStorage.setItem('id_to_edit', trId)
            break;
        case 'remove':
            const usersFromLS = JSON.parse(localStorage.getItem('users'))
            const newUseresToLS = usersFromLS.filter((element) => element.id !== Number(trId))
            localStorage.setItem('users', JSON.stringify(newUseresToLS))
            tr.remove()
            break;
            default:
                break;
    }
})

formEditUser.addEventListener('submit', (event) => {
    event.preventDefault()

    const editedName = editUserInput.value
    const id = +localStorage.getItem('id_to_edit')

    document.querySelector(`tr[data_id="${id}"] td`).textContent = editedName

    const usersFromLS = JSON.parse(localStorage.getItem('users'))
    const indexOfUserToFix = usersFromLS.indexOf(usersFromLS.find((element) => element.id === id))
    console.log(indexOfUserToFix)
    usersFromLS[indexOfUserToFix].name = editedName
    localStorage.setItem('users', JSON.stringify(usersFromLS))

    editUserInput.disabled = true
    editBtn.disabled = true
    formEditUser.reset();
})