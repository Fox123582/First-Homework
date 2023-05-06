import {getPersonFromLocalStorage, saveInLocalStoragePerson} from "./saveInLocalStaragePersonIn.js";
import {changeData} from "./changePersonData.js";
import {errorText} from "./drawTableForCartAndAccount.js";
import {reDrawTotal} from "./changeQuantityOfGoodsAndTotalPrice.js";
import {cartCounter} from "./cartCounter.js";

export function deleteFromTable(){
    let bin = [...document.querySelectorAll('.bin')]
    let trs = [...document.querySelectorAll('.trForProduct')]
    bin.forEach(el =>{
        el.addEventListener('click',()=>{
            let person = getPersonFromLocalStorage()
            let findElement = trs.find(elem => elem.dataset.id === el.dataset.id)
            findElement.remove()
            person.shoppingCart.forEach(element =>{
                if (element.id === findElement.dataset.id){
                    let index = person.shoppingCart.indexOf(element)
                    person.shoppingCart.splice(index,1)
                    saveInLocalStoragePerson(person)
                    changeData(person)
                }
            })
            if (person.shoppingCart.length < 1) {
                errorText('shoppingCart')
            }
            reDrawTotal()
            cartCounter()
        })
    })

}