import {getPersonFromLocalStorage} from "./saveInLocalStaragePersonIn.js";

export function cartCounter(){
    let personCart = getPersonFromLocalStorage().shoppingCart
    let countProducts = document.querySelector('.countProducts')
    if (personCart){
        countProducts.innerText = personCart.length
    }

}