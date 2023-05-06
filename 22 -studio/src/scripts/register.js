import {saveInLocalStoragePerson} from "./saveInLocalStaragePersonIn.js";
import {postData} from "./changePersonData.js";
export function getUserDataForRegister(){
    fetch('https://634e9f834af5fdff3a625f84.mockapi.io/users')
        .then(response => response.json())
        .then(data =>{
            submitData(data)
        })
}
function submitData(data){
    const registerForm = document.querySelector('#register')
    registerForm.addEventListener('submit',e =>{
        e.preventDefault()
        const name = document.querySelector('#registerName').value
        const registerEmail = document.querySelector('#registerEmail').value
        const password = document.querySelector('#registerPassword').value
        const verifyPassword = document.querySelector('#verifyPassword').value
        checkData(data,password,verifyPassword,name,registerEmail)

    })
}
function checkData(data,...arg){
    const errorLeftP = document.querySelectorAll('.error p')[1]
    const errorLeft = document.querySelectorAll('.error')[1]
    const user = data.find(el => el.email === arg[3]);

    if (user){
        errorLeftP.innerText = `Email ${user.email} already exist`;
        errorLeft.classList.add('active');
        return false
    } else if(arg[0] !== arg[1]){
        errorLeftP.innerText = `Password not matched`;
        errorLeft.classList.add('active');
        return false
    } else {
        createUser(arg[2],arg[3],arg[0],true)
    }
}
function createUser(name,email,password,status){
    class User {
        constructor(name,email,password,status) {
            this.name = name
            this.email = email
            this.password = password
            this.status = status
        }
    }
    let newUser = new User(name,email,password,status)
    postData(newUser)
    return newUser
}