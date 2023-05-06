
import {saveInLocalStoragePerson} from "./saveInLocalStaragePersonIn.js";
import {changeData} from "./changePersonData.js";
export function getUserData(){
    fetch('https://634e9f834af5fdff3a625f84.mockapi.io/users')
        .then(response => response.json())
        .then(data =>{
             return submitData(data)
        })
}
function submitData(data){
    const signInForm = document.querySelector('#signIn')
    signInForm.addEventListener('submit',e =>{
        e.preventDefault()
        const email = document.querySelector('#emailSignIn').value
        const password = document.querySelector('#passwordSignIn').value
        return checkData(data, email, password)
    })
}
function checkData(data,...arg){
    const errorLeftP = document.querySelector('.error p')
    const errorLeft = document.querySelector('.error')

    const user = data.find(el => el.email === arg[0]);
    if (user) {
        if (user.password === arg[1]) {
            user.status = true
            changeData(user,true)
            saveInLocalStoragePerson(user)
            return true;
        } else {
            errorLeftP.innerText = 'Password invalid';
            errorLeft.classList.add('active');
            return false;
        }
    }
    errorLeftP.innerText = 'Email invalid';
    errorLeft.classList.add('active');
    return false;
}