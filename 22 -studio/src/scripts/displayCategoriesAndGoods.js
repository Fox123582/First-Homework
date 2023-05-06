import {calculatePrice, sale} from "./calculatePriceAndSale.js";
import {addActive, buttonsListener} from "./putGoodsInShopingCart.js";
import {cartCounter} from "./cartCounter.js";

export function getData(){
    fetch('https://634e9f834af5fdff3a625f84.mockapi.io/products')
        .then(res => res.json())
        .then(data =>{
            displayAll(data)
            addActive()
            buttonsListener()
            cartCounter()
        })
}

function getCategories(data){
    let categories = []
    data.forEach(el =>{
        categories.push(el.category)
    })
    categories = new Set(categories)
    return categories
}
function displayAll(data){
    const categories = getCategories(data)
    const wrapForContent = document.querySelector('.wrapForContent')
    const createH = document.createElement('h2')

    categories.forEach(el =>{
        const wrapForCategories = document.createElement('div')
        wrapForCategories.classList.add('wrapForCategories')
        createH.innerText = el
        wrapForCategories.append(createH)

        data.forEach(elem =>{
            if (el === elem.category){
                wrapForCategories.innerHTML = wrapForCategories.innerHTML + `
        <section class="category" data-name="${elem.title}">
            <div class="category__container">
                <img src="../images/products/${elem.img}.png" alt="">
                <div class="name">${elem.title}</div>
                <div class="wrapForDiscount">
                    ${sale(elem)}
                </div>
                <div class="price">${calculatePrice(elem)}$</div>
                <button data-id = ${elem.id} class="butForBuy"><img src="../images/shopping-cart.png" alt=""></button>
            </div>
        </section>`
            }
        })
        wrapForContent.append(wrapForCategories)
    })
}