import {getPersonFromLocalStorage, saveInLocalStoragePerson} from "./saveInLocalStaragePersonIn.js";
import {changeData} from "./changePersonData.js";

export function completeOrder(){
    let completeOrderBut = document.querySelector('#completeOrder')
    completeOrderBut.addEventListener('click',()=>{
        let person = getPersonFromLocalStorage()
        if (person.shoppingCart.length > 0){
            person.shoppingCart.forEach(el =>{
                person.orders.push(el)
            })
            person.shoppingCart.length = 0
            saveInLocalStoragePerson(person)
            changeData(person,true)

        } else {
            return false
        }
    })
}