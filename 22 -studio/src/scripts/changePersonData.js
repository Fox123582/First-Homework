import {saveInLocalStoragePerson} from "./saveInLocalStaragePersonIn.js";

export function changeData (user,boolean){
    fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res =>res.json())
        .then(data =>{
            if(boolean){
                reload()
            } else {
                return
            }

        })
}

function reload(){
    window.location.href = '../../index.html'
}
export function postData(user){
    fetch(`https://634e9f834af5fdff3a625f84.mockapi.io/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res =>res.json())
        .then(data =>{
            reload()
            saveInLocalStoragePerson(data)
        })
}