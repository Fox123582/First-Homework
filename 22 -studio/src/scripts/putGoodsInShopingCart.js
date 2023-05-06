import {getPersonFromLocalStorage, saveInLocalStoragePerson} from "./saveInLocalStaragePersonIn.js";
import {changeData} from "./changePersonData.js";
import {cartCounter} from "./cartCounter.js";
export function buttonsListener(){
    let buttonsAll = document.querySelectorAll('.butForBuy')
    buttonsAll.forEach(el =>{
        el.addEventListener('click',()=>{
            if(getPersonFromLocalStorage().shoppingCart){
                let person = getPersonFromLocalStorage()
                deleteAndAdd(el,person)
                cartCounter()
            } else{
                window.location.href = '../../html/login.html'
            }
        })
    })
}
function deleteAndAdd(el,person){

    if(el.classList.contains('activeBut')){
        el.classList.remove('activeBut')
        person.shoppingCart.forEach(element =>{
            if(element.id === el.dataset.id){
                let index = person.shoppingCart.indexOf(element)
                person.shoppingCart.splice(index,1)
                saveInLocalStoragePerson(person)
                changeData(person,false)
            }
        })
    }
    else{
        el.classList.add('activeBut')
        person.shoppingCart.push({
            id: `${el.dataset.id}`,
            count:1
        })
        saveInLocalStoragePerson(person)
        changeData(person,false)
    }
}
export function addActive(){
    let allButtons = document.querySelectorAll('.butForBuy')
    let personIds = getPersonFromLocalStorage().shoppingCart

    if (personIds){
        personIds.forEach(el =>{
            allButtons = [...allButtons]
            let findProduct = allButtons.find(elem => el.id === elem.dataset.id)
            if (findProduct) findProduct.classList.add('activeBut')
        })
    }

}
