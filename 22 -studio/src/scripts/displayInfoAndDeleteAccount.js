import {getPersonFromLocalStorage} from "./saveInLocalStaragePersonIn.js";

export function displayNameEmail(){
    let accountName = document.querySelector('.accountName')
    let accountEmail = document.querySelector('.accountEmail')
    let person = getPersonFromLocalStorage()
    accountEmail.innerText = person.email
    accountName.innerText = person.name
}

function deleteAccount(){
    let person = getPersonFromLocalStorage()
    fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${person.id}`,{
        method:'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            localStorage.removeItem(`loggedInPerson`)
            window.location.href = '../../index.html'
        })
}
export function butDeleteAccount(){
    let deleteAccountBut = document.querySelector('#deleteAccount')

    deleteAccountBut.addEventListener('click',()=>{
        deleteAccount()
    })
}
