import {getPersonFromLocalStorage} from "./saveInLocalStaragePersonIn.js";
import {calculatePrice, calculatePriceQuantity, saleForTable} from "./calculatePriceAndSale.js";
import {getInputs} from "./changeQuantityOfGoodsAndTotalPrice.js";
import {deleteFromTable} from "./deleteFromTable.js";
export function getDataForShoppingCartAndAccount(category){
    fetch('https://634e9f834af5fdff3a625f84.mockapi.io/products')
        .then(res => res.json())
        .then(data =>{
            findElements(data,category)
            if (category !== 'orders'){
                getInputs(data)
                deleteFromTable()
            }

        })
}
function findElements(data,category){
    let person = getPersonFromLocalStorage()
    if (person[category].length > 0){
        person[category].forEach(el =>{
            let product = data.find(element => el.id === element.id)
            createTable(product,el.count,category)
        })
    } else {
        errorText(category)
    }

}
export function errorText (category){
    let wrapForLeftSide = document.querySelector('.wrapForLeftSide')
    let table = document.querySelector('#tableForCart')
    table.remove()
    wrapForLeftSide.innerHTML = wrapForLeftSide.innerHTML + `
        <div class="error">
                <p>Your ${category} is empty</p>
        </div>
        `
}
function createTable(product,quantityElem,category){
    let tableBody = document.querySelector('#tableForCart tbody')
    tableBody.innerHTML = tableBody.innerHTML + `
                    <tr class="trForProduct" data-id = "${product.id}">
                        <td>
                            <div class="nameImg">
                                <img src="../../images/products/${product.img}.png" alt="">
                                <p>${product.title}</p>
                            </div>
                        </td>
                        <td class="priceForOne" data-id = "${product.id}">$ ${product.price}</td>
                        <td class="tableSale"><p>${saleForTable(product)}</p></td>
                        ${checkCategory(category,product,quantityElem)}
                        <td data-id = "${product.id}" class="total">$ ${calculatePriceQuantity(calculatePrice(product),quantityElem)}</td>
                        ${bin(category,product)}
                    </tr>
        `
}

function checkCategory(category,product,quantityElem){
    if (category === 'shoppingCart'){
        return ` <td><input data-id = "${product.id}" value="${quantityElem}"  oninput="this.value = Math.max(this.value, 1)" min="1" type="number"></td>`
    } else {
        return `<td>${quantityElem}</td>`
    }
}

function bin(category,product){
    if (category === 'shoppingCart'){
        return `<td><img data-id="${product.id}" class="bin" src="../images/delete.png" alt=""></td>`
    } else return ''
}