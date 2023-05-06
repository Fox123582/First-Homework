export function calculatePrice(elem){
    if (elem.sale){
        let priceWithSale  = elem.price - (elem.price/100*elem.salePercent)
        return Math.round(priceWithSale)
    } else return Math.round(elem.price)
}
export function sale(elem){
    if (elem.sale) return `<div class="pastPrice">${elem.price}$</div>
                    <div class="percent">-${elem.salePercent}%</div>`
    else return`<div class="pastPrice disabled"></div>
                    <div class="percent disabled"></div>`
}

export function calculatePriceQuantity(price,quantity){
    return price*quantity
}

export function saleForTable(elem){
    if(!elem.salePercent){
        return ''
    } else {
        return elem.salePercent +'%'
    }
}