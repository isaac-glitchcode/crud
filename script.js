import { users } from './users.js'

function printUsers(users){
    const tableBody = document.getElementById('table-body')
    tableBody.innerHTML = ''
    users.forEach((user, index) => {
        tableBody.innerHTML +=`<tr>
                                    <td>${index+1}</td>
                                    <td>${user.name}</td>
                                    <td>${user.email}</td>
                                    <td>${user.age}</td>
                                    <td>${user.gender == 'female' ? 'femenimo' : 'masculino'}</td>
                                    <td>
                                        <button onclick="deleteUser(${index})"  class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>` 
    })

}

function addNewUser(){
    const inputName = document.getElementById('input-name')
    const inputEmail = document.getElementById('input-email')
    const inputAge = document.getElementById('input-age')
    const inputGender = document.getElementById('select-gender')

    const newUser = {
        name: inputName.value,
        email: inputEmail.value,
        age: inputAge.value,
        gender: inputGender.value
    }
    users.unshift(newUser)
    printUsers(users)
    document.getElementById('form').reset()
    // if( filter() == newUser.gender){ 
    //     filter()  
    // }else{
    //     printUsers()
    // }
}

function deleteUser(index){
    users.splice(index,1)
    printUsers(users)
}

function filter(){
    const filterOption = document.getElementById('select-filter').value

    switch(filterOption){
        case 'all':
            printUsers(users)
            break
        case 'academlo':
            getEmails()
            break
        case 'female':
            getGender('female')
            break
        case 'sort':
            getSortedByName()
            break
        default:
            alert('Unknow')
    }
}
function getEmails(){
    const emailUsers = users.filter(function(user){
       return user.email.endsWith('@academlo.com')
   })
   printUsers(emailUsers)
}
function getGender(gender){
    const genderUsers = users.filter(function(user){
        return user.gender == gender
    })
    printUsers(genderUsers)
}
function getSortedByName(){
    users.sort((prev, next) => {
        return prev.name > next.name ? 1 : -1
    })
    printUsers(users)
}

// Llamadas al cargar la página
printUsers(users)
// Volvemos la función addUser parte del objeto window
window.addNewUser = addNewUser
window.deleteUser = deleteUser
window.filter = filter


// Ejercicios:
// Asingar el id del nuevo usuario
// Agregar el nuevo usuario al inicio
// Hacer que funcione el botón eliminar
