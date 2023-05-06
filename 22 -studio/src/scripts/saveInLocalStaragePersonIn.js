import {changeData} from "./changePersonData.js";

export function getPersonFromLocalStorage(){
    let person = JSON.parse(localStorage.getItem(`loggedInPerson`)) || []
    return person
}
export function saveInLocalStoragePerson (user){
    localStorage.setItem(`loggedInPerson`,JSON.stringify(user))
}
export function deletePerson(){
    let person = JSON.parse(localStorage.getItem('loggedInPerson')) || []
    if (person.email){
        person.status = false
        changeData(person,true)
        localStorage.removeItem(`loggedInPerson`);
    }
}
