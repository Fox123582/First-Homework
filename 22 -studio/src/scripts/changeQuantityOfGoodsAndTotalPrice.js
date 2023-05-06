import {getPersonFromLocalStorage, saveInLocalStoragePerson} from "./saveInLocalStaragePersonIn.js";
import {changeData} from "./changePersonData.js";
import {calculatePrice, calculatePriceQuantity} from "./calculatePriceAndSale.js";

export function getInputs(data){
    let inputs = [...document.querySelectorAll('input[type = number]')]
    reDrawTotal()
    inputs.forEach(el =>{
        el.addEventListener('input',()=>{
            let currentInputValue = Number(el.value)
            let person = getPersonFromLocalStorage()
            let product
            person.shoppingCart.forEach(element =>{
                if (element.id === el.dataset.id){
                    element.count = currentInputValue
                    product = data.find(el => el.id === element.id)
                }
            })
            reDrawPrice(product,currentInputValue)

            saveInLocalStoragePerson(person)
            changeData(person,false)
        })
    })
}

function reDrawPrice(currentProduct,currentValue){
    let prices = [...document.querySelectorAll('.total')]
    let findTotal = prices.find(elem =>elem.dataset.id === currentProduct.id)
    findTotal.innerText = '$' + calculatePriceQuantity(calculatePrice(currentProduct),currentValue)
    reDrawTotal()
}

export function reDrawTotal(){
    let prices = [...document.querySelectorAll('.total')]
    let totalP = document.querySelector('.totalPrice')
    let totalPrice = 0
    prices.forEach(el =>{
        totalPrice = totalPrice + Number(el.innerText.match(/\d+/g))
    })
    totalP.innerText = '$ ' + totalPrice
}